import React from 'react';
import { 
  ArrowRight, ArrowDown, Server, Laptop, Shield, Zap, 
  Network, Layers, Cpu, Database, HardDrive, Radio, Check, 
  Activity, GitCommit, Split, ToggleLeft, Disc, AlertTriangle,
  Globe, Share2, FolderTree, Key, RefreshCw, Terminal
} from 'lucide-react';

export default function BespokeDiagrams({ blockText }) {
  const text = blockText ? blockText.trim() : '';

  // ==========================================
  // CHAPTER 1 DIAGRAMS
  // ==========================================
  if (text.includes('Information') && text.includes('Transmission Medium') && text.includes('--->')) {
    const steps = [
      { num: 1, title: '1. ข้อมูลข่าวสาร', en: 'Information', note: 'เสียง, ภาพ, ข้อความ, วิดีโอ', icon: Activity, color: 'text-amber-800 dark:text-amber-300' },
      { num: 2, title: '2. ข้อมูลดิจิทัล', en: 'Digital Data', note: 'เลขฐานสอง 0 และ 1 (บิต)', icon: Cpu, color: 'text-blue-800 dark:text-blue-300' },
      { num: 3, title: '3. สัญญาณสื่อสาร', en: 'Signal', note: 'คลื่นไฟฟ้า / ลำแสง / คลื่นวิทยุ', icon: Zap, color: 'text-emerald-800 dark:text-emerald-300' },
      { num: 4, title: '4. ตัวกลางการสื่อสาร', en: 'Medium', note: 'สายทองแดง / ใยแก้ว / อากาศ', icon: Radio, color: 'text-purple-800 dark:text-purple-300' },
    ];
    return (
      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
          <Zap className="w-4 h-4 text-amber-700 dark:text-amber-400" />
          <span>วงจรการแปลงสารสนเทศสู่สัญญาณสื่อสาร (Information Transfer Process)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, i) => {
            const IconC = s.icon;
            return (
              <div key={i} className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-lg bg-[#EAE3D5] dark:bg-zinc-900 ${s.color}`}><IconC className="w-4 h-4" /></div>
                    <span className="text-[10px] font-mono text-[#8E7E6A] dark:text-zinc-500 font-bold uppercase">Step {s.num}</span>
                  </div>
                  <div className="font-bold text-sm text-[#16120D] dark:text-zinc-100">{s.title}</div>
                  <div className="text-xs font-mono text-[#6B5C4B] dark:text-zinc-400">({s.en})</div>
                </div>
                <div className="text-[11px] text-[#8E7E6A] dark:text-zinc-400 mt-3 pt-2 border-t border-[#DDD3C1]/50 dark:border-zinc-800 bg-[#F4EFE6] dark:bg-zinc-900/60 p-2 rounded-lg">💡 {s.note}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (text.includes('อุปกรณ์เครือข่ายหลักในระบบ Data Communication') || (text.includes('สวิตช์ (Switch)') && text.includes('ไฟร์วอลล์ (Firewall)'))) {
    const devices = [
      { name: '1. สวิตช์ (Switch)', role: 'เชื่อมต่ออุปกรณ์ใน LAN ส่งต่อข้อมูลด้วย MAC Address', layer: 'Layer 2 (Data Link)', icon: ToggleLeft },
      { name: '2. เราเตอร์ (Router)', role: 'เชื่อมต่อข้าม Subnet / WAN และหาเส้นทางด้วย IP', layer: 'Layer 3 (Network)', icon: Network },
      { name: '3. ไฟร์วอลล์ (Firewall)', role: 'ตรวจสอบ คัดกรองแพ็กเก็ต และรักษาความปลอดภัย', layer: 'Security Policy (L3-L7)', icon: Shield },
      { name: '4. อุปกรณ์ไร้สาย (WLAN AP / AC)', role: 'กระจายสัญญาณ Wi-Fi (AP) และควบคุมบริหารจากศูนย์กลาง (AC)', layer: 'Wireless 802.11', icon: Radio },
    ];
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center gap-2">
          <Server className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" />
          <h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">อุปกรณ์เครือข่ายหลักในระบบ Data Communication</h4>
        </div>
        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {devices.map((d, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF7F2] dark:bg-zinc-800 text-[#4F4335] dark:text-zinc-300 border border-[#DDD3C1] dark:border-zinc-700 flex-shrink-0"><d.icon className="w-4 h-4" /></div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">{d.name}</div>
                <div className="text-xs text-[#6B5C4B] dark:text-zinc-300 mt-0.5">{d.role}</div>
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-[#EAE3D5] dark:bg-zinc-800 text-[#8E7E6A] dark:text-zinc-400 border border-[#DDD3C1] dark:border-zinc-700">{d.layer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (text.includes('(1) Star') && text.includes('(5) Full-Mesh')) {
    const topologies = [
      { name: '1. Star (ดาว)', desc: 'ทุกอุปกรณ์ต่อเข้า Switch ศูนย์กลาง หากโฮสต์ใดเสียไม่กระทบโฮสต์อื่น นิยมสูงสุด', icon: '⭐' },
      { name: '2. Tree (ต้นไม้)', desc: 'ขยายจาก Star เป็นลำดับชั้น (Core, Distribution, Access) รองรับเครือข่ายขนาดใหญ่', icon: '🌲' },
      { name: '3. Ring (วงแหวน)', desc: 'เชื่อมต่อเป็นวงกลม โทเค็นหมุนวนรอบวง หากสายขาด 1 จุดระบบยังวนส่งต่อได้', icon: '⭕' },
      { name: '4. Bus (บัส)', desc: 'แชร์สายแกนร่วม (Backbone) มีตัว Terminate ปิดหัวท้าย เกิด Collision ง่าย (เลิกใช้แล้ว)', icon: '🚌' },
      { name: '5. Full-Mesh (ตาข่ายสมบูรณ์)', desc: 'ทุกโหนดมีสายตรงหากันทั้งหมด n(n-1)/2 เส้นทาง ทนทานสูงสุดแต่ต้นทุนแพง', icon: '🕸️' },
      { name: '6. Partial-Mesh (ตาข่ายบางส่วน)', desc: 'เชื่อมต่อเฉพาะโหนดสำคัญ ประหยัดต้นทุนและมีความพร้อมใช้งานสูง (High Availability)', icon: '📐' },
    ];
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center gap-2">
          <Network className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" />
          <h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">รูปแบบโทโพโลยีทางกายภาพและตรรกะ (Network Topologies Overview)</h4>
        </div>
        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topologies.map((t, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5"><span className="text-base">{t.icon}</span><span className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">{t.name}</span></div>
                <p className="text-xs text-[#6B5C4B] dark:text-zinc-300 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 2 DIAGRAMS
  // ==========================================
  if (text.includes('OSI Model (7 Layers)') && text.includes('Standard TCP/IP')) {
    const layers = [
      { osi: '7. Application', tcp5: '5. Application (HTTP, DNS, SSH, FTP)', tcp4: '4. Application Layer', pdu: 'Data' },
      { osi: '6. Presentation', tcp5: '5. Application (รวมเข้าด้วยกัน)', tcp4: '4. Application Layer', pdu: 'Data' },
      { osi: '5. Session', tcp5: '5. Application (รวมเข้าด้วยกัน)', tcp4: '4. Application Layer', pdu: 'Data' },
      { osi: '4. Transport', tcp5: '4. Transport Layer (TCP / UDP)', tcp4: '3. Transport Layer', pdu: 'Segment' },
      { osi: '3. Network', tcp5: '3. Network Layer (IPv4, IPv6, ICMP)', tcp4: '2. Internet Layer', pdu: 'Packet' },
      { osi: '2. Data Link', tcp5: '2. Data Link Layer (Ethernet 802.3)', tcp4: '1. Network Access', pdu: 'Frame' },
      { osi: '1. Physical', tcp5: '1. Physical Layer (Signals & Bits)', tcp4: '1. Network Access', pdu: 'Bits' },
    ];
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" />
          <h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">การเปรียบเทียบสถาปัตยกรรม OSI 7-Layer vs. TCP/IP Architecture</h4>
        </div>
        <div className="p-4 sm:p-5 overflow-x-auto">
          <div className="min-w-[600px] space-y-1.5 font-mono text-xs">
            <div className="grid grid-cols-4 gap-2 font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase text-[11px] pb-2 border-b border-[#DDD3C1] dark:border-zinc-800">
              <div>OSI Model (7 Layers)</div>
              <div className="col-span-2">Equivalent TCP/IP (5 Layers)</div>
              <div>หน่วยข้อมูล (PDU)</div>
            </div>
            {layers.map((l, i) => (
              <div key={i} className="grid grid-cols-4 gap-2 items-center p-2 rounded-lg bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1]/60 dark:border-zinc-800 text-[#382F24] dark:text-zinc-200">
                <div className="font-bold text-[#16120D] dark:text-zinc-100">{l.osi}</div>
                <div className="col-span-2 text-xs text-[#6B5C4B] dark:text-zinc-300">{l.tcp5}</div>
                <div><span className="px-2 py-0.5 rounded bg-[#EAE3D5] dark:bg-zinc-800 font-semibold text-[10px] text-[#16120D] dark:text-zinc-100">{l.pdu}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (text.includes('Application Data') && text.includes('Segment / Datagram') && text.includes('010101100101')) {
    const encapSteps = [
      { layer: 'Application', pdu: 'Data', header: 'Application Data', action: 'ผู้ใช้ส่งข้อมูลข้อความ/ไฟล์' },
      { layer: 'Transport (L4)', pdu: 'Segment', header: '[TH: Port Number] + Application Data', action: 'เพิ่ม Transport Header (TCP/UDP)' },
      { layer: 'Network (L3)', pdu: 'Packet', header: '[NH: IP Address] + [TH] + Data', action: 'เพิ่ม Network Header (Source/Dest IP)' },
      { layer: 'Data Link (L2)', pdu: 'Frame', header: '[DLH: MAC] + [NH] + [TH] + Data + [FCS: CRC]', action: 'เพิ่ม MAC Header และปิดท้ายด้วย FCS' },
      { layer: 'Physical (L1)', pdu: 'Bits', header: '010101100101010101010101... (Electrical / Optical Pulses)', action: 'แปลงเป็นบิตสัญญาณส่งออกสู่ตัวกลาง' },
    ];
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2"><Split className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" /><h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">วงจรการห่อหุ้มและถอดรหัสแพ็กเก็ต (Encapsulation & Decapsulation Flow)</h4></div>
          <span className="text-[10px] font-mono text-[#8E7E6A] uppercase">Top-Down & Bottom-Up</span>
        </div>
        <div className="p-4 sm:p-5 space-y-2.5">
          {encapSteps.map((s, i) => (
            <div key={i} className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 text-[10px] font-mono font-bold flex items-center justify-center">L{5-i}</span>
                <div><span className="font-bold text-[#16120D] dark:text-zinc-100">{s.layer}</span><span className="ml-2 px-2 py-0.5 rounded bg-[#EAE3D5] dark:bg-zinc-800 font-mono font-bold text-[10px] text-amber-800 dark:text-amber-300">PDU: {s.pdu}</span></div>
              </div>
              <div className="font-mono text-[11px] text-[#4F4335] dark:text-zinc-300 bg-[#FAF7F2] dark:bg-zinc-950 px-2.5 py-1 rounded border border-[#DDD3C1]/60 dark:border-zinc-800">{s.header}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 3 DIAGRAMS
  // ==========================================
  if (text.includes('Hardware Power-On') && text.includes('BootROM') && text.includes('Load VRP')) {
    const bootSteps = [
      { step: 1, title: '1. Power-On & POST', desc: 'จ่ายไฟและชิปฮาร์ดแวร์ตรวจสอบความสมบูรณ์วงจรหลัก (CPU, SDRAM)' },
      { step: 2, title: '2. Run BootROM Software', desc: 'รันโปรแกรม BootLoader เตรียมบัสและอุปกรณ์จัดเก็บเพื่อเตรียมโหลด OS' },
      { step: 3, title: '3. Load VRP System Software', desc: 'ค้นหาและโหลดไฟล์ระบบ .cc จาก Flash เข้าสู่ SDRAM แล้วเริ่มรันเคอร์เนล' },
      { step: 4, title: '4. Load Configuration File', desc: 'โหลดไฟล์ startup saved-configuration (vrpcfg.zip) มาเป็น Running Config' },
    ];
    return (
      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
          <Zap className="w-4 h-4 text-amber-700 dark:text-amber-400" />
          <span>กระบวนการเริ่มต้นระบบของอุปกรณ์เครือข่าย (Device Initialization Process)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {bootSteps.map((b, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 text-[10px] font-mono font-bold flex items-center justify-center">{b.step}</span>
                  <span className="text-[10px] font-mono text-[#8E7E6A] dark:text-zinc-500 font-bold uppercase">Step {b.step}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">{b.title}</div>
              </div>
              <div className="text-[11px] text-[#8E7E6A] dark:text-zinc-400 mt-2.5 pt-2 border-t border-[#DDD3C1]/50 dark:border-zinc-800">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (text.includes('<Huawei> (User View') && text.includes('[system-view]')) {
    const views = [
      { prompt: '<Huawei>', name: 'User View (โหมดผู้ใช้ทั่วไป)', desc: 'ดูสถานะระบบ, ทดสอบ Ping, Tracert, บันทึก Save คอนฟิก', cmd: 'คำสั่งเข้า: เริ่มต้นเมื่อเชื่อมต่อ' },
      { prompt: '[Huawei]', name: 'System View (โหมดผู้ดูแลระบบ)', desc: 'กำหนดค่าคอนฟิกระดับโกลบอล เช่น Sysname, Routing, User-interface', cmd: 'คำสั่งเข้า: system-view' },
      { prompt: '[Huawei-GE0/0/1]', name: 'Interface View (โหมดพอร์ต)', desc: 'กำหนดค่าพอร์ตทางกายภาพ เช่น IP Address, Port Link-type, VLAN', cmd: 'คำสั่งเข้า: interface GigabitEthernet 0/0/1' },
      { prompt: '[Huawei-ospf-1]', name: 'Protocol View (โหมดโปรโตคอล)', desc: 'กำหนดค่าโปรโตคอลการหาเส้นทาง เช่น OSPF Area, Network Statement', cmd: 'คำสั่งเข้า: ospf 1' },
    ];
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" />
          <h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">ลำดับชั้นของมุมมองคำสั่งใน VRP (Command View Hierarchy)</h4>
        </div>
        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {views.map((v, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="font-mono font-bold text-xs text-amber-900 dark:text-amber-300 bg-[#EAE3D5] dark:bg-zinc-800 px-2 py-0.5 rounded inline-block mb-1.5">{v.prompt}</div>
                <div className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">{v.name}</div>
                <div className="text-xs text-[#6B5C4B] dark:text-zinc-300 mt-1 leading-relaxed">{v.desc}</div>
              </div>
              <div className="text-[10px] font-mono text-[#8E7E6A] dark:text-zinc-400 mt-2.5 pt-2 border-t border-[#DDD3C1]/50 dark:border-zinc-800">{v.cmd}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 4 DIAGRAMS
  // ==========================================
  if (text.includes('Collision Domain') && text.includes('Micro-segmentation with Switch') && text.includes('Broadcast Domain')) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center gap-2">
          <Network className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" />
          <h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">การเปรียบเทียบแนวคิดสำคัญ: Collision Domain vs. Broadcast Domain</h4>
        </div>
        <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 space-y-2">
            <div className="font-bold text-rose-900 dark:text-rose-300 flex items-center gap-1.5"><AlertTriangle className="w-4 h-4" /><span>1. Hub / Repeater (Collision)</span></div>
            <p className="text-[#6B5C4B] dark:text-zinc-300 leading-relaxed">อุปกรณ์ทุกตัวแชร์สายสัญญาณเดียวกัน ทำงานแบบ Half-Duplex หากส่งพร้อมกันจะเกิดสัญญาณชนกัน (Collision) ทันที</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 space-y-2">
            <div className="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-1.5"><ToggleLeft className="w-4 h-4" /><span>2. Switch Micro-segmentation</span></div>
            <p className="text-[#6B5C4B] dark:text-zinc-300 leading-relaxed">สวิตช์แยกแต่ละพอร์ตให้เป็น 1 Collision Domain อิสระ ทำงานแบบ Full-Duplex ไม่มีสัญญาณชนกัน 100%</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 space-y-2">
            <div className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5"><Network className="w-4 h-4" /><span>3. Router Broadcast Domain</span></div>
            <p className="text-[#6B5C4B] dark:text-zinc-300 leading-relaxed">สวิตช์ทุกตัวอยู่ใน 1 Broadcast Domain เดียวกัน ส่วน <strong>เราเตอร์ (Router)</strong> เป็นอุปกรณ์ที่ทำหน้าที่แบ่งแยก Broadcast Domain ออกจากกัน</p>
          </div>
        </div>
      </div>
    );
  }

  if (text.includes('MAC Address (48 Bits)') && text.includes('OUI (Vendor ID)')) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2"><Cpu className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" /><h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">โครงสร้างหมายเลขประจำฮาร์ดแวร์ MAC Address (ขนาด 48 บิต / 6 ไบต์)</h4></div>
          <span className="text-[10px] font-mono text-[#8E7E6A]">IEEE 802 Standards</span>
        </div>
        <div className="p-4 sm:p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800">
              <div className="font-bold text-blue-800 dark:text-blue-300 text-sm">24 Bits: OUI (Vendor ID)</div>
              <div className="text-[11px] text-[#6B5C4B] dark:text-zinc-400 mt-1">รหัสผู้ผลิตที่กำหนดโดยองค์กร IEEE (เช่น 00-E0-FC สำหรับ Huawei)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800">
              <div className="font-bold text-emerald-800 dark:text-emerald-300 text-sm">24 Bits: Vendor Assigned (NIC ID)</div>
              <div className="text-[11px] text-[#6B5C4B] dark:text-zinc-400 mt-1">หมายเลขลำดับการผลิตที่โรงงานกำหนด ไม่ซ้ำกันในโลก</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1]/60 dark:border-zinc-800 text-xs text-[#382F24] dark:text-zinc-300 font-sans space-y-1">
            <div>• <strong>I/G Bit (บิตที่ 7):</strong> 0 = Individual (Unicast ส่งเจาะจงเครื่อง), 1 = Group (Multicast/Broadcast)</div>
            <div>• <strong>G/L Bit (บิตที่ 8):</strong> 0 = Globally Unique (กำหนดโดยโรงงานมาตรฐาน), 1 = Locally Administered (สร้างเอง)</div>
          </div>
        </div>
      </div>
    );
  }

  if (text.includes('Preamble') && text.includes('SFD') && text.includes('D.MAC') && text.includes('FCS')) {
    const fields = [
      { name: 'Preamble', size: '7 Bytes', desc: 'ซิงค์จังหวะสัญญาณ', color: 'bg-zinc-200 dark:bg-zinc-800' },
      { name: 'SFD', size: '1 Byte', desc: 'Start (10101011)', color: 'bg-zinc-200 dark:bg-zinc-800' },
      { name: 'Destination MAC', size: '6 Bytes', desc: 'MAC ปลายทาง (DMAC)', color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200' },
      { name: 'Source MAC', size: '6 Bytes', desc: 'MAC ต้นทาง (SMAC)', color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200' },
      { name: 'Type', size: '2 Bytes', desc: '0x0800(IP) / 0x0806(ARP)', color: 'bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200' },
      { name: 'Payload', size: '46-1500 B', desc: 'IP Packet และเนื้อหา', color: 'bg-[#FAF7F2] dark:bg-zinc-900' },
      { name: 'FCS (CRC)', size: '4 Bytes', desc: 'ตรวจสอบความถูกต้อง', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200' },
    ];
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2"><Layers className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" /><h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">โครงสร้างเฟรม Ethernet II Frame Format (IEEE 802.3)</h4></div>
          <span className="text-[10px] font-mono text-[#8E7E6A]">Header: 14B + FCS: 4B</span>
        </div>
        <div className="p-4 sm:p-5 overflow-x-auto">
          <div className="min-w-[650px] grid grid-cols-7 gap-2 text-center text-xs font-mono">
            {fields.map((f, i) => (
              <div key={i} className={`p-3 rounded-xl border border-[#DDD3C1] dark:border-zinc-800 ${f.color} flex flex-col justify-between`}>
                <div><div className="font-bold text-[11px]">{f.name}</div><div className="text-[10px] text-[#8E7E6A] font-semibold mt-0.5">{f.size}</div></div>
                <div className="text-[9px] text-[#6B5C4B] dark:text-zinc-400 mt-2 font-sans">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (text.includes('[PC1: 192.168.1.1') && text.includes('[ Switch ]') && text.includes('[PC2: 192.168.1.2')) {
    return (
      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
            <Activity className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>กระบวนการค้นหาแอดเดรส Address Resolution Protocol (ARP Flow)</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800">
          <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 text-center font-mono text-xs w-full sm:w-48">
            <Laptop className="w-5 h-5 mx-auto text-[#8E7E6A] mb-1" />
            <div className="font-bold text-[#16120D] dark:text-zinc-100">PC1 (Sender)</div>
            <div className="text-[11px] text-blue-700 dark:text-blue-300">192.168.1.1</div>
            <div className="text-[10px] text-[#8E7E6A]">MAC-A</div>
          </div>
          <div className="flex-1 text-center font-mono text-xs space-y-1">
            <div className="p-2.5 rounded-lg bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800"><span className="font-bold text-amber-800 dark:text-amber-300">1. ARP Request:</span> ใครถือ IP 192.168.1.2? (Broadcast)</div>
            <div className="p-2.5 rounded-lg bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800"><span className="font-bold text-emerald-800 dark:text-emerald-300">2. ARP Reply:</span> ฉันคือ 192.168.1.2 MAC คือ MAC-B (Unicast)</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 text-center font-mono text-xs w-full sm:w-48">
            <Laptop className="w-5 h-5 mx-auto text-[#8E7E6A] mb-1" />
            <div className="font-bold text-[#16120D] dark:text-zinc-100">PC2 (Target)</div>
            <div className="text-[11px] text-emerald-700 dark:text-emerald-300">192.168.1.2</div>
            <div className="text-[10px] text-[#8E7E6A]">MAC-B</div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 5 DIAGRAMS (VLAN)
  // ==========================================
  if (text.includes('Traditional Flat Ethernet') || text.includes('VLAN Segmentation - แยก Broadcast Domain')) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center gap-2">
          <FolderTree className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" />
          <h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">การแบ่งแยกโดเมนกระจายสัญญาณด้วย VLAN (VLAN Segmentation Architecture)</h4>
        </div>
        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-2">
            <div className="font-bold text-rose-900 dark:text-rose-300">❌ Flat Network (ไม่มี VLAN)</div>
            <div className="text-rose-800 dark:text-rose-300 leading-relaxed">• ทราฟฟิก Broadcast แพร่กระจายรบกวนทุกแผนก (HR, Finance, Guest)<br />• ขาดความปลอดภัย สามารถดักฟังข้อมูลข้ามแผนกได้ง่าย</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
            <div className="font-bold text-emerald-900 dark:text-emerald-300">✅ VLAN Segmentation (มี VLAN)</div>
            <div className="text-emerald-800 dark:text-emerald-300 leading-relaxed">• <strong>VLAN 10 (HR):</strong> 192.168.10.0/24<br />• <strong>VLAN 20 (Finance):</strong> 192.168.20.0/24<br />• สื่อสารข้าม VLAN ต้องผ่าน Layer 3 Routing พร้อมตรวจสอบสิทธิ์</div>
          </div>
        </div>
      </div>
    );
  }

  if (text.includes('802.1Q VLAN Tag') && text.includes('TPID (16 Bits)')) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2"><Layers className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" /><h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">โครงสร้างแท็ก IEEE 802.1Q VLAN Tag (ขนาด 4 ไบต์ / 32 บิต)</h4></div>
          <span className="text-[10px] font-mono text-[#8E7E6A]">Tagged Frame Header</span>
        </div>
        <div className="p-4 sm:p-5 space-y-3 font-mono text-xs text-center">
          <div className="grid grid-cols-4 gap-2">
            <div className="p-3 bg-blue-100 dark:bg-blue-950/40 border border-[#DDD3C1] dark:border-zinc-800 rounded-xl text-blue-900 dark:text-blue-300"><div className="font-bold">TPID (16 บิต)</div><div className="text-[10px] text-[#8E7E6A] mt-1">0x8100 (ระบุ 802.1Q)</div></div>
            <div className="p-3 bg-amber-100 dark:bg-amber-950/40 border border-[#DDD3C1] dark:border-zinc-800 rounded-xl text-amber-900 dark:text-amber-300"><div className="font-bold">PRI / PCP (3 บิต)</div><div className="text-[10px] text-[#8E7E6A] mt-1">QoS Priority (0-7)</div></div>
            <div className="p-3 bg-purple-100 dark:bg-purple-950/40 border border-[#DDD3C1] dark:border-zinc-800 rounded-xl text-purple-900 dark:text-purple-300"><div className="font-bold">CFI / DEI (1 บิต)</div><div className="text-[10px] text-[#8E7E6A] mt-1">Drop Eligibility (0)</div></div>
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950/40 border border-[#DDD3C1] dark:border-zinc-800 rounded-xl text-emerald-900 dark:text-emerald-300"><div className="font-bold">VID (12 บิต)</div><div className="text-[10px] text-[#8E7E6A] mt-1">VLAN ID (1-4094)</div></div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 6 DIAGRAMS (STP)
  // ==========================================
  if (text.includes('ขั้นตอนที่ 1: เลือก Root Bridge') && text.includes('ขั้นตอนที่ 4: บล็อกพอร์ตที่เหลือ')) {
    const stpSteps = [
      { step: 1, title: '1. เลือก Root Bridge', desc: 'เลือกสวิตช์ที่มี Bridge ID (Priority + MAC) ต่ำที่สุด เป็นรากศูนย์กลาง (Root)' },
      { step: 2, title: '2. เลือก Root Port (RP)', desc: 'สวิตช์ Non-Root ทุกตัวเลือก 1 พอร์ตเส้นทางที่ดีที่สุด (Lowest RPC) ไปหา Root' },
      { step: 3, title: '3. เลือก Designated Port (DP)', desc: 'ในแต่ละสายเชื่อมต่อ (Segment) เลือก 1 พอร์ตที่ดีที่สุดทำหน้าที่ส่งต่อ BPDU' },
      { step: 4, title: '4. บล็อก Alternate Port (AP)', desc: 'พอร์ตที่ไม่ได้เป็นทั้ง RP และ DP จะถูกสั่ง Blocking เพื่อตัดลูป Layer 2 100%' },
    ];
    return (
      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
          <GitCommit className="w-4 h-4 text-amber-700 dark:text-amber-400" />
          <span>กระบวนการคำนวณและตัดลูป STP 4-Step Election Process</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stpSteps.map((s, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#231D16] text-[#FAF7F2] dark:bg-zinc-100 dark:text-zinc-950 text-[10px] font-mono font-bold flex items-center justify-center">{s.step}</span>
                  <span className="text-[10px] font-mono text-[#8E7E6A] dark:text-zinc-500 font-bold uppercase">Step {s.step}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">{s.title}</div>
              </div>
              <div className="text-[11px] text-[#8E7E6A] dark:text-zinc-400 mt-2.5 pt-2 border-t border-[#DDD3C1]/50 dark:border-zinc-800">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 7 DIAGRAMS (ETH-TRUNK & CLUSTER)
  // ==========================================
  if (text.includes('Eth-Trunk 1 (Logical Link = 3 Gbps') || (text.includes('Switch A') && text.includes('GigabitEthernet 1 Gbps'))) {
    return (
      <div className="my-6 p-5 rounded-2xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
          <Share2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
          <span>การรวมลิงก์ทางกายภาพ Link Aggregation (Eth-Trunk Bundle)</span>
        </div>
        <div className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="p-3 bg-[#EAE3D5] dark:bg-zinc-900 rounded-xl text-center w-36"><Server className="w-5 h-5 mx-auto mb-1 text-zinc-500" /><div className="font-bold">Switch-A</div></div>
          <div className="flex-1 w-full space-y-1.5 text-center">
            <div className="p-1.5 rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-[11px]">Member Link 1: 1 Gbps (Active)</div>
            <div className="p-1.5 rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-[11px]">Member Link 2: 1 Gbps (Active)</div>
            <div className="p-1.5 rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-[11px]">Member Link 3: 1 Gbps (Active)</div>
            <div className="text-[10px] text-[#8E7E6A] pt-1 font-sans">⚡ แบนด์วิดท์รวม Eth-Trunk 1 = <strong>3 Gbps</strong> พร้อมระบบสำรองอัตโนมัติ</div>
          </div>
          <div className="p-3 bg-[#EAE3D5] dark:bg-zinc-900 rounded-xl text-center w-36"><Server className="w-5 h-5 mx-auto mb-1 text-zinc-500" /><div className="font-bold">Switch-B</div></div>
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 8 DIAGRAMS (IPV4 & SUBNETTING)
  // ==========================================
  if (text.includes('Version') && text.includes('IHL') && text.includes('Total Length') && text.includes('Source IP Address')) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2"><Layers className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" /><h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">โครงสร้าง IPv4 Packet Header (20 Bytes Base Header Grid)</h4></div>
          <span className="text-[10px] font-mono text-[#8E7E6A]">32-Bit Word Alignment</span>
        </div>
        <div className="p-4 sm:p-5 space-y-1.5 font-mono text-xs text-center">
          <div className="grid grid-cols-4 gap-1.5">
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">Version (4b)</div>
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">IHL (4b)</div>
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">TOS / DSCP (8b)</div>
            <div className="p-2 bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Total Length (16b)</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">Identification (16b)</div>
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">Flags (3b)</div>
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">Fragment Offset (13b)</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">TTL (8b)</div>
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Protocol (8b: TCP=6, UDP=17)</div>
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">Header Checksum (16b)</div>
          </div>
          <div className="p-2.5 bg-amber-100/70 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Source IP Address (32 บิต / 4 ไบต์)</div>
          <div className="p-2.5 bg-amber-100/70 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Destination IP Address (32 บิต / 4 ไบต์)</div>
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 10 DIAGRAMS (OSPF)
  // ==========================================
  if (text.includes('[Down]') && text.includes('[Init]') && text.includes('[Full]')) {
    const ospfStates = [
      { name: '1. Down', desc: 'ยังไม่ได้รับ Hello' },
      { name: '2. Init', desc: 'ได้รับ Hello แต่ยังไม่เห็นตนเอง' },
      { name: '3. 2-Way', desc: 'เห็นตนเอง (เลือก DR/BDR)' },
      { name: '4. ExStart', desc: 'ตกลง Master/Slave & Seq' },
      { name: '5. Exchange', desc: 'แลกเปลี่ยนสรุป DD' },
      { name: '6. Loading', desc: 'ส่งคำขอ LSR / อัปเดต LSU' },
      { name: '7. Full', desc: 'LSDB ซิงค์สมบูรณ์ 100%' },
    ];
    return (
      <div className="my-6 p-5 rounded-2xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#8E7E6A] dark:text-zinc-400 uppercase">
          <Activity className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
          <span>ลำดับ 7 สถานะความสัมพันธ์เพื่อนบ้าน OSPF Neighbor State Machine</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-mono">
          {ospfStates.map((s, i) => (
            <div key={i} className="p-3 rounded-xl bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 flex flex-col justify-between">
              <div className="font-bold text-[#16120D] dark:text-zinc-100">{s.name}</div>
              <div className="text-[10px] text-[#8E7E6A] dark:text-zinc-400 mt-1 font-sans">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 11 DIAGRAMS (IPV6)
  // ==========================================
  if (text.includes('Traffic Class') && text.includes('Flow Label') && text.includes('Payload Length') && text.includes('Source Address')) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" /><h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">โครงสร้าง IPv6 Fixed Base Header (ขนาดคงที่ 40 ไบต์)</h4></div>
          <span className="text-[10px] font-mono text-[#8E7E6A]">Streamlined 40-Byte Header</span>
        </div>
        <div className="p-4 sm:p-5 space-y-1.5 font-mono text-xs text-center">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">Version (4b: 0110)</div>
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">Traffic Class (8b)</div>
            <div className="p-2 bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Flow Label (20b)</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Payload Length (16b)</div>
            <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Next Header (8b)</div>
            <div className="p-2 bg-[#EAE3D5] dark:bg-zinc-900 border border-[#DDD3C1] dark:border-zinc-800 rounded">Hop Limit (8b: แทน TTL)</div>
          </div>
          <div className="p-3 bg-amber-100/70 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Source IPv6 Address (128 บิต / 16 ไบต์)</div>
          <div className="p-3 bg-amber-100/70 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-[#DDD3C1] dark:border-zinc-800 rounded font-bold">Destination IPv6 Address (128 บิต / 16 ไบต์)</div>
        </div>
      </div>
    );
  }

  // ==========================================
  // CHAPTER 12 DIAGRAMS (INTER-VLAN)
  // ==========================================
  if (text.includes('Traditional Multi-Interface') && text.includes('Router-on-a-Stick') && text.includes('Layer 3 Switch with VLANIF')) {
    return (
      <div className="my-6 rounded-2xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950 font-sans shadow-sm">
        <div className="px-5 py-3 bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 flex items-center gap-2">
          <Split className="w-4 h-4 text-[#8E7E6A] dark:text-zinc-400" />
          <h4 className="font-bold text-xs sm:text-sm text-[#16120D] dark:text-zinc-100">วิวัฒนาการ 3 รูปแบบการสื่อสารข้าม VLAN (Inter-VLAN Communication)</h4>
        </div>
        <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 space-y-2">
            <div className="font-bold text-[#16120D] dark:text-zinc-100">1. Traditional Multi-Router</div>
            <p className="text-[#6B5C4B] dark:text-zinc-300 leading-relaxed">ใช้สาย LAN 1 เส้นต่อ 1 VLAN เปลืองพอร์ตเราเตอร์อย่างมาก (เลิกใช้แล้ว)</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F4EFE6] dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 space-y-2">
            <div className="font-bold text-amber-900 dark:text-amber-300">2. Router-on-a-Stick</div>
            <p className="text-[#6B5C4B] dark:text-zinc-300 leading-relaxed">ใช้สาย Trunk เส้นเดียวแบ่ง Sub-interface (dot1q) แต่เกิดคอขวดบนสายสัญญาณและ CPU เราเตอร์</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-800 space-y-2">
            <div className="font-bold text-emerald-900 dark:text-emerald-300">3. Layer 3 Switch (VLANIF) 👑</div>
            <p className="text-emerald-800 dark:text-emerald-300 leading-relaxed">ใช้อินเทอร์เฟซเสมือน VLANIF และส่งต่อข้อมูลด้วยชิปฮาร์ดแวร์ ASIC Wire-speed ไร้คอขวด (มาตรฐานปัจจุบัน)</p>
          </div>
        </div>
      </div>
    );
  }

  // Not matched in Bespoke
  return null;
}
