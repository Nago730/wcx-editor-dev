import type { GraphData, GraphNode } from '@/shared/types/graph';
export const getNode = (g: GraphData, id: string): GraphNode | undefined => g.nodes[id];
export const getChildren = (g: GraphData, id: string): GraphNode[] =>
  (g.nodes[id]?.children ?? []).map(cid => g.nodes[cid]).filter(Boolean) as GraphNode[];
