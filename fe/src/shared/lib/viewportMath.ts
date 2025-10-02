export const applyZoom = (v: number) => Math.max(0.25, Math.min(4, v));
export const screenToWorld = (x: number, y: number, zoom: number, ox: number, oy: number) => ({
  x: (x + ox) / zoom,
  y: (y + oy) / zoom,
});
export const worldToScreen = (x: number, y: number, zoom: number, ox: number, oy: number) => ({
  x: x * zoom - ox,
  y: y * zoom - oy,
});
