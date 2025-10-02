import { create } from 'zustand';

interface SelState { selected: string | null; setSelected: (id: string | null) => void; }
export const useSelection = create<SelState>((set) => ({ selected: null, setSelected: (id) => set({ selected: id }) }));
