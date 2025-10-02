// 요소(뷰포트 기준) → 오버레이 래퍼(뷰포트 기준 fixed) 상대 좌표로 변환
export function getBoxRelativeTo(el: HTMLElement, relativeEl: HTMLElement) {
  const r = el.getBoundingClientRect();
  const rr = relativeEl.getBoundingClientRect();
  return { x: r.left - rr.left, y: r.top - rr.top, w: r.width, h: r.height };
}
