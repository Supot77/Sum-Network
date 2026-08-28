import React, { useState } from 'react';
import { Split, Play, Server, Laptop } from 'lucide-react';

export default function Lab12_InterVlanRouterLab() {
  const [method, setMethod] = useState('vlanif');
  const [isRouting, setIsRouting] = useState(false);
  const [stepText, setStepText] = useState('พร้อมจำลองการสื่อสารข้าม VLAN (PC1 VLAN 10 -> PC2 VLAN 20)');

  const handleRun = () => {
    setIsRouting(true);
    setStepText('1. PC1 (192.168.10.10) ส่งเฟรมไปยัง Default Gateway...');

    setTimeout(() => {
      if (method === 'vlanif') {
        setStepText('2. Layer 3 Switch ได้รับเฟรม ตรวจพบ Destination MAC ตรงกับ Gateway VLANIF 10 -> ถอด L2 Header และส่งต่อเข้า Hardware Routing Engine (ASIC)...');
      } else {
        setStepText('2. สวิตช์ L2 ส่งเฟรมติดแท็กผ่าน Trunk ไปยัง Router Sub-interface (dot1q termination)...');
      }
    }, 1000);

    setTimeout(() => {
      if (method === 'vlanif') {
        setStepText('3. สวิตช์ L3 ค้นหา FIB ตารางส่งต่อพบ VLANIF 20 -> Rewrite L2 Header และส่งออกไปยัง PC2 สำเร็จด้วย Wire-speed!');
      } else {
        setStepText('3. เราเตอร์ทำการ IP Routing บน CPU -> แปะแท็ก VLAN 20 และส่งกลับลงสาย Trunk เดิมไปยัง PC2 สำเร็จ');
      }
      setIsRouting(false);
    }, 2200);
  };

  return (
    <div className="space-y-4 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 dark:text-zinc-400 font-medium">สถาปัตยกรรม:</span>
          <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setMethod('vlanif')}
              className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                method === 'vlanif' ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Layer 3 Switch (VLANIF)
            </button>
            <button
              onClick={() => setMethod('stick')}
              className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                method === 'stick' ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Router-on-a-Stick (802.1Q)
            </button>
          </div>
        </div>

        <button
          onClick={handleRun}
          disabled={isRouting}
          className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white disabled:opacity-30 text-white dark:text-zinc-950 font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-all"
        >
          <Play className="w-3.5 h-3.5" />
          <span>จำลองการส่งข้อมูลข้าม VLAN</span>
        </button>
      </div>

      <div className="h-56 rounded-xl bg-zinc-950 border border-zinc-800 p-4 flex items-center justify-between gap-3">
        <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-xs font-mono">
          <Laptop className="w-4 h-4 mx-auto text-zinc-400 mb-1" />
          <div className="font-bold text-zinc-200">PC-1</div>
          <div className="text-[10px] text-zinc-400">VLAN 10</div>
          <div className="text-[9px] text-zinc-500">192.168.10.10</div>
        </div>

        <div className="flex-1 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center font-mono text-xs space-y-1">
          <Server className="w-5 h-5 mx-auto text-zinc-300" />
          <div className="font-bold text-zinc-100">
            {method === 'vlanif' ? 'Layer 3 Switch (VLANIF Routing Engine)' : 'Router-on-a-Stick (Sub-interfaces)'}
          </div>
          <div className="text-[10px] text-zinc-500">
            {method === 'vlanif' ? 'Hardware Wire-Speed Forwarding (ASIC)' : 'Single Trunk Link Bottleneck (CPU)'}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-xs font-mono">
          <Laptop className="w-4 h-4 mx-auto text-zinc-400 mb-1" />
          <div className="font-bold text-zinc-200">PC-2</div>
          <div className="text-[10px] text-zinc-400">VLAN 20</div>
          <div className="text-[9px] text-zinc-500">192.168.20.20</div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-300">
        💡 {stepText}
      </div>
    </div>
  );
}
