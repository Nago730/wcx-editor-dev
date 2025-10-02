'use client';
import { useEffect, useRef, useState } from 'react';
import { usePreviewState } from '@/features/preview-runtime/model/usePreviewState';
import { useSelection } from '@/features/selection/model/useSelection';
import { drawOutline } from '../lib/drawing';
import { getBoxRelativeTo } from '../lib/measure';
import { resizeCanvasToDisplaySize } from '../lib/geometry';
import { getClickableTypes } from '@/entities/components/api/getPalette';

export default function CanvasLayer() {
  const wrapperRef = useRef<HTMLDivElement>(null); // ★ fixed overlay wrapper
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const anchors    = usePreviewState(s => s.anchors);
  const selected   = useSelection(s => s.selected);
  const setSelected= useSelection(s => s.setSelected);
  const [allowed, setAllowed] = useState<Set<string>>(new Set());

  useEffect(() => { getClickableTypes().then(setAllowed); }, []);

  // 중앙 스크롤 컨테이너의 현재 뷰포트 사각형에 오버레이 고정
  useEffect(() => {
    const scrollEl = document.getElementById('preview-scroll') as HTMLElement | null;
    if (!scrollEl || !wrapperRef.current || !canvasRef.current) return;

    const wrapper = wrapperRef.current!;
    const canvas  = canvasRef.current!;

    const syncOverlayRect = () => {
      const rect = scrollEl.getBoundingClientRect(); // 뷰포트 기준
      // wrapper를 뷰포트에 고정하고, 중앙 컨테이너 영역만 덮게 위치/크기 설정
      wrapper.style.position = 'fixed';
      wrapper.style.left = `${rect.left}px`;
      wrapper.style.top  = `${rect.top}px`;
      wrapper.style.width  = `${rect.width}px`;
      wrapper.style.height = `${rect.height}px`;
      wrapper.style.pointerEvents = 'none';
      wrapper.style.zIndex = '999';

      canvas.style.width  = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      resizeCanvasToDisplaySize(canvas);
    };

    const ro = new ResizeObserver(syncOverlayRect);
    ro.observe(scrollEl);

    // 스크롤/리사이즈 시 위치 갱신
    const onScroll = () => syncOverlayRect();
    const onResize = () => syncOverlayRect();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // 초기 1회
    syncOverlayRect();

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // 그리기 루프 (wrapper는 뷰포트 고정이므로 relative 기준으로 그대로 그리면 됨)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas  = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = resizeCanvasToDisplaySize(canvas);

    const redraw = () => {
      resizeCanvasToDisplaySize(canvas);
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      if (selected && anchors[selected]) {
        const b = getBoxRelativeTo(anchors[selected], wrapper);
        drawOutline(ctx, b);
      }
      raf = requestAnimationFrame(redraw);
    };

    let raf = requestAnimationFrame(redraw);
    return () => cancelAnimationFrame(raf);
  }, [anchors, selected]);

  // 클릭 → 가장 가까운 [data-anch] → 허용 타입만 선택
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>('[data-anch]');
      if (!el) { setSelected(null); return; }
      const type = el.dataset.type || '';
      const id   = el.getAttribute('data-anch');
      if (id && allowed.has(type)) setSelected(id); else setSelected(null);
    };
    window.addEventListener('click', onClick, { passive: true });
    return () => window.removeEventListener('click', onClick);
  }, [allowed, setSelected]);

  return (
    <div ref={wrapperRef}>
      <canvas ref={canvasRef} className="block bg-transparent" />
    </div>
  );
}
