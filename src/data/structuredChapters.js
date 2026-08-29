// Master Structured Content Blocks for all 12 Chapters
export const STRUCTURED_CHAPTERS = {
  "1": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. บทนำและแนวคิดพื้นฐานของการสื่อสารข้อมูล (Introduction to Data Communication)"
    },
    {
      "type": "paragraph",
      "text": "การสื่อสาร (Communication) เป็นกิจกรรมพื้นฐานของมนุษย์ในการแลกเปลี่ยนข่าวสาร ความคิด และสารสนเทศ แต่ในยุคสารสนเทศดิจิทัล (Information Era) การสื่อสารได้พัฒนาจากการมีปฏิสัมพันธ์ระหว่างบุคคลโดยตรง มาเป็นการสื่อสารผ่าน **เครือข่ายสื่อสารข้อมูล (Data Communication Network)** ซึ่งเป็นโครงสร้างพื้นฐานที่เชื่อมโยงอุปกรณ์คอมพิวเตอร์และระบบประมวลผลต่างๆ เข้าด้วยกัน เพื่อให้สามารถแลกเปลี่ยนสารสนเทศได้อย่างรวดเร็ว แม่นยำ และมีประสิทธิภาพสูง"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1.1 วงจรการแปลงสารสนเทศสู่สัญญาณสื่อสาร (Information Transfer Process)"
    },
    {
      "type": "paragraph",
      "text": "ในการส่งผ่านข้อมูลจากผู้ส่ง (Sender) ไปยังผู้รับ (Receiver) ข้อมูลจะผ่านกระบวนการแปลงสภาพตามลำดับ 4 ขั้นตอนหลัก ดังนี้:"
    },
    {
      "type": "diagram",
      "content": "\n+------------------+      +------------------+      +--------------------+      +-----------------------+\n\n| ข้อมูลข่าวสาร    | ---> | ข้อมูลดิจิทัล    | ---> | สัญญาณสื่อสาร      | ---> | ตัวกลางการสื่อสาร     |\n\n| (Information)    |      | (Data)           |      | (Signal)           |      | (Transmission Medium) |\n\n+------------------+      +------------------+      +--------------------+      +-----------------------+\n\n(เสียง, ภาพ, ข้อความ)    (เลขฐานสอง 0 และ 1)     (คลื่นไฟฟ้า / แสง / คลื่นวิทยุ)  (สายทองแดง / ใยแก้ว / อากาศ)\n"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ข้อมูลข่าวสาร (Information)**: คือความหมาย ความคิด หรือข้อความที่มนุษย์เข้าใจได้ เช่น ข้อความตัวอักษร (Text), เสียงพูด (Voice), ภาพนิ่ง (Image) หรือวิดีโอ (Video)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ข้อมูลดิจิทัล (Data)**: เนื่องจากระบบคอมพิวเตอร์และอุปกรณ์อิเล็กทรอนิกส์ไม่สามารถประมวลผลข้อมูลในรูปแบบนามธรรมได้ ข้อมูลข่าวสารจึงต้องถูกเข้ารหัส (Encode) ให้อยู่ในรูปของ **ข้อมูลดิจิทัล (Digital Data)** ในระบบเลขฐานสอง (Binary System) ซึ่งประกอบด้วยบิต $0$ และ $1$"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**สัญญาณสื่อสาร (Signal)**: ข้อมูลดิจิทัล (Data) ไม่สามารถเดินทางข้ามระยะทางได้ด้วยตัวเอง จึงต้องถูกแปลงเป็น **สัญญาณ (Signal)** ทางกายภาพเพื่อส่งผ่านตัวกลาง แบ่งเป็น:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**สัญญาณไฟฟ้า (Electrical Signals)** เช่น ระดับแรงดันไฟฟ้าบวก/ลบ บนสายทองแดงคู่บิดเกลียว (Twisted Pair)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**สัญญาณแสง (Optical Signals)** เช่น การกะพริบของลำแสงเลเซอร์หรือ LED ภายในสายใยแก้วนำแสง (Optical Fiber)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**สัญญาณคลื่นแม่เหล็กไฟฟ้า/คลื่นวิทยุ (Electromagnetic / Radio Waves)** สำหรับการสื่อสารไร้สาย (Wireless)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ตัวกลางการส่งผ่านข้อมูล (Transmission Medium)**: เส้นทางกายภาพหรือสภาพแวดล้อมที่สัญญาณใช้เดินทางจากต้นทางไปยังปลายทาง"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. นิยามและองค์ประกอบของเครือข่ายสื่อสารข้อมูล (Data Communication Network Components)"
    },
    {
      "type": "paragraph",
      "text": "**เครือข่ายสื่อสารข้อมูล (Data Communication Network)** หมายถึง ระบบที่นำเอาอุปกรณ์ปลายทาง (Terminal Devices / End Systems) หลายๆ อุปกรณ์ มาเชื่อมต่อเข้ากับอุปกรณ์เครือข่ายตัวกลาง (Intermediate Switching / Routing Devices) ผ่านตัวกลางการสื่อสาร (Transmission Media) ภายใต้กฎเกณฑ์และมาตรฐานข้อตกลงเดียวกันที่เรียกว่า **โปรโตคอล (Protocols)** เพื่อบรรลุวัตถุประสงค์ในการแลกเปลี่ยนข้อมูล การเข้าถึงทรัพยากรร่วมกัน และการกระจายงานประมวลผล"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.1 คำศัพท์พื้นฐานที่สำคัญ (Common Networking Terms)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**โหนด (Node)**: อุปกรณ์ใดๆ ที่เชื่อมต่ออยู่ในระบบเครือข่ายและมีความสามารถในการรับ ส่ง หรือส่งต่อข้อมูล เช่น คอมพิวเตอร์, เซิร์ฟเวอร์, สวิตช์, เราเตอร์"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**ลิงก์ (Link)**: เส้นทางเชื่อมต่อทางกายภาพหรือทางตรรกะระหว่างโหนดสองโหนด"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**เอนด์ซิสเต็ม (End System / Terminal Device)**: อุปกรณ์ต้นทางหรือปลายทางของการสื่อสารที่ผู้ใช้งานมีปฏิสัมพันธ์โดยตรง เช่น คอมพิวเตอร์ตั้งโต๊ะ (PC), แล็ปท็อป (Laptop), โทรศัพท์สมาร์ตโฟน (Smartphone), เซิร์ฟเวอร์ (Server), กล้องวงจรปิด IP Camera"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**อินเตอร์มีเดียตซิสเต็ม (Intermediate System / Network Device)**: อุปกรณ์เครือข่ายตัวกลางที่ทำหน้าที่รับ ส่งต่อ กรอง และเลือกเส้นทางของข้อมูลระหว่างโหนดต้นทางกับโหนดปลายทาง"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**โปรโตคอล (Protocol)**: กฎระเบียบ ข้อตกลง และมาตรฐานที่กำหนดรูปแบบ วิธีการเข้ารหัส การตรวจสอบความถูกต้อง และขั้นตอนการรับส่งข้อมูลระหว่างอุปกรณ์ต่างๆ เพื่อให้สามารถสื่อสารกันได้อย่างเข้าใจถูกต้อง"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. อุปกรณ์เครือข่ายหลักและสัญลักษณ์มาตรฐานของ Huawei (Huawei Network Devices & Icons)"
    },
    {
      "type": "paragraph",
      "text": "ระบบเครือข่ายสื่อสารข้อมูลขององค์กรประกอบด้วยอุปกรณ์หลักที่มีหน้าที่การทำงานเฉพาะทาง ดังต่อไปนี้:"
    },
    {
      "type": "diagram",
      "content": "\n+--------------------------------------------------------------------------------------------------+\n\n|                                  อุปกรณ์เครือข่ายหลักในระบบ Data Communication                     |\n\n+--------------------------------------------------------------------------------------------------+\n\n| 1. สวิตช์ (Switch)               - เชื่อมต่ออุปกรณ์ใน LAN ส่งต่อข้อมูลด้วย MAC Address (Layer 2) |\n\n| 2. เราเตอร์ (Router)             - เชื่อมต่อระหว่างเครือข่ายข้าม Subnet/WAN ด้วย IP (Layer 3)     |\n\n| 3. ไฟร์วอลล์ (Firewall)          - ตรวจสอบ ควบคุม และป้องกันความปลอดภัยตาม Security Policy         |\n\n| 4. อุปกรณ์ไร้สาย (WLAN AP / AC)  - กระจายสัญญาณ Wi-Fi (AP) และควบคุมบริหารจัดการ AP แบบศูนย์กลาง (AC) |\n\n+--------------------------------------------------------------------------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.1 สวิตช์เครือข่าย (Network Switches)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**สวิตช์เลเยอร์ 2 (Layer 2 Switch)**: ทำงานในระดับ Data Link Layer ทำหน้าที่เชื่อมต่ออุปกรณ์ปลายทาง (End Devices) เข้าด้วยกันภายในเครือข่ายเฉพาะที่ (LAN) เดียวกัน ส่งต่อเฟรมข้อมูล (Data Frames) โดยอ้างอิงจากหมายเลข **MAC Address (Media Access Control)**"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**สวิตช์เลเยอร์ 3 (Layer 3 Switch)**: รวมความสามารถของสวิตช์ความเร็วสูงเข้ากับฟังก์ชันการหาเส้นทางระดับ Network Layer (IP Routing) สามารถส่งต่อข้อมูลข้าม Subnet/VLAN ได้ด้วยความเร็วระดับฮาร์ดแวร์ (Hardware-based Wire-speed Forwarding)"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.2 เราเตอร์ (Routers)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "ทำงานในระดับ Network Layer (Layer 3) ทำหน้าที่เป็นเกตเวย์ (Gateway) เชื่อมโยงเครือข่ายที่อยู่ต่าง Subnet, ต่างเทคโนโลยี หรือต่างพื้นที่ทางภูมิศาสตร์ (เช่น เชื่อม LAN เข้าสู่ WAN หรือ Internet)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "ทำหน้าที่คำนวณและเลือกเส้นทางที่ดีที่สุด (Optimal Path Selection) สำหรับส่งต่อแพ็กเก็ต (Packets) โดยอ้างอิงจาก **IP Address** และตารางการหาเส้นทาง (Routing Table)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "ทำหน้าที่แบ่งแยก **Broadcast Domain** ป้องกันไม่ให้สัญญาณบรอดคาสต์แพร่กระจายข้ามเครือข่าย"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.3 ไฟร์วอลล์ (Firewalls)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "อุปกรณ์รักษาความมั่นคงปลอดภัยของเครือข่ายที่ติดตั้งอยู่ ณ จุดเชื่อมต่อระหว่างโซนเครือข่ายที่มีระดับความน่าเชื่อถือต่างกัน (เช่น ระหว่าง Intranet ภายในองค์กร กับ Internet ภายนอก)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "ทำการตรวจสอบและคัดกรองแพ็กเก็ตข้อมูล (Stateful Packet Inspection) ตามกฎความปลอดภัย (Security Policies), การป้องกันการบุกรุก (IPS/IDS), การกรองไวรัส/มัลแวร์ (Antivirus), การแปลที่อยู่เครือข่าย (NAT), และการเข้ารหัสอุโมงค์เสมือน (IPsec/SSL VPN)"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.4 อุปกรณ์เครือข่ายไร้สาย (Wireless Devices)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**แอคเซสพอยต์ (Access Point - AP)**: อุปกรณ์แปลงสัญญาณเครือข่ายแบบมีสาย (Wired Ethernet) ให้เป็นคลื่นวิทยุไร้สาย (Radio Frequency Signals) ตามมาตรฐานตระกูล IEEE 802.11 (Wi-Fi) เพื่อให้อุปกรณ์ลูกข่ายไร้สายสามารถเชื่อมต่อเข้าสู่เครือข่ายได้"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**แอคเซสคอนโทรลเลอร์ (Access Controller - AC)**: อุปกรณ์ควบคุมแบบรวมศูนย์ ทำหน้าที่บริหารจัดการ กำหนดค่าคอนฟิก อัปเกรดเฟิร์มแวร์ ควบคุมการกระจายสัญญาณวิทยุ (RF Management) การโรมมิ่ง (Roaming) และการยืนยันตัวตนความปลอดภัย (Authentication) ของ AP จำนวนมากภายในองค์กร"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. การจำแนกประเภทเครือข่ายตามขอบเขตภูมิศาสตร์ (Classification of Networks by Scale)"
    },
    {
      "type": "paragraph",
      "text": "ระบบเครือข่ายสามารถจำแนกตามขนาดและขอบเขตพื้นที่การให้บริการออกเป็น 3 ระดับหลัก:"
    },
    {
      "type": "diagram",
      "content": "\n+------------------------------------------------------------------------------------------------------+\n\n| ประเภทเครือข่าย  | ขอบเขตพื้นที่ (Coverage Area)   | เทคโนโลยีที่ใช้            | เจ้าของ/ผู้ดูแล        |\n\n+------------------+---------------------------------+----------------------------+------------------------+\n\n| LAN              | ไม่กี่เมตร ถึง ไม่กี่กิโลเมตร    | Ethernet, Wi-Fi            | องค์กร / บุคคล         |\n\n| (Local Area Net) | (ห้องทำงาน, อาคาร, มหาวิทยาลัย) | (1 Gbps, 10 Gbps, 100 Gbps)| (Private Ownership)    |\n\n+------------------+---------------------------------+----------------------------+------------------------+\n\n| MAN              | 10 ถึง 100 กิโลเมตร             | IP/MPLS, 10GE/100GE DWDM,  | ผู้ให้บริการโทรคมนาคม   |\n\n| (Metro Area Net) | (ครอบคลุมระดับเมือง/เทศบาล)     | Metro Ethernet             | (Telecom / ISP)        |\n\n+------------------+---------------------------------+----------------------------+------------------------+\n\n| WAN              | หลายร้อย ถึง หลายหมื่นกิโลเมตร   | Optical Transport (OTN),   | ผู้ให้บริการโทรคมนาคม   |\n\n| (Wide Area Net)  | (ข้ามจังหวัด, ข้ามประเทศ, ทั่วโลก)| IP/MPLS WAN, SD-WAN, SATCOM| (Telecom / Tier-1 ISP) |\n\n+------------------+---------------------------------+----------------------------+------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.1 เครือข่ายเฉพาะที่ (Local Area Network - LAN)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เครือข่ายที่ครอบคลุมพื้นที่จำกัด เช่น ภายในห้องปฏิบัติการ อาคารสำนักงาน หรือวิทยาเขต (Campus Network)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "องค์กรเป็นเจ้าของโครงสร้างพื้นฐานและสายสัญญาณเองทั้งหมด"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "อัตราการรับส่งข้อมูลสูงมาก (High Bandwidth: 1 Gbps ถึง 100 Gbps) อัตราความหน่วงต่ำ (Low Latency) และอัตราความผิดพลาดของข้อมูลต่ำ (Low Error Rate)"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.2 เครือข่ายระดับเมือง (Metropolitan Area Network - MAN)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เครือข่ายที่เชื่อมโยง LAN หลายๆ แห่งที่กระจายตัวอยู่ภายในเมืองเดียวกันเข้าด้วยกัน"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "นิยมใช้งานโดยเทศบาล องค์กรขนาดใหญ่ที่มีสาขาในเมืองเดียวกัน หรือสถาบันการศึกษา (Education MAN)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "มักเช่าใช้บริการโครงข่ายใยแก้วนำแสง (Dark Fiber หรือ Metro Ethernet) จากผู้ให้บริการโทรคมนาคม"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.3 เครือข่ายวงกว้าง (Wide Area Network - WAN)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เครือข่ายที่เชื่อมโยงระบบสื่อสารข้ามระยะทางไกล ครอบคลุมระดับภูมิภาค ประเทศ หรือทั่วโลก (เช่น เครือข่าย Internet)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "อาศัยโครงข่ายของผู้ให้บริการโทรคมนาคม (Service Providers) ในการรับส่งข้อมูลผ่านเทคโนโลยีความเร็วสูง เช่น Optical Transmission Networks (OTN/DWDM), Multi-Protocol Label Switching (MPLS) และ SD-WAN"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. รูปแบบโครงสร้างการเชื่อมต่อเครือข่าย (Network Topologies)"
    },
    {
      "type": "paragraph",
      "text": "**โทโพโลยีเครือข่าย (Network Topology)** คือ รูปแบบการจัดวางและการเชื่อมต่อเชิงโครงสร้างระหว่างโหนดต่างๆ ในเครือข่าย ทั้งในมุมมองทางกายภาพ (Physical Topology) และมุมมองทางตรรกะ (Logical Topology)"
    },
    {
      "type": "diagram",
      "content": "\n        (1) Star                      (2) Tree                     (3) Ring\n\n          [Switch]                     [Core SW]                   [Node A] --- [Node B]\n\n         /   |    \\                   /         \\                     |            |\n\n     [PC1] [PC2] [PC3]           [Dist SW1]  [Dist SW2]            [Node D] --- [Node C]\n\n                                  /      \\    /                                     [PC]    [PC] [PC]    [PC]\n\n\n\n        (4) Bus                   (5) Full-Mesh                 (6) Partial-Mesh\n\n    ---[Node1]---[Node2]---         [A] ===== [B]                  [A] ----- [B]\n\n          |         |                | \\   / |                     | \\     / |\n\n        [PC]      [PC]               |   X   |                     |   \\ /   |\n\n                                    [C] ===== [D]                  [C]       [D]\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.1 การวิเคราะห์และเปรียบเทียบโทโพโลยีแต่ละประเภท (Comparative Analysis of Topologies)"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "5.1.1 สูตรคำนวณจำนวนลิงก์ในโครงสร้าง Full-Mesh Topology"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "L = \\frac{N(N - 1)}{2}",
      "description": "",
      "variables": []
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**$N$**: จำนวนโหนดทั้งหมดในระบบ (Total Nodes)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**$L$**: จำนวนลิงก์ทางกายภาพแบบจุดต่อจุดทั้งหมด (Total Physical Links)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**ตัวอย่างการคำนวณ**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "หากมีโหนด $N = 4$ โหนด: $L = \\frac{4(4-1)}{2} = \\frac{4 \\times 3}{2} = 6$ ลิงก์"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "หากมีโหนด $N = 8$ โหนด: $L = \\frac{8(8-1)}{2} = \\frac{8 \\times 7}{2} = 28$ ลิงก์"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "หากมีโหนด $N = 16$ โหนด: $L = \\frac{16(15)}{2} = 120$ ลิงก์"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. วงจรชีวิตงานวิศวกรรมเครือข่ายและการรับรองวิชาชีพ (Network Engineering & Certification)"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.1 วงจรชีวิตของโครงการเครือข่าย (Network Engineering Project Life Cycle)"
    },
    {
      "type": "paragraph",
      "text": "การสร้างและดูแลระบบเครือข่ายข้อมูลระดับองค์กรประกอบด้วย 5 ขั้นตอนต่อเนื่อง:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การวางแผนเครือข่าย (Network Planning)**: วิเคราะห์ความต้องการทางธุรกิจ ปริมาณทราฟฟิกที่คาดการณ์ และประเมินสถานที่ติดตั้ง"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การออกแบบเครือข่าย (Network Design)**: ออกแบบโครงสร้างเชิงตรรกะและเชิงกายภาพ เลือกอุปกรณ์ กำหนดแผนผัง IP Address และนโยบายความปลอดภัย"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การติดตั้งและตั้งค่าระบบ (Network Implementation / Deployment)**: ติดตั้งฮาร์ดแวร์ เดินสายสัญญาณ ทำการตั้งค่าคอนฟิก (Configuration) และทดสอบระบบ (Commissioning)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การบริหารจัดการและการบำรุงรักษา (Operation and Maintenance - O&M)**: ตรวจสอบสถานะการทำงาน (Monitoring), แก้ไขปัญหาเหตุขัดข้อง (Troubleshooting), สำรองข้อมูลคอนฟิก และจัดการแพตช์ระบบ"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การปรับปรุงและเพิ่มประสิทธิภาพ (Network Optimization)**: วิเคราะห์คอขวด ปรับปรุงนโยบาย QoS และอัปเกรดเทคโนโลยีเพื่อรองรับการเติบโต"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.2 ระบบการรับรองวิชาชีพของ Huawei (Huawei Datacom Certification Portfolio)"
    },
    {
      "type": "paragraph",
      "text": "Huawei ได้วางมาตรฐานการทดสอบและรับรองความรู้ทางด้าน Datacom ออกเป็น 3 ระดับ:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**HCIA-Datacom (Huawei Certified ICT Associate)**: พื้นฐานหลักการทำงานของ Routing & Switching, WLAN, ความปลอดภัยเครือข่าย, การจัดการอุปกรณ์ และพื้นฐาน Network Automation / SDN"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**HCIP-Datacom (Huawei Certified ICT Professional)**: ความรู้ขั้นสูงในการออกแบบ การติดตั้ง และการแก้ปัญหาระบบเครือข่ายระดับองค์กรและเครือข่ายขนาดใหญ่"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**HCIE-Datacom (Huawei Certified ICT Expert)**: ระดับผู้เชี่ยวชาญสูงสุด มีความสามารถในการวางสถาปัตยกรรมเครือข่ายซับซ้อน โซลูชันขั้นสูง และการวิเคราะห์ปัญหาเชิงลึก"
      ]
    },
    {
      "type": "divider"
    }
  ],
  "2": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. บทนำ: กำเนิดของข้อมูลและแอปพลิเคชัน (Applications and Data)"
    },
    {
      "type": "paragraph",
      "text": "ในยุคดิจิทัล การทำงานและชีวิตประจำวันของเราขับเคลื่อนด้วยแอปพลิเคชัน (Applications) หลากหลายรูปแบบ เช่น เว็บเบราว์เซอร์ (Web Browsing), อีเมล (Email), การสตรีมมิ่งวิดีโอ (Video Streaming), และเกมออนไลน์ (Online Gaming) แอปพลิเคชันเหล่านี้ทำหน้าที่แปลงความต้องการของผู้ใช้ให้กลายเป็น **ข้อมูล (Data)**"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1.1 โครงสร้างของข้อมูลดิจิทัล (Digital Data Structure)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**บิต (Bit - Binary Digit)**: หน่วยที่เล็กที่สุดของข้อมูลในระบบดิจิทัล มีค่าได้เพียง 2 สถานะ คือ $0$ หรือ $1$"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**ไบต์ (Byte)**: กลุ่มของบิตขนาด 8 บิต ($1\\text{ Byte} = 8\\text{ bits}$) ซึ่งสามารถแทนค่าอักขระ (Character) ตัวเลข หรือสัญลักษณ์ได้ 256 รูปแบบ ($2^8 = 256$)"
      ]
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "1\\text{ Byte} = 8\\text{ bits} \\implies 2^8 = 256\\text{ patterns}",
      "description": "",
      "variables": []
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**ข้อมูลระดับแอปพลิเคชัน (Application Data)**: ข้อมูลดิบที่ถูกสร้างขึ้นโดยซอฟต์แวร์ เช่น หน้าเว็บ HTML, ไฟล์รูปภาพ JPEG, สตรีมเสียง MP3 หรือไฟล์เอกสาร PDF"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. ความจำเป็นของโมเดลอ้างอิงเครือข่าย (Why Network Reference Models?)"
    },
    {
      "type": "paragraph",
      "text": "ในยุคเริ่มต้นของการสื่อสารข้อมูล แต่ละผู้ผลิตอุปกรณ์คอมพิวเตอร์ (Vendors เช่น IBM, DEC) ต่างพัฒนาระบบสถาปัตยกรรมเครือข่ายแบบปิดเฉพาะตัว (Proprietary Architecture) ทำให้ **อุปกรณ์ต่างค่ายไม่สามารถสื่อสารร่วมกันได้**"
    },
    {
      "type": "paragraph",
      "text": "เพื่อแก้ปัญหานี้ จึงมีการกำหนด **โมเดลอ้างอิงเครือข่าย (Network Reference Model)** ขึ้นมา โดยใช้หลักการ **การแบ่งชั้นการทำงาน (Layering Concept)** ซึ่งมีข้อดีดังนี้:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ความเป็นอิสระและโมดูลาร์ (Modularity & Independence)**: แต่ละเลเยอร์มีขอบเขตหน้าที่เฉพาะตัว การเปลี่ยนแปลงหรืออัปเกรดเทคโนโลยีในเลเยอร์หนึ่งจะไม่ส่งผลกระทบต่อเลเยอร์อื่น"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การทำงานร่วมกันระหว่างผู้ผลิต (Interoperability / Multi-vendor Compatibility)**: ทุกผู้ผลิตสามารถออกแบบฮาร์ดแวร์และซอฟต์แวร์ตามมาตรฐานสากลเดียวกันได้"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ความง่ายในการเรียนรู้และแก้ปัญหา (Simplified Troubleshooting & Learning)**: วิศวกรสามารถวิเคราะห์และระบุจุดบกพร่องของระบบเครือข่ายทีละชั้นได้อย่างเป็นระบบ"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. โมเดลอ้างอิง OSI 7 เลเยอร์ (OSI 7-Layer Reference Model)"
    },
    {
      "type": "paragraph",
      "text": "องค์กรระหว่างประเทศว่าด้วยการมาตรฐาน (ISO - International Organization for Standardization) ได้พัฒนา **โมเดล OSI (Open Systems Interconnection Reference Model)** ขึ้นในปี ค.ศ. 1984 ประกอบด้วย 7 เลเยอร์ โดยเรียงลำดับจากบนลงล่าง ดังนี้:"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| ชั้นที่ (Layer)         | หน้าที่หลัก (Primary Function)                     | ตัวอย่างโปรโตคอล / รูปแบบ  |\n\n+-------------------------+----------------------------------------------------+----------------------------+\n\n| 7. Application Layer    | ให้บริการเชื่อมต่อโดยตรงระหว่างแอปพลิเคชันกับเครือข่าย| HTTP, FTP, DNS, SMTP, Telnet|\n\n| 6. Presentation Layer   | แปลงรูปแบบข้อมูล เข้ารหัส/ถอดรหัส และบีบอัดข้อมูล    | ASCII, JPEG, MPEG, SSL/TLS |\n\n| 5. Session Layer        | สร้าง ควบคุม จัดการ และยุติเซสชันการสื่อสาร         | RPC, NetBIOS, PPTP         |\n\n| 4. Transport Layer      | การส่งข้อมูลแบบ End-to-End, ควบคุม Flow & Error     | TCP, UDP                   |\n\n| 3. Network Layer        | กำหนด Logical Address (IP) และหาเส้นทาง (Routing)   | IP (IPv4/IPv6), ICMP, OSPF |\n\n| 2. Data Link Layer      | ส่งข้อมูลข้ามลิงก์เดียวกัน (Physical Addr - MAC), FCS| Ethernet (802.3), PPP      |\n\n| 1. Physical Layer       | ส่งสัญญาณทางกายภาพ (Bits: 0/1) ผ่านตัวกลาง        | สัญญาณไฟฟ้า, แสง, คลื่นวิทยุ|\n\n+---------------------------------------------------------------------------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.1 รายละเอียดการทำงานของแต่ละชั้นใน OSI Model"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Application Layer (ชั้นประยุกต์)**: ชั้นที่อยู่ใกล้ชิดกับผู้ใช้งานที่สุด ทำหน้าที่เป็นอินเทอร์เฟซให้ซอฟต์แวร์แอปพลิเคชันเรียกใช้บริการเครือข่าย"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Presentation Layer (ชั้นการนำเสนอข้อมูล)**: จัดการรูปแบบการแสดงผลของข้อมูล (Data Formatting/Syntax), การแปลงรหัสภาษา (Character Code Translation เช่น ASCII เป็น EBCDIC), การเข้ารหัสและถอดรหัสเพื่อความปลอดภัย (Encryption/Decryption) และการบีบอัดข้อมูล (Compression)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Session Layer (ชั้นเซสชัน)**: ทำหน้าที่สร้าง (Establish), ดูแลรักษา (Maintain) และยกเลิก (Terminate) เซสชันการสื่อสารระหว่างแอปพลิเคชัน รวมถึงควบคุมทิศทางการสนทนา (Simplex, Half-duplex, Full-duplex) และการใส่ Checkpoint เพื่อกู้คืนเซสชัน"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Transport Layer (ชั้นการขนส่งข้อมูล)**: ให้บริการส่งข้อมูลแบบจุดต่อจุด (End-to-End) จากโฮสต์ต้นทางถึงโฮสต์ปลายทาง ทำหน้าที่แบ่งส่วนข้อมูล (Segmentation), ตรวจสอบข้อผิดพลาด (Error Checking), และควบคุมอัตราการไหลของข้อมูล (Flow Control)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Network Layer (ชั้นเครือข่าย)**: กำหนดแอดเดรสเชิงตรรกะ (Logical Addressing เช่น IP Address) และทำหน้าที่ค้นหาและเลือกเส้นทางที่ดีที่สุด (Routing) เพื่อส่งแพ็กเก็ตข้ามเครือข่ายหลายๆ เน็ตเวิร์ก"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Data Link Layer (ชั้นเชื่อมโยงข้อมูล)**: รับผิดชอบการส่งข้อมูลข้ามลิงก์ทางกายภาพเดียวกัน โดยแบ่งข้อมูลออกเป็นเฟรม (Frames), ใส่หมายเลขแอดเดรสทางกายภาพ (Physical Address / MAC Address), ตรวจสอบความถูกต้องของเฟรมด้วย Frame Check Sequence (FCS)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Physical Layer (ชั้นกายภาพ)**: รับผิดชอบการแปลงบิตดิจิทัล ($0$ และ $1$) ให้กลายเป็นสัญญาณทางกายภาพ (กระแสไฟฟ้า, แสง, คลื่นวิทยุ) และส่งผ่านตัวกลางสื่อสาร"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. โมเดลอ้างอิง TCP/IP (TCP/IP Reference Model)"
    },
    {
      "type": "paragraph",
      "text": "เนื่องจากโมเดล OSI มีโครงสร้างที่ซับซ้อนและมีการกำหนดฟังก์ชันในบางชั้นที่ทับซ้อนกัน ในทางปฏิบัติจริง อินเทอร์เน็ตจึงพัฒนาขึ้นบนพื้นฐานของ **ชุดโปรโตคอล TCP/IP (TCP/IP Protocol Suite)**"
    },
    {
      "type": "diagram",
      "content": "\n      OSI Model (7 Layers)           Standard TCP/IP (4 Layers)     Equivalent TCP/IP (5 Layers)\n\n   +-------------------------+      +-------------------------+      +-------------------------+\n\n   | 7. Application Layer    | \\                                    | 5. Application Layer    |\n\n   | 6. Presentation Layer   | ---  | 4. Application Layer    | ---> |    (HTTP, DNS, FTP)     |\n\n| 5. Session Layer        | /    |                         |      +-------------------------+  +-------------------------+      +-------------------------+      | 4. Transport Layer      |\n\n   | 4. Transport Layer      | ---> | 3. Transport Layer      | ---> |    (TCP, UDP)           |\n\n   +-------------------------+      +-------------------------+      +-------------------------+\n\n   | 3. Network Layer        | ---> | 2. Internet Layer       | ---> | 3. Network Layer (IP)   |\n\n   +-------------------------+      +-------------------------+      +-------------------------+\n\n   | 2. Data Link Layer      | \\    | 1. Network Access Layer | ---> | 2. Data Link Layer (MAC)|\n\n   +-------------------------+  --- |    (Host-to-Network)    |      +-------------------------+\n\n   | 1. Physical Layer       | /    |                         | ---> | 1. Physical Layer (Bits)|\n\n   +-------------------------+      +-------------------------+      +-------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.1 ทำไมหลักสูตร Datacom จึงใช้โมเดล TCP/IP แบบ 5 เลเยอร์ (Equivalent TCP/IP Model)?"
    },
    {
      "type": "paragraph",
      "text": "โมเดล TCP/IP มาตรฐานดั้งเดิม (RFC 1122) รวม Data Link Layer และ Physical Layer เข้าไว้ด้วยกันเป็น **Network Access Layer** แต่ในการออกแบบและสร้างมาตรฐานเครือข่ายจริง (เช่น มาตรฐาน IEEE 802.3 Ethernet หรือ IEEE 802.11 Wi-Fi) มีการแยกส่วนการทำงานของระดับสัญญาณฮาร์ดแวร์ (Physical) ออกจากส่วนการควบคุมการเข้าถึงตัวกลางและการจัดรูปแบบเฟรม (Data Link) อย่างชัดเจน"
    },
    {
      "type": "paragraph",
      "text": "ดังนั้น อุตสาหกรรมระบบเครือข่ายจึงนิยมใช้ **Equivalent TCP/IP Model (โมเดล 5 ชั้น)** เพื่อให้การอธิบายหลักการทำงานสอดคล้องกับฮาร์ดแวร์จริงมากที่สุด"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. กระบวนการแคปซูลข้อมูลและการถอดรหัส (Data Encapsulation and De-encapsulation)"
    },
    {
      "type": "paragraph",
      "text": "การสื่อสารข้อมูลผ่านเครือข่ายต้องผ่านกระบวนการบรรจุข้อมูลลงในซองจดหมายทีละชั้น ณ ฝั่งผู้ส่ง เรียกว่า **Data Encapsulation** และกระบวนการแกะซองจดหมายทีละชั้น ณ ฝั่งผู้รับ เรียกว่า **Data De-encapsulation**"
    },
    {
      "type": "diagram",
      "content": "\n[ผู้ส่ง: Sender Host]                                                [ผู้รับ: Receiver Host]\n\n====================                                                ======================\n\nApplication Data                                                    Application Data\n\n|                                                                   ^  v [เพิ่ม Transport Header]                                           | [ถอด Transport Header]  +-----------+------------------+                                    +-----------+------------------+  | TH (Port) | Application Data | [Segment / Datagram]               | TH (Port) | Application Data |\n\n+-----------+------------------+                                    +-----------+------------------+\n\n|                                                                   ^  v [เพิ่ม Network Header]                                             | [ถอด Network Header]  +-----------+-----------+------------------+                        +-----------+-----------+------------------+  | NH (IP)   | TH (Port) | Application Data | [Packet]               | NH (IP)   | TH (Port) | Application Data |\n\n+-----------+-----------+------------------+                        +-----------+-----------+------------------+\n\n|                                                                   ^  v [เพิ่ม Data Link Header & Trailer]                                 | [ถอด Data Link Header & FCS]  +-----------+-----------+-----------+------------------+-----------+ +-----------+-----------+-----------+------------------+-----------+  | DLH (MAC) | NH (IP)   | TH (Port) | Application Data | FCS (CRC) | | DLH (MAC) | NH (IP)   | TH (Port) | Application Data | FCS (CRC) |\n\n+-----------+-----------+-----------+------------------+-----------+ +-----------+-----------+-----------+------------------+-----------+\n\n| [Frame]                                                           ^  v [แปลงเป็นสัญญาณกายภาพ]                                             | [รับบิตสัญญาณ]  0101011001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101  ```    ### 5.1 ชื่อเรียกของหน่วยข้อมูลในแต่ละระดับ (Protocol Data Unit - PDU)  - **Application Layer PDU**: เรียกว่า **Data / Message (ข้อมูล)**  - **Transport Layer PDU**: เรียกว่า **Segment (เซกเมนต์)** สำหรับ TCP หรือ **Datagram (ดาตาแกรม)** สำหรับ UDP  - **Network Layer PDU**: เรียกว่า **Packet (แพ็กเก็ต)**  - **Data Link Layer PDU**: เรียกว่า **Frame (เฟรม)**  - **Physical Layer PDU**: เรียกว่า **Bits (บิตสัญญาณ $0/1$)**    ---    ## 6. โปรโตคอลสำคัญในแต่ละชั้นของ TCP/IP Suite    ```  +---------------------------------------------------------------------------------------------------+  | Layer           | โปรโตคอลหลัก (Protocols)                                                        |\n\n+-----------------+---------------------------------------------------------------------------------+\n\n| Application     | HTTP (Port 80), HTTPS (Port 443), FTP (Port 20/21), Telnet (Port 23),           |\n\n|                 | SSH (Port 22), DNS (Port 53), DHCP (Port 67/68), SMTP (Port 25)                 |\n\n+-----------------+---------------------------------------------------------------------------------+\n\n| Transport       | TCP (Transmission Control Protocol), UDP (User Datagram Protocol)               |\n\n+-----------------+---------------------------------------------------------------------------------+\n\n| Network         | IPv4, IPv6, ICMP (Internet Control Message Protocol), ARP, OSPF, BGP           |\n\n+-----------------+---------------------------------------------------------------------------------+\n\n| Data Link       | Ethernet II, IEEE 802.3, IEEE 802.1Q (VLAN), PPP, HDLC                          |\n\n+-----------------+---------------------------------------------------------------------------------+\n\n| Physical        | 100BASE-TX, 1000BASE-T, 10GBASE-SR, RJ45, Single-mode/Multi-mode Fiber          |\n\n+-----------------+---------------------------------------------------------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.1 การเปรียบเทียบโปรโตคอลระดับ Transport: TCP vs. UDP"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Overhead}_{\\text{TCP}} \\ge 20\\text{ Bytes}, \\quad \\text{Overhead}_{\\text{UDP}} = 8\\text{ Bytes}",
      "description": "",
      "variables": []
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "7. องค์กรกำหนดมาตรฐานเครือข่ายสากล (Standardization Organizations)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**IETF (Internet Engineering Task Force)**: ผู้พัฒนาและกำหนดมาตรฐานสำหรับชุดโปรโตคอลอินเทอร์เน็ต (TCP/IP) ในรูปแบบของเอกสาร **RFC (Request for Comments)** เช่น RFC 791 (IPv4), RFC 793 (TCP)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**IEEE (Institute of Electrical and Electronics Engineers)**: องค์กรวิชาชีพทางวิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์ ผู้กำหนดมาตรฐาน Physical และ Data Link Layer เช่น ตระกูล **IEEE 802** (IEEE 802.3 Ethernet, IEEE 802.11 Wireless LAN, IEEE 802.1Q VLAN)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ISO (International Organization for Standardization)**: องค์กรระหว่างประเทศผู้พัฒนาโมเดลมาตรฐาน OSI Reference Model"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ITU-T (International Telecommunication Union - Telecommunication Standardization Sector)**: องค์กรชำนัญพิเศษของสหประชาชาติ กำหนดมาตรฐานโทรคมนาคม เช่น ระบบส่งสัญญาณใยแก้วนำแสง (SDH/OTN) และเทคโนโลยีเครือข่ายโทรศัพท์"
      ]
    },
    {
      "type": "divider"
    }
  ],
  "3": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. บทนำ: ระบบปฏิบัติการเครือข่าย VRP (What Is VRP?)"
    },
    {
      "type": "paragraph",
      "text": "**Huawei VRP (Versatile Routing Platform - แพลตฟอร์มการหาเส้นทางอเนกประสงค์)** คือ ระบบปฏิบัติการเครือข่ายที่พัฒนาขึ้นโดย Huawei เพื่อทำหน้าที่เป็นแกนหลักในการควบคุม ขับเคลื่อน และบริหารจัดการอุปกรณ์เครือข่ายทั้งหมดของ Huawei เช่น เราเตอร์ (Routers), สวิตช์ (Switches), ไฟร์วอลล์ (Firewalls) และอุปกรณ์ควบคุมสัญญาณไร้สาย (WLAN AC)"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1.1 วิวัฒนาการของ VRP (Development of VRP)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**VRP 1.X / 2.X**: ยุคแรกเริ่ม เป็นสถาปัตยกรรมแบบรวมศูนย์ (Centralized Architecture) ทำงานบนระบบประมวลผลเดี่ยว"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**VRP 3.X**: รองรับการประมวลผลแบบกระจาย (Distributed Architecture) เพิ่มความเสถียรและประสิทธิภาพ"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**VRP 5.X**: สถาปัตยกรรมแบบ Component-based ที่มีความเสถียรสูงมาก เป็นเวอร์ชันที่ใช้งานอย่างแพร่หลายที่สุดในอุปกรณ์ Campus Network ทั่วไป (เช่น S5700, AR2200)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**VRP 8.X**: สถาปัตยกรรมยุคใหม่ระดับ Multi-core, Multi-threading, และ Cloud-Native ออกแบบมาสำหรับอุปกรณ์ Core Router, High-end Switch และ Data Center ขนาดใหญ่"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. ระบบไฟล์และสื่อบันทึกข้อมูลของอุปกรณ์ (File System & Storage Media)"
    },
    {
      "type": "paragraph",
      "text": "อุปกรณ์เครือข่ายของ Huawei ประกอบด้วยหน่วยความจำและสื่อบันทึกข้อมูลหลายประเภท ซึ่งทำหน้าที่แตกต่างกันในระหว่างการทำงาน:"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| สื่อบันทึกข้อมูล (Storage Media) | คุณสมบัติ (Characteristics)        | ข้อมูลที่จัดเก็บ (Contents)        |\n\n+----------------------------------+------------------------------------+-----------------------------------+\n\n| SDRAM (Synchronous Dynamic RAM)  | หน่วยความจำหลัก ลบเลือนเมื่อดับไฟ  | Running Configuration, ตาราง Routing|\n\n| Flash Memory                     | หน่วยความจำถาวร ไม่ลบเลือนเมื่อดับไฟ| VRP System Software (.cc), Config  |\n\n| NVRAM (Non-Volatile RAM)         | หน่วยความจำถาวรขนาดเล็ก ไม่ลบเลือน  | ข้อมูลระบบ, Log, Boot Parameters   |\n\n| SD Card / USB Drive              | สื่อบันทึกข้อมูลภายนอก ถอดเสียบได้ | สำรองไฟล์ระบบ, อัปเกรด Patch/OS   |\n\n+----------------------------------+------------------------------------+-----------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.1 ไฟล์สำคัญในระบบ VRP"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ไฟล์ระบบปฏิบัติการ (System Software File - นามสกุล `.cc`)**: แพ็กเกจไบนารีของระบบปฏิบัติการ VRP ที่มีฟังก์ชันการทำงาน ไดรเวอร์ และโปรโตคอลทั้งหมด"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ไฟล์การตั้งค่าคอนฟิก (Configuration File - นามสกุล `.cfg` หรือ `.zip`)**: ไฟล์ข้อความที่เก็บคำสั่งการตั้งค่าอุปกรณ์"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Current Configuration (คอนฟิกปัจจุบัน)**: บันทึกอยู่ใน SDRAM มีผลต่อการทำงานของอุปกรณ์ในทันที แต่จะสูญหายหากปิดเครื่องโดยไม่บันทึก"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Saved Configuration (คอนฟิกที่บันทึกแล้ว)**: บันทึกอยู่ใน Flash Memory จะถูกโหลดขึ้นมาใช้งานเมื่อเปิดเครื่องใหม่"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ไฟล์แพตช์ (Patch File - นามสกุล `.pat`)**: ไฟล์แก้ไขบั๊กหรือปรับปรุงความปลอดภัยของ VRP โดยไม่ต้องรีบูตอุปกรณ์ทั้งหมด"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. กระบวนการเริ่มต้นระบบของอุปกรณ์ (Device Initialization Process)"
    },
    {
      "type": "paragraph",
      "text": "เมื่อเปิดสวิตช์จ่ายไฟเข้าสู่อุปกรณ์เครือข่ายของ Huawei อุปกรณ์จะดำเนินการเริ่มต้นระบบตามลำดับ 4 ขั้นตอน ดังนี้:"
    },
    {
      "type": "diagram",
      "content": "\n[1. Hardware Power-On & POST]\n\n               |\n\n               v\n\n[2. Run BootROM Software] -----> ตรวจสอบและตั้งค่าฮาร์ดแวร์พื้นฐาน\n\n               |\n\n               v\n\n[3. Load VRP System Software] --> ค้นหาและโหลดไฟล์ .cc จาก Flash Memory เข้าสู่ SDRAM\n\n               |\n\n               v\n\n[4. Load Configuration File] ---> โหลดไฟล์ startup saved-configuration มาเป็น Current Configuration\n"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Power-On Self-Test (POST)**: ชิปฮาร์ดแวร์ตรวจสอบความสมบูรณ์ของอุปกรณ์วงจรหลัก เช่น CPU, SDRAM, และพอร์ตเชื่อมต่อ"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**รันโปรแกรม BootROM / BootLoader**: ตรวจสอบบัสและอุปกรณ์จัดเก็บข้อมูลเพื่อเตรียมโหลด OS"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**โหลดไฟล์ระบบ VRP (Loading System Image)**: โหลดไฟล์ `.cc` ที่ระบุไว้ในระบบเข้าสู่ SDRAM แล้วเริ่มรันเคอร์เนลระบบ"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**โหลดไฟล์คอนฟิกเริ่มต้น (Loading Startup Config)**: โหลดการตั้งค่าที่บันทึกไว้ใน Flash (`vrpcfg.zip` หรือชื่อที่กำหนด) ขึ้นมาเป็น Running Configuration หากไม่พบไฟล์คอนฟิก อุปกรณ์จะเริ่มทำงานด้วยค่าดีฟอลต์จากโรงงาน (Factory Defaults)"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. รูปแบบการเชื่อมต่อและบริหารจัดการอุปกรณ์ (Device Management Modes)"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| รูปแบบการเชื่อมต่อ (Management Mode) | ช่องทางการเชื่อมต่อ (Channel)   | ความปลอดภัย (Security Level)     |\n\n+--------------------------------------+---------------------------------+----------------------------------+\n\n| 1. Local Management (Console Port)   | สาย Console (RJ45/RS232/MiniUSB)| สูงมาก (Out-of-band ไม่ผ่านเน็ต) |\n\n| 2. Remote Management (STelnet / SSH) | ผ่านเครือข่าย IP (Port 22)      | สูงมาก (เข้ารหัสข้อมูลสมบูรณ์)    |\n\n| 3. Remote Management (Telnet)        | ผ่านเครือข่าย IP (Port 23)      | ต่ำ (ส่งข้อมูลแบบ Plaintext)     |\n\n| 4. Web-based Management (HTTP/HTTPS) | ผ่านเว็บเบราว์เซอร์ (Port 80/443)| ปานกลาง-สูง (สะดวกต่อผู้ใช้ทั่วไป)|\n\n+---------------------------------------------------------------------------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.1 ชนิดของอินเทอร์เฟซผู้ใช้งานใน VRP (User Interfaces)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Console User Interface (`console 0`)**: ช่องทางเชื่อมต่อโดยตรงผ่านพอร์ต Console ทางกายภาพ เหมาะสำหรับการติดตั้งค่าคอนฟิกในครั้งแรก (Initial Configuration) หรือการกู้คืนระบบเมื่อเครือข่ายล่ม"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Virtual Teletype Interfaces (`vty 0 4` หรือ `vty 0 14`)**: ช่องทางเทอร์มินัลเสมือนสำหรับการล็อกอินเข้ามาทางไกลผ่านเครือข่าย (Remote In-band Management) เช่น ผ่าน Telnet หรือ SSH"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. สถาปัตยกรรมมุมมองคำสั่งของ VRP CLI (Command Views)"
    },
    {
      "type": "paragraph",
      "text": "อินเทอร์เฟซบรรทัดคำสั่ง (Command Line Interface - CLI) ของ VRP ถูกจัดโครงสร้างเป็น **มุมมองคำสั่ง (Command Views)** แบบลำดับชั้น เพื่อจัดระเบียบคำสั่งตามขอบเขตหน้าที่:"
    },
    {
      "type": "diagram",
      "content": "\n                  <Huawei> (User View: ดูสถานะทั่วไป, ตรวจสอบระบบ)\n\n                     |\n\n            [system-view] คำสั่งสลับเข้า System View\n\n                     v\n\n                  [Huawei] (System View: กำหนดค่าคอนฟิกระดับโกลบอล)\n\n                 /           [interface GigabitEthernet0/0/1]     [ospf 1]\n\n   (Interface View: กำหนดค่าพอร์ต)       (Protocol View: กำหนดค่า OSPF)\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.1 การสลับระหว่าง Command Views"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**เข้าสู่ System View**: พิมพ์ `system-view` จาก User View"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**กลับสู่ View ชั้นบนก่อนหน้า**: พิมพ์ `quit`"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**กลับสู่ User View ทันทีจากทุกระดับชั้น**: กดคีย์ลัด `Ctrl + Z` หรือพิมพ์ `return`"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.2 ระดับสิทธิ์ของคำสั่งและผู้ใช้งาน (Command Levels & User Privilege Levels)"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. ฟีเจอร์ช่วยเหลือและคีย์ลัดในการใช้งาน VRP CLI"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การเติมเต็มคำสั่งอัตโนมัติ (Tab Key Completion)**: กดปุ่ม `Tab` เพื่อให้ระบบเติมเต็มคีย์เวิร์ดของคำสั่งโดยอัตโนมัติ"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ระบบช่วยเหลือตามบริบท (Context-sensitive Help `?`)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "พิมพ์ `?` เดี่ยวๆ เพื่อดูรายการคำสั่งทั้งหมดที่สามารถใช้งานได้ใน View ปัจจุบัน"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "พิมพ์ `dis?` เพื่อดูคำสั่งทั้งหมดที่ขึ้นต้นด้วย \"dis\""
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "พิมพ์ `display ?` เพื่อดูพารามิเตอร์ตัวถัดไปที่สามารถใส่ได้หลังคำว่า display"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**คีย์ลัดสำหรับการเลื่อนเคอร์เซอร์และควบคุม (Shortcut Keys)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`Ctrl + A`: เลื่อนเคอร์เซอร์ไปที่จุดเริ่มต้นของบรรทัด"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`Ctrl + E`: เลื่อนเคอร์เซอร์ไปที่จุดสิ้นสุดของบรรทัด"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`Ctrl + C`: ยกเลิกการทำงานของคำสั่งปัจจุบัน (เช่น หยุด ping หรือ tracert)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`Ctrl + Z`: ย้อนกลับสู่ User View (`<Huawei>`) ในทันที"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**คำสั่งยกเลิก/ลบคอนฟิก (`undo` Command)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "การลบหรือยกเลิกการตั้งค่าใดๆ ใน VRP ทำได้โดยการเติมคำว่า `undo` ไว้หน้าคำสั่งนั้น เช่น `undo shutdown` (เปิดพอร์ต), `undo ip address` (ลบ IP Address)"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "7. ตารางคำสั่งพื้นฐานที่จำเป็นในการบริหารจัดการ VRP"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------+-------------------------------------------------------------+\n\n| คำสั่ง (Command)                            | การทำงานและวัตถุประสงค์ (Function & Purpose)                |\n\n+---------------------------------------------+-------------------------------------------------------------+\n\n| <Huawei> system-view                        | สลับเข้าสู่ System View เพื่อเริ่มตั้งค่าคอนฟิก            |\n\n| [Huawei] sysname Switch-Core-01             | เปลี่ยนชื่ออุปกรณ์ (Host Name) เป็น Switch-Core-01          |\n\n| [Huawei] display version                    | แสดงเวอร์ชัน VRP, ข้อมูลสเปกฮาร์ดแวร์, และระยะเวลา Uptime    |\n\n| [Huawei] display current-configuration      | แสดงการตั้งค่าคอนฟิกปัจจุบันที่กำลังทำงานอยู่ใน SDRAM        |\n\n| [Huawei] display saved-configuration        | แสดงการตั้งค่าคอนฟิกที่บันทึกไว้ใน Flash Memory              |\n\n| <Huawei> save                               | บันทึก Current Configuration ลงสู่ Flash Memory             |\n\n| <Huawei> reset saved-configuration          | ลบไฟล์คอนฟิกใน Flash Memory เพื่อคืนค่าโรงงาน                |\n\n| <Huawei> reboot                             | สั่งรีสตาร์ตอุปกรณ์                                         |\n\n| [Huawei] display ip interface brief         | แสดงสรุปสถานะพอร์ตและ IP Address ทั้งหมด                    |\n\n| [Huawei] display interface description      | แสดงคำอธิบายรายละเอียดที่ผูกไว้กับพอร์ตต่างๆ               |\n\n| [Huawei-GigabitEthernet0/0/1] shutdown      | ปิดการทำงานของพอร์ตทางกายภาพ (Administratively Down)        |\n\n| [Huawei-GigabitEthernet0/0/1] undo shutdown | เปิดการทำงานของพอร์ตทางกายภาพ                               |\n\n+---------------------------------------------+-------------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    }
  ],
  "4": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. บทนำและวิวัฒนาการของเทคโนโลยีอีเทอร์เน็ต (Ethernet Overview)"
    },
    {
      "type": "paragraph",
      "text": "**อีเทอร์เน็ต (Ethernet)** เป็นเทคโนโลยีเครือข่ายเฉพาะที่ (LAN) ที่ได้รับการยอมรับและใช้งานแพร่หลายที่สุดในโลก ได้รับการพัฒนาและกำหนดมาตรฐานสากลโดยคณะทำงาน **IEEE 802.3**"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| มาตรฐาน (Standard) | ชื่อทางการ (Name)     | อัตราความเร็ว (Speed) | ตัวกลางสื่อสาร (Medium)             |\n\n+--------------------+-----------------------+-----------------------+-------------------------------------+\n\n| IEEE 802.3         | Standard Ethernet     | 10 Mbps               | สายทองแดงคู่บิดเกลียว (10BASE-T)   |\n\n| IEEE 802.3u        | Fast Ethernet         | 100 Mbps              | สายคู่บิดเกลียว Cat5 (100BASE-TX)  |\n\n| IEEE 802.3z / ab   | Gigabit Ethernet (GE) | 1,000 Mbps (1 Gbps)   | ใยแก้วนำแสง / สาย Cat5e/6 (1000BASE-T)|\n\n| IEEE 802.3ae       | 10 Gigabit Ethernet   | 10,000 Mbps (10 Gbps) | ใยแก้วนำแสง Single/Multi-mode       |\n\n| IEEE 802.3ba       | 40GE / 100GE          | 40 Gbps / 100 Gbps    | ใยแก้วนำแสงประสิทธิภาพสูงใน Data Center|\n\n+---------------------------------------------------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. การเปรียบเทียบแนวคิดสำคัญ: Collision Domain vs. Broadcast Domain"
    },
    {
      "type": "paragraph",
      "text": "ความเข้าใจความแตกต่างระหว่าง Collision Domain และ Broadcast Domain เป็นหัวใจสำคัญสูงสุดในการออกแบบเครือข่ายสวิตชิ่ง:"
    },
    {
      "type": "diagram",
      "content": "\n(1) Collision Domain (โดเมนการชนกันของสัญญาณ)\n\n    [PC1] ----\n\n    [PC2] ----- [ Hub / Repeater ]  <--- อุปกรณ์ทั้งหมดแชร์สายสัญญาณเดียวกัน หากส่งพร้อมกันจะชนกัน!\n\n    [PC3] ----/\n\n\n\n(2) Micro-segmentation with Switch (สลับสายสัญญาณอิสระ)\n\n    [PC1] <---> [ Port 1 |        ]\n\n    [PC2] <---> [ Port 2 | Switch ] <--- แต่ละพอร์ตเป็น 1 Collision Domain แยกขาดจากกันโดยสมบูรณ์\n\n    [PC3] <---> [ Port 3 |        ]      (ทำงานแบบ Full-Duplex ไม่มีการชนของสัญญาณ)\n\n\n\n(3) Broadcast Domain (ขอบเขตการแพร่กระจายสัญญาณบรอดคาสต์)\n\n    +-----------------------------------------------+\n\n    |  [PC1] ---- [ Switch 1 ] ---- [ PC2 ]         |\n\n|                   |                           | <--- ทั้งหมดนี้อยู่ใน 1 Broadcast Domain เดียวกัน!  |             [ Switch 2 ] ---- [ PC3 ]         |\n\n    +-----------------------------------------------+\n\n                            |\n\n                       [ Router ] <--- เราเตอร์แบ่งแยก Broadcast Domain ออกจากกัน\n\n                            |\n\n    +-----------------------------------------------+\n\n|             [ Switch 3 ] ---- [ PC4 ]         | <--- Broadcast Domain ใหม่  +-----------------------------------------------+  ```    ### 2.1 ตารางเปรียบเทียบ Collision Domain vs. Broadcast Domain    | คุณลักษณะ (Feature) | คอลลิชันโดเมน (Collision Domain) | บรอดคาสต์โดเมน (Broadcast Domain) |\n\n| :--- | :--- | :--- |\n\n| **นิยาม (Definition)** | ขอบเขตทางกายภาพที่เมื่อมีอุปกรณ์ 2 ตัวส่งข้อมูลพร้อมกัน สัญญาณไฟฟ้าจะเกิดการชนกัน (Collision) | ขอบเขตทางตรรกะที่เมื่อมีอุปกรณ์ส่งเฟรมบรอดคาสต์ อุปกรณ์ทุกตัวในขอบเขตนั้นจะได้รับเฟรมดังกล่าว |\n\n| **อุปกรณ์ที่ใช้แบ่งแยกขอบเขต** | **สวิตช์ (Switch)** และ **บริดจ์ (Bridge)** (แต่ละพอร์ตของสวิตช์คือ 1 Collision Domain) | **เราเตอร์ (Router)** และการแบ่ง **VLAN บนสวิตช์** |\n\n| **ผลกระทบหากขอบเขตมีขนาดใหญ่เกินไป** | เกิดการชนกันของข้อมูลบ่อยครั้ง ประสิทธิภาพการรับส่งข้อมูลของทั้งเครือข่ายลดลงอย่างรุนแรง | เปลืองแบนด์วิดท์และ CPU ของอุปกรณ์ปลายทางทุกตัวในการประมวลผลบรอดคาสต์ (เสี่ยงต่อ Broadcast Storm) |\n\n\n\n### 2.2 กลไก CSMA/CD และโหมดการส่งสัญญาณ (Duplex Modes)\n\n- **Half-Duplex (กึ่งสองทิศทาง)**: อุปกรณ์สามารถรับหรือส่งข้อมูลได้ทีละขณะเดียว ไม่สามารถส่งพร้อมกันได้ ต้องใช้โปรโตคอล **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)** ในการคอยฟังสัญญาณก่อนส่ง และหยุดสุ่มเวลารอเมื่อตรวจพบการชนกัน\n\n- **Full-Duplex (สองทิศทางพร้อมกัน)**: อุปกรณ์สามารถส่งและรับข้อมูลได้พร้อมกันในเวลาเดียวกันผ่านคู่สายสัญญาณที่แยกจากกัน ไม่เกิดการชนกันของข้อมูล (Collision-Free) และไม่ต้องใช้งาน CSMA/CD อีกต่อไป ซึ่งเป็นโหมดมาตรฐานของพอร์ตสวิตช์สมัยใหม่\n\n\n\n---\n\n\n\n## 3. โครงสร้างและการจำแนกประเภทของ MAC Address (MAC Address Architecture)\n\n\n\n**MAC Address (Media Access Control Address)** หรือ Physical Address คือ หมายเลขประจำตัวทางกายภาพระดับฮาร์ดแวร์ของอุปกรณ์เครือข่าย (NIC - Network Interface Card) มีขนาดความยาว **48 บิต (6 ไบต์)** เขียนแสดงผลด้วยเลขฐานสิบหก (Hexadecimal) 12 หลัก (เช่น `00-e0-fc-12-34-56` หรือ `00e0-fc12-3456`)\n\n\n\n$$ \\text{Total MAC Space} = 2^{48} = 281{,}474{,}976{,}710{,}656 \\approx 2.81 \\times 10^{14}\\text{ addresses} $$\n\n\n"
    },
    {
      "type": "paragraph",
      "text": "+-------------------------------------------------------+"
    },
    {
      "type": "paragraph",
      "text": "+---------------------------+---------------------------+"
    },
    {
      "type": "paragraph",
      "text": "+---------------------------+---------------------------+"
    },
    {
      "type": "paragraph",
      "text": "+-----------+-----------+---------------+---------------+------------+-----------------------+-----------+"
    },
    {
      "type": "diagram",
      "content": "\n\n\n$$ \\text{Ethernet II Frame Size} = \\text{Header}(14\\text{B}) + \\text{Payload}(46 \\sim 1500\\text{B}) + \\text{FCS}(4\\text{B}) = [64, 1518]\\text{ Bytes} $$\n\n\n\n1. **Preamble (7 ไบต์)**: ลำดับสัญญาณบิตสลับ `10101010` เพื่อซิงโครไนซ์สัญญาณนาฬิกาของภาครับ\n\n2. **SFD (Start Frame Delimiter - 1 ไบต์)**: ลำดับบิต `10101011` เพื่อระบุจุดเริ่มต้นของเนื้อหาเฟรม\n\n3. **Destination MAC (6 ไบต์)**: หมายเลข MAC Address ของเครื่องปลายทาง\n\n4. **Source MAC (6 ไบต์)**: หมายเลข MAC Address ของเครื่องต้นทาง\n\n5. **Type / EtherType (2 ไบต์)**: ระบุชนิดของโปรโตคอลใน Network Layer ที่บรรจุอยู่ข้างใน เช่น:\n\n   - `0x0800` = IPv4 Protocol\n\n   - `0x0806` = ARP (Address Resolution Protocol)\n\n   - `0x86DD` = IPv6 Protocol\n\n6. **Data / Payload (46 ถึง 1,500 ไบต์)**: ข้อมูลจากชั้นบน (ขนาดขั้นต่ำ $46\\text{ Bytes}$ หากไม่พอจะเติม Padding ให้ครบ)\n\n7. **FCS (Frame Check Sequence - 4 ไบต์)**: รหัสตรวจสอบความถูกต้องของข้อมูลโดยใช้อัลกอริทึม **CRC-32 (Cyclic Redundancy Check)** หากผู้รับคำนวณแล้วไม่ตรงจะดรอปเฟรมทิ้งทันที\n\n\n\n---\n\n\n\n## 5. หลักการทำงานของสวิตช์เลเยอร์ 2 (Layer 2 Switching Principles)\n\n\n\nสวิตช์ทำงานโดยการเก็บรักษาและอ้างอิงข้อมูลในตาราง **MAC Address Table (หรือ CAM Table)** ซึ่งจับคู่ระหว่างหมายเลข MAC Address, พอร์ตทางกายภาพ (Port) และ VLAN\n\n\n\n### 5.1 พฤติกรรมการจัดการเฟรม 3 รูปแบบของสวิตช์ (Three Frame Processing Behaviors)\n\n\n"
    },
    {
      "type": "paragraph",
      "text": "+---------------------------------------------------------------------------------------------------+"
    },
    {
      "type": "paragraph",
      "text": "+------------------------+---------------------------------------------------+------------------------------+"
    },
    {
      "type": "paragraph",
      "text": "+------------------------+---------------------------------------------------+------------------------------+"
    },
    {
      "type": "paragraph",
      "text": "+------------------------+---------------------------------------------------+------------------------------+"
    },
    {
      "type": "paragraph",
      "text": "+------------------------+---------------------------------------------------+------------------------------+"
    },
    {
      "type": "diagram",
      "content": "\n\n\n### 5.2 กลไกการเรียนรู้ตาราง MAC Address (MAC Learning & Aging Process)\n\n1. **การเรียนรู้ Source MAC (Source MAC Learning)**: เมื่อมีเฟรมส่งเข้ามาที่พอร์ตใด สวิตช์จะตรวจสอบหมายเลข **Source MAC** ในเฟรมนั้น หากยังไม่มีในตาราง สวิตช์จะบันทึกคู่ของ `{Source MAC, Port, VLAN}` ลงในตาราง MAC Address Table พร้อมเริ่มนับเวลา **Aging Timer**\n\n2. **การค้นหา Destination MAC (Destination MAC Lookup)**: สวิตช์จะตรวจสอบหมายเลข **Destination MAC** ในตาราง:\n\n   - หากพบ และพอร์ตปลายทางไม่ใช่พอร์ตเดิม $\\r\\to $ ทำการ **Forwarding**\n\n   - หากไม่พบ $\\r\\to $ ทำการ **Flooding**\n\n3. **กระบวนการลบรายการที่หมดอายุ (Aging Mechanism)**: รายการในตาราง MAC จะมีตัวนับเวลาถอยหลัง (Aging Timer ค่าดีฟอลต์คือ **300 วินาที** หรือ $5\\text{ นาที}$) หากไม่มีทราฟฟิกจากอุปกรณ์นั้นส่งเข้ามาอีกภายใน 300 วินาที รายการดังกล่าวจะถูกลบออกจากตารางโดยอัตโนมัติ เพื่อป้องกันการอ้างอิงพอร์ตผิดพลาดเมื่อมีการย้ายตำแหน่งเครื่อง\n\n\n\n---\n\n\n\n## 6. เจาะลึกกระบวนการรับส่งข้อมูลภายในเน็ตเวิร์กเดียวกันตั้งแต่ต้นจนจบ (Intra-Subnet End-to-End Flow)\n\n\n\nสมมุติสถานการณ์: **PC1 (`192.168.1.1`, MAC-A)** ต้องการส่งข้อมูลหา **PC2 (`192.168.1.2`, MAC-B)** ผ่านสวิตช์ โดยที่ตาราง ARP ของ PC1 และตาราง MAC ของสวิตช์ยังว่างเปล่า:\n\n\n"
    },
    {
      "type": "paragraph",
      "text": "[PC1: 192.168.1.1 / MAC-A] <---Port 1---> [ Switch ] <---Port 2---> [PC2: 192.168.1.2 / MAC-B]"
    },
    {
      "type": "diagram",
      "content": "\n\n\n1. **PC1 ตรวจสอบ Subnet**: PC1 คำนวณพบว่า `192.168.1.2` อยู่ใน Subnet เดียวกัน จึงเตรียมส่งข้อมูลโดยตรง แต่ PC1 ยังไม่ทราบ MAC Address ของ PC2\n\n2. **PC1 ส่ง ARP Request**:\n\n   - PC1 สร้างแพ็กเก็ต ARP Request: *\"ใครมี IP 192.168.1.2 กรุณาบอก MAC ให้ 192.168.1.1 ทราบ\"*\n\n   - ห่อหุ้มใน Ethernet Frame: `Src MAC = MAC-A`, `Dst MAC = FF-FF-FF-FF-FF-FF` (Broadcast)\n\n3. **สวิตช์ประมวลผลเฟรม ARP Request**:\n\n   - สวิตช์รับเฟรมเข้ามาทาง **Port 1** $\\r\\to $ สวิตช์เรียนรู้ทันทีว่า **MAC-A อยู่ที่ Port 1**\n\n   - สวิตช์ตรวจสอบ Dst MAC พบว่าเป็น Broadcast (`FF-FF-FF-FF-FF-FF`) $\\r\\to $ สวิตช์ทำการ **Flooding** ส่งสำเนาเฟรมออกทาง Port 2 (และพอร์ตอื่นๆ ทั้งหมด)\n\n4. **PC2 ประมวลผลและตอบกลับ (ARP Reply)**:\n\n   - PC2 ได้รับเฟรม ตรวจสอบพบว่า Target IP ตรงกับตนเอง (`192.168.1.2`)\n\n   - PC2 บันทึก `{192.168.1.1 -> MAC-A}` ลงในตาราง ARP Cache ของตน\n\n   - PC2 สร้างแพ็กเก็ต ARP Reply: *\"ฉัน 192.168.1.2 มี MAC คือ MAC-B\"*\n\n   - ห่อหุ้มใน Ethernet Frame แบบ Unicast: `Src MAC = MAC-B`, `Dst MAC = MAC-A` ส่งออกไปที่พอร์ตของตน\n\n5. **สวิตช์ประมวลผลเฟรม ARP Reply**:\n\n   - สวิตช์รับเฟรมเข้ามาทาง **Port 2** $\\r\\to $ สวิตช์เรียนรู้ทันทีว่า **MAC-B อยู่ที่ Port 2**\n\n   - สวิตช์ตรวจสอบ Dst MAC พบว่าเป็น `MAC-A` ซึ่งมีบันทึกในตารางแล้วว่าอยู่ที่ **Port 1**\n\n   - สวิตช์ทำการ **Forwarding** ส่งเฟรมตรงออกทาง Port 1 เท่านั้น (ไม่มีการ Flooding)\n\n6. **การส่งข้อมูลจริงแบบ Unicast (Data Forwarding)**:\n\n   - PC1 ได้รับ ARP Reply และบันทึก `{192.168.1.2 -> MAC-B}` ลงใน ARP Cache\n\n   - ต่อจากนี้ ข้อมูลแอปพลิเคชันทั้งหมดระหว่าง PC1 และ PC2 จะถูกห่อหุ้มด้วย Unicast Frame และสวิตช์จะทำการ Forwarding แบบ Unicast ระหว่าง Port 1 และ Port 2 อย่างมีประสิทธิภาพสูงสุด\n\n\n\n---\n\n"
    }
  ],
  "5": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. บทนำและปัญหาของเครือข่ายสวิตชิ่งแบบดั้งเดิม (Issues of Traditional Flat Ethernet)"
    },
    {
      "type": "paragraph",
      "text": "ในเครือข่ายอีเทอร์เน็ตแบบดั้งเดิม (Traditional Flat Switched Network) พอร์ตทั้งหมดบนสวิตช์จะอยู่ใน **Broadcast Domain เดียวกัน**:"
    },
    {
      "type": "diagram",
      "content": "\n[Traditional Flat Ethernet - 1 ใหญ่โต Broadcast Domain]\n\n+-------------------------------------------------------------------------------+\n\n|  [PC-HR]          [PC-Finance]          [PC-Marketing]          [PC-Guest]    |\n\n|     |                  |                      |                     |         |\n\n|     +------------------+--------- [Switch] ---+---------------------+         |\n\n+-------------------------------------------------------------------------------+\n\n ปัญหา: 1. Broadcast Storm ท่วมระบบ       2. ขาดความปลอดภัย (ดักฟังข้ามแผนกได้)\n\n       3. ทราฟฟิกขยะสูญเสียแบนด์วิดท์     4. จัดการสิทธิ์และการควบคุมได้ยากมาก\n"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**พายุบรอดคาสต์ (Broadcast Storms)**: เมื่อมีอุปกรณ์ส่งเฟรมบรอดคาสต์ (เช่น ARP Request, DHCP Discover) สวิตช์จะทำการ Flooding เฟรมไปยังทุกพอร์ต ทำให้อุปกรณ์ปลายทางทุกตัวต้องเสียเวลา CPU ประมวลผล"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ความเสี่ยงด้านความมั่นคงปลอดภัย (Security Risks)**: อุปกรณ์ทุกเครื่องในองค์กรสามารถมองเห็นและดักจับแพ็กเก็ต (Packet Sniffing) ของกันและกันได้ เช่น พนักงานทั่วไปสามารถดักฟังข้อมูลการเงินหรือบุคคลได้"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ความยุ่งยากในการบริหารจัดการ (Management Complexity)**: ไม่สามารถกำหนดนโยบายความปลอดภัยและควบคุมการเข้าถึงตามโครงสร้างแผนกขององค์กรได้"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. นิยามและประโยชน์ของ VLAN (What Is VLAN?)"
    },
    {
      "type": "paragraph",
      "text": "**VLAN (Virtual Local Area Network - เครือข่ายเฉพาะที่เสมือน)** คือ เทคโนโลยีระดับ **Data Link Layer (Layer 2)** ที่ทำการ **แบ่งแยก Broadcast Domain ทางกายภาพออกเป็นหลายๆ Broadcast Domain ทางตรรกะ (Logical Segmentation)** บนสวิตช์ตัวเดียวกันหรือระหว่างสวิตช์หลายตัว"
    },
    {
      "type": "diagram",
      "content": "\n[VLAN Segmentation - แยก Broadcast Domain ทางตรรกะ]\n\n+-------------------------------------------------------------------------------+\n\n|  [VLAN 10: ฝ่ายบุคคล (HR)]                [VLAN 20: ฝ่ายการเงิน (Finance)]     |\n\n|   - Broadcast Domain 1                     - Broadcast Domain 2               |\n\n|   - IP: 192.168.10.0/24                    - IP: 192.168.20.0/24              |\n\n+-------------------------------------------------------------------------------+\n\n                                  |\n\n                           [ Layer 2 Switch ]\n\n                                  |\n\n              * อุปกรณ์ใน VLAN ต่างกัน ไม่สามารถสื่อสารกันได้ใน Layer 2 *\n\n              * ต้องส่งต่อผ่าน Layer 3 Routing (Router / L3 Switch) เท่านั้น *\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.1 ประโยชน์หลักของ VLAN (VLAN Advantages)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**จำกัดขอบเขตบรอดคาสต์ (Broadcast Containment)**: บรอดคาสต์จะถูกส่งต่อเฉพาะภายใน VLAN เดียวกันเท่านั้น ไม่รบกวน VLAN อื่น"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**เพิ่มความมั่นคงปลอดภัย (Enhanced Security)**: แยกทราฟฟิกของแต่ละแผนกออกจากกันอย่างเด็ดขาด"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**ความยืดหยุ่นในการจัดกลุ่ม (Organizational Flexibility)**: จัดกลุ่มผู้ใช้งานตามฟังก์ชันงานหรือโปรเจกต์ได้โดยไม่ต้องย้ายตำแหน่งโต๊ะทำงานหรือเดินสายใหม่"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**ประหยัดค่าใช้จ่าย (Cost Reduction)**: สวิตช์ตัวเดียวสามารถแบ่งเป็นหลายเน็ตเวิร์กเสมือนได้โดยไม่ต้องซื้อสวิตช์แยกตามแผนก"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. โครงสร้างของแท็ก 802.1Q (IEEE 802.1Q Tag Architecture)"
    },
    {
      "type": "paragraph",
      "text": "เพื่อให้สวิตช์สามารถแยกแยะได้ว่าเฟรมข้อมูลใดเป็นของ VLAN ใด มาตรฐาน **IEEE 802.1Q** จึงกำหนดให้มีการแทรก **VLAN Tag ขนาด 4 ไบต์ (32 บิต)** เข้าไประหว่างฟิลด์ Source MAC และฟิลด์ EtherType ของอีเทอร์เน็ตเฟรมดั้งเดิม:"
    },
    {
      "type": "diagram",
      "content": "\n+-----------+-----------+---------------+---------------+-------------------+------------+-------------------+-----------+\n\n| Preamble  | SFD       | D.MAC         | S.MAC         | 802.1Q VLAN Tag   | Type       | Data / Payload    | FCS       |\n\n| (7 Bytes) | (1 Byte)  | (6 Bytes)     | (6 Bytes)     | (4 Bytes / 32b)   | (2 Bytes)  | (42 - 1500 Bytes) | (4 Bytes) |\n\n+-----------+-----------+---------------+---------------+-------------------+------------+-------------------+-----------+\n\n                                                                |\n\n        +-------------------------------------------------------+\n\n        |\n\n        +---------------------+------------+-----------+---------------------+\n\n        | TPID (16 Bits)      | PRI (3b)   | CFI (1b)  | VID (12 Bits)       |\n\n        +---------------------+------------+-----------+---------------------+\n\n        | 0x8100              | 0 - 7      | 0 / 1     | 0 - 4095            |\n\n        +---------------------+------------+-----------+---------------------+\n"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Tagged Frame Size} = \\text{Standard Frame}[64, 1518]\\text{B} + \\text{VLAN Tag}(4\\text{B}) = [68, 1522]\\text{ Bytes}",
      "description": "",
      "variables": []
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**TPID (Tag Protocol Identifier - 16 บิต)**: มีค่าคงที่เท่ากับ `**0x8100`** เพื่อระบุว่าเฟรมนี้เป็นเฟรมที่มีการแท็ก 802.1Q VLAN"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**PRI / PCP (Priority / Priority Code Point - 3 บิต)**: ระบุระดับความสำคัญของทราฟฟิกสำหรับจัดการคุณภาพบริการ (QoS CoS - Class of Service) มีค่าตั้งแต่ $0$ (ต่ำสุด) ถึง $7$ ($2^3 = 8$ ระดับ)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**CFI / DEI (Canonical Format Indicator / Drop Eligible Indicator - 1 บิต)**: ระบุรูปแบบความเข้ากันได้หรือความสำคัญในการดรอปเมื่อเครือข่ายแออัด โดยทั่วไปในระบบอีเทอร์เน็ตมีค่าเป็น $0$"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**VID (VLAN Identifier - 12 บิต)**: หมายเลขระบุ VLAN ID มีค่าได้ตั้งแต่ $0$ ถึง $4095$ ($2^{12} = 4096$ ค่า):"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**$0$ และ $4095$**: ค่าสงวน (Reserved) ไม่สามารถนำมาตั้งค่าใช้งานได้"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**$1$**: ค่า **Default VLAN** เริ่มต้นของสวิตช์ทุกพอร์ต"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**$1 \\sim 4094$**: ช่วงหมายเลข VLAN ID ที่สามารถสร้างและกำหนดค่าใช้งานได้จริง ($2^{12} - 2 = 4094$ VLANs)"
      ]
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Usable VLAN IDs} = 2^{12} - 2 = 4094 \\quad (\\text{VLAN } 1 \\sim 4094)",
      "description": "",
      "variables": []
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.2 การจำแนกประเภทของเฟรม: Tagged Frame vs. Untagged Frame"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Untagged Frame**: เฟรมอีเทอร์เน็ตมาตรฐานที่ไม่มี VLAN Tag (ส่งและรับโดยอุปกรณ์ปลายทางทั่วไป เช่น PC, เซิร์ฟเวอร์, พรินเตอร์)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Tagged Frame**: เฟรมอีเทอร์เน็ตที่มี 802.1Q Tag แทรกอยู่ (ส่งระหว่างสวิตช์ หรือระหว่างสวิตช์กับเราเตอร์)"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. วิธีการกำหนด VLAN (VLAN Assignment Methods)"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| วิธีการกำหนด VLAN (Method)    | หลักการทำงาน (Principle)                        | ความเหมาะสมในการใช้งาน   |\n\n+-------------------------------+-------------------------------------------------+-------------------------+\n\n| 1. Interface-based (พอร์ต)    | ผูก VLAN ID เข้ากับพอร์ตสวิตช์ทางกายภาพโดยตรง     | นิยมสูงสุด ง่ายและเสถียรที่สุด|\n\n| 2. MAC Address-based (MAC)    | ตรวจสอบ Source MAC ของอุปกรณ์แล้วแมปเข้า VLAN     | เหมาะกับโฮสต์ที่ย้ายพอร์ตบ่อย |\n\n| 3. IP Subnet-based (ไอพี)     | ตรวจสอบ Source IP Address แล้วแมปเข้า VLAN       | เหมาะกับระบบที่แยกตาม Subnet |\n\n| 4. Protocol-based (โปรโตคอล)  | ตรวจสอบฟิลด์ Protocol ใน Header (เช่น IP, IPX)  | เหมาะกับเครือข่ายหลาย OS  |\n\n| 5. Policy-based (นโยบาย)      | แมปตามเงื่อนไขผสมผสาน (MAC + IP + Port)        | ระบบความปลอดภัยขั้นสูง  |\n\n+-------------------------------+-------------------------------------------------+-------------------------+\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. ชนิดของพอร์ตบนสวิตช์ Huawei และกฎการประมวลผลเฟรม (Port Link Types & Rules)"
    },
    {
      "type": "paragraph",
      "text": "Huawei VRP รองรับพอร์ตเลเยอร์ 2 หลัก 3 ชนิด ซึ่งมีกฎการจัดการแท็ก (**Ingress: รับเข้า** และ **Egress: ส่งออก**) แตกต่างกัน:"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| ชนิดพอร์ต (Port Type) | การใช้งานทั่วไป (Typical Usage) | พฤติกรรม Ingress (รับเข้า) | พฤติกรรม Egress (ส่งออก) |\n\n+-----------------------+---------------------------------+--------------------------+--------------------------+\n\n| Access Port           | ต่อเครื่องผู้ใช้ (PC/Server)    | รับ Untagged -> แปะ PVID | ตรงกับ PVID -> ปลด Tag ออก |\n\n|                       | (รับส่งเฉพาะ Untagged Frame)    | รับ Tagged -> ดรอปทิ้ง   | (ส่งออกแบบ Untagged)     |\n\n+-----------------------+---------------------------------+--------------------------+--------------------------+\n\n| Trunk Port            | เชื่อมระหว่าง Switch-to-Switch  | รับ Untagged -> แปะ PVID | - ตรง PVID -> ปลด Tag ออก |\n\n|                       | หรือ Switch-to-Router           | รับ Tagged -> เช็ก Allow | - ต่าง PVID + อยู่ใน Allow|\n\n|                       | (พกพาได้หลาย VLAN)              | (ถ้าอยู่ใน Allow ให้ผ่าน)|   -> ส่งออกแบบ Tagged     |\n\n+-----------------------+---------------------------------+--------------------------+--------------------------+\n\n| Hybrid Port           | พอร์ตลูกผสมเฉพาะตัวของ Huawei   | รับ Untagged -> แปะ PVID | - อยู่ใน Untagged List   |\n\n| (Default ของ Huawei)  | กำหนด Tagged/Untagged ได้อิสระ | รับ Tagged -> เช็ก Allow |   -> ปลด Tag ออก         |\n\n|                       | ใช้ต่อทั้ง PC, Server, Switch   | (ทั้ง Tagged & Untagged) | - อยู่ใน Tagged List     |\n\n|                       |                                 |                          |   -> คง Tag ส่งออกไป     |\n\n+-----------------------+---------------------------------+--------------------------+--------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.1 นิยามของ PVID (Port Default VLAN ID)"
    },
    {
      "type": "paragraph",
      "text": "**PVID** คือ หมายเลข VLAN เริ่มต้นที่ผูกอยู่กับพอร์ตนั้นๆ เมื่อมี **Untagged Frame** วิ่งเข้ามาที่พอร์ต สวิตช์จะนำหมายเลข PVID นี้ไปตีตราประทับ (แปะแท็ก) ให้กับเฟรมนั้น เพื่อนำไปประมวลผลต่อภายในสวิตช์"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. เจาะลึกตัวอย่างการใช้งานพอร์ต Hybrid (Huawei Unique Feature)"
    },
    {
      "type": "paragraph",
      "text": "กรณีศึกษา: **แผนกบุคคล (VLAN 10)** และ **แผนกการเงิน (VLAN 20)** ต้อง **ไม่สามารถสื่อสารกันเองได้** แต่พนักงานทั้งสองแผนกต้องสามารถ **เข้าถึงเซิร์ฟเวอร์กลาง (VLAN 100)** ได้โดย **ไม่ต้องใช้เราเตอร์ (No Router Required)**"
    },
    {
      "type": "diagram",
      "content": "\n             [ PC-HR (VLAN 10) ]          [ PC-Finance (VLAN 20) ]\n\n                     |                               |\n\n                   Port 1                          Port 2\n\n                     +-------------- [Switch] -------+\n\n                                     |\n\n                                   Port 3\n\n                                     |\n\n                          [ Server-DB (VLAN 100) ]\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.1 การตั้งค่า Hybrid Port สำหรับโจทย์นี้:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Port 1 (ต่อ PC-HR)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`port hybrid pvid vlan 10`"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`port hybrid untagged vlan 10 100` (ยอมให้ทราฟฟิกของ VLAN 10 และ 100 ส่งออกไปหา PC-HR ได้แบบปลดแท็ก)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Port 2 (ต่อ PC-Finance)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`port hybrid pvid vlan 20`"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`port hybrid untagged vlan 20 100` (ยอมให้ทราฟฟิกของ VLAN 20 และ 100 ส่งออกไปหา PC-Finance ได้แบบปลดแท็ก)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Port 3 (ต่อ Server-DB)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`port hybrid pvid vlan 100`"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`port hybrid untagged vlan 10 20 100` (ยอมให้ทราฟฟิกของ VLAN 10, 20 และ 100 ส่งออกไปหา Server ได้แบบปลดแท็ก)"
      ]
    },
    {
      "type": "paragraph",
      "text": "**ผลลัพธ์การทำงาน**:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เมื่อ PC-HR ส่งข้อมูลหา Server: เฟรมเข้ามาที่ Port 1 (แปะแท็ก 10) $\\r\\to $ ส่งออก Port 3 (Port 3 มี VLAN 10 ใน untagged list จึงปลดแท็กส่งให้ Server สำเร็จ)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เมื่อ Server ตอบกลับ PC-HR: เฟรมเข้ามาที่ Port 3 (แปะแท็ก 100) $\\r\\to $ ส่งออก Port 1 (Port 1 มี VLAN 100 ใน untagged list จึงปลดแท็กส่งให้ PC-HR สำเร็จ)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เมื่อ PC-HR พยายามส่งหา PC-Finance: เฟรมมีแท็ก 10 $\\r\\to $ ส่งไปที่ Port 2 (แต่ Port 2 ไม่มี VLAN 10 อยู่ในลิสต์) $\\r\\to $ **เฟรมถูกดรอปทิ้งทันที** ทำให้เกิดการแยกความปลอดภัยโดยสมบูรณ์!"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "7. คำสั่งการตั้งค่าคอนฟิกและตรวจสอบ VLAN บน Huawei VRP"
    },
    {
      "type": "diagram",
      "content": "\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| คำสั่งคอนฟิก (Configuration Command)                       | การทำงานและผลลัพธ์ (Function & Effect)                |\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| [Huawei] vlan 10                                          | สร้าง VLAN 10 ขึ้นมาเดี่ยวๆ                           |\n\n| [Huawei] vlan batch 10 20 30                              | สร้าง VLAN 10, 20, 30 พร้อมกันทีเดียว                 |\n\n| [Huawei] vlan batch 100 to 200                            | สร้าง VLAN 100 ถึง 200 แบบต่อเนื่อง                   |\n\n| [Huawei-GE0/0/1] port link-type access                    | กำหนดให้พอร์ตทำงานในโหมด Access                       |\n\n| [Huawei-GE0/0/1] port default vlan 10                     | กำหนดให้พอร์ต Access อยู่ใน VLAN 10                   |\n\n| [Huawei-GE0/0/2] port link-type trunk                     | กำหนดให้พอร์ตทำงานในโหมด Trunk                        |\n\n| [Huawei-GE0/0/2] port trunk allow-pass vlan 10 20         | อนุญาตให้ VLAN 10 และ 20 วิ่งผ่าน Trunk ได้           |\n\n| [Huawei-GE0/0/2] port trunk allow-pass vlan all           | อนุญาตให้ทุก VLAN (1-4094) วิ่งผ่าน Trunk ได้         |\n\n| [Huawei-GE0/0/3] port link-type hybrid                    | กำหนดให้พอร์ตทำงานในโหมด Hybrid                       |\n\n| [Huawei-GE0/0/3] port hybrid pvid vlan 10                 | กำหนดค่า PVID ของพอร์ต Hybrid                         |\n\n| [Huawei-GE0/0/3] port hybrid untagged vlan 10 100         | ระบุ VLAN ที่จะปลดแท็กออกเมื่อส่งออกทาง Hybrid        |\n\n| [Huawei-GE0/0/3] port hybrid tagged vlan 20 30            | ระบุ VLAN ที่จะคงแท็กไว้เมื่อส่งออกทาง Hybrid         |\n\n| [Huawei] display vlan                                     | แสดงรายการ VLAN ทั้งหมดและพอร์ตสมาชิก                 |\n\n| [Huawei] display port vlan                                | แสดงชนิดพอร์ต, PVID, และรายการ VLAN ที่อนุญาตของทุกพอร์ต|\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    }
  ],
  "6": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. บทนำ: ความจำเป็นของเส้นทางสำรองและภัยคุกคามจาก Layer 2 Loops"
    },
    {
      "type": "paragraph",
      "text": "ในการออกแบบเครือข่ายระดับองค์กร วิศวกรจำเป็นต้องสร้าง **เส้นทางสำรอง (Link Redundancy)** เพื่อป้องกันไม่ให้เครือข่ายหยุดทำงานเมื่อมีสายสัญญาณขาดหรือสวิตช์ตัวใดตัวหนึ่งขัดข้อง (Single Point of Failure):"
    },
    {
      "type": "diagram",
      "content": "\n       [Switch A] ================ [Switch B]\n\n           \\                          /\n\n            \\                        /\n\n             \\                      /\n\n                   [Switch C]\n\n   * การเชื่อมต่อแบบวงรอบ (Physical Loop) ทำให้เกิดภัยพิบัติ 3 ประการทันทีหากไม่มี STP *\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1.1 ปัญหาหายนะ 3 ประการที่เกิดจาก Layer 2 Loops (Issues Caused by L2 Loops)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**พายุบรอดคาสต์ (Broadcast Storms)**: เมื่อมีเฟรมบรอดคาสต์ส่งเข้ามา สวิตช์จะทำการ Flooding วนรอบลูปอย่างไม่มีที่สิ้นสุด ขยายตัวทวีคูณจนแบนด์วิดท์ของเครือข่ายเต็ม 100% ภายในเสี้ยววินาที และ CPU ของสวิตช์ขึ้นสูงถึง 100% จนหยุดการทำงาน"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ตาราง MAC ผันผวนไม่เสถียร (MAC Address Table Flapping / Thrashing)**: สวิตช์ได้รับเฟรมเดียวกันที่มี Source MAC เดียวกันสลับไปสลับมาจากหลายพอร์ต ทำให้สวิตช์ต้องเขียนทับตาราง MAC ตลอดเวลา จนไม่สามารถส่งต่อเฟรม Unicast ได้อย่างถูกต้อง"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การได้รับเฟรมสำเนาซ้ำซ้อน (Multiple Frame Copies)**: อุปกรณ์ปลายทางได้รับเฟรมข้อมูลเดียวกันซ้ำๆ หลายครั้ง ทำให้ระบบสื่อสารและแอปพลิเคชันปลายทางทำงานผิดพลาด"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1.2 การเปรียบเทียบ: Layer 2 Loop vs. Layer 3 Loop"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. หลักการทำงานของ Spanning Tree Protocol (STP - IEEE 802.1D)"
    },
    {
      "type": "paragraph",
      "text": "**STP (Spanning Tree Protocol)** ทำงานโดยการค้นหาและตัดลูปในโครงสร้างเครือข่ายเชิงกายภาพ ให้กลายเป็น **โครงสร้างต้นไม้ไร้ลูปในเชิงตรรกะ (Loop-Free Logical Tree Topology)** โดยการ **บล็อกพอร์ตสำรอง (Block Redundant Ports)** ไว้ชั่วคราว และพร้อมจะปลดบล็อกพอร์ตสำรองขึ้นมาทำงานแทนทันทีเมื่อเส้นทางหลักเกิดความเสียหาย"
    },
    {
      "type": "diagram",
      "content": "\n  [ โครงสร้างกายภาพ: มีลูป ]                    [ โครงสร้างตรรกะหลัง STP ทำงาน: ไร้ลูป ]\n\n         [Switch A] (Root)                           [Switch A] (Root)\n\n           /        \\                                  /        \\\n\n      (DP)/          \\(DP)                        (DP)/          \\(DP)\n\n         /            \\                              /            \\\n\n    (RP)/              \\(RP)                    (RP)/              \\(RP)\n\n    [Switch B] ------ [Switch C]                 [Switch B]        [Switch C]\n\n             (DP)    (AP: Blocked!)                       (DP)     (X) พอร์ตนี้ถูกบล็อก!\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. ปัจจัยและค่าพารามิเตอร์หลักในการคำนวณ STP (STP Core Metrics)"
    },
    {
      "type": "paragraph",
      "text": "ในการตัดสินใจของ STP จะใช้ค่าพารามิเตอร์หลัก 4 ชนิด:"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| พารามิเตอร์ (Metric)             | โครงสร้างและขนาด (Structure & Size)          | ค่าดีฟอลต์ (Default)      |\n\n+----------------------------------+----------------------------------------------+-------------------------+\n\n| 1. Bridge ID (BID)               | Priority (16 บิต) + MAC Address (48 บิต)      | Priority = 32768        |\n\n| 2. Root Path Cost (RPC)          | ค่าผลรวมต้นทุนสะสมตามแบนด์วิดท์ของลิงก์สู่ Root| 1 Gbps = 20,000 (802.1t)|\n\n| 3. Port ID (PID)                 | Port Priority (8 บิต) + Port Number (8 บิต)   | Port Priority = 128     |\n\n| 4. BPDU Message Vector           | {Root BID, RPC, Sender BID, Sender PID}      | ค่าต่ำกว่าชนะเสมอ       |\n\n+----------------------------------+----------------------------------------------+-------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.1 โครงสร้าง Bridge ID (BID)"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Bridge ID (BID)} = \\text{Priority (16 bits)} + \\text{MAC Address (48 bits)} = 64\\text{ bits}",
      "description": "",
      "variables": []
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Bridge Priority} = k \\times 2^{12} = k \\times 4096 \\quad (k \\in \\{0, 1, 2, \\dots, 15\\}, \\; \\text{Default} = 32768)",
      "description": "",
      "variables": []
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.2 การคำนวณ Root Path Cost (RPC)"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Root Path Cost (RPC)} = \\sum_{i \\in \\text{Path to Root}} \\text{Port Cost}_i",
      "description": "",
      "variables": []
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**มาตรฐานต้นทุนพอร์ต (IEEE 802.1t Standard)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "$10\\text{ Mbps} = 2{,}000{,}000$ ($2 \\times 10^6$)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "$100\\text{ Mbps} = 200{,}000$ ($2 \\times 10^5$)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "$1\\text{ Gbps} = 20{,}000$ ($2 \\times 10^4$)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "$10\\text{ Gbps} = 2{,}000$ ($2 \\times 10^3$)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "$100\\text{ Gbps} = 200$ ($2 \\times 10^2$)"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.3 โครงสร้าง Port ID (PID)"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Port ID (PID)} = \\text{Port Priority (8 bits)} + \\text{Port Number (8 bits)} = 16\\text{ bits}",
      "description": "",
      "variables": []
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Port Priority} = m \\times 2^4 = m \\times 16 \\quad (m \\in \\{0, 1, 2, \\dots, 15\\}, \\; \\text{Default} = 128)",
      "description": "",
      "variables": []
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.4 BPDU Message Vector และเกณฑ์การตัดสินใจ"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "V}_{\\text{BPDU}} = \\{\\text{Root BID}, \\text{RPC}, \\text{Sender BID}, \\text{Sender PID}\\} \\implies \\min(V})",
      "description": "",
      "variables": []
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.5 รูปแบบของ BPDU (Bridge Protocol Data Unit)"
    },
    {
      "type": "paragraph",
      "text": "สวิตช์แลกเปลี่ยนข้อมูล STP ระหว่างกันผ่านแพ็กเก็ตพิเศษที่เรียกว่า **BPDU**:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Configuration BPDU**: ส่งออกโดย Root Bridge ทุกๆ **2 วินาที (Hello Time)** เพื่อดูแลรักษาโครงสร้างต้นไม้"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**TCN BPDU (Topology Change Notification)**: ส่งโดยสวิตช์ที่ตรวจพบการเปลี่ยนแปลงของลิงก์ เพื่อแจ้งเตือนไปยัง Root Bridge"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. ขั้นตอนการคำนวณ STP 4 ขั้นตอน (Four-Step STP Calculation Process)"
    },
    {
      "type": "paragraph",
      "text": "STP คำนวณเพื่อสร้างโครงสร้าง Spanning Tree ผ่าน 4 ขั้นตอนอย่างเป็นลำดับ โดยยึดหลัก **\"ค่ายิ่งน้อย ยิ่งมีความสำคัญสูง (Lowest Value Wins)\"**:"
    },
    {
      "type": "diagram",
      "content": "\n[ขั้นตอนที่ 1: เลือก Root Bridge]\n\nเลือกสวิตช์ที่มี Bridge ID (BID) ต่ำที่สุดในระบบ เป็น Root Bridge (มีเพียง 1 ตัวใน Broadcast Domain)\n\n               |\n\n               v\n\n[ขั้นตอนที่ 2: เลือก Root Port (RP) บนสวิตช์ Non-Root ทุกตัว]\n\nสวิตช์ที่ไม่ใช่ Root แต่ละตัว จะเลือกพอร์ตที่ดีที่สุด 1 พอร์ต เพื่อเป็นช่องทางเดินไปหา Root Bridge\n\n(พิจารณา: 1. Lowest RPC -> 2. Lowest Sender BID -> 3. Lowest Sender PID -> 4. Lowest Local PID)\n\n               |\n\n               v\n\n[ขั้นตอนที่ 3: เลือก Designated Port (DP) บนแต่ละสายสัญญาณ (Link Segment)]\n\nในแต่ละสายเชื่อมต่อ จะต้องมีพอร์ตที่ทำหน้าที่ส่งต่อ BPDU ได้ดีที่สุด 1 พอร์ต\n\n(พิจารณา: 1. Lowest RPC ของสวิตช์ตัวนั้น -> 2. Lowest Sender BID -> 3. Lowest Sender PID)\n\n               |\n\n               v\n\n[ขั้นตอนที่ 4: บล็อกพอร์ตที่เหลือทั้งหมด (Alternate / Blocked Port)]\n\nพอร์ตใดที่ไม่ได้เป็นทั้ง Root Port (RP) และ Designated Port (DP) จะถูกเปลี่ยนสถานะเป็น Blocking เพื่อตัดลูป\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. สถานะของพอร์ตใน STP และระยะเวลาการลู่เข้า (Port States & Convergence)"
    },
    {
      "type": "paragraph",
      "text": "เพื่อให้มั่นใจว่าจะไม่เกิดลูปชั่วขณะในระหว่างการคำนวณ พอร์ต STP จะต้องเปลี่ยนผ่านสถานะตามลำดับเวลา:"
    },
    {
      "type": "diagram",
      "content": "\n[Disabled] ---> [Blocking] ---> [Listening] ---> [Learning] ---> [Forwarding]\n\n(ปิดพอร์ต)       (รับ BPDU       (15 วินาที:      (15 วินาที:      (ส่งต่อข้อมูลได้เต็มที่\n\n                 ไม่ส่งข้อมูล)    คำนวณบทบาท)     เรียนรู้ MAC)     และรับส่ง BPDU)\n\n                                      \\              /\n\n                                       +-- 30-50 วินาที --+ (STP Convergence Time)\n"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Disabled**: พอร์ตปิดการทำงานทางกายภาพ"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Blocking**: ไม่ส่งต่อทราฟฟิกข้อมูล ไม่เรียนรู้ MAC ทำหน้าที่เพียงคอยรับและฟัง BPDU เท่านั้น"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Listening (15 วินาที - Forward Delay)**: กำลังคำนวณบทบาทพอร์ต ยังไม่ส่งต่อข้อมูลและยังไม่เรียนรู้ MAC"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Learning (15 วินาที - Forward Delay)**: เริ่มเรียนรู้หมายเลข Source MAC ลงตาราง แต่ยังไม่ส่งต่อทราฟฟิกข้อมูล เพื่อป้องกันการ Flooding ขนานใหญ่"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Forwarding**: สถานะทำงานสมบูรณ์ สามารถรับส่งทราฟฟิกข้อมูล เรียนรู้ MAC และรับส่ง BPDU ได้ตามปกติ"
      ]
    },
    {
      "type": "heading",
      "level": 4,
      "text": "5.1 สูตรคำนวณเวลาการลู่เข้าของ STP (STP Convergence Formulas)"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "T_{\\text{direct}} = 2 \\times \\text{Forward Delay} = 2 \\times 15\\text{ s} = 30\\text{ s}",
      "description": "",
      "variables": []
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "T_{\\text{indirect}} = \\text{Max Age} + 2 \\times \\text{Forward Delay} = 20\\text{ s} + 2(15\\text{ s}) = 50\\text{ s}",
      "description": "",
      "variables": []
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "T_{\\text{RSTP}} < 1\\text{ s} \\quad (\\text{Sub-second Convergence ผ่าน Proposal/Agreement Handshake})",
      "description": "",
      "variables": []
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. การพัฒนาสู่ Rapid Spanning Tree Protocol (RSTP - IEEE 802.1w)"
    },
    {
      "type": "paragraph",
      "text": "เนื่องจาก STP มาตรฐานดั้งเดิมมีการลู่เข้าที่ช้ามาก (30-50 วินาที) ซึ่งไม่ทันต่อการทำงานของแอปพลิเคชันยุคใหม่ มาตรฐาน **IEEE 802.1w (RSTP)** จึงถูกพัฒนาขึ้นเพื่อลดเวลาลู่เข้าเหลือ **ระดับมิลลิวินาที (Sub-second Convergence)**"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.1 การปรับปรุงบทบาทและสถานะพอร์ตใน RSTP"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| STP ดั้งเดิม (802.1D)       | RSTP ยุคใหม่ (802.1w)        | หน้าที่และความหมาย (Role & Meaning)             |\n\n+-----------------------------+------------------------------+-------------------------------------------------+\n\n| Disabled / Blocking / Listen| **Discarding**               | ไม่ส่งข้อมูล ไม่เรียนรู้ MAC ทำหน้าที่คอยฟัง BPDU |\n\n| Learning                    | **Learning**                 | เรียนรู้ MAC Table แต่ยังไม่ส่งข้อมูล           |\n\n| Forwarding                  | **Forwarding**               | รับส่งข้อมูลและเรียนรู้ MAC ได้เต็มรูปแบบ       |\n\n+-----------------------------+------------------------------+-------------------------------------------------+\n\n| Root Port (RP)              | **Root Port (RP)**           | พอร์ตเส้นทางหลักที่ดีที่สุดไปยัง Root Bridge    |\n\n| Designated Port (DP)        | **Designated Port (DP)**     | พอร์ตส่งต่อทราฟฟิกลงสู่สายเชื่อมต่อ (Segment)  |\n\n| Blocked Port                | **Alternate Port (AP)**      | พอร์ตสำรองสำหรับ Root Port (สลับแทน RP ทันที)   |\n\n|                             | **Backup Port (BP)**         | พอร์ตสำรองสำหรับ Designated Port บนสายเดียวกัน  |\n\n+-----------------------------+------------------------------+-------------------------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.2 กลไกสำคัญที่ทำให้ RSTP ทำงานได้รวดเร็ว"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Proposal / Agreement Handshake (P/A Mechanism)**: บนลิงก์แบบ Point-to-Point เมื่อมีการต่อสาย สวิตช์ทั้งสองฝั่งจะส่งข้อเสนอ (Proposal) และตอบรับ (Agreement) เพื่อเปลี่ยนพอร์ตเข้าสู่สถานะ **Forwarding ได้ในทันทีภายในไม่กี่มิลลิวินาที** โดยไม่ต้องรอเวลา Forward Delay Timer (ไม่ต้องรอ 30 วินาที)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Edge Port (`stp edged-port enable`)**: พอร์ตที่เชื่อมต่อกับโฮสต์ปลายทาง (PC หรือ Server) สามารถเปลี่ยนเข้าสู่สถานะ Forwarding ได้ทันทีที่เสียบสาย และเมื่อพอร์ตนี้ Up/Down จะไม่กระตุ้นให้ระบบเกิด Topology Change"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การตอบสนองต่อข้อผิดพลาดทันที (Fast Failover)**: เมื่อ Root Port หลักขาด Alternate Port (AP) จะถูกเลื่อนขั้นขึ้นมาทำหน้าที่เป็น Root Port ตัวใหม่ และเข้าสู่ Forwarding ทันที"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "7. วิวัฒนาการขั้นสูง: MSTP และการใช้ Stacking"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**MSTP (Multiple Spanning Tree Protocol - IEEE 802.1s)**: แก้ปัญหาของ STP/RSTP ที่ทุก VLAN ต้องแชร์โครงสร้างต้นไม้เดียวกัน (Single Tree) โดย MSTP สามารถจัดกลุ่ม VLAN หลายๆ VLAN เข้าสู่ **Instance** ต่างกัน เพื่อให้แต่ละ Instance มี Root Bridge คนละตัว เกิดการทำ **Load Balancing ข้ามลิงก์** ได้อย่างคุ้มค่า"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**VBST (VLAN-Based Spanning Tree)**: โปรโตคอลของ Huawei ที่สร้าง Spanning Tree อิสระให้กับทุกๆ VLAN (เข้ากันได้กับ Cisco PVST+)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**การแทนที่ STP ด้วย Stacking (iStack/CSS)**: สถาปัตยกรรมเครือข่ายสมัยใหม่นิยมรวมสวิตช์หลายตัวเป็นสแต็กเสมือนเดียว และใช้การรวมลิงก์ (Eth-Trunk) ข้ามเครื่อง ซึ่งช่วย **ตัดลูปตั้งแต่ระดับสถาปัตยกรรมทางกายภาพโดยไม่ต้องพึ่งพา STP อีกต่อไป**"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "8. คำสั่งการตั้งค่า STP / RSTP บน Huawei VRP"
    },
    {
      "type": "diagram",
      "content": "\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| คำสั่งคอนฟิก (Configuration Command)                       | การทำงานและผลลัพธ์ (Function & Effect)                |\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| [Huawei] stp mode rstp                                    | สลับโหมดการทำงานเป็น RSTP (ค่าเริ่มต้นคือ MSTP)       |\n\n| [Huawei] stp mode stp                                     | สลับโหมดการทำงานเป็น STP ดั้งเดิม (802.1D)            |\n\n| [Huawei] stp root primary                                 | กำหนดให้สวิตช์ตัวนี้เป็น Root Bridge (Priority = 0)   |\n\n| [Huawei] stp root secondary                               | กำหนดให้สวิตช์ตัวนี้เป็น Backup Root (Priority = 4096)|\n\n| [Huawei] stp priority 8192                                | ปรับค่า Bridge Priority แบบกำหนดเอง (สเต็ปละ $4096$ ($2^{12}$))    |\n\n| [Huawei-GE0/0/1] stp cost 20000                           | ปรับค่า Port Cost บนพอร์ต                             |\n\n| [Huawei-GE0/0/1] stp port priority 64                     | ปรับค่า Port Priority (สเต็ปละ $16$ ($2^4$))                    |\n\n| [Huawei-GE0/0/1] stp edged-port enable                    | กำหนดให้พอร์ตที่ต่อกับโฮสต์ปลายทางเป็น Edge Port      |\n\n| [Huawei] display stp                                      | แสดงรายละเอียดการทำงานของ STP ทั้งหมด                 |\n\n| [Huawei] display stp brief                                | แสดงสรุปบทบาท (Role) และสถานะ (State) ของทุกพอร์ต     |\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    }
  ],
  "7": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. มิติความน่าเชื่อถือของระบบเครือข่ายองค์กร (Network Reliability Dimensions)"
    },
    {
      "type": "paragraph",
      "text": "ในเครือข่ายระดับองค์กรและศูนย์ข้อมูล (Data Center) ความต่อเนื่องในการให้บริการ (High Availability / 99.999% Uptime) เป็นสิ่งสำคัญสูงสุด การออกแบบความน่าเชื่อถือจึงต้องครอบคลุม 3 ระดับ:"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| ระดับความน่าเชื่อถือ (Dimension) | ความเสี่ยงที่อาจเกิดขึ้น (Risk) | โซลูชันและเทคโนโลยีแก้ไข (Solutions) |\n\n+----------------------------------+---------------------------------+--------------------------------------+\n\n| 1. Card Reliability (การ์ด/บอร์ด)| การ์ดอินเทอร์เฟซ (LPU) ขัดข้อง  | ระบบสวิตช์แบบแยกการ์ดโมดูลาร์คู่ขนาน  |\n\n| 2. Device Reliability (อุปกรณ์)  | เมนบอร์ด/พาวเวอร์ซัพพลายเสียหาย| สถาปัตยกรรมคลัสเตอร์ **iStack** และ **CSS**|\n\n| 3. Link Reliability (ลิงก์/สาย) | สายเคเบิลขาด หรือพอร์ตชำรุด    | เทคโนโลยีการรวมลิงก์ **Eth-Trunk (LAG)** |\n\n+----------------------------------+---------------------------------+--------------------------------------+\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. หลักการทำงานของการรวมลิงก์ Eth-Trunk (Link Aggregation Principle)"
    },
    {
      "type": "paragraph",
      "text": "**Eth-Trunk (หรือ Link Aggregation Group - LAG)** ตามมาตรฐาน **IEEE 802.3ad** คือ เทคโนโลยีที่นำเอาพอร์ตอีเทอร์เน็ตทางกายภาพหลายๆ พอร์ต มารวมเข้าด้วยกันเป็น **อินเทอร์เฟซตรรกะเดียว (Single Logical Link)**:"
    },
    {
      "type": "diagram",
      "content": "\n   [Switch A] ======================================= [Switch B]\n\n                 Port 1 (GigabitEthernet 1 Gbps)\n\n                 Port 2 (GigabitEthernet 1 Gbps)\n\n                 Port 3 (GigabitEthernet 1 Gbps)\n\n                 --------------------------------\n\n                 Eth-Trunk 1 (Logical Link = 3 Gbps แบนด์วิดท์รวม!)\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.1 สูตรการคำนวณแบนด์วิดท์รวมของ Eth-Trunk"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "\\text{Bandwidth}_{\\text{Eth-Trunk}} = \\sum_{i=1}^{M} \\text{Bandwidth}_i = M \\times \\text{Bandwidth}_{\\text{port}}",
      "description": "",
      "variables": []
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.2 ประโยชน์หลัก 3 ประการของ Eth-Trunk"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**เพิ่มแบนด์วิดท์ (Increased Bandwidth)**: แบนด์วิดท์ของลิงก์ตรรกะจะเท่ากับผลรวมของแบนด์วิดท์ของพอร์ตสมาชิก Active ทั้งหมด ($M \\times \\text{Bandwidth}_{\\text{port}}$ เช่น $1\\text{ Gbps} \\times 4\\text{ พอร์ต} = 4\\text{ Gbps}$)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**สร้างความน่าเชื่อถือและการสำรองลิงก์ (Link Redundancy)**: หากมีสายเส้นใดเส้นหนึ่งขาด ทราฟฟิกจะถูกโอนย้ายไปยังสายเส้นที่เหลือภายในเสี้ยววินาทีโดยที่ระบบไม่ตัดการเชื่อมต่อ"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การกระจายโหลดทราฟฟิก (Load Balancing)**: ข้อมูลจะถูกกระจายส่งผ่านสายแต่ละเส้นอย่างสมดุลตามอัลกอริทึม Hash (เช่น Source/Destination IP หรือ MAC) โดยไม่เกิดปัญหาลูป Layer 2"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. โหมดการทำงานของ Eth-Trunk: Manual vs. LACP Mode"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| คุณลักษณะ (Feature)            | Manual Load Balancing Mode        | LACP Mode (Static LACP)         |\n\n+--------------------------------+-----------------------------------+---------------------------------+\n\n| **การใช้โปรโตคอลควบคุม**        | ไม่ใช้โปรโตคอล (สร้างขึ้นแบบตายตัว)| ใช้โปรโตคอล LACP (IEEE 802.3ad) |\n\n| **การแลกเปลี่ยนแพ็กเก็ตควบคุม**| ไม่มีการส่งแพ็กเก็ตตรวจสอบสถานะ    | แลกเปลี่ยน **LACPDU** ตลอดเวลา  |\n\n| **การตรวจจับความผิดพลาด**       | ตรวจจับได้เฉพาะสายขาด (Link-down) | ตรวจจับสายสลับคู่, ซอฟต์แวร์แฮงก์|\n\n| **การกำหนดลิงก์สำรอง (Backup)**| ทุกพอร์ตเป็น Active ทั้งหมด       | รองรับ Active ($M$) + Backup ($N-M$)|\n\n| **การรองรับความเข้ากันได้**     | อุปกรณ์ปลายทางไม่จำเป็นต้องรองรับ | อุปกรณ์ปลายทางต้องเปิด LACP ด้วย|\n\n+--------------------------------+-----------------------------------+---------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.1 การกระจายลิงก์ Active และ Backup ใน LACP Mode"
    },
    {
      "type": "formula",
      "title": "สูตรคำนวณเครือข่าย",
      "formula": "N_{\\text{total}} = M_{\\text{active}} + N_{\\text{backup}} \\implies N_{\\text{backup}} = N_{\\text{total}} - M_{\\text{active}} \\quad \\left(M_{\\text{active}} \\le N_{\\text{total}}\\right)",
      "description": "",
      "variables": []
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.2 กลไกการทำงานของ LACP Mode (Link Aggregation Control Protocol)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การเลือก Actor (Master Switch)**: อุปกรณ์ทั้งสองฝั่งแลกเปลี่ยน LACPDU เพื่อเลือกสวิตช์หลัก โดยดูจาก **LACP System Priority (ค่าดีฟอลต์ $32768 = 2^{15}$ ยิ่งน้อยยิ่งสำคัญ)** หากเท่ากันจะดู **System MAC Address** ที่ต่ำที่สุด"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การคัดเลือก Active Ports**: สวิตช์ Actor จะเป็นผู้มีสิทธิ์เด็ดขาดในการเลือกพอร์ตที่จะให้เป็น **Active Link ($M_{\\text{active}}$ พอร์ตส่งข้อมูลจริง)** โดยพิจารณาจาก **LACP Port Priority (ค่าดีฟอลต์ $32768$ ยิ่งน้อยยิ่งสำคัญ)** ตามจำนวนพอร์ตสูงสุดที่กำหนดไว้ (`max active-linknumber <M>`) ส่วนพอร์ตที่เหลือ ($N - M$) จะอยู่ในสถานะ **Inactive (Standby)** เพื่อรอสแตนด์บาย"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**กลไก LACP Preemption**: หากพอร์ต Active หลักที่เคยขาด กลับมาทำงานได้ปกติ (Link Up) ระบบสามารถสลับพอร์ตหลักกลับมาเป็น Active แทนพอร์ตสำรองได้โดยอัตโนมัติตามเวลาหน่วงที่ตั้งไว้ (`lacp preempt delay <seconds>`)"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. เทคโนโลยีการรวมสแต็กและคลัสเตอร์สวิตช์: iStack และ CSS"
    },
    {
      "type": "diagram",
      "content": "\n(1) iStack (Intelligent Stack)                 (2) CSS (Cluster Switch System)\n\n    รวม Box Switches 2-9 ตัว                       รวม Chassis Switches 2 ตัว\n\n    +-----------------------+                      +-----------------------------------+\n\n    | Switch 1 (Master)     |                      | +-------+       +-------+         |\n\n    +-----------------------+                      | | MPU 1 |       | MPU 2 |         |\n\n    | Switch 2 (Standby)    |                      | +-------+       +-------+         |\n\n    +-----------------------+                      | | LPU 1 | <---> | LPU 2 |         |\n\n    | Switch 3 (Slave)      |                      | +-------+       +-------+         |\n\n    +-----------------------+                      | Chassis 1 (Master)  Chassis 2     |\n\n    เสมือนเป็นสวิตช์ตัวเดียว (Single IP / Config)   +-----------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.1 iStack (Intelligent Stack)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "คือ เทคโนโลยีที่นำเอา **Fixed/Box Switch หลายๆ ตัว ($2 \\le N_{\\text{iStack}} \\le 9$ ตัว)** มาเชื่อมต่อกันผ่านสาย Stack Cable หรือพอร์ต Service Port แล้วผสานรวมให้กลายเป็น **สวิตช์เสมือนเพียงตัวเดียว (Single Logical Switch)**"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**บทบาทของสมาชิกในสแต็ก**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Master Switch**: สวิตช์หลักที่ทำหน้าที่ประมวลผล จัดการคอนฟิก และควบคุมระบบทั้งหมด"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Standby Switch**: สวิตช์สำรองที่คอยซิงโครไนซ์ข้อมูลตลอดเวลา พร้อมขึ้นเป็น Master ทันทีที่ Master หลักเสียหาย"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Slave Switch**: สวิตช์สมาชิกที่ทำหน้าที่ส่งต่อทราฟฟิกตามคำสั่งของ Master"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.2 CSS (Cluster Switch System)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "คือ เทคโนโลยีการรวม **Chassis Switch (สวิตช์ขนาดใหญ่แบบตู้โมดูลาร์) จำนวน $N_{\\text{CSS}} = 2$ ตู้** เข้าด้วยกันเป็นระบบคลัสเตอร์เดียว ผ่านสายเชื่อมต่อระหว่างการ์ดประมวลผลหลัก (MPU) หรือการ์ดพอร์ต (LPU)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "สวิตช์ตัวหนึ่งจะทำหน้าที่เป็น Master และอีกตัวเป็น Standby"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.3 สถาปัตยกรรมไร้ Spanning Tree: รวมพลัง Eth-Trunk + iStack / CSS"
    },
    {
      "type": "diagram",
      "content": "\n               [ CSS / iStack Core Switches (Master + Standby) ]\n\n                             //                       \\\\\n\n                   Eth-Trunk // (ข้ามเครื่อง)           \\\\ Eth-Trunk\n\n                            //                         \\\\\n\n               [ Access Switch 1 ]                 [ Access Switch 2 ]\n"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เมื่อเชื่อมต่อสวิตช์ Access เข้ากับ Core Switch ที่ทำ iStack/CSS ผ่านสาย 2 เส้นที่ต่อแยกเข้าสวิตช์ Core คนละตัว เราสามารถรวมสายคู่นั้นเป็น **Multi-Chassis Eth-Trunk เดียวกันได้**"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**ผลลัพธ์อันทรงพลัง**:"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "โทโพโลยีทางตรรกะจะกลายเป็น **จุดต่อจุด (Point-to-Point) ไร้ลูปโดยสมบูรณ์**"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ไม่ต้องเปิดใช้งาน STP เพื่อบล็อกพอร์ตอีกต่อไป** ทำให้สามารถใช้งานแบนด์วิดท์ของสายสัญญาณทุกเส้นได้พร้อมกัน 100% (Active-Active)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "เวลาในการสลับสายเมื่อเกิดเหตุขัดข้องลดลงเหลือ **น้อยกว่า 50 มิลลิวินาที ($T_{\\text{failover}} < 50\\text{ ms}$)**"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. คำสั่งการตั้งค่าคอนฟิก Eth-Trunk บน Huawei VRP"
    },
    {
      "type": "diagram",
      "content": "\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| คำสั่งคอนฟิก (Configuration Command)                       | การทำงานและผลลัพธ์ (Function & Effect)                |\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| [Huawei] interface Eth-Trunk 1                            | สร้างอินเทอร์เฟซรวมลิงก์ Eth-Trunk หมายเลข 1          |\n\n| [Huawei-Eth-Trunk1] mode manual load-balance              | กำหนดโหมดเป็น Manual Load Balancing (โหมดดีฟอลต์)     |\n\n| [Huawei-Eth-Trunk1] mode lacp-static                      | กำหนดโหมดเป็น LACP Static Mode                        |\n\n| [Huawei-Eth-Trunk1] max active-linknumber 2               | กำหนดจำนวนลิงก์ Active สูงสุดในกลุ่ม (ที่เหลือเป็นสำรอง)|\n\n| [Huawei-Eth-Trunk1] lacp preempt enable                   | เปิดใช้งานฟังก์ชันแย่งชิงสิทธิ์ Active กลับคืน (Preempt)|\n\n| [Huawei-Eth-Trunk1] lacp preempt delay 30                 | กำหนดเวลาหน่วงก่อนแย่งสิทธิ์คืน (30 วินาที)           |\n\n| [Huawei-Eth-Trunk1] trunkport GigabitEthernet 0/0/1 to 0/0/3| เพิ่มพอร์ต GE0/0/1 ถึง 0/0/3 เข้าเป็นสมาชิก Eth-Trunk 1|\n\n| [Huawei-GE0/0/1] eth-trunk 1                              | หรือสั่งเพิ่มพอร์ตเข้า Eth-Trunk จาก Interface View   |\n\n| [Huawei] lacp priority 100                                | ปรับค่า LACP System Priority เพื่อชิงการเป็น Actor   |\n\n| [Huawei-GE0/0/1] lacp priority 100                        | ปรับค่า LACP Port Priority เพื่อชิงการเป็น Active Port |\n\n| [Huawei-Eth-Trunk1] port link-type trunk                  | ตั้งค่าให้ Eth-Trunk ทำงานเป็น Trunk Port             |\n\n| [Huawei-Eth-Trunk1] port trunk allow-pass vlan 10 20      | อนุญาตให้ VLAN 10 และ 20 วิ่งผ่าน Eth-Trunk           |\n\n| [Huawei] display eth-trunk 1                              | แสดงสถานะโดยละเอียด, สมาชิกพอร์ต, และโหมดของ Eth-Trunk |\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    }
  ],
  "8": [
    {
      "type": "callout",
      "text": "**คำอธิบายภาพรวม**: เจาะลึกสถาปัตยกรรมระดับ Network Layer (OSI Layer 3) โครงสร้าง IPv4 Packet Header การจัดหมวดหมู่คลาสแอดเดรส (Classful vs. Classless) เทคนิคการแบ่งซับเน็ตแบบมาตรฐาน (FLSM) และการจัดสรรตามขนาดความต้องการจริง (VLSM) พร้อมการทำงานของโปรโตคอลควบคุม ICMP ในการตรวจสอบระบบเครือข่าย"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. ภาพรวมหน้าที่ของ Network Layer (Layer 3 Overview)"
    },
    {
      "type": "paragraph",
      "text": "**Network Layer (OSI Layer 3 / TCP/IP Internet Layer)** ทำหน้าที่เป็นแกนกลางในการส่งข้อมูลแบบ **End-to-End (Host-to-Host Communication)** ข้ามเครือข่ายที่แตกต่างกัน โดยมีหน้าที่สำคัญ 3 ประการ:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Logical Addressing (การระบุที่อยู่เชิงตรรกะ)**: กำหนดหมายเลขประจำตัวที่ไม่ซ้ำกันให้แก่อุปกรณ์ทุกตัวในระบบเครือข่าย (IPv4 และ IPv6 Address)",
        "**Routing & Path Determination (การค้นหาและเลือกเส้นทาง)**: เราเตอร์ตรวจสอบตารางเส้นทาง (IP Routing Table) เพื่อส่งต่อแพ็กเก็ตผ่านเส้นทางที่ดีที่สุด",
        "**Encapsulation & Fragmentation (การห่อหุ้มและการแบ่งย่อยชิ้นส่วนแพ็กเก็ต)**: ห่อหุ้มข้อมูลจาก Transport Layer ด้วย IP Header และทำการแบ่งย่อยแพ็กเก็ตเมื่อขนาดเกินค่า Maximum Transmission Unit (MTU) ของตัวกลาง"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. โครงสร้างของ IPv4 Packet Header (20 - 60 Bytes)"
    },
    {
      "type": "paragraph",
      "text": "IPv4 Packet Header ตามมาตรฐาน RFC 791 มีขนาดพื้นฐานคงที่ **20 ไบต์ (160 บิต)** และสามารถขยายได้สูงสุดถึง 60 ไบต์หากมีการใช้งานฟิลด์ Options:"
    },
    {
      "type": "diagram",
      "content": " 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|Version|  IHL  |Type of Service|          Total Length         |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|         Identification        |Flags|      Fragment Offset    |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|  Time to Live |    Protocol   |        Header Checksum        |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|                       Source IP Address                       |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|                    Destination IP Address                     |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|                    Options (Optional & Variable)              |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.1 รายละเอียดฟิลด์สำคัญใน IPv4 Header"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Version (4 บิต)**: ระบุเวอร์ชันของโปรโตคอลไอพี สำหรับ IPv4 มีค่าเป็น `4` (ฐานสอง `0100`)",
        "**Internet Header Length - IHL (4 บิต)**: ระบุความยาวของ Header มีหน่วยเป็น 32-bit Words (4 ไบต์) ค่าปกติคือ `5` (หมายถึง 5 x 4 = 20 ไบต์)",
        "**Type of Service / DSCP & ECN (8 บิต)**: ใช้สำหรับจัดการคุณภาพบริการ (QoS) และการแจ้งเตือนสภาวะคับคั่งของเครือข่าย",
        "**Total Length (16 บิต)**: ขนาดรวมทั้งหมดของแพ็กเก็ต (Header + Data) มีขนาดสูงสุดตามทฤษฎีคือ 65,535 ไบต์",
        "**Identification (16 บิต), Flags (3 บิต), Fragment Offset (13 บิต)**: ทำงานร่วมกันในกระบวนการ **IP Fragmentation**:",
        "`Flags`: บิตที่ 1 สงวนไว้ (0), บิตที่ 2 คือ **DF (Don't Fragment)** ห้ามผ่าแพ็กเก็ต, บิตที่ 3 คือ **MF (More Fragments)** มีชิ้นส่วนต่อท้าย",
        "`Fragment Offset`: ระบุตำแหน่งออฟเซ็ตของชิ้นส่วนย่อย มีหน่วยนับทีละ 8 ไบต์",
        "**Time to Live - TTL (8 บิต)**: ป้องกันไม่ให้แพ็กเก็ตวิ่งวนในลูปไม่รู้จบ โดยเราเตอร์ทุกตัวที่แพ็กเก็ตเดินทางผ่านจะลดค่า TTL ลง 1 หาก TTL ลดเหลือ 0 แพ็กเก็ตจะถูกดรอปทิ้งทันที และเราเตอร์จะส่งข้อความ **ICMP Time Exceeded (Type 11)** แจ้งต้นทาง",
        "**Protocol (8 บิต)**: ระบุโปรโตคอลระดับบนที่ห่อหุ้มอยู่ภายใน Payload:",
        "`6` = **TCP (Transmission Control Protocol)**",
        "`17` = **UDP (User Datagram Protocol)**",
        "`1` = **ICMP (Internet Control Message Protocol)**",
        "`89` = **OSPF (Open Shortest Path First)**",
        "**Header Checksum (16 บิต)**: ใช้ตรวจสอบความถูกต้องเฉพาะส่วน Header (คำนวณใหม่ทุก Hop เพราะค่า TTL เปลี่ยนแปลงตลอดเวลา)",
        "**Source & Destination IP Address (ฟิลด์ละ 32 บิต / 4 ไบต์)**: หมายเลขไอพีต้นทางและปลายทาง"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. โครงสร้างและการจัดหมวดหมู่ IPv4 Address"
    },
    {
      "type": "paragraph",
      "text": "หมายเลข IPv4 ประกอบด้วย **32 บิต (4 ไบต์)** เขียนแสดงผลในรูป **Dotted-Decimal Notation** (เช่น `192.168.1.1`):"
    },
    {
      "type": "diagram",
      "content": "32 Bits IPv4 Address\n+-------------------------------+-------------------------------+\n\n|     Network ID (เครือข่าย)    |        Host ID (โฮสต์)        |\n\n+-------------------------------+-------------------------------+"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.1 การจัดหมวดหมู่แอดเดรสแบบคลาส (Classful Addressing)"
    },
    {
      "type": "formula",
      "title": "ขนาดพื้นที่แอดเดรสทั้งหมดของ IPv4 (Total IPv4 Address Space)",
      "formula": "ext{Total IPv4 Space} = 2^{32} = 4{,}294{,}967{,}296 \text{ Addresses}",
      "description": "",
      "variables": [
        {
          "symbol": "32",
          "meaning": "จำนวนบิตทั้งหมดของ IPv4 Header"
        }
      ]
    },
    {
      "type": "table",
      "headers": [
        "คลาส (Class)",
        "ช่วงแอดเดรส (IP Range)",
        "Default Subnet Mask",
        "จำนวนเครือข่าย (Networks)",
        "จำนวนโฮสต์ต่อเครือข่าย (Hosts/Net)",
        "วัตถุประสงค์และการใช้งาน"
      ],
      "rows": [
        [
          "**Class A**",
          "`1.0.0.0` ถึง `126.255.255.255`",
          "`255.0.0.0` (/8)",
          "$126$ เครือข่าย ($2^7-2$)",
          "$2^{24} - 2 = 16{,}777{,}214$ โฮสต์",
          "เครือข่ายขนาดใหญ่มาก (บิตแรกขึ้นต้นด้วย `0`)"
        ],
        [
          "**Class B**",
          "`128.0.0.0` ถึง `191.255.255.255`",
          "`255.255.0.0` (/16)",
          "$16{,}384$ เครือข่าย ($2^{14}$)",
          "$2^{16} - 2 = 65{,}534$ โฮสต์",
          "องค์กรขนาดกลางและสถาบัน (ขึ้นต้นด้วย `10`)"
        ],
        [
          "**Class C**",
          "`192.0.0.0` ถึง `223.255.255.255`",
          "`255.255.255.0` (/24)",
          "$2{,}097{,}152$ เครือข่าย ($2^{21}$)",
          "$2^8 - 2 = 254$ โฮสต์",
          "เครือข่ายธุรกิจขนาดเล็กทั่วไป (ขึ้นต้นด้วย `110`)"
        ],
        [
          "**Class D**",
          "`224.0.0.0` ถึง `239.255.255.255`",
          "N/A (ไม่มี Subnet Mask)",
          "N/A",
          "N/A",
          "ใช้สำหรับการส่งข้อมูลแบบกลุ่ม **Multicast** (ขึ้นต้นด้วย `1110`)"
        ],
        [
          "**Class E**",
          "`240.0.0.0` ถึง `255.255.255.255`",
          "N/A (ไม่มี Subnet Mask)",
          "N/A",
          "N/A",
          "สงวนไว้สำหรับการทดลองและวิจัยทางวิชาการ (ขึ้นต้นด้วย `1111`)"
        ]
      ],
      "aligns": [
        "left",
        "left",
        "left",
        "left",
        "left",
        "left"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.2 ช่วงแอดเดรสส่วนตัว (Private IP Address Ranges - RFC 1918)"
    },
    {
      "type": "paragraph",
      "text": "Private IP เป็นแอดเดรสที่สามารถนำไปใช้งานภายในองค์กรได้อย่างอิสระโดยไม่ต้องขออนุญาต และเราเตอร์บนอินเทอร์เน็ตจะไม่ส่งต่อทราฟฟิกนี้ (Non-routable over Public Internet):"
    },
    {
      "type": "table",
      "headers": [
        "คลาส (Class)",
        "ช่วงแอดเดรสส่วนตัว (Private IP Range)",
        "Prefix Length",
        "จำนวนโฮสต์ที่รองรับ"
      ],
      "rows": [
        [
          "**Class A Private**",
          "`10.0.0.0` ถึง `10.255.255.255`",
          "`/8` (`255.0.0.0`)",
          "16,777,214 โฮสต์"
        ],
        [
          "**Class B Private**",
          "`172.16.0.0` ถึง `172.31.255.255`",
          "`/12` (`255.240.0.0`)",
          "1,048,574 โฮสต์"
        ],
        [
          "**Class C Private**",
          "`192.168.0.0` ถึง `192.168.255.255`",
          "`/16` (`255.255.0.0`)",
          "65,534 โฮสต์ (ซอยเป็น `/24` ได้ 256 วง)"
        ]
      ],
      "aligns": [
        "left",
        "left",
        "left",
        "left"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.3 แอดเดรสประเภทพิเศษ (Special Addresses)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`**0.0.0.0/0` (Default Route / This Host)**: ใช้แทนทุกเครือข่ายในโลก หรือโฮสต์ที่ยังไม่ได้รับ IP (DHCP Discover)",
        "`**127.0.0.0/8` (Loopback Address)**: ใช้ทดสอบสแต็ก TCP/IP ภายในเครื่องตนเอง (เช่น `127.0.0.1`)",
        "`**255.255.255.255` (Limited Broadcast)**: ส่งบรอดคาสต์หาทุกเครื่องใน LAN เดียวกัน (เราเตอร์จะไม่ส่งต่อข้ามพอร์ต)",
        "`**169.254.0.0/16` (APIPA / Link-Local)**: วงไอพีอัตโนมัติเมื่อขอรับ IP จาก DHCP Server ล้มเหลว"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. หลักการคำนวณและแบ่งซับเน็ตแบบเจาะลึก (Subnetting & VLSM Master Guide)"
    },
    {
      "type": "paragraph",
      "text": "การแบ่งซับเน็ต (**Subnetting**) คือกระบวนการยืมบิตจากส่วน **Host ID** มาเพิ่มเป็นส่วน **Subnet ID** เพื่อซอยเครือข่ายขนาดใหญ่ให้เป็นเครือข่ายย่อยๆ ช่วยประหยัดพื้นที่ไอพีและจำกัดขอบเขต Broadcast Domain:"
    },
    {
      "type": "diagram",
      "content": "Subnet Mask Extension\n+-------------------------------+-------+-----------------------+\n\n|          Network ID           |Subnet |        Host ID        |\n\n+-------------------------------+-------+-----------------------+\n                                <---s---> <----------h---------->"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.1 สูตรคณิตศาสตร์หัวใจสำคัญของ Subnetting"
    },
    {
      "type": "formula",
      "title": "1. สูตรคำนวณจำนวนเครือข่ายย่อย (Number of Subnets)",
      "formula": "ext{Subnets} = 2^s",
      "description": "",
      "variables": [
        {
          "symbol": "s",
          "meaning": "จำนวนบิตที่ยืมมาจาก Host ID"
        },
        {
          "symbol": "2^s",
          "meaning": "จำนวนเครือข่ายย่อยที่สร้างได้"
        }
      ]
    },
    {
      "type": "formula",
      "title": "2. สูตรคำนวณจำนวนโฮสต์ที่ใช้งานได้จริงต่อซับเน็ต (Usable Hosts per Subnet)",
      "formula": "ext{Usable Hosts} = 2^h - 2",
      "description": "",
      "variables": [
        {
          "symbol": "h",
          "meaning": "จำนวนบิตที่เหลืออยู่ใน Host ID"
        },
        {
          "symbol": "-2",
          "meaning": "หัก 2 แอดเดรสสำหรับ Network ID และ Broadcast ID"
        }
      ]
    },
    {
      "type": "formula",
      "title": "3. สูตรคำนวณระยะก้าวของเครือข่าย (Magic Number / Block Size)",
      "formula": "ext{Block Size} = 256 - \text{Subnet Mask Octet}",
      "description": "",
      "variables": [
        {
          "symbol": "256",
          "meaning": "ค่าฐาน 8 บิตเต็ม (0-255)"
        },
        {
          "symbol": "Mask",
          "meaning": "ค่าตัวเลขอ็อกเท็ตที่ถูกแบ่ง (เช่น 256 - 192 = 64)"
        }
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.2 ตารางสรุป Subnet Mask Cheat Sheet (/24 ถึง /30)"
    },
    {
      "type": "table",
      "headers": [
        "Prefix Length",
        "Subnet Mask",
        "ค่าบิตอ็อกเท็ตสุดท้าย",
        "ระยะก้าว (Block Size)",
        "โฮสต์ทั้งหมด",
        "โฮสต์ใช้งานได้จริง ($2^h - 2$)",
        "Wildcard Mask"
      ],
      "rows": [
        [
          "**/24**",
          "`255.255.255.0`",
          "`00000000`",
          "256",
          "256",
          "**254 โฮสต์**",
          "`0.0.0.255`"
        ],
        [
          "**/25**",
          "`255.255.255.128`",
          "`10000000`",
          "128",
          "128",
          "**126 โฮสต์**",
          "`0.0.0.127`"
        ],
        [
          "**/26**",
          "`255.255.255.192`",
          "`11000000`",
          "64",
          "64",
          "**62 โฮสต์**",
          "`0.0.0.63`"
        ],
        [
          "**/27**",
          "`255.255.255.224`",
          "`11100000`",
          "32",
          "32",
          "**30 โฮสต์**",
          "`0.0.0.31`"
        ],
        [
          "**/28**",
          "`255.255.255.240`",
          "`11110000`",
          "16",
          "16",
          "**14 โฮสต์**",
          "`0.0.0.15`"
        ],
        [
          "**/29**",
          "`255.255.255.248`",
          "`11111000`",
          "8",
          "8",
          "**6 โฮสต์**",
          "`0.0.0.7`"
        ],
        [
          "**/30**",
          "`255.255.255.252`",
          "`11111100`",
          "4",
          "4",
          "**2 โฮสต์** (เหมาะกับสาย Point-to-Point)",
          "`0.0.0.3`"
        ]
      ],
      "aligns": [
        "center",
        "left",
        "center",
        "center",
        "center",
        "center",
        "left"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.3 ตัวอย่างการคำนวณแบบมาตรฐาน (Fixed-Length Subnet Masking - FLSM)"
    },
    {
      "type": "paragraph",
      "text": "**โจทย์**: ต้องการแบ่งวงเครือข่าย `192.168.1.0/24` ออกเป็น **4 เครือข่ายย่อยเท่าๆ กัน**"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**หาจำนวนบิตที่ต้องยืม ($s$)**: $2^s \\ge 4 \\implies s = 2$ บิต (ยืม 2 บิต)",
        "**คำนวณ Subnet Mask ใหม่**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เดิม `/24` รวมยืม 2 บิต $\\to$ เป็น **/26**",
        "รูปแบบฐานสอง: `11111111.11111111.11111111.11000000` $\\to$ `**255.255.255.192`**"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**คำนวณระยะก้าว (Block Size)**: $\text{Block Size} = 256 - 192 = 64$",
        "**ตารางแจกแจงทั้ง 4 Subnets**:"
      ]
    },
    {
      "type": "table",
      "headers": [
        "ลำดับ Subnet",
        "Network ID",
        "First Usable IP",
        "Last Usable IP",
        "Broadcast ID",
        "จำนวนโฮสต์"
      ],
      "rows": [
        [
          "**Subnet 1**",
          "`192.168.1.0/26`",
          "`192.168.1.1`",
          "`192.168.1.62`",
          "`192.168.1.63`",
          "62 โฮสต์"
        ],
        [
          "**Subnet 2**",
          "`192.168.1.64/26`",
          "`192.168.1.65`",
          "`192.168.1.126`",
          "`192.168.1.127`",
          "62 โฮสต์"
        ],
        [
          "**Subnet 3**",
          "`192.168.1.128/26`",
          "`192.168.1.129`",
          "`192.168.1.190`",
          "`192.168.1.191`",
          "62 โฮสต์"
        ],
        [
          "**Subnet 4**",
          "`192.168.1.192/26`",
          "`192.168.1.193`",
          "`192.168.1.254`",
          "`192.168.1.255`",
          "62 โฮสต์"
        ]
      ],
      "aligns": [
        "center",
        "left",
        "left",
        "left",
        "left",
        "left"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.4 การคำนวณซับเน็ตแบบจัดสรรตามความต้องการจริง (VLSM - Variable Length Subnet Masking)"
    },
    {
      "type": "paragraph",
      "text": "**VLSM** เป็นเทคนิคที่ยอมให้แต่ละ Subnet มีขนาด Subnet Mask แตกต่างกันตามจำนวนโฮสต์จริงของแต่ละแผนก ทำให้ประหยัดไอพีได้สูงสุด ไม่สูญเสียแอดเดรสโดยเปล่าประโยชน์"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "กฎทอง 4 ข้อในการจัดสรร VLSM:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**จัดเรียงลำดับความต้องการจากแผนกที่ใช้ Host มากที่สุดไปหาน้อยที่สุดเสมอ**",
        "**หาค่า $h$ ที่สอดคล้องกับ $2^h - 2 \\ge N_{\text{hosts}}$ (จำนวนโฮสต์ที่ต้องการ)**",
        "**คำนวณ Block Size ($2^h$) และ Subnet Mask ($32 - h$)**",
        "**วาง Network ID ถัดไปโดยเริ่มจาก Broadcast ID ก่อนหน้าบวก 1 ทันที**"
      ]
    },
    {
      "type": "heading",
      "level": 4,
      "text": "กรณีศึกษาตัวอย่างโจทย์องค์กรจริง:"
    },
    {
      "type": "paragraph",
      "text": "บริษัทได้รับไอพีหลักคือ `**192.168.10.0/24`** และมีโจทย์ความต้องการของแผนกต่างๆ ดังนี้:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "แผนก **Sales (ฝ่ายขาย)**: ต้องการ 50 โฮสต์",
        "แผนก **IT Support**: ต้องการ 25 โฮสต์",
        "แผนก **HR (ฝ่ายบุคคล)**: ต้องการ 10 โฮสต์",
        "ลิงก์เชื่อมต่อเราเตอร์ **WAN Link (Point-to-Point)**: ต้องการ 2 โฮสต์"
      ]
    },
    {
      "type": "heading",
      "level": 4,
      "text": "ขั้นตอนการคำนวณทีละขั้น:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**แผนก Sales (50 โฮสต์)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "$2^h - 2 \\ge 50 \\implies h = 6$ ($2^6 - 2 = 62$ โฮสต์)",
        "Prefix: $32 - 6 = \text{/26}$ (`255.255.255.192`), $\text{Block Size} = 2^6 = 64$",
        "ได้ Subnet: `**192.168.10.0/26`** (ช่วงใช้งาน `192.168.10.1` ถึง `192.168.10.62`, Broadcast: `192.168.10.63`)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**แผนก IT Support (25 โฮสต์)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เริ่มต้นที่: `192.168.10.64`",
        "$2^h - 2 \\ge 25 \\implies h = 5$ ($2^5 - 2 = 30$ โฮสต์)",
        "Prefix: $32 - 5 = \text{/27}$ (`255.255.255.224`), $\text{Block Size} = 2^5 = 32$",
        "ได้ Subnet: `**192.168.10.64/27`** (ช่วงใช้งาน `192.168.10.65` ถึง `192.168.10.94`, Broadcast: `192.168.10.95`)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**แผนก HR (10 โฮสต์)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เริ่มต้นที่: `192.168.10.96`",
        "$2^h - 2 \\ge 10 \\implies h = 4$ ($2^4 - 2 = 14$ โฮสต์)",
        "Prefix: $32 - 4 = \text{/28}$ (`255.255.255.240`), $\text{Block Size} = 2^4 = 16$",
        "ได้ Subnet: `**192.168.10.96/28`** (ช่วงใช้งาน `192.168.10.97` ถึง `192.168.10.110`, Broadcast: `192.168.10.111`)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ลิงก์ WAN Point-to-Point (2 โฮสต์)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "เริ่มต้นที่: `192.168.10.112`",
        "$2^h - 2 \\ge 2 \\implies h = 2$ ($2^2 - 2 = 2$ โฮสต์พอดี)",
        "Prefix: $32 - 2 = \text{/30}$ (`255.255.255.252`), $\text{Block Size} = 2^2 = 4$",
        "ได้ Subnet: `**192.168.10.112/30`** (ช่วงใช้งาน `192.168.10.113` ถึง `192.168.10.114`, Broadcast: `192.168.10.115`)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**พื้นที่ไอพีที่เหลือสำหรับขยายในอนาคต (Free Space)**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "ตั้งแต่ `192.168.10.116` ถึง `192.168.10.255` (ยังเหลือว่างอีกถึง 140 IP!)"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. โปรโตคอลควบคุมและรายงานข้อผิดพลาด ICMP (Internet Control Message Protocol)"
    },
    {
      "type": "paragraph",
      "text": "**ICMP (RFC 792)** เป็นโปรโตคอลเสริมใน Network Layer ทำหน้าที่ส่งข้อความแจ้งเตือนข้อผิดพลาด (Error Reporting) และตรวจสอบวินิจฉัยสภาพเครือข่าย (Diagnostic Messages):"
    },
    {
      "type": "table",
      "headers": [
        "ชนิดข้อความ (Message Type)",
        "Type / Code",
        "วัตถุประสงค์และการทำงาน (Purpose & Function)"
      ],
      "rows": [
        [
          "**Echo Request**",
          "Type 8, Code 0",
          "ส่งคำร้องขอตรวจสอบการเชื่อมต่อไปยังโฮสต์ปลายทาง (ใช้ในคำสั่ง `ping`)"
        ],
        [
          "**Echo Reply**",
          "Type 0, Code 0",
          "ส่งการตอบรับกลับว่าโฮสต์มีชีวิตและสื่อสารได้ปกติ (ตอบรับ `ping`)"
        ],
        [
          "**Destination Unreachable**",
          "Type 3",
          "แจ้งเตือนเมื่อไม่สามารถส่งแพ็กเก็ตถึงปลายทางได้"
        ],
        [
          "- Network Unreachable",
          "Type 3, Code 0",
          "เราเตอร์ไม่มีเส้นทางไปสู่เครือข่ายปลายทางในตาราง Routing Table"
        ],
        [
          "- Host Unreachable",
          "Type 3, Code 1",
          "หาโฮสต์ปลายทางไม่พบ (เช่น การส่ง ARP Request ล้มเหลว)"
        ],
        [
          "- Port Unreachable",
          "Type 3, Code 3",
          "พอร์ตปลายทางไม่เปิดให้บริการ (มักพบใน UDP Socket)"
        ],
        [
          "**Time Exceeded (TTL Expired)**",
          "Type 11, Code 0",
          "แพ็กเก็ตหมดอายุ (ค่า TTL ลดลงเหลือ 0 ในระหว่างทาง ใช้ในคำสั่ง `tracert`)"
        ],
        [
          "**Redirect**",
          "Type 5, Code 0",
          "เราเตอร์แนะนำให้โฮสต์ส่งข้อมูลผ่านเกตเวย์อื่นที่มีเส้นทางสั้นกว่า"
        ]
      ],
      "aligns": [
        "left",
        "left",
        "left"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.1 การประยุกต์ใช้งานคำสั่งตรวจสอบเครือข่าย"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**คำสั่ง `ping`**: ส่งแพ็กเก็ต **ICMP Echo Request** เพื่อทดสอบความสามารถในการเข้าถึง (Reachability) และวัดเวลาเดินทางไปกลับของสัญญาณ (Round-Trip Time - RTT)",
        "**คำสั่ง `tracert` / `traceroute`**: ทำการค้นหาเส้นทางแบบทีละ Hop โดย:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "ส่งแพ็กเก็ตชุดแรกด้วย `TTL = 1` $\\to$ เราเตอร์ตัวแรกได้รับ ลด TTL เหลือ 0 แล้วส่งกลับ **ICMP Time Exceeded (Type 11)** ทำให้ทราบ IP ของ Hop ที่ 1",
        "ส่งแพ็กเก็ตถัดไปโดยเพิ่ม `TTL = 2, 3, 4, ...` ทีละขั้น เพื่อบันทึก IP ของเราเตอร์ทุกตัวตลอดเส้นทางจนถึงปลายทาง"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. คำสั่งคอนฟิก IP Address บนอุปกรณ์ Huawei VRP"
    },
    {
      "type": "table",
      "headers": [
        "คำสั่งคอนฟิก (Configuration Command)",
        "การทำงานและผลลัพธ์ (Function & Effect)"
      ],
      "rows": [
        [
          "`[Huawei] interface GigabitEthernet 0/0/0`",
          "เข้าสู่มุมมอง Interface View ของพอร์ต GE0/0/0"
        ],
        [
          "`[Huawei-GE0/0/0] ip address 192.168.1.254 255.255.255.0`",
          "กำหนดหมายเลข IPv4 และ Subnet Mask แบบเต็ม"
        ],
        [
          "`[Huawei-GE0/0/0] ip address 192.168.1.254 24`",
          "หรือกำหนดโดยใช้ Prefix Length (/24) สะดวกรวดเร็วกว่า"
        ],
        [
          "`[Huawei] display ip interface brief`",
          "แสดงสรุปสถานะ Physical/Protocol และ IP ของทุกพอร์ต"
        ],
        [
          "`[Huawei] display ip routing-table`",
          "แสดงตารางการหาเส้นทางระดับ Layer 3 ทั้งหมดของอุปกรณ์"
        ]
      ],
      "aligns": [
        "left",
        "left"
      ]
    }
  ],
  "9": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. แนวคิดพื้นฐานของการหาเส้นทาง (What Is IP Routing?)"
    },
    {
      "type": "paragraph",
      "text": "**การหาเส้นทาง (IP Routing)** คือ กระบวนการที่เราเตอร์ (Router) หรือสวิตช์เลเยอร์ 3 (Layer 3 Switch) ทำการค้นหา ตัดสินใจ และส่งต่อแพ็กเก็ต IP จากเครือข่ายต้นทาง (Source Network) ไปยังเครือข่ายปลายทาง (Destination Network) ที่อยู่ต่าง Subnet ผ่านอุปกรณ์ตัวกลางต่างๆ จนถึงปลายทาง"
    },
    {
      "type": "diagram",
      "content": "\n[โฮสต์ PC-A (192.168.1.10)]\n\n          |\n\n     (เกตเวย์ 192.168.1.1)\n\n    [ Router 1 ] ========= [ Router 2 ] ========= [ Router 3 ]\n\n                                                         |\n\n                                                   (เกตเวย์ 10.1.1.1)\n\n                                                         |\n\n                                             [โฮสต์ PC-B (10.1.1.20)]\n\n * เราเตอร์แต่ละตัวจะเปิดดู Destination IP และค้นหาตาราง IP Routing Table เพื่อตัดสินใจส่งต่อทีละ Hop *\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. โครงสร้างของตารางการหาเส้นทาง (IP Routing Table Architecture)"
    },
    {
      "type": "paragraph",
      "text": "เราเตอร์ทุกตัวจะเก็บรักษา **ตารางเส้นทาง (IP Routing Table)** ไว้ในหน่วยความจำ ซึ่งประกอบด้วยฟิลด์สำคัญดังต่อไปนี้:"
    },
    {
      "type": "diagram",
      "content": "\n[Huawei] display ip routing-table\n\nDestination/Mask    Proto   Pre  Cost      Flags NextHop         Interface\n\n192.168.1.0/24      Direct  0    0           D   192.168.1.254   GigabitEthernet0/0/1\n\n10.1.1.0/24         OSPF    10   20          D   192.168.12.2    GigabitEthernet0/0/2\n\n172.16.0.0/16       Static  60   0           RD  192.168.13.3    GigabitEthernet0/0/3\n\n0.0.0.0/0           Static  60   0           RD  192.168.100.1   GigabitEthernet0/0/0\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.1 คำอธิบายฟิลด์ในตาราง IP Routing Table"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Destination / Mask**: เครือข่ายปลายทางและความยาวซับเน็ตมาร์ก"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Proto (Protocol)**: แหล่งที่มาของเส้นทาง (Direct, Static, OSPF, IS-IS, RIP, BGP)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Pre (Preference / Administrative Distance)**: ค่าความน่าเชื่อถือของแหล่งที่มาของเส้นทาง (ค่ายิ่งน้อย ยิ่งน่าเชื่อถือสูง)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Cost / Metric**: ค่าต้นทุนหรือระยะทางของเส้นทางนั้นๆ ที่คำนวณโดยโปรโตคอลหาเส้นทาง (ค่ายิ่งน้อย ยิ่งดีที่สุด)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Flags**: สถานะของเส้นทาง (เช่น `D` = Downloaded to FIB เพื่อส่งต่อข้อมูลจริง, `R` = Relied/Recursive Route)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**NextHop**: ไอพีแอดเดรสของอินเทอร์เฟซของอุปกรณ์ตัวถัดไปที่จะรับช่วงแพ็กเก็ตไปส่งต่อ"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Interface**: พอร์ตขาออกของอุปกรณ์ตัวนี้ที่จะใช้ส่งแพ็กเก็ตออกไป (Outbound Interface)"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. ค่า Route Preference มาตรฐานบนระบบปฏิบัติการ Huawei VRP"
    },
    {
      "type": "paragraph",
      "text": "เมื่อเราเตอร์เรียนรู้เส้นทางไปยังเครือข่ายปลายทางเดียวกันจากหลายแหล่งที่มา เราเตอร์จะคัดเลือกเฉพาะเส้นทางที่มาจากโปรโตคอลที่มีค่า **Preference ต่ำที่สุด** บรรจุลงสู่ตาราง Routing Table:"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| แหล่งที่มาของเส้นทาง (Route Source) | ค่า Preference บน Huawei VRP | ระดับความน่าเชื่อถือ           |\n\n+-------------------------------------+------------------------------+-------------------------------+\n\n| **Direct (เชื่อมต่อโดยตรง)**        | **0**                        | สูงสุด (Absolute Priority)     |\n\n| **OSPF (ภายใน Area เดียวกัน/ข้าม)** | **10**                       | สูงมาก                        |\n\n| **IS-IS**                           | **15**                       | สูง                           |\n\n| **Static Route (เส้นทางแบบกำหนดเอง)**| **60**                      | ปานกลาง-สูง (ผู้ดูแลกำหนดเอง)  |\n\n| **RIP**                             | **100**                      | ปานกลาง                       |\n\n| **OSPF ASE / NSSA (เราต์ภายนอก)**   | **150**                      | ปานกลาง-ต่ำ                   |\n\n| **BGP (EBGP / IBGP)**               | **255**                      | ต่ำสุด                        |\n\n+---------------------------------------------------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. กฎ 4 ลำดับขั้นในการคัดเลือกเส้นทางของ Router (Route Selection Principles)"
    },
    {
      "type": "diagram",
      "content": "\n[กฎข้อที่ 1: Longest Prefix Match Rule (กฎหน้ากากยาวที่สุดชนะเสมอ)]\n\n เมื่อมีแพ็กเก็ตส่งมา เราเตอร์จะค้นหาเส้นทางที่มี Subnet Mask ยาวที่สุด (ละเอียดเจาะจงที่สุด) เพื่อส่งต่อ\n\n               |\n\n               v (หากมีความยาว Mask เท่ากัน แต่มาจากคนละโปรโตคอล)\n\n[กฎข้อที่ 2: Lowest Route Preference (เลือกโปรโตคอลที่น่าเชื่อถือที่สุด)]\n\n คัดเลือกเส้นทางที่มีค่า Preference ต่ำที่สุด บันทึกลง Routing Table (เช่น OSPF=10 ชนะ Static=60)\n\n               |\n\n               v (หากมาจากโปรโตคอลเดียวกัน และไปยังปลายทางเดียวกัน)\n\n[กฎข้อที่ 3: Lowest Metric / Cost (เลือกเส้นทางที่มีต้นทุนต่ำที่สุด)]\n\n คัดเลือกเส้นทางที่มีค่า Cost ต่ำที่สุด\n\n               |\n\n               v (หาก Preference และ Cost เท่ากันพอดีทุกประการ)\n\n[กฎข้อที่ 4: Equal-Cost Multi-Path (ECMP - การกระจายโหลดบนหลายเส้นทาง)]\n\n เราเตอร์จะติดตั้งทั้งสองเส้นทางลงสู่ตาราง และทำ Load Balancing กระจายทราฟฟิกออกพร้อมกันทั้งสองพอร์ต\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. การกำหนดเส้นทางแบบคงที่และลูกเล่นขั้นสูง (Static Routing & Advanced Features)"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.1 Static Route และ Default Route"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Static Route**: การที่วิศวกรกำหนดเส้นทางแบบแมนนวล เหมาะกับเครือข่ายขนาดเล็ก โครงสร้างไม่ซับซ้อน ปลอดภัย และไม่สิ้นเปลืองแบนด์วิดท์ส่งแพ็กเก็ตควบคุม"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "คำสั่ง: `ip route-static <destination-ip> <mask> <nexthop-ip>`"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Default Route (`0.0.0.0/0` หรือ `0.0.0.0 0.0.0.0`)**: เส้นทางพิเศษที่ครอบคลุมทุกแอดเดรสบนโลก ใช้ส่งต่อแพ็กเก็ตที่ไม่ตรงกับรายการใดๆ ใน Routing Table มักใช้ชี้ไปยังเกตเวย์ของผู้ให้บริการอินเทอร์เน็ต (ISP)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "คำสั่ง: `ip route-static 0.0.0.0 0 192.168.100.1`"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.2 Floating Static Route (การทำเส้นทางสำรอง)"
    },
    {
      "type": "paragraph",
      "text": "การสร้าง Static Route สำรอง โดยการกำหนดค่า **Preference ให้สูงกว่าปกติ** (เช่น ปรับเป็น 100) เพื่อให้เส้นทางสำรองนี้ **ซ่อนตัวอยู่** และจะไม่ปรากฏในตาราง Routing Table ตราบใดที่เส้นทางหลัก (Preference 60) ยังทำงานได้ปกติ แต่เมื่อเส้นทางหลักเกิดขาดลง เส้นทางสำรองจะปรากฏขึ้นมาทำงานแทนทันทีโดยอัตโนมัติ:"
    },
    {
      "type": "diagram",
      "content": "\n[Router A] ---------------- Link หลัก (1 Gbps) ---------------- [Router B]\n\n           \\                                                 /\n\n            +------------- Link สำรอง (100 Mbps) -----------+\n\n[Router A] ip route-static 10.1.1.0 24 192.168.12.2                 # เส้นทางหลัก (Preference 60 ดีฟอลต์)\n\n[Router A] ip route-static 10.1.1.0 24 192.168.21.2 preference 100  # เส้นทางสำรอง (Floating Route)\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.3 การยุบรวมเส้นทางและกับดัก Routing Loop (Route Summarization & Null0)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Route Summarization (CIDR / Supernetting)**: การรวมเครือข่ายย่อยหลายๆ เครือข่ายเข้าด้วยกันเป็นเส้นทางเดียว (เช่น รวม `10.1.0.0/24`, `10.1.1.0/24`, `10.1.2.0/24`, `10.1.3.0/24` `"
      ]
    },
    {
      "type": "paragraph",
      "text": "\\to ` ยุบเป็น `**10.1.0.0/22`**) ช่วยลดขนาดตาราง Routing Table และลดภาระ CPU ของเราเตอร์"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**การแก้ปัญหา Routing Blackhole / Loop ด้วย Blackhole Route (`NULL0`)**: หากมีการยุบรวมเครือข่ายที่ครอบคลุมแอดเดรสที่ไม่มีอยู่จริง อาจทำให้เกิดปัญหาลูปเมื่อมีทราฟฟิกส่งมาหาแอดเดรสที่ไม่มีจริงนั้น การสร้างเส้นทางทิ้งขยะลงพอร์ต Null0 จะช่วยตัดลูปได้อย่างเด็ดขาด:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "คำสั่ง: `ip route-static 10.1.0.0 255.255.252.0 NULL0`"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. เจาะลึกกระบวนการส่งต่อแพ็กเก็ตข้ามเราเตอร์แบบ Step-by-Step"
    },
    {
      "type": "diagram",
      "content": "\n[PC1: 192.168.1.10] ------> [ Router 1 ] --------------> [ Router 2 ] ------> [PC2: 10.1.1.20]\n\n  (Src MAC: MAC-PC1)          (Src MAC: MAC-R1_out)        (Src MAC: MAC-R2_out)\n\n  (Dst MAC: MAC-R1_in)        (Dst MAC: MAC-R2_in)         (Dst MAC: MAC-PC2)\n\n  [Src IP: 192.168.1.10]      [Src IP: 192.168.1.10]       [Src IP: 192.168.1.10]   <--- IP เดิมคงที่ตลอดทาง\n\n  [Dst IP: 10.1.1.20]         [Dst IP: 10.1.1.20]          [Dst IP: 10.1.1.20]      <--- IP เดิมคงที่ตลอดทาง\n\n  [TTL: 64]                   [TTL: 63 (ลดลง 1)]           [TTL: 62 (ลดลง 1)]\n"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**เมื่อแพ็กเก็ตผ่านเราเตอร์แต่ละตัว**:"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Layer 2 MAC Header**: ถูกแกะออกและ **เขียนทับใหม่ทั้งหมด (Rewritten)** โดย Source MAC จะเปลี่ยนเป็น MAC ของพอร์ตขาออกของเราเตอร์ตัวนั้น และ Destination MAC จะเปลี่ยนเป็น MAC ของอุปกรณ์ตัวถัดไป (Next-Hop)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Layer 3 IP Header**: **ไม่มีการเปลี่ยนแปลง IP ต้นทางและปลายทาง** (ยกเว้นกรณีทำ NAT), ค่า **TTL จะถูกลดลง `1`**, และค่า **Header Checksum จะถูกคำนวณใหม่**"
      ]
    },
    {
      "type": "divider"
    }
  ],
  "10": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. ภาพรวมโปรโตคอลการหาเส้นทางแบบไดนามิก (Dynamic Routing Overview)"
    },
    {
      "type": "paragraph",
      "text": "ในการบริหารจัดการเครือข่ายขนาดกลางถึงขนาดใหญ่ที่มีเราเตอร์จำนวนมาก การตั้งค่า Static Route จะกลายเป็นเรื่องยุ่งยากและไม่สามารถปรับตัวตามสภาพโครงสร้างเครือข่ายที่เปลี่ยนแปลงได้ จึงจำเป็นต้องใช้ **โปรโตคอลการหาเส้นทางแบบไดนามิก (Dynamic Routing Protocols)** เพื่อให้เราเตอร์ค้นพบและแลกเปลี่ยนข้อมูลเส้นทางระหว่างกันโดยอัตโนมัติ"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| การจำแนกตามขอบเขต (Scope)     | โปรโตคอลภายในองค์กร (IGP)         | โปรโตคอลระหว่างองค์กร (EGP)   |\n\n|                                | RIP, OSPF, IS-IS                 | BGP (Border Gateway Protocol) |\n\n+--------------------------------+----------------------------------+-------------------------------+\n\n| การจำแนกตามอัลกอริทึม (Algorithm)| Distance-Vector Routing Protocols | Link-State Routing Protocols   |\n\n|                                | RIP, BGP                         | **OSPF**, IS-IS               |\n\n+--------------------------------+----------------------------------+-------------------------------+\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. การเปรียบเทียบเชิงลึก: Distance-Vector vs. Link-State Protocols"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. สถาปัตยกรรมและแนวคิดหลักของ OSPF (OSPF Core Concepts)"
    },
    {
      "type": "paragraph",
      "text": "**OSPF (Open Shortest Path First - RFC 2328)** เป็นโปรโตคอลแบบ Link-State ที่ทำงานบน Layer 3 โดยตรง (Encapsulate ลงใน IP Packet โดยมี **Protocol Number = 89**)"
    },
    {
      "type": "diagram",
      "content": "\n[OSPF Convergence 3 ขั้นตอนหลัก]\n\n1. แลกเปลี่ยน LSA ระหว่างกัน --------> 2. รวมกันสร้างฐานข้อมูล LSDB --------> 3. รัน Dijkstra SPF Algorithm\n\n   (Link State Advertisements)           (Link State Database: แผนที่ระบบ)       ได้ตาราง Routing Table ที่ไร้ลูป\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.1 หมายเลขประจำตัวเราเตอร์ (Router ID)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "หมายเลข 32 บิต ในรูปแบบ Dotted Decimal (เช่น `1.1.1.1`) ใช้ระบุตัวตนของเราเตอร์ในระบบ OSPF อย่างเป็นเอกลักษณ์"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**ลำดับความสำคัญในการเลือก Router ID**:"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "ค่าที่วิศวกรกำหนดเองแบบแมนนวล (Manual Configuration - **แนะนำสูงสุด**)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "หมายเลข IP Address ที่สูงที่สุดของ **Loopback Interface**"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "หมายเลข IP Address ที่สูงที่สุดของ **Physical Interface** ที่เปิดทำงานอยู่"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.2 ค่า OSPF Metric / Cost"
    },
    {
      "type": "paragraph",
      "text": "คำนวณจากแบนด์วิดท์ของลิงก์ตามสูตร:"
    },
    {
      "type": "callout",
      "text": "📐 **Cost**: `\\frac{Reference Bandwidth{Interface Bandwidth`"
    },
    {
      "type": "paragraph",
      "text": "*(ค่ามาตรฐาน Reference Bandwidth บน VRP คือ $100  Mbps$ หรือ $10^8  bps$ สามารถปรับเปลี่ยนได้ด้วยคำสั่ง `bandwidth-reference`)*"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.3 แพ็กเก็ต OSPF ทั้ง 5 ชนิด (OSPF Packet Types)"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| ชนิดแพ็กเก็ต (Packet Type)        | หน้าที่และการทำงาน (Function & Role)                          |\n\n+------------------------------------+---------------------------------------------------------------+\n\n| **1. Hello Packet**                | ค้นหา สร้าง และดูแลความสัมพันธ์เพื่อนบ้าน (Neighbor/Adjacency)|\n\n| **2. Database Description (DD)**   | ส่งข้อมูลสรุปสารบัญ LSA ใน LSDB เพื่อตรวจสอบความสอดคล้อง      |\n\n| **3. Link State Request (LSR)**    | ร้องขอรายละเอียดของ LSA รายการที่ตนเองยังขาดอยู่              |\n\n| **4. Link State Update (LSU)**     | ส่งแพ็กเก็ตบรรจุเนื้อหา LSA ตัวเต็มเพื่ออัปเดตข้อมูลให้เพื่อนบ้าน|\n\n| **5. Link State Ack (LSAck)**      | ส่งข้อความยืนยันการได้รับ LSU เพื่อความถูกต้องแน่นอน (Reliability)|\n\n+---------------------------------------------------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. สถานะความสัมพันธ์เพื่อนบ้าน 7 ลำดับขั้นของ OSPF (OSPF State Machine)"
    },
    {
      "type": "paragraph",
      "text": "เราเตอร์ OSPF สองตัวที่เชื่อมต่อกันจะพัฒนาความสัมพันธ์ผ่าน **7 สถานะ (Seven Neighbor States)**:"
    },
    {
      "type": "diagram",
      "content": "\n[Down] ---> [Init] ---> [2-Way] ---> [ExStart] ---> [Exchange] ---> [Loading] ---> [Full]\n\n (เริ่มต้น)  (ได้รับ      (เห็นชื่อตนเอง (เลือก Master/   (ส่งสารบัญ DD)  (ส่ง LSR/LSU   (ฐานข้อมูล LSDB\n\n             Hello)      ใน Hello)     Slave & Seq No)                  อัปเดต LSA)    ซิงค์ตรงกัน 100%)\n"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Down**: ยังไม่ได้รับข้อมูล OSPF ใดๆ จากเพื่อนบ้าน"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Init**: ได้รับ Hello Packet จากเพื่อนบ้าน แต่ในฟิลด์ Neighbor List ยังไม่มี Router ID ของเรา"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**2-Way**: ได้รับ Hello Packet ที่ปรากฏ Router ID ของเราอยู่ใน Neighbor List (แสดงว่าเกิดการสื่อสารสองทิศทางแล้ว `"
      ]
    },
    {
      "type": "paragraph",
      "text": "\\to ` **จุดที่มีการเลือก DR/BDR บนเครือข่าย Broadcast**)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ExStart**: เจรจาเลือกอุปกรณ์ตัวใดเป็น **Master** หรือ **Slave** (ตัดสินจาก Router ID ที่สูงกว่า) และกำหนดค่า Sequence Number เริ่มต้นของแพ็กเก็ต DD"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Exchange**: แลกเปลี่ยนแพ็กเก็ต Database Description (DD) เพื่อเปรียบเทียบสารบัญข้อมูล LSDB"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Loading**: ส่งแพ็กเก็ต LSR เพื่อร้องขอข้อมูล LSA ที่ยังขาดอยู่ และรับส่ง LSU / LSAck"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Full**: สถานะสมบูรณ์แบบสูงสุด ข้อมูลในฐานข้อมูล **LSDB ของเราเตอร์ทั้งสองตรงกัน 100% (Fully Synchronized)** พร้อมสำหรับการคำนวณเส้นทาง"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. ประเภทของเครือข่าย OSPF และบทบาทของ DR / BDR"
    },
    {
      "type": "diagram",
      "content": "\n(1) เครือข่ายแบบ Broadcast (เช่น Ethernet): จำนวนความสัมพันธ์ = $N($N-1$)/2$\n\n    [R1] ----- [R2]\n\n|   \\ /   |     <--- ทราฟฟิก LSA ซ้ำซ้อนมหาศาลหากทุกตัวคุยกันหมด! |   / \\   |\n\n    [R3] ----- [R4]\n\n\n\n(2) การแต่งตั้ง DR / BDR: ลดจำนวน Adjacency เหลือ $N-1$\n\n              [ DR (หัวหน้า) ] <--- ทุกตัวสร้าง Full Adjacency กับ DR และ BDR เท่านั้น\n\n             /       |            [ DRother ]  [ BDR (รอง) ]  [ DRother ]\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.1 DR (Designated Router) และ BDR (Backup Designated Router)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**วัตถุประสงค์**: บนเครือข่ายประเภท Broadcast (เช่น อีเทอร์เน็ตที่เชื่อมกันผ่านสวิตช์) หากเราเตอร์ทุกตัวสร้าง Adjacency ถึงกันหมด จะเกิดความสัมพันธ์ $N($N-1$)/2$ คู่ ซึ่งสิ้นเปลืองแบนด์วิดท์อย่างมาก จึงต้องมีการเลือก **DR (เราเตอร์หัวหน้า)** และ **BDR (เราเตอร์รอง)** เพื่อเป็นจุดศูนย์กลางในการรับและกระจาย LSA"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**เราเตอร์ตัวอื่น (DRother)**: จะสร้างความสัมพันธ์ระดับ **Full กับเฉพาะ DR และ BDR เท่านั้น** ส่วนระหว่าง DRother ด้วยกันเองจะหยุดความสัมพันธ์ไว้ที่สถานะ **2-Way**"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**กฎการเลือก DR/BDR**:"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "พิจารณาค่า **OSPF Interface Priority** (ค่า `0 - 255`, ค่าเริ่มต้นคือ `1`, ค่ายิ่งมากยิ่งดี, หากตั้งเป็น `0` จะไม่มีสิทธิ์เป็น DR/BDR ตลอดกาล)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "หาก Priority เท่ากัน จะพิจารณา **Router ID ที่สูงที่สุด**"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ไม่สามารถแย่งชิงสิทธิ์ได้ (Non-preemptive)**: หาก DR ได้รับเลือกแล้ว แม้จะมีเราเตอร์ใหม่ที่มี Priority สูงกว่าเปิดขึ้นมาทีหลัง ก็จะไม่สามารถชิงตำแหน่ง DR ได้จนกว่า DR เดิมจะ Down"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "5.2 มัลติคาสต์แอดเดรสของ OSPF"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`**224.0.0.5`**: ส่งถึง **เราเตอร์ OSPF ทุกตัว (All OSPF Routers)**"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`**224.0.0.6`**: ส่งถึงเฉพาะ **DR และ BDR (All DR/BDR Routers)**"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. สถาปัตยกรรม OSPF แบบหลายพื้นที่ (Multi-Area OSPF Architecture)"
    },
    {
      "type": "diagram",
      "content": "\n                       +---------------------------------------+\n\n                       |        Backbone Area (Area 0)         |\n\n                       |             [ Core Router ]           |\n\n                       +-------------------+-------------------+\n\n                                          /                                          /                    +----------------------+     +----------------------+\n\n                 |      Area 1          |     |      Area 2          |\n\n                 | [ABR 1] --- [IR 1]   |     | [ABR 2] --- [IR 2]   |\n\n                 +----------------------+     +----------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.1 ทำไมต้องแบ่ง OSPF ออกเป็นหลาย Area?"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**ลดขนาดฐานข้อมูล LSDB**: เราเตอร์ในแต่ละ Area ไม่จำเป็นต้องเก็บรายละเอียดโครงสร้างย่อยของ Area อื่น"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**จำกัดขอบเขตการคำนวณ SPF**: เมื่อมีสายขาดใน Area 1 จะส่งผลให้เกิดการคำนวณ SPF ซ้ำเฉพาะภายใน Area 1 เท่านั้น ไม่กระทบ Area 0 หรือ Area 2"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**รองรับการยุบรวมเส้นทาง (Route Summarization)**: สามารถยุบรวมเครือข่ายตรงรอยต่อระหว่าง Area ได้"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.2 กฎสำคัญของโครงสร้าง Multi-Area"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Backbone Area (Area 0 / Area 0.0.0.0)**: คือแกนกลางของระบบ OSPF"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**กฎการเชื่อมต่อสองระดับ**: Non-Backbone Area ทั้งหมด (เช่น Area 1, Area 2) **จะต้องเชื่อมต่อทางกายภาพหรือทางตรรกะตรงเข้าสู่ Area 0 เสมอ** เพื่อป้องกันปัญหาการเกิดลูปการหาเส้นทางระหว่าง Area"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.3 บทบาทหน้าที่ของเราเตอร์ OSPF แต่ละชนิด (OSPF Router Types)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Internal Router (IR)**: เราเตอร์ที่ทุกอินเทอร์เฟซสังกัดอยู่ใน Area เดียวกันทั้งหมด"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Area Border Router (ABR)**: เราเตอร์ที่ทำหน้าที่เชื่อมต่อระหว่าง Area 0 กับ Area อื่นๆ"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Backbone Router (BR)**: เราเตอร์ใดๆ ที่มีอินเทอร์เฟซอย่างน้อยหนึ่งพอร์ตอยู่ใน Area 0"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**Autonomous System Boundary Router (ASBR)**: เราเตอร์ที่ทำหน้าที่เชื่อมต่อและนำเข้าเส้นทาง (Route Redistribution) จากภายนอก OSPF เช่น จาก BGP, RIP, หรือ Static Route"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "7. คำสั่งการตั้งค่าคอนฟิก OSPF บน Huawei VRP"
    },
    {
      "type": "diagram",
      "content": "\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| คำสั่งคอนฟิก (Configuration Command)                       | การทำงานและผลลัพธ์ (Function & Effect)                |\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| [Huawei] ospf 1 router-id 1.1.1.1                         | เริ่มรันโปรเซส OSPF 1 และกำหนด Router ID เป็น 1.1.1.1 |\n\n| [Huawei-ospf-1] area 0                                    | เข้าสู่มุมมองการตั้งค่า Backbone Area 0              |\n\n| [Huawei-ospf-1-area-0.0.0.0] network 192.168.1.0 0.0.0.255| ประกาศเน็ตเวิร์กและเปิด OSPF บนพอร์ตด้วย Wildcard Mask|\n\n| [Huawei-ospf-1-area-0.0.0.0] network 192.168.1.1 0.0.0.0  | หรือระบุเจาะจง IP ของพอร์ตด้วย Wildcard 0.0.0.0       |\n\n| [Huawei-GE0/0/1] ospf dr-priority 100                     | ปรับค่า OSPF Priority บนพอร์ตเพื่อเลือกตั้ง DR        |\n\n| [Huawei-GE0/0/1] ospf cost 50                             | ปรับค่า Cost บนพอร์ตแบบแมนนวล                         |\n\n| [Huawei-ospf-1] bandwidth-reference 1000                  | ปรับค่า Reference Bandwidth เป็น 1000 Mbps            |\n\n| [Huawei] display ospf peer brief                          | แสดงสรุปสถานะความสัมพันธ์เพื่อนบ้าน (Neighbor Table)  |\n\n| [Huawei] display ospf lsdb                                | แสดงฐานข้อมูลสถานะลิงก์ทั้งหมด (Link State Database)  |\n\n| [Huawei] display ospf routing                             | แสดงตารางการหาเส้นทางเฉพาะของ OSPF                    |\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    }
  ],
  "11": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. บทนำ: แรงผลักดันในการเปลี่ยนผ่านสู่ IPv6 (Why IPv6?)"
    },
    {
      "type": "paragraph",
      "text": "ตลอดหลายทศวรรษที่ผ่านมา อินเทอร์เน็ตเติบโตอย่างก้าวกระโดด ทำให้โครงสร้างโปรโตคอล IPv4 แบบดั้งเดิมเริ่มเผชิญกับข้อจำกัดทางเทคนิคขั้นวิกฤต:"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| ปัญหาและข้อจำกัดของ IPv4 (IPv4 Limitations)  | แนวทางแก้ไขที่สมบูรณ์แบบใน IPv6 (IPv6 Solutions)   |\n\n+----------------------------------------------+----------------------------------------------------+\n\n| 1. พื้นที่แอดเดรสหมดลง (Address Exhaustion)  | ขยายเป็น 128 บิต ($3.4 \\times 10^{38}$ แอดเดรส มหาศาล)      |\n\n| 2. โครงสร้าง Header ซับซ้อนและมีขนาดไม่คงที่ | กำหนด Fixed Base Header ขนาดคงที่ 40 ไบต์          |\n\n| 3. ขาดความปลอดภัยระดับโปรโตคอลในตัว          | ออกแบบรองรับ **IPsec** ในตัวแบบ Native             |\n\n| 4. ปัญหาพายุ Broadcast จาก ARP               | ยกเลิก Broadcast โดยสิ้นเชิง เปลี่ยนมาใช้ **NDP Multicast**|\n\n| 5. ตาราง Routing Table ทั่วโลกมีขนาดใหญ่เกินไป| จัดสรรแอดเดรสตามลำดับชั้นอย่างมีระบบ (Hierarchical)|\n\n| 6. ความยุ่งยากในการตั้งค่าไอพีของโฮสต์       | รองรับระบบ Plug-and-Play ด้วย **SLAAC** อัตโนมัติ  |\n\n+---------------------------------------------------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. โครงสร้างส่วนหัวของแพ็กเก็ต IPv6 (IPv6 Header Architecture)"
    },
    {
      "type": "paragraph",
      "text": "IPv6 ปรับปรุงประสิทธิภาพการส่งต่อข้อมูลระดับฮาร์ดแวร์ โดยตัดฟิลด์ที่ไม่จำเป็นออก และกำหนดให้ **Base Header มีขนาดคงที่ 40 ไบต์เสมอ (Fixed 40-byte Header)**:"
    },
    {
      "type": "diagram",
      "content": "\n 0                   1                   2                   3\n\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|Version| Traffic Class |           Flow Label                  |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|         Payload Length        |  Next Header  |   Hop Limit   |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|                                                               |\n\n+                                                               +\n\n|                                                               |\n\n+                         Source Address                        +\n\n|                           (128 Bits)                          |\n\n+                                                               +\n\n|                                                               |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n|                                                               |\n\n+                                                               +\n\n|                                                               |\n\n+                      Destination Address                      +\n\n|                           (128 Bits)                          |\n\n+                                                               +\n\n|                                                               |\n\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.1 คำอธิบายฟิลด์ใน IPv6 Base Header"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Version (4 บิต)**: ระบุเวอร์ชันโปรโตคอล มีค่าเป็น `6` (ไบนารี `0110`)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Traffic Class (8 บิต)**: เทียบเท่ากับฟิลด์ Type of Service (DSCP) ใน IPv4 ใช้สำหรับทำ QoS"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Flow Label (20 บิต)**: ใช้ระบุกลุ่มของแพ็กเก็ตที่อยู่ในกระแสข้อมูลเดียวกัน (Flow) เพื่อให้เราเตอร์จัดการส่งต่อได้อย่างรวดเร็วโดยไม่ต้องแกะดูพอร์ต TCP/UDP"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Payload Length (16 บิต)**: ความยาวของข้อมูลต่อท้าย (รวมส่วนหัวขยาย Extension Headers และ Data) ไม่รวมขนาด 40 ไบต์ของ Base Header"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Next Header (8 บิต)**: ทำหน้าที่ 2 อย่าง: ระบุโปรโตคอลชั้นบน (เช่น TCP=6, UDP=17, ICMPv6=58) หรือชี้ไปยัง **ส่วนหัวขยาย (Extension Header)** ตัวถัดไป"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Hop Limit (8 บิต)**: เทียบเท่ากับฟิลด์ **TTL ใน IPv4** โดยเราเตอร์แต่ละตัวจะลดค่าลง 1 หากเหลือ 0 จะดรอปแพ็กเก็ตทิ้ง"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Source Address (128 บิต)**: ไอพีแอดเดรสต้นทาง"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**Destination Address (128 บิต)**: ไอพีแอดเดรสปลายทาง"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.2 โครงสร้างส่วนหัวขยาย (IPv6 Extension Headers)"
    },
    {
      "type": "paragraph",
      "text": "แทนที่จะใส่ Options เข้าไปใน Base Header แบบ IPv4 ซึ่งทำให้เราเตอร์ประมวลผลช้า IPv6 ใช้แนวคิด **การต่อลูกโซ่ส่วนหัวขยาย (Daisy-Chained Extension Headers)** แทรกไว้ระหว่าง Base Header และ Upper Layer Data โดยจะถูกประมวลผลเฉพาะเมื่อจำเป็นเท่านั้น เช่น:"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "*Hop-by-Hop Options Header*"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "*Routing Header*"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "*Fragment Header* (IPv6 ทำ Fragmentation ที่โฮสต์ต้นทางเท่านั้น เราเตอร์ระหว่างทางจะไม่ตัดชิ้นส่วน)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "*Encapsulating Security Payload (ESP) & Authentication Header (AH)* สำหรับ IPsec"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. รูปแบบและการย่อแอดเดรส IPv6 (IPv6 Address Representation & Abbreviation)"
    },
    {
      "type": "paragraph",
      "text": "IPv6 Address มีขนาด **128 บิต** เขียนในรูปเลขฐานสิบหก (Hexadecimal) แบ่งเป็น **8 กลุ่ม กลุ่มละ 16 บิต** คั่นด้วยเครื่องหมายโคลอน `:` (เช่น `2001:0db8:85a3:0000:0000:8a2e:0370:7334`)"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.1 กฎเหล็ก 2 ข้อในการย่อแอดเดรส IPv6 (Abbreviation Rules)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การตัดเลข 0 นำหน้ากลุ่ม (Leading Zeros Suppression)**: สามารถตัดเลข `0` ที่อยู่หน้าสุดของแต่ละกลุ่มออกได้ แต่ต้องเหลือไว้อย่างน้อย 1 ตัว"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "ตัวอย่าง: `0001` `"
      ]
    },
    {
      "type": "paragraph",
      "text": "\\to ` `1`, `0DB8` `"
    },
    {
      "type": "paragraph",
      "text": "\\to ` `DB8`, `0000` `"
    },
    {
      "type": "paragraph",
      "text": "\\to ` `0`"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**การยุบรวมกลุ่มศูนย์ที่อยู่ติดกันด้วยเครื่องหมาย `::` (Double Colon Compression)**: สามารถยุบกลุ่มของศูนย์ที่เรียงติดกันกี่กลุ่มก็ได้ ให้เหลือเพียงเครื่องหมาย `::` **แต่ใช้ได้เพียง 1 ครั้งในหนึ่งแอดเดรสเท่านั้น** เพื่อป้องกันความคลุมเครือ"
      ]
    },
    {
      "type": "diagram",
      "content": "\n[ตัวอย่างการย่อแอดเดรสตามลำดับขั้น]\n\nรูปแบบเต็ม:    2001 : 0DB8 : 0000 : 0000 : 0000 : 0000 : 0000 : 0001\n\nตัดเลข 0 หน้า: 2001 : DB8  : 0    : 0    : 0    : 0    : 0    : 1\n\nยุบด้วย :: :   2001:DB8::1  (รูปแบบย่อที่สุดตามมาตรฐาน)\n\n\n\nรูปแบบเต็ม:    FE80 : 0000 : 0000 : 0000 : 02E0 : FCFF : FE12 : 3456\n\nรูปแบบย่อ:     FE80::2E0:FCFF:FE12:3456\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. การจำแนกประเภทของ IPv6 Address (IPv6 Address Classification)"
    },
    {
      "type": "paragraph",
      "text": "ในระบบ IPv6 มีการสื่อสาร 3 รูปแบบหลัก ได้แก่ **Unicast (หนึ่งต่อหนึ่ง)**, **Multicast (หนึ่งต่อกลุ่ม)**, และ **Anycast (หนึ่งต่อตัวที่ใกล้ที่สุด)** โดย **ยกเลิก Broadcast (หนึ่งต่อทั้งหมด) โดยสิ้นเชิง!**"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| ประเภทแอดเดรส (Address Type)       | ช่วง Prefix (Prefix Range)       | ขอบเขตและการใช้งาน (Scope & Usage)  |\n\n+------------------------------------+----------------------------------+------------------------------------+\n\n| **Global Unicast Address (GUA)**   | `2000::/3` (2001::, 2400:: ฯลฯ)  | ใช้งานและเราต์บนอินเทอร์เน็ตสาธารณะ|\n\n| **Unique Local Address (ULA)**     | `FC00::/7` (นิยมใช้ `FD00::/8`)   | ใช้งานภายในองค์กร (เทียบเท่า Private IP)|\n\n| **Link-Local Address (LLA)**       | `FE80::/10` (พบบ่อย `FE80::/64`) | สื่อสารเฉพาะภายในสายลิงก์เดียวกัน  |\n\n| **Unspecified Address**            | `::/128`                         | ใช้แทนแอดเดรสที่ยังไม่ถูกกำหนด     |\n\n| **Loopback Address**               | `::1/128`                        | ทดสอบสแต็กภายในเครื่องตนเอง        |\n\n| **Multicast Address**              | `FF00::/8`                       | ส่งข้อมูลถึงกลุ่มผู้รับพร้อมกัน    |\n\n| **Solicited-Node Multicast**       | `FF02::1:FFxx:xxxx/104`          | ใช้ในกระบวนการแปลงแอดเดรสและ DAD   |\n\n| **Anycast Address**                | ใช้รูปแบบเดียวกับ Unicast        | ส่งหาเซิร์ฟเวอร์ตัวที่อยู่ใกล้ที่สุด|\n\n+---------------------------------------------------------------------------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.1 มัลติคาสต์แอดเดรสที่สำคัญใน IPv6 (Well-Known Multicast Addresses)"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`**FF02::1`**: **All Nodes Address** (ส่งถึงทุกอุปกรณ์บนลิงก์)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`**FF02::2`**: **All Routers Address** (ส่งถึงเราเตอร์ทุกตัวบนลิงก์)"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`**FF02::5`**: ส่งถึง **All OSPFv3 Routers**"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`**FF02::6`**: ส่งถึง **All OSPFv3 DR/BDR Routers**"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. การสร้าง Interface ID ด้วยมาตรฐาน IEEE EUI-64"
    },
    {
      "type": "paragraph",
      "text": "ใน IPv6 Unicast Address (ขนาด 128 บิต) จะประกอบด้วย **Network Prefix 64 บิต** และ **Interface ID 64 บิต** โดย Interface ID สามารถสร้างขึ้นอัตโนมัติจากหมายเลข **MAC Address 48 บิต** ด้วยกระบวนการ **EUI-64**:"
    },
    {
      "type": "diagram",
      "content": "\n[1. MAC Address 48 บิต]        00 - E0 - FC   -   12 - 34 - 56\n\n                                     \\             /\n\n[2. แทรก FFFE ไว้ตรงกลาง]       00 - E0 - FC - FF - FE - 12 - 34 - 56\n\n                                |\n\n[3. พลิกบิตที่ 7 (U/L Bit)]     ไบต์แรก 00 (00000000) พลิกบิตที่ 7 เป็น 1 -> 02 (00000010)\n\n                                |\n\n[ผลลัพธ์ Interface ID 64 บิต]  02E0 : FCFF : FE12 : 3456\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. โปรโตคอลค้นหาเพื่อนบ้าน NDP (Neighbor Discovery Protocol - RFC 4861)"
    },
    {
      "type": "paragraph",
      "text": "**NDP** ทำงานบนพื้นฐานของข้อความ **ICMPv6** เพื่อทำหน้าที่แทน ARP, ICMP Router Discovery และ ICMP Redirect:"
    },
    {
      "type": "diagram",
      "content": "\n+---------------------------------------------------------------------------------------------------+\n\n| ฟังก์ชันการทำงาน (Function)       | ข้อความ ICMPv6 ที่ใช้ (ICMPv6 Messages)                             |\n\n+------------------------------------+---------------------------------------------------------------+\n\n| **1. Address Resolution (แทน ARP)**| **NS (Neighbor Solicitation - Type 135)**                    |\n\n|                                    | **NA (Neighbor Advertisement - Type 136)**                   |\n\n+------------------------------------+---------------------------------------------------------------+\n\n| **2. DAD (ตรวจจับไอพีซ้ำ)**        | ส่ง NS ตรวจสอบไอพีตนเองก่อนเปิดใช้งานจริง                    |\n\n+------------------------------------+---------------------------------------------------------------+\n\n| **3. SLAAC (แจกไอพีอัตโนมัติ)**    | **RS (Router Solicitation - Type 133)**                      |\n\n|                                    | **RA (Router Advertisement - Type 134)**                     |\n\n+------------------------------------+---------------------------------------------------------------+\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.1 กระบวนการแปลงแอดเดรส (Address Resolution แทน ARP)"
    },
    {
      "type": "paragraph",
      "text": "เมื่อ PC-A ต้องการทราบ MAC ของ PC-B:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "PC-A ส่งข้อความ **Neighbor Solicitation (NS - Type 135)** ไปยัง **Solicited-Node Multicast Address ของ PC-B (`FF02::1:FFxx:xxxx`)** (มีเพียง PC-B เท่านั้นที่ดักฟังกลุ่มนี้ อุปกรณ์อื่นไม่เสียเวลาประมวลผล)"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "PC-B ตอบกลับด้วยข้อความ **Neighbor Advertisement (NA - Type 136)** แบบ Unicast กลับหา PC-A"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.2 กระบวนการตั้งค่าแอดเดรสอัตโนมัติแบบไร้สถานะ (SLAAC - Plug-and-Play)"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "เมื่อเปิดเครื่อง โฮสต์จะสร้าง **Link-Local Address (FE80::/64)** ขึ้นมาเอง และทำการทดสอบ **DAD (Duplicate Address Detection)**"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "โฮสต์ส่งข้อความ **Router Solicitation (RS - Type 133)** ไปยังมัลติคาสต์ `FF02::2` (All Routers) เพื่อถามหาพารามิเตอร์เครือข่าย"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "เราเตอร์ตอบกลับด้วยข้อความ **Router Advertisement (RA - Type 134)** ซึ่งบรรจุข้อมูล Network Prefix (เช่น `2001:db8:1::/64`) และเกตเวย์"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "โฮสต์นำ Network Prefix มารวมกับ Interface ID (จาก EUI-64 หรือสุ่ม) เพื่อประกอบเป็น **Global Unicast Address (GUA)** ที่สมบูรณ์ และทดสอบ DAD อีกครั้งก่อนเริ่มเชื่อมต่ออินเทอร์เน็ตทันที!"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "7. คำสั่งการตั้งค่าคอนฟิก IPv6 บน Huawei VRP"
    },
    {
      "type": "diagram",
      "content": "\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| คำสั่งคอนฟิก (Configuration Command)                       | การทำงานและผลลัพธ์ (Function & Effect)                |\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n\n| [Huawei] ipv6                                             | เปิดใช้งานฟังก์ชัน IPv6 ในระดับโกลบอลของอุปกรณ์        |\n\n| [Huawei-GE0/0/1] ipv6 enable                              | เปิดใช้งาน IPv6 บนพอร์ตอินเทอร์เน็ต                   |\n\n| [Huawei-GE0/0/1] ipv6 address auto link-local             | สร้าง Link-Local Address อัตโนมัติบนพอร์ต             |\n\n| [Huawei-GE0/0/1] ipv6 address 2001:db8:1::1 64            | กำหนด Global Unicast Address แบบกำหนดเอง              |\n\n| [Huawei-GE0/0/1] ipv6 address auto global                 | เปิดให้พอร์ตรับไอพีแบบ SLAAC จาก Router Advertisement|\n\n| [Huawei-GE0/0/1] undo ipv6 nd ra halt                     | สั่งให้เราเตอร์เริ่มกระจายข้อความ RA ออกทางพอร์ตนี้   |\n\n| [Huawei] ipv6 route-static 2001:db8:2:: 64 2001:db8:12::2 | กำหนด IPv6 Static Route                               |\n\n| [Huawei] ipv6 route-static :: 0 2001:db8:12::2            | กำหนด IPv6 Default Route (`::/0`)                     |\n\n| [Huawei] display ipv6 interface brief                     | แสดงสรุปสถานะพอร์ตและ IPv6 Address ทั้งหมด            |\n\n| [Huawei] display ipv6 neighbors                           | แสดงตารางเพื่อนบ้าน IPv6 (Neighbor Table แทน ARP Table)|\n\n+-----------------------------------------------------------+-------------------------------------------------------+\n"
    },
    {
      "type": "divider"
    }
  ],
  "12": [
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "1. บทนำ: ทำไมต้องมีการสื่อสารข้าม VLAN? (Why Inter-VLAN Communication?)"
    },
    {
      "type": "paragraph",
      "text": "ในบทที่ 5 เราได้เรียนรู้ว่า **VLAN ทำหน้าที่แบ่งแยก Broadcast Domain ในระดับ Data Link Layer (Layer 2)** ส่งผลให้อุปกรณ์ที่อยู่คนละ VLAN แม้จะเชื่อมต่ออยู่บนสวิตช์กายภาพตัวเดียวกัน จะ **ไม่สามารถสื่อสารกันได้ในระดับเลเยอร์ 2 โดยสิ้นเชิง**"
    },
    {
      "type": "paragraph",
      "text": "อย่างไรก็ดี ในการทำงานจริง อุปกรณ์ต่างแผนกจำเป็นต้องแลกเปลี่ยนข้อมูลและเข้าถึงบริการร่วมกัน (เช่น แผนก HR ใน VLAN 10 ต้องการเข้าถึง File Server ใน VLAN 30) การจะเชื่อมต่อข้าม VLAN จึงจำเป็นต้องส่งข้อมูลผ่าน **อุปกรณ์ในระดับ Network Layer (Layer 3 Device)** ซึ่งเรียกว่ากระบวนการ **Inter-VLAN Routing**"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "2. สามวิธีการในการทำ Inter-VLAN Routing (Three Inter-VLAN Methods)"
    },
    {
      "type": "diagram",
      "content": "\n(1) Traditional Multi-Interface Router        (2) Router-on-a-Stick (Sub-interfaces)\n\n         [ Router ]                                     [ Router ]\n\n          /      \\                                          | (Trunk Link สายเดี่ยว)\n\n    (VLAN10)    (VLAN20)                                     |\n\n        /          \\                                    [ Switch ]\n\n   [ Switch ]  [ Switch ]                                 /      \\\n\n     (VLAN10)    (VLAN20)                             (VLAN10)  (VLAN20)\n\n\n\n(3) Layer 3 Switch with VLANIF (มาตรฐานปัจจุบัน แนะนำสูงสุด!)\n\n                +---------------------------------------+\n\n                |           Layer 3 Switch              |\n\n                |  +---------------------------------+  |\n\n|  | VLANIF 10       |  VLANIF 20    |  | <--- Virtual L3 Interfaces |  | (192.168.10.1)  | (192.168.20.1)|  |      (Hardware ASIC Routing) |  +-----------------+---------------+  |\n\n                +---------------------------------------+\n\n                                  /     \\\n\n                             (VLAN 10) (VLAN 20)\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2.1 การเปรียบเทียบเชิงลึกทั้ง 3 วิธีการ"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "3. เจาะลึกวิธีที่ 2: Router-on-a-Stick และคำสั่ง Dot1q Termination"
    },
    {
      "type": "paragraph",
      "text": "ในการทำ Router-on-a-Stick พอร์ตบนสวิตช์ที่ต่อกับเราเตอร์จะต้องตั้งค่าเป็น **Trunk Port** ส่วนบนพอร์ตของเราเตอร์จะทำการสร้างอินเทอร์เฟซย่อยเชิงตรรกะ เรียกว่า **Sub-interface** (เช่น `GigabitEthernet 0/0/1.10` และ `GigabitEthernet 0/0/1.20`)"
    },
    {
      "type": "diagram",
      "content": "\n[สวิตช์: GE0/0/1 เป็น Trunk] <=====================> [เราเตอร์: GE0/0/1 Physical Port]\n\n                                                     - GE0/0/1.10 (Gateway VLAN 10)\n\n                                                     - GE0/0/1.20 (Gateway VLAN 20)\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.1 การประมวลผลบน Sub-Interface ของเราเตอร์"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**เมื่อรับแพ็กเก็ตเข้ามา (Ingress)**: เราเตอร์ตรวจสอบ 802.1Q Tag ในเฟรม และส่งต่อไปยัง Sub-interface ที่แมปไว้ จากนั้น **ปลด VLAN Tag ออก (Tag Termination)** ก่อนส่งเข้าสู่กระบวนการ IP Routing"
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**เมื่อส่งแพ็กเก็ตออกไป (Egress)**: เราเตอร์จะ **แปะ VLAN Tag ของ VLAN ปลายทาง** ลงในเฟรมก่อนส่งออกไปบนสาย Trunk"
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3.2 คำสั่งสำคัญบน Router Sub-interface"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`dot1q termination vid <vlan-id>`: เปิดการทำงานของ Sub-interface ให้รับและปลดแท็กของ VLAN ที่ระบุ"
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "`arp broadcast enable`: **คำสั่งจำเป็นอย่างยิ่ง!** เนื่องจาก Sub-interface มีค่าดีฟอลต์ปิดการส่งต่อ ARP Broadcast หากไม่พิมพ์คำสั่งนี้ เราเตอร์จะไม่สามารถส่ง ARP Request หาโฮสต์ปลายทางได้ และจะสื่อสารไม่สำเร็จ"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "4. เจาะลึกวิธีที่ 3: สวิตช์เลเยอร์ 3 และอินเทอร์เฟซ VLANIF (Layer 3 Switching & VLANIF)"
    },
    {
      "type": "paragraph",
      "text": "**VLANIF Interface** คือ อินเทอร์เฟซเสมือนในระดับ Network Layer (Layer 3 Logical Interface) ที่สร้างขึ้นบนสวิตช์ Layer 3 โดยผูกเข้ากับ VLAN ID แต่ละเบอร์ ทำหน้าที่เสมือนเป็น **Default Gateway** ประจำ VLAN นั้นๆ"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4.1 ข้อดีของการส่งต่อข้อมูลด้วย Layer 3 Switch"
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "**การส่งต่อข้อมูลระดับฮาร์ดแวร์ (ASIC Forwarding)**: สวิตช์ Layer 3 ใช้ชิป ASIC และตาราง **FIB (Forwarding Information Base)** ในการค้นหาและส่งต่อแพ็กเก็ต ทำให้มี Throughput สูงมากระดับหลายร้อย Gbps และมีความหน่วงต่ำมาก (Low Latency) เหมาะสมที่สุดสำหรับ Core และ Distribution Layer ขององค์กร"
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "5. เจาะลึกกระบวนการสื่อสารข้าม VLAN ตั้งแต่ต้นจนจบแบบ Step-by-Step"
    },
    {
      "type": "paragraph",
      "text": "สมมุติสถานการณ์: **PC1 (VLAN 10: `192.168.10.10`, MAC-1)** ต้องการส่งข้อมูลหา **PC2 (VLAN 20: `192.168.20.20`, MAC-2)** ผ่าน **Layer 3 Switch (VLANIF 10: `192.168.10.1`, MAC-GW; VLANIF 20: `192.168.20.1`, MAC-GW)**:"
    },
    {
      "type": "diagram",
      "content": "\n[PC1: VLAN 10] ---> [ Access Port 1 ] --- [ Layer 3 Switch ] --- [ Access Port 2 ] ---> [PC2: VLAN 20]\n\n(192.168.10.10)      (PVID = 10)            (VLANIF 10 & 20)      (PVID = 20)           (192.168.20.20)\n"
    },
    {
      "type": "diagram",
      "content": "\n[ขั้นตอนที่ 1: PC1 ตรวจสอบ Subnet และเตรียมส่งข้อมูล]\n\n PC1 เปรียบเทียบ Destination IP (192.168.20.20) กับ Subnet ตนเอง พบว่าอยู่คนละวง\n\n PC1 ทราบว่าจะต้องส่งผ่าน Gateway (192.168.10.1) จึงค้นหา MAC ของ Gateway (MAC-GW) ผ่าน ARP\n\n               |\n\n               v\n\n[ขั้นตอนที่ 2: PC1 ห่อหุ้มเฟรมและส่งเข้าสวิตช์]\n\n PC1 ส่ง Ethernet Frame: [Src MAC: MAC-1 | Dst MAC: MAC-GW | Src IP: 192.168.10.10 | Dst IP: 192.168.20.20]\n\n เฟรมเข้าสู่ Access Port 1 -> สวิตช์ประทับแท็ก [VLAN 10]\n\n               |\n\n               v\n\n[ขั้นตอนที่ 3: สวิตช์ L3 ประมวลผลและส่งต่อสู่ Routing Engine]\n\n สวิตช์ตรวจพบว่า Dst MAC ตรงกับ MAC ของตนเอง (MAC-GW ของ VLANIF 10)\n\n สวิตช์ปลด Layer 2 Header และ VLAN 10 Tag ออก แล้วส่งต่อ Payload ให้ Layer 3 Routing Engine\n\n               |\n\n               v\n\n[ขั้นตอนที่ 4: การค้นหาเส้นทางและการเตรียม Layer 2 ใหม่]\n\n Routing Engine ตรวจสอบ Destination IP (192.168.20.20) พบว่าตรงกับเครือข่ายของ VLANIF 20 (Direct Route)\n\n สวิตช์ค้นหาตาราง ARP เพื่อหา MAC ของ PC2 (MAC-2) (หากไม่มี จะส่ง ARP Request ออกทาง VLAN 20)\n\n สวิตช์ทำการลดค่า TTL ลง 1 (TTL - 1) และคำนวณ Checksum ใหม่\n\n               |\n\n               v\n\n[ขั้นตอนที่ 5: การห่อหุ้มเฟรมใหม่และส่งถึง PC2]\n\n สวิตช์ห่อหุ้มเฟรม Layer 2 ใหม่: [Src MAC: MAC-GW | Dst MAC: MAC-2 | Tag: VLAN 20]\n\n เฟรมถูกส่งออกทาง Access Port 2 -> พอร์ต Access ปลดแท็ก VLAN 20 ออก -> PC2 ได้รับข้อมูลที่ถูกต้องสมบูรณ์!\n"
    },
    {
      "type": "divider"
    },
    {
      "type": "heading",
      "level": 2,
      "text": "6. คำสั่งการตั้งค่าคอนฟิก Inter-VLAN บน Huawei VRP"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.1 ตัวอย่างการตั้งค่า Router-on-a-Stick"
    },
    {
      "type": "diagram",
      "content": "\n# ฝั่งสวิตช์ (Switch L2):\n\n[Switch] vlan batch 10 20\n\n[Switch-GE0/0/1] port link-type access\n\n[Switch-GE0/0/1] port default vlan 10\n\n[Switch-GE0/0/2] port link-type access\n\n[Switch-GE0/0/2] port default vlan 20\n\n[Switch-GE0/0/3] port link-type trunk\n\n[Switch-GE0/0/3] port trunk allow-pass vlan 10 20\n\n\n\n# ฝั่งเราเตอร์ (Router):\n\n[Router] interface GigabitEthernet 0/0/1.10\n\n[Router-GE0/0/1.10] dot1q termination vid 10\n\n[Router-GE0/0/1.10] ip address 192.168.10.1 255.255.255.0\n\n[Router-GE0/0/1.10] arp broadcast enable\n\n\n\n[Router] interface GigabitEthernet 0/0/1.20\n\n[Router-GE0/0/1.20] dot1q termination vid 20\n\n[Router-GE0/0/1.20] ip address 192.168.20.1 255.255.255.0\n\n[Router-GE0/0/1.20] arp broadcast enable\n"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "6.2 ตัวอย่างการตั้งค่า Layer 3 Switch VLANIF (แนะนำสูงสุด)"
    },
    {
      "type": "diagram",
      "content": "\n[Switch-L3] vlan batch 10 20\n\n\n\n# กำหนดพอร์ตสมาชิก Access\n\n[Switch-L3-GE0/0/1] port link-type access\n\n[Switch-L3-GE0/0/1] port default vlan 10\n\n[Switch-L3-GE0/0/2] port link-type access\n\n[Switch-L3-GE0/0/2] port default vlan 20\n\n\n\n# สร้างและตั้งค่า IP บนอินเทอร์เฟซเสมือน VLANIF\n\n[Switch-L3] interface Vlanif 10\n\n[Switch-L3-Vlanif10] ip address 192.168.10.1 24\n\n\n\n[Switch-L3] interface Vlanif 20\n\n[Switch-L3-Vlanif20] ip address 192.168.20.1 24\n\n\n\n# ตรวจสอบสถานะการทำงาน\n\n[Switch-L3] display ip interface brief\n\n[Switch-L3] display ip routing-table\n"
    },
    {
      "type": "divider"
    }
  ]
};
