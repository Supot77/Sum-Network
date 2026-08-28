import React, { useState } from 'react';
import { Network, Play, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Lab10_OspfStateMachineLab() {
  const [stateIndex, setStateIndex] = useState(0);

  const states = [
    { name: 'Down', desc: 'ยังไม่ได้รับข้อมูล OSPF Hello จากเพื่อนบ้าน' },
    { name: 'Init', desc: 'ได้รับ Hello แต่ใน Neighbor List ยังไม่มี Router ID ของเรา' },
    { name: '2-Way', desc: 'สื่อสารสองทิศทางสำเร็จ (จุดเริ่มต้นการเลือกตั้ง DR/BDR)' },
    { name: 'ExStart', desc: 'เจรจา Master/Slave และกำหนดลำดับ Sequence Number' },
    { name: 'Exchange', desc: 'แลกเปลี่ยนสรุปสารบัญฐานข้อมูล Database Description (DD)' },
    { name: 'Loading', desc: 'ส่งคำขอ LSA ที่ขาด (LSR) และอัปเดตด้วย LSU / LSAck' },
    { name: 'Full', desc: 'ฐานข้อมูล LSDB ซิงค์ตรงกัน 100% สมบูรณ์แบบ พร้อมคำนวณ Dijkstra SPF Tree' },
  ];

  return (
    <div className="space-y-4 font-sans">
      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
        <span className="text-zinc-500 dark:text-zinc-400 font-medium">
          สถานะ: <strong className="text-zinc-900 dark:text-zinc-100 font-mono text-sm">{states[stateIndex].name}</strong> ({stateIndex + 1}/7)
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStateIndex(prev => Math.max(0, prev - 1))}
            disabled={stateIndex === 0}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ก่อนหน้า</span>
          </button>
          <button
            onClick={() => setStateIndex(prev => Math.min(6, prev + 1))}
            disabled={stateIndex === 6}
            className="flex items-center gap-1 px-3.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white disabled:opacity-30 text-white dark:text-zinc-950 font-semibold text-xs shadow-sm"
          >
            <span>ถัดไป</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-wrap items-center justify-center gap-2">
        {states.map((s, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className={`px-3 py-2 rounded-lg border font-mono text-xs font-bold transition-all ${
              stateIndex === idx 
                ? 'bg-zinc-900 border-emerald-500/80 text-emerald-300 shadow-sm scale-105' 
                : stateIndex > idx 
                ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400' 
                : 'bg-zinc-900/30 border-zinc-900 text-zinc-600'
            }`}>
              {s.name}
            </div>
            {idx < 6 && <span className="text-zinc-700 text-xs">→</span>}
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 space-y-1 font-mono">
        <div className="text-zinc-900 dark:text-zinc-100 font-bold">💡 รายละเอียดสถานะ {states[stateIndex].name}:</div>
        <div className="leading-relaxed">{states[stateIndex].desc}</div>
      </div>
    </div>
  );
}
