import { create } from 'zustand';

interface PaletteState {
  items: { type: string; icon?: string }[];
  setItems: (v: { type: string; icon?: string }[]) => void;
}
export const usePalette = create<PaletteState>((set) => ({
  items: [],
  setItems: (v) => set({ items: v }),
}));
