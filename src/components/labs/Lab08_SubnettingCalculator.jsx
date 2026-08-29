import React, { useState } from 'react';
import { Binary, Calculator, Layers, Plus, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Lab08_SubnettingCalculator() {
  const [activeTab, setActiveTab] = useState('single'); // 'single' | 'vlsm'

  // Tab 1: Single Subnet state
  const [ip, setIp] = useState('192.168.1.0');
  const [prefix, setPrefix] = useState(26);

  // Tab 2: VLSM state
  const [majorNet, setMajorNet] = useState('192.168.10.0');
  const [majorPrefix, setMajorPrefix] = useState(24);
  const [departments, setDepartments] = useState([
    { id: 1, name: 'ฝ่ายขาย (Sales)', hosts: 50 },
    { id: 2, name: 'ฝ่ายไอที (IT Support)', hosts: 25 },
    { id: 3, name: 'ฝ่ายบุคคล (HR)', hosts: 10 },
    { id: 4, name: 'ลิงก์ WAN (Point-to-Point)', hosts: 2 },
  ]);
  const [newDeptName, setNewDeptName] = useState('');
  const [newDeptHosts, setNewDeptHosts] = useState('');

  // Helper functions
  const ipToInt = (ipStr) => {
    return ipStr.split('.').reduce((acc, oct) => ((acc << 8) + parseInt(oct, 10)) >>> 0, 0);
  };

  const intToIp = (intVal) => {
    return [
      (intVal >>> 24) & 255,
      (intVal >>> 16) & 255,
      (intVal >>> 8) & 255,
      intVal & 255
    ].join('.');
  };

  const getMask = (p) => {
    let mask = [];
    for (let i = 0; i < 4; i++) {
      let n = Math.min(p, 8);
      mask.push(256 - Math.pow(2, 8 - n));
      p = Math.max(0, p - n);
    }
    return mask.join('.');
  };

  const getWildcard = (p) => {
    const maskOctets = getMask(p).split('.').map(Number);
    return maskOctets.map(m => 255 - m).join('.');
  };

  // Single subnet calculations
  const hostBits = 32 - prefix;
  const totalHosts = Math.pow(2, hostBits);
  const usableHosts = Math.max(0, totalHosts - 2);
  const maskInt = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
  
  let validIp = true;
  let parsedIpInt = 0;
  try {
    const parts = ip.split('.');
    if (parts.length === 4 && parts.every(p => !isNaN(p) && parseInt(p) >= 0 && parseInt(p) <= 255)) {
      parsedIpInt = ipToInt(ip);
    } else {
      validIp = false;
    }
  } catch {
    validIp = false;
  }

  const netInt = (parsedIpInt & maskInt) >>> 0;
  const broadInt = (netInt | ~maskInt) >>> 0;
  const firstUsableInt = prefix >= 31 ? netInt : netInt + 1;
  const lastUsableInt = prefix >= 31 ? broadInt : broadInt - 1;

  // VLSM Calculations
  const calculateVlsm = () => {
    let baseInt = 0;
    try {
      baseInt = ipToInt(majorNet);
    } catch {
      baseInt = ipToInt('192.168.10.0');
    }

    // Sort descending by hosts
    const sortedDepts = [...departments].sort((a, b) => b.hosts - a.hosts);
    let currentInt = baseInt;
    const results = [];

    sortedDepts.forEach(dept => {
      const required = dept.hosts;
      let h = 0;
      while (Math.pow(2, h) - 2 < required) {
        h++;
      }
      h = Math.max(2, h); // minimum /30
      const subPrefix = 32 - h;
      const subBlock = Math.pow(2, h);
      const subNetInt = currentInt;
      const subBroadInt = subNetInt + subBlock - 1;
      const subFirstInt = subNetInt + 1;
      const subLastInt = subBroadInt - 1;

      results.push({
        ...dept,
        prefix: subPrefix,
        mask: getMask(subPrefix),
        networkId: intToIp(subNetInt),
        firstUsable: intToIp(subFirstInt),
        lastUsable: intToIp(subLastInt),
        broadcastId: intToIp(subBroadInt),
        capacity: subBlock - 2,
        block: subBlock
      });

      currentInt += subBlock;
    });

    const totalMajorHosts = Math.pow(2, 32 - majorPrefix);
    const usedHosts = results.reduce((acc, r) => acc + r.block, 0);
    const freeHosts = Math.max(0, totalMajorHosts - usedHosts);

    return { results, freeHosts, totalMajorHosts, nextFreeIp: intToIp(currentInt) };
  };

  const vlsmData = calculateVlsm();

  const handleAddDept = (e) => {
    e.preventDefault();
    if (!newDeptName || !newDeptHosts || isNaN(newDeptHosts) || parseInt(newDeptHosts) <= 0) return;
    setDepartments([...departments, { id: Date.now(), name: newDeptName, hosts: parseInt(newDeptHosts) }]);
    setNewDeptName('');
    setNewDeptHosts('');
  };

  const handleRemoveDept = (id) => {
    if (departments.length <= 1) return;
    setDepartments(departments.filter(d => d.id !== id));
  };

  return (
    <div className="space-y-4 font-sans text-xs">
      {/* Tab Switcher */}
      <div className="flex items-center gap-2 p-1 rounded-xl bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800">
        <button
          onClick={() => setActiveTab('single')}
          className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'single'
              ? 'bg-[#FAF7F2] dark:bg-zinc-950 text-[#16120D] dark:text-zinc-100 shadow-sm'
              : 'text-[#6B5C4B] dark:text-zinc-400 hover:text-[#16120D]'
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>สำรวจซับเน็ตมาตรฐาน (Single Subnet Explorer)</span>
        </button>
        <button
          onClick={() => setActiveTab('vlsm')}
          className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'vlsm'
              ? 'bg-[#FAF7F2] dark:bg-zinc-950 text-[#16120D] dark:text-zinc-100 shadow-sm'
              : 'text-[#6B5C4B] dark:text-zinc-400 hover:text-[#16120D]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>วางแผนจัดสรร VLSM (VLSM Department Planner)</span>
        </button>
      </div>

      {/* TAB 1: SINGLE SUBNET */}
      {activeTab === 'single' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800">
            <div>
              <label className="text-[#6B5C4B] dark:text-zinc-400 font-semibold mb-1 block">Network IP Address:</label>
              <input 
                type="text" 
                value={ip} 
                onChange={e => setIp(e.target.value)} 
                className="w-full p-2 rounded-lg bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-700 text-[#16120D] dark:text-zinc-100 font-mono"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[#6B5C4B] dark:text-zinc-400 font-semibold">Subnet Mask Prefix:</label>
                <span className="font-mono font-bold text-amber-900 dark:text-amber-300 bg-[#EAE3D5] dark:bg-zinc-800 px-2 py-0.5 rounded">/{prefix}</span>
              </div>
              <input 
                type="range" 
                min="8" 
                max="30" 
                value={prefix} 
                onChange={e => setPrefix(parseInt(e.target.value))} 
                className="w-full accent-amber-700 mt-1"
              />
              <div className="flex justify-between text-[10px] text-[#8E7E6A] font-mono mt-1">
                <span>/8 (Class A)</span>
                <span>/16 (Class B)</span>
                <span>/24 (Class C)</span>
                <span>/30 (P2P)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 text-center">
              <div className="text-[10px] text-[#8E7E6A] uppercase font-bold">Subnet Mask</div>
              <div className="font-mono font-bold text-[#16120D] dark:text-zinc-100 mt-0.5">{getMask(prefix)}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 text-center">
              <div className="text-[10px] text-[#8E7E6A] uppercase font-bold">Wildcard Mask</div>
              <div className="font-mono font-bold text-blue-800 dark:text-blue-300 mt-0.5">{getWildcard(prefix)}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 text-center">
              <div className="text-[10px] text-[#8E7E6A] uppercase font-bold">Usable Hosts (2^h - 2)</div>
              <div className="font-mono font-bold text-emerald-800 dark:text-emerald-300 mt-0.5">{usableHosts.toLocaleString()} โฮสต์</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 text-center">
              <div className="text-[10px] text-[#8E7E6A] uppercase font-bold">Block Size (Magic No.)</div>
              <div className="font-mono font-bold text-purple-800 dark:text-purple-300 mt-0.5">{totalHosts <= 256 ? totalHosts : `2^${hostBits}`}</div>
            </div>
          </div>

          {/* Address Boundary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800">
              <div className="text-[10px] text-[#8E7E6A] uppercase font-sans font-bold">1. Network ID (หมายเลขวง)</div>
              <div className="font-bold text-[#16120D] dark:text-zinc-100 mt-1">{intToIp(netInt)}/{prefix}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800">
              <div className="text-[10px] text-[#8E7E6A] uppercase font-sans font-bold">2. Usable Host Range (ใช้งานจริง)</div>
              <div className="font-bold text-emerald-800 dark:text-emerald-300 mt-1">{intToIp(firstUsableInt)} - {intToIp(lastUsableInt)}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800">
              <div className="text-[10px] text-[#8E7E6A] uppercase font-sans font-bold">3. Broadcast ID (บรอดคาสต์)</div>
              <div className="font-bold text-rose-800 dark:text-rose-300 mt-1">{intToIp(broadInt)}</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VLSM PLANNER */}
      {activeTab === 'vlsm' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 border-b border-[#DDD3C1]/60 dark:border-zinc-800">
              <div className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-700" />
                <span>เครือข่ายตั้งต้นหลัก (Major Network Scope):</span>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={majorNet} 
                  onChange={e => setMajorNet(e.target.value)} 
                  className="p-1.5 px-2.5 rounded-lg bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-700 font-mono text-xs w-36"
                />
                <span className="font-mono font-bold">/{majorPrefix}</span>
              </div>
            </div>

            {/* Add department form */}
            <form onSubmit={handleAddDept} className="flex flex-col sm:flex-row gap-2 pt-1">
              <input 
                type="text" 
                placeholder="ชื่อแผนก / ส่วนงานใหม่ (เช่น Server Farm)" 
                value={newDeptName} 
                onChange={e => setNewDeptName(e.target.value)} 
                className="flex-1 p-2 rounded-lg bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-700 text-xs"
              />
              <input 
                type="number" 
                placeholder="จำนวนโฮสต์ที่ต้องการ" 
                value={newDeptHosts} 
                onChange={e => setNewDeptHosts(e.target.value)} 
                className="w-full sm:w-40 p-2 rounded-lg bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-700 text-xs"
              />
              <button 
                type="submit" 
                className="px-3.5 py-2 rounded-lg bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 font-bold text-xs flex items-center justify-center gap-1 hover:opacity-90"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>เพิ่มแผนก</span>
              </button>
            </form>
          </div>

          {/* VLSM Output Table */}
          <div className="overflow-x-auto rounded-xl border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 font-bold text-[#16120D] dark:text-zinc-100">
                  <th className="p-2.5">ลำดับการจัดสรร</th>
                  <th className="p-2.5">ความต้องการ</th>
                  <th className="p-2.5">Subnet Mask</th>
                  <th className="p-2.5">Network ID</th>
                  <th className="p-2.5">ช่วงโฮสต์ใช้งานจริง</th>
                  <th className="p-2.5">Broadcast ID</th>
                  <th className="p-2.5 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD3C1]/50 dark:divide-zinc-800/50 font-mono">
                {vlsmData.results.map((r, idx) => (
                  <tr key={r.id} className="hover:bg-[#EAE3D5]/40 transition-colors">
                    <td className="p-2.5 font-sans font-semibold text-[#16120D] dark:text-zinc-100">
                      <span className="w-5 h-5 rounded-full bg-[#EAE3D5] dark:bg-zinc-800 inline-flex items-center justify-center text-[10px] mr-1.5 font-bold">
                        {idx + 1}
                      </span>
                      {r.name}
                    </td>
                    <td className="p-2.5 text-amber-900 dark:text-amber-300 font-bold">{r.hosts} โฮสต์ (จุได้ {r.capacity})</td>
                    <td className="p-2.5 text-[#6B5C4B] dark:text-zinc-400">/{r.prefix} ({r.mask})</td>
                    <td className="p-2.5 font-bold text-blue-900 dark:text-blue-300">{r.networkId}/{r.prefix}</td>
                    <td className="p-2.5 text-emerald-800 dark:text-emerald-300">{r.firstUsable} - {r.lastUsable}</td>
                    <td className="p-2.5 text-rose-800 dark:text-rose-300">{r.broadcastId}</td>
                    <td className="p-2.5 text-center">
                      <button 
                        onClick={() => handleRemoveDept(r.id)}
                        className="p-1 rounded text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-950/40 transition-colors"
                        title="ลบแผนกนี้"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary stats */}
          <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-[#16120D] dark:text-zinc-100">พื้นที่ไอพีว่างคงเหลือ (Free Space):</span>
              <span className="font-mono font-bold text-emerald-800 dark:text-emerald-300">{vlsmData.freeHosts} IPs</span>
            </div>
            <div className="text-[11px] font-mono text-[#8E7E6A] dark:text-zinc-400">
              IP ว่างถัดไปเริ่มต้นที่: <strong className="text-[#16120D] dark:text-zinc-200">{vlsmData.nextFreeIp}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
