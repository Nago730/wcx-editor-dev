'use client';
import { useEffect, useRef } from 'react';
import { collectAnchors } from '../lib/anchors';
import { usePreviewState } from '../model/usePreviewState';
import { mountCodebase } from '../lib/mountCodebase';
import { getCodebaseHtml } from '@/entities/codebase/api/getCodebase';


export default function PreviewSurface() {
const ref = useRef<HTMLDivElement>(null);
const setRootEl = usePreviewState(s => s.setRootEl);
const setAnchors = usePreviewState(s => s.setAnchors);


useEffect(() => {
if (!ref.current) return;
setRootEl(ref.current);
getCodebaseHtml().then(html => {
mountCodebase(ref.current!, html);
const m = collectAnchors(ref.current!);
setAnchors(m);
});
}, [setRootEl, setAnchors]);


return <div ref={ref} className="relative z-0 min-h-[1200px] p-8"/>;
}