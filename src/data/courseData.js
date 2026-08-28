// Universal Core Networking 12 Modules Complete Curriculum Database
// Vendor-Neutral Standards (IEEE & IETF RFCs)
export const COURSE_MODULES = [
  {
    id: 1,
    slug: '01-network-fundamentals-and-topologies',
    title: 'บทที่ 1: พื้นฐานระบบเครือข่ายและการสื่อสารข้อมูลสากล',
    subtitle: 'Universal Network Fundamentals, Topologies & Performance Metrics',
    category: 'Fundamentals & Architecture',
    categoryTh: 'ระดับ 1: พื้นฐานและสถาปัตยกรรมเครือข่าย',
    icon: 'Network',
    overview: 'ทำความเข้าใจวงจรการสื่อสารข้อมูล ตัวชี้วัดประสิทธิภาพเครือข่าย (Bandwidth, Throughput, Goodput, Latency, Jitter, Packet Loss) สถาปัตยกรรมโทโพโลยี (Star, Tree, Full-Mesh, Spine-Leaf, SPOF) สื่อนำสัญญาณ และโหมดการสื่อสาร',
    labName: 'Universal Topology & Fault Sandbox',
    labDescription: 'ทดลองจำลองและสั่งตัดสายสัญญาณบนโทโพโลยีแบบต่างๆ (Star, Tree, Ring, Bus, Mesh) เพื่อดูผลกระทบต่อระบบเครือข่าย',
    sections: [
      {
        title: '1. วงจรการสื่อสารข้อมูลและตัวชี้วัดประสิทธิภาพ (Data Communication Lifecycle & Performance Metrics)',
        content: `การสื่อสารข้อมูลในระบบเครือข่ายคอมพิวเตอร์คือกระบวนการส่งผ่านข้อมูลดิจิทัลจากต้นทางไปยังปลายทางอย่างมีประสิทธิภาพและถูกต้อง โดยผ่านขั้นตอนการแปลงสภาพ 4 ขั้นตอน:
1. **Information (สารสนเทศ)**: ข้อมูลในรูปแบบนามธรรมที่มนุษย์เข้าใจ (ข้อความ, เสียง, ภาพ, วิดีโอ)
2. **Data (ข้อมูลดิจิทัล)**: เข้ารหัสเป็นเลขฐานสอง (Binary Bits: 0 และ 1)
3. **Signal (สัญญาณสื่อสาร)**: แปลงเป็นสัญญาณทางกายภาพ (สัญญาณไฟฟ้าบนทองแดง, พัลส์แสงในใยแก้ว, หรือคลื่นแม่เหล็กไฟฟ้าวิทยุ)
4. **Transmission Medium (ตัวกลางสื่อสาร)**: ช่องทางกายภาพที่นำพาสัญญาณไปสู่ปลายทาง

**ตัวชี้วัดประสิทธิภาพของเครือข่าย (Key Performance Indicators):**
• **Bandwidth (แบนด์วิดท์)**: ความจุสูงสุดทางทฤษฎีในการส่งข้อมูลของช่องสัญญาณต่อหน่วยเวลา (เช่น 1 Gbps)
• **Throughput (ทรูพุต)**: ปริมาณข้อมูลจริงที่เดินทางผ่านเครือข่ายสำเร็จในหน่วยเวลา มักน้อยกว่า Bandwidth จากปัญหาความหนาแน่นและข้อจำกัดของโปรโตคอล
• **Goodput (กู้ดพุต)**: ปริมาณข้อมูลเนื้อหาแอพพลิเคชันที่เป็นประโยชน์จริง (Useful Application Payload) ไปถึงปลายทาง โดยไม่นับรวมส่วนหัวโปรโตคอล (Header Overhead) และการส่งซ้ำ (Retransmissions)
• **Latency / RTT (ความหน่วง)**: เวลาที่ใช้ในการเดินทางของแพ็กเก็ตจากต้นทางไปยังปลายทาง (Round-Trip Time) ประกอบด้วย Propagation, Transmission, Queuing และ Processing Delay
• **Jitter (ความแปรปรวนของความหน่วง)**: ความผันผวนของระยะเวลาหน่วงระหว่างแพ็กเก็ต ซึ่งส่งผลกระทบอย่างรุนแรงต่อทราฟฟิกเรียลไทม์ เช่น VoIP และ Video Conference
• **Packet Loss (อัตราการสูญหายของแพ็กเก็ต)**: สัดส่วนของแพ็กเก็ตที่ส่งไม่ถึงปลายทางเนื่องจาก Buffer Overflow หรือสัญญาณรบกวน`
      },
      {
        title: '2. สถาปัตยกรรมโทโพโลยีเครือข่ายและจุดล้มเหลวเดี่ยว (Network Topologies & Single Point of Failure)',
        content: `โทโพโลยีเครือข่าย (Network Topology) แบ่งออกเป็น **Physical Topology** (โครงสร้างการเดินสายทางกายภาพ) และ **Logical Topology** (ทิศทางและรูปแบบการไหลของข้อมูล)

**รูปแบบโทโพโลยีหลัก:**
• **Star Topology**: ทุกโหนดเชื่อมต่อเข้ากับอุปกรณ์ศูนย์กลาง (Switch/Hub) ติดตั้งและตรวจสอบปัญหาง่าย หากสายของโหนดใดขาดจะไม่กระทบโหนดอื่น แต่มี **Single Point of Failure (SPOF)** อยู่ที่อุปกรณ์ศูนย์กลาง
• **Tree / Hierarchical Topology**: โครงสร้างแบบลำดับชั้น แบ่งออกเป็น Core Layer, Distribution Layer และ Access Layer เหมาะสำหรับการขยายขนาดเครือข่ายองค์กร (Scalability)
• **Ring Topology**: แต่ละโหนดเชื่อมต่อกันเป็นวงปิดทิศทางเดียวหรือสองทิศทาง ประหยัดสายเคเบิล แต่หากไม่มีระบบ Dual-Ring หรือ Protection Switching ลิงก์ที่ขาดจะตัดการทำงานของวงรอบ
• **Bus Topology**: ใช้อุปกรณ์เชื่อมต่อเข้ากับสายแกนหลัก (Backbone Cable) เพียงเส้นเดียว เกิดการชนกันของสัญญาณ (Collision) สูง และหากสายแกนหลักขาด ระบบทั้งหมดจะล่มทันที
• **Full-Mesh Topology**: ทุกโหนดเชื่อมต่อตรงถึงกันทั้งหมด จำนวนลิงก์คำนวณจากสูตร **N(N - 1) / 2** (เมื่อ N คือจำนวนโหนด) ให้ความน่าเชื่อถือและความทนทานสูงสุด (Maximum Redundancy) ปราศจาก SPOF แต่มีต้นทุนสายสัญญาณและพอร์ตเชื่อมต่อสูงที่สุด
• **Partial-Mesh Topology**: เชื่อมต่อแบบเมชเฉพาะโหนดที่มีความสำคัญสูง ช่วยสร้างความสมดุลระหว่างความทนทานและงบประมาณ
• **Spine-Leaf Topology**: สถาปัตยกรรมเครือข่ายดาต้าเซ็นเตอร์ยุคใหม่ โดย Leaf Switch ทุกตัวเชื่อมต่อกับ Spine Switch ทุกตัว ทำให้การสื่อสารระหว่างเซิร์ฟเวอร์ (East-West Traffic) มี Hop Count และความหน่วงคงที่เท่ากันทุกคู่`
      },
      {
        title: '3. สื่อนำสัญญาณและรูปแบบการส่งข้อมูล (Transmission Media & Transmission Modes)',
        content: `**ประเภทของสื่อนำสัญญาณ (Transmission Media):**
• **Twisted Pair Cable (สายคู่บิดเกลียว)**:
  - **UTP (Unshielded Twisted Pair)**: นิยมสูงสุดใน LAN เช่น Cat5e (1 Gbps), Cat6 (10 Gbps ที่ระยะ 55m), Cat6a (10 Gbps ที่ระยะ 100m) จำกัดระยะทางตามมาตรฐาน 100 เมตร
  - **STP (Shielded Twisted Pair)**: มีแผ่นฟอยล์หุ้มป้องกันสัญญาณรบกวนแม่เหล็กไฟฟ้า (EMI) สำหรับสภาพแวดล้อมโรงงานอุตสาหกรรม
• **Optical Fiber (สายใยแก้วนำแสง)**:
  - **Single-Mode Fiber (SMF)**: แกนคอร์ขนาดเล็ก (~9 µm) ใช้แสงเลเซอร์ เหมาะสำหรับการเชื่อมต่อระยะไกลระดับหลายสิบถึงร้อยกิโลเมตร แบนด์วิดท์ไม่จำกัด
  - **Multi-Mode Fiber (MMF)**: แกนคอร์ขนาดใหญ่ (50 หรือ 62.5 µm) ใช้แสง LED/VCSEL สำหรับระยะสั้นภายในอาคารหรือดาต้าเซ็นเตอร์ (สูงสุด 300–550 เมตร)

**โหมดการรับส่งข้อมูล (Duplex Modes):**
• **Simplex**: ส่งข้อมูลได้ทางเดียวตลอดเวลา เช่น สัญญาณวิทยุกระจายเสียง
• **Half-Duplex**: สลับกันส่งและรับข้อมูลได้ทีละฝั่งพร้อมกันไม่ได้ เช่น วิทยุสื่อสาร หรือพอร์ตฮับอีเทอร์เน็ตแบบดั้งเดิม (ต้องใช้ CSMA/CD)
• **Full-Duplex**: สามารถส่งและรับข้อมูลได้พร้อมกันสองทิศทาง เช่น สวิตช์อีเทอร์เน็ตสมัยใหม่ ขจัดปัญหาการชนกันของสัญญาณโดยสิ้นเชิง

**รูปแบบการส่งสัญญาณข้อมูล (Transmission Modes):**
• **Unicast (1-to-1)**: การส่งจากโฮสต์ต้นทาง 1 ตัวไปยังโฮสต์ปลายทางที่ระบุเจาะจง 1 ตัว
• **Broadcast (1-to-All)**: การส่งแพร่กระจายไปยังทุกโฮสต์ในบรอดคาสต์โดเมนเดียวกัน (Destination MAC: FF:FF:FF:FF:FF:FF)
• **Multicast (1-to-Group)**: การส่งไปยังกลุ่มโฮสต์เฉพาะที่ลงทะเบียนรับข้อมูล (เช่น 224.0.0.0/4 หรือ IPv6 FF00::/8)
• **Anycast (1-to-Nearest)**: การส่งไปยังโหนดที่ใกล้ที่สุดตามเส้นทางการเราต์ (Routing Distance) นิยมใช้ในระบบ DNS และ CDN ทั่วโลก`
      }
    ],
    terms: [
      { term: 'Bandwidth vs Throughput vs Goodput', desc: 'Bandwidth คือความจุทางทฤษฎีสูงสุด, Throughput คือความเร็วจริงที่ไหลผ่านเครือข่าย, Goodput คือความเร็วเนื้อหาข้อมูลเพียวๆ ของแอพพลิเคชันหลังหัก Header Overhead และ Retransmission ทั้งหมด' },
      { term: 'Physical vs Logical Topology', desc: 'Physical Topology แสดงการวางสายและโครงสร้างกายภาพจริง ขณะที่ Logical Topology แสดงทิศทางและเส้นทางการไหลของข้อมูล (Data Path) ภายในระบบ' },
      { term: 'Collision Domain vs Broadcast Domain', desc: 'Collision Domain คือขอบเขตที่สัญญาณไฟฟ้ามีโอกาสชนกันได้ (ถูกแยกโดย Switch/Router), Broadcast Domain คือขอบเขตที่เฟรมบรอดคาสต์กระจายไปถึง (ถูกแยกโดย Router/VLAN)' },
      { term: 'Single Point of Failure (SPOF)', desc: 'จุดเปราะบางเดี่ยวในระบบที่หากเกิดความเสียหายเพียงจุดเดียว จะส่งผลให้ระบบเครือข่ายทั้งหมดหรือบริการสำคัญหยุดทำงานทันที' },
      { term: 'Unicast vs Broadcast vs Multicast vs Anycast', desc: 'รูปแบบการส่งข้อมูล: Unicast (หนึ่งต่อหนึ่ง), Broadcast (หนึ่งต่อทั้งหมด), Multicast (หนึ่งต่อกลุ่มเฉพาะ), Anycast (หนึ่งต่อโหนดที่ใกล้ที่สุดตามเส้นทางเราติ้ง)' }
    ],
    quiz: [
      {
        question: 'เครือข่ายที่มีอุปกรณ์จำนวน 8 โหนด หากต้องการเชื่อมต่อแบบ Full-Mesh Topology อย่างสมบูรณ์ จะต้องใช้สายสัญญาณเชื่อมต่อทั้งหมดกี่เส้น?',
        options: ['16 เส้น', '28 เส้น', '56 เส้น', '64 เส้น'],
        answer: 1,
        explanation: 'สูตรคำนวณจำนวนลิงก์ของ Full-Mesh Topology คือ N(N - 1) / 2 เมื่อ N = 8 จะได้ 8 × 7 / 2 = 28 เส้น ซึ่งให้ความทนทานสูงสุดโดยไม่มีจุดล้มเหลวเดี่ยว'
      },
      {
        question: 'อุปกรณ์เครือข่ายในข้อใดทำหน้าที่แบ่งแยกทั้ง Collision Domain และ Broadcast Domain ออกจากกันโดยสมบูรณ์ในระดับมาตรฐาน?',
        options: ['Hub / Multiport Repeater', 'Layer 2 Ethernet Switch', 'Network Router / Layer 3 Switch', 'Patch Panel'],
        answer: 2,
        explanation: 'Layer 2 Switch แบ่งแยกเฉพาะ Collision Domain ในแต่ละพอร์ต แต่ยังอยู่ใน Broadcast Domain เดียวกัน ส่วน Router / Layer 3 Switch ทำงานที่ Layer 3 จึงแบ่งแยกทั้ง Collision Domain และ Broadcast Domain ในทุกอินเทอร์เฟซ'
      },
      {
        question: 'ตัวชี้วัดประสิทธิภาพเครือข่ายข้อใดหมายถึง "ปริมาณข้อมูลระดับแอพพลิเคชันที่เป็นประโยชน์จริง (Useful Payload)" ซึ่งไม่รวม Header Overhead และการส่งซ้ำ?',
        options: ['Theoretical Bandwidth', 'Network Throughput', 'Application Goodput', 'Propagation Latency'],
        answer: 2,
        explanation: 'Goodput คืออัตราการส่งข้อมูลเนื้อหาแท้จริงของแอพพลิเคชัน (Payload) ไปถึงปลายทางสำเร็จ โดยหักส่วนหัวโปรโตคอล (Headers) ทุกระดับชั้น และข้อมูลที่ต้อง Retransmit ทิ้งทั้งหมด'
      }
    ]
  },
  {
    id: 2,
    slug: '02-network-reference-models-and-protocols',
    title: 'บทที่ 2: โมเดลอ้างอิงเครือข่ายและโปรโตคอลมาตรฐาน',
    subtitle: 'Network Reference Models (OSI vs TCP/IP) & Transport Protocols',
    category: 'Fundamentals & Architecture',
    categoryTh: 'ระดับ 1: พื้นฐานและสถาปัตยกรรมเครือข่าย',
    icon: 'Layers',
    overview: 'เจาะลึกสถาปัตยกรรมแบบแบ่งชั้น OSI 7 เลเยอร์ เทียบกับ TCP/IP 5 เลเยอร์ วงจรการ Encapsulation / De-encapsulation และการทำงานของโปรโตคอลขนส่งข้อมูล TCP vs UDP',
    labName: 'OSI & TCP/IP Dual-Stack Encapsulation Studio',
    labDescription: 'ส่องดูการบรรจุและแกะซอง Header ของแพ็กเก็ตทุกระดับชั้น (PDU) พร้อมทดลองเปรียบเทียบการทำงานของ TCP Handshake กับ UDP Stream',
    sections: [
      {
        title: '1. สถาปัตยกรรมโมเดลอ้างอิง: OSI 7-Layer เทียบกับ TCP/IP 5-Layer',
        content: `การแบ่งชั้นการทำงาน (Layering Architecture) มีประโยชน์หลัก 3 ประการ:
1. **Modularity**: แต่ละเลเยอร์ทำหน้าที่อิสระ การเปลี่ยนแปลงในชั้นหนึ่งไม่ส่งผลกระทบต่อชั้นอื่น
2. **Standardization & Interoperability**: ช่วยให้อุปกรณ์ต่างผู้ผลิตสามารถสื่อสารร่วมกันได้ตามมาตรฐานเปิดสากล (Vendor-Neutral)
3. **Systematic Troubleshooting**: วิเคราะห์และแก้ไขปัญหาเครือข่ายได้อย่างเป็นขั้นเป็นตอนจากล่างขึ้นบน (Bottom-Up) หรือจากบนลงล่าง (Top-Down)

**การเปรียบเทียบระหว่างโมเดล OSI 7 ชั้น และ TCP/IP 5 ชั้น:**
• **Layer 7 - Application**: อินเทอร์เฟซระหว่างผู้ใช้กับแอพพลิเคชัน (HTTP/HTTPS, DNS, SSH, FTP, SMTP)
• **Layer 6 - Presentation**: แปลงรูปแบบข้อมูล เข้ารหัส/ถอดรหัส (Encryption/Decryption เช่น TLS/SSL), และการบีบอัดข้อมูล (Compression)
• **Layer 5 - Session**: ควบคุมการสร้าง คงไว้ และยุติเซสชันการสื่อสารระหว่างแอพพลิเคชัน (RPC, NetBIOS)
*(หมายเหตุ: ในโมเดล TCP/IP จะรวมชั้น 7, 6, 5 เข้าด้วยกันเป็น Application Layer)*
• **Layer 4 - Transport**: ควบคุมการส่งข้อมูลระหว่างโพรเซสแบบ End-to-End, จัดการหมายเลขพอร์ต (Port Numbers), การควบคุมความผิดพลาดและการไหลของข้อมูล (TCP, UDP)
• **Layer 3 - Network**: การกำหนดหมายเลขแอดเดรสเชิงตรรกะ (Logical Addressing เช่น IPv4, IPv6) และการค้นหาเส้นทางที่ดีที่สุดข้ามเครือข่าย (Routing Protocols: OSPF, BGP, ICMP)
• **Layer 2 - Data Link**: การส่งต่อข้อมูลข้ามลิงก์ทางกายภาพเดียวกัน กำหนดหมายเลขกายภาพ (MAC Address) ควบคุมการเข้าถึงสื่อ (MAC/LLC Sublayers) และตรวจสอบความถูกต้องของเฟรม (Ethernet, PPP, Wi-Fi 802.11)
• **Layer 1 - Physical**: ส่งสัญญาณดิจิทัลในรูปของบิต (Bits: 0 และ 1) ผ่านสื่อนำสัญญาณทางกายภาพ (แรงดันไฟฟ้า, พัลส์แสง, คลื่นวิทยุ)`
      },
      {
        title: '2. วงจรชีวิต PDU และกระบวนการ Encapsulation / De-encapsulation',
        content: `**Protocol Data Unit (PDU) ประจำแต่ละเลเยอร์:**
• Layer 7-5 (Application): **Data / Payload**
• Layer 4 (Transport): **Segment** (TCP) หรือ **Datagram** (UDP)
• Layer 3 (Network): **Packet**
• Layer 2 (Data Link): **Frame**
• Layer 1 (Physical): **Bits**

**กระบวนการส่งและรับข้อมูล (Data Lifecycle):**
1. **Encapsulation (การห่อหุ้มข้อมูลฝั่งส่ง)**:
   - แอพพลิเคชันสร้าง Data
   - Transport Layer เติม **L4 Header** (Source Port, Destination Port, Sequence Number) กลายเป็น *Segment*
   - Network Layer เติม **L3 Header** (Source IP, Destination IP, TTL, Protocol) กลายเป็น *Packet*
   - Data Link Layer เติม **L2 Header** (Source MAC, Destination MAC, EtherType) และ **L2 Trailer** (FCS/CRC-32) กลายเป็น *Frame*
   - Physical Layer แปลงเฟรมเป็นสัญญาณบิต (Bits) ส่งผ่านสายสัญญาณ
2. **De-encapsulation (การถอดรหัสข้อมูลฝั่งรับ)**:
   - เมื่อข้อมูลถึงปลายทาง อุปกรณ์จะตรวจสอบความถูกต้องทีละชั้น ถอดส่วนหัว (Header Strip) และส่งข้อมูลที่แกะแล้วขึ้นสู่เลเยอร์ถัดไปจนถึงระดับ Application`
      },
      {
        title: '3. โปรโตคอลการขนส่งข้อมูลระดับ Layer 4: TCP vs UDP เชิงลึก',
        content: `**TCP (Transmission Control Protocol - RFC 793):**
• **Connection-Oriented**: ต้องสร้างการเชื่อมต่อผ่าน **TCP 3-Way Handshake** (SYN -> SYN-ACK -> ACK) ก่อนส่งข้อมูล และยกเลิกผ่าน **4-Way Teardown** (FIN -> ACK -> FIN -> ACK)
• **Reliability**: รับประกันการส่งข้อมูลถึงปลายทาง 100% ด้วยหมายเลขลำดับ (Sequence Number) และการส่งการตอบรับ (ACK) หากแพ็กเก็ตสูญหายจะมีการส่งซ้ำอัตโนมัติ (Retransmission)
• **Flow Control & Congestion Control**: ใช้กลไก **Sliding Window** เพื่อปรับอัตราความเร็วในการส่งข้อมูลตามขนาดบัฟเฟอร์ของผู้รับ และอัลกอริทึมชะลอการส่งเมื่อเครือข่ายหนาแน่น (Slow Start, Congestion Avoidance)
• **Use Cases**: Web Browsing (HTTP/HTTPS พอร์ต 80/443), ถ่ายโอนไฟล์ (FTP/SFTP), อีเมล (SMTP/IMAP), รีโมตคอนโซล (SSH พอร์ต 22)

**UDP (User Datagram Protocol - RFC 768):**
• **Connectionless**: ไม่มีการสร้างการเชื่อมต่อ ส่งข้อมูลได้ทันทีแบบ Best-Effort
• **Low Overhead & High Speed**: ส่วนหัวมีขนาดเล็กคงที่เพียง **8 ไบต์** (เทียบกับ TCP 20-60 ไบต์) ไม่มีการรอ ACK ไม่มีการส่งซ้ำ ความหน่วงต่ำมาก
• **Use Cases**: การค้นหาชื่อโดเมน (DNS Query พอร์ต 53), บริการเสียงและวิดีโอเรียลไทม์ (VoIP/SIP, RTP, WebRTC), สตรีมมิ่งสด, โปรโตคอลจัดการเวลา (NTP พอร์ต 123), และ SNMP (พอร์ต 161)`
      }
    ],
    terms: [
      { term: 'Protocol Data Unit (PDU)', desc: 'หน่วยโครงสร้างข้อมูลในแต่ละชั้น: Data (L7-5), Segment/Datagram (L4), Packet (L3), Frame (L2), Bits (L1)' },
      { term: 'Encapsulation vs De-encapsulation', desc: 'การเติมส่วนหัว Header เพิ่มเติมขณะส่งข้อมูลลงมาตามชั้น (Encapsulation) และการถอด Header ออกทีละชั้นเมื่อรับข้อมูล (De-encapsulation)' },
      { term: 'TCP 3-Way Handshake & 4-Way Teardown', desc: 'กระบวนการสร้างการเชื่อมต่อ (SYN -> SYN-ACK -> ACK) และยกเลิกการเชื่อมต่อ (FIN -> ACK -> FIN -> ACK) อย่างน่าเชื่อถือ' },
      { term: 'Sliding Window & Flow Control', desc: 'กลไกควบคุมปริมาณข้อมูลที่ส่งโดยไม่ต้องรอ Ack ทุกแพ็กเก็ต ช่วยป้องกันไม่ให้ข้อมูลล้นบัฟเฟอร์ของฝั่งผู้รับ (Buffer Overflow)' },
      { term: 'Well-Known Ports vs Ephemeral Ports', desc: 'พอร์ตมาตรฐานของเซิร์ฟเวอร์ 0-1023 (เช่น HTTP 80, HTTPS 443, DNS 53) เทียบกับพอร์ตชั่วคราวของไคลเอนต์ 49152-65535' }
    ],
    quiz: [
      {
        question: 'เมื่อเว็บเบราว์เซอร์ของไคลเอนต์ต้องการเชื่อมต่อไปยังเว็บเซิร์ฟเวอร์ HTTPS ผ่านพอร์ต 443 แพ็กเก็ตแรกสุดที่ถูกส่งออกไปคือแพ็กเก็ตใด?',
        options: ['HTTP GET Request', 'TLS Client Hello', 'TCP SYN (Synchronize)', 'TCP ACK (Acknowledgment)'],
        answer: 2,
        explanation: 'ก่อนที่แอพพลิเคชัน (TLS/HTTPS) จะเริ่มส่งข้อมูลได้ เลเยอร์ Transport จะต้องทำการสร้างการเชื่อมต่อผ่าน TCP 3-Way Handshake เสียก่อน โดยเริ่มจากแพ็กเก็ต TCP SYN จากไคลเอนต์'
      },
      {
        question: 'หน่วยข้อมูล (Protocol Data Unit - PDU) ในระดับ Network Layer (Layer 3) และ Data Link Layer (Layer 2) มีชื่อเรียกตามมาตรฐานสากลว่าอย่างไรตามลำดับ?',
        options: ['Segment และ Packet', 'Packet และ Frame', 'Frame และ Bits', 'Datagram และ Segment'],
        answer: 1,
        explanation: 'มาตรฐาน PDU สากลระบุ: Layer 4 = Segment/Datagram, Layer 3 = Packet, Layer 2 = Frame, Layer 1 = Bits'
      },
      {
        question: 'โปรโตคอลและแอพพลิเคชันในข้อใดเลือกใช้งาน UDP (User Datagram Protocol) เป็นหลักเนื่องจากต้องการความหน่วงต่ำ (Low Latency) และไม่ต้องการภาระ Overhead จากการส่งซ้ำ?',
        options: ['SSH และ SFTP', 'DNS Query และ VoIP / Real-time Video Streaming', 'HTTP Web Browsing และ HTTPS', 'SMTP และ IMAP Email'],
        answer: 1,
        explanation: 'DNS Query และบริการสื่อสารแบบเรียลไทม์ (VoIP, Video Call, Live Streaming) ใช้ UDP เพราะมี Header ขนาดเล็กเพียง 8 ไบต์ ไร้ความหน่วงจากการ Handshake และไม่ต้องรอ Retransmission'
      }
    ]
  },
  {
    id: 3,
    slug: '03-network-device-architecture-and-management',
    title: 'บทที่ 3: สถาปัตยกรรมและการจัดการอุปกรณ์เครือข่ายสากล',
    subtitle: 'Network Device Architecture (Planes, Memory, OOB, Syslog, NTP & SNMP)',
    category: 'Fundamentals & Architecture',
    categoryTh: 'ระดับ 1: พื้นฐานและสถาปัตยกรรมเครือข่าย',
    icon: 'Terminal',
    overview: 'ทำความเข้าใจการแยก Control Plane, Data Plane และ Management Plane สถาปัตยกรรมหน่วยความจำ (RAM vs Flash/NVRAM) การบริหารจัดการแบบ In-Band vs Out-of-Band (OOB) ระบบ Syslog 0-7, NTP และ SNMP',
    labName: 'Universal Network OS & CLI Modes Simulator',
    labDescription: 'ทดลองใช้งานโหมดคำสั่ง CLI สากล (User Exec, Privileged, Config, Interface) พร้อมจำลองการบันทึกสถานะคอนฟิกและดู Log ข้อผิดพลาด',
    sections: [
      {
        title: '1. สถาปัตยกรรม 3 ระนาบของอุปกรณ์เครือข่าย (Control, Data & Management Planes)',
        content: `อุปกรณ์เครือข่ายระดับองค์กร (Routers, Layer 3 Switches, Next-Gen Firewalls) ถูกออกแบบด้วยการแบ่งแยกหน้าที่การทำงานออกเป็น 3 ระนาบหลักอย่างชัดเจน:
1. **Data Plane / Forwarding Plane (ระนาบการส่งต่อข้อมูล)**:
   - ทำหน้าที่ส่งต่อแพ็กเก็ตและเฟรมข้อมูลด้วยความเร็วระดับสายสัญญาณ (Hardware Line-Rate Forwarding)
   - ขับเคลื่อนด้วยชิปฮาร์ดแวร์ความเร็วสูงเฉพาะทาง เช่น **ASIC (Application-Specific Integrated Circuit)**, **TCAM (Ternary Content-Addressable Memory)** หรือ NPU
   - ปฏิบัติการค้นหาตารางส่งต่อ (FIB Lookup, MAC Table Lookup), ตรวจสอบ ACL และแก้ไขส่วนหัวเฟรม (TTL Decrement, MAC Rewrite)
2. **Control Plane (ระนาบการควบคุมและคำนวณเส้นทาง)**:
   - ทำงานบน CPU หลักและหน่วยความจำระบบของอุปกรณ์
   - รันโปรโตคอลการแลกเปลี่ยนข้อมูลและสร้างโครงสร้างตาราง เช่น Routing Protocols (OSPF, BGP, RIP), Spanning Tree (STP/RSTP), LACP และ ARP
   - นำผลการคำนวณ (เช่น Best Routes ใน RIB) โปรแกรมลงสู่ตาราง FIB บน Data Plane
3. **Management Plane (ระนาบการบริหารจัดการ)**:
   - ช่องทางสำหรับผู้ดูแลระบบในการตรวจสอบ ตั้งค่า และดูแลอุปกรณ์
   - รองรับโปรโตคอลและเครื่องมือบริหารจัดการ เช่น SSH, Telnet, Console, SNMP, Syslog, NTP, Web GUI, และโปรโตคอลจัดการยุคใหม่อย่าง NETCONF / RESTCONF / YANG Data Models`
      },
      {
        title: '2. สถาปัตยกรรมหน่วยความจำและวงจรคอนฟิกูเรชัน (RAM, NVRAM/Flash & In-Band vs OOB)',
        content: `**สถาปัตยกรรมหน่วยความจำ (Device Memory Hierarchy):**
• **RAM (Random Access Memory)**: หน่วยความจำชั่วคราว (Volatile) เป็นที่จัดเก็บ **Running-Configuration** (การตั้งค่าที่กำลังทำงานอยู่), ตาราง RIB/FIB, ตาราง ARP และตาราง CAM ข้อมูลทั้งหมดจะสูญหายทันทีหากปิดเครื่องหรือไฟดับ
• **NVRAM / Flash Memory**: หน่วยความจำถาวร (Non-Volatile) เก็บไฟล์ระบบปฏิบัติการ (OS System Image), ไฟล์ใบอนุญาต (License), และ **Startup-Configuration / Saved-Configuration** ซึ่งจะถูกโหลดขึ้นมาทำงานใน RAM ตอนบูตเครื่อง
• **ROM / Bootloader**: ชิปหน่วยความจำถาวรขนาดเล็ก เก็บโปรแกรมพื้นฐานสำหรับทำ POST (Power-On Self-Test) และสั่งโหลด OS Image จาก Flash เข้าสู่ RAM

**รูปแบบการเข้าถึงเพื่อบริหารจัดการ (Management Access Modes):**
• **Out-of-Band (OOB) Management**:
  - การเชื่อมต่อผ่านช่องทางทางกายภาพที่แยกอิสระจากเครือข่ายทราฟฟิกข้อมูล (Data Network) เช่น การเสียบสาย Console (RS-232 / USB-Serial) เข้าพอร์ต Console/Aux หรือพอร์ต Dedicated Management Ethernet
  - มีความปลอดภัยสูงสุด และสามารถเข้าถึงเพื่อกู้คืนอุปกรณ์ได้แม้ในขณะที่ระบบเครือข่ายหลักล่มสลายหรือ Data Plane หนาแน่น 100%
• **In-Band Management**:
  - การบริหารจัดการผ่านเครือข่ายการผลิตปกติ (Production Network) โดยเชื่อมต่อผ่าน IP Address ของอินเทอร์เฟซ (VLAN/SVI/Loopback) ด้วยโปรโตคอล SSHv2 หรือ HTTPS`
      },
      {
        title: '3. ระบบบันทึกข้อความแจ้งเตือน Syslog, NTP และการเฝ้าระวัง SNMP',
        content: `**มาตรฐานระดับความรุนแรงของบันทึกเหตุการณ์ (Syslog Severity Levels 0-7 ตาม RFC 5424):**
• **0 - Emergency**: ระบบล่มสลาย อุปกรณ์ไม่สามารถทำงานได้ (System unusable)
• **1 - Alert**: ต้องดำเนินการแก้ไขทันที (Immediate action required)
• **2 - Critical**: สภาวะวิกฤต เช่น พาวเวอร์ซัพพลายหลักพัง, อุณหภูมิเกินขีดจำกัด (Critical condition)
• **3 - Error**: เกิดข้อผิดพลาดในการประมวลผล (Error condition)
• **4 - Warning**: คำเตือนเหตุการณ์ผิดปกติที่อาจนำไปสู่ปัญหา (Warning condition)
• **5 - Notification**: เหตุการณ์ปกติที่มีความสำคัญ เช่น พอร์ตอัป/ดาวน์ (Normal but significant)
• **6 - Informational**: ข้อความแจ้งสถานะการทำงานทั่วไป (Informational message)
• **7 - Debugging**: ข้อความรายงานการทำงานเชิงลึกสำหรับตรวจวิเคราะห์ปัญหา (Debug-level message)

**โปรโตคอลสนับสนุนการบริหารจัดการ:**
• **NTP (Network Time Protocol - UDP Port 123)**: ซิงโครไนซ์เวลานาฬิกาของอุปกรณ์เครือข่ายทั้งหมดให้ตรงกันในระดับมิลลิวินาที มีความสำคัญยิ่งยวดต่อการวิเคราะห์ Log ข้อผิดพลาดแบบข้ามอุปกรณ์ (Log Correlation) และความถูกต้องของใบรับรองดิจิทัล (Digital Certificates)
• **SNMP (Simple Network Management Protocol - UDP Ports 161/162)**: โปรโตคอลสำหรับระบบบริหารเครือข่ายส่วนกลาง (NMS) ในการดึงข้อมูลสถานะอุปกรณ์ (SNMP Get/Walk), ตั้งค่าพารามิเตอร์ (SNMP Set), และรับการแจ้งเตือนเหตุการณ์สำคัญทันทีผ่าน SNMP Trap / Inform`
      }
    ],
    terms: [
      { term: 'Control Plane vs Data Plane vs Management Plane', desc: 'Control Plane คำนวณเส้นทาง (CPU), Data Plane ส่งต่อแพ็กเก็ตความเร็วสาย (ASIC/FIB), Management Plane จัดการและตั้งค่าระบบ (SSH/Console)' },
      { term: 'Running-Config vs Startup-Config', desc: 'Running-Config อยู่ใน RAM ชั่วคราว (สูญหายเมื่อไฟดับ), Startup/Saved-Config บันทึกใน Flash/NVRAM ถาวร (โหลดขึ้นมาตอนบูต)' },
      { term: 'In-Band vs Out-of-Band (OOB) Management', desc: 'In-Band จัดการผ่านทราฟฟิกเครือข่ายปกติ, OOB จัดการผ่านพอร์ตเฉพาะ (Console/Aux/Mgmt) ที่แยกอิสระจากทราฟฟิกข้อมูล' },
      { term: 'Syslog Severity Levels (0-7)', desc: 'มาตรฐานระดับความรุนแรงของ Log: 0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Info, 7=Debug' },
      { term: 'NTP & SNMP Centralized Management', desc: 'NTP ซิงค์เวลาอุปกรณ์ให้ตรงกันเพื่อตรวจสอบเหตุการณ์, SNMP ใช้ตรวจสอบสถานะและส่ง Trap แจ้งเตือนไปยัง NMS' }
    ],
    quiz: [
      {
        question: 'ระนาบการทำงานใดของสวิตช์และเราเตอร์ทำหน้าที่ส่งต่อแพ็กเก็ตด้วยความเร็วสูงระดับสายสัญญาณ (Hardware Line-Rate) โดยอาศัยชิปประมวลผลเฉพาะทาง (ASIC / TCAM)?',
        options: ['Management Plane', 'Control Plane', 'Data Plane (Forwarding Plane)', 'Application Plane'],
        answer: 2,
        explanation: 'Data Plane (หรือ Forwarding Plane) ประกอบด้วยชิป ASIC/TCAM และฮาร์ดแวร์ความเร็วสูง ทำหน้าที่ค้นหาตาราง FIB/CAM แล้วส่งต่อแพ็กเก็ตออกทางพอร์ตปลายทางโดยไม่ผ่าน CPU หลัก'
      },
      {
        question: 'หากวิศวกรเครือข่ายแก้ไขคอนฟิกูเรชันบนอุปกรณ์เสร็จสิ้น แต่ไม่ได้บันทึกคำสั่ง (Save/Copy to Startup-Config) เมื่ออุปกรณ์เกิดไฟดับกะทันหัน จะเกิดผลลัพธ์อย่างไร?',
        options: ['การตั้งค่าทั้งหมดจะถูกเขียนลง Flash อัตโนมัติ', 'การตั้งค่าใหม่ที่อยู่ใน RAM จะสูญหาย และอุปกรณ์จะบูตด้วย Startup-Config เดิมจาก Flash/NVRAM', 'อุปกรณ์จะไม่สามารถบูตระบบปฏิบัติการได้', 'ตาราง MAC Table และ Routing Table จะถูกล็อกถาวร'],
        answer: 1,
        explanation: 'การเปลี่ยนแปลงในโหมดคอนฟิกจะถูกจัดเก็บบน volatile RAM (Running-Config) หากไม่ได้บันทึกลง Flash/NVRAM (Startup-Config) ข้อมูลจะหายทั้งหมดเมื่อปิดเครื่องหรือไฟดับ'
      },
      {
        question: 'ระดับความรุนแรงของข้อความบันทึกเหตุการณ์ Syslog Severity ในระดับใดที่หมายถึงสภาวะวิกฤต (Critical Condition) เช่น พาวเวอร์ซัพพลายหลักเสียหาย หรืออุณหภูมิฮาร์ดแวร์เกินขีดจำกัด?',
        options: ['Syslog Severity 7 (Debug)', 'Syslog Severity 5 (Notice)', 'Syslog Severity 2 (Critical)', 'Syslog Severity 6 (Informational)'],
        answer: 2,
        explanation: 'ตามมาตรฐาน RFC 5424 ระดับ Syslog Severity 2 คือ Critical บ่งบอกถึงภาวะวิกฤตของฮาร์ดแวร์หรือระบบที่ต้องการการดูแลทันที'
      }
    ]
  },
  {
    id: 4,
    slug: '04-ethernet-switching-and-mac-learning',
    title: 'บทที่ 4: สวิตชิ่งอีเทอร์เน็ต การเรียนรู้แมคแอดเดรส และโปรโตคอล ARP',
    subtitle: 'Ethernet Switching, MAC Learning (CAM Table), Flooding & ARP',
    category: 'Layer 2 Switching',
    categoryTh: 'ระดับ 2: สวิตชิ่งระดับ Layer 2',
    icon: 'ToggleLeft',
    overview: 'เจาะลึกโครงสร้างเฟรม Ethernet II กลไกการเรียนรู้ MAC Address ลงตาราง CAM พฤติกรรมการส่งเฟรม 3 รูปแบบ (Forwarding, Flooding, Filtering) และการทำงานของ Address Resolution Protocol (ARP / GARP)',
    labName: 'Switch MAC Learning & CAM Engine Studio',
    labDescription: 'จำลองการส่งเฟรมระหว่าง 4 โฮสต์ ติดตามการบันทึก Source MAC ลง CAM Table และวิเคราะห์พฤติกรรม Flooding เมื่อเจอ Unknown Unicast',
    sections: [
      {
        title: '1. โครงสร้างเฟรมอีเทอร์เน็ตมาตรฐาน (Ethernet II Frame Structure & MAC Addressing)',
        content: `**โครงสร้างเฟรม Ethernet II (มาตรฐาน IEEE 802.3):**
• **Preamble (7 Bytes)**: ลำดับบิต 10101010 สลับกันเพื่อซิงโครไนซ์สัญญาณนาฬิกาของฝั่งรับ
• **SFD (Start Frame Delimiter - 1 Byte)**: ลำดับบิต 10101011 บ่งบอกจุดเริ่มต้นของเฟรมข้อมูล
• **Destination MAC Address (6 Bytes / 48 Bits)**: ที่อยู่กายภาพของผู้รับ
• **Source MAC Address (6 Bytes / 48 Bits)**: ที่อยู่กายภาพของผู้ส่ง
• **Type / EtherType (2 Bytes)**: ระบุโปรโตคอลในเลเยอร์ 3 (เช่น 0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP, 0x8100 = 802.1Q VLAN Tag)
• **Data Payload (46 - 1500 Bytes)**: ข้อมูลจากเลเยอร์ 3 หากข้อมูลเล็กกว่า 46 ไบต์ สวิตช์จะเติม Padding ให้ครบขนาดขั้นต่ำ 64 ไบต์
• **FCS (Frame Check Sequence - 4 Bytes)**: รหัสตรวจสอบความถูกต้องระดับบิตด้วยอัลกอริทึม CRC-32 หากพบข้อผิดพลาด เฟรมจะถูกทิ้งทันที

**สถาปัตยกรรมหมายเลข MAC Address (48 บิต / 12 ตัวเลขฐานสิบหก):**
• **OUI (Organizationally Unique Identifier - 24 บิตแรก)**: รหัสผู้ผลิตฮาร์ดแวร์ที่ได้รับการจัดสรรจาก IEEE
• **Device Identifier (NIC Specific - 24 บิตหลัง)**: หมายเลขซีเรียลเฉพาะของอุปกรณ์ที่ผู้ผลิตกำหนดขึ้น
• **บิต I/G (Individual / Group - บิตที่ 8 ของไบต์แรก)**: 0 = Unicast Address, 1 = Multicast/Broadcast Address
• **บิต G/L (Global / Local - บิตที่ 7 ของไบต์แรก)**: 0 = Globally Unique (มาตรฐาน IEEE), 1 = Locally Administered (กำหนดเอง)`
      },
      {
        title: '2. กลไกการเรียนรู้ตาราง CAM และ 3 พฤติกรรมการส่งต่อเฟรมของสวิตช์',
        content: `สวิตช์จัดเก็บการจับคู่ระหว่าง MAC Address, พอร์ตเชื่อมต่อ และหมายเลข VLAN ไว้ในหน่วยความจำความเร็วสูงที่เรียกว่า **CAM Table (Content Addressable Memory)** หรือ **MAC Address Table**

**กระบวนการเรียนรู้และอัปเดตตาราง MAC (MAC Learning):**
• เมื่อมีเฟรมเดินทางเข้าสู่พอร์ต (Ingress) สวิตช์จะตรวจสอบ **Source MAC Address**
• หากยังไม่มีในตาราง สวิตช์จะบันทึก Source MAC คู่กับพอร์ตขาเข้าและ VLAN ID ทันที พร้อมเริ่มนับตัวจับเวลา **Aging Timer** (ดีฟอลต์สากลคือ 300 วินาที หรือ 5 นาที)
• หากมีอยู่แล้ว สวิตช์จะรีเซ็ต Aging Timer ของรายการนั้นใหม่ หากพบว่า Source MAC เดิมย้ายไปโผล่ที่พอร์ตอื่น สวิตช์จะอัปเดตพอร์ตใหม่ทันที (MAC Mobility)

**3 พฤติกรรมหลักในการประมวลผลเฟรม (Switch Frame Actions):**
1. **Forwarding (Unicast Forwarding)**: เมื่อ Destination MAC มีอยู่ในตาราง CAM สวิตช์จะส่งเฟรมออกเฉพาะพอร์ตปลายทางที่ระบุอย่างแม่นยำ
2. **Flooding (Unknown Unicast / Broadcast / Multicast)**: หากไม่พบ Destination MAC ในตาราง CAM (Unknown Unicast) หรือเฟรมเป็น Broadcast/Multicast สวิตช์จะคัดลอกและส่งเฟรมออกไปทุกพอร์ตใน VLAN เดียวกัน *ยกเว้นพอร์ตขาเข้าที่รับเฟรมนั้นมา*
3. **Filtering / Discarding**: หาก Destination MAC อยู่บนพอร์ตเดียวกับพอร์ตขาเข้า หรือพอร์ตปลายทางถูกบล็อกโดย Security/STP สวิตช์จะทิ้งเฟรมนั้นทันที

**กลไกการสวิตชิ่ง (Switching Methods):**
• **Store-and-Forward**: รับเฟรมครบทั้งเฟรมและตรวจ CRC-32 FCS ให้ถูกต้องก่อนส่งต่อ ป้องกันเฟรมเสีย (Error-free) ปลอดภัยสูงสุด
• **Cut-Through**: อ่านเฉพาะ Destination MAC 6 ไบต์แรกแล้วส่งต่อทันที ให้ความหน่วงต่ำที่สุด (Sub-microsecond) เหมาะกับ High-Frequency Trading และ Data Center Fabric
• **Fragment-Free**: อ่านข้อมูลอย่างน้อย 64 ไบต์แรก (เพื่อกรองเฟรมที่เกิด Collision Runt) แล้วส่งต่อทันที`
      },
      {
        title: '3. โปรโตคอลแปลงแอดเดรส ARP และ Gratuitous ARP (GARP)',
        content: `**Address Resolution Protocol (ARP - RFC 826):**
ทำหน้าที่แปลงหมายเลข IP Address (Layer 3) เป็นหมายเลข MAC Address (Layer 2) ในเครือข่ายท้องถิ่น (Local Broadcast Domain):
1. **ARP Request**: เมื่อโฮสต์ต้นทางต้องการส่งข้อมูลแต่ไม่ทราบ MAC ปลายทาง จะส่งเฟรมบรอดคาสต์ (Dst MAC: FF:FF:FF:FF:FF:FF) ถามว่า "ใครถือหมายเลข IP นี้ ขอให้แจ้ง MAC กลับมา"
2. **ARP Reply**: โฮสต์เจ้าของ IP นั้นจะตอบกลับด้วยเฟรม Unicast ส่งตรงไปยัง MAC ของผู้ขอ
3. **ARP Cache**: โฮสต์ต้นทางจะบันทึกข้อมูล IP-to-MAC ลงในตารางแคชชั่วคราวเพื่อใช้ส่งข้อมูลต่อไป

**Gratuitous ARP (GARP):**
คือการที่โฮสต์ส่ง ARP Request หรือ Reply โดยใช้ IP ของตนเองทั้งเป็น Source IP และ Destination IP เพื่อประโยชน์ 2 ประการ:
1. **IP Conflict Detection (ตรวจจับไอพีชนกัน)**: หากมีอุปกรณ์อื่นตอบกลับ GARP แสดงว่ามีคนตั้งค่า IP ซ้ำซ้อนในเครือข่าย
2. **CAM Table / ARP Cache Update**: เมื่ออุปกรณ์สำรองในระบบ High Availability (เช่น VRRP / HSRP หรือ Failover Cluster) สลับขึ้นมาทำงาน จะส่ง GARP ทันทีเพื่อให้สวิตช์อัปเดตตาราง MAC และโฮสต์อัปเดตตาราง ARP ชี้มายังพอร์ตใหม่โดยไม่ต้องรอไทม์เมอร์หมดอายุ`
      }
    ],
    terms: [
      { term: 'MAC Address Table / CAM Table', desc: 'ตารางในหน่วยความจำ Content Addressable Memory ของสวิตช์ที่จับคู่ MAC Address กับพอร์ตและ VLAN เพื่อใช้ในการส่งต่อเฟรม' },
      { term: 'Flooding vs Forwarding vs Filtering', desc: 'Flooding (ส่งออกทุกพอร์ตยกเว้นพอร์ตขาเข้าเมื่อไม่พบ MAC), Forwarding (ส่งเจาะจงพอร์ตปลายทาง), Filtering (ทิ้งเฟรมเมื่อต้นทางปลายทางอยู่พอร์ตเดียวกัน)' },
      { term: 'MAC Aging Timer (Default 300s)', desc: 'ระยะเวลานับถอยหลังของแต่ละ MAC Entry หากไม่มีทราฟฟิกจาก MAC นั้นเข้ามา ข้อมูลจะถูกลบออกจากตารางเพื่อคืนหน่วยความจำ' },
      { term: 'Store-and-Forward vs Cut-Through', desc: 'Store-and-Forward รับเฟรมครบทั้งเฟรมและตรวจ FCS ก่อนส่งต่อ, Cut-Through อ่านเฉพาะ Destination MAC 6 ไบต์แล้วส่งออกทันที' },
      { term: 'ARP & Gratuitous ARP (GARP)', desc: 'ARP แปลง IPv4 เป็น MAC ใน LAN, GARP ใช้แจ้งอัปเดต MAC Cache และตรวจสอบ IP ซ้ำซ้อนโดยไม่ต้องมีใครร้องขอ' }
    ],
    quiz: [
      {
        question: 'เมื่อสวิตช์ได้รับเฟรม Unicast เข้ามาทางพอร์ต GigabitEthernet 1 แต่ไม่พบ Destination MAC ปลายทางในตาราง MAC Address Table (Unknown Unicast) สวิตช์จะประมวลผลอย่างไร?',
        options: ['ทิ้งเฟรมนั้นทันที (Drop/Discard)', 'ส่งเฟรมออกไปทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ต GigabitEthernet 1 (Flooding)', 'ส่งเฟรมกลับไปยังต้นทางผ่านพอร์ต GigabitEthernet 1', 'ส่งแพ็กเก็ต ICMP Destination Unreachable กลับไป'],
        answer: 1,
        explanation: 'เมื่อสวิตช์ไม่รู้จัก Destination MAC ปลายทาง (Unknown Unicast) สวิตช์จะทำการ Flood เฟรมออกไปยังทุกพอร์ตที่อยู่ในบรอดคาสต์โดเมน (VLAN) เดียวกัน ยกเว้นพอร์ตขาเข้าที่รับเฟรมนั้นมา'
      },
      {
        question: 'สวิตช์ใช้วิธีการและข้อมูลส่วนใดในเฟรมอีเทอร์เน็ตในการเรียนรู้และอัปเดตตาราง MAC Address Table (CAM Table)?',
        options: ['ตรวจสอบ Destination MAC Address ในเฟรมที่รับเข้ามา', 'ตรวจสอบ Source MAC Address และพอร์ตขาเข้า (Ingress Port) ที่เฟรมนั้นเดินทางเข้ามา', 'ส่งคำถาม ARP Request ไปยังทุกโฮสต์เป็นระยะ', 'อ่านข้อมูล Routing Header จาก Layer 3'],
        answer: 1,
        explanation: 'สวิตช์เรียนรู้ตำแหน่งของอุปกรณ์แบบ Dynamic โดยการอ่าน Source MAC Address ของเฟรมที่เข้ามา พร้อมจับคู่กับพอร์ตขาเข้านั้นๆ แล้วบันทึกลงใน MAC Table'
      },
      {
        question: 'เทคนิคการสวิตชิ่งแบบใดที่ให้อัตราความหน่วงต่ำที่สุด (Lowest Latency) โดยสวิตช์เริ่มส่งต่อเฟรมทันทีหลังจากอ่านเพียง Destination MAC Address 6 ไบต์แรกจบ?',
        options: ['Store-and-Forward Switching', 'Cut-Through Switching', 'Fragment-Free Switching', 'Adaptive Buffering Switching'],
        answer: 1,
        explanation: 'Cut-Through Switching ช่วยลดความหน่วงให้อยู่ในระดับไมโครวินาที โดยสวิตช์จะอ่านเพียง 6 ไบต์แรกของ Destination MAC แล้วส่งออกทางพอร์ตปลายทางทันทีโดยไม่รอรับครบทั้งเฟรม'
      }
    ]
  },
  {
    id: 5,
    slug: '05-vlan-principles-and-8021q-tagging',
    title: 'บทที่ 5: เวอร์ชวลแลน (VLAN) และมาตรฐานการแท็กเฟรม IEEE 802.1Q',
    subtitle: 'VLAN Segmentation, IEEE 802.1Q Header (TPID, VID) & Port Tag Rules',
    category: 'Layer 2 Switching',
    categoryTh: 'ระดับ 2: สวิตชิ่งระดับ Layer 2',
    icon: 'FolderKanban',
    overview: 'ทำความเข้าใจการแบ่งส่วนเครือข่ายด้วย VLAN โครงสร้างเฮดเดอร์ 4 ไบต์ตามมาตรฐานสากล IEEE 802.1Q (TPID 0x8100, PCP, DEI, VID 1-4094) กฎการทำงานของพอร์ต Access, Trunk และ Native VLAN',
    labName: 'IEEE 802.1Q VLAN Tagging & Port Studio',
    labDescription: 'ทดลองกำหนดพอร์ต Access/Trunk ส่องดูการแทรก Tag 802.1Q ขณะเฟรมเข้า Trunk Link และการปลด Tag ทิ้งเมื่อส่งถึงพอร์ต Access',
    sections: [
      {
        title: '1. สถาปัตยกรรม VLAN และการจำกัดขอบเขต Broadcast Domain',
        content: `**Virtual Local Area Network (VLAN)** คือเทคโนโลยีการแบ่งเครือข่ายทางกายภาพ (Physical LAN) ออกเป็นเครือข่ายตรรกะย่อยๆ หลายเครือข่ายบนสวิตช์ตัวเดียวกัน

**ประโยชน์สำคัญของ VLAN:**
1. **Broadcast Containment (จำกัดขอบเขตบรอดคาสต์)**: เฟรม Broadcast, Multicast และ Unknown Unicast จะแพร่กระจายอยู่เฉพาะภายในสมาชิกของ VLAN เดียวกันเท่านั้น ช่วยประหยัดแบนด์วิดท์และลดภาระ CPU ของอุปกรณ์
2. **Enhanced Security (เพิ่มความปลอดภัย)**: แยกกลุ่มผู้ใช้งาน แผนก หรือเซิร์ฟเวอร์ออกจากกันอย่างเด็ดขาด โดยอุปกรณ์ต่าง VLAN จะไม่สามารถสื่อสารกันได้ในระดับ Layer 2 (ต้องผ่าน Layer 3 Firewall/Router)
3. **Flexible Network Management**: ย้ายตำแหน่งโต๊ะทำงานหรือกลุ่มแผนกได้โดยไม่ต้องเดินสายเคเบิลใหม่ เพียงแค่เปลี่ยนคอนฟิก VLAN บนพอร์ตสวิตช์`
      },
      {
        title: '2. โครงสร้างเฮดเดอร์มาตรฐาน IEEE 802.1Q Tag (4 Bytes)',
        content: `มาตรฐานสากล **IEEE 802.1Q (Dot1q)** กำหนดการแทรกส่วนหัวขนาด **4 ไบต์ (32 บิต)** เข้าไประหว่าง Source MAC และฟิลด์ EtherType ของเฟรม Ethernet ดั้งเดิม:

**โครงสร้างภายใน 802.1Q Tag:**
• **TPID (Tag Protocol Identifier - 16 บิต)**: มีค่าคงที่มาตรฐานสากลคือ \`0x8100\` บ่งบอกให้อุปกรณ์ทราบว่าเป็นเฟรมที่ถูกแท็กตามมาตรฐาน IEEE 802.1Q
• **TCI (Tag Control Information - 16 บิต)** ประกอบด้วย 3 ฟิลด์ย่อย:
  - **PCP / CoS (Priority Code Point - 3 บิต)**: ระบุลำดับความสำคัญของแพ็กเก็ตในระบบ Quality of Service (QoS) ตั้งแต่ระดับ 0 ถึง 7 (เช่น ระดับ 5 สำหรับ Voice ทราฟฟิก)
  - **DEI / CFI (Drop Eligible Indicator - 1 บิต)**: บ่งชี้ว่าเฟรมนี้สามารถถูกทิ้งได้ก่อนหรือไม่เมื่อเกิดภาวะเครือข่ายหนาแน่น (0 = ไม่ควรทิ้ง, 1 = ทิ้งได้)
  - **VID (VLAN Identifier - 12 บิต)**: หมายเลขระบุ VLAN ตั้งแต่ \`0\` ถึง \`4095\` (2^12 = 4,096 ค่า)
    * ค่า \`0\` และ \`4095\` ถูกสงวนไว้ตามมาตรฐาน
    * หมายเลข VLAN ที่ใช้งานได้จริงคือ **VLAN 1 ถึง 4094**
    * Normal Range: VLAN 1 - 1005 (VLAN 1 เป็น Default VLAN)
    * Extended Range: VLAN 1006 - 4094`
      },
      {
        title: '3. กฎการประมวลผลแท็กของพอร์ตสวิตช์สากล (Access, Trunk & Native VLAN Rules)',
        content: `สวิตช์มาตรฐานสากลจำแนกพอร์ตออกเป็น 2 บทบาทหลักตามลักษณะการเชื่อมต่อ:

**1. Access Port (พอร์ตเชื่อมต่ออุปกรณ์ปลายทาง):**
• ออกแบบสำหรับเชื่อมต่อคอมพิวเตอร์ เซิร์ฟเวอร์ พรินเตอร์ หรืออุปกรณ์ที่ไม่รองรับ 802.1Q Tag
• กำหนดให้อยู่ใน VLAN เดียวเท่านั้น (เรียกว่า **Port VLAN ID - PVID**)
• **Ingress (รับเข้า)**: รับเฟรม Untagged เข้ามา -> สวิตช์จะแทรก Tag 802.1Q ด้วยหมายเลข PVID ประจำพอร์ตเพื่อส่งต่อภายใน
• **Egress (ส่งออก)**: เมื่อจะส่งเฟรมไปยังอุปกรณ์ปลายทาง -> สวิตช์จะ **ถอด Tag 802.1Q ออก (Strip Tag)** กลายเป็นเฟรม Untagged ดั้งเดิม

**2. Trunk Port (พอร์ตเชื่อมต่อระหว่างอุปกรณ์เครือข่าย):**
• ออกแบบสำหรับเชื่อมต่อระหว่าง Switch-to-Switch หรือ Switch-to-Router ที่ต้องการส่งผ่านข้อมูลหลาย VLAN ข้ามสายเคเบิลเส้นเดียวกัน
• **Ingress (รับเข้า)**:
  - หากรับเฟรมที่มี Tag 802.1Q เข้ามา -> สวิตช์จะตรวจสอบว่า VID นั้นอยู่ในรายการ **Allowed VLAN List** หรือไม่ หากอนุญาตจะส่งต่อไปยัง VLAN นั้น
  - หากรับเฟรมแบบ Untagged เข้ามา -> สวิตช์จะติด Tag ด้วยหมายเลข **Native VLAN (PVID)** ของพอร์ตนั้น
• **Egress (ส่งออก)**:
  - หากเฟรมนั้นมี VID ตรงกับ **Native VLAN** ของพอร์ต Trunk -> สวิตช์จะ **ถอด Tag ออก (Untagged)** แล้วส่งออกไป
  - หากเฟรมนั้นมี VID เป็น VLAN อื่นๆ ใน Allowed List -> สวิตช์จะ **คง Tag 802.1Q ไว้ (Tagged)** แล้วส่งออกไป

**ความสำคัญของ Native VLAN:**
Native VLAN ช่วยให้พอร์ต Trunk สามารถรองรับทราฟฟิกที่ไม่รองรับการแท็ก (เช่น CDP, LLDP หรือ End-hosts เก่า) โดยทั้งสองฝั่งของ Trunk Link จะต้องกำหนดหมายเลข Native VLAN ให้ตรงกันเสมอ มิฉะนั้นจะเกิดปัญหา **Native VLAN Mismatch** ซึ่งอาจนำไปสู่การรั่วไหลของข้อมูลข้าม VLAN (VLAN Hopping / Leaking)`
      }
    ],
    terms: [
      { term: 'IEEE 802.1Q Tag (TPID & VID)', desc: 'เฮดเดอร์ 4 ไบต์ที่แทรกระหว่าง Source MAC กับ EtherType ประกอบด้วย TPID (0x8100), PCP (3-bit QoS), DEI (1-bit), และ VID (12-bit ระบุ VLAN 1-4094)' },
      { term: 'Access Port vs Trunk Port', desc: 'Access Port เชื่อมต่อโฮสต์ รับส่งเฉพาะเฟรม Untagged ของ 1 VLAN, Trunk Port เชื่อมต่อระหว่างสวิตช์ รองรับหลาย VLAN พร้อม Tag 802.1Q' },
      { term: 'Native VLAN / Port Default VID (PVID)', desc: 'VLAN ประจำพอร์ต Trunk ที่ทราฟฟิกจะถูกส่งออกไปโดยไม่มีการแท็ก 802.1Q (Untagged) ค่าเริ่มต้นมักเป็น VLAN 1' },
      { term: 'Ingress Tagging vs Egress Tag Stripping', desc: 'สวิตช์จะแท็ก 802.1Q ให้กับเฟรมเมื่อรับเข้า (Ingress) และถอดแท็กออกให้กลายเป็นเฟรมปกติเมื่อส่งออกจากพอร์ต Access (Egress)' },
      { term: 'Voice VLAN & Management VLAN', desc: 'การแยก VLAN พิเศษสำหรับทราฟฟิกโทรศัพท์ IP Phone เพื่อให้ค่า QoS สูง และแยก Management VLAN สำหรับควบคุมสวิตช์อย่างปลอดภัย' }
    ],
    quiz: [
      {
        question: 'ฟิลด์ VLAN Identifier (VID) ภายในเฮดเดอร์มาตรฐาน IEEE 802.1Q มีขนาดกี่บิต และสามารถกำหนดค่า VLAN ที่ใช้งานได้จริง (Usable Range) อยู่ในช่วงใด?',
        options: ['8 บิต, กำหนดได้ช่วง VLAN 1 ถึง 254', '12 บิต, กำหนดได้ช่วง VLAN 1 ถึง 4094', '16 บิต, กำหนดได้ช่วง VLAN 1 ถึง 65534', '20 บิต, กำหนดได้ช่วง VLAN 1 ถึง 1048574'],
        answer: 1,
        explanation: 'ฟิลด์ VID มีขนาด 12 บิต ทำให้มีค่า 2^12 = 4,096 ค่า โดยค่า 0 และ 4095 ถูกสงวนไว้ จึงมีช่วงใช้งานจริงตั้งแต่ VLAN 1 ถึง 4094'
      },
      {
        question: 'เมื่อสวิตช์ส่งเฟรมข้อมูลออกจากพอร์ตที่เป็น Access Port ซึ่งกำหนดให้อยู่ใน VLAN 20 ไปยังเครื่องคอมพิวเตอร์ปลายทาง สวิตช์จะจัดการกับเฟรมนั้นอย่างไร?',
        options: ['ส่งเฟรมที่มี 802.1Q Tag (VID=20) ไปยังเครื่องคอมพิวเตอร์', 'ถอด 802.1Q Tag ออกแล้วส่งเฟรมแบบ Untagged มาตรฐานไปยังคอมพิวเตอร์', 'เปลี่ยนหมายเลข VID ใน Tag เป็น 0 แล้วส่งต่อ', 'ทำการห่อหุ้ม L3 Header เพิ่มเติมเพื่อความปลอดภัย'],
        answer: 1,
        explanation: 'พอร์ต Access ถูกออกแบบให้เชื่อมต่อกับ End-host ปกติซึ่งไม่เข้าใจ 802.1Q Tag ดังนั้นสวิตช์จะ Strip (ถอด) Tag ออกทุกครั้งก่อนส่งออกจากพอร์ต Access'
      },
      {
        question: 'หากพอร์ต Trunk ของสวิตช์ถูกตั้งค่า Native VLAN เป็น VLAN 99 เมื่อมีเฟรม Untagged เดินทางเข้ามาทางพอร์ต Trunk นี้ สวิตช์จะประมวลผลเฟรมดังกล่าวให้อยู่ใน VLAN ใด?',
        options: ['ทิ้งเฟรมทันทีเนื่องจาก Trunk รับได้เฉพาะเฟรม Tagged', 'ประมวลผลให้อยู่ใน VLAN 1 ตามค่าดีฟอลต์สากล', 'ประมวลผลให้อยู่ใน VLAN 99 ตาม Native VLAN ที่กำหนดไว้', 'ส่งเฟรมไปถามเราเตอร์ผ่าน Inter-VLAN'],
        answer: 2,
        explanation: 'เมื่อพอร์ต Trunk ได้รับเฟรมแบบ Untagged สวิตช์จะนำเฟรมนั้นเข้าสู่กระบวนการภายในโดยถือว่าเป็นข้อมูลของ Native VLAN (ในที่นี้คือ VLAN 99)'
      }
    ]
  },
  {
    id: 6,
    slug: '06-spanning-tree-protocols-stp-and-rstp',
    title: 'บทที่ 6: โปรโตคอลป้องกันลูป Spanning Tree (STP 802.1D & RSTP 802.1w)',
    subtitle: 'Spanning Tree Principles, 4-Step Election & RSTP Fast Convergence',
    category: 'Layer 2 Switching',
    categoryTh: 'ระดับ 2: สวิตชิ่งระดับ Layer 2',
    icon: 'GitFork',
    overview: 'ทำความเข้าใจภัยพิบัติจาก Layer 2 Loop (Broadcast Storm, MAC Table Flapping) อัลกอริทึมการเลือกตั้ง 4 ขั้นตอนของ STP (Root Bridge, RP, DP, AP) และกลไก P/A Handshake ใน RSTP 802.1w',
    labName: 'STP / RSTP 4-Step Election & Reconvergence Lab',
    labDescription: 'จำลองเครือข่ายสวิตช์ 3 ตัวแบบ Loop ดูการเลือก Root Bridge, Root Port, Designated Port และ Alternate Port พร้อมสั่งตัดสายเพื่อดูการ Reconverge',
    sections: [
      {
        title: '1. ภัยพิบัติจาก Layer 2 Loop และความจำเป็นของ Spanning Tree',
        content: `ในการออกแบบเครือข่ายระดับองค์กร วิศวกรจำเป็นต้องเดินสายสัญญาณและเพิ่มสวิตช์สำรอง (Redundant Links) เพื่อป้องกันปัญหาสายขาด แต่โครงสร้างวงปิดใน Layer 2 นำไปสู่ปัญหาความเสี่ยงร้ายแรง เนื่องจาก **เฟรมอีเทอร์เน็ตไม่มีฟิลด์ Time-to-Live (TTL)** เหมือนแพ็กเก็ต IP

**3 ผลกระทบจาก Layer 2 Switching Loop:**
1. **Broadcast Storm (พายุบรอดคาสต์)**: เฟรม Broadcast/Unknown Unicast จะถูกสวิตช์แต่ละตัวฟลัดวนซ้ำไปมาอย่างไม่รู้จบ ทวีคูณปริมาณทราฟฟิกจนเต็มแบนด์วิดท์ 100% ภายในเวลาไม่กี่วินาที
2. **Multiple Frame Copies (การรับเฟรมซ้ำซ้อน)**: โฮสต์ปลายทางได้รับข้อมูลสำเนาเดียวกันหลายชุด ทำให้แอพพลิเคชันสับสนหรือเกิดข้อผิดพลาด
3. **MAC Table Flapping / Instability (ตาราง MAC สั่นคลอน)**: สวิตช์ได้รับเฟรมที่มี Source MAC เดียวกันสลับไปมาระหว่างพอร์ตต่างๆ ด้วยความเร็วสูง ทำให้ตาราง CAM เขียนทับตลอดเวลา จน CPU ของสวิตช์พุ่งสูงถึง 100% และอุปกรณ์หยุดตอบสนอง`
      },
      {
        title: '2. อัลกอริทึมการเลือกตั้ง 4 ขั้นตอนของ STP (4-Step Election Algorithm)',
        content: `โปรโตคอล **STP (IEEE 802.1D)** ตัดลูปโดยการคำนวณโครงสร้างต้นไม้ (Loop-Free Spanning Tree) และสั่งบล็อกพอร์ตส่วนเกินไว้ชั่วคราว โดยแลกเปลี่ยนแพ็กเก็ต **BPDU (Bridge Protocol Data Unit)** ทุกๆ 2 วินาที ผ่านลำดับขั้นการเลือกตั้ง 4 ขั้นตอน:

**1. เลือก 1 Root Bridge ต่อบรอดคาสต์โดเมน (Elect Root Bridge):**
• สวิตช์ที่มี **Bridge ID (BID)** ต่ำที่สุดจะชนะการเลือกตั้ง
• BID ประกอบด้วย: **Bridge Priority (4 บิต ดีฟอลต์ 32768 ก้าวละ 4096)** + **System ID Extension (12 บิต ระบุ VLAN ID)** + **Base MAC Address (48 บิต)**
• หาก Priority เท่ากัน จะตัดสินด้วย **Lowest MAC Address**

**2. เลือก 1 Root Port (RP) ต่อสวิตช์ที่ไม่ใช่ Root (Elect Root Port on Non-Root Bridges):**
• RP คือพอร์ตที่ดีที่สุดของสวิตช์ตัวนั้นในการส่งข้อมูลไปยัง Root Bridge
• ตัดสินตามลำดับ:
  1. Lowest Root Path Cost (RPC - ผลรวมต้นทุนความเร็วลิงก์ไปยัง Root)
  2. Lowest Sender Bridge ID (BID ของสวิตช์เพื่อนบ้านที่ส่ง BPDU มา)
  3. Lowest Sender Port ID (PID ของพอร์ตเพื่อนบ้าน เช่น Port 1 ชนะ Port 2)

**3. เลือก 1 Designated Port (DP) ต่อแต่ละสายสัญญาณ/เซกเมนต์ (Elect Designated Port per Segment):**
• DP คือพอร์ตที่ทำหน้าที่รับส่งข้อมูลและกระจาย BPDU ลงในเซกเมนต์นั้น
• ตัดสินตามลำดับ: Lowest RPC -> Lowest BID ของสวิตช์เจ้าของพอร์ต -> Lowest PID ของตัวเอง
• *ข้อสังเกต: พอร์ตทั้งหมดที่อยู่บน Root Bridge จะเป็น Designated Port (DP) เสมอ*

**4. กำหนดพอร์ตที่เหลือเป็น Non-Designated / Alternate Port (Block Remaining Ports):**
• พอร์ตที่ไม่ได้รับเลือกเป็นทั้ง RP และ DP จะถูกสั่งให้อยู่ในสถานะ **Blocking (Discarding)** เพื่อตัดวงจรลูป แต่ยังคงคอยฟัง BPDU อยู่เงียบๆ เพื่อเตรียมเปิดใช้งานแทนหากลิงก์หลักขาด`
      },
      {
        title: '3. การพัฒนาสู่ Rapid Spanning Tree Protocol (RSTP IEEE 802.1w)',
        content: `**ข้อจำกัดของ STP ดั้งเดิม (802.1D):**
ใช้เวลาคอนเวอร์เจนต์ช้ามาก (30–50 วินาที) จากการต้องรอไทม์เมอร์เปลี่ยนสถานะ: Blocking -> Listening (15s) -> Learning (15s) -> Forwarding

**จุดเด่นและการทำงานของ RSTP (IEEE 802.1w):**
• **ลดสถานะพอร์ต (Port States) เหลือ 3 สถานะ**:
  - **Discarding**: ไม่ส่งต่อข้อมูลและไม่เรียนรู้ MAC (รวม Disabled, Blocking, Listening)
  - **Learning**: เรียนรู้ MAC Address ลงตารางแต่ยังไม่ส่งต่อข้อมูล
  - **Forwarding**: รับส่งข้อมูลและเรียนรู้ MAC สมบูรณ์แบบ
• **เพิ่มบทบาทพอร์ตใหม่ (New Port Roles)**:
  - **Alternate Port (AP)**: พอร์ตสำรองฉุกเฉินสำหรับ Root Port สลับมาทำงานแทนทันทีหาก RP พัง
  - **Backup Port (BP)**: พอร์ตสำรองสำหรับ Designated Port บนเซกเมนต์แชร์เดียวกัน
• **Proposal / Agreement (P/A) Handshake**:
  - กลไกการจับมือเจรจาแบบสองทางบนลิงก์แบบ Point-to-Point Full-Duplex ทำให้พอร์ตเปลี่ยนสถานะเป็น Forwarding ได้ในระดับไม่กี่สิบมิลลิวินาที โดยไม่ต้องรอเวลานับถอยหลัง
• **Edge Port (PortFast) & BPDU Guard**:
  - พอร์ตที่ต่อกับ End-host สามารถตั้งเป็น Edge Port เพื่อข้ามกระบวนการ STP และเข้าสู่สถานะ Forwarding ได้ทันที
  - เปิดใช้งาน **BPDU Guard** ร่วมด้วยเสมอ เพื่อสั่งปิดพอร์ต (Error-Disable) ทันทีหากมีใครนำสวิตช์แปลกปลอมมาเสียบ ป้องกันโครงสร้าง STP ถูกแทรกแซง`
      }
    ],
    terms: [
      { term: 'Bridge ID (BID)', desc: 'ตัวระบุสวิตช์ขนาด 8 ไบต์ ประกอบด้วย Bridge Priority (4 bits มักเป็น 32768 บวกก้าวละ 4096), System ID Ext (12 bits ระบุ VLAN ID), และ Base MAC Address (48 bits)' },
      { term: 'Root Bridge vs Non-Root Bridge', desc: 'Root Bridge คือสวิตช์ศูนย์กลางของต้นไม้ Spanning Tree ที่มี BID ต่ำสุด ส่วน Non-Root Bridge คือสวิตช์ตัวอื่นที่ต้องหาทางที่ดีที่สุดไปยัง Root' },
      { term: 'Root Port (RP) vs Designated Port (DP) vs Alternate Port (AP)', desc: 'RP คือพอร์ตที่ดีที่สุดของสวิตช์ไปยัง Root Bridge, DP คือพอร์ตที่ส่งต่อเฟรมบนแต่ละลิงก์, AP คือพอร์ตสำรองที่ถูกบล็อกไว้เพื่อกันลูป' },
      { term: 'RSTP Proposal/Agreement (P/A) Handshake', desc: 'กลไกการต่อรองแบบสองทางบนลิงก์ Point-to-Point ของ RSTP ช่วยให้พอร์ตเปลี่ยนเป็น Forwarding ได้ในระดับเสี้ยววินาที' },
      { term: 'Edge Port & BPDU Guard', desc: 'Edge Port ช่วยให้พอร์ตปลายทางเข้าสู่ Forwarding ทันทีโดยไม่ผ่าน STP, BPDU Guard ช่วยปิดพอร์ตทันทีหากมีคนแอบต่อสวิตช์เข้ามา' }
    ],
    quiz: [
      {
        question: 'ในกระบวนการเลือกตั้ง Root Bridge ของโปรโตคอล Spanning Tree หากสวิตช์ทุกตัวในเครือข่ายมีค่า Bridge Priority เท่ากันที่ 32768 สวิตช์จะใช้เกณฑ์ใดในการตัดสินผู้ชนะ?',
        options: ['สวิตช์ที่มีหมายเลข IP Address สูงที่สุด', 'สวิตช์ที่มีหมายเลข Base MAC Address ต่ำที่สุด', 'สวิตช์ที่มีจำนวนพอร์ตเปิดใช้งานมากที่สุด', 'สวิตช์ที่เปิดเครื่องทำงานก่อนตัวอื่น (Longest Uptime)'],
        answer: 1,
        explanation: 'Bridge ID ประกอบด้วย Bridge Priority และ Base MAC Address เมื่อค่า Priority เท่ากัน ระบบจะเปรียบเทียบ MAC Address โดยสวิตช์ที่มี MAC Address ต่ำที่สุด (Lowest MAC) จะได้รับเลือกเป็น Root Bridge'
      },
      {
        question: 'ในมาตรฐาน Rapid Spanning Tree Protocol (IEEE 802.1w) พอร์ตที่ทำหน้าที่เป็นเส้นทางสำรองพร้อมใช้งานทันทีหาก Root Port (RP) เสียหาย คือพอร์ตในบทบาท (Port Role) ใด?',
        options: ['Designated Port', 'Alternate Port', 'Backup Port', 'Edge Port'],
        answer: 1,
        explanation: 'Alternate Port ทำหน้าที่เป็นพอร์ตสำรองโดยตรงสำหรับ Root Port (RP) เมื่อ RP หลักขัดข้อง Alternate Port สามารถเปลี่ยนเป็น RP และ Forwarding ได้ทันทีในหลักมิลลิวินาที'
      },
      {
        question: 'ระยะเวลาในการคอนเวอร์จ (Convergence Time) ของโปรโตคอลดั้งเดิม STP (IEEE 802.1D) ตั้งแต่ตรวจพบการเปลี่ยนแปลงจนพอร์ตเปลี่ยนจาก Blocking สู่ Forwarding ใช้เวลาประมาณเท่าใด?',
        options: ['น้อยกว่า 1 วินาที', 'ประมาณ 5 ถึง 10 วินาที', 'ประมาณ 30 ถึง 50 วินาที (ผ่าน Listening และ Learning)', 'มากกว่า 5 นาที'],
        answer: 2,
        explanation: 'STP 802.1D อาศัย Timer-based convergence: Max Age (20s) + Listening (15s) + Learning (15s) รวมแล้วใช้เวลาประมาณ 30-50 วินาทีกว่าจะเริ่มส่งข้อมูลได้'
      }
    ]
  },
  {
    id: 7,
    slug: '07-link-aggregation-and-high-availability',
    title: 'บทที่ 7: การรวมลิงก์ความเร็วสูง (LAG/LACP) และความพร้อมใช้งานสูง',
    subtitle: 'Link Aggregation (IEEE 802.3ad / 802.1AX LACP), Hash Balancing & HA Architecture',
    category: 'Enterprise Reliability',
    categoryTh: 'ระดับ 3: ความพร้อมใช้งานและความน่าเชื่อถือสูง',
    icon: 'Network',
    overview: 'ทำความเข้าใจการรวมสายสัญญาณ Link Aggregation (LAG) ตามมาตรฐานสากล IEEE 802.3ad / 802.1AX LACP อัลกอริทึม Hash Load Balancing กลไก Active/Standby Links และสถาปัตยกรรม High Availability ยุคใหม่ (MLAG / Switch Stacking)',
    labName: 'Universal LAG & LACP High Availability Studio',
    labDescription: 'ทดลองสร้างพอร์ต Eth-Trunk / LAG ปรับค่า System/Port Priority ดูการแลกเปลี่ยน LACPDU คัดเลือก Active Link และทดสอบ Failover',
    sections: [
      {
        title: '1. สถาปัตยกรรม Link Aggregation Group (LAG) และมาตรฐาน LACP',
        content: `**Link Aggregation Group (LAG)** คือเทคโนโลยีการรวมพอร์ตทางกายภาพ (Physical Ports) หลายพอร์ตเข้าด้วยกันเป็นลิงก์ตรรกะเดียว (Logical Interface หรือเรียกว่า Port-Channel / LAG / Eth-Trunk)

**ประโยชน์สำคัญของการรวมลิงก์:**
1. **Bandwidth Multiplication (เพิ่มความจุแบนด์วิดท์)**: รวมความเร็วของทุกลิงก์เข้าด้วยกันแบบ Linear (เช่น รวมพอร์ต 10 Gbps จำนวน 4 พอร์ต ได้แบนด์วิดท์ตรรกะ 40 Gbps)
2. **Link-Level Fault Tolerance (ความทนทานต่อสายสัญญาณขาด)**: หากสายเคเบิลเส้นใดเส้นหนึ่งขาด ทราฟฟิกจะถูกโอนย้ายไปยังลิงก์ที่เหลือในกลุ่มทันทีแบบ Sub-second Failover โดยที่ลิงก์ตรรกะยังคงทำงานต่อเนื่อง (Up)
3. **Loop-Free Higher Bandwidth (หลีกเลี่ยงการถูก STP บล็อก)**: โปรโตคอล Spanning Tree จะมองเห็น LAG เป็นเพียง 1 พอร์ตตรรกะเดี่ยว ทำให้ไม่เกิดสถานะ Blocking พอร์ตสมาชิก สามารถใช้งานแบนด์วิดท์ได้เต็ม 100%

**การเปรียบเทียบระหว่าง Static LAG (Manual) และ Dynamic LACP (IEEE 802.3ad / 802.1AX):**
• **Static / Manual LAG**: รวมลิงก์โดยไม่ส่งโปรโตคอลตรวจสอบความถูกต้อง ตรวจจับได้เฉพาะสายขาดทางกายภาพ (Link Down) แต่ตรวจจับข้อผิดพลาดระดับซอฟต์แวร์หรือการเสียบสายสลับพอร์ต (Mis-cabling) ไม่ได้
• **Dynamic LACP**: แลกเปลี่ยนเฟรมควบคุม **LACPDU (Link Aggregation Control Protocol Data Unit)** ทุกๆ 1 วินาที (Fast Timeout) หรือ 30 วินาที (Slow Timeout) เพื่อตรวจสอบความเข้ากันได้ของพอร์ตทั้งสองฝั่ง และตัดพอร์ตที่มีปัญหาออกจากกลุ่มทันที`
      },
      {
        title: '2. อัลกอริทึมการกระจายโหลด (Hash-Based Load Balancing Mechanics)',
        content: `Link Aggregation ไม่ได้สลับส่งข้อมูลทีละบิตหรือแพ็กเก็ต (Per-Packet Round Robin) เพราะจะทำให้แพ็กเก็ตเดินทางถึงปลายทางสลับลำดับ (Out-of-Order Packets) ซึ่งส่งผลกระทบอย่างรุนแรงต่อประสิทธิภาพของโปรโตคอล TCP

**กลไก Flow-Based Hashing:**
• สวิตช์ใช้อัลกอริทึมแฮชเชิงคณิตศาสตร์ (เช่น XOR / CRC Hash Function) ในการคำนวณข้อมูลส่วนหัวของแต่ละโฟลว์ (Packet Headers) เพื่อเลือกพอร์ตทางกายภาพประจำโฟลว์นั้น:
  - **Layer 2 Hash**: ใช้ \`Source MAC\` และ \`Destination MAC\`
  - **Layer 3 Hash**: ใช้ \`Source IP\` และ \`Destination IP\`
  - **Layer 4 Hash (5-Tuple Hash)**: ใช้ \`Source IP\`, \`Destination IP\`, \`Source Port\`, \`Destination Port\`, และ \`Protocol\` (ให้การกระจายโหลดที่สมดุลและละเอียดที่สุด)
• ทุกแพ็กเก็ตที่อยู่ในบทสนทนา (Conversation Flow) เดียวกัน จะมีผลลัพธ์ของค่าแฮชเท่ากันเสมอ จึงถูกส่งออกผ่านพอร์ตทางกายภาพเดิมตลอดเวลา รับประกันว่าข้อมูลจะถึงปลายทางตามลำดับ 100%`
      },
      {
        title: '3. สถาปัตยกรรม High Availability: Active/Standby Links, MLAG และ Switch Stacking',
        content: `**กลไก Active/Standby Links และ LACP Priority:**
• ในระบบ LACP วิศวกรสามารถกำหนดให้มี **Max Active Links** (เช่น กำหนด 4 พอร์ตเป็น Active) และพอร์ตที่เหลือเป็น **Standby / Backup Links** (เช่น 4 พอร์ตสำรอง)
• **Actor Election**: สวิตช์ที่มี **LACP System Priority** ต่ำที่สุด (ดีฟอลต์ 32768) จะได้รับเลือกเป็น **Actor (ผู้ตัดสินใจ)** โดยใช้ Lowest System MAC เป็นตัวตัดสินกรณีเสมอ
• **Port Selection**: Actor จะเลือกพอร์ตที่มี **LACP Port Priority** ต่ำที่สุดมาเป็น Active Link หากลิงก์หลักขาด ลิงก์ Standby จะขึ้นมาทำงานแทน และเมื่อลิงก์หลักซ่อมเสร็จ ระบบจะทำ **LACP Preemption** สลับกลับคืนอัตโนมัติ

**สถาปัตยกรรมความพร้อมใช้งานสูงระดับ Multi-Chassis:**
• **Multi-Chassis Link Aggregation (MLAG / MC-LAG)**: เทคโนโลยีมาตรฐานเปิดที่ช่วยให้สวิตช์อิสระ 2 ตัวทำหน้าที่เสมือนสวิตช์ตัวเดียวกันในมุมมองของ LACP ทำให้เซิร์ฟเวอร์หรือสวิตช์ตัวล่างสามารถทำ LAG ข้ามไปยังสวิตช์ 2 ตัวได้พร้อมกัน (Dual-Homing Active-Active)
• **Switch Stacking / Chassis Clustering**: รวมสวิตช์หลายตัวผ่าน Stack Cables ควบคุมด้วย Control Plane เดียว ช่วยกำจัดโปรโตคอล Spanning Tree ออกจากระบบ Core/Distribution ได้อย่างสมบูรณ์แบบ`
      }
    ],
    terms: [
      { term: 'Link Aggregation Group (LAG / Eth-Trunk)', desc: 'การรวมพอร์ตทางกายภาพหลายพอร์ตเข้าด้วยกันเป็นลิงก์ตรรกะเดียว เพื่อเพิ่มแบนด์วิดท์และความทนทานต่อสายขาด' },
      { term: 'IEEE 802.3ad / 802.1AX LACP', desc: 'มาตรฐานสากลของโปรโตคอลควบคุมการรวมลิงก์ แลกเปลี่ยนแพ็กเก็ต LACPDU เพื่อตรวจสอบสถานะและสลับลิงก์อัตโนมัติ' },
      { term: 'Flow-Based Hashing (5-Tuple Load Balancing)', desc: 'การกระจายโหลดตามค่าแฮชของ Src/Dst IP, Src/Dst Port, Protocol เพื่อป้องกันปัญหาแพ็กเก็ตสลับลำดับ (Out-of-Order)' },
      { term: 'Actor Switch & LACP Port Priority', desc: 'สวิตช์หลักที่มี System Priority ต่ำสุดเป็นผู้เลือก Active Links โดยพิจารณาจากพอร์ตที่มี Port Priority ต่ำสุด' },
      { term: 'MLAG (Multi-Chassis LAG) & Switch Stacking', desc: 'เทคโนโลยีรวมสวิตช์หลายตัวเพื่อรองรับการต่อสาย LAG ข้ามอุปกรณ์ สร้างระบบ Redundancy แบบ Active-Active โดยไม่ต้องบล็อกพอร์ตด้วย STP' }
    ],
    quiz: [
      {
        question: 'เหตุใดระบบ Link Aggregation (LAG/LACP) จึงเลือกใช้การกระจายโหลดแบบ Flow-Based Hashing แทนที่จะส่งแพ็กเก็ตสลับพอร์ตแบบ Round-Robin?',
        options: ['เพื่อลดภาระการใช้พลังงานไฟฟ้าของพอร์ตสวิตช์', 'เพื่อป้องกันไม่ให้แพ็กเก็ตในโฟลว์เดียวกันเดินทางถึงปลายทางสลับลำดับ (Out-of-Order Delivery) ซึ่งจะทำให้ประสิทธิภาพของ TCP ลดลง', 'เพื่อจำกัดความเร็วของแต่ละโฮสต์ไม่ให้เกิน 1 Gbps', 'เพื่อช่วยให้ Spanning Tree สามารถบล็อกพอร์ตได้ง่ายขึ้น'],
        answer: 1,
        explanation: 'หากส่งข้อมูลแบบ Per-Packet Round Robin แพ็กเก็ตอาจเดินทางถึงปลายทางไม่พร้อมกัน ทำให้ TCP ต้องส่ง ACK ซ้ำและลดความเร็ว Window Size ดังนั้นการใช้ Hashing จะการันตีว่าโฟลว์เดิมจะวิ่งผ่านเส้นทางเดิมเสมอ'
      },
      {
        question: 'ในกระบวนการทำงานของ LACP (IEEE 802.3ad) สวิตช์จะใช้พารามิเตอร์ใดในการตัดสินเลือก Actor (สวิตช์หลักที่เป็นผู้ตัดสินใจเลือก Active Ports)?',
        options: ['Lowest LACP System Priority (หากเท่ากันจะตัดสินด้วย Lowest System MAC Address)', 'Highest IP Address ของอินเทอร์เฟซ Management', 'Highest Port Bandwidth รวมของสวิตช์', 'Longest System Uptime'],
        answer: 0,
        explanation: 'LACP คัดเลือก Actor Switch โดยดูค่า LACP System Priority ที่ต่ำที่สุดก่อน (ดีฟอลต์ 32768) หากเท่ากันจะตัดสินด้วยสวิตช์ที่มี Base MAC Address ต่ำที่สุด'
      },
      {
        question: 'ข้อใดคือข้อได้เปรียบหลักของการนำเทคโนโลยี Multi-Chassis Link Aggregation (MLAG) หรือ Switch Stacking มาใช้ในระบบเครือข่ายระดับองค์กร?',
        options: ['ช่วยแปลงระบบสายทองแดงให้กลายเป็นสายไฟเบอร์ออปติกอัตโนมัติ', 'ช่วยให้อุปกรณ์สามารถทำ LAG ข้ามไปยังสวิตช์ 2 ตัวพร้อมกันแบบ Active-Active และกำจัดการบล็อกพอร์ตของ STP', 'ช่วยเพิ่มจำนวน IP Address ในระบบเป็น 2 เท่า', 'ช่วยลดขนาดของ MAC Address Table ให้เหลือ 0'],
        answer: 1,
        explanation: 'MLAG และ Stacking ช่วยให้สวิตช์ 2 ตัวทำงานเสมือนตัวเดียวกัน ทำให้สามารถเชื่อมต่อสายแบบ Dual-Homing Active-Active ได้ 100% โดยไม่ต้องพึ่งพา STP ในการบล็อกพอร์ตสำรอง'
      }
    ]
  },
  {
    id: 8,
    slug: '08-network-layer-protocols-and-ip-addressing',
    title: 'บทที่ 8: โปรโตคอลเน็ตเวิร์กเลเยอร์ สถาปัตยกรรม IPv4 และการคำนวณซับเน็ต',
    subtitle: 'IPv4 Header Architecture, Fragmentation, CIDR, Subnetting & ICMP',
    category: 'Layer 3 Routing',
    categoryTh: 'ระดับ 4: สถาปัตยกรรมและการหาเส้นทาง Layer 3',
    icon: 'Binary',
    overview: 'เจาะลึกโครงสร้าง IPv4 Header ทุกฟิลด์ (TTL, Protocol, MTU/Fragmentation) การแบ่งคลาส Classful vs Classless (CIDR) การคำนวณ Subnetting (FLSM / VLSM) การจัดสรร Private IP (RFC 1918) และโปรโตคอลวินิจฉัย ICMP',
    labName: 'IPv4 Subnetting & Packet Fragmentation Studio',
    labDescription: 'เครื่องมือคำนวณซับเน็ต FLSM/VLSM แบบเจาะลึก พร้อมแบบจำลองการคำนวณ MTU และการตัดแบ่งชิ้นส่วนแพ็กเก็ต (Fragmentation Engine)',
    sections: [
      {
        title: '1. สถาปัตยกรรมส่วนหัว IPv4 Header (20 - 60 Bytes Architecture)',
        content: `แพ็กเก็ต **IPv4 (RFC 791)** ประกอบด้วยส่วนหัวขนาดมาตรฐาน **20 ไบต์** (และขยายได้ถึง 60 ไบต์เมื่อมี Options):

**รายละเอียดฟิลด์สำคัญใน IPv4 Header:**
• **Version (4 บิต)**: ระบุเวอร์ชันของ IP (ค่าคงที่คือ \`4\` สำหรับ IPv4)
• **IHL (Internet Header Length - 4 บิต)**: ความยาวของส่วนหัวในหน่วย 32-bit Words ค่าปกติคือ \`5\` (5 × 4 = 20 ไบต์)
• **DSCP / ToS (Type of Service - 8 บิต)**: ใช้สำหรับจัดลำดับความสำคัญของแพ็กเก็ตในระบบ Quality of Service (QoS)
• **Total Length (16 บิต)**: ขนาดรวมทั้งหมดของแพ็กเก็ต (Header + Data Payload) ต่ำสุด 20 ไบต์ สูงสุด 65,535 ไบต์
• **ฟิลด์ควบคุมการตัดแบ่งข้อมูล (Fragmentation Fields)** เมื่อแพ็กเก็ตใหญ่กว่าค่า **MTU (Maximum Transmission Unit - ดีฟอลต์ 1,500 ไบต์)**:
  - **Identification (16 บิต)**: หมายเลขกำกับชิ้นส่วนแพ็กเก็ตที่แตกมาจากแพ็กเก็ตเดียวกัน
  - **Flags (3 บิต)**: บิต \`DF (Don't Fragment)\` ห้ามตัดชิ้นส่วน (หากขนาดเกินจะถูกทิ้ง) และบิต \`MF (More Fragments)\` ระบุว่ายังมีชิ้นส่วนตามมาอีก
  - **Fragment Offset (13 บิต)**: ตำแหน่งสัมพัทธ์ของชิ้นส่วนข้อมูลเทียบกับแพ็กเก็ตดั้งเดิมในหน่วย 8 ไบต์
• **TTL (Time to Live - 8 บิต)**: ค่าตัวนับอายุของแพ็กเก็ต (ค่าเริ่มต้น 64, 128 หรือ 255) โดยเราเตอร์ทุกตัวที่แพ็กเก็ตเดินทางผ่านจะลดค่า TTL ลง 1 หาก TTL ลดลงเหลือ \`0\` เราเตอร์จะทิ้งแพ็กเก็ตทันที พร้อมส่งข้อความ **ICMP Time Exceeded (Type 11)** กลับไปหาต้นทาง ช่วยตัดวงจร Layer 3 Routing Loop ได้อย่างสมบูรณ์
• **Protocol (8 บิต)**: ระบุโปรโตคอลชั้นถัดไปใน Layer 4 (เช่น \`1\` = ICMP, \`6\` = TCP, \`17\` = UDP, \`89\` = OSPF)
• **Header Checksum (16 บิต)**: รหัสตรวจสอบความถูกต้องของเฉพาะส่วนหัว IPv4 (ต้องคำนวณใหม่ทุก Hop ที่ TTL เปลี่ยน)
• **Source & Destination IP Address (ฟิลด์ละ 32 บิต / 4 ไบต์)**: ที่อยู่เชิงตรรกะของต้นทางและปลายทาง`
      },
      {
        title: '2. การจัดสรรไอพีแอดเดรส: Private IP (RFC 1918), พิเศษ และ CIDR',
        content: `**ช่วงหมายเลข Private IP Address (RFC 1918) สำหรับใช้งานภายในองค์กร:**
• **Class A Private**: \`10.0.0.0/8\` (ช่วง \`10.0.0.0\` ถึง \`10.255.255.255\` รวม 16,777,216 แอดเดรส)
• **Class B Private**: \`172.16.0.0/12\` (ช่วง \`172.16.0.0\` ถึง \`172.31.255.255\` รวม 1,048,576 แอดเดรส)
• **Class C Private**: \`192.168.0.0/16\` (ช่วง \`192.168.0.0\` ถึง \`192.168.255.255\` รวม 65,536 แอดเดรส)

**หมายเลขไอพีแอดเดรสพิเศษ (Special IPv4 Addresses):**
• **Loopback Address**: \`127.0.0.0/8\` (ใช้ \`127.0.0.1\` สำหรับทดสอบระบบ TCP/IP Stack ภายในเครื่องตัวเอง)
• **APIPA (Automatic Private IP Addressing - RFC 3927)**: \`169.254.0.0/16\` (ได้รับเมื่อเครื่องไม่สามารถติดต่อเซิร์ฟเวอร์ DHCP ได้)
• **Limited Broadcast**: \`255.255.255.255\` (บรอดคาสต์ภายใน LAN ท้องถิ่น เราเตอร์จะไม่ส่งต่อข้ามเครือข่ายเด็ดขาด)
• **Default Route / Unspecified**: \`0.0.0.0/0\` (เส้นทางหลักครอบจักรวาล)

**CIDR (Classless Inter-Domain Routing - RFC 1519):**
ยกเลิกการแบ่งคลาส Class A/B/C แบบตายตัวในอดีต และใช้ระบบ Prefix Length \`/n\` ช่วยให้จัดสรรแอดเดรสได้อย่างคุ้มค่าและทำ Route Aggregation (Summarization) รวมตารางเส้นทางขนาดใหญ่บนอินเทอร์เน็ตได้`
      },
      {
        title: '3. หลักการคำนวณการแบ่งซับเน็ต (Subnetting FLSM/VLSM & ICMP Diagnostics)',
        content: `**สูตรคณิตศาสตร์พื้นฐานในการแบ่ง Subnet:**
• **จำนวน Subnet ที่สร้างได้**: \`2^s\` (เมื่อ \`s\` คือจำนวนบิตที่ยืมมาจากฝั่ง Host)
• **จำนวนโฮสต์ที่ใช้งานได้จริงต่อ Subnet (Usable Hosts)**: \`2^h - 2\` (เมื่อ \`h\` คือจำนวนบิต Host ที่เหลืออยู่ ต้องหัก 2 สำหรับ **Network ID** และ **Broadcast ID**)
• **ขนาดของ Block Size (Magic Number)**: \`256 - ค่าตัวเลขซับเน็ตมาร์กใน Octet ที่เปลี่ยนแปลง\`

**เปรียบเทียบระหว่าง FLSM และ VLSM:**
• **FLSM (Fixed Length Subnet Mask)**: ทุกซับเน็ตใช้ขนาด Mask เท่ากันทั้งหมด เหมาะกับเครือข่ายที่มีขนาดผู้ใช้เท่าๆ กัน แต่สิ้นเปลืองไอพีบนลิงก์ Point-to-Point
• **VLSM (Variable Length Subnet Mask)**: กำหนดขนาด Mask แตกต่างกันตามความต้องการใช้งานจริงของแต่ละสาขา เช่น ใช้ \`/24\` สำหรับแผนกขนาดใหญ่ (254 โฮสต์) และใช้ \`/30\` หรือ \`/31\` สำหรับลิงก์เชื่อมต่อระหว่างเราเตอร์ 2 ตัว (2 โฮสต์) ช่วยประหยัดแอดเดรสสูงสุด

**โปรโตคอลควบคุมและวินิจฉัย ICMP (Internet Control Message Protocol - RFC 792):**
• **Ping Utility**: ส่ง **Echo Request (Type 8, Code 0)** และรอรับ **Echo Reply (Type 0, Code 0)** เพื่อวัดความหน่วง RTT และความพร้อมในการเชื่อมต่อ
• **Traceroute / Tracert**: ตรวจสอบเส้นทาง Hop-by-Hop โดยการส่งแพ็กเก็ตที่เริ่มจาก \`TTL = 1\` แล้วเพิ่มขึ้นทีละ 1 เมื่อเราเตอร์แต่ละตัวลด TTL เหลือ 0 จะส่งข้อความ **ICMP Time Exceeded (Type 11, Code 0)** กลับมา ทำให้ทราบ IP ของเราเตอร์ทุกตัวตามรายทาง
• **Destination Unreachable (Type 3)**: แจ้งเมื่อไม่พบเครือข่ายปลายทาง, พอร์ตปลายทางปิดอยู่, หรือแพ็กเก็ตเกิน MTU แต่ถูกห้ามตัดแบ่ง (DF=1)`
      }
    ],
    terms: [
      { term: 'IPv4 Header (TTL & Protocol)', desc: 'ส่วนหัว 20 ไบต์ ประกอบด้วย TTL (ตัดลูปเมื่อลดเหลือ 0), Protocol (6=TCP, 17=UDP, 1=ICMP, 89=OSPF), และฟิลด์ควบคุม Fragmentation' },
      { term: 'MTU (1500B) & Fragmentation (ID, Flags, Offset)', desc: 'กลไกตัดแบ่งแพ็กเก็ตออกเป็นชิ้นย่อยเมื่อขนาดข้อมูลใหญ่เกินกว่าค่า MTU ของตัวกลาง' },
      { term: 'Private IP Addresses (RFC 1918)', desc: 'ไอพีสำหรับเครือข่ายภายใน: Class A (10.0.0.0/8), Class B (172.16.0.0/12), Class C (192.168.0.0/16)' },
      { term: 'Subnetting FLSM vs VLSM', desc: 'FLSM แบ่งซับเน็ตขนาดเท่ากันทุกวง, VLSM แบ่งซับเน็ตขนาดแปรผันตามจำนวนโฮสต์ที่ต้องการ ช่วยประหยัดแอดเดรสสูงสุด' },
      { term: 'ICMP Diagnostics (Ping & Traceroute)', desc: 'โปรโตคอลตรวจสอบสถานะ: Echo Request/Reply (Type 8/0) สำหรับ Ping, Time Exceeded (Type 11) สำหรับ Traceroute' }
    ],
    quiz: [
      {
        question: 'หากต้องการจัดสรรไอพีแอดเดรสให้กับลิงก์ Point-to-Point ระหว่างเราเตอร์ 2 ตัว โดยต้องการประหยัดหมายเลขไอพีแอดเดรสสูงสุดตามมาตรฐานดั้งเดิม ควรเลือกใช้ Subnet Mask ใด?',
        options: ['/28 (255.255.255.240)', '/29 (255.255.255.248)', '/30 (255.255.255.252)', '/32 (255.255.255.255)'],
        answer: 2,
        explanation: 'Subnet Mask /30 มี Host bits เหลือ 2 บิต คำนวณจำนวนโฮสต์ที่ใช้งานได้จริงคือ 2^2 - 2 = 2 แอดเดรส พอดีสำหรับการเชื่อมต่อระหว่างเราเตอร์ 2 ตัว'
      },
      {
        question: 'ในส่วนหัวของ IPv4 Header ฟิลด์ Time to Live (TTL) มีหน้าที่หลักตามข้อใด และจะเกิดอะไรขึ้นเมื่อค่า TTL ลดลงเหลือ 0?',
        options: ['ระบุเวลาตามนาฬิกาจริงของแพ็กเก็ต และจะถูกส่งซ้ำเมื่อหมดเวลา', 'ป้องกันแพ็กเก็ตวนลูปในระดับ Layer 3 โดยเราเตอร์จะทิ้งแพ็กเก็ตทันทีและส่งข้อความ ICMP Time Exceeded (Type 11) กลับไปหาต้นทาง', 'กำหนดระดับความปลอดภัยของแพ็กเก็ต และจะเข้ารหัสข้อมูลเมื่อเหลือ 0', 'ระบุลำดับของแพ็กเก็ตในโปรโตคอล TCP'],
        answer: 1,
        explanation: 'TTL มีขนาด 8 บิต ถูกลดลง 1 ทุกครั้งที่ผ่านเราเตอร์ เมื่อลดเหลือ 0 แสดงว่าแพ็กเก็ตอาจติดลูป เราเตอร์จะ Drop ทิ้งและแจ้งเตือนผ่าน ICMP Time Exceeded'
      },
      {
        question: 'เครือข่ายหมายเลข 172.16.0.0/22 มีช่วงของหมายเลขไอพีแอดเดรสที่สามารถกำหนดให้กับโฮสต์ใช้งานได้จริง (Usable Host Range) อยู่ในช่วงใด?',
        options: ['172.16.0.1 ถึง 172.16.0.254', '172.16.0.1 ถึง 172.16.3.254', '172.16.0.1 ถึง 172.16.4.254', '172.16.1.1 ถึง 172.16.2.254'],
        answer: 1,
        explanation: 'Subnet /22 มี Block Size ใน Octet ที่สามเท่ากับ 4 (256 - 252 = 4) ดังนั้น Network คือ 172.16.0.0, Broadcast คือ 172.16.3.255 และ Usable Range คือ 172.16.0.1 ถึง 172.16.3.254 รวม 1,022 โฮสต์'
      }
    ]
  },
  {
    id: 9,
    slug: '09-ip-routing-principles-and-forwarding',
    title: 'บทที่ 9: สถาปัตยกรรมการหาเส้นทางและการส่งต่อแพ็กเก็ต (IP Routing & RIB/FIB)',
    subtitle: 'Routing Principles, RIB vs FIB, Longest Prefix Match & Hop-by-Hop L2 Rewrite',
    category: 'Layer 3 Routing',
    categoryTh: 'ระดับ 4: สถาปัตยกรรมและการหาเส้นทาง Layer 3',
    icon: 'Signpost',
    overview: 'ทำความเข้าใจสถาปัตยกรรมการตัดสินใจเส้นทาง การแยกตาราง RIB (Control Plane) และ FIB (Data Plane) กฎเหล็ก Longest Prefix Match (LPM) ค่าความน่าเชื่อถือ Administrative Distance / Preference และวงจรการแก้ไข MAC Address แบบ Hop-by-Hop',
    labName: 'Universal RIB/FIB Engine & Hop-by-Hop Rewriter',
    labDescription: 'จำลองการส่งแพ็กเก็ตข้าม 3 เราเตอร์ ติดตามการค้นหาตาราง FIB ด้วยกฎ Longest Prefix Match และส่องดูการแก้ส่วนหัว L2 MAC Rewrite ในแต่ละ Hop',
    sections: [
      {
        title: '1. สถาปัตยกรรมการหาเส้นทาง: ตาราง RIB (Control Plane) vs ตาราง FIB (Data Plane)',
        content: `ในระบบเราเตอร์และเลเยอร์ 3 สวิตช์มาตรฐานสากล กระบวนการหาเส้นทางถูกแบ่งแยกออกเป็น 2 ส่วนสำคัญ:

**1. Routing Information Base (RIB / IP Routing Table):**
• ทำงานอยู่บน **Control Plane (CPU)**
• รวบรวมข้อมูลเส้นทางทั้งหมดที่เรียนรู้มาจากแหล่งต่างๆ เช่น Connected Interfaces, Static Routes, OSPF, IS-IS, BGP
• เราเตอร์จะเปรียบเทียบค่าความน่าเชื่อถือ (**Administrative Distance / Route Preference**) และค่าต้นทุน (**Metric / Cost**) เพื่อคัดเลือกเฉพาะ **"เส้นทางที่ดีที่สุด (Best Routes)"** เพื่อเตรียมส่งต่อไปยัง Data Plane

**2. Forwarding Information Base (FIB / Hardware Forwarding Table):**
• ติดตั้งอยู่บน **Data Plane (Hardware ASIC / TCAM)** เพื่อการค้นหาและส่งต่อแพ็กเก็ตด้วยความเร็วระดับสายสัญญาณ (Wire-Speed Forwarding)
• เป็นตารางที่ถูกสร้างขึ้นโดยตรงมาจาก Best Routes ใน RIB
• เก็บข้อมูลที่พร้อมส่งต่อทันที: \`Destination Prefix\`, \`Next-Hop IP\`, \`Egress Physical Port\`, และข้อมูล \`Next-Hop MAC Address\` ที่ได้จาก ARP Table ทำให้ไม่ต้องทำ Route Recursion ซ้ำซ้อนที่ CPU`
      },
      {
        title: '2. กฎการตัดสินใจเส้นทาง (Longest Prefix Match & Route Preference/AD)',
        content: `เมื่อเราเตอร์ได้รับแพ็กเก็ต IP เข้ามา จะดำเนินการตัดสินใจส่งต่อไปยังเส้นทางที่ถูกต้องตามลำดับขั้น 4 ลำดับ:

**1. กฎหน้ากากยาวที่สุดชนะเสมอ (Longest Prefix Match - LPM Rule):**
• *เป็นกฎเหล็กสูงสุดในการส่งต่อแพ็กเก็ต*: หากมีเส้นทางปลายทางตรงกับไอพีเป้าหมายหลายรายการ เราเตอร์จะเลือกเส้นทางที่มีความยาว Prefix Mask ละเอียดที่สุดเสมอ โดยไม่สนใจว่าเส้นทางนั้นจะมาจากโปรโตคอลใด
• ตัวอย่าง: แพ็กเก็ตส่งไปยัง \`10.1.1.5\` หากมีเส้นทาง \`10.1.1.0/24\` (OSPF) และ \`10.0.0.0/8\` (Static) เราเตอร์จะเลือกส่งออกทาง \`10.1.1.0/24\` ทันทีเพราะ \`/24\` มีความยาวบิตมากกว่า \`/8\`

**2. ค่าความน่าเชื่อถือของแหล่งที่มา (Administrative Distance / Route Preference):**
• หากมีเส้นทางไปยังเครือข่ายเดียวกันที่มีขนาด Prefix Mask เท่ากันพอดี แต่เรียนรู้มาจากต่างโปรโตคอล เราเตอร์จะตัดสินด้วยค่า **Administrative Distance (AD) / Preference ที่มีค่าน้อยที่สุด** (ยิ่งน้อย ยิ่งน่าเชื่อถือ):
  - **Direct / Connected**: AD/Preference = **0**
  - **Static Route**: AD = **1** (Cisco) / Preference = **60** (Huawei)
  - **OSPF Internal**: AD = **110** (Cisco) / Preference = **10** (Huawei)
  - **IS-IS**: AD = **115** (Cisco) / Preference = **15** (Huawei)
  - **RIP**: AD = **120** (Cisco) / Preference = **100** (Huawei)
  - **BGP (eBGP)**: AD = **20** / Preference = **255**

**3. ค่าต้นทุนของเส้นทาง (Lowest Metric / Cost):**
• หากเส้นทางมาจากโปรโตคอลเดียวกัน เราเตอร์จะเลือกเส้นทางที่มีค่า Metric (เช่น Bandwidth / Cost สะสม) ต่ำที่สุด

**4. การกระจายโหลดหลายเส้นทาง (Equal-Cost Multi-Path - ECMP):**
• หากทุกค่าเท่ากันทั้งหมด เราเตอร์จะติดตั้งทุกเส้นทางลงใน FIB และทำ Load Balancing ส่งแพ็กเก็ตออกพร้อมกันหลายลิงก์`
      },
      {
        title: '3. วงจรการส่งต่อแพ็กเก็ตแบบ Hop-by-Hop และการเขียนทับส่วนหัว Layer 2 (L2 MAC Rewrite)',
        content: `ความเข้าใจผิดที่พบบ่อยคือคิดว่าหมายเลข IP Address มีการเปลี่ยนแปลงระหว่างทาง ความจริงแล้วในเครือข่าย routed network ปกติ (ไม่ผ่าน NAT):

**หลักการทำงานของ Hop-by-Hop Packet Forwarding:**
1. **Layer 3 Header (IP) จะคงเดิมตลอดเส้นทาง (End-to-End)**:
   - \`Source IP\` (เครื่องต้นทาง) และ \`Destination IP\` (เครื่องปลายทาง) **จะไม่มีการเปลี่ยนแปลงเด็ดขาด**
   - มีเพียงฟิลด์ **TTL (Time to Live) ที่จะถูกเราเตอร์ลดค่าลง 1 ในทุกๆ Hop** และ Checksum จะถูกคำนวณใหม่
2. **Layer 2 Header (Ethernet) จะถูกสร้างใหม่และเปลี่ยนแปลงในทุกๆ Hop (Hop-by-Hop Rewrite)**:
   - เมื่อเราเตอร์รับเฟรมเข้ามา: จะถอด L2 Header เก่าทิ้ง (Strip Data Link Header)
   - ค้นหาตาราง FIB เพื่อหาพอร์ตขาออกและ Next-Hop IP
   - ค้นหาตาราง ARP เพื่อหา MAC ของ Next-Hop
   - ห่อหุ้ม L2 Header ใหม่: กำหนด **Source MAC เป็น MAC ของพอร์ตขาออกของเราเตอร์ตัวนั้น** และกำหนด **Destination MAC เป็น MAC ของอุปกรณ์ Hop ถัดไป**`
      }
    ],
    terms: [
      { term: 'RIB (Routing Information Base) vs FIB', desc: 'RIB อยู่บน Control Plane รวบรวมเส้นทางทั้งหมด, FIB อยู่บน Data Plane ประมวลผลด้วยฮาร์ดแวร์ ASIC ส่งต่อแพ็กเก็ตด้วยความเร็วสาย' },
      { term: 'Longest Prefix Match (LPM)', desc: 'กฎสูงสุดในการส่งต่อแพ็กเก็ต เราเตอร์จะเลือกเส้นทางที่มี Prefix Length ละเอียดที่สุดเสมอ เช่น /28 ชนะ /24' },
      { term: 'Administrative Distance (AD) / Preference', desc: 'ค่าระดับความน่าเชื่อถือของแหล่งที่มาของเส้นทาง ค่ายิ่งน้อยยิ่งน่าเชื่อถือ (Connected=0, OSPF=10/110, Static=1/60)' },
      { term: 'Hop-by-Hop L2 MAC Rewrite', desc: 'กระบวนการถอดและสร้าง L2 Header ใหม่ในแต่ละ Hop (แก้ Src/Dst MAC และลด TTL ลง 1) ขณะที่ Src/Dst IP ยังคงเดิม' },
      { term: 'Equal-Cost Multi-Path (ECMP) & Floating Static Route', desc: 'ECMP กระจายโหลดเมื่อต้นทุนเท่ากัน, Floating Static Route คือเส้นทางสำรองที่ตั้ง AD สูงกว่าปกติเพื่อรอทำงานตอนเส้นทางหลักล่ม' }
    ],
    quiz: [
      {
        question: 'เราเตอร์ตัวหนึ่งได้รับแพ็กเก็ตที่มี Destination IP เป็น 192.168.1.65 โดยในตาราง Routing Table มีเส้นทาง: 192.168.1.0/24 (via OSPF), 192.168.1.64/28 (via Static), 192.168.0.0/16 (via Connected) เราเตอร์จะเลือกส่งต่อแพ็กเก็ตออกไปทางเส้นทางใด?',
        options: ['192.168.0.0/16 เพราะเป็น Connected Route ที่มีค่า AD ต่ำสุด', '192.168.1.0/24 เพราะเรียนรู้มาจาก OSPF Protocol', '192.168.1.64/28 เพราะมีความยาว Subnet Mask ละเอียดที่สุดตามกฎ Longest Prefix Match', 'ทิ้งแพ็กเก็ตเนื่องจากเส้นทางมีความขัดแย้งกัน'],
        answer: 2,
        explanation: 'ตามกฎ Longest Prefix Match (LPM) ซึ่งเป็นกฎสูงสุดในการ Forward แพ็กเก็ต เส้นทาง 192.168.1.64/28 มีความยาว Prefix Mask ถึง 28 บิต (ละเอียดกว่า /24 และ /16) จึงชนะการส่งต่อเสมอ'
      },
      {
        question: 'ในระหว่างที่แพ็กเก็ต IP เดินทางข้ามเราเตอร์ตัวกลางจากต้นทางไปยังปลายทาง ข้อมูลส่วนใดในแพ็กเก็ตจะถูกปรับปรุงเปลี่ยนแปลง (Modify) ในแต่ละ Hop?',
        options: ['Source IP และ Destination IP', 'Source MAC, Destination MAC และค่า TTL (ลดลง 1)', 'Payload Data และหมายเลข Port ปลายทาง', 'TCP Sequence Number และ Acknowledgement Number'],
        answer: 1,
        explanation: 'การส่งต่อแบบ Hop-by-Hop เราเตอร์จะทำการลดค่า TTL ลง 1 และทำการ Rewrite ส่วนหัว Layer 2 โดยเปลี่ยน Source MAC เป็นของตนเอง และ Destination MAC เป็นของ Next-Hop ขณะที่ IP ต้นทาง-ปลายทางคงเดิม'
      },
      {
        question: 'ตาราง Forwarding Information Base (FIB) ในอุปกรณ์สวิตช์ Layer 3 และเราเตอร์ยุคใหม่ ทำงานอยู่ในระนาบใด และมีข้อได้เปรียบเหนือ Routing Information Base (RIB) อย่างไร?',
        options: ['ทำงานบน Management Plane ช่วยให้เขียนคำสั่ง CLI ง่ายขึ้น', 'ทำงานบน Data Plane ขับเคลื่อนด้วยชิป ASIC/TCAM ทำให้ค้นหาเส้นทางและส่งต่อข้อมูลได้ด้วยความเร็วระดับสายสัญญาณ (Wire-Speed)', 'ทำงานบน Application Plane เพื่อบันทึกประวัติเว็บที่เปิด', 'ทำงานบน Control Plane เพื่อคำนวณอัลกอริทึม OSPF'],
        answer: 1,
        explanation: 'FIB ถูกโปรแกรมลงในฮาร์ดแวร์หน่วยความจำความเร็วสูง (ASIC/TCAM) บน Data Plane ทำให้สามารถค้นหา Prefix และส่งต่อแพ็กเก็ตได้ระดับกิกะบิต/เทราบิตต่อวินาทีโดยไม่เป็นภาระแก่ CPU'
      }
    ]
  },
  {
    id: 10,
    slug: '10-ospf-routing-protocol-and-spf',
    title: 'บทที่ 10: โปรโตคอลการหาเส้นทางแบบ Link-State: OSPFv2 เชิงลึก',
    subtitle: 'OSPFv2 Architecture, 5 Packets, 7-State Machine, DR/BDR & Area Design',
    category: 'Layer 3 Routing',
    categoryTh: 'ระดับ 4: สถาปัตยกรรมและการหาเส้นทาง Layer 3',
    icon: 'Network',
    overview: 'เจาะลึกโปรโตคอล OSPFv2 (RFC 2328) อัลกอริทึม Dijkstra SPF โครงสร้างแพ็กเก็ต OSPF ทั้ง 5 ชนิด วงจรความสัมพันธ์ 7 สถานะ (Down สู่ Full) การเลือกตั้ง DR/BDR และหลักการออกแบบ Hierarchical Multi-Area (Area 0)',
    labName: 'OSPFv2 7-State Engine & Multi-Area Studio',
    labDescription: 'จำลองการแลกเปลี่ยนแพ็กเก็ต Hello, DBD, LSR, LSU, LSAck ติดตามการเปลี่ยนสถานะของ Neighbor ผ่าน 7-State Machine และทดลองออกแบบโครงสร้าง Multi-Area',
    sections: [
      {
        title: '1. สถาปัตยกรรม Link-State และอัลกอริทึม Dijkstra Shortest Path First (SPF)',
        content: `**Open Shortest Path First (OSPFv2 - RFC 2328)** คือโปรโตคอลการหาเส้นทางภายใน (IGP) แบบ **Link-State** ที่ทำงานบน IP Protocol หมายเลข **89**

**ความแตกต่างระหว่าง Distance-Vector และ Link-State:**
• **Distance-Vector (เช่น RIP)**: ส่งตารางเส้นทางต่อๆ กันตามคำบอกเล่าของเพื่อนบ้าน (Routing by Rumor) ไม่เห็นแผนที่ภาพรวมของเครือข่าย ลู่เข้าช้า และมีความเสี่ยงต่อการเกิดลูป
• **Link-State (OSPF)**: เราเตอร์ทุกตัวจะโฆษณาสถานะของลิงก์ตนเองผ่าน **LSA (Link State Advertisement)** ไปยังเราเตอร์ทุกตัวใน Area เดียวกัน เพื่อสร้าง **LSDB (Link-State Database)** ที่มีข้อมูลแผนที่เครือข่ายเหมือนกันทุกประการ (Identical Map)
• จากนั้นเราเตอร์แต่ละตัวจะรัน **Dijkstra Shortest Path First (SPF) Algorithm** โดยถือว่าตนเองเป็นจุดศูนย์กลาง (Root) ของต้นไม้ เพื่อคำนวณหาเส้นทางที่สั้นที่สุด (Shortest Path Tree) การันตีว่าเส้นทางที่ได้จะปราศจากลูป 100%

**สูตรคำนวณต้นทุนเส้นทาง (OSPF Metric / Cost):**
• \`Cost = Reference Bandwidth / Interface Bandwidth\`
• ค่ามาตรฐานสากล: \`Reference Bandwidth = 100 Mbps (10^8 bps)\`
• เช่น ลิงก์ 10 Mbps มี Cost = 10, ลิงก์ 100 Mbps มี Cost = 1
• *ข้อแนะนำ*: ในเครือข่ายยุคใหม่ควรปรับค่า Reference Bandwidth เป็น 100 Gbps หรือ 1 Tbps เพื่อให้สามารถแยกแยะความแตกต่างระหว่างลิงก์ 1G, 10G, 40G และ 100G ได้อย่างแม่นยำ`
      },
      {
        title: '2. แพ็กเก็ต OSPF 5 ชนิด และเครื่องจักร 7 สถานะ (7-State Neighbor Machine)',
        content: `**แพ็กเก็ต OSPF มาตรฐาน 5 ชนิด (OSPF Packet Types):**
1. **Type 1 - Hello**: ค้นหา สร้าง และรักษาความสัมพันธ์ของเพื่อนบ้าน (ส่งทุกๆ 10 วินาทีบน Broadcast Link)
2. **Type 2 - Database Description (DBD / DD)**: ส่งรายการสารบัญสรุปของ LSA ทั้งหมดในฐานข้อมูล LSDB
3. **Type 3 - Link State Request (LSR)**: ร้องขอรายละเอียดของ LSA เฉพาะรายการที่ตนเองยังขาดอยู่หรือมีเวอร์ชันเก่ากว่า
4. **Type 4 - Link State Update (LSU)**: ส่งชิ้นส่วน LSA ตัวเต็มที่เพื่อนบ้านร้องขอ เพื่ออัปเดตฐานข้อมูล
5. **Type 5 - Link State Acknowledgment (LSAck)**: ส่งการตอบรับเพื่อยืนยันว่าได้รับ LSU ถูกต้องแน่นอน

**วงจรชีวิต 7 สถานะความสัมพันธ์ของ OSPF Neighbor (7-State Machine):**
1. **Down**: สถานะเริ่มต้น ยังไม่ได้รับแพ็กเก็ต Hello จากเพื่อนบ้าน
2. **Init**: ได้รับแพ็กเก็ต Hello จากเพื่อนบ้าน แต่ยังไม่พบ Router ID ของตนเองในรายการเพื่อนบ้านของ Hello นั้น
3. **2-Way**: ได้รับ Hello ที่มี Router ID ของตนเองแล้ว แสดงว่าเกิดการสื่อสารสองทาง (Bi-directional) สมบูรณ์ (*การเลือกตั้ง DR/BDR จะเกิดขึ้นในสถานะนี้*)
4. **ExStart**: เจรจาเลือก Master / Slave Router และตกลงหมายเลขเริ่มต้น Initial Sequence Number (DD Sequence)
5. **Exchange**: แลกเปลี่ยนแพ็กเก็ต DBD เพื่อเปรียบเทียบสารบัญข้อมูล LSDB ของกันและกัน
6. **Loading**: ส่งแพ็กเก็ต LSR เพื่อขอ LSA ที่ขาด และรับแพ็กเก็ต LSU พร้อมส่ง LSAck ตอบรับ
7. **Full**: ฐานข้อมูล LSDB ของเราเตอร์ทั้งสองฝั่งซิงค์ตรงกันอย่างสมบูรณ์แบบ 100% พร้อมรันอัลกอริทึม SPF`
      },
      {
        title: '3. การเลือกตั้ง DR / BDR และการออกแบบเครือข่ายแบบลำดับชั้น Multi-Area OSPF',
        content: `**การเลือกตั้ง Designated Router (DR) และ Backup Designated Router (BDR):**
• บนเครือข่ายแบบ **Broadcast** (เช่น Multi-Access Ethernet) หากเราเตอร์ทุกตัวสร้าง Adjacency ถึงกันหมด จะเกิดคู่ความสัมพันธ์จำนวนมากถึง \`N(N - 1) / 2\` คู่ ซึ่งทำให้สิ้นเปลืองแบนด์วิดท์จาก Flooding
• OSPF จึงเลือก **DR 1 ตัว** และ **BDR 1 ตัว** เพื่อทำหน้าที่เป็นศูนย์กลาง ทำให้ลดคู่ความสัมพันธ์เหลือเพียง \`N - 1\` คู่ โดยเราเตอร์ตัวอื่นๆ (DROther) จะสร้างสถานะ **2-Way** ต่อกัน และสร้างสถานะ **Full** เฉพาะกับ DR และ BDR เท่านั้น
• **มัลติคาสต์แอดเดรส**: \`224.0.0.5\` (All OSPF Routers) และ \`224.0.0.6\` (All DR/BDR)
• **เกณฑ์การเลือกตั้ง DR/BDR (Non-Preemptive)**:
  1. เราเตอร์ที่มี **OSPF Interface Priority** สูงสุด (ช่วง 0-255 ดีฟอลต์ 1 หากตั้งเป็น 0 จะไม่มีสิทธิ์เป็น DR/BDR)
  2. หาก Priority เท่ากัน จะตัดสินด้วย **Highest Router ID**

**หลักการออกแบบโครงสร้าง Multi-Area OSPF:**
• **Backbone Area (Area 0 / 0.0.0.0)**: ศูนย์กลางแกนหลักของระบบ OSPF
• **Non-Backbone Areas (Area 1, 2, ...)**: พื้นที่รอบนอกที่ใช้จัดกลุ่มเราเตอร์ตามแผนกหรือที่ตั้งภูมิศาสตร์
• **กฎการเชื่อมต่อสากล**: Non-Backbone Area ทุก Area จะต้องมีเราเตอร์ **ABR (Area Border Router)** เชื่อมต่อตรงเข้ากับ Backbone Area 0 เสมอ เพื่อป้องกันปัญหาการเกิด Routing Loop ข้าม Area`
      }
    ],
    terms: [
      { term: 'Link-State Database (LSDB) & Dijkstra SPF', desc: 'ฐานข้อมูลแผนที่เครือข่ายที่เหมือนกันทุกตัวใน Area ประมวลผลด้วย Dijkstra Algorithm การันตีเส้นทางสั้นสุดไร้ลูป' },
      { term: 'OSPF 5 Packet Types', desc: '1=Hello (ทักทาย), 2=DBD (สารบัญ), 3=LSR (ขอข้อมูล), 4=LSU (ส่ง LSA), 5=LSAck (ยืนยันรับข้อมูล)' },
      { term: 'OSPF 7 Neighbor States', desc: 'Down -> Init -> 2-Way (เลือก DR/BDR) -> ExStart -> Exchange -> Loading -> Full (ฐานข้อมูลตรงกันสมบูรณ์)' },
      { term: 'Designated Router (DR) & BDR', desc: 'เราเตอร์ศูนย์กลางบน Broadcast Link เพื่อลดภาระ Flooding (ส่งไป 224.0.0.6 สำหรับ DR/BDR และ 224.0.0.5 สำหรับเราเตอร์ทั่วไป)' },
      { term: 'Hierarchical Multi-Area (Backbone Area 0 & ABR)', desc: 'การแบ่ง Area ช่วยลดขนาด LSDB โดยทุก Non-Backbone Area ต้องต่อตรงกับ Area 0 ผ่านเราเตอร์ ABR เสมอ' }
    ],
    quiz: [
      {
        question: 'ในโปรโตคอล OSPFv2 เมื่อเราเตอร์ 2 ตัวเชื่อมต่อกันผ่านสายอีเทอร์เน็ต (Broadcast Network) การเลือกตั้ง DR (Designated Router) และ BDR จะเกิดขึ้นในสถานะความสัมพันธ์ (Neighbor State) ใด?',
        options: ['Init State', '2-Way State', 'Exchange State', 'Full State'],
        answer: 1,
        explanation: 'การเลือกตั้ง DR และ BDR จะเกิดขึ้นใน 2-Way State หลังจากที่เราเตอร์ทั้งสองฝั่งเห็น Router ID ของตนเองปรากฏอยู่ใน Hello Packet ของฝั่งตรงข้ามแล้ว'
      },
      {
        question: 'หากต้องการกำหนดให้เราเตอร์ตัวหนึ่งในเครือข่าย Broadcast ไม่เข้าร่วมการเลือกตั้งเป็น DR หรือ BDR อย่างเด็ดขาด (เป็น DROther เสมอ) จะต้องตั้งค่าพารามิเตอร์ใด?',
        options: ['ตั้งค่า OSPF Router ID เป็น 0.0.0.0', 'ตั้งค่า OSPF Interface Priority เป็น 0', 'เปลี่ยนสถานะของพอร์ตเป็น Discarding', 'ปิดการส่งแพ็กเก็ต LSAck'],
        answer: 1,
        explanation: 'การกำหนดค่า OSPF Interface Priority เป็น 0 จะตัดสิทธิ์เราเตอร์ตัวนั้นออกจากการเลือกตั้ง DR/BDR โดยสมบูรณ์ ทำให้ทำหน้าที่เป็น DROther ตลอดเวลา'
      },
      {
        question: 'แพ็กเก็ต OSPF ชนิดใดที่ทำหน้าที่ส่งข้อมูลโครงสร้างสารบัญสรุปของ Link-State Database (LSDB Summary) เพื่อให้เพื่อนบ้านตรวจสอบว่ามีข้อมูลใดที่ตนเองยังขาดอยู่?',
        options: ['Type 1 - Hello Packet', 'Type 2 - Database Description (DBD / DD) Packet', 'Type 3 - Link State Request (LSR) Packet', 'Type 4 - Link State Update (LSU) Packet'],
        answer: 1,
        explanation: 'แพ็กเก็ต Type 2 DBD (Database Description) บรรจุเฉพาะส่วนหัว (Headers) ของ LSA ทั้งหมดใน LSDB เพื่อให้เพื่อนบ้านนำไปเปรียบเทียบสารบัญข้อมูล'
      }
    ]
  },
  {
    id: 11,
    slug: '11-ipv6-architecture-and-neighbor-discovery',
    title: 'บทที่ 11: สถาปัตยกรรมโพรโทคอล IPv6 และโปรโตคอลค้นหาเพื่อนบ้าน (NDP)',
    subtitle: 'IPv6 128-Bit Architecture, RFC 5952, EUI-64, NDP & SLAAC',
    category: 'Next-Gen & Advanced',
    categoryTh: 'ระดับ 5: เครือข่ายยุคใหม่และการสื่อสารข้ามเซ็กเมนต์',
    icon: 'Globe',
    overview: 'ทำความเข้าใจสถาปัตยกรรม IPv6 ขนาด 128 บิต (RFC 5952) โครงสร้าง Fixed Base Header 40 ไบต์ การจำแนกแอดเดรส (GUA, ULA, LLA, Solicited-Node Multicast) การแปลง EUI-64 และโปรโตคอล NDP (Address Resolution, DAD, SLAAC)',
    labName: 'IPv6 Address Architecture & NDP Engine Studio',
    labDescription: 'ทดลองแปลง MAC Address เป็น EUI-64, ฝึกย่อ-ขยาย IPv6 Address ตาม RFC 5952, และจำลองกระบวนการ SLAAC Autoconfiguration และ NDP Resolution',
    sections: [
      {
        title: '1. แรงขับเคลื่อนสู่ IPv6 และโครงสร้างส่วนหัว Fixed Base Header (40 Bytes)',
        content: `**เหตุผลความจำเป็นในการเปลี่ยนผ่านสู่ IPv6 (RFC 8200):**
• **IPv4 Address Exhaustion**: พื้นที่แอดเดรสของ IPv4 (32 บิต = ~4.3 พันล้านหมายเลข) หมดลงอย่างเป็นทางการ
• **IPv6 Address Space**: ขนาดมหึมาถึง **128 บิต (2^128 = ~3.4 × 10^38 หมายเลข)** เพียงพอสำหรับทุกอุปกรณ์บนโลกในอนาคต

**ความเหนือกว่าของ IPv6 Base Header:**
• **Fixed Size (ขนาดคงที่ 40 ไบต์)**: ต่างจาก IPv4 ที่มีความยาวแปรผัน (20-60 ไบต์) ทำให้ชิปฮาร์ดแวร์ ASIC ของเราเตอร์สามารถประมวลผล Header ได้อย่างรวดเร็วเป็นพิเศษ (Hardware Wire-Speed Processing)
• **Streamlined Fields (ตัดฟิลด์ที่ไม่จำเป็นออก)**:
  - ตัดฟิลด์ \`IHL\`, \`Identification\`, \`Flags\`, \`Fragment Offset\` ออกจาก Base Header (หากจำเป็นต้องตัดแบ่งข้อมูล จะย้ายไปใส่ใน **Extension Headers**)
  - ตัดฟิลด์ \`Header Checksum\` ออกเพื่อลดภาระการคำนวณใหม่ในทุก Hop โดยปล่อยให้การตรวจสอบความถูกต้องเป็นหน้าที่ของ Layer 2 (CRC-32) และ Layer 4 (TCP/UDP Checksum)
• **Next Header (8 บิต)**: ทำหน้าที่ระบุประเภทโปรโตคอลชั้นถัดไปใน Layer 4 (เช่น TCP=6, UDP=17, ICMPv6=58) หรือชี้ไปยัง Extension Header ชิ้นถัดไปแบบห่วงโซ่ (Daisy Chaining)
• **Hop Limit (8 บิต)**: ทำหน้าที่แทนค่า Time to Live (TTL) ของ IPv4 โดยลดลง 1 ในทุกๆ Hop และทิ้งแพ็กเก็ตเมื่อเหลือ 0
• **กำจัด Broadcast โดยสิ้นเชิง**: IPv6 ยกเลิกการส่งแบบ Broadcast ที่สร้างภาระต่อเครือข่าย โดยเปลี่ยนมาใช้งาน **Multicast** และ **Anycast** ทั้งหมด`
      },
      {
        title: '2. กฎการเขียนย่อตาม RFC 5952 และการจำแนกประเภท IPv6 Address',
        content: `**โครงสร้างและมาตรฐานการเขียนย่อ IPv6 (RFC 5952 Standard):**
IPv6 เขียนด้วยเลขฐานสิบหก 32 ตัว แบ่งเป็น 8 กลุ่ม กลุ่มละ 4 ตัวคั่นด้วยโคลอน (:)
1. **Leading Zero Suppression**: สามารถตัดเลขศูนย์ที่อยู่หน้ากลุ่มตัวเลขออกได้ เช่น \`:0042:\` -> \`:42:\`
2. **Double Colon Compression (::)**: สามารถยุบรวมกลุ่มศูนย์ที่อยู่ติดกันหลายกลุ่มให้เหลือเพียงสัญลักษณ์ \`::\` ได้ **เพียง 1 ครั้งเท่านั้นในหนึ่งแอดเดรส** เพื่อป้องกันความกำกวมในการขยายแอดเดรส
3. ตัวอย่าง: \`2001:0db8:0000:0000:0000:0000:0000:0001\` -> ย่อได้เป็น **\`2001:db8::1\`**

**การจำแนกประเภทหมายเลข IPv6 Address:**
• **Global Unicast Address (GUA - RFC 3587)**: ช่วง Prefix **\`2000::/3\`** (ช่วง \`2000::\` ถึง \`3FFF::\`) ใช้สำหรับเชื่อมต่อและสื่อสารบนอินเทอร์เน็ตสาธารณะทั่วโลก
• **Unique Local Address (ULA - RFC 4193)**: ช่วง Prefix **\`FC00::/7\`** (มักใช้ \`FD00::/8\`) เทียบเท่ากับ Private IP ใน IPv4 สำหรับสื่อสารเฉพาะภายในองค์กร ไม่สามารถเราต์ข้ามอินเทอร์เน็ตสาธารณะได้
• **Link-Local Address (LLA - RFC 4291)**: ช่วง Prefix **\`FE80::/10\`** ถูกสร้างขึ้นอัตโนมัติบนทุกอินเทอร์เฟซที่เปิดใช้งาน IPv6 ใช้สื่อสารเฉพาะภายในเครือข่ายท้องถิ่นเดียวกัน (Single Link) ไม่ถูกเราเตอร์ส่งต่อข้ามเครือข่าย
• **Loopback Address**: **\`::1/128\`** (เทียบเท่ากับ 127.0.0.1 ของ IPv4)
• **Unspecified Address**: **\`::/128\`** (ใช้แสดงว่ายังไม่มีไอพี)
• **Multicast Address**: ช่วง Prefix **\`FF00::/8\`** (เช่น \`FF02::1\` = All Nodes, \`FF02::2\` = All Routers, \`FF02::1:FFxx:xxxx\` = Solicited-Node Multicast)

**การสร้าง Interface ID ด้วยวิธี IEEE EUI-64:**
• นำ MAC Address ขนาด 48 บิต มาผ่าครึ่งตรงกลาง
• แทรกตัวเลขฐานสิบหก **\`FFFE\`** ขนาด 16 บิต เข้าไปตรงกลาง
• ทำการกลับบิตที่ 7 (Universal/Local Bit) ของไบต์แรกสุด (หากเป็น 0 กลับเป็น 1, หากเป็น 1 กลับเป็น 0) จนได้ Interface ID ขนาด 64 บิต`
      },
      {
        title: '3. โปรโตคอลค้นหาเพื่อนบ้าน Neighbor Discovery Protocol (NDP / ICMPv6)',
        content: `**Neighbor Discovery Protocol (NDP - RFC 4861):**
ทำงานอยู่บนโปรโตคอล **ICMPv6 (Type 58)** ทำหน้าที่หลัก 3 ประการแทนที่โปรโตคอล ARP และ Broadcast ใน IPv4:

1. **การค้นหา MAC Address (Address Resolution):**
   - โฮสต์ส่งข้อความ **Neighbor Solicitation (NS - Type 135)** ไปยังแอดเดรส **Solicited-Node Multicast** ของเป้าหมาย (\`FF02::1:FFxx:xxxx\`)
   - เครื่องเป้าหมายจะตอบกลับด้วยข้อความ **Neighbor Advertisement (NA - Type 136)** แบบ Unicast แจ้ง MAC Address กลับมา
2. **การตรวจจับไอพีชนกัน (Duplicate Address Detection - DAD):**
   - ก่อนที่อุปกรณ์จะเริ่มใช้งาน IPv6 Address ใดๆ เครื่องจะต้องส่งแพ็กเก็ต NS ไปถามหาไอพีตัวเองในเครือข่าย หากไม่มีใครตอบ NA กลับมา แสดงว่าไอพีนั้นปลอดภัยและสามารถเปิดใช้งานได้
3. **การแจกจ่ายไอพีอัตโนมัติแบบไร้สถานะ (Stateless Address Autoconfiguration - SLAAC):**
   - โฮสต์ส่งข้อความ **Router Solicitation (RS - Type 133)** ไปยัง \`FF02::2\` (All Routers) เพื่อถามหาข้อมูลเครือข่าย
   - เราเตอร์ตอบกลับด้วยข้อความ **Router Advertisement (RA - Type 134)** แจ้งค่า IPv6 Network Prefix (เช่น \`2001:db8:1::/64\`) และ Default Gateway
   - โฮสต์นำ Prefix ที่ได้รับมารวมกับ Interface ID (EUI-64 หรือ Random) ของตนเองเพื่อสร้าง IPv6 Global Unicast Address สมบูรณ์และใช้งานได้ทันทีแบบ Plug-and-Play โดยไม่ต้องพึ่งพา DHCP Server`
      }
    ],
    terms: [
      { term: 'IPv6 Fixed Base Header (40 Bytes)', desc: 'ส่วนหัวขนาดคงที่ 40 ไบต์ ไร้ Checksum ช่วยให้ฮาร์ดแวร์ ASIC ประมวลผลส่งต่อแพ็กเก็ตได้รวดเร็วสูงสุด' },
      { term: 'RFC 5952 Standard & :: Compression', desc: 'มาตรฐานการเขียนย่อ IPv6 ตัดศูนย์นำหน้าและใช้ :: ยุบกลุ่มศูนย์ติดกันได้เพียงครั้งเดียวในหนึ่งแอดเดรส' },
      { term: 'Global Unicast (2000::/3) vs Link-Local (FE80::/10)', desc: 'GUA ใช้บนอินเทอร์เน็ตสาธารณะ, Link-Local สร้างอัตโนมัติใช้สื่อสารเฉพาะภายในลิงก์เดียวกัน' },
      { term: 'IEEE EUI-64 Conversion', desc: 'การผ่ากลาง MAC 48 บิต แทรก FFFE และกลับบิตที่ 7 เพื่อสร้าง Interface ID ขนาด 64 บิต' },
      { term: 'Neighbor Discovery Protocol (NDP) & SLAAC', desc: 'NDP ใช้ NS/NA (ICMPv6 135/136) แทน ARP และใช้ RS/RA (133/134) สำหรับ SLAAC แจกไอพีอัตโนมัติ' }
    ],
    quiz: [
      {
        question: 'ตามมาตรฐานสากล RFC 5952 ข้อใดคือรูปแบบการเขียนย่อที่ถูกต้องและสมบูรณ์ที่สุดของ IPv6 Address: 2001:0db8:0000:0000:0000:0000:0000:0008?',
        options: ['2001:db8:0:0:0:0:0:8', '2001:db8::8', '2001:0db8::8', '2001:db8::0008'],
        answer: 1,
        explanation: 'ตาม RFC 5952 ต้องตัดเลข 0 หน้ากลุ่มตัวเลขออกทั้งหมด และยุบรวมกลุ่มศูนย์ที่อยู่ติดกันให้กลายเป็น :: ดังนั้นจึงได้ 2001:db8::8'
      },
      {
        question: 'โปรโตคอล Neighbor Discovery Protocol (NDP) ในระบบ IPv6 อาศัยแพ็กเก็ตคู่ใดในการทำงานเพื่อค้นหาหมายเลข MAC Address ของโฮสต์ปลายทาง (ทำหน้าที่แทน ARP ใน IPv4)?',
        options: ['Router Solicitation (RS) และ Router Advertisement (RA)', 'Neighbor Solicitation (NS Type 135) และ Neighbor Advertisement (NA Type 136)', 'ARP Request และ ARP Reply', 'DHCPv6 Solicit และ DHCPv6 Advertise'],
        answer: 1,
        explanation: 'NDP ใช้ Neighbor Solicitation (NS Type 135) ส่งไปยัง Solicited-Node Multicast และรับคำตอบผ่าน Neighbor Advertisement (NA Type 136) เพื่อแปลง IPv6 เป็น MAC Address'
      },
      {
        question: 'หากเครื่องคอมพิวเตอร์มีหมายเลข MAC Address เป็น 00:1A:2B:3C:4D:5E เมื่อแปลงเป็น IPv6 Interface ID ขนาด 64 บิต ด้วยวิธี IEEE EUI-64 จะได้ผลลัพธ์เป็นค่าใด?',
        options: ['001A:2BFF:FE3C:4D5E', '021A:2BFF:FE3C:4D5E', '001A:2B3C:4D5E:FFFF', 'FE80::001A:2B3C:4D5E'],
        answer: 1,
        explanation: 'ขั้นตอน EUI-64: ผ่ากลางแทรก FFFE ได้ 001A:2BFF:FE3C:4D5E จากนั้นกลับบิตที่ 7 ของไบต์แรก (00 = 0000 0000 กลายเป็น 0000 0010 = 02) จึงได้เป็น 021A:2BFF:FE3C:4D5E'
      }
    ]
  },
  {
    id: 12,
    slug: '12-inter-vlan-routing-and-l3-switching',
    title: 'บทที่ 12: การหาเส้นทางข้ามเวอร์ชวลแลน (Inter-VLAN Routing & L3 Switching)',
    subtitle: 'Inter-VLAN Routing, Router-on-a-Stick (802.1Q) vs Layer 3 Switch SVI/VLANIF',
    category: 'Next-Gen & Advanced',
    categoryTh: 'ระดับ 5: เครือข่ายยุคใหม่และการสื่อสารข้ามเซ็กเมนต์',
    icon: 'Split',
    overview: 'ทำความเข้าใจความจำเป็นของการเราต์ข้าม VLAN การเปรียบเทียบเชิงสถาปัตยกรรมระหว่าง Router-on-a-Stick (802.1Q Sub-interfaces) กับ Layer 3 Switch (SVI / VLANIF) กลไก Hardware Wire-Speed ASIC Routing และโฟลว์การประมวลผลแพ็กเก็ตข้าม VLAN แบบละเอียด',
    labName: 'Universal Inter-VLAN Routing & SVI Engine Studio',
    labDescription: 'เปรียบเทียบโฟลว์การส่งข้อมูลข้าม VLAN ระหว่าง Router-on-a-Stick กับ Layer 3 Switch SVI ส่องดูการทำงานของฮาร์ดแวร์ ASIC และการ Rewrite MAC ข้าม VLAN',
    sections: [
      {
        title: '1. หลักการและความจำเป็นของ Inter-VLAN Routing',
        content: `**ทำไมต้องมี Inter-VLAN Routing:**
• การสร้าง VLAN ทำหน้าที่แบ่งแยก Broadcast Domain ในระดับ Data Link Layer (Layer 2) อย่างเด็ดขาด
• อุปกรณ์ที่อยู่ต่าง VLAN กัน (แม้จะเสียบอยู่บนสวิตช์กายภาพตัวเดียวกัน) จะไม่สามารถสื่อสารกันได้ในระดับ Layer 2 เนื่องจากไม่มีการแลกเปลี่ยนเฟรมข้าม VLAN และมี Subnet เชิงตรรกะที่แตกต่างกัน
• การจะส่งข้อมูลข้ามระหว่าง VLAN ได้นั้น **จำเป็นต้องอาศัยอุปกรณ์ที่มีความสามารถในการค้นหาเส้นทางระดับ Network Layer (Layer 3 Routing)** เพื่อรับแพ็กเก็ต ถอดส่วนหัวเดิม ค้นหาตารางเราติ้ง และส่งต่อไปยังเครือข่ายปลายทาง`
      },
      {
        title: '2. การเปรียบเทียบ 3 สถาปัตยกรรม Inter-VLAN Routing',
        content: `วิวัฒนาการของการเชื่อมต่อสื่อสารข้าม VLAN แบ่งออกเป็น 3 รูปแบบหลัก:

**1. Traditional Multi-Interface Router (การใช้เราเตอร์แบบพอร์ตแยก):**
• เดินสายเคเบิล 1 พอร์ตทางกายภาพต่อ 1 VLAN เข้าสู่เราเตอร์
• *ข้อเสีย*: สิ้นเปลืองพอร์ตบนเราเตอร์อย่างมหาศาล และไม่สามารถขยายขนาดได้ (Poor Scalability)

**2. Router-on-a-Stick (802.1Q Sub-interfaces):**
• เชื่อมต่อสายเคเบิลเพียง **1 เส้น (Trunk Link)** ระหว่างสวิตช์กับพอร์ตทางกายภาพเดียวของเราเตอร์
• บนเราเตอร์จะสร้าง **Logical Sub-interfaces** (เช่น \`GigabitEthernet 0/0.10\`, \`0/0.20\`)
• แต่ละ Sub-interface จะกำหนดการแท็กมาตรฐาน **IEEE 802.1Q (Dot1q)** ให้ตรงกับ VLAN ID และกำหนด IP Address เป็น Default Gateway ประจำ VLAN นั้น
• *ข้อจำกัด*: ทราฟฟิกข้าม VLAN ทั้งหมดต้องวิ่งไปกลับผ่านสาย Trunk เส้นเดียว (Hairpinning / One-Armed Routing) ทำให้เกิดปัญหาคอขวด (Bottleneck) และจำกัดด้วยความสามารถในการประมวลผลของ CPU เราเตอร์

**3. Layer 3 Switch with SVI / VLANIF Interfaces (สถาปัตยกรรมมาตรฐานองค์กร):**
• สวิตช์ Layer 3 ผสานการทำงานของ Layer 2 Switching และ Layer 3 Routing เข้าด้วยกันบนชิปฮาร์ดแวร์ **ASIC** เดียวกัน
• สร้างอินเทอร์เฟซเสมือนระดับ Layer 3 ขึ้นมาภายในสวิตช์ เรียกว่า **SVI (Switched Virtual Interface)** หรือ **VLANIF** (เช่น \`interface Vlanif 10\` / \`interface Vlan 10\`) ทำหน้าที่เป็น Default Gateway โดยตรง
• **Hardware Wire-Speed Forwarding**: แพ็กเก็ตที่วิ่งข้าม VLAN จะถูกเราต์และส่งต่อด้วยความเร็วระดับสายสัญญาณ (หลายสิบถึงร้อย Gbps) โดยอาศัยตาราง FIB และ Adjacency Table บนฮาร์ดแวร์ความเร็วสูง ความหน่วงต่ำมากระดับไมโครวินาที ปราศจากปัญหาคอขวด`
      },
      {
        title: '3. เจาะลึกวงจรการประมวลผลแพ็กเก็ตข้าม VLAN (Step-by-Step Packet Walk)',
        content: `**ลำดับขั้นตอนการส่งข้อมูลจาก PC1 (VLAN 10: 192.168.10.2) ไปยัง PC2 (VLAN 20: 192.168.20.2) บน Layer 3 Switch:**

1. **PC1 ประเมินเส้นทาง**: PC1 เปรียบเทียบ IP ปลายทางกับ Subnet Mask ของตนเอง พบว่าอยู่นอกเครือข่ายท้องถิ่น จึงส่งเฟรมข้อมูลไปยัง **Default Gateway (IP ของ VLANIF 10)**
2. **Ingress พอร์ต Access 10**: สวิตช์รับเฟรม Untagged เข้ามาทางพอร์ต Access VLAN 10 ทำการแท็ก Tag 802.1Q (VID=10) ภายใน
3. **ตรวจสอบ Destination MAC**: ชิปประมวลผลพบว่า Destination MAC ของเฟรมตรงกับ MAC Address ของอินเทอร์เฟซ Layer 3 (VLANIF 10) สวิตช์จึงส่งเฟรมเข้าสู่ **Layer 3 Routing Engine (FIB Table)** แทนที่จะส่งต่อแบบ L2
4. **Hardware FIB Lookup**: สวิตช์ค้นหาตาราง FIB พบว่าปลายทาง \`192.168.20.2\` อยู่บนเครือข่ายของ **VLANIF 20**
5. **Layer 3 Modifications**:
   - ลดค่า **TTL (Time to Live) ลง 1**
   - คำนวณค่า **IPv4 Header Checksum ใหม่**
6. **Layer 2 Header Rewrite (ASIC)**:
   - ค้นหาตาราง ARP เพื่อหา MAC Address ของ PC2
   - ห่อหุ้ม L2 Header ใหม่: เปลี่ยน **Source MAC เป็น MAC ของ VLANIF 20** และเปลี่ยน **Destination MAC เป็น MAC Address ของ PC2**
   - ติดแท็ก 802.1Q เป็น VLAN 20
7. **Egress พอร์ต Access 20**: สวิตช์ส่งเฟรมออกทางพอร์ตปลายทางที่เป็น Access VLAN 20 โดยทำการ **ถอดแท็ก (Strip Tag)** ออกจนเป็นเฟรม Ethernet ปกติก่อนส่งถึงการ์ดแลนของ PC2`
      }
    ],
    terms: [
      { term: 'Layer 3 Switch (Multilayer Switching)', desc: 'สวิตช์ที่สามารถส่งต่อข้อมูลได้ทั้ง Layer 2 (MAC Table) และ Layer 3 (FIB Table) ด้วยความเร็วฮาร์ดแวร์ ASIC' },
      { term: 'SVI (Switched Virtual Interface) / VLANIF', desc: 'อินเทอร์เฟซตรรกะระดับ Layer 3 ภายในสวิตช์ ทำหน้าที่เป็น Default Gateway ให้กับแต่ละ VLAN' },
      { term: 'Router-on-a-Stick (Dot1q Sub-interfaces)', desc: 'การใช้เราเตอร์ตัวเดียวต่อสาย Trunk ลิงก์เดียวเข้าสวิตช์ และสร้าง Sub-interface แยก VLAN ด้วยมาตรฐาน 802.1Q' },
      { term: 'Hardware Wire-Speed Routing (ASIC)', desc: 'การค้นหาเส้นทางและเขียนทับส่วนหัว Layer 2 ด้วยชิปฮาร์ดแวร์ความเร็วสูงโดยไม่ผ่าน CPU หลัก' },
      { term: 'Inter-VLAN Step-by-Step Packet Walk', desc: 'วงจรส่งข้อมูลข้าม VLAN: PC ส่งหา Gateway -> สวิตช์ตัด L2 -> ค้นหา FIB -> ลด TTL -> Rewrite MAC เป็น Gateway ขาออกและ PC ปลายทาง' }
    ],
    quiz: [
      {
        question: 'ข้อใดคือข้อได้เปรียบที่สำคัญที่สุดของการใช้งาน Layer 3 Switch (SVI / VLANIF) ในการทำ Inter-VLAN Routing เมื่อเทียบกับ Router-on-a-Stick?',
        options: ['ไม่ต้องกำหนดหมายเลข IP Address ให้กับอุปกรณ์', 'การส่งต่อข้อมูลข้าม VLAN ทำงานผ่านชิปฮาร์ดแวร์ ASIC ด้วยความเร็วระดับสายสัญญาณ (Wire-Speed) และขจัดปัญหาคอขวดของสาย Trunk เส้นเดี่ยว', 'สามารถเชื่อมต่อข้ามสายเคเบิลโทรศัพท์แบบเก่าได้', 'ช่วยให้เครื่องคอมพิวเตอร์ไม่ต้องมี Default Gateway'],
        answer: 1,
        explanation: 'Layer 3 Switch ใช้ชิปฮาร์ดแวร์ ASIC ในการเราต์และเขียนทับ MAC Address ภายในอุปกรณ์ด้วยความเร็วบัสหลักสิบถึงร้อยกิกะบิตต่อวินาที จึงเร็วกว่าและไม่มีคอขวดเหมือน Router-on-a-Stick'
      },
      {
        question: 'ในการตั้งค่า Router-on-a-Stick บนเราเตอร์ การเชื่อมต่อระหว่างพอร์ตของสวิตช์ไปยังพอร์ตหลักของเราเตอร์จะต้องกำหนดโหมดของพอร์ตสวิตช์เป็นโหมดใด?',
        options: ['Access Port', 'Trunk Port (ที่อนุญาตให้ VLAN ที่เกี่ยวข้องส่งผ่านได้)', 'Loopback Port', 'Console Port'],
        answer: 1,
        explanation: 'สายเชื่อมต่อไปยัง Router-on-a-Stick ต้องส่งผ่านเฟรมที่มีแท็ก IEEE 802.1Q ของหลายๆ VLAN จึงจำเป็นต้องตั้งค่าพอร์ตสวิตช์เป็น Trunk Port'
      },
      {
        question: 'เมื่อเครื่อง PC1 (VLAN 10) ส่งข้อมูลไปยัง PC2 (VLAN 20) ผ่าน Layer 3 Switch ในระหว่างกระบวนการ Routing ข้อมูลส่วนใดในระดับ Layer 2 จะถูกสวิตช์เขียนทับ (Rewrite) ใหม่ก่อนส่งออกไปยัง PC2?',
        options: ['เปลี่ยน Source MAC เป็น MAC ของ VLANIF 20 และเปลี่ยน Destination MAC เป็น MAC ของ PC2', 'เปลี่ยน Source IP เป็น IP ของ VLANIF 20 และเปลี่ยน Destination IP เป็น IP ของ PC2', 'เปลี่ยนหมายเลข TCP Source Port และ Destination Port', 'เปลี่ยนเฉพาะค่า FCS Checksum แต่คงค่า MAC เดิมทั้งหมด'],
        answer: 0,
        explanation: 'ในกระบวนการ Layer 3 Forwarding สวิตช์จะ Rewrite ส่วนหัว L2 โดยเปลี่ยน Source MAC เป็น MAC ประจำอินเทอร์เฟซขาออก (VLANIF 20) และ Destination MAC เป็น MAC ของโฮสต์ปลายทาง (PC2) ขณะที่ IP ต้นทาง-ปลายทางยังคงเดิม'
      }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด (All Modules)' },
  { id: 'Fundamentals & Architecture', label: '1. พื้นฐานและสถาปัตยกรรมเครือข่าย' },
  { id: 'Layer 2 Switching', label: '2. สวิตชิ่งระดับ Layer 2' },
  { id: 'Enterprise Reliability', label: '3. ความพร้อมใช้งานและความน่าเชื่อถือสูง' },
  { id: 'Layer 3 Routing', label: '4. สถาปัตยกรรมและการหาเส้นทาง Layer 3' },
  { id: 'Next-Gen & Advanced', label: '5. เครือข่ายยุคใหม่และการสื่อสารข้ามเซ็กเมนต์' }
];

