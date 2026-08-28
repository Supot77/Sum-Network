import React from 'react';
import { ArrowRight, ArrowDown, Layers, Server, Laptop, Shield, Zap, Activity } from 'lucide-react';

export default function DiagramVisualizer({ moduleId, sectionIndex }) {
  // Return tailored diagrams based on moduleId and section
  if (moduleId === 1) {
    return (
      <div className="my-6 p-5 rounded-xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans">
        <div className="text-xs font-mono font-bold text-[#8E7E6A] uppercase mb-3">
          📊 แผนภาพ: วงจรการแปลงสภาพข้อมูลสู่สัญญาณสื่อสาร (Information Transfer Flow)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="text-amber-800 dark:text-amber-300 font-bold mb-1">1. Information</div>
            <div className="text-[11px] text-[#6B5C4B]">ข้อความ / ภาพ / เสียง (ความหมาย)</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="text-blue-800 dark:text-blue-300 font-bold mb-1">2. Data (Bits)</div>
            <div className="text-[11px] text-[#6B5C4B]">รหัสฐานสอง 0 และ 1 (ดิจิทัล)</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="text-emerald-800 dark:text-emerald-300 font-bold mb-1">3. Signal</div>
            <div className="text-[11px] text-[#6B5C4B]">สัญญาณไฟฟ้า / แสง / คลื่นวิทยุ</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="text-purple-800 dark:text-purple-300 font-bold mb-1">4. Medium</div>
            <div className="text-[11px] text-[#6B5C4B]">สายทองแดง / ใยแก้ว / อากาศ</div>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 2) {
    return (
      <div className="my-6 p-5 rounded-xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans">
        <div className="text-xs font-mono font-bold text-[#8E7E6A] uppercase mb-3">
          📊 แผนภาพ: การเปรียบเทียบสถาปัตยกรรม OSI 7-Layer vs. TCP/IP 5-Layer Stack
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-[#231D16] dark:text-zinc-200 pb-1">OSI Reference Model (7 Layers)</div>
            {['7. Application', '6. Presentation', '5. Session', '4. Transport (Segment)', '3. Network (Packet)', '2. Data Link (Frame)', '1. Physical (Bits)'].map((l, i) => (
              <div key={i} className="p-2 rounded bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 text-[#382F24] dark:text-zinc-300 flex items-center justify-between">
                <span>{l}</span>
                <span className="text-[10px] text-[#8E7E6A]">L{7-i}</span>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-[#231D16] dark:text-zinc-200 pb-1">TCP/IP Protocol Suite (5 Layers)</div>
            <div className="p-4 rounded bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 text-amber-800 dark:text-amber-300 font-semibold text-center h-[100px] flex flex-col justify-center">
              Application Layer (HTTP, DNS, SSH, FTP)
              <span className="text-[10px] text-[#8E7E6A] font-normal mt-0.5">รวม Session & Presentation</span>
            </div>
            {['Transport Layer (TCP / UDP)', 'Network Layer (IPv4 / IPv6 / ICMP)', 'Data Link Layer (Ethernet 802.3 / PPP)', 'Physical Layer (Electrical / Optical Signals)'].map((l, i) => (
              <div key={i} className="p-2 rounded bg-[#FAF7F2] dark:bg-zinc-950 border border-[#DDD3C1] dark:border-zinc-800 text-[#382F24] dark:text-zinc-300">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 4) {
    return (
      <div className="my-6 p-5 rounded-xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans">
        <div className="text-xs font-mono font-bold text-[#8E7E6A] uppercase mb-3">
          📊 แผนภาพ: โครงสร้าง Ethernet II Frame Header (ขนาด 14 ไบต์)
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="text-[#16120D] dark:text-zinc-100 font-bold">DMAC (6 Bytes)</div>
            <div className="text-[10px] text-[#8E7E6A] mt-1">Destination MAC</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="text-[#16120D] dark:text-zinc-100 font-bold">SMAC (6 Bytes)</div>
            <div className="text-[10px] text-[#8E7E6A] mt-1">Source MAC</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="text-[#16120D] dark:text-zinc-100 font-bold">Type (2 Bytes)</div>
            <div className="text-[10px] text-[#8E7E6A] mt-1">0x0800 (IP) / 0x0806 (ARP)</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800 col-span-3 sm:col-span-1">
            <div className="text-emerald-800 dark:text-emerald-300 font-bold">FCS (4 Bytes)</div>
            <div className="text-[10px] text-[#8E7E6A] mt-1">CRC-32 Error Check</div>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 5) {
    return (
      <div className="my-6 p-5 rounded-xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans">
        <div className="text-xs font-mono font-bold text-[#8E7E6A] uppercase mb-3">
          📊 แผนภาพ: โครงสร้าง IEEE 802.1Q VLAN Tag (ขนาด 4 ไบต์ / 32 บิต)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="font-bold text-blue-800 dark:text-blue-300">TPID (16 บิต)</div>
            <div className="text-[10px] text-[#8E7E6A] mt-1">ค่าคงที่ 0x8100 (ระบุแท็ก)</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="font-bold text-amber-800 dark:text-amber-300">PRI / PCP (3 บิต)</div>
            <div className="text-[10px] text-[#8E7E6A] mt-1">ระดับความสำคัญ QoS (0-7)</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="font-bold text-purple-800 dark:text-purple-300">CFI / DEI (1 บิต)</div>
            <div className="text-[10px] text-[#8E7E6A] mt-1">Drop Eligibility (0)</div>
          </div>
          <div className="p-3 bg-[#FAF7F2] dark:bg-zinc-950 rounded-lg border border-[#DDD3C1] dark:border-zinc-800">
            <div className="font-bold text-emerald-800 dark:text-emerald-300">VID (12 บิต)</div>
            <div className="text-[10px] text-[#8E7E6A] mt-1">VLAN ID (1 ถึง 4094)</div>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === 8) {
    return (
      <div className="my-6 p-5 rounded-xl bg-[#EAE3D5]/60 dark:bg-zinc-900/60 border border-[#DDD3C1] dark:border-zinc-800 font-sans">
        <div className="text-xs font-mono font-bold text-[#8E7E6A] uppercase mb-3">
          📊 แผนภาพ: โครงสร้าง IPv4 Packet Header (20 ไบต์พื้นฐาน)
        </div>
        <div className="space-y-1.5 text-center text-xs font-mono">
          <div className="grid grid-cols-4 gap-1.5">
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800">Version (4b)</div>
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800">IHL (4b)</div>
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800">TOS/DSCP (8b)</div>
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800 font-bold text-blue-800 dark:text-blue-300">Total Length (16b)</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800">Identification (16b)</div>
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800">Flags (3b: DF/MF)</div>
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800">Fragment Offset (13b)</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800 font-bold text-emerald-800 dark:text-emerald-300">TTL (8b)</div>
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800">Protocol (8b: TCP=6, UDP=17)</div>
            <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800">Header Checksum (16b)</div>
          </div>
          <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800 font-bold text-[#16120D] dark:text-zinc-100">
            Source IP Address (32 บิต / 4 ไบต์)
          </div>
          <div className="p-2 bg-[#FAF7F2] dark:bg-zinc-950 rounded border border-[#DDD3C1] dark:border-zinc-800 font-bold text-[#16120D] dark:text-zinc-100">
            Destination IP Address (32 บิต / 4 ไบต์)
          </div>
        </div>
      </div>
    );
  }

  // Default fallback
  return null;
}
