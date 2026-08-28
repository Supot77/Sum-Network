import React from 'react';
import { ArrowRight, ArrowDown, Terminal, Check, Copy, Network, Layers, ShieldCheck, Zap, Server, Laptop, Cpu, GitFork } from 'lucide-react';

export default function SmartDiagramBlock({ rawContent }) {
  const [copied, setCopied] = React.useState(false);
  const text = rawContent ? rawContent.trim() : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. Detect if it is a CLI terminal session (<Huawei>, [Huawei], Router#)
  const isCli = /^[<[\w-]{1,20}[>#\]]/.test(text) || text.includes('system-view') || text.includes('display ') || text.includes('interface GigabitEthernet');
  if (isCli) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-950 shadow-md font-mono text-xs">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#16120D] dark:bg-zinc-900 border-b border-zinc-800 text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-[11px] text-zinc-400 ml-2 font-sans font-medium flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              VRP Command Line Interface
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
        {/* Terminal Body */}
        <pre className="p-4 overflow-x-auto leading-relaxed text-zinc-200 selection:bg-zinc-700">
          <code>{text}</code>
        </pre>
      </div>
    );
  }

  // 2. Detect if it is an ASCII Flowchart with arrows (---> or --> or ->)
  const isArrowFlow = text.includes('--->') || text.includes('-->') || text.includes(' -> ');
  if (isArrowFlow && text.includes('+--')) {
    // Parse horizontal/sequential box flow
    // Try to extract box titles and bottom annotations
    const lines = text.split('\n');
    const titles = [];
    const subtitles = [];
    const annotations = [];

    lines.forEach(l => {
      if (l.includes('|')) {
        const parts = l.split('|').filter(p => p.trim() && !p.includes('--->') && !p.includes('-->'));
        parts.forEach(p => {
          const clean = p.trim();
          if (clean.startsWith('(') && clean.endsWith(')')) {
            subtitles.push(clean.replace(/[()]/g, ''));
          } else if (clean && !clean.includes('+--')) {
            titles.push(clean);
          }
        });
      } else if (l.includes('(') && l.includes(')')) {
        // Annotation line like (เสียง, ภาพ) (0, 1) ...
        const matches = l.match(/\(([^)]+)\)/g);
        if (matches) {
          matches.forEach(m => annotations.push(m.replace(/[()]/g, '')));
        }
      }
    });

    const stepCount = Math.max(titles.length, subtitles.length, 1);
    const steps = [];
    for (let idx = 0; idx < stepCount; idx++) {
      steps.push({
        title: titles[idx] || `ขั้นตอนที่ ${idx + 1}`,
        subtitle: subtitles[idx] || '',
        note: annotations[idx] || ''
      });
    }

    if (steps.length >= 2) {
      return (
        <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#EAE3D5]/50 dark:bg-zinc-900/50 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
            <Zap className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>กระบวนการทำงานและลำดับขั้นตอน (Step-by-Step Flowchart)</span>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-3">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:border-[#8E7E6A] transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 text-[10px] font-mono font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#8E7E6A] dark:text-zinc-500 font-semibold">
                        Step {idx + 1}
                      </span>
                    </div>

                    <div className="font-bold text-sm sm:text-base text-[#16120D] dark:text-zinc-100 mt-1">
                      {step.title}
                    </div>

                    {step.subtitle && (
                      <div className="text-xs font-mono text-[#6B5C4B] dark:text-zinc-400 mt-0.5">
                        ({step.subtitle})
                      </div>
                    )}
                  </div>

                  {step.note && (
                    <div className="text-[11px] text-[#8E7E6A] dark:text-zinc-400 mt-3 pt-2 border-t border-[#DDD3C1]/50 dark:border-zinc-800 font-sans bg-[#F4EFE6] dark:bg-zinc-900/60 p-2 rounded-lg">
                      💡 {step.note}
                    </div>
                  )}
                </div>

                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center py-1 md:py-0 text-[#8E7E6A] dark:text-zinc-500">
                    <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
                    <ArrowDown className="md:hidden w-5 h-5 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }
  }

  // 3. Detect if it is an ASCII Box Diagram with rows / components (+------+ | 1. ... | | 2. ... | +------+)
  if (text.includes('+---') && text.includes('|')) {
    const lines = text.split('\n');
    const contentLines = lines
      .map(l => l.replace(/^[|+]|[|+]$/g, '').trim())
      .filter(l => l && !l.startsWith('---') && !l.startsWith('==='));

    if (contentLines.length >= 2) {
      const headerTitle = contentLines[0];
      const items = contentLines.slice(1);

      return (
        <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
          {/* Header Banner */}
          <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" />
            <h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">
              {headerTitle}
            </h4>
          </div>

          {/* Items Grid */}
          <div className="p-4 sm:p-5 grid grid-cols-1 gap-2.5">
            {items.map((item, idx) => {
              const parts = item.split(' - ');
              const title = parts[0] || item;
              const desc = parts[1] || '';

              return (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1]/80 dark:border-zinc-800 flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#FAF7F2] dark:bg-zinc-800 text-[#4F4335] dark:text-zinc-300 border border-[#DDD3C1] dark:border-zinc-700 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">
                      {title}
                    </div>
                    {desc && (
                      <div className="text-xs text-[#6B5C4B] dark:text-zinc-300 mt-0.5 leading-relaxed font-sans">
                        {desc}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }

  // 4. Default: Render as polished clean blueprint code box with copy button
  return (
    <div className="my-5 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#EAE3D5]/80 dark:bg-zinc-950 shadow-sm font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-2 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 text-[#8E7E6A] dark:text-zinc-400">
        <span className="text-[11px] font-sans font-medium flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          ผังโครงสร้างข้อมูลและสถาปัตยกรรม (Technical Blueprint)
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#FAF7F2] dark:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[#4F4335] dark:text-zinc-300 text-[10px] hover:bg-[#F4EFE6] transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'คัดลอก' : 'คัดลอก'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto leading-relaxed text-[#231D16] dark:text-zinc-200 whitespace-pre">
        <code>{text}</code>
      </pre>
    </div>
  );
}
