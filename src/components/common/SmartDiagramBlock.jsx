import React from 'react';
import { ArrowRight, ArrowDown, Terminal, Check, Copy, Layers, ShieldCheck, Zap, Table } from 'lucide-react';

export default function SmartDiagramBlock({ rawContent }) {
  const [copied, setCopied] = React.useState(false);
  const text = rawContent ? rawContent.trim() : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = text.split('\n');

  // 1. SPECIFIC FLOW: Information Transfer Process (Chapter 1)
  if (text.includes('Information') && text.includes('Transmission Medium') && text.includes('--->')) {
    const steps = [
      { num: 1, title: 'ข้อมูลข่าวสาร', en: 'Information', note: 'เสียง, ภาพ, ข้อความ, วิดีโอ' },
      { num: 2, title: 'ข้อมูลดิจิทัล', en: 'Data', note: 'เลขฐานสอง 0 และ 1 (บิต)' },
      { num: 3, title: 'สัญญาณสื่อสาร', en: 'Signal', note: 'คลื่นไฟฟ้า / แสง / คลื่นวิทยุ' },
      { num: 4, title: 'ตัวกลางการสื่อสาร', en: 'Transmission Medium', note: 'สายทองแดง / ใยแก้ว / อากาศ' },
    ];

    return (
      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
          <Zap className="w-4 h-4 text-amber-700 dark:text-amber-400" />
          <span>วงจรการแปลงสารสนเทศสู่สัญญาณสื่อสาร (Information Transfer Process)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:border-[#8E7E6A] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 text-[10px] font-mono font-bold flex items-center justify-center">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#8E7E6A] dark:text-zinc-500 font-semibold">
                    Step {s.num}
                  </span>
                </div>
                <div className="font-bold text-sm text-[#16120D] dark:text-zinc-100">{s.title}</div>
                <div className="text-xs font-mono text-[#6B5C4B] dark:text-zinc-400">({s.en})</div>
              </div>
              <div className="text-[11px] text-[#8E7E6A] dark:text-zinc-400 mt-3 pt-2 border-t border-[#DDD3C1]/50 dark:border-zinc-800 bg-[#F4EFE6] dark:bg-zinc-900/60 p-2 rounded-lg">
                💡 {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. SPECIFIC FLOW: Device Boot / Initialization Process (Chapter 3)
  if (text.includes('Hardware Power-On') && text.includes('BootROM') && text.includes('Load VRP')) {
    const bootSteps = [
      { step: 1, title: 'Hardware Power-On & POST', desc: 'จ่ายไฟและตรวจสอบความสมบูรณ์ของฮาร์ดแวร์ (CPU, SDRAM)' },
      { step: 2, title: 'Run BootROM Software', desc: 'รันโปรแกรม BootLoader เตรียมพร้อมระบบและโหลด OS' },
      { step: 3, title: 'Load VRP System Software', desc: 'ค้นหาและโหลดไฟล์ระบบ .cc จาก Flash เข้าสู่ SDRAM' },
      { step: 4, title: 'Load Configuration File', desc: 'โหลดไฟล์ startup saved-configuration มาเป็น Current Configuration' },
    ];

    return (
      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
          <Zap className="w-4 h-4 text-amber-700 dark:text-amber-400" />
          <span>กระบวนการเริ่มต้นระบบของอุปกรณ์ (Device Initialization Process)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {bootSteps.map((b, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 text-[10px] font-mono font-bold flex items-center justify-center">
                    {b.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#8E7E6A] dark:text-zinc-500 font-semibold">
                    Step {b.step}
                  </span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">{b.title}</div>
              </div>
              <div className="text-[11px] text-[#8E7E6A] dark:text-zinc-400 mt-2.5 pt-2 border-t border-[#DDD3C1]/50 dark:border-zinc-800">
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3. ASCII TABLE DETECTION: Multi-row table with pipes | ... |
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

  // 4. CLI TERMINAL SESSION (Raw terminal commands without ASCII table borders)
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

  // 5. TECHNICAL BLUEPRINT (Topologies, packet bit diagrams, ASCII schematics)
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
