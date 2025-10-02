/** Tiny pub-sub for cross-feature signals */
export type Handler<T> = (payload: T) => void;

export function createBus<T = unknown>() {
  const handlers = new Set<Handler<T>>();
  return {
    on(h: Handler<T>) { handlers.add(h); return () => handlers.delete(h); },
    emit(p: T) { handlers.forEach(h => h(p)); },
    clear() { handlers.clear(); },
  };
}
