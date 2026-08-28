import React, { useState } from 'react';
import { Binary, Calculator } from 'lucide-react';

export default function Lab08_SubnettingCalculator() {
  const [ip, setIp] = useState('192.168.1.0');
  const [prefix, setPrefix] = useState(26);

  const hostBits = 32 - prefix;
  const totalHosts = Math.pow(2, hostBits);
  const usableHosts = Math.max(0, totalHosts - 2);
  const blockSize = Math.pow(2, 8 - (prefix % 8 === 0 ? 8 : prefix % 8));

  const getMask = (p) => {
    let mask = [];
    for (let i = 0; i < 4; i++) {
      let n = Math.min(p, 8);
      mask.push(256 - Math.pow(2, 8 - n));
      p -= n;
    }
    return mask.join('.');
  };

  return (
    <div className="space-y-4 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs">
        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">Network IP Address:</label>
          <input 
            type="text" 
            value={ip} 
            onChange={e => setIp(e.target.value)} 
            className="w-full p-2 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono"
          />
        </div>

        <div>
          <label className="text-zinc-500 dark:text-zinc-400 font-medium mb-1 block">Subnet Mask Prefix (/{prefix}):</label>
          <input 
            type="range" 
            min="16" 
            max="30" 
            value={prefix} 
            onChange={e => setPrefix(parseInt(e.target.value))} 
            className="w-full mt-2 accent-zinc-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
            <span>/16</span>
            <span>/24</span>
            <span>/30</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
          <div className="text-[10px] text-zinc-500 uppercase font-semibold">Subnet Mask</div>
          <div className="text-xs sm:text-sm font-bold text-zinc-100 font-mono mt-1">{getMask(prefix)}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
          <div className="text-[10px] text-zinc-500 uppercase font-semibold">Total Hosts</div>
          <div className="text-xs sm:text-sm font-bold text-zinc-100 font-mono mt-1">{totalHosts.toLocaleString()}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
          <div className="text-[10px] text-zinc-500 uppercase font-semibold">Usable Hosts</div>
          <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono mt-1">{usableHosts.toLocaleString()}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
          <div className="text-[10px] text-zinc-500 uppercase font-semibold">Block Size</div>
          <div className="text-xs sm:text-sm font-bold text-zinc-100 font-mono mt-1">{blockSize}</div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
        <div className="text-xs font-bold text-zinc-200 flex items-center gap-2">
          <Binary className="w-4 h-4 text-zinc-400" />
          <span>Bit-Level Slicing (Network vs Host Bits)</span>
        </div>

        <div className="flex flex-wrap gap-1 font-mono text-[10px] pt-2">
          {Array.from({ length: 32 }).map((_, idx) => (
            <span 
              key={idx}
              className={`w-6 h-7 rounded flex items-center justify-center font-bold ${
                idx < prefix 
                  ? 'bg-zinc-900 border border-zinc-700 text-zinc-200' 
                  : 'bg-zinc-900 border border-emerald-800/60 text-emerald-300'
              }`}
            >
              {idx < prefix ? '1' : '0'}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-1">
          <span>◄ Network Bits: {prefix} บิต</span>
          <span className="text-emerald-400">Host Bits: {32 - prefix} บิต ►</span>
        </div>
      </div>
    </div>
  );
}
