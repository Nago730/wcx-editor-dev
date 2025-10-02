import { create } from 'zustand';

interface OverlayState { hovering: string | null; setHovering: (id: string | null) => void; }
export const useOverlayState = create<OverlayState>((set) => ({
  hovering: null,
  setHovering: (id) => set({ hovering: id }),
}));
