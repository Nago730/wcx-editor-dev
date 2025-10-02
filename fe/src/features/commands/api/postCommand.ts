export type Command = { kind: 'update-prop'; nodeId: string; prop: string; value: unknown };
export async function postCommand(cmd: Command) {
  // placeholder: send to server later
  console.log('[postCommand]', cmd);
  return { ok: true };
}
