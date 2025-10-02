import { meta } from '../../../../../be/db/meta';
import type { ComponentMeta } from '@/shared/types/meta';
export async function getMeta(type: string): Promise<ComponentMeta | undefined> {
  return meta.find(m => m.type === type);
}
