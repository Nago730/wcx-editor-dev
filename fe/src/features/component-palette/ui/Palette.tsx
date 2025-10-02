'use client';
import { useEffect } from 'react';
import { getPalette } from '@/entities/components/api/getPalette';
import { usePalette } from '../model/usePalette';

export default function Palette() {
  const items = usePalette(s => s.items);
  const setItems = usePalette(s => s.setItems);

  useEffect(() => { getPalette().then(setItems); }, [setItems]);

  return (
    <div className="p-3 space-y-2">
      <div className="text-xs text-gray-500 font-medium mb-2">Components</div>
      {items.map((it) => (
        <button key={it.type} className="w-full text-left px-2 py-1 rounded hover:bg-gray-100">
          {it.icon ? <span className="mr-2">{it.icon}</span> : null}{it.type}
        </button>
      ))}
    </div>
  );
}
