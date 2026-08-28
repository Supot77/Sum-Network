import React, { useState } from 'react';
import { Play, RotateCcw, Zap, Info, Server, Laptop, Activity, AlertOctagon } from 'lucide-react';

export default function Lab01_TopologyExplorer() {
  const [topology, setTopology] = useState('star'); // star, tree, ring, bus, mesh
  const [brokenLinks, setBrokenLinks] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [activeSegment, setActiveSegment] = useState(null);
  const [statusText, setStatusText] = useState('ระบบพร้อมทำงาน: คลิกที่สายเพื่อสั่งตัด/ต่อสัญญาณ หรือกด "ทดสอบส่งข้อมูล" เพื่อดูเส้นทาง');

  const topologies = [
    { id: 'star', name: 'Star Topology (แบบดาว)' },
    { id: 'mesh', name: 'Full-Mesh Topology (แบบตาข่าย)' },
    { id: 'ring', name: 'Ring Topology (แบบวงแหวน)' },
    { id: 'bus', name: 'Bus Topology (แบบบัส)' },
    { id: 'tree', name: 'Tree Topology (แบบต้นไม้)' },
  ];

  const handleToggleLink = (linkId) => {
    if (brokenLinks.includes(linkId)) {
      setBrokenLinks(brokenLinks.filter(l => l !== linkId));
      setStatusText(`เชื่อมต่อสายสัญญาณ [${linkId}] กลับคืนสู่ระบบเรียบร้อย`);
    } else {
      setBrokenLinks([...brokenLinks, linkId]);
      setStatusText(`สายสัญญาณ [${linkId}] ขาด! ทดสอบการส่งข้อมูลเพื่อดูผลกระทบต่อระบบ`);
    }
  };

  const handleSendPacket = () => {
    setIsSending(true);
    setActiveSegment('active');
    setStatusText('กำลังส่งแพ็กเก็ตข้อมูลจาก PC-1 ไปยัง PC-4...');

    setTimeout(() => {
      if (topology === 'star') {
        if (brokenLinks.includes('link-sw-pc1')) {
          setStatusText('❌ ส่งข้อมูลล้มเหลว: สายสัญญาณของ PC-1 ต้นทางขาด');
        } else if (brokenLinks.includes('link-sw-pc4')) {
          setStatusText('❌ ส่งข้อมูลล้มเหลว: สายสัญญาณของ PC-4 ปลายทางขาด (สวิตช์กลางไม่สามารถส่งต่อได้)');
        } else {
          setStatusText('✅ ส่งข้อมูลสำเร็จ: แพ็กเก็ตส่งผ่าน Switch กลางไปยัง PC-4 อย่างสมบูรณ์');
        }
      } else if (topology === 'mesh') {
        if (brokenLinks.includes('link-1-4')) {
          if (brokenLinks.includes('link-1-2') || brokenLinks.includes('link-2-4')) {
            setStatusText('❌ ส่งข้อมูลล้มเหลว: เส้นทางสำรองทั้งหมดขาด');
          } else {
            setStatusText('⚡ สายตรง 1-4 ขาด แต่ระบบสลับไปใช้เส้นทางสำรอง (PC-1 -> PC-2 -> PC-4) สำเร็จ!');
          }
        } else {
          setStatusText('✅ ส่งข้อมูลสำเร็จผ่าน Direct Link (PC-1 -> PC-4) ด้วยความเร็วสูงสุด');
        }
      } else if (topology === 'ring') {
        if (brokenLinks.length > 0) {
          setStatusText('❌ ลูปวงแหวนขาดตอน: Token / Packet ไม่สามารถหมุนวนครบรอบไปยังปลายทางได้');
        } else {
          setStatusText('✅ ส่งข้อมูลสำเร็จตามลำดับวงแหวน (PC-1 -> PC-2 -> PC-3 -> PC-4)');
        }
      } else if (topology === 'bus') {
        if (brokenLinks.includes('bus-main')) {
          setStatusText('❌ สายแกนหลัก (Backbone Cable) ขาด: เครือข่ายทั้งหมดถูกตัดขาดจากกันทันที (Single Point of Failure)');
        } else {
          setStatusText('✅ ส่งสัญญาณแบบบรอดคาสต์ผ่านสายแกนหลักไปยัง PC-4 สำเร็จ');
        }
      } else if (topology === 'tree') {
        if (brokenLinks.includes('link-root-dist2') || brokenLinks.includes('link-dist2-pc4')) {
          setStatusText('❌ ส่งข้อมูลล้มเหลว: ลิงก์ในโครงสร้างลำดับชั้นไปยังกิ่งปลายทางขาด');
        } else {
          setStatusText('✅ ส่งข้อมูลสำเร็จผ่าน Root Switch -> Distribution Switch -> PC-4');
        }
      }
      setIsSending(false);
      setActiveSegment(null);
    }, 1200);
  };

  const handleReset = () => {
    setBrokenLinks([]);
    setStatusText('รีเซ็ตสายสัญญาณทั้งหมดกลับสู่สถานะปกติ');
  };

  return (
    <div className="space-y-4 font-sans">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">เลือกโทโพโลยี:</span>
          <select 
            value={topology} 
            onChange={(e) => { setTopology(e.target.value); setBrokenLinks([]); }}
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-zinc-500"
          >
            {topologies.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSendPacket}
            disabled={isSending}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 disabled:opacity-40 text-xs font-semibold shadow-sm transition-all"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isSending ? 'กำลังส่ง...' : 'ทดสอบส่งข้อมูล (Test Flow)'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 transition-all"
            title="รีเซ็ตสายสัญญาณ"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Canvas with Real SVG Connection Cables */}
      <div className="relative h-80 sm:h-96 w-full rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden select-none">
        {/* Subtle Engineering Grid Background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #52525b 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* 1. STAR TOPOLOGY */}
        {topology === 'star' && (
          <div className="relative w-full h-full">
            {/* SVG Cables */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Line: Switch to PC-1 (Top Left) */}
              <line 
                x1="50%" y1="50%" x2="22%" y2="25%" 
                stroke={brokenLinks.includes('link-sw-pc1') ? '#f43f5e' : isSending ? '#3b82f6' : '#52525b'} 
                strokeWidth={brokenLinks.includes('link-sw-pc1') ? '2' : '2'}
                strokeDasharray={brokenLinks.includes('link-sw-pc1') ? '6 4' : 'none'}
              />
              {/* Line: Switch to PC-2 (Top Right) */}
              <line 
                x1="50%" y1="50%" x2="78%" y2="25%" 
                stroke={brokenLinks.includes('link-sw-pc2') ? '#f43f5e' : '#52525b'} 
                strokeWidth="2"
                strokeDasharray={brokenLinks.includes('link-sw-pc2') ? '6 4' : 'none'}
              />
              {/* Line: Switch to PC-3 (Bottom Left) */}
              <line 
                x1="50%" y1="50%" x2="22%" y2="75%" 
                stroke={brokenLinks.includes('link-sw-pc3') ? '#f43f5e' : '#52525b'} 
                strokeWidth="2"
                strokeDasharray={brokenLinks.includes('link-sw-pc3') ? '6 4' : 'none'}
              />
              {/* Line: Switch to PC-4 (Bottom Right) */}
              <line 
                x1="50%" y1="50%" x2="78%" y2="75%" 
                stroke={brokenLinks.includes('link-sw-pc4') ? '#f43f5e' : isSending && !brokenLinks.includes('link-sw-pc4') ? '#10b981' : '#52525b'} 
                strokeWidth="2"
                strokeDasharray={brokenLinks.includes('link-sw-pc4') ? '6 4' : 'none'}
              />
            </svg>

            {/* Central Switch Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-10">
              <div className="w-16 h-14 rounded-xl bg-zinc-900 border border-zinc-700 flex flex-col items-center justify-center shadow-md">
                <Server className="w-5 h-5 text-zinc-300" />
                <span className="text-[10px] font-mono font-bold text-zinc-200 mt-0.5">Switch</span>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase">Core Device</span>
            </div>

            {/* Satellite Host Nodes */}
            {[
              { id: 'pc1', label: 'PC-1 (Src)', ip: '192.168.1.10', pos: 'top-6 left-6 sm:left-12', link: 'link-sw-pc1', isSrc: true },
              { id: 'pc2', label: 'PC-2', ip: '192.168.1.20', pos: 'top-6 right-6 sm:right-12', link: 'link-sw-pc2' },
              { id: 'pc3', label: 'PC-3', ip: '192.168.1.30', pos: 'bottom-6 left-6 sm:left-12', link: 'link-sw-pc3' },
              { id: 'pc4', label: 'PC-4 (Dst)', ip: '192.168.1.40', pos: 'bottom-6 right-6 sm:right-12', link: 'link-sw-pc4', isDst: true },
            ].map((node) => {
              const isBroken = brokenLinks.includes(node.link);
              return (
                <div key={node.id} className={`absolute ${node.pos} flex flex-col items-center gap-1.5 z-10`}>
                  <div className={`px-3 py-2 rounded-xl border flex flex-col items-center gap-0.5 shadow-sm transition-all ${
                    node.isSrc ? 'bg-zinc-900 border-blue-500/60 text-blue-200' :
                    node.isDst ? 'bg-zinc-900 border-emerald-500/60 text-emerald-200' :
                    'bg-zinc-900/90 border-zinc-800 text-zinc-300'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold font-mono">{node.label}</span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500">{node.ip}</span>
                  </div>

                  <button
                    onClick={() => handleToggleLink(node.link)}
                    className={`px-2 py-0.5 rounded text-[10px] font-medium border transition-all ${
                      isBroken
                        ? 'bg-rose-950/80 border-rose-600 text-rose-300'
                        : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {isBroken ? '⚡ สายขาด (คลิกต่อ)' : '✂️ ตัดสาย'}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. FULL-MESH TOPOLOGY */}
        {topology === 'mesh' && (
          <div className="relative w-full h-full">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* All interconnected lines between 4 nodes */}
              <line x1="25%" y1="25%" x2="75%" y2="25%" stroke={brokenLinks.includes('link-1-2') ? '#f43f5e' : '#52525b'} strokeWidth="2" strokeDasharray={brokenLinks.includes('link-1-2') ? '6 4' : 'none'} />
              <line x1="25%" y1="25%" x2="25%" y2="75%" stroke={brokenLinks.includes('link-1-3') ? '#f43f5e' : '#52525b'} strokeWidth="2" strokeDasharray={brokenLinks.includes('link-1-3') ? '6 4' : 'none'} />
              <line x1="25%" y1="25%" x2="75%" y2="75%" stroke={brokenLinks.includes('link-1-4') ? '#f43f5e' : '#52525b'} strokeWidth="2" strokeDasharray={brokenLinks.includes('link-1-4') ? '6 4' : 'none'} />
              <line x1="75%" y1="25%" x2="75%" y2="75%" stroke={brokenLinks.includes('link-2-4') ? '#f43f5e' : '#52525b'} strokeWidth="2" strokeDasharray={brokenLinks.includes('link-2-4') ? '6 4' : 'none'} />
              <line x1="75%" y1="25%" x2="25%" y2="75%" stroke={brokenLinks.includes('link-2-3') ? '#f43f5e' : '#52525b'} strokeWidth="2" strokeDasharray={brokenLinks.includes('link-2-3') ? '6 4' : 'none'} />
              <line x1="25%" y1="75%" x2="75%" y2="75%" stroke={brokenLinks.includes('link-3-4') ? '#f43f5e' : '#52525b'} strokeWidth="2" strokeDasharray={brokenLinks.includes('link-3-4') ? '6 4' : 'none'} />
            </svg>

            {[
              { id: '1', label: 'Node 1 (Src)', pos: 'top-8 left-10 sm:left-24', isSrc: true },
              { id: '2', label: 'Node 2', pos: 'top-8 right-10 sm:right-24' },
              { id: '3', label: 'Node 3', pos: 'bottom-8 left-10 sm:left-24' },
              { id: '4', label: 'Node 4 (Dst)', pos: 'bottom-8 right-10 sm:right-24', isDst: true },
            ].map(node => (
              <div key={node.id} className={`absolute ${node.pos} flex flex-col items-center gap-1 z-10`}>
                <div className={`w-16 h-14 rounded-xl border flex flex-col items-center justify-center font-mono text-xs ${
                  node.isSrc ? 'bg-zinc-900 border-blue-500/60 text-blue-200' :
                  node.isDst ? 'bg-zinc-900 border-emerald-500/60 text-emerald-200' :
                  'bg-zinc-900 border-zinc-800 text-zinc-300'
                }`}>
                  <Server className="w-4 h-4 text-zinc-400" />
                  <span className="font-bold mt-0.5">{node.label}</span>
                </div>
              </div>
            ))}

            {/* Direct Link 1-4 Cut Trigger */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <button
                onClick={() => handleToggleLink('link-1-4')}
                className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                  brokenLinks.includes('link-1-4') ? 'bg-rose-950 border-rose-600 text-rose-300' : 'bg-zinc-900/90 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                {brokenLinks.includes('link-1-4') ? '⚡ Direct Link 1-4 ขาด (คลิกต่อ)' : '✂️ ตัด Direct Link 1-4'}
              </button>
            </div>
          </div>
        )}

        {/* 3. RING TOPOLOGY */}
        {topology === 'ring' && (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <circle cx="50%" cy="50%" r="90" fill="none" stroke={brokenLinks.length > 0 ? '#f43f5e' : '#52525b'} strokeWidth="2" strokeDasharray={brokenLinks.length > 0 ? '6 4' : 'none'} />
            </svg>

            <div className="absolute top-10 flex flex-col items-center">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200">Node 1 (Src)</div>
            </div>
            <div className="absolute right-12 sm:right-28 flex flex-col items-center">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200">Node 2</div>
            </div>
            <div className="absolute bottom-10 flex flex-col items-center">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200">Node 3</div>
            </div>
            <div className="absolute left-12 sm:left-28 flex flex-col items-center">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200">Node 4 (Dst)</div>
            </div>

            <button
              onClick={() => handleToggleLink('ring-cut')}
              className={`px-3 py-1 rounded-lg text-xs font-mono border z-20 ${
                brokenLinks.includes('ring-cut') ? 'bg-rose-950 border-rose-600 text-rose-300' : 'bg-zinc-900 border-zinc-700 text-zinc-300'
              }`}
            >
              {brokenLinks.includes('ring-cut') ? '⚡ วงแหวนขาด (คลิกต่อ)' : '✂️ ตัดสายวงแหวน'}
            </button>
          </div>
        )}

        {/* 4. BUS TOPOLOGY */}
        {topology === 'bus' && (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Bus Backbone Cable */}
            <div className={`w-3/4 h-2 rounded-full transition-all relative ${
              brokenLinks.includes('bus-main') ? 'bg-rose-600' : 'bg-zinc-600'
            }`}>
              <div className="absolute -left-3 -top-2 px-1 py-0.5 bg-zinc-800 border border-zinc-700 text-[8px] font-mono text-zinc-400 rounded">Terminator</div>
              <div className="absolute -right-3 -top-2 px-1 py-0.5 bg-zinc-800 border border-zinc-700 text-[8px] font-mono text-zinc-400 rounded">Terminator</div>
            </div>

            {/* Drop lines and hosts */}
            <div className="flex justify-between w-3/4 pt-8">
              {['PC-1 (Src)', 'PC-2', 'PC-3', 'PC-4 (Dst)'].map((name, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-zinc-600 -mt-8 mb-2" />
                  <div className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">{name}</div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={() => handleToggleLink('bus-main')}
                className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                  brokenLinks.includes('bus-main') ? 'bg-rose-950 border-rose-600 text-rose-300' : 'bg-zinc-900 border-zinc-700 text-zinc-300'
                }`}
              >
                {brokenLinks.includes('bus-main') ? '⚡ สาย Backbone ขาด (คลิกต่อ)' : '✂️ ตัดสาย Backbone กลาง'}
              </button>
            </div>
          </div>
        )}

        {/* 5. TREE TOPOLOGY */}
        {topology === 'tree' && (
          <div className="relative w-full h-full flex flex-col items-center justify-between p-6">
            {/* Root Switch */}
            <div className="px-4 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-mono font-bold text-zinc-200">
              Root Switch (Core)
            </div>

            {/* Distribution layer */}
            <div className="flex justify-around w-full">
              <div className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">Dist Switch 1</div>
              <div className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">Dist Switch 2</div>
            </div>

            {/* Access hosts */}
            <div className="flex justify-between w-full">
              {['PC-1 (Src)', 'PC-2', 'PC-3', 'PC-4 (Dst)'].map((p, i) => (
                <div key={i} className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                  {p}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Live Status Bar */}
      <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2.5">
        <Info className="w-4 h-4 text-zinc-400 flex-shrink-0" />
        <span className="text-xs text-zinc-700 dark:text-zinc-300 font-mono leading-relaxed">{statusText}</span>
      </div>
    </div>
  );
}
