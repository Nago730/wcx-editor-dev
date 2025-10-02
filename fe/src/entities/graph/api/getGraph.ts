import { graph } from '../../../../../be/db/graph';
import type { GraphData } from '@/shared/types/graph';
export async function getGraph(): Promise<GraphData> {
  return graph; // mock
}
