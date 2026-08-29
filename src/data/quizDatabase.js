// Master Quiz Database: 60 High-Yield Exam Questions (5 per chapter x 12 chapters)
export const CHAPTER_QUIZZES = {
  1: [
    {
      question: "ข้อใดคือลำดับขั้นตอนการแปลงข้อมูลในการสื่อสารเครือข่ายที่ถูกต้องตามลำดับ?",
      options: [
        "ข้อมูลข่าวสาร (Information) → ข้อมูลดิจิทัล (Data) → สัญญาณสื่อสาร (Signal) → ตัวกลางการสื่อสาร (Medium)",
        "ข้อมูลดิจิทัล (Data) → ข้อมูลข่าวสาร (Information) → ตัวกลาง (Medium) → สัญญาณ (Signal)",
        "สัญญาณสื่อสาร (Signal) → ตัวกลาง (Medium) → ข้อมูลดิจิทัล (Data) → ข้อมูลข่าวสาร (Information)",
        "ตัวกลางการสื่อสาร (Medium) → สัญญาณ (Signal) → ข้อมูลดิจิทัล (Data) → ข้อมูลข่าวสาร (Information)"
      ],
      answer: 0,
      explanation: "กระบวนการส่งข้อมูลเริ่มจากสารสนเทศของผู้ใช้ (Information) แปลงเป็นรหัสดิจิทัลบิต (Data) แปลงเป็นสัญญาณไฟฟ้า/แสง/คลื่น (Signal) แล้วส่งผ่านตัวกลาง (Transmission Medium)"
    },
    {
      question: "โทโพโลยีเครือข่ายแบบใดที่มีจุดอ่อนเรื่อง Single Point of Failure (SPOF) ที่อุปกรณ์ศูนย์กลาง หากสวิตช์ศูนย์กลางเสีย ทั้งระบบจะหยุดทำงานทันที?",
      options: [
        "โทโพโลยีแบบดาว (Star Topology)",
        "โทโพโลยีแบบฟูลเมช (Full-Mesh Topology)",
        "โทโพโลยีแบบวงแหวน (Ring Topology)",
        "โทโพโลยีแบบบัส (Bus Topology)"
      ],
      answer: 0,
      explanation: "Star Topology ทุกโหนดต่อตรงเข้าสู่สวิตช์ศูนย์กลางตัวเดียว ทำให้ติดตั้งและดูแลรักษาง่าย แต่มักมีจุดอ่อนที่อุปกรณ์ศูนย์กลาง (SPOF)"
    },
    {
      question: "ใน Full-Mesh Topology หากระบบมีโหนดทั้งหมด 6 โหนด จะต้องใช้สายสัญญาณเชื่อมต่อตรงทั้งหมดกี่เส้นทางตามสูตร N(N-1)/2?",
      options: [
        "15 เส้นทาง",
        "30 เส้นทาง",
        "6 เส้นทาง",
        "12 เส้นทาง"
      ],
      answer: 0,
      explanation: "คำนวณจากสูตร N(N-1)/2 เมื่อ N = 6 จะได้ 6 × (6 - 1) / 2 = 30 / 2 = 15 เส้นทาง"
    },
    {
      question: "อุปกรณ์เครือข่ายใดทำหน้าที่เชื่อมต่อเครือข่ายข้าม Subnet / WAN และตัดสินใจค้นหาเส้นทางส่งต่อข้อมูลด้วย IP Address ที่ Layer 3?",
      options: [
        "เราเตอร์ (Router)",
        "สวิตช์เลเยอร์ 2 (Layer 2 Switch)",
        "อุปกรณ์กระจายสัญญาณไร้สาย (Wireless AP)",
        "ฮับ (Hub / Repeater)"
      ],
      answer: 0,
      explanation: "Router เป็นอุปกรณ์ระดับ Network Layer (L3) ทำหน้าที่ค้นหาตาราง Routing Table และส่งต่อแพ็กเก็ตข้าม Subnet หรือเชื่อมต่อไปยัง WAN"
    },
    {
      question: "เครือข่ายประเภทใดที่เชื่อมโยงระบบสื่อสารครอบคลุมระยะทางไกลระดับภูมิภาค ประเทศ หรือทั่วโลก เช่น เครือข่ายอินเทอร์เน็ต?",
      options: [
        "WAN (Wide Area Network)",
        "LAN (Local Area Network)",
        "MAN (Metropolitan Area Network)",
        "PAN (Personal Area Network)"
      ],
      answer: 0,
      explanation: "WAN คือเครือข่ายระยะไกลระดับประเทศหรือระดับโลกที่ต้องอาศัยโครงข่ายโทรคมนาคมของผู้ให้บริการ (Service Providers)"
    }
  ],
  2: [
    {
      question: "ในแบบจำลอง OSI 7-Layer หน่วยข้อมูล (PDU) ในระดับ Transport, Network และ Data Link Layer มีชื่อเรียกเรียงตามลำดับอย่างไร?",
      options: [
        "Segment, Packet, Frame",
        "Packet, Frame, Segment",
        "Frame, Packet, Segment",
        "Data, Bits, Frame"
      ],
      answer: 0,
      explanation: "หน่วยข้อมูล (PDU) ที่ L4 (Transport) คือ Segment, ที่ L3 (Network) คือ Packet และที่ L2 (Data Link) คือ Frame"
    },
    {
      question: "การเปรียบเทียบระหว่าง OSI Model และ TCP/IP 5-Layer พบว่าเลเยอร์ 5, 6, 7 (Session, Presentation, Application) ของ OSI ยุบรวมเป็นเลเยอร์ใดใน TCP/IP?",
      options: [
        "Application Layer",
        "Transport Layer",
        "Internet Layer",
        "Network Access Layer"
      ],
      answer: 0,
      explanation: "ในสถาปัตยกรรม TCP/IP เลเยอร์ Application (L5) ทำหน้าที่ครอบคลุมทั้ง Session, Presentation และ Application ของ OSI เข้าด้วยกัน"
    },
    {
      question: "ในกระบวนการ Encapsulation เมื่อข้อมูลเดินทางจากบนลงล่าง ข้อใดระบุส่วนหัว (Header) ที่ถูกเพิ่มเข้ามาในแต่ละชั้นได้ถูกต้อง?",
      options: [
        "L4 เพิ่ม Port Number → L3 เพิ่ม IP Address → L2 เพิ่ม MAC Address & FCS",
        "L4 เพิ่ม IP Address → L3 เพิ่ม Port Number → L2 เพิ่ม MAC Address",
        "L4 เพิ่ม MAC Address → L3 เพิ่ม IP Address → L2 เพิ่ม Port Number",
        "L4 เพิ่ม FCS Checksum → L3 เพิ่ม IP Address → L2 เพิ่ม Port Number"
      ],
      answer: 0,
      explanation: "L4 (Transport) เติม Port ต้นทาง/ปลายทาง, L3 (Network) เติม IP ต้นทาง/ปลายทาง, L2 (Data Link) เติม MAC และปิดท้ายด้วย FCS Checksum"
    },
    {
      question: "โปรโตคอล Transport Layer ในข้อใดที่ทำงานแบบ Connection-Oriented มีการทำ 3-Way Handshake และรับประกันความน่าเชื่อถือของการส่งข้อมูล?",
      options: [
        "TCP (Transmission Control Protocol)",
        "UDP (User Datagram Protocol)",
        "ICMP (Internet Control Message Protocol)",
        "IP (Internet Protocol)"
      ],
      answer: 0,
      explanation: "TCP มีระบบ 3-Way Handshake, การยืนยัน Acknowledgement, และการส่งซ้ำเมื่อสูญหาย เพื่อรับประกันความน่าเชื่อถือสมบูรณ์ 100%"
    },
    {
      question: "หมายเลข Well-Known Port Number มาตรฐานของโปรโตคอล DNS, HTTP, HTTPS, และ SSH คือข้อใดเรียงตามลำดับ?",
      options: [
        "53, 80, 443, 22",
        "80, 443, 53, 22",
        "22, 53, 80, 443",
        "53, 22, 80, 443"
      ],
      answer: 0,
      explanation: "DNS = พอร์ต 53 (UDP/TCP), HTTP = พอร์ต 80 (TCP), HTTPS = พอร์ต 443 (TCP), SSH = พอร์ต 22 (TCP)"
    }
  ],
  3: [
    {
      question: "เมื่อล็อกอินเข้าสู่อุปกรณ์ Huawei VRP ครั้งแรก ผู้ใช้งานจะอยู่ในมุมมองคำสั่ง (Command View) ใด และมีเครื่องหมายพร้อมท์อย่างไร?",
      options: [
        "User View สัญลักษณ์พร้อมท์ <Huawei>",
        "System View สัญลักษณ์พร้อมท์ [Huawei]",
        "Interface View สัญลักษณ์พร้อมท์ [Huawei-GE0/0/1]",
        "Protocol View สัญลักษณ์พร้อมท์ [Huawei-ospf-1]"
      ],
      answer: 0,
      explanation: "เริ่มต้นเชื่อมต่อจะอยู่ใน User View มีพร้อมท์เป็นเครื่องหมายวงเล็บแหลม <Huawei> ใช้สำหรับดูสถานะและทดสอบระบบเบื้องต้น"
    },
    {
      question: "คำสั่งใดที่ใช้ในการเปลี่ยนจาก User View (<Huawei>) เข้าสู่ System View ([Huawei]) เพื่อเริ่มการตั้งค่าคอนฟิกอุปกรณ์?",
      options: [
        "system-view",
        "configure terminal",
        "enable",
        "interface view"
      ],
      answer: 0,
      explanation: "บน Huawei VRP ใช้คำสั่ง system-view เพื่อเข้าสู่มุมมอง System View ที่มีพร้อมท์เป็นวงเล็บเหลี่ยม [Huawei]"
    },
    {
      question: "บนอุปกรณ์ Huawei ความแตกต่างระหว่าง Current Configuration (Running Config) และ Saved Configuration คือข้อใด?",
      options: [
        "Current Config อยู่ใน SDRAM (ไฟดับหาย) ส่วน Saved Config อยู่ใน Flash Storage (บันทึกถาวร)",
        "Current Config อยู่ใน Flash ส่วน Saved Config อยู่ใน SDRAM",
        "ทั้งสองไฟล์ถูกบันทึกใน ROM ถาวรเหมือนกัน",
        "Current Config ถูกโหลดแบบเรียลไทม์จากระบบคลาวด์ตลอดเวลา"
      ],
      answer: 0,
      explanation: "Current Config เก็บในหน่วยความจำชั่วคราว SDRAM จะหายเมื่อปิดเครื่อง ส่วน Saved Config (vrpcfg.zip) บันทึกใน Flash ไม่หายเมื่อรีบูต"
    },
    {
      question: "คำสั่งใดใน User View ที่ใช้สำหรับบันทึกการตั้งค่าปัจจุบันลงสู่หน่วยความจำ Flash เพื่อไม่ให้การตั้งค่าสูญหายเมื่อรีบูต?",
      options: [
        "save",
        "write memory",
        "copy running-config startup-config",
        "commit"
      ],
      answer: 0,
      explanation: "บน Huawei VRP พิมพ์คำสั่ง save ใน User View เพื่อเซฟค่า Running Config ลงไฟล์ Startup Config"
    },
    {
      question: "หากจำคำสั่งเต็มไม่ได้ สามารถกดปุ่มใดบนคีย์บอร์ดเพื่อดูวิธีใช้ (Context Help) และปุ่มใดเพื่อเติมคำสั่งอัตโนมัติ (Auto-complete)?",
      options: [
        "ปุ่ม ? เพื่อดูวิธีใช้ และปุ่ม Tab เพื่อเติมคำสั่งอัตโนมัติ",
        "ปุ่ม Tab เพื่อดูวิธีใช้ และปุ่ม Space เพื่อเติมคำสั่ง",
        "ปุ่ม F1 เพื่อดูวิธีใช้ และปุ่ม Enter เพื่อเติมคำสั่ง",
        "ปุ่ม Ctrl+C เพื่อดูวิธีใช้ และปุ่ม Ctrl+Z เพื่อเติมคำสั่ง"
      ],
      answer: 0,
      explanation: "พิมพ์ ? จะแสดงรายการคำสั่งที่เป็นไปได้ และกด Tab จะทำการเติมตัวสะกดคำสั่งและคีย์เวิร์ดให้โดยอัตโนมัติ"
    }
  ],
  4: [
    {
      question: "โครงสร้างหมายเลขฮาร์ดแวร์ MAC Address ขนาด 48 บิต แบ่งออกเป็นสองส่วนหลักคือข้อใด?",
      options: [
        "24 บิตแรกคือ OUI (รหัสผู้ผลิต) และ 24 บิตหลังคือ Vendor Assigned (NIC ID)",
        "32 บิตแรกคือ Network ID และ 16 บิตหลังคือ Host ID",
        "16 บิตแรกคือ Priority และ 32 บิตหลังคือ Device ID",
        "8 บิตแรกคือ Class Type และ 40 บิตหลังคือ Serial Number"
      ],
      answer: 0,
      explanation: "MAC Address 48 บิตแบ่งเป็น 24 บิตแรกคือ OUI (Organizationally Unique Identifier) ที่ IEEE ออกให้ผู้ผลิต และ 24 บิตหลังที่โรงงานกำหนดเอง"
    },
    {
      question: "บิตที่ 7 ของไบต์แรกใน MAC Address เรียกว่าบิต I/G (Individual/Group) หากบิตนี้มีค่าเป็น 0 และ 1 มีความหมายอย่างไรตามลำดับ?",
      options: [
        "0 = Unicast Address (ส่งเจาะจงเครื่อง), 1 = Multicast / Broadcast Address (ส่งกลุ่ม/ทุกคน)",
        "0 = Multicast Address, 1 = Unicast Address",
        "0 = Globally Unique, 1 = Locally Administered",
        "0 = IPv4 Mapped, 1 = IPv6 Mapped"
      ],
      answer: 0,
      explanation: "บิต I/G: 0 หมายถึง Individual (Unicast ส่งเจาะจงการ์ดแลนใบเดียว), 1 หมายถึง Group (Multicast/Broadcast ส่งถึงกลุ่มอุปกรณ์)"
    },
    {
      question: "พฤติกรรมของ Layer 2 Switch ในการส่งต่อข้อมูลเมื่อได้รับเฟรมที่มี Destination MAC Address ที่ไม่อยู่ในตาราง MAC Table (Unknown Unicast) คือข้อใด?",
      options: [
        "Flooding (ส่งกระจายออกทุกพอร์ตยกเว้นพอร์ตที่รับเข้ามา)",
        "Discarding (ดรอปเฟรมทิ้งทันที)",
        "Forwarding (ส่งออกเฉพาะพอร์ตแรกของสวิตช์)",
        "Filtering (กักเฟรมไว้ในคิวรอจนกว่าจะพบ MAC)"
      ],
      answer: 0,
      explanation: "เมื่อสวิตช์ไม่ทราบว่า Destination MAC อยู่ที่พอร์ตใด สวิตช์จะทำ Flooding กระจายเฟรมออกทุกพอร์ตยกเว้นพอร์ต Ingress"
    },
    {
      question: "ข้อใดอธิบายความแตกต่างระหว่าง Collision Domain และ Broadcast Domain ของ Switch ได้ถูกต้องที่สุด?",
      options: [
        "Switch แยก Collision Domain ทุกพอร์ต (1 พอร์ต = 1 Collision Domain) แต่อยู่ใน 1 Broadcast Domain เดียวกันทั้งหมด",
        "Switch รวมทุกพอร์ตให้เป็น 1 Collision Domain เดียวกัน",
        "Switch สามารถแบ่งแยก Broadcast Domain ออกจากกันได้โดยไม่ต้องใช้ VLAN หรือ Router",
        "Hub สามารถแยก Collision Domain ได้ดีกว่า Switch"
      ],
      answer: 0,
      explanation: "สวิตช์ตัดแบ่ง Collision Domain แบบ Micro-segmentation ในแต่ละพอร์ต แต่เฟรม Broadcast จะยังคงแพร่กระจายถึงทุกพอร์ต (1 Broadcast Domain)"
    },
    {
      question: "ในกระบวนการทำงานของ Address Resolution Protocol (ARP) เพื่อค้นหา MAC ปลายทาง แพ็กเก็ต ARP Request และ ARP Reply ถูกส่งแบบใดตามลำดับ?",
      options: [
        "ARP Request ส่งแบบ Broadcast, ARP Reply ส่งแบบ Unicast",
        "ARP Request ส่งแบบ Unicast, ARP Reply ส่งแบบ Broadcast",
        "ทั้ง Request และ Reply ส่งแบบ Broadcast ทั้งหมด",
        "ทั้ง Request และ Reply ส่งแบบ Multicast ทั้งหมด"
      ],
      answer: 0,
      explanation: "ARP Request ต้องถามทุกคนใน LAN (Broadcast: FF-FF-FF-FF-FF-FF) ส่วนเครื่องเป้าหมายจะตอบกลับตรงหาผู้ถามเครื่องเดียว (Unicast)"
    }
  ],
  5: [
    {
      question: "โครงสร้างของ IEEE 802.1Q VLAN Tag มีขนาดกี่ไบต์ และฟิลด์ VLAN ID (VID) มีขนาดกี่บิต ซึ่งรองรับค่า VLAN ได้ตั้งแต่เท่าใดถึงเท่าใด?",
      options: [
        "ขนาด 4 ไบต์, ฟิลด์ VID มีขนาด 12 บิต (รองรับค่า 1 ถึง 4094)",
        "ขนาด 2 ไบต์, ฟิลด์ VID มีขนาด 8 บิต (รองรับค่า 1 ถึง 255)",
        "ขนาด 8 ไบต์, ฟิลด์ VID มีขนาด 16 บิต (รองรับค่า 1 ถึง 65535)",
        "ขนาด 6 ไบต์, ฟิลด์ VID มีขนาด 10 บิต (รองรับค่า 1 ถึง 1024)"
      ],
      answer: 0,
      explanation: "แท็ก 802.1Q มีขนาด 4 ไบต์ (32 บิต) โดยฟิลด์ VID มีขนาด 12 บิต (2^12 = 4,096 ค่า) โดยหัก 0 และ 4095 ออก จึงใช้งานได้ 1 ถึง 4094"
    },
    {
      question: "ค่า TPID (Tag Protocol Identifier) มาตรฐานที่ระบุว่าเฟรมนี้เป็นเฟรมที่มีแท็ก 802.1Q มีค่าเลขฐานสิบหกเท่ากับข้อใด?",
      options: [
        "0x8100",
        "0x0800",
        "0x0806",
        "0x88CC"
      ],
      answer: 0,
      explanation: "TPID มีขนาด 16 บิต กำหนดค่ามาตรฐานสากลเป็น 0x8100 เพื่อให้อุปกรณ์ทราบว่านี่คือแท็ก VLAN 802.1Q"
    },
    {
      question: "พอร์ตชนิด Access Port มีพฤติกรรมในการรับเข้า (Ingress) และส่งออก (Egress) ของเฟรมข้อมูลอย่างไร?",
      options: [
        "รับ Untagged แล้วประทับ PVID / ส่งออกโดยปลดแท็ก VLAN ออกเป็น Untagged เสมอ",
        "รับ Tagged แล้วคงแท็กไว้ / ส่งออกแบบ Tagged เสมอ",
        "รับได้หลาย VLAN พร้อมกัน / ส่งออกโดยไม่ปลดแท็ก",
        "ปลดแท็กเฉพาะ VLAN 1 เท่านั้น และดรอป VLAN อื่นทั้งหมด"
      ],
      answer: 0,
      explanation: "Access Port ใช้ต่อกับเครื่องโฮสต์ (PC/Server) เมื่อรับเฟรมดิบจะแปะแท็ก PVID และเมื่อส่งออกหาโฮสต์จะปลดแท็กออกเป็น Untagged"
    },
    {
      question: "พอร์ตชนิดใดบนสวิตช์ Huawei ที่มีความยืดหยุ่นสูง สามารถกำหนดรายการ VLAN ที่ต้องการปลดแท็ก (Untagged List) และคงแท็ก (Tagged List) ได้อย่างอิสระ?",
      options: [
        "Hybrid Port",
        "Access Port",
        "Trunk Port",
        "QinQ Port"
      ],
      answer: 0,
      explanation: "Hybrid Port เป็นพอร์ตลูกผสมเฉพาะตัวของ Huawei ที่ตั้งค่า Untagged/Tagged ในพอร์ตเดียวได้ ใช้แก้โจทย์การแชร์เซิร์ฟเวอร์ข้ามแผนกได้อย่างยืดหยุ่น"
    },
    {
      question: "หากต้องการสร้าง VLAN 10, 20, 30 ขึ้นพร้อมกันในคำสั่งเดียวบนสวิตช์ Huawei ต้องใช้คำสั่งใดใน System View?",
      options: [
        "vlan batch 10 20 30",
        "vlan create 10 20 30",
        "vlan 10,20,30",
        "vlan add 10 20 30"
      ],
      answer: 0,
      explanation: "คำสั่ง [Huawei] vlan batch 10 20 30 ใช้สำหรับสร้างหลาย VLAN พร้อมกันอย่างสะดวกรวดเร็ว"
    }
  ],
  6: [
    {
      question: "ปัญหาภัยพิบัติร้ายแรงที่เกิดขึ้นจากการต่อสายเชื่อมโยงแบบวงรอบ (Physical Switching Loop) โดยไม่มีโปรโตคอล STP คือข้อใด?",
      options: [
        "Broadcast Storm, MAC Table Flapping/Instability, และ Duplicate Frame Copies",
        "IP Address Exhaustion, Routing Loop, และ MTU Mismatch",
        "VLAN Leakage, Port Security Violation, และ High Latency",
        "Collision Domain Explosion และ Half-Duplex Degradation"
      ],
      answer: 0,
      explanation: "เมื่อเกิด Loop ที่ Layer 2 จะเกิดพายุ Broadcast หมุนวนไม่สิ้นสุด, ตาราง MAC Table เปลี่ยนพอร์ตสลับไปมาอย่างรวดเร็ว (Flapping), และโฮสต์ได้รับเฟรมซ้ำซ้อน"
    },
    {
      question: "ขั้นตอนที่ 1 ในกระบวนการเลือกตั้งของ STP (Spanning Tree Protocol) คือการเลือกสิ่งใด และใช้อะไรเป็นเกณฑ์ตัดสิน?",
      options: [
        "เลือก Root Bridge โดยสวิตช์ที่มีค่า Bridge ID (Priority + MAC) ต่ำที่สุดจะชนะ",
        "เลือก Root Port โดยพอร์ตที่มีหมายเลขพอร์ตมากที่สุดจะชนะ",
        "เลือก Designated Port โดยพอร์ตที่มีค่า RPC สูงที่สุดจะชนะ",
        "เลือก Alternate Port โดยสุ่มจากพอร์ตที่ไม่ได้ใช้งาน"
      ],
      answer: 0,
      explanation: "ขั้นตอนแรกคือเลือก 1 Root Bridge ต่อ 1 Broadcast Domain โดยสวิตช์ที่มีค่า Bridge ID (BID) ต่ำที่สุดจะชนะการเลือกตั้ง"
    },
    {
      question: "ในโปรโตคอล RSTP (802.1w) พอร์ตที่ทำหน้าที่เป็นเส้นทางสำรองพร้อมสลับทำงานแทน Root Port ทันทีเมื่อ Root Port หลักล้มเหลว มีชื่อเรียกว่าอะไร?",
      options: [
        "Alternate Port (AP)",
        "Backup Port (BP)",
        "Designated Port (DP)",
        "Edge Port (EP)"
      ],
      answer: 0,
      explanation: "Alternate Port (AP) ทำหน้าที่เป็น Backup สำหรับ Root Port หาก RP ดาวน์ AP จะเปลี่ยนเป็น RP และ Forward ข้อมูลได้ทันทีในระดับมิลลิวินาที"
    },
    {
      question: "ข้อใดคือสถานะพอร์ต 3 สถานะของโปรโตคอล RSTP (Rapid Spanning Tree Protocol)?",
      options: [
        "Discarding, Learning, Forwarding",
        "Blocking, Listening, Forwarding",
        "Disabled, Learning, Forwarding",
        "Listening, Learning, Forwarding"
      ],
      answer: 0,
      explanation: "RSTP ลดทอน 5 สถานะเดิมของ STP (Disabled, Blocking, Listening) ให้เหลือเพียงสถานะ Discarding รวมกับ Learning และ Forwarding"
    },
    {
      question: "ฟีเจอร์ Edge Port ใน RSTP เหมาะสำหรับเปิดใช้งานบนพอร์ตใด และมีข้อดีอย่างไร?",
      options: [
        "พอร์ตที่ต่อกับเครื่องผู้ใช้ (PC/Server) โดยพอร์ตจะข้ามสถานะไปยัง Forwarding ทันทีโดยไม่ต้องรอเวลาคำนวณ",
        "พอร์ต Trunk ที่ต่อระหว่างสวิตช์หลัก เพื่อเร่งความเร็วการส่งต่อ",
        "พอร์ตที่ต้องการบล็อกสัญญาณชั่วคราวเพื่อประหยัดพลังงาน",
        "พอร์ตที่เชื่อมต่อกับเราเตอร์ Core เท่านั้น"
      ],
      answer: 0,
      explanation: "Edge Port เปิดบนพอร์ตปลายทางที่ต่อกับโฮสต์ ทำให้โฮสต์ได้รับ IP และสื่อสารได้ทันทีเมื่อเสียบสาย (ไม่ต้องรอคำนวณ 30-50 วินาที)"
    }
  ],
  7: [
    {
      question: "เทคโนโลยีการรวมลิงก์ทางกายภาพหลายเส้นเป็นลิงก์ตรรกะเส้นเดียว (Link Aggregation) บนอุปกรณ์ Huawei เรียกว่าอะไร และให้ประโยชน์หลักข้อใด?",
      options: [
        "Eth-Trunk ให้ประโยชน์เพิ่มแบนด์วิดท์รวมและสร้างระบบสำรองสายสัญญาณอัตโนมัติ (Redundancy)",
        "VLAN Trunk ให้ประโยชน์ในการสร้าง Subnet ข้ามเครือข่าย",
        "OSPF Trunk ให้ประโยชน์ในการหาเส้นทางที่ดีที่สุด",
        "STP Trunk ให้ประโยชน์ในการตัดลูป Layer 2"
      ],
      answer: 0,
      explanation: "Eth-Trunk เป็นการผูกรวมหลายพอร์ต เช่น 1G + 1G + 1G กลายเป็น 3 Gbps แบนด์วิดท์รวม และหากสายขาด 1 เส้น ระบบยังคงส่งต่อได้โดยไม่สะดุด"
    },
    {
      question: "ความแตกต่างที่สำคัญระหว่าง Eth-Trunk โหมด Manual Load Balancing และ LACP Static Mode คือข้อใด?",
      options: [
        "LACP ใช้แพ็กเก็ต LACPDU ตรวจสอบความสมบูรณ์และรองรับ Active/Backup Links ส่วน Manual ไม่ใช้โปรโตคอลตรวจสอบ",
        "Manual รองรับการแย่งสิทธิ์ Active ส่วน LACP ไม่รองรับ",
        "Manual ใช้สำหรับเชื่อมต่อข้ามแชสซีเท่านั้น ส่วน LACP ใช้ได้เฉพาะกล่องเดียว",
        "LACP จำกัดความเร็วลิงก์ไว้ที่ไม่เกิน 100 Mbps"
      ],
      answer: 0,
      explanation: "LACP แลกเปลี่ยน LACPDU เพื่อตรวจจับสายสลับคู่และซอฟต์แวร์แฮงก์ พร้อมรองรับการกำหนดลิงก์หลัก (Active M) และลิงก์สำรอง (Backup N-M)"
    },
    {
      question: "ในกลุ่ม Eth-Trunk แบบ LACP อุปกรณ์จะตัดสินใจว่าสวิตช์ฝั่งใดเป็นผู้มีสิทธิ์เลือกพอร์ตหลัก (Actor) โดยพิจารณาจากสิ่งใด?",
      options: [
        "สวิตช์ที่มีค่า LACP System Priority ต่ำที่สุด (หากเท่ากันดู Lowest System MAC)",
        "สวิตช์ที่มีจำนวนพอร์ตมากกว่า",
        "สวิตช์ที่มีค่า IP Address สูงที่สุด",
        "สวิตช์ที่มีแบนด์วิดท์รวมมากกว่า"
      ],
      answer: 0,
      explanation: "สวิตช์ที่มี LACP System Priority ต่ำที่สุดจะได้รับบทบาทเป็น Actor ซึ่งเป็นฝั่งที่มีสิทธิ์เลือกพอร์ต Active Links ในกลุ่ม"
    },
    {
      question: "เทคโนโลยีการรวมสวิตช์หลายตัวเสมือนเป็นสวิตช์ตัวเดียวของ Huawei สำหรับ Box Switches และ Chassis Switches เรียกว่าอะไรตามลำดับ?",
      options: [
        "iStack (Intelligent Stack) และ CSS (Cluster Switch System)",
        "CSS และ iStack",
        "VRRP และ HSRP",
        "StackWise และ VSS"
      ],
      answer: 0,
      explanation: "iStack ใช้รวมสวิตช์แบบกล่อง (Box Switches) 2-9 ตัว ส่วน CSS ใช้รวมสวิตช์แบบแชสซีขนาดใหญ่ (Chassis Switches) 2 ตัวเข้าเป็น 1 Logical Device"
    },
    {
      question: "ประโยชน์สำคัญที่สุดของการนำ Eth-Trunk มาใช้งานร่วมกับ iStack/CSS ในสถาปัตยกรรมเครือข่ายระดับ Core คือข้อใด?",
      options: [
        "สามารถทำ Cross-Switch Link Aggregation ทำให้โครงข่ายไร้ลูปทางตรรกะ ไม่ต้องพึ่งพา STP บล็อกพอร์ต",
        "เพิ่มความยาวสายเคเบิลทองแดงได้เกิน 1,000 เมตร",
        "ลดการใช้งานหน่วยความจำของสวิตช์ Access",
        "ทำให้สวิตช์ทำงานในโหมด Half-Duplex ได้อย่างสมบูรณ์"
      ],
      answer: 0,
      explanation: "การต่อสายข้ามเครื่อง iStack/CSS ช่วยเปลี่ยนโทโพโลยีแบบ Loop ให้กลายเป็น Tree ทางตรรกะ แบนด์วิดท์วิ่งได้เต็มทุกเส้นทางโดยไม่มีพอร์ตใดถูก STP บล็อก"
    }
  ],
  8: [
    {
      question: "ฟิลด์ Time to Live (TTL) ใน IPv4 Packet Header ทำหน้าที่อะไร และมีขนาดกี่บิต?",
      options: [
        "ป้องกันแพ็กเก็ตวนลูปไม่รู้จบโดยเราเตอร์แต่ละตัวจะลดค่าลง 1 หากเป็น 0 จะดรอปทิ้ง (ขนาด 8 บิต)",
        "ระบุระยะเวลาในการดาวน์โหลดไฟล์ (ขนาด 16 บิต)",
        "ระบุความยาวของ Header (ขนาด 4 บิต)",
        "ตรวจสอบความถูกต้องของข้อมูล Payload (ขนาด 32 บิต)"
      ],
      answer: 0,
      explanation: "TTL มีขนาด 8 บิต (0-255) ป้องกันการวนลูปข้ามเราเตอร์ เมื่อลดเหลือ 0 แพ็กเก็ตจะถูกทิ้งและแจ้งกลับด้วย ICMP Time Exceeded"
    },
    {
      question: "หากต้องการแบ่งวงเครือข่าย 192.168.1.0/24 ออกเป็น Subnet ย่อยที่สามารถรองรับโฮสต์ใช้งานได้จริงอย่างน้อย 50 โฮสต์ต่อวง จะต้องใช้ Subnet Mask และ Prefix Length ใด?",
      options: [
        "/26 (255.255.255.192) จุได้ 62 โฮสต์",
        "/27 (255.255.255.224) จุได้ 30 โฮสต์",
        "/25 (255.255.255.128) จุได้ 126 โฮสต์",
        "/28 (255.255.255.240) จุได้ 14 โฮสต์"
      ],
      answer: 0,
      explanation: "คำนวณจาก 2^h - 2 >= 50 จะได้ h = 6 (2^6 - 2 = 62 โฮสต์) ดังนั้น Prefix = 32 - 6 = /26 (255.255.255.192)"
    },
    {
      question: "สำหรับเครือข่าย 192.168.10.64/27 หมายเลข First Usable Host IP, Last Usable Host IP และ Broadcast Address คือข้อใด?",
      options: [
        "First: 192.168.10.65, Last: 192.168.10.94, Broadcast: 192.168.10.95",
        "First: 192.168.10.64, Last: 192.168.10.95, Broadcast: 192.168.10.96",
        "First: 192.168.10.65, Last: 192.168.10.126, Broadcast: 192.168.10.127",
        "First: 192.168.10.1, Last: 192.168.10.30, Broadcast: 192.168.10.31"
      ],
      answer: 0,
      explanation: "/27 มี Block Size = 32 (ช่วง 64 ถึง 95) โดย 64 คือ Network ID, 65 คือ First Host, 94 คือ Last Host, และ 95 คือ Broadcast ID"
    },
    {
      question: "กฎข้อสำคัญอันดับแรกในการจัดสรรแอดเดรสด้วยเทคนิค VLSM (Variable Length Subnet Masking) คือข้อใด?",
      options: [
        "ต้องจัดสรรให้แผนกที่ต้องการจำนวนโฮสต์มากที่สุดก่อนเสมอ แล้วไล่ลงไปหาแผนกที่ใช้น้อยที่สุด",
        "จัดสรรจากแผนกที่ต้องการโฮสต์น้อยที่สุดก่อน",
        "จัดสรรตามลำดับตัวอักษรของชื่อแผนก",
        "จัดสรรโดยแบ่ง Subnet ทุกวงให้มีขนาดเท่ากันทั้งหมด"
      ],
      answer: 0,
      explanation: "VLSM ต้องเรียงลำดับความต้องการโฮสต์จากมากไปน้อย (Descending Order) เสมอ เพื่อให้การคำนวณ Block Size วางตัวต่อเนื่องกันอย่างลงตัวโดยไม่ซ้อนทับ"
    },
    {
      question: "ในโปรโตคอล ICMP ข้อความประเภท Destination Unreachable (Type 3) และ Time Exceeded (Type 11) ถูกส่งออกมาในสถานการณ์ใดตามลำดับ?",
      options: [
        "Type 3 เมื่อเราเตอร์หาเส้นทางไม่พบ/พอร์ตปิด, Type 11 เมื่อค่า TTL ของแพ็กเก็ตลดลงเหลือ 0 ระหว่างทาง",
        "Type 3 เมื่อส่งสำเร็จ, Type 11 เมื่อเครือข่ายเร็วเกินไป",
        "Type 3 เมื่อขอ IP ไม่ได้, Type 11 เมื่อสายแลนขาด",
        "Type 3 เมื่อ ARP สำเร็จ, Type 11 เมื่อ DNS ล้มเหลว"
      ],
      answer: 0,
      explanation: "ICMP Type 3 แจ้งเตือนเมื่อไม่สามารถส่งแพ็กเก็ตถึงปลายทางได้ ส่วน Type 11 แจ้งเตือนเมื่อแพ็กเก็ตหมดอายุเนื่องจาก TTL ลดลงเหลือ 0"
    }
  ],
  9: [
    {
      question: "เมื่อเราเตอร์ได้รับแพ็กเก็ต กฎข้อแรกและสำคัญที่สุดในการค้นหาตาราง IP Routing Table เพื่อตัดสินใจส่งต่อคือข้อใด?",
      options: [
        "Longest Prefix Match Rule (กฎหน้ากากยาวที่สุด / ละเอียดเจาะจงที่สุดชนะเสมอ)",
        "Lowest Preference Rule",
        "Lowest Cost / Metric Rule",
        "First Come First Served Rule"
      ],
      answer: 0,
      explanation: "เมื่อเราเตอร์เปรียบเทียบ Destination IP เราเตอร์จะเลือกเส้นทางที่มีความยาว Subnet Mask ยาวที่สุดเสมอ (เช่น /28 ชนะ /24)"
    },
    {
      question: "ค่า Route Preference มาตรฐานบนระบบ Huawei VRP ของ Direct Route, OSPF, Static Route, และ RIP คือข้อใดเรียงตามลำดับ?",
      options: [
        "Direct=0, OSPF=10, Static=60, RIP=100",
        "Direct=0, Static=10, OSPF=60, RIP=100",
        "Direct=10, OSPF=20, Static=30, RIP=40",
        "OSPF=0, Direct=10, Static=60, RIP=120"
      ],
      answer: 0,
      explanation: "ค่า Preference ยิ่งต่ำยิ่งน่าเชื่อถือสูง: Direct = 0, OSPF = 10, IS-IS = 15, Static = 60, RIP = 100, BGP = 255"
    },
    {
      question: "เทคนิค Floating Static Route (เส้นทางสำรองแบบลอยตัว) ทำงานได้อย่างไรในการสลับเส้นทางอัตโนมัติเมื่อเส้นทางหลักล้มเหลว?",
      options: [
        "กำหนดค่า Preference ของเส้นทางสำรองให้สูงกว่าเส้นทางหลัก (เช่น 100 เทียบกับ 60) ทำให้ระบบดึงขึ้นมาทำงานเมื่อลิงก์หลักดาวน์",
        "กำหนดให้แบนด์วิดท์ของเส้นทางสำรองสูงกว่า",
        "ใช้โปรโตคอล OSPF ยิงตรวจสอบตลอดเวลา",
        "สลับเส้นทางแบบสุ่มทุกๆ 1 นาที"
      ],
      answer: 0,
      explanation: "เมื่อกำหนด Preference 100 เส้นทางสำรองจะไม่ปรากฏในตาราง Routing Table ตราบใดที่เส้นทางหลัก (Preference 60) ยังมีชีวิตอยู่"
    },
    {
      question: "ในการส่งต่อแพ็กเก็ตข้ามเราเตอร์หลายๆ ตัว (Hop-by-Hop Routing) ข้อมูลส่วนใดที่เปลี่ยนแปลงไปในทุกๆ Hop และส่วนใดที่คงที่ตลอดการเดินทาง?",
      options: [
        "Source/Destination MAC Address ที่ Layer 2 เปลี่ยนแปลงทุก Hop ส่วน Source/Destination IP ที่ Layer 3 คงที่ตลอดทาง",
        "IP Address เปลี่ยนทุก Hop ส่วน MAC Address คงที่",
        "ทั้ง IP และ MAC Address เปลี่ยนแปลงทุก Hop",
        "ทั้ง IP และ MAC Address คงที่ตลอดทาง"
      ],
      answer: 0,
      explanation: "เราเตอร์จะ Rewrite ส่วนหัว Layer 2 (MAC ต้นทาง/ปลายทาง) ใหม่ในทุกๆ Hop แต่ส่วนหัว Layer 3 (IP ต้นทาง/ปลายทาง) จะคงที่ตลอดทาง"
    },
    {
      question: "หากเราเตอร์มีเส้นทางไปยังปลายทางเดียวกันที่มาจากโปรโตคอลเดียวกัน และมีค่า Preference กับ Cost เท่ากันพอดีทุกประการ เราเตอร์จะทำงานอย่างไร?",
      options: [
        "ทำ Equal-Cost Multi-Path (ECMP) กระจายโหลดส่งออกพร้อมกันทั้งสองเส้นทาง (Load Balancing)",
        "สุ่มเลือกมาเพียงเส้นทางเดียวและทิ้งอีกเส้นทาง",
        "ดรอปแพ็กเก็ตทิ้งเพราะเกิดความสับสน",
        "ส่งแพ็กเก็ตแจ้งเตือน ICMP Error"
      ],
      answer: 0,
      explanation: "เมื่อคุณสมบัติทุกอย่างเท่ากัน เราเตอร์จะติดตั้งทั้งสองเส้นทางลงในตาราง Routing Table และทำ Load Balancing แบบ ECMP"
    }
  ],
  10: [
    {
      question: "โปรโตคอล OSPF จัดเป็น Routing Protocol ประเภทใด และใช้อัลกอริทึมใดในการคำนวณหาเส้นทางที่สั้นที่สุดและไร้ลูป?",
      options: [
        "Link-State Routing Protocol ใช้อัลกอริทึม Dijkstra SPF (Shortest Path First)",
        "Distance-Vector Protocol ใช้อัลกอริทึม Bellman-Ford",
        "Path-Vector Protocol ใช้อัลกอริทึม BGP Best Path",
        "Hybrid Protocol ใช้อัลกอริทึม DUAL"
      ],
      answer: 0,
      explanation: "OSPF เป็นโปรโตคอลประเภท Link-State โดยเราเตอร์ทุกตัวแชร์แผนที่โครงข่าย (LSDB) แล้วรันอัลกอริทึม Dijkstra SPF เพื่อคำนวณ Shortest Path Tree"
    },
    {
      question: "แพ็กเก็ต OSPF ชนิดใดที่ทำหน้าที่ส่งสารบัญสรุปรายการ LSA ในฐานข้อมูล LSDB เพื่อตรวจสอบความสอดคล้องกับเพื่อนบ้านในขั้นตอนแลกเปลี่ยนข้อมูล?",
      options: [
        "Database Description (DD Packet - Type 2)",
        "Hello Packet (Type 1)",
        "Link State Request (LSR - Type 3)",
        "Link State Update (LSU - Type 4)"
      ],
      answer: 0,
      explanation: "DD Packet (Type 2) บรรจุสารบัญสรุป LSA Header เพื่อให้เพื่อนบ้านเปรียบเทียบว่ามีข้อมูลรายการใดที่ตนเองยังขาดอยู่"
    },
    {
      question: "ในกระบวนการ OSPF Neighbor State Machine สถานะใดที่บ่งบอกว่าเราเตอร์ทั้งสองตัวได้ซิงโครไนซ์ฐานข้อมูล LSDB ตรงกันสมบูรณ์ 100% แล้ว?",
      options: [
        "Full State",
        "2-Way State",
        "Exchange State",
        "Loading State"
      ],
      answer: 0,
      explanation: "สถานะ Full คือสถานะสูงสุดที่แสดงว่าฐานข้อมูล LSDB ระหว่างเราเตอร์ทั้งสองซิงค์ตรงกันสมบูรณ์และพร้อมส่งต่อข้อมูลทราฟฟิก"
    },
    {
      question: "บนเครือข่ายแบบ Broadcast (เช่น Ethernet) วัตถุประสงค์หลักของการเลือกตั้ง DR (Designated Router) และ BDR (Backup DR) คือข้อใด?",
      options: [
        "ลดจำนวนความสัมพันธ์ Adjacency จาก N(N-1)/2 เหลือเพียง N-1 เพื่อลดทราฟฟิก LSA ซ้ำซ้อน",
        "เพิ่มความเร็วในการส่งข้อมูลขึ้น 2 เท่า",
        "ป้องกันไม่ให้เราเตอร์ตัวอื่นส่งข้อมูลออกสู่ภายนอก",
        "ใช้สำหรับแจกจ่าย IP Address อัตโนมัติ"
      ],
      answer: 0,
      explanation: "การเลือก DR/BDR ช่วยให้เราเตอร์ตัวอื่น (DRother) สร้าง Full Adjacency เฉพาะกับ DR และ BDR เท่านั้น ช่วยลดปริมาณแพ็กเก็ตซ้ำซ้อนได้อย่างมหาศาล"
    },
    {
      question: "ในสถาปัตยกรรม OSPF Multi-Area กฎเหล็กในการเชื่อมต่อระหว่าง Area คือข้อใด?",
      options: [
        "Non-Backbone Area ทั้งหมด (เช่น Area 1, Area 2) จะต้องเชื่อมต่อทางกายภาพหรือตรรกะเข้ากับ Backbone Area (Area 0) เสมอ",
        "ทุก Area ต้องต่อตรงหากันแบบ Full-Mesh",
        "Area 0 มีไว้สำหรับเราเตอร์ที่เชื่อมต่อภายนอกเท่านั้น",
        "ห้ามมีเราเตอร์เกิน 5 ตัวในแต่ละ Area"
      ],
      answer: 0,
      explanation: "ตามกฎของ OSPF สถาปัตยกรรมต้องเป็นแบบลำดับชั้น โดยทราฟฟิกข้าม Area จะต้องวิ่งผ่าน Backbone Area (Area 0) เสมอเพื่อป้องกัน Loop"
    }
  ],
  11: [
    {
      question: "ขนาดของหมายเลข IPv6 Address คือกี่บิต และโครงสร้างของ Fixed Base Header มีขนาดคงที่กี่ไบต์?",
      options: [
        "128 บิต (16 ไบต์) และ Fixed Base Header มีขนาดคงที่ 40 ไบต์",
        "64 บิต และ Header ขนาด 20 ไบต์",
        "256 บิต และ Header ขนาด 60 ไบต์",
        "128 บิต และ Header ขนาดแปรผัน 20-60 ไบต์"
      ],
      answer: 0,
      explanation: "IPv6 มีขนาด 128 บิต (3.4 x 10^38 แอดเดรส) และออกแบบ Fixed Base Header ขนาดคงที่ 40 ไบต์เพื่อเพิ่มความเร็วในการประมวลผลของเราเตอร์"
    },
    {
      question: "ตามกฎการย่อหมายเลข IPv6 แอดเดรส 2001:0DB8:0000:0000:0000:0000:0000:0001 สามารถย่อให้สั้นที่สุดตามมาตรฐานได้อย่างไร?",
      options: [
        "2001:DB8::1",
        "2001:DB8:0:0:0:0:0:1",
        "2001:0DB8::1",
        "2001::DB8::1"
      ],
      answer: 0,
      explanation: "ตัดเลข 0 นำหน้าในแต่ละกลุ่ม (0DB8 -> DB8) และยุบกลุ่ม 0 ต่อเนื่องกันด้วยเครื่องหมาย :: (ใช้ได้เพียงครั้งเดียวในแอดเดรส) ได้เป็น 2001:DB8::1"
    },
    {
      question: "ในกระบวนการสร้าง Interface ID 64 บิตตามมาตรฐาน IEEE EUI-64 จาก MAC Address 48 บิต จะต้องแทรกค่าใดไว้ตรงกลาง และต้องทำอย่างไรกับบิตที่ 7 (U/L Bit)?",
      options: [
        "แทรก FFFE ไว้ตรงกลาง และทำการกลับบิตที่ 7 (Flip U/L bit จาก 0 เป็น 1)",
        "แทรก FFFF ไว้ตรงกลาง และกลับบิตที่ 1",
        "แทรก 0000 ไว้ตรงกลาง และไม่เปลี่ยนบิตใดๆ",
        "แทรก AAAA ไว้ตรงกลาง และสลับหัวท้ายไบต์"
      ],
      answer: 0,
      explanation: "EUI-64 แยก MAC 48 บิตออกเป็นสองส่วน แทรก 16 บิต FFFE ไว้ตรงกลาง และกลับบิตที่ 7 ของไบต์แรก (Universal/Local bit) จาก 0 เป็น 1"
    },
    {
      question: "ช่วงแอดเดรส IPv6 ของ Global Unicast (GUA), Unique Local (ULA), และ Link-Local (LLA) คือข้อใดเรียงตามลำดับ?",
      options: [
        "2000::/3 (GUA), FC00::/7 (ULA), FE80::/10 (LLA)",
        "FE80::/10 (GUA), 2000::/3 (ULA), FC00::/7 (LLA)",
        "FF00::/8 (GUA), FE80::/10 (ULA), 2000::/3 (LLA)",
        "::1/128 (GUA), FC00::/7 (ULA), FE80::/10 (LLA)"
      ],
      answer: 0,
      explanation: "GUA (Public IPv6) = 2000::/3, ULA (Private IPv6) = FC00::/7 (มักพบ FD00::), LLA (สื่อสารในลิงก์) = FE80::/10"
    },
    {
      question: "ใน IPv6 โปรโตคอล NDP (Neighbor Discovery Protocol) ใช้ข้อความ ICMPv6 ใดในการทำ Address Resolution เพื่อค้นหา MAC Address ของเพื่อนบ้านแทนที่โปรโตคอล ARP?",
      options: [
        "NS (Neighbor Solicitation - Type 135) และ NA (Neighbor Advertisement - Type 136)",
        "RS (Router Solicitation) และ RA (Router Advertisement)",
        "Echo Request และ Echo Reply",
        "ARP Request และ ARP Reply"
      ],
      answer: 0,
      explanation: "NDP ใช้คู่ข้อความ NS (Type 135) ส่งคำถามแบบ Multicast และ NA (Type 136) ตอบกลับด้วย MAC Address ทำงานแทนที่ ARP ใน IPv4"
    }
  ],
  12: [
    {
      question: "ในวิวัฒนาการการสื่อสารข้าม VLAN ข้อใดคือข้อจำกัดที่สำคัญที่สุดของวิธี Router-on-a-Stick (การใช้ Sub-interfaces บนสาย Trunk เดี่ยว)?",
      options: [
        "เกิดคอขวดของแบนด์วิดท์บนสาย Trunk ลิงก์เดี่ยว และเกิดภาระการประมวลผลสูงบน CPU ของเราเตอร์",
        "ไม่สามารถใช้งานร่วมกับ VLAN ID เกิน 10 ได้",
        "ต้องใช้การ์ดแลน 1 พอร์ตต่อ 1 VLAN เปลืองพอร์ตเราเตอร์",
        "ไม่รองรับการเชื่อมต่อกับสวิตช์ Layer 2"
      ],
      answer: 0,
      explanation: "Router-on-a-Stick ส่งทราฟฟิกทุก VLAN เข้าออกผ่านสายเส้นเดียว ทำให้เกิดคอขวด (Bottleneck) และใช้ CPU ซอฟต์แวร์หาเส้นทาง"
    },
    {
      question: "การสื่อสารข้าม VLAN ด้วย Layer 3 Switch (การใช้อินเทอร์เฟซเสมือน VLANIF) มีข้อได้เปรียบเหนือ Router-on-a-Stick อย่างไร?",
      options: [
        "สวิตช์ L3 ส่งต่อข้อมูลด้วยชิปฮาร์ดแวร์ ASIC (Hardware Wire-speed Routing) ทำให้มี Throughput สูงมาก ไร้คอขวดและมีความหน่วงต่ำมาก",
        "สวิตช์ L3 ไม่จำเป็นต้องกำหนดหมายเลข IP ให้กับ VLAN",
        "สวิตช์ L3 สามารถส่งข้อมูลข้าม VLAN ได้โดยไม่ต้องผ่านการ Route",
        "ไม่จำเป็นต้องสร้างตาราง ARP Table"
      ],
      answer: 0,
      explanation: "Layer 3 Switch ใช้ชิปเซ็ตฮาร์ดแวร์ ASIC ในการส่งต่อข้อมูลแบบ Wire-speed ที่ความเร็วเต็มพอร์ต โดยสร้างอินเทอร์เฟซตรรกะ VLANIF เป็น Gateway"
    },
    {
      question: "บนสวิตช์ Layer 3 ของ Huawei อินเทอร์เฟซเสมือนที่สร้างขึ้นเพื่อทำหน้าที่เป็น Default Gateway ให้กับอุปกรณ์ในแต่ละ VLAN มีชื่อเรียกว่าอะไร?",
      options: [
        "Vlanif (เช่น interface Vlanif 10)",
        "Sub-interface (เช่น GE0/0/1.10)",
        "Loopback (เช่น interface LoopBack 0)",
        "Eth-Trunk (เช่น interface Eth-Trunk 1)"
      ],
      answer: 0,
      explanation: "บน Huawei VRP ใช้คำสั่ง interface Vlanif <vlan-id> เพื่อสร้าง L3 Virtual Interface และกำหนด IP Address ให้เป็น Gateway ของ VLAN นั้น"
    },
    {
      question: "คำสั่งใดที่จำเป็นต้องกำหนดบน Sub-interface ของเราเตอร์ในการทำ Router-on-a-Stick เพื่อเปิดใช้งานการรับส่งแพ็กเก็ต ARP Broadcast?",
      options: [
        "arp broadcast enable",
        "arp request allow",
        "broadcast on",
        "dot1q arp enable"
      ],
      answer: 0,
      explanation: "บน Sub-interface ของเราเตอร์ Huawei จำเป็นต้องใส่คำสั่ง arp broadcast enable เพื่อให้ Sub-interface ยอมรับและตอบสนองต่อแพ็กเก็ต ARP"
    },
    {
      question: "เมื่อโฮสต์ PC1 (VLAN 10) ส่งข้อมูลข้ามไปยัง PC2 (VLAN 20) ผ่านสวิตช์ Layer 3 กระบวนการที่เกิดขึ้นภายในสวิตช์คือข้อใด?",
      options: [
        "สวิตช์ปลดแท็ก VLAN 10 ออก → นำส่ง L3 Routing Engine → ลดค่า TTL ลง 1 → ห่อหุ้มเฟรมใหม่ด้วยแท็ก VLAN 20 และ MAC ปลายทางของ PC2",
        "สวิตช์คงแท็ก VLAN 10 ไว้และส่งต่อไปยัง PC2 โดยตรง",
        "สวิตช์เปลี่ยน IP Address ต้นทางเป็น IP ของ Gateway",
        "สวิตช์ส่งแบบ Broadcast ออกทุก VLAN เพื่อหา PC2"
      ],
      answer: 0,
      explanation: "สวิตช์ L3 ปลด Layer 2 Header และแท็ก VLAN 10 ออก, ส่งต่อ Payload ให้ L3 Routing Engine, ลด TTL ลง 1, แล้วสร้าง Layer 2 Header ใหม่พร้อมแท็ก VLAN 20 ส่งหา PC2"
    }
  ]
};
