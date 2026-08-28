import React, { useState } from 'react';
import { Play, RotateCcw, Database, Server, Laptop } from 'lucide-react';

export default function Lab04_SwitchMacLearningLab() {
  const [macTable, setMacTable] = useState([]);
  const [srcNode, setSrcNode] = useState('PC-A');
  const [dstNode, setDstNode] = useState('PC-B');
  const [actionLog, setActionLog] = useState('พร้อมจำลอง: เลือกเครื่องต้นทางและปลายทาง แล้วกด "ส่งเฟรม" เพื่อดูสวิตช์เรียนรู้ MAC Address');

  const nodes = [
    { id: 'PC-A', mac: '00:1A:2B:3C:4D:01', port: 'Port 1', ip: '192.168.1.1' },
    { id: 'PC-B', mac: '00:1A:2B:3C:4D:02', port: 'Port 2', ip: '192.168.1.2' },
    { id: 'PC-C', mac: '00:1A:2B:3C:4D:03', port: 'Port 3', ip: '192.168.1.3' },
  ];

  const handleSend = () => {
    if (srcNode === dstNode) {
      setActionLog('⚠️ เครื่องต้นทางและปลายทางต้องเป็นคนละเครื่อง');
      return;
    }

    const srcObj = nodes.find(n => n.id === srcNode);
    const dstObj = nodes.find(n => n.id === dstNode);

    setActionLog(`1. ${srcNode} ส่งเฟรม [Src: ${srcObj.mac} -> Dst: ${dstObj.mac}] เข้ามาทาง ${srcObj.port}`);

    setTimeout(() => {
      // Learn Source MAC
      setMacTable(prev => {
        const filtered = prev.filter(entry => entry.mac !== srcObj.mac);
        return [...filtered, { mac: srcObj.mac, port: srcObj.port, vlan: '1', age: 300 }];
      });

      // Check Destination MAC
      const known = macTable.find(entry => entry.mac === dstObj.mac);
      if (known) {
        setActionLog(`2. สวิตช์บันทึก Source MAC ลงตาราง CAM และพบ Destination MAC -> ส่งต่อตรงไปยัง ${dstObj.port} (Unicast Forwarding)`);
      } else {
        setActionLog(`2. สวิตช์บันทึก Source MAC ลงตาราง CAM แต่ยังไม่รู้จัก Destination MAC -> ฟลัดเฟรมออกทุกพอร์ต (Flooding Unknown Unicast)`);
      }
    }, 800);
  };

  const handleReset = () => {
    setMacTable([]);
    setActionLog('ล้างตาราง CAM Table เรียบร้อยแล้ว');
  };

  return (
    <div className="space-y-4 font-sans">
      {/* Sender Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500 dark:text-zinc-400">ต้นทาง:</span>
            <select value={srcNode} onChange={e => setSrcNode(e.target.value)} className="px-2 py-1 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded text-xs">
              {nodes.map(n => <option key={n.id} value={n.id}>{n.id} ({n.port})</option>)}
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500 dark:text-zinc-400">ปลายทาง:</span>
            <select value={dstNode} onChange={e => setDstNode(e.target.value)} className="px-2 py-1 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded text-xs">
              {nodes.map(n => <option key={n.id} value={n.id}>{n.id} ({n.port})</option>)}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={handleSend} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 text-xs font-semibold shadow-sm">
            <Play className="w-3.5 h-3.5" />
            <span>ส่งเฟรม (Send Frame)</span>
          </button>
          <button onClick={handleReset} className="p-1.5 rounded-lg bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid: Topology + CAM Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Topology Box */}
        <div className="h-60 rounded-xl bg-zinc-950 border border-zinc-800 p-4 flex flex-col justify-between items-center relative">
          <div className="px-4 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-mono text-xs flex items-center gap-2 shadow-sm">
            <Server className="w-4 h-4 text-zinc-400" />
            <span className="font-bold">Layer 2 Switch</span>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full pt-2">
            {nodes.map(n => (
              <div key={n.id} className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-center transition-all ${
                srcNode === n.id ? 'border-blue-500/60 bg-zinc-900 text-blue-200' :
                dstNode === n.id ? 'border-emerald-500/60 bg-zinc-900 text-emerald-200' :
                'border-zinc-800 bg-zinc-900/60 text-zinc-400'
              }`}>
                <div className="flex items-center gap-1 text-[11px] font-bold">
                  <Laptop className="w-3 h-3" />
                  <span>{n.id}</span>
                </div>
                <div className="text-[9px] font-mono text-zinc-500">{n.port}</div>
                <div className="text-[8px] font-mono text-zinc-400 truncate w-full">{n.mac}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CAM Table View */}
        <div className="h-60 rounded-xl bg-zinc-950 border border-zinc-800 p-4 flex flex-col justify-between font-mono text-xs">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <div className="flex items-center gap-1.5 text-zinc-200 font-bold">
              <Database className="w-3.5 h-3.5 text-zinc-400" />
              <span>MAC Address Table (CAM)</span>
            </div>
            <span className="text-[10px] text-zinc-500">{macTable.length} Entries</span>
          </div>

          <div className="flex-1 overflow-y-auto py-2 space-y-1">
            {macTable.length === 0 ? (
              <div className="text-zinc-600 text-center py-10 text-xs">ตารางว่างเปล่า (รอการส่งเฟรม)</div>
            ) : (
              macTable.map((entry, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded bg-zinc-900 border border-zinc-800 text-[10px]">
                  <span className="text-zinc-200 font-bold">{entry.mac}</span>
                  <span className="text-zinc-400">{entry.port}</span>
                  <span className="text-emerald-400">Aging: {entry.age}s</span>
                </div>
              ))
            )}
          </div>

          <div className="text-[9px] text-zinc-500 border-t border-zinc-800 pt-1">
            Default MAC Aging Timer = 300s
          </div>
        </div>
      </div>

      {/* Action Log */}
      <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
        💡 {actionLog}
      </div>
    </div>
  );
}
