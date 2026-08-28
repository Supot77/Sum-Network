import React, { useState } from 'react';
import { Layers, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Lab02_EncapsulationStudio() {
  const [protocolType, setProtocolType] = useState('TCP');
  const [step, setStep] = useState(0);

  const steps = [
    { name: '1. Application Data', desc: 'ข้อมูลดิบระดับแอปพลิเคชัน (เช่น HTTP GET /index.html หรือ DNS Query)', pdu: 'Data' },
    { name: '2. Transport Layer Header', desc: `${protocolType} Header: เพิ่มหมายเลข Port ต้นทาง-ปลายทาง (Port 80/443) และการควบคุมลำดับ`, pdu: protocolType === 'TCP' ? 'Segment' : 'Datagram' },
    { name: '3. Network Layer Header', desc: 'IPv4 Header: เพิ่ม Source IP (192.168.1.10) และ Destination IP (203.0.113.5) พร้อมค่า TTL = 64', pdu: 'Packet' },
    { name: '4. Data Link Layer Header & Trailer', desc: 'Ethernet Frame: เพิ่ม Source/Dest MAC Address และใส่ FCS (CRC-32) ที่ส่วนท้ายเพื่อตรวจความถูกต้อง', pdu: 'Frame' },
    { name: '5. Physical Layer Bits', desc: 'แปลงบิตข้อมูลทั้งหมด (0 และ 1) เป็นสัญญาณทางกายภาพ (ไฟฟ้า/แสง) ส่งผ่านตัวกลาง', pdu: 'Bits' }
  ];

  return (
    <div className="space-y-4 font-sans">
      {/* Top Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">โปรโตคอล Transport:</span>
          <div className="flex rounded-lg bg-zinc-100 dark:bg-zinc-950 p-1 border border-zinc-200 dark:border-zinc-800">
            {['TCP', 'UDP'].map(p => (
              <button
                key={p}
                onClick={() => setProtocolType(p)}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                  protocolType === p 
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm' 
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStep(prev => Math.max(0, prev - 1))}
            disabled={step === 0}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 border border-zinc-300 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ย้อนกลับ</span>
          </button>
          <button
            onClick={() => setStep(prev => Math.min(4, prev + 1))}
            disabled={step === 4}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white disabled:opacity-30 text-white dark:text-zinc-950 text-xs font-semibold shadow-sm transition-all"
          >
            <span>ชั้นถัดไป (Next Layer)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-6 space-y-6">
        <div className="flex items-center justify-between text-xs text-zinc-400 font-mono border-b border-zinc-800 pb-3">
          <span>ระดับชั้น: <strong className="text-zinc-100">{steps[step].name}</strong></span>
          <span>PDU Type: <strong className="text-emerald-400 font-bold uppercase">{steps[step].pdu}</strong></span>
        </div>

        {/* Envelope Construction */}
        <div className="py-4 flex flex-col items-center justify-center gap-4">
          <div className="w-full max-w-2xl transition-all duration-300">
            <div className="flex flex-wrap items-stretch rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900/60 shadow-lg text-xs font-mono text-center">
              {/* L2 Header */}
              {step >= 3 && (
                <div className="bg-zinc-800/90 border-r border-zinc-700 p-3 flex-1 min-w-[120px] animate-fadeIn">
                  <div className="text-[10px] text-zinc-400 font-semibold uppercase">L2 ETH Header</div>
                  <div className="text-[10px] text-zinc-200 mt-1 font-bold">DMAC | SMAC | Type</div>
                </div>
              )}

              {/* L3 Header */}
              {step >= 2 && (
                <div className="bg-zinc-850 border-r border-zinc-700 p-3 flex-1 min-w-[120px] animate-fadeIn">
                  <div className="text-[10px] text-blue-400 font-semibold uppercase">L3 IPv4 Header</div>
                  <div className="text-[10px] text-blue-200 mt-1 font-bold">Src/Dst IP | TTL: 64</div>
                </div>
              )}

              {/* L4 Header */}
              {step >= 1 && (
                <div className="bg-zinc-800 border-r border-zinc-700 p-3 flex-1 min-w-[120px] animate-fadeIn">
                  <div className="text-[10px] text-amber-400 font-semibold uppercase">L4 {protocolType} Header</div>
                  <div className="text-[10px] text-amber-200 mt-1 font-bold">Port 80/443 | Flags</div>
                </div>
              )}

              {/* Payload */}
              <div className="bg-zinc-900 p-3 flex-1 min-w-[140px]">
                <div className="text-[10px] text-emerald-400 font-semibold uppercase">Application Payload</div>
                <div className="text-[10px] text-emerald-200 mt-1 font-bold">"GET /index.html"</div>
              </div>

              {/* L2 Trailer */}
              {step >= 3 && (
                <div className="bg-zinc-850 p-3 min-w-[80px] border-l border-zinc-700 animate-fadeIn">
                  <div className="text-[10px] text-zinc-400 font-semibold uppercase">FCS (4B)</div>
                  <div className="text-[10px] text-zinc-300 mt-1 font-bold">CRC-32</div>
                </div>
              )}
            </div>
          </div>

          {step === 4 && (
            <div className="w-full max-w-2xl p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 text-center break-all">
              01001000 01100101 01101100 01101100 01101111 00100000 01000100 01100001 01110100 01100001 01100011 01101111 01101101
            </div>
          )}
        </div>

        {/* Explanation */}
        <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 font-sans leading-relaxed">
          💡 <strong className="text-zinc-100">กระบวนการในขั้นตอนนี้:</strong> {steps[step].desc}
        </div>
      </div>
    </div>
  );
}
