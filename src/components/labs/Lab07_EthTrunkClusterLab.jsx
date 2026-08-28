import React, { useState } from 'react';
import { Network, Server, Play, RotateCcw } from 'lucide-react';

export default function Lab07_EthTrunkClusterLab() {
  const [mode, setMode] = useState('lacp');
  const [cableFail, setCableFail] = useState(false);

  return (
    <div className="space-y-4 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 dark:text-zinc-400 font-medium">โหมดการรวมลิงก์:</span>
          <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-zinc-200 dark:border-zinc-800">
            {['manual', 'lacp'].map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  mode === m ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {m === 'manual' ? 'Manual Load-Balance' : 'LACP Mode (802.3ad / 802.1AX)'}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setCableFail(!cableFail)}
          className={`px-3.5 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
            cableFail ? 'bg-rose-950 text-rose-300 border-rose-600' : 'bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950'
          }`}
        >
          {cableFail ? '⚡ ลิงก์ที่ 1 ขาด (คลิกต่อกลับ)' : '✂️ จำลองสายลิงก์ 1 ขาด'}
        </button>
      </div>

      <div className="h-60 rounded-xl bg-zinc-950 border border-zinc-800 p-5 flex items-center justify-between gap-4">
        <div className="w-28 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center font-mono text-xs">
          <Server className="w-4 h-4 mx-auto text-zinc-400 mb-1" />
          <div className="font-bold text-zinc-200">Switch-A</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">{mode === 'lacp' ? '👑 Actor (Master)' : 'Standalone'}</div>
        </div>

        <div className="flex-1 flex flex-col gap-2 relative">
          <div className="text-center text-[10px] font-mono text-zinc-400 pb-1 font-bold">
            Aggregated Link Bundle (แบนด์วิดท์: {cableFail ? '1 Gbps' : '2 Gbps'})
          </div>

          <div className={`p-2 rounded-lg border flex items-center justify-between text-[11px] font-mono transition-all ${
            cableFail ? 'bg-zinc-900 border-rose-800 text-rose-400 line-through' : 'bg-zinc-900 border-emerald-500/60 text-emerald-300'
          }`}>
            <span>Member Link 1: Port 1</span>
            <span>{cableFail ? 'DOWN (Failover)' : 'ACTIVE (1 Gbps)'}</span>
          </div>

          <div className="p-2 rounded-lg bg-zinc-900 border border-emerald-500/60 text-emerald-300 text-[11px] font-mono flex items-center justify-between">
            <span>Member Link 2: Port 2</span>
            <span>ACTIVE (1 Gbps)</span>
          </div>

          {mode === 'lacp' && (
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-mono flex items-center justify-between">
              <span>Member Link 3: Port 3</span>
              <span>{cableFail ? '⚡ PROMOTED TO ACTIVE' : 'STANDBY (Backup Link)'}</span>
            </div>
          )}
        </div>

        <div className="w-28 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center font-mono text-xs">
          <Server className="w-4 h-4 mx-auto text-zinc-400 mb-1" />
          <div className="font-bold text-zinc-200">Switch-B</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">{mode === 'lacp' ? 'Partner' : 'Standalone'}</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
        💡 <strong>ผลลัพธ์:</strong> {cableFail 
          ? 'เมื่อสายเส้นที่ 1 ขาด ระบบ LACP สลับลิงก์สำรอง (Standby) ขึ้นมาทำงานแทนอัตโนมัติ การเชื่อมต่อไม่ขาดตอน' 
          : 'สายสัญญาณรวมแบนด์วิดท์เป็น 2 Gbps และกระจายโหลดตาม IP/MAC Hash ไร้ลูป'}
      </div>
    </div>
  );
}
