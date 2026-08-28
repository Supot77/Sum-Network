import React, { useState } from 'react';
import { GitFork, Server, Play, RotateCcw } from 'lucide-react';

export default function Lab06_StpElectionLab() {
  const [swA_prio, setSwA_prio] = useState(4096);
  const [swB_prio, setSwB_prio] = useState(32768);
  const [swC_prio, setSwC_prio] = useState(32768);

  let root = 'SW-A';
  if (swB_prio < swA_prio && swB_prio <= swC_prio) root = 'SW-B';
  else if (swC_prio < swA_prio && swC_prio < swB_prio) root = 'SW-C';
  else if (swA_prio <= swB_prio && swA_prio <= swC_prio) root = 'SW-A';

  return (
    <div className="space-y-4 font-sans">
      <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">SW-A Priority:</label>
          <input type="number" step="4096" value={swA_prio} onChange={e => setSwA_prio(parseInt(e.target.value) || 0)} className="w-full p-1.5 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded font-mono" />
        </div>
        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">SW-B Priority:</label>
          <input type="number" step="4096" value={swB_prio} onChange={e => setSwB_prio(parseInt(e.target.value) || 0)} className="w-full p-1.5 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded font-mono" />
        </div>
        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">SW-C Priority:</label>
          <input type="number" step="4096" value={swC_prio} onChange={e => setSwC_prio(parseInt(e.target.value) || 0)} className="w-full p-1.5 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded font-mono" />
        </div>
      </div>

      <div className="relative h-72 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center p-4 overflow-hidden">
        {/* SVG Triangle Links */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="50%" y1="20%" x2="25%" y2="75%" stroke="#52525b" strokeWidth="2" />
          <line x1="50%" y1="20%" x2="75%" y2="75%" stroke="#52525b" strokeWidth="2" />
          <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#f43f5e" strokeWidth="2" strokeDasharray="6 4" />
        </svg>

        {/* SW-A */}
        <div className={`absolute top-4 left-1/2 -translate-x-1/2 p-3 rounded-xl border flex flex-col items-center gap-0.5 shadow-sm transition-all ${
          root === 'SW-A' ? 'bg-zinc-900 border-emerald-500/80 text-emerald-200' : 'bg-zinc-900 border-zinc-800 text-zinc-300'
        }`}>
          <span className="text-xs font-bold font-mono">SW-A {root === 'SW-A' && '👑 (Root Bridge)'}</span>
          <span className="text-[10px] font-mono text-zinc-500">Prio: {swA_prio} | MAC: 00:01</span>
        </div>

        {/* SW-B */}
        <div className={`absolute bottom-6 left-12 sm:left-24 p-3 rounded-xl border flex flex-col items-center gap-0.5 shadow-sm transition-all ${
          root === 'SW-B' ? 'bg-zinc-900 border-emerald-500/80 text-emerald-200' : 'bg-zinc-900 border-zinc-800 text-zinc-300'
        }`}>
          <span className="text-xs font-bold font-mono">SW-B {root === 'SW-B' && '👑 (Root Bridge)'}</span>
          <span className="text-[10px] font-mono text-zinc-500">Prio: {swB_prio} | MAC: 00:02</span>
        </div>

        {/* SW-C */}
        <div className={`absolute bottom-6 right-12 sm:right-24 p-3 rounded-xl border flex flex-col items-center gap-0.5 shadow-sm transition-all ${
          root === 'SW-C' ? 'bg-zinc-900 border-emerald-500/80 text-emerald-200' : 'bg-zinc-900 border-zinc-800 text-zinc-300'
        }`}>
          <span className="text-xs font-bold font-mono">SW-C {root === 'SW-C' && '👑 (Root Bridge)'}</span>
          <span className="text-[10px] font-mono text-zinc-500">Prio: {swC_prio} | MAC: 00:03</span>
        </div>

        <div className="text-[11px] font-mono text-rose-400 absolute bottom-10 bg-zinc-900/90 px-2.5 py-1 rounded border border-rose-900/60">
          พอร์ตที่ถูกบล็อก (Alternate Port): SW-B ↔ SW-C
        </div>
      </div>

      <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
        👑 <strong>Root Bridge:</strong> {root} (Bridge Priority ต่ำที่สุด) | คำนวณ Root Port (RP) และ Designated Port (DP) เพื่อป้องกัน Layer 2 Loop 100%
      </div>
    </div>
  );
}
