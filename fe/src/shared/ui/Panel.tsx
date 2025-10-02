import { PropsWithChildren } from 'react';
export default function Panel({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section className="p-3 border-b border-gray-100">
      <h3 className="text-sm font-semibold text-gray-500 mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
