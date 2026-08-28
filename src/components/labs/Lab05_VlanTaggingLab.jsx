import React, { useState } from 'react';
import { Tag, Play, ShieldCheck } from 'lucide-react';

export default function Lab05_VlanTaggingLab() {
  const [portType, setPortType] = useState('access');
  const [pvid, setPvid] = useState(10);
  const [incomingFrame, setIncomingFrame] = useState('untagged');
  const [result, setResult] = useState(null);

  const handleProcess = () => {
    let tagStatus = '';
    let action = '';

    if (portType === 'access') {
      if (incomingFrame === 'untagged') {
        tagStatus = `ประทับแท็ก 802.1Q (VLAN ID: ${pvid})`;
        action = `พอร์ต Access รับเฟรม Untagged เข้ามา -> ใส่ VLAN Tag ${pvid} -> ส่งต่อเข้า Core สวิตช์`;
      } else {
        tagStatus = 'ดรอปเฟรมทิ้ง (Discard)';
        action = 'พอร์ต Access ปกติจะไม่ยอมรับเฟรมที่มี Tag วิ่งเข้ามาจากโฮสต์';
      }
    } else if (portType === 'trunk') {
      if (incomingFrame === 'untagged') {
        tagStatus = `ประทับแท็ก Native PVID (VLAN ${pvid})`;
        action = `พอร์ต Trunk รับ Untagged เข้ามา -> กำหนดเป็น Native VLAN ${pvid} และตรวจสอบ allow-pass list`;
      } else {
        tagStatus = 'ยอมให้ผ่านแบบคงแท็กเดิม (Tagged Forwarding)';
        action = `พอร์ต Trunk ยอมให้เฟรม ${incomingFrame} ส่งต่อไปยังสวิตช์ตัวถัดไปแบบคง 802.1Q Header 4 ไบต์`;
      }
    } else {
      tagStatus = `ประมวลผลตามกฎ Tagged/Untagged List (PVID: ${pvid})`;
      action = `พอร์ต Hybrid สามารถกำหนดให้ปลดแท็กหรือคงแท็กของแต่ละ VLAN ได้อย่างยืดหยุ่น เหมาะสำหรับแชร์ Server`;
    }

    setResult({ tagStatus, action });
  };

  return (
    <div className="space-y-4 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">ชนิดพอร์ต (Link-Type):</label>
          <select value={portType} onChange={e => setPortType(e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium">
            <option value="access">Access Port</option>
            <option value="trunk">Trunk Port</option>
            <option value="hybrid">Hybrid Port</option>
          </select>
        </div>

        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">ค่า PVID (Port Default VLAN):</label>
          <input 
            type="number" 
            value={pvid} 
            onChange={e => setPvid(parseInt(e.target.value) || 1)} 
            className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono"
            min="1" max="4094"
          />
        </div>

        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">เฟรมขาเข้า (Ingress Frame):</label>
          <select value={incomingFrame} onChange={e => setIncomingFrame(e.target.value)} className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium">
            <option value="untagged">Untagged Frame (จาก PC)</option>
            <option value="tagged-10">Tagged Frame (VLAN 10)</option>
            <option value="tagged-20">Tagged Frame (VLAN 20)</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={handleProcess} className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 font-semibold text-xs shadow-sm flex items-center gap-2 transition-all">
          <Play className="w-3.5 h-3.5" />
          <span>ประมวลผลแท็ก (Process Frame Tagging)</span>
        </button>
      </div>

      {result && (
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 animate-fadeIn text-xs">
          <div className="flex items-center gap-2 text-zinc-200 font-bold">
            <Tag className="w-4 h-4 text-zinc-400" />
            <span>ผลลัพธ์: {result.tagStatus}</span>
          </div>
          <div className="text-zinc-300 font-mono leading-relaxed bg-zinc-900 p-3 rounded-lg border border-zinc-800">
            {result.action}
          </div>
        </div>
      )}
    </div>
  );
}
