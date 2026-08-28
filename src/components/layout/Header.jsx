import React from 'react';
import { Search, Moon, Sun, BookOpen, Layers, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

export default function Header({ currentModule, totalModules, onSelectModule, isDark, onToggleTheme, onOpenSearch, isSidebarOpen, onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#DDD3C1] dark:border-zinc-800 bg-[#EFE8DC]/95 dark:bg-zinc-950/80 backdrop-blur-md px-4 lg:px-6 py-3 transition-colors">
      <div className="w-full flex items-center justify-between gap-4">
        {/* Left: Sidebar Toggle & Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE3D5] dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[#4F4335] dark:text-zinc-300 transition-all shadow-sm"
            title={isSidebarOpen ? "ซ่อนแถบเมนู (Hide Sidebar)" : "แสดงแถบเมนู (Show Sidebar)"}
          >
            {isSidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => onSelectModule(1)}>
            <div className="w-8 h-8 rounded-lg bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 flex items-center justify-center shadow-sm">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base tracking-tight text-[#231D16] dark:text-zinc-100 font-sans">
                  Universal Core Networking
                </span>
                <span className="hidden sm:inline px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-[#EAE3D5] dark:bg-zinc-800 text-[#6B5C4B] dark:text-zinc-300 border border-[#DDD3C1] dark:border-zinc-700 rounded">
                  Standards & Labs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F4EFE6] dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[#6B5C4B] dark:text-zinc-400 hover:text-[#231D16] dark:hover:text-zinc-200 text-xs font-mono transition-all shadow-sm"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline">ค้นหาเนื้อหา / คำศัพท์...</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-[#EAE3D5] dark:bg-zinc-800 text-[#6B5C4B] dark:text-zinc-400 rounded border border-[#DDD3C1] dark:border-zinc-700">⌘K</kbd>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 text-xs font-mono text-[#6B5C4B] dark:text-zinc-400">
            <BookOpen className="w-3.5 h-3.5 text-[#8E7E6A] dark:text-zinc-400" />
            <span>บทที่ <strong className="text-[#231D16] dark:text-zinc-100">{currentModule}</strong> / {totalModules}</span>
          </div>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#F4EFE6] dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[#4F4335] dark:text-zinc-300 transition-all shadow-sm"
            title="สลับโหมดแสง/มืด"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#4F4335]" />}
          </button>
        </div>
      </div>
    </header>
  );
}
