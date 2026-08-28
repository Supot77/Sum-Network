import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function Lab11_Ipv6NdSlaacLab() {
  const [mac, setMac] = useState('00-1A-2B-3C-4D-5E');
  const [prefix, setPrefix] = useState('2001:db8:1::/64');

  const computeEui64 = (macStr) => {
    try {
      const clean = macStr.replace(/[-:]/g, '');
      if (clean.length !== 12) return 'Invalid MAC';
      const part1 = clean.substring(0, 6);
      const part2 = clean.substring(6, 12);
      
      let firstByte = parseInt(part1.substring(0, 2), 16);
      firstByte = firstByte ^ 2;
      const hexFirst = firstByte.toString(16).padStart(2, '0');

      return `${hexFirst}${part1.substring(2, 4)}:${part1.substring(4, 6)}ff:fe${part2.substring(0, 2)}:${part2.substring(2, 6)}`.toLowerCase();
    } catch (e) {
      return 'Error';
    }
  };

  const eui64 = computeEui64(mac);

  return (
    <div className="space-y-4 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">MAC Address (48 บิต):</label>
          <input 
            type="text" 
            value={mac} 
            onChange={e => setMac(e.target.value)} 
            className="w-full p-2 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono rounded-lg"
          />
        </div>
        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">IPv6 Network Prefix (จาก Router RA):</label>
          <input 
            type="text" 
            value={prefix} 
            onChange={e => setPrefix(e.target.value)} 
            className="w-full p-2 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <div className="text-[10px] text-zinc-500 font-bold uppercase font-mono">IEEE EUI-64 Interface ID</div>
          <div className="text-xs sm:text-sm font-mono font-bold text-zinc-100">{eui64}</div>
          <div className="text-[10px] text-zinc-500">(แทรก FFFE และกลับบิตที่ 7)</div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
          <div className="text-[10px] text-zinc-500 font-bold uppercase font-mono">Global Unicast Address (SLAAC)</div>
          <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400 truncate">
            2001:db8:1:{eui64}
          </div>
          <div className="text-[10px] text-zinc-500">(Prefix + EUI-64 ใช้งานได้ทันที)</div>
        </div>
      </div>
    </div>
  );
}
