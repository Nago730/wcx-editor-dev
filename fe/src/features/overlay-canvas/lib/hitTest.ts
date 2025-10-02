export function pointInBox(x: number, y: number, b: {x:number;y:number;w:number;h:number}) {
  return x >= b.x && y >= b.y && x <= b.x + b.w && y <= b.y + b.h;
}
