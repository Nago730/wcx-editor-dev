import { create } from 'zustand';
import type { AnchorMap } from '@/shared/types/runtime';

interface PreviewState {
  rootEl: HTMLElement | null;
  anchors: AnchorMap;
  setRootEl: (el: HTMLElement | null) => void;
  setAnchors: (m: AnchorMap) => void;
}

export const usePreviewState = create<PreviewState>((set) => ({
  rootEl: null,
  anchors: {},
  setRootEl: (el) => set({ rootEl: el }),
  setAnchors: (m) => set({ anchors: m }),
}));
