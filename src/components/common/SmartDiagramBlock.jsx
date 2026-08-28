import React from 'react';
import { Terminal, Check, Copy, Layers } from 'lucide-react';
import BespokeDiagrams from './BespokeDiagrams';

export default function SmartDiagramBlock({ rawContent }) {
  const [copied, setCopied] = React.useState(false);
  const text = rawContent ? rawContent.trim() : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. Check if there is a bespoke tailored visualizer for this specific diagram
  const bespokeElement = BespokeDiagrams({ blockText: text });
  if (bespokeElement !== null && bespokeElement !== undefined) {
    return bespokeElement;
  }

  const lines = text.split('\n');

  // 2. ASCII TABLE DETECTION: Multi-row table with pipes | ... | and +---
  const pipeLines = lines.filter(l => l.trim().startsWith('|') && l.trim().endsWith('|'));
  if (pipeLines.length >= 2 && text.includes('+---')) {
    const tableRows = [];
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const cells = trimmed.split('|').slice(1, -1).map(c => c.trim()).filter(c => c !== '');
        if (cells.length > 0) {
          tableRows.push(cells);
        }
      }
    });

    if (tableRows.length >= 2) {
      const headers = tableRows[0];
      const rows = tableRows.slice(1);

      return (
        <div className="my-6 overflow-x-auto rounded-2xl border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 shadow-sm font-sans">
          <table className="w-full text-xs sm:text-sm border-collapse text-left">
            <thead>
              <tr className="bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 text-[#16120D] dark:text-zinc-100 font-bold">
                {headers.map((h, i) => (
                  <th key={i} className="p-3.5 border-r border-[#DDD3C1]/60 dark:border-zinc-800 last:border-r-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDD3C1]/50 dark:divide-zinc-800/50">
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#EAE3D5]/40 dark:hover:bg-zinc-900/40 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3.5 border-r border-[#DDD3C1]/40 dark:border-zinc-800 last:border-r-0 text-[#382F24] dark:text-zinc-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  // 3. CLI TERMINAL SESSION (Raw terminal commands without ASCII table borders)
  const isPureCli = !text.includes('+---') && (
    text.startsWith('<Huawei>') || text.startsWith('[Huawei]') || 
    text.startsWith('<Switch>') || text.startsWith('[Switch]') ||
    text.startsWith('sysname ') || text.startsWith('system-view')
  );

  if (isPureCli) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-950 shadow-md font-mono text-xs">
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#16120D] dark:bg-zinc-900 border-b border-zinc-800 text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-[11px] text-zinc-400 ml-2 font-sans font-medium flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              CLI Terminal Emulator
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'คัดลอกแล้ว' : 'คัดลอก'}</span>
          </button>
        </div>
        <pre className="p-4 overflow-x-auto leading-relaxed text-zinc-200 selection:bg-zinc-700 whitespace-pre">
          <code>{text}</code>
        </pre>
      </div>
    );
  }

  // 4. TECHNICAL BLUEPRINT (Fallback)
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#EAE3D5]/80 dark:bg-zinc-950 shadow-sm font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 text-[#8E7E6A] dark:text-zinc-400">
        <span className="text-[11px] font-sans font-medium flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          ผังโครงสร้างสถาปัตยกรรมและไดอะแกรม (Technical Blueprint)
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#FAF7F2] dark:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[#4F4335] dark:text-zinc-300 text-[10px] hover:bg-[#F4EFE6] transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'คัดลอก' : 'คัดลอก'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto leading-relaxed text-[#231D16] dark:text-zinc-200 whitespace-pre selection:bg-[#FAF7F2]">
        <code>{text}</code>
      </pre>
    </div>
  );
}
