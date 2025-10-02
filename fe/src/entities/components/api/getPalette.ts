import { components } from '../../../../../be/db/components';


export async function getPalette() {
return components.map(({ type, icon }) => ({ type, icon }));
}


export async function getClickableTypes(): Promise<Set<string>> {
return new Set(components.filter(c => c.clickable).map(c => c.type));
}