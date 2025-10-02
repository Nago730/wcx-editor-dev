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
