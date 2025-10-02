// fe/src/features/prop-inspector/ui/Inspector.tsx
'use client';
import { useEffect, useMemo, useState } from 'react';
import Panel from '@/shared/ui/Panel';
import { useSelection } from '@/features/selection/model/useSelection';
import { usePreviewState } from '@/features/preview-runtime/model/usePreviewState';
import { getMeta } from '@/entities/meta/api/getMeta';

export default function Inspector() {
  const selected = useSelection(s => s.selected);
  const anchors = usePreviewState(s => s.anchors);

  const [fields, setFields] = useState<{ name:string; type:string; group?:string }[]>([]);
  const [displayName, setDisplayName] = useState<string | null>(null);

  const selectedEl = useMemo(() => (selected ? anchors[selected] : null), [selected, anchors]);
  const selectedType = selectedEl?.dataset.type ?? null;

  // 선택된 엘리먼트에서 사람 읽기 쉬운 라벨 추출 (Text/Button은 텍스트 내용 일부)
  const selectedLabel = useMemo(() => {
    if (!selectedEl) return null;
    const t = selectedEl.dataset.type;
    if (t === 'Text' || t === 'Button') {
      const txt = (selectedEl.textContent || '').trim();
      return txt ? (txt.length > 60 ? txt.slice(0, 57) + '…' : txt) : null;
    }
    return null;
  }, [selectedEl]);

  useEffect(() => {
    if (!selectedType) {
      setFields([]);
      setDisplayName(null);
      return;
    }
    (async () => {
      const m = await getMeta(selectedType);
      setDisplayName(m?.displayName ?? selectedType);
      setFields((m?.props ?? []).map(p => ({ name: p.name, type: p.type, group: p.group })));
    })();
  }, [selectedType]);

  const groups = fields.reduce<Record<string, typeof fields>>((acc, f) => {
    const k = f.group ?? 'General';
    (acc[k] ||= []).push(f);
    return acc;
  }, {});

  return (
    <div>
      <Panel title="Selection">
        {!selected ? (
          <div className="text-sm text-gray-500">None</div>
        ) : (
          <div className="space-y-1 text-sm">
            <div className="font-medium">
              {displayName || selectedType}
            </div>
            <div className="text-gray-500">
              <span className="mr-2">type: <span className="font-mono">{selectedType}</span></span>
              <span>id: <span className="font-mono">{selected}</span></span>
            </div>
            {selectedLabel && (
              <div className="text-gray-600">
                value: <span className="italic">“{selectedLabel}”</span>
              </div>
            )}
          </div>
        )}
      </Panel>

      {selected && Object.entries(groups).map(([g, arr]) => (
        <Panel key={g} title={g}>
          {arr.map(f => (
            <div key={f.name} className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{f.name}</span>
              <input className="border rounded px-2 py-1 text-sm w-36" placeholder={f.type} />
            </div>
          ))}
        </Panel>
      ))}
    </div>
  );
}
