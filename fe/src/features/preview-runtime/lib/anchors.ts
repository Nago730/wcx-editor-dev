/** Collect nodes with data-anch attribute and return a map. */
export function collectAnchors(root: HTMLElement) {
  const map: Record<string, HTMLElement> = {};
  root.querySelectorAll<HTMLElement>('[data-anch]').forEach(el => {
    const id = el.getAttribute('data-anch');
    if (id) map[id] = el;
  });
  return map;
}
