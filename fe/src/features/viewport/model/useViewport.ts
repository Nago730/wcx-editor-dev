import { create } from 'zustand';

interface ViewportState {
  zoom: number; offset: { x: number; y: number };
  setZoom: (z: number) => void; setOffset: (o: { x: number; y: number }) => void;
}
export const useViewport = create<ViewportState>((set) => ({
  zoom: 1,
  offset: { x: 0, y: 0 },
  setZoom: (z) => set({ zoom: Math.max(0.25, Math.min(4, z)) }),
  setOffset: (o) => set({ offset: o }),
}));
