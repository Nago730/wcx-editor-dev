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

export const graph: GraphData = {
  rootId: 'root',
  nodes: {
    root: { id: 'root', type: 'Page', props: {}, children: ['hero', 'cta'] },
    hero: { id: 'hero', type: 'Section', props: { bg: '#ffffff' }, children: ['title', 'desc'] },
    title: { id: 'title', type: 'Text', props: { text: 'Hello', tag: 'h1', color: '#111' } },
    desc: { id: 'desc', type: 'Text', props: { text: 'World', tag: 'p', color: '#444' } },
    cta: { id: 'cta', type: 'Button', props: { label: 'Get Started', variant: 'primary' } },
  },
};
