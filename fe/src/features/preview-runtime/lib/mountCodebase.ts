// Inject final HTML string (rendered result of React app) into target container
export function mountCodebase(target: HTMLElement, html: string) {
  target.innerHTML = html;
  }