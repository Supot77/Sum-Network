import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { COURSE_MODULES } from '../../data/courseData';

export default function SearchModal({ isOpen, onClose, onSelectModule }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = COURSE_MODULES.filter(m => {
    const q = query.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.subtitle.toLowerCase().includes(q) ||
      m.overview.toLowerCase().includes(q) ||
      m.sections.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-[#16120D]/60 dark:bg-zinc-950/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fadeIn font-sans">
      <div className="w-full max-w-2xl bg-[#FAF7F2] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#DDD3C1] dark:border-zinc-800 bg-[#EAE3D5]/80 dark:bg-zinc-950">
          <Search className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ค้นหาบทเรียน ทฤษฎี หรือคำศัพท์..."
            className="flex-1 bg-transparent text-sm text-[#16120D] dark:text-white focus:outline-none placeholder:text-[#8E7E6A]"
            autoFocus
          />
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-[#DDD3C1] dark:hover:bg-zinc-800 text-[#6B5C4B] dark:text-zinc-400">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#8E7E6A] font-mono">
              ไม่พบผลลัพธ์ที่ตรงกับ "{query}"
            </div>
          ) : (
            filtered.map((m) => (
              <button
                key={m.id}
                onClick={() => { onSelectModule(m.id); onClose(); }}
                className="w-full text-left p-3 rounded-xl hover:bg-[#F4EFE6] dark:hover:bg-zinc-800/80 border border-transparent hover:border-[#DDD3C1] dark:hover:border-zinc-700 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-[#16120D] dark:text-zinc-100 group-hover:text-amber-800 dark:group-hover:text-zinc-200 transition-colors">
                    {m.title}
                  </div>
                  <div className="text-[11px] text-[#6B5C4B] dark:text-zinc-400 mt-0.5 line-clamp-1">
                    {m.overview}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8E7E6A] group-hover:text-[#16120D] dark:group-hover:text-zinc-200 group-hover:translate-x-1 transition-all" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
