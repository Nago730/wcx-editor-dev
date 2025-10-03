'use client';
import { useEffect, useRef, useState } from 'react';
import { usePreviewState } from '@/features/preview-runtime/model/usePreviewState';
import { useSelection } from '@/features/selection/model/useSelection';
import { drawOutline, drawGuideLine, drawGuideLabel } from '../lib/drawing';
import { getBoxRelativeTo } from '../lib/measure';
import { resizeCanvasToDisplaySize } from '../lib/geometry';
import { getClickableTypes } from '@/entities/components/api/getPalette';
import { computeSectionGapGuides } from '../lib/guides';

export default function CanvasLayer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const anchors    = usePreviewState(s => s.anchors);
  const selected   = useSelection(s => s.selected);
  const setSelected= useSelection(s => s.setSelected);
  const [allowed, setAllowed] = useState<Set<string>>(new Set());

  useEffect(() => { getClickableTypes().then(setAllowed); }, []);

  // overlay 위치/크기 동기화 (viewport fixed)
  useEffect(() => {
    const scrollEl = document.getElementById('preview-scroll') as HTMLElement | null;
    if (!scrollEl || !wrapperRef.current || !canvasRef.current) return;

    const wrapper = wrapperRef.current!;
    const canvas  = canvasRef.current!;

    const syncRect = () => {
      const rect = scrollEl.getBoundingClientRect();
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

    const ro = new ResizeObserver(syncRect);
    ro.observe(scrollEl);

    const onScroll = () => syncRect();
    const onResize = () => syncRect();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    syncRect();

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // draw loop: 선택 아웃라인 + 섹션 간 보조선/라벨
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas  = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = resizeCanvasToDisplaySize(canvas);

    const redraw = () => {
      resizeCanvasToDisplaySize(canvas);
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // 1) 섹션 사이 보조선
      const guides = computeSectionGapGuides(anchors, wrapper);
      for (const g of guides) {
        drawGuideLine(ctx, g.x1, g.x2, g.y);
        // 라벨은 중앙 근처에
        const cx = g.x1 + (g.x2 - g.x1) / 2 - 24;
        drawGuideLabel(ctx, `${Math.round(g.gap)}px`, Math.max(8, cx), g.y);
      }

      // 2) 선택 아웃라인
      if (selected && anchors[selected]) {
        const b = getBoxRelativeTo(anchors[selected], wrapper);
        drawOutline(ctx, b);
      }
      raf = requestAnimationFrame(redraw);
    };

    let raf = requestAnimationFrame(redraw);
    return () => cancelAnimationFrame(raf);
  }, [anchors, selected]);

  // 클릭 처리 (closest + clickable 타입 필터)
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
