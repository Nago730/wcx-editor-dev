import { codebase } from '../../../../../be/db/codebase';
export async function getCodebaseHtml(): Promise<string> {
return codebase.html;
}