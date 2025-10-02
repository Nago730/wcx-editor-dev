export interface PropSchema {
  name: string;
  type: 'string'|'number'|'boolean'|'color'|'select'|'enum'|'asset'|'spacing'|'typography';
  enumValues?: string[];
  min?: number; max?: number; step?: number;
  group?: string;
}

export interface ComponentMeta {
  type: string;
  displayName: string;
  props: PropSchema[];
}

export const meta: ComponentMeta[] = [
  { type: 'Text', displayName: 'Text', props: [
    { name: 'text', type: 'string', group: 'Content' },
    { name: 'tag', type: 'select', enumValues: ['h1','h2','p'], group: 'Typography' },
    { name: 'color', type: 'color', group: 'Typography' },
  ]},
  { type: 'Button', displayName: 'Button', props: [
    { name: 'label', type: 'string', group: 'Content' },
    { name: 'variant', type: 'enum', enumValues: ['primary','ghost'], group: 'Appearance' },
  ]},
  { type: 'Section', displayName: 'Section', props: [
    { name: 'bg', type: 'color', group: 'Appearance' },
  ]},
];
