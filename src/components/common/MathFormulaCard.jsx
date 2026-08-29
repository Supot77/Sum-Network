import React from 'react';
import katex from 'katex';
import { Calculator } from 'lucide-react';

export default function MathFormulaCard({ formula, title, description, variables = [] }) {
  let html = '';
  try {
    html = katex.renderToString(formula, {
      displayMode: true,
      throwOnError: false,
    });
  } catch (e) {
    html = formula;
  }

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
      <div className="px-4 py-2.5 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-[#FAF7F2] dark:bg-zinc-800 text-[#8E7E6A] dark:text-zinc-300 border border-[#DDD3C1]/60 dark:border-zinc-700">
            <Calculator className="w-3.5 h-3.5 text-amber-900 dark:text-amber-400" />
          </div>
          <span className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">
            {title || 'สูตรคำนวณเครือข่าย (Network Mathematical Formula)'}
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#8E7E6A] dark:text-zinc-400 uppercase font-semibold tracking-wider">KaTeX Master</span>
      </div>

      <div className="p-4 sm:p-6 flex flex-col items-center justify-center bg-[#FAF7F2] dark:bg-zinc-950/80">
        <div 
          className="text-base sm:text-xl text-[#16120D] dark:text-zinc-100 overflow-x-auto py-2 max-w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {description && (
          <p className="text-xs text-[#6B5C4B] dark:text-zinc-400 mt-2 text-center">
            {description}
          </p>
        )}
      </div>

      {variables && variables.length > 0 && (
        <div className="px-4 py-3 bg-[#F4EFE6] dark:bg-zinc-900/60 border-t border-[#DDD3C1]/60 dark:border-zinc-800 flex flex-wrap gap-2.5 text-xs text-[#4F4335] dark:text-zinc-300">
          {variables.map((v, i) => (
            <div key={i} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#EAE3D5]/80 dark:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[11px]">
              <span className="font-bold font-mono text-amber-950 dark:text-amber-300">{v.symbol}</span>
              <span className="text-[#8E7E6A] dark:text-zinc-500">:</span>
              <span className="text-[#4F4335] dark:text-zinc-300 font-sans">{v.meaning}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
