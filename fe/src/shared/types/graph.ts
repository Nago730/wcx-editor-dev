export interface GraphNode {
  id: string;
  type: string;
  props: Record<string, any>;
  children?: string[];
}
export interface GraphData {
  rootId: string;
  nodes: Record<string, GraphNode>;
}
