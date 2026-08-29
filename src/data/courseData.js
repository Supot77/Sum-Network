import { CHAPTER_QUIZZES } from './quizDatabase';
import { STRUCTURED_CHAPTERS } from './structuredChapters';

const MODULES_CONFIG = [
  {
    id: 1,
    slug: '01-data-communication-network-basis',
    title: 'บทที่ 1: พื้นฐานการสื่อสารข้อมูลและเครือข่าย',
    subtitle: 'Data Communication & Network Basics',
    category: 'Fundamentals & OS',
    categoryTh: 'ระดับ 1: พื้นฐานและระบบปฏิบัติการ',
    icon: 'Network',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'Universal Topology & Fault Sandbox',
    labDescription: 'ทดลองจำลองและสั่งตัดสายสัญญาณบนโทโพโลยีแบบต่างๆ (Star, Tree, Ring, Bus, Mesh) เพื่อดูผลกระทบต่อระบบเครือข่าย'
  },
  {
    id: 2,
    slug: '02-network-reference-model',
    title: 'บทที่ 2: แบบจำลองอ้างอิงเครือข่าย OSI และ TCP/IP',
    subtitle: 'Network Reference Models (OSI 7-Layer & TCP/IP 5-Layer)',
    category: 'Fundamentals & OS',
    categoryTh: 'ระดับ 1: พื้นฐานและระบบปฏิบัติการ',
    icon: 'Layers',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'Encapsulation Studio & Packet Inspector',
    labDescription: 'ส่องดูการบรรจุและแกะซอง Header ของแพ็กเก็ตทุกระดับชั้น (PDU) พร้อมทดลองเปรียบเทียบการทำงานของ TCP Handshake กับ UDP Stream'
  },
  {
    id: 3,
    slug: '03-huawei-vrp-basics',
    title: 'บทที่ 3: พื้นฐานระบบปฏิบัติการ Huawei VRP',
    subtitle: 'Huawei Versatile Routing Platform (VRP) Operations',
    category: 'Fundamentals & OS',
    categoryTh: 'ระดับ 1: พื้นฐานและระบบปฏิบัติการ',
    icon: 'Terminal',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'Huawei VRP CLI Terminal Emulator',
    labDescription: 'ทดลองพิมพ์คำสั่งจริงบน CLI Terminal สลับ Command Views (User, System, Interface), ใช้ Tab และ context help ? เสมือนใช้งานอุปกรณ์จริง'
  },
  {
    id: 4,
    slug: '04-ethernet-switching-basics',
    title: 'บทที่ 4: พื้นฐานการสวิตชิ่งบนเครือข่ายอีเธอร์เน็ต',
    subtitle: 'Ethernet Switching Principles & MAC Address Operations',
    category: 'Layer 2 Switching',
    categoryTh: 'ระดับ 2: สวิตชิ่งระดับ Layer 2',
    icon: 'ToggleLeft',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'Switch MAC Table & Forwarding Lab',
    labDescription: 'ส่งเฟรมระหว่างโฮสต์เพื่อดูสวิตช์เรียนรู้ Source MAC, อัปเดตตาราง CAM, นับถอยหลัง Aging Timer (300s) และสลับระหว่าง Flooding กับ Unicast Forwarding'
  },
  {
    id: 5,
    slug: '05-vlan-principles-and-configuration',
    title: 'บทที่ 5: หลักการทำงานและการคอนฟิก Virtual LAN (VLAN)',
    subtitle: 'VLAN Principles, 802.1Q Tagging & Port Link Types',
    category: 'Layer 2 Switching',
    categoryTh: 'ระดับ 2: สวิตชิ่งระดับ Layer 2',
    icon: 'FolderKanban',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'VLAN 802.1Q Tagging & Port Studio',
    labDescription: 'ทดลองกำหนดบทบาทพอร์ต Access, Trunk, Hybrid ปรับค่า PVID และสังเกตการแทรก/ปลดแท็ก (Tagging/Untagging) ของเฟรมแบบ Real-time'
  },
  {
    id: 6,
    slug: '06-stp-principles-and-configuration',
    title: 'บทที่ 6: โปรโตคอล Spanning Tree (STP และ RSTP)',
    subtitle: 'Spanning Tree Protocols (STP/RSTP) & Loop Prevention',
    category: 'Layer 2 Switching',
    categoryTh: 'ระดับ 2: สวิตชิ่งระดับ Layer 2',
    icon: 'GitFork',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'STP/RSTP 4-Step Election Simulator',
    labDescription: 'ดูการคำนวณเลือก Root Bridge, Root Port, Designated Port และ Alternate Port แบบอัตโนมัติ ทดลองกดสั่งตัดสายเคเบิลเพื่อดูระบบลู่เข้าใหม่'
  },
  {
    id: 7,
    slug: '07-eth-trunk-istack-and-css',
    title: 'บทที่ 7: การรวมลิงก์ Eth-Trunk และการสแต็กสวิตช์ (iStack & CSS)',
    subtitle: 'Link Aggregation (Eth-Trunk) & Switch Virtualization',
    category: 'Enterprise Reliability',
    categoryTh: 'ระดับ 3: ความน่าเชื่อถือระดับองค์กร',
    icon: 'Network',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'Eth-Trunk & LACP Cluster Simulator',
    labDescription: 'ทดลองรวมพอร์ตทางกายภาพเป็น Eth-Trunk ปรับค่า LACP Priority เพื่อเลือก Actor/Active Links และจำลองการรวมสแต็ก iStack/CSS'
  },
  {
    id: 8,
    slug: '08-network-layer-protocols-and-ip-addressing',
    title: 'บทที่ 8: โปรโตคอล Network Layer และการกำหนดหมายเลขไอพี',
    subtitle: 'Network Layer Protocols, Subnetting & VLSM Design',
    category: 'Layer 3 Routing',
    categoryTh: 'ระดับ 4: แอดเดรสและการหาเส้นทาง Layer 3',
    icon: 'Binary',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'Subnetting & VLSM Master Studio',
    labDescription: 'เครื่องมือคำนวณการแบ่งซับเน็ตแบบ Bit-by-Bit และระบบวางแผนจัดสรร VLSM สำหรับแต่ละแผนกองค์กร (Sales, IT, HR, WAN)'
  },
  {
    id: 9,
    slug: '09-ip-routing-basics',
    title: 'บทที่ 9: พื้นฐานการค้นหาและเลือกเส้นทางไอพี (IP Routing)',
    subtitle: 'IP Routing Principles, Longest Match & Static Routing',
    category: 'Layer 3 Routing',
    categoryTh: 'ระดับ 4: แอดเดรสและการหาเส้นทาง Layer 3',
    icon: 'Signpost',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'IP Routing Table & Hop-by-Hop Rewriter',
    labDescription: 'ทดลองส่งแพ็กเก็ตข้ามเราเตอร์หลายตัว ดูการค้นหาตาราง Routing Table กฎ Longest Match และการ Rewrite Source/Dest MAC ที่ Layer 2 ในแต่ละ Hop'
  },
  {
    id: 10,
    slug: '10-ospf-basics',
    title: 'บทที่ 10: พื้นฐานโปรโตคอล OSPF (Open Shortest Path First)',
    subtitle: 'OSPF Dynamic Routing, Link-State Database & SPF Algorithm',
    category: 'Layer 3 Routing',
    categoryTh: 'ระดับ 4: แอดเดรสและการหาเส้นทาง Layer 3',
    icon: 'Network',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'OSPF 7-State & Multi-Area Simulator',
    labDescription: 'จำลองการแลกเปลี่ยนแพ็กเก็ต Hello, DD, LSR, LSU, LSAck ผ่าน 7 สถานะ (Down สู่ Full) พร้อมการเลือกตั้ง DR/BDR และการคำนวณ SPF Tree'
  },
  {
    id: 11,
    slug: '11-ipv6-basics',
    title: 'บทที่ 11: พื้นฐานระบบเครือข่าย IPv6 ยุคใหม่',
    subtitle: 'Next-Generation IPv6 Addressing, NDP & SLAAC Configuration',
    category: 'Next-Gen & Advanced',
    categoryTh: 'ระดับ 5: เครือข่ายยุคใหม่และการสื่อสารข้ามเซ็กเมนต์',
    icon: 'Globe',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'IPv6 Address Studio & SLAAC Simulator',
    labDescription: 'ทดลองแปลง MAC เป็น EUI-64 Interface ID, ย่อแอดเดรส IPv6, และจำลองกระบวนการแจกไอพีอัตโนมัติแบบไร้สถานะ (SLAAC) และการหา MAC ด้วย NDP'
  },
  {
    id: 12,
    slug: '12-inter-vlan-communication',
    title: 'บทที่ 12: การสื่อสารระหว่าง VLAN (Inter-VLAN Routing)',
    subtitle: 'Inter-VLAN Routing, Sub-interfaces & Layer 3 Switch VLANIF',
    category: 'Next-Gen & Advanced',
    categoryTh: 'ระดับ 5: เครือข่ายยุคใหม่และการสื่อสารข้ามเซ็กเมนต์',
    icon: 'Split',
    overview: 'เนื้อหาตำราฉบับสมบูรณ์ครอบคลุมทุกหัวข้ออย่างละเอียดตามหลักสูตรวิศวกรรมเครือข่าย',
    labName: 'Inter-VLAN 3-Way Comparative Lab',
    labDescription: 'เปรียบเทียบโฟลว์การส่งข้อมูลข้าม VLAN ระหว่าง Router-on-a-Stick กับ Layer 3 Switch VLANIF ดูการแทรก/ปลดแท็ก และการ Rewrite MAC ที่ฮาร์ดแวร์ ASIC'
  }
];

export const COURSE_MODULES = MODULES_CONFIG.map(m => ({
  ...m,
  blocks: STRUCTURED_CHAPTERS[m.id] || [],
  quiz: CHAPTER_QUIZZES[m.id] || []
}));

export const CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด (All Modules)' },
  { id: 'Fundamentals & OS', label: '1. พื้นฐานและระบบปฏิบัติการ' },
  { id: 'Layer 2 Switching', label: '2. สวิตชิ่งระดับ Layer 2' },
  { id: 'Enterprise Reliability', label: '3. ความน่าเชื่อถือระดับองค์กร' },
  { id: 'Layer 3 Routing', label: '4. แอดเดรสและการหาเส้นทาง Layer 3' },
  { id: 'Next-Gen & Advanced', label: '5. เครือข่ายยุคใหม่ & Inter-VLAN' }
];
