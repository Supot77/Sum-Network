import React from 'react';
import { 
  Network, Layers, Terminal, ToggleLeft, FolderKanban, GitFork, 
  Binary, Signpost, Globe, Split, CheckCircle2
} from 'lucide-react';
import { CATEGORIES } from '../../data/courseData';

const ICONS = {
  Network, Layers, Terminal, ToggleLeft, FolderKanban, GitFork, 
  Binary, Signpost, Globe, Split
};

export default function Sidebar({ modules, currentModuleId, onSelectModule, completedModules = [] }) {
  return (
    <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-[#DDD3C1] dark:border-zinc-800/80 bg-[#EAE3D5]/70 dark:bg-zinc-950/40 p-4 sm:p-5 overflow-y-auto max-h-[calc(100vh-4rem)]">
      <div className="mb-4 px-1">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#4F4335] dark:text-zinc-300 mb-0.5 font-sans">
          สารบัญบทเรียน (Course Outline)
        </h2>
        <p className="text-[11px] text-[#8E7E6A] dark:text-zinc-400">
          หลักการทำงานสากล 12 โมดูลหลัก
        </p>
      </div>

      <div className="space-y-5">
        {CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
          const catModules = modules.filter(m => m.category === cat.id);
          if (catModules.length === 0) return null;

          return (
            <div key={cat.id} className="space-y-1.5">
              <div className="text-[10px] font-mono font-bold tracking-wider text-[#8E7E6A] dark:text-zinc-400 uppercase px-2">
                {cat.label}
              </div>
              
              <div className="space-y-1">
                {catModules.map((mod) => {
                  const IconComponent = ICONS[mod.icon] || Network;
                  const isActive = mod.id === currentModuleId;
                  const isDone = completedModules.includes(mod.id);
                  const cleanTitle = mod.title.includes(':') ? mod.title.split(':')[1].trim() : mod.title;

                  return (
                    <button
                      key={mod.id}
                      onClick={() => onSelectModule(mod.id)}
                      className={`w-full text-left flex items-start gap-2.5 p-2.5 rounded-xl transition-all group relative border ${
                        isActive
                          ? 'bg-[#FAF7F2] dark:bg-zinc-900 border-[#DDD3C1] dark:border-zinc-700 text-[#231D16] dark:text-zinc-100 shadow-sm'
                          : 'text-[#6B5C4B] dark:text-zinc-400 hover:text-[#231D16] dark:hover:text-zinc-200 hover:bg-[#F4EFE6]/80 dark:hover:bg-zinc-900/60 border-transparent'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg mt-0.5 flex-shrink-0 transition-colors ${
                        isActive 
                          ? 'bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 font-medium' 
                          : 'bg-[#FAF7F2] dark:bg-zinc-900 text-[#8E7E6A] dark:text-zinc-400 group-hover:text-[#231D16] dark:group-hover:text-zinc-200 border border-[#DDD3C1]/60 dark:border-zinc-800'
                      }`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-xs ${isActive ? 'font-bold text-[#231D16] dark:text-zinc-100' : 'font-medium text-[#4F4335] dark:text-zinc-300'}`}>
                            บทที่ {mod.id}: {cleanTitle}
                          </span>
                          {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />}
                        </div>
                        <p className="text-[10px] text-[#8E7E6A] dark:text-zinc-500 truncate mt-0.5 font-mono">
                          {mod.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
