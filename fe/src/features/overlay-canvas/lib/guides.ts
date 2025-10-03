// 섹션 사이 간격 보조선 계산
// anchors: data-anch -> HTMLElement
// wrapper: 오버레이 래퍼(뷰포트 fixed) 엘리먼트
export interface SectionGapGuide {
    y: number;                 // wrapper 기준 Y (가로 보조선 위치)
    x1: number; x2: number;    // 선의 시작/끝 X
    gap: number;               // 두 섹션 사이 실제 간격(px)
  }
  
  export function computeSectionGapGuides(
    anchors: Record<string, HTMLElement>,
    wrapper: HTMLElement
  ): SectionGapGuide[] {
    // 1) 현재 보이는 섹션들만 추출
    const sections: { el: HTMLElement; rect: DOMRect }[] = [];
    const wrect = wrapper.getBoundingClientRect();
  
    Object.values(anchors).forEach((el) => {
      if (el.dataset.type !== 'Section') return;
      const r = el.getBoundingClientRect();
      // 화면에 전혀 보이지 않는 섹션은 제외
      const visible =
        r.bottom >= wrect.top && r.top <= wrect.bottom && r.width > 0 && r.height > 0;
      if (!visible) return;
      sections.push({ el, rect: r });
    });
  
    // 2) Y 순으로 정렬
    sections.sort((a, b) => a.rect.top - b.rect.top);
  
    // 3) 인접 섹션 쌍의 gap 가로 보조선 계산
    const guides: SectionGapGuide[] = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const A = sections[i].rect;
      const B = sections[i + 1].rect;
  
      // 두 섹션 사이 간격(뷰포트 기준)
      const gap = Math.max(0, B.top - A.bottom);
  
      // wrapper 기준 좌표로 변환
      const y = (A.bottom + B.top) / 2 - wrect.top;
      const left = Math.max(A.left, B.left) - wrect.left;        // 겹치는 최소 시작 X
      const right = Math.min(A.right, B.right) - wrect.left;      // 겹치는 최대 끝 X
      const x1 = Number.isFinite(left) ? left : 0;
      const x2 = Number.isFinite(right) && right > x1 ? right : (wrect.width);
  
      guides.push({ y, x1, x2, gap });
    }
  
    return guides;
  }
  