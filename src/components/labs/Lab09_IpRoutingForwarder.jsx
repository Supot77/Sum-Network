import React, { useState } from 'react';
import { Signpost, Play, RotateCcw, ArrowRight } from 'lucide-react';

export default function Lab09_IpRoutingForwarder() {
  const [destIp, setDestIp] = useState('10.1.1.50');
  const [currentHop, setCurrentHop] = useState(0);

  const handleHop = () => {
    setCurrentHop(prev => (prev < 3 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-4 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 dark:text-zinc-400 font-medium">Destination IP:</span>
          <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono font-bold">
            {destIp}
          </span>
        </div>

        <button onClick={handleHop} className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-all">
          <Play className="w-3.5 h-3.5" />
          <span>{currentHop === 3 ? 'เริ่มใหม่ (Reset)' : 'ส่งต่อไปยัง Hop ถัดไป (Next Hop) ▶'}</span>
        </button>
      </div>

      <div className="h-56 rounded-xl bg-zinc-950 border border-zinc-800 p-4 flex items-center justify-between gap-2 overflow-x-auto">
        {[
          { name: 'PC-A (Src)', ip: '192.168.1.10', mac: '00:0A', role: 'Host' },
          { name: 'Router 1', ip: 'GW: 192.168.1.1', mac: '00:R1', role: 'L3 Hop 1' },
          { name: 'Router 2', ip: '192.168.12.2', mac: '00:R2', role: 'L3 Hop 2' },
          { name: 'PC-B (Dst)', ip: '10.1.1.50', mac: '00:0B', role: 'Host' },
        ].map((device, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className={`p-3 rounded-xl border flex flex-col items-center gap-1 min-w-[110px] text-center transition-all ${
              currentHop === idx 
                ? 'bg-zinc-900 border-emerald-500/80 text-zinc-100 shadow-md scale-105' 
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-500'
            }`}>
              <div className="text-xs font-bold">{device.name}</div>
              <div className="text-[9px] font-mono text-zinc-400">{device.ip}</div>
              <div className="text-[8px] font-mono text-zinc-500">{device.mac}</div>
            </div>
            {idx < 3 && (
              <ArrowRight className={`w-4 h-4 ${currentHop > idx ? 'text-zinc-300' : 'text-zinc-700'}`} />
            )}
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs font-mono space-y-2 text-zinc-300">
        <div className="text-zinc-100 font-bold">🔍 Routing Decision บน Router 1 (Longest Prefix Match):</div>
        <div className="text-[11px] leading-relaxed text-zinc-400">
          • ตรงกับเส้นทาง /24 และ /16 → เลือกหน้ากากยาวสุด (/24)<br />
          • <strong>Hop-by-Hop L2 Rewrite:</strong> Source MAC เปลี่ยนเป็น Router 1 MAC และ Destination MAC เปลี่ยนเป็น Router 2 MAC ส่วน IP ต้นทาง/ปลายทางคงเดิม
        </div>
      </div>
    </div>
  );
}
