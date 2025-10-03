export function drawOutline(ctx: CanvasRenderingContext2D, b: {x:number;y:number;w:number;h:number}) {
  ctx.save();
  ctx.lineWidth = 2;
  ctx.setLineDash([6,4]);
  ctx.strokeStyle = '#3b82f6';
  ctx.strokeRect(b.x + 0.5, b.y + 0.5, b.w - 1, b.h - 1);
  ctx.restore();
}

export function drawGuideLine(ctx: CanvasRenderingContext2D, x1: number, x2: number, y: number) {
  ctx.save();
  ctx.beginPath();
  ctx.setLineDash([4, 3]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(59,130,246,0.7)'; // blue-500 70%
  ctx.moveTo(x1, y + 0.5);
  ctx.lineTo(x2, y + 0.5);
  ctx.stroke();
  ctx.restore();
}

export function drawGuideLabel(ctx: CanvasRenderingContext2D, text: string, x: number, y: number) {
  ctx.save();
  ctx.font = '12px Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif';
  const padding = 4;
  const metrics = ctx.measureText(text);
  const w = metrics.width + padding * 2;
  const h = 18;

  // 라벨 배경(반투명)
  ctx.fillStyle = 'rgba(17,24,39,0.8)'; // gray-900 80%
  ctx.fillRect(x, y - h / 2, w, h);

  // 테두리 약간
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.strokeRect(x + 0.5, y - h / 2 + 0.5, w - 1, h - 1);

  // 텍스트
  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + padding, y);
  ctx.restore();
}
