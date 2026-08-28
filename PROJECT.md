# Project: Universal Core Networking Web App & Simulation Labs

## Architecture
- **Framework & Runtime**: React 18 (Vite 5), Tailwind CSS v3, Framer Motion, Lucide React, Canvas Confetti.
- **Visual Design System**: Studio Minimalist (Neutral Zinc/Slate monochrome tokens, subtle 1px borders, generous whitespace, disciplined typography, no glowing or neon artifacts).
- **Core Educational Domain**: Universal Core Networking Concepts (Vendor-Neutral, IEEE & IETF RFC Standards).
- **Interactive Simulation Engine**: Real-time SVG topology canvases, animated packet flows, step-by-step logical reasoners, unified Play/Pause/Step/Reset controls, inline and fullscreen modal rendering.
- **Data Flow**:
  - `src/data/courseData.js` -> Central single-source-of-truth for all 12 modules, section breakdowns, terminology matrices, and interactive quizzes.
  - `src/App.jsx` -> Global state manager (Active Module, Dark/Light Theme, Completed Modules, Search Palette).
  - `src/components/layout/` (`Header`, `Sidebar`) -> Navigation, progress tracking, theme toggle, and search trigger.
  - `src/components/content/` (`ChapterContent`, `QuizSection`) -> Lesson reading view, technical terminology comparison grid, and interactive quiz evaluator.
  - `src/components/labs/` (`LabContainer`, `Lab01` through `Lab12`) -> Interactive networking simulation labs with inline and fullscreen presentation.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Studio Minimalist Global Styling | Neutral Zinc/Slate tokens, 1px subtle borders, no glow keyframes, refined scrollbars | M1 | Survey UI |
| 2 | Minimalist App Shell & Header | Monochrome geometric branding "Universal Core Networking", clean navigation, theme toggle | M1 | Survey UI |
| 3 | Minimalist Sidebar Navigation | 12-chapter outline with completion indicators, active item 1px border highlight | M1 | Survey UI |
| 4 | Search Modal & Command Palette | Instant search across all 12 lessons, keyboard shortcuts (⌘K / Ctrl+K) | M1 | Survey UI |
| 5 | Minimalist Lab Shell & Modal Container | Clean lab wrapper with Play/Pause/Step controls, inline & fullscreen modal overlays | M1 | Survey UI & Sim |
| 6 | Lesson 1: Network Fundamentals & Topologies | Data transfer, throughput vs goodput, topologies, media & duplex, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 7 | Lesson 2: Network Reference Models & Protocols | OSI 7 vs TCP/IP 5, PDU encapsulation lifecycle, TCP vs UDP, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 8 | Lesson 3: Network Device Architecture | Control/Data/Management planes, RAM/NVRAM, OOB, Syslog, NTP/SNMP, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 9 | Lesson 4: Ethernet Switching & MAC Learning | IEEE 802.3, MAC structure, CAM learning, Flooding/Forwarding/Filtering, ARP, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 10 | Lesson 5: VLANs & 802.1Q Tagging | VLAN segmentation, 802.1Q header (TPID, VID), Access/Trunk/Native rules, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 11 | Lesson 6: STP & RSTP Loop Prevention | L2 loops, 4-step election (Root Bridge/RP/DP/AP), RSTP 802.1w P/A handshake, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 12 | Lesson 7: Link Aggregation (LAG/LACP) & HA | IEEE 802.3ad LACP, Actor election, Hash load balancing, MLAG/Stacking, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 13 | Lesson 8: Network Layer & IPv4 Subnetting | IPv4 header (TTL, MTU), CIDR, FLSM/VLSM math, ICMP diagnostic protocol, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 14 | Lesson 9: IP Routing & Forwarding Principles | RIB vs FIB, Longest Prefix Match (LPM), AD/Preference, L2 MAC rewrite, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 15 | Lesson 10: Dynamic Routing with OSPFv2 | Distance-Vector vs Link-State, SPF tree, 5 packets, 7 states, DR/BDR, Area 0, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 16 | Lesson 11: IPv6 Architecture, NDP & SLAAC | 128-bit address, RFC 5952, EUI-64, NDP (NS/NA, DAD, SLAAC RS/RA), 5 terms, 3 quizzes | M2 | Survey Lessons |
| 17 | Lesson 12: Inter-VLAN Routing & L3 Switching | Legacy vs Router-on-a-Stick vs Layer 3 Switch SVI/VLANIF, ASIC forwarding, 5 terms, 3 quizzes | M2 | Survey Lessons |
| 18 | Lab 01: Universal Topology & Fault Sandbox | All 5 topologies (Star, Ring, Bus, Tree, Mesh), link cut/restore, animated path traversal | M3 | Survey Sim |
| 19 | Lab 02: OSI & TCP/IP Dual-Stack Encapsulation | 5-layer stack, Encapsulation & Decapsulation flows, TCP/UDP headers, field inspector | M3 | Survey Sim |
| 20 | Lab 03: Universal Network OS & CLI Modes | Mode hierarchy (User Exec, Privileged, Interface, Router), universal CLI commands | M3 | Survey Sim |
| 21 | Lab 04: Switch MAC Learning & CAM Engine | 4 hosts, 4-step execution (Ingress, Learn, Lookup, Forward/Flood), real-time CAM table | M3 | Survey Sim |
| 22 | Lab 05: IEEE 802.1Q VLAN Tagging Studio | Access/Trunk/Hybrid modes, 4-byte 802.1Q header dissect, ingress tag & egress strip flows | M3 | Survey Sim |
| 23 | Lab 06: STP / RSTP 4-Step Election & Reconvergence | 3-switch triangle, Root Bridge/RP/DP/AP election, live BPDU flows, link cut fast reconvergence | M3 | Survey Sim |
| 24 | Lab 07: Link Aggregation (LAG / LACP) Simulator | 3-link bundle, Manual vs LACP modes, Active/Standby links, Hash load balancing, failover | M4 | Survey Sim |
| 25 | Lab 08: Subnetting & VLSM Calculator | FLSM analyzer, 32-bit slicing bar, bitwise AND truth table, multi-department VLSM planner | M4 | Survey Sim |
| 26 | Lab 09: IP Routing & Hop-by-Hop L2/L3 Rewriter | Multi-router hop topology, LPM evaluator, L2 MAC rewrite & L3 TTL decrement inspector | M4 | Survey Sim |
| 27 | Lab 10: OSPF 7-State Machine & Adjacency Lab | 7-state step-through (Down to Full), Hello/DBD/LSR/LSU/LSAck packets, LSDB sync table | M4 | Survey Sim |
| 28 | Lab 11: IPv6 NDP & SLAAC Studio | SLAAC auto-config (RS/RA), DAD (NS/NA), Address Resolution, EUI-64 bit inverter | M4 | Survey Sim |
| 29 | Lab 12: Inter-VLAN Routing Comparative Lab | Router-on-a-Stick (802.1Q sub-interfaces) vs Layer 3 Switch (SVI) ASIC wire-speed routing | M4 | Survey Sim |
| 30 | E2E Testing Suite & Build Verification | 4-Tier requirement test verification, npm run build zero-error check, dist output validation | M5 | Survey Sim & Code |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Studio Minimalist Design System & Shell | `tailwind.config.js`, `index.css`, `index.html`, `App.jsx`, `Header`, `Sidebar`, `SearchModal`, `ChapterContent`, `QuizSection`, `LabContainer` | None | DONE |
| M2 | Universal Core Networking Curriculum & Quizzes | `src/data/courseData.js`, `Header.jsx`, `ChapterContent.jsx`, `QuizSection.jsx` | None | DONE |
| M3 | Interactive Simulation Labs Batch A (Labs 01-06) | `Lab01_TopologyExplorer.jsx` through `Lab06_StpElectionLab.jsx` | M1 | DONE |
| M4 | Interactive Simulation Labs Batch B (Labs 07-12) | `Lab07_EthTrunkClusterLab.jsx` through `Lab12_InterVlanRouterLab.jsx` | M1 | DONE |
| M5 | Final Integration, E2E Pass & Adversarial Hardening | Full project validation, `npm run build`, `dist/` bundle verification | M1, M2, M3, M4 | DONE |

## Interface Contracts
### `src/data/courseData.js` ↔ UI Components (`ChapterContent`, `QuizSection`, `Sidebar`)
- `COURSE_MODULES`: Array of 12 module objects:
  ```ts
  interface CourseModule {
    id: number; // 1 to 12
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    readTime: string;
    badge: string;
    icon: string;
    description: string;
    sections: Array<{
      id: string;
      title: string;
      content: string;
      subsections?: Array<{ title: string; body: string; code?: string }>;
    }>;
    terms: Array<{
      term: string;
      meaning: string;
      importance: string;
      vendorComparison?: string;
    }>;
    quiz: Array<{
      id: number;
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
    }>;
  }
  ```

### `LabContainer.jsx` ↔ Individual Lab Components (`Lab01` to `Lab12`)
- Props passed to each Lab:
  ```ts
  interface LabProps {
    moduleId?: number;
    isFullscreen?: boolean;
    onToggleFullscreen?: () => void;
  }
  ```
- Each lab must handle responsive resizing gracefully and expose internal step-by-step packet controls with Play/Pause/Step/Reset capabilities.

## Code Layout
```
D:\Network\web\app/
├── index.html                           # Root HTML, studio meta & fonts
├── package.json                         # Dependencies & build scripts
├── tailwind.config.js                   # Studio Minimalist design tokens
├── vite.config.ts                       # Vite bundler configuration
├── src/
│   ├── index.css                        # Studio minimalist CSS resets & utilities
│   ├── main.jsx                         # React root entry point
│   ├── App.jsx                          # Root application container & theme state
│   ├── data/
│   │   └── courseData.js                # 12 Universal Networking modules, terms, quizzes
│   └── components/
│       ├── common/
│       │   └── SearchModal.jsx          # Studio Minimalist command palette
│       ├── content/
│       │   ├── ChapterContent.jsx       # Studio Minimalist chapter reader & terms matrix
│       │   └── QuizSection.jsx          # Interactive quiz evaluator & rationales
│       ├── layout/
│       │   ├── Header.jsx               # Universal branding, navigation & theme toggle
│       │   └── Sidebar.jsx              # 12-module tree outline & progress indicator
│       └── labs/
│           ├── LabContainer.jsx         # Lab wrapper & Fullscreen modal shell
│           ├── Lab01_TopologyExplorer.jsx
│           ├── Lab02_EncapsulationStudio.jsx
│           ├── Lab03_VrpCliTerminal.jsx
│           ├── Lab04_SwitchMacLearningLab.jsx
│           ├── Lab05_VlanTaggingLab.jsx
│           ├── Lab06_StpElectionLab.jsx
│           ├── Lab07_EthTrunkClusterLab.jsx
│           ├── Lab08_SubnettingCalculator.jsx
│           ├── Lab09_IpRoutingForwarder.jsx
│           ├── Lab10_OspfStateMachineLab.jsx
│           ├── Lab11_Ipv6NdSlaacLab.jsx
│           └── Lab12_InterVlanRouterLab.jsx
└── dist/                                # Production build output (npm run build)
```
