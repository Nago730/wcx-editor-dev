export function drawOutline(ctx: CanvasRenderingContext2D, b: {x:number;y:number;w:number;h:number}) {
  ctx.save();
  ctx.lineWidth = 2;
  ctx.setLineDash([6,4]);
  ctx.strokeStyle = '#3b82f6';
  ctx.strokeRect(b.x + 0.5, b.y + 0.5, b.w - 1, b.h - 1);
  ctx.restore();
}
