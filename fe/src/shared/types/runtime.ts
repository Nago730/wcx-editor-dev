export type AnchorId = string;
export type AnchorMap = Record<AnchorId, HTMLElement>;

export interface PreviewMountResult {
  rootEl: HTMLElement;
  anchors: AnchorMap;
}
