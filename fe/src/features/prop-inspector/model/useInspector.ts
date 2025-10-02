import { create } from 'zustand';
import type { ComponentMeta } from '@/shared/types/meta';

interface InspectorState {
  meta: ComponentMeta | null;
  setMeta: (m: ComponentMeta | null) => void;
}
export const useInspector = create<InspectorState>((set) => ({ meta: null, setMeta: (m) => set({ meta: m }) }));
