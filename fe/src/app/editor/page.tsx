'use client';

import Palette from '@/features/component-palette/ui/Palette';
import PreviewSurface from '@/features/preview-runtime/ui/PreviewSurface';
import CanvasLayer from '@/features/overlay-canvas/ui/CanvasLayer';
import Inspector from '@/features/prop-inspector/ui/Inspector';

export default function EditorPage() {
  return (
    <div className="h-screen w-screen flex flex-row">
      {/* Left Sidebar */}
      <aside className="w-[260px] border-r border-gray-200 overflow-auto">
        <Palette />
      </aside>

      {/* Center Canvas */}
      <main className="flex-1 relative overflow-auto" id="preview-scroll">
        <PreviewSurface />
        {/* 겹치는 캔버스 */}
        <CanvasLayer />
      </main>

      {/* Right Sidebar */}
      <aside className="w-[320px] border-l border-gray-200 overflow-auto">
        <Inspector />
      </aside>
    </div>
  );
}
