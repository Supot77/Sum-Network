# Comprehensive Test Infrastructure Specification (TEST_INFRA.md)
**Project**: Universal Core Networking Web App & Interactive Simulation Labs  
**Standard**: 4-Tier Test Verification Methodology  
**Version**: 1.0.0  
**Author**: Test Writer Specialist & QA Agent  

---

## 1. Overview & Testing Philosophy

This test infrastructure specification establishes the end-to-end verification framework for the **Universal Core Networking Web Application**. The project delivers an educational platform covering 12 universal networking modules, interactive quizzes, and 12 real-time SVG simulation labs built on React 18, Tailwind CSS v3, and Vite 5 with a Studio Minimalist aesthetic.

Our verification approach adheres to the **4-Tier Test Architecture**:
- **Tier 1**: Comprehensive Feature Coverage ($\ge 5$ explicit tests per feature)
- **Tier 2**: Boundary, Corner, & Stress Cases ($\ge 5$ tests per feature)
- **Tier 3**: Cross-Feature Integration & Reactive State Combinations
- **Tier 4**: Real-World User & Student Journey Scenarios

```
+-------------------------------------------------------------------------------+
|                       TIER 4: REAL-WORLD SCENARIOS                            |
|    - End-to-End Student Curriculum Mastery (Ch 1 to 12)                       |
|    - Quick Reference & Command Palette Diagnostic Workflow                    |
|    - Multi-Device Interactive Lab Sandbox & Fullscreen Stress                 |
|    - Production Build & Asset Integrity Verification Pipeline                 |
+-------------------------------------------------------------------------------+
|                   TIER 3: CROSS-FEATURE COMBINATIONS                          |
|    - Search Modal -> Navigation -> Chapter Content -> Lab Dynamic Mount       |
|    - Quiz Scoring -> Module Completion -> Sidebar Badges -> Confetti Trigger  |
|    - Dark/Light Theme Switching <-> SVG Lab Canvas Contrast                   |
|    - Fullscreen Modal State Persistence <-> Inline Lab Synchronizer           |
+-------------------------------------------------------------------------------+
|                   TIER 2: BOUNDARY, CORNER & STRESS                           |
|    - Out-of-bounds IDs (0, 13, -1, NaN), Empty Arrays, Regex Injections       |
|    - Network Partitioning (All Links Cut), Duplicate MACs, Reserved VLANs     |
|    - Extreme CIDR (/0, /31, /32), Hop TTL Expiry (TTL=0), IPv6 Zero Crunch    |
+-------------------------------------------------------------------------------+
|                      TIER 1: CORE FEATURE COVERAGE                            |
|    - Design System Tokens (Monochrome Zinc/Slate, 1px Borders, No Glows)      |
|    - App Shell, Header, Sidebar, Navigation & Theme Controller               |
|    - 12 Course Data Modules: 60 Technical Terms, 36 Conceptual Quizzes        |
|    - 12 Interactive Simulation Labs: Step-by-step logic, Play/Pause/Reset     |
+-------------------------------------------------------------------------------+
```

---

## 2. Test Suite Directory Structure

```
D:\Network\web\app/
├── TEST_INFRA.md                                  # This specification document
├── TEST_READY.md                                  # Test readiness & execution summary
├── tests/
│   ├── run_all_tests.mjs                          # Master zero-dependency test runner
│   ├── unit/
│   │   ├── ui_design_tokens.test.mjs              # Tier 1 & 2: Design system & CSS rules
│   │   ├── course_data_integrity.test.mjs         # Tier 1 & 2: 12 modules, 60 terms, 36 quizzes
│   │   └── labs_integrity.test.mjs                # Tier 1 & 2: 12 labs mounting & step controls
│   ├── integration/
│   │   └── navigation_search_theme.test.mjs       # Tier 3: Search, navigation & theme sync
│   └── e2e/
│       ├── workflow_simulation.test.mjs           # Tier 4: Student learning journey simulation
│       └── build_verification.test.mjs            # Tier 4: Production build & dist output check
```

---

## 3. Tier 1: Feature Coverage Matrix ($\ge 5$ Test Cases per Feature)

### Feature 1: Studio Minimalist UI & Design System Tokens
- **T1.1.1**: Verifies Tailwind configuration extends neutral zinc/slate monochrome tokens without garish neon themes.
- **T1.1.2**: Verifies absence of forbidden `@keyframes pulse-glow` or `.animate-glow` CSS rules.
- **T1.1.3**: Verifies subtle 1px border styling across UI containers (`border-slate-800`, `border-slate-700/60`).
- **T1.1.4**: Verifies typography configuration specifying `Inter`, `Sarabun`, and `Fira Code` / monospace fonts.
- **T1.1.5**: Verifies custom scrollbar styling uses subdued slate tones (`#0b1120`, `#1e293b`, `#334155`).

### Feature 2: Minimalist App Shell & Header Navigation
- **T1.2.1**: Verifies Header displays geometric branding "Universal Core Networking".
- **T1.2.2**: Verifies Header calculates module progress indicator (`${current}/${total}`).
- **T1.2.3**: Verifies Theme Toggle switches `isDark` state between Dark (`slate-950`) and Light (`slate-50`).
- **T1.2.4**: Verifies Search trigger button displays keyboard hint (`⌘K` / `Ctrl+K`).
- **T1.2.5**: Verifies Previous / Next chapter navigation buttons respect lower (1) and upper (12) bounds.

### Feature 3: Minimalist Sidebar Navigation
- **T1.3.1**: Verifies Sidebar renders all 12 curriculum module titles and slugs.
- **T1.3.2**: Verifies active module receives 1px border highlight and distinct background indicator.
- **T1.3.3**: Verifies completed modules display green checkmark or completed badge.
- **T1.3.4**: Verifies category grouping and Thai category labels (`categoryTh`).
- **T1.3.5**: Verifies selecting a sidebar item fires `onSelectModule` with correct ID and scrolls to top.

### Feature 4: Search Modal & Command Palette
- **T1.4.1**: Verifies SearchModal opens on `isSearchOpen=true` and closes on backdrop click or close button.
- **T1.4.2**: Verifies Global `keydown` event listener detects `Ctrl+K` / `Cmd+K` to toggle search.
- **T1.4.3**: Verifies SearchModal indexes all 12 modules across title, subtitle, overview, and category.
- **T1.4.4**: Verifies search query filter performs case-insensitive substring matching.
- **T1.4.5**: Verifies selecting a search result executes `onSelectModule(id)` and closes the modal.

### Feature 5: Minimalist Lab Shell & Modal Container
- **T1.5.1**: Verifies `LabContainer` renders the inline lab widget with title, description, and live badge.
- **T1.5.2**: Verifies `LabContainer` dynamically resolves `ActiveLabComponent` for module IDs 1 through 12.
- **T1.5.3**: Verifies Fullscreen toggle button activates `isFullscreen=true` rendering fixed backdrop overlay.
- **T1.5.4**: Verifies Fullscreen close/minimize button resets `isFullscreen=false`.
- **T1.5.5**: Verifies LabContainer passes responsive container layout down to active lab components.

### Feature 6: Lesson 1 (Network Fundamentals & Topologies)
- **T1.6.1**: Verifies Lesson 1 contains 4-stage data transformation (Information -> Data -> Signal -> Medium).
- **T1.6.2**: Verifies Lesson 1 covers L2 Switch, Router, Firewall, WLAN AP/AC functions.
- **T1.6.3**: Verifies Lesson 1 covers 5 core topologies (Star, Ring, Bus, Tree, Full/Partial Mesh).
- **T1.6.4**: Verifies Lesson 1 contains $\ge 5$ terminology comparison items.
- **T1.6.5**: Verifies Lesson 1 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 7: Lesson 2 (Network Reference Models & Protocols)
- **T1.7.1**: Verifies Lesson 2 compares OSI 7-layer vs TCP/IP 5-layer architectures.
- **T1.7.2**: Verifies Lesson 2 details PDU encapsulation lifecycle (Data, Segment, Packet, Frame, Bits).
- **T1.7.3**: Verifies Lesson 2 details TCP 3-Way Handshake vs UDP connectionless streaming.
- **T1.7.4**: Verifies Lesson 2 contains $\ge 5$ terminology comparison items.
- **T1.7.5**: Verifies Lesson 2 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 8: Lesson 3 (Network Device Architecture & Management)
- **T1.8.1**: Verifies Lesson 3 defines Control Plane, Data Plane, and Management Plane separation.
- **T1.8.2**: Verifies Lesson 3 details Memory hierarchy (RAM, NVRAM, ROM, Flash).
- **T1.8.3**: Verifies Lesson 3 covers Management Protocols (SSH, SNMP, NTP, Syslog) and Out-of-Band (OOB).
- **T1.8.4**: Verifies Lesson 3 contains $\ge 5$ terminology comparison items.
- **T1.8.5**: Verifies Lesson 3 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 9: Lesson 4 (Ethernet Switching & MAC Learning)
- **T1.9.1**: Verifies Lesson 4 defines IEEE 802.3 Ethernet framing and 48-bit MAC address structure.
- **T1.9.2**: Verifies Lesson 4 explains Dynamic MAC Learning & Aging in CAM table.
- **T1.9.3**: Verifies Lesson 4 defines 3 forwarding behaviors: Flooding, Forwarding (Unicast), and Filtering.
- **T1.9.4**: Verifies Lesson 4 contains $\ge 5$ terminology comparison items.
- **T1.9.5**: Verifies Lesson 4 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 10: Lesson 5 (VLANs & IEEE 802.1Q Tagging)
- **T1.10.1**: Verifies Lesson 5 explains Broadcast Domain segmentation via VLANs.
- **T1.10.2**: Verifies Lesson 5 details IEEE 802.1Q 4-byte Tag header (TPID `0x8100`, PCP, DEI, VID 1-4094).
- **T1.10.3**: Verifies Lesson 5 specifies Access Port, Trunk Port, and Native/PVID VLAN forwarding rules.
- **T1.10.4**: Verifies Lesson 5 contains $\ge 5$ terminology comparison items.
- **T1.10.5**: Verifies Lesson 5 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 11: Lesson 6 (STP & RSTP Loop Prevention)
- **T1.11.1**: Verifies Lesson 6 explains Layer 2 broadcast storms and MAC table thrashing.
- **T1.11.2**: Verifies Lesson 6 defines 4-Step STP Election (Root Bridge, Root Port, Designated Port, Alternate Port).
- **T1.11.3**: Verifies Lesson 6 covers RSTP 802.1w Proposal/Agreement handshake and PortFast/Edge ports.
- **T1.11.4**: Verifies Lesson 6 contains $\ge 5$ terminology comparison items.
- **T1.11.5**: Verifies Lesson 6 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 12: Lesson 7 (Link Aggregation LAG/LACP & HA)
- **T1.12.1**: Verifies Lesson 7 defines IEEE 802.3ad / 802.1AX Link Aggregation Group (LAG).
- **T1.12.2**: Verifies Lesson 7 explains LACP negotiation (Actor System Priority + Key -> Active/Standby).
- **T1.12.3**: Verifies Lesson 7 details Flow-based Hash Load Balancing (Src/Dst MAC, Src/Dst IP).
- **T1.12.4**: Verifies Lesson 7 contains $\ge 5$ terminology comparison items.
- **T1.12.5**: Verifies Lesson 7 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 13: Lesson 8 (Network Layer & IPv4 Subnetting)
- **T1.13.1**: Verifies Lesson 8 details IPv4 Header fields (Version, IHL, DSCP, Total Length, TTL, Protocol, Checksum).
- **T1.13.2**: Verifies Lesson 8 explains Classless Inter-Domain Routing (CIDR) and Netmask math.
- **T1.13.3**: Verifies Lesson 8 details FLSM vs VLSM variable length subnet allocation.
- **T1.13.4**: Verifies Lesson 8 contains $\ge 5$ terminology comparison items.
- **T1.13.5**: Verifies Lesson 8 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 14: Lesson 9 (IP Routing & Forwarding Principles)
- **T1.14.1**: Verifies Lesson 9 distinguishes Routing Information Base (RIB) vs Forwarding Information Base (FIB).
- **T1.14.2**: Verifies Lesson 9 explains Longest Prefix Match (LPM) rule.
- **T1.14.3**: Verifies Lesson 9 covers Administrative Distance / Route Preference and Metric comparison.
- **T1.14.4**: Verifies Lesson 9 contains $\ge 5$ terminology comparison items.
- **T1.14.5**: Verifies Lesson 9 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 15: Lesson 10 (Dynamic Routing with OSPFv2)
- **T1.15.1**: Verifies Lesson 10 compares Distance-Vector vs Link-State Dijkstra Shortest Path First (SPF).
- **T1.15.2**: Verifies Lesson 10 details 5 OSPF Packet Types (Hello, DBD, LSR, LSU, LSAck).
- **T1.15.3**: Verifies Lesson 10 details 7 OSPF Neighbor States (Down, Init, 2-Way, ExStart, Exchange, Loading, Full).
- **T1.15.4**: Verifies Lesson 10 contains $\ge 5$ terminology comparison items.
- **T1.15.5**: Verifies Lesson 10 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 16: Lesson 11 (IPv6 Architecture, NDP & SLAAC)
- **T1.16.1**: Verifies Lesson 11 defines 128-bit IPv6 address structure and RFC 5952 text representation.
- **T1.16.2**: Verifies Lesson 11 covers Neighbor Discovery Protocol (NDP): NS, NA, RS, RA.
- **T1.16.3**: Verifies Lesson 11 explains Stateless Address Autoconfiguration (SLAAC) and Duplicate Address Detection (DAD).
- **T1.16.4**: Verifies Lesson 11 contains $\ge 5$ terminology comparison items.
- **T1.16.5**: Verifies Lesson 11 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Feature 17: Lesson 12 (Inter-VLAN Routing & L3 Switching)
- **T1.17.1**: Verifies Lesson 12 compares Legacy Multi-Interface vs Router-on-a-Stick (802.1Q Sub-interfaces).
- **T1.17.2**: Verifies Lesson 12 explains Layer 3 Switch Switched Virtual Interface (SVI / VLANIF) architecture.
- **T1.17.3**: Verifies Lesson 12 details Hardware ASIC wire-speed forwarding and MAC rewrite mechanics.
- **T1.17.4**: Verifies Lesson 12 contains $\ge 5$ terminology comparison items.
- **T1.17.5**: Verifies Lesson 12 contains $\ge 3$ conceptual quizzes with valid answer indices and explanations.

### Features 18-29: Interactive Simulation Labs (Labs 01 to 12)
- **T1.18.1 - T1.18.5**: Lab 01 (Topology Explorer) 5 topologies, link cut/restore, animated path traversal, status readout, reset.
- **T1.19.1 - T1.19.5**: Lab 02 (Encapsulation Studio) 5-layer stack, TCP vs UDP selection, encapsulation flow, decapsulation flow, field inspector.
- **T1.20.1 - T1.20.5**: Lab 03 (Device Architecture & CLI) Prompt transitions (User -> Privileged -> Config -> Interface), command execution, help command, command history, reset.
- **T1.21.1 - T1.21.5**: Lab 04 (Switch MAC Learning) Ingress frame, source MAC learning, CAM table update, destination lookup & forward/flood, table clearing.
- **T1.22.1 - T1.22.5**: Lab 05 (VLAN 802.1Q Tagging) Access/Trunk port modes, 802.1Q header breakdown, ingress tag insertion, egress tag stripping, inter-switch trunk packet flow.
- **T1.23.1 - T1.23.5**: Lab 06 (STP/RSTP Election) 3-switch triangle, Root Bridge election, Root Port / Designated Port assignment, Alternate Port blocking, link cut fast reconvergence.
- **T1.24.1 - T1.24.5**: Lab 07 (Link Aggregation LACP) 3-link bundle, Static vs LACP mode, Active/Standby link election, hash load balancing, link failover recovery.
- **T1.25.1 - T1.25.5**: Lab 08 (Subnetting & VLSM Calculator) Prefix CIDR mask analyzer, Network/Broadcast calculation, Usable host range, bitwise AND truth table, VLSM partitioner.
- **T1.26.1 - T1.26.5**: Lab 09 (IP Routing & Hop-by-Hop Rewriter) Multi-hop topology, Longest Prefix Match (LPM), L3 TTL decrement, L2 MAC rewrite at each hop, default route fallback.
- **T1.27.1 - T1.27.5**: Lab 10 (OSPF 7-State Machine) Down to Full state transitions, Hello/DBD/LSR/LSU/LSAck packet animation, DR/BDR election, LSDB synchronization table, neighbor reset.
- **T1.28.1 - T1.28.5**: Lab 11 (IPv6 NDP & SLAAC Studio) SLAAC RS/RA auto-config, DAD NS/NA address conflict detection, EUI-64 MAC bit inversion, address resolution flow, reset.
- **T1.29.1 - T1.29.5**: Lab 12 (Inter-VLAN Routing Comparative Lab) Router-on-a-Stick vs L3 Switch SVI, sub-interface tagging, hardware ASIC wire-speed routing flow, cross-VLAN packet delivery.

---

## 4. Tier 2: Boundary, Corner & Stress Cases Matrix ($\ge 5$ Test Cases per Feature)

### Boundary Category 1: Navigation & State Boundaries
- **T2.1.1**: Module ID out-of-range lower bound (`id = 0`, `id = -1`) gracefully clamps to Module 1.
- **T2.1.2**: Module ID out-of-range upper bound (`id = 13`, `id = 999`) gracefully clamps to Module 12.
- **T2.1.3**: `handlePrev` at Module 1 leaves `currentModuleId = 1` and disables previous button.
- **T2.1.4**: `handleNext` at Module 12 leaves `currentModuleId = 12` and disables next button.
- **T2.1.5**: Non-numeric or invalid module ID (`NaN`, `undefined`, `null`) safely falls back to Module 1 without crashing.

### Boundary Category 2: Search Input & Stress
- **T2.2.1**: Empty search query string (`""` or spaces only) returns empty result list or handles gracefully.
- **T2.2.2**: Special regex metacharacters in search input (`.*+?^${}()|[]\`) do not cause regex parse crashes.
- **T2.2.3**: Non-matching alphanumeric string (e.g. `xyz999nonexistent`) returns empty array with 0 errors.
- **T2.2.4**: Extremely long query string ($>500$ characters) is processed cleanly without performance bottleneck.
- **T2.2.5**: Search modal handles rapid keystroke debounce and rapid Escape key dismissal without dangling modal overlay.

### Boundary Category 3: Course Data & Quiz Stress
- **T2.3.1**: Quiz answer index validation ensures `correctAnswer` $\ge 0$ and $< \text{options.length}$ across all 36 quizzes.
- **T2.3.2**: Quiz options integrity ensures each question has exactly 4 distinct, non-empty answer strings.
- **T2.3.3**: Empty user answer submission in `QuizSection` disables submit button until at least one option is chosen.
- **T2.3.4**: Resetting quiz clears all selected answers and hides explanations cleanly.
- **T2.3.5**: Submitting 0/3 correct answers highlights all wrong answers with clear feedback and rationale without throwing exceptions.

### Boundary Category 4: Lab Controls & Network Fault Stress
- **T2.4.1**: Lab 01 Link Cut Stress: Cutting all links in Star/Mesh topology isolates all hosts; Reset restores all links.
- **T2.4.2**: Lab 04 CAM Overflow Stress: Floods multiple unknown MAC addresses; CAM table correctly records entries up to table bounds.
- **T2.4.3**: Lab 05 Reserved VLAN Boundary: Prevents invalid VLAN tags (VLAN 0 or VLAN 4095) from entering standard forwarding.
- **T2.4.4**: Lab 08 Subnetting Extreme Boundaries: Subnet prefix `/32` (single host) and `/31` (RFC 3021 point-to-point) handle zero/two host calculations correctly.
- **T2.4.5**: Lab 09 TTL Expiry Boundary: Packet with TTL=1 arriving at router triggers TTL decrement to 0 and drops packet with ICMP Time Exceeded instead of forwarding.
- **T2.4.6**: Lab 11 IPv6 Zero Crunch Stress: Multiple consecutive zero blocks (`0000:0000:0000`) correctly compress to `::` only once according to RFC 5952.

---

## 5. Tier 3: Cross-Feature Integration Scenarios

### Integration Scenario 1: Search $\to$ Navigation $\to$ Lab Mount
- **Step 1**: User activates search via `Ctrl+K`.
- **Step 2**: Types `"OSPF 7-State"`.
- **Step 3**: Selects Module 10 from results.
- **Step 4**: Modal closes, `currentModuleId` updates to 10, Header displays `10 / 12`, Sidebar marks Module 10 active, and `Lab10_OspfStateMachineLab` mounts.

### Integration Scenario 2: Quiz Evaluation $\to$ Module Completion $\to$ Progress & Confetti
- **Step 1**: User navigates to Module 4 (Switch MAC Learning).
- **Step 2**: Answers all 3 conceptual quizzes with correct answers.
- **Step 3**: Clicks "ตรวจคำตอบ (Submit Answers)".
- **Step 4**: System evaluates score 3/3, triggers celebration confetti, adds ID 4 to `completedModules`, and updates Sidebar with completed badge.

### Integration Scenario 3: Theme Toggle $\leftrightarrow$ Interactive SVG Lab Canvas Contrast
- **Step 1**: App starts in Dark Mode (`slate-950`).
- **Step 2**: User toggles theme to Light Mode (`slate-50`).
- **Step 3**: HTML container updates class hierarchy, SVG node text and link strokes remain high-contrast and legible across all 12 simulation components.

### Integration Scenario 4: Inline Lab $\leftrightarrow$ Fullscreen Modal Simulation Sync
- **Step 1**: User advances Lab 06 (STP Election) to Step 2 (Root Port selection).
- **Step 2**: Clicks "ขยายเต็มจอ (Fullscreen)".
- **Step 3**: Modal opens with full viewport canvas at Step 2.
- **Step 4**: User advances to Step 4 and closes modal.
- **Step 5**: Inline lab container displays consistent state at Step 4 without reset.

---

## 6. Tier 4: Real-World Scenarios

### Real-World Scenario 1: Complete Student Curriculum Mastery (End-to-End Course Walkthrough)
- Simulates a student entering the application at Module 1, reading all sections, reviewing 5 technical terms, taking all 3 quizzes with 100% score, advancing sequentially through Modules 1 to 12, completing all 36 quizzes, and finishing the entire course with 12/12 completion status.

### Real-World Scenario 2: Rapid Network Engineer Diagnostic Workflow
- Simulates a field engineer who needs immediate calculation tools:
  - Opens search (`⌘K`), searches `"Subnetting"`, jumps to Module 8, executes VLSM calculation.
  - Opens search again, searches `"STP Election"`, jumps to Module 6, steps through 4-step election to verify Root Bridge priority.

### Real-World Scenario 3: Interactive Multi-Device Simulation & Responsive Stress
- Simulates mobile and desktop viewport resizing, orientation changes, fullscreen toggles, and step-by-step packet flow playback on all 12 labs with zero UI freezing or memory leaks.

### Real-World Scenario 4: Automated CI/CD Production Build Verification
- Executes full Vite production bundling (`npm run build`).
- Verifies output directory `dist/` contains:
  - `dist/index.html` with valid meta tags and title.
  - `dist/assets/*.js` bundled script with zero syntax errors.
  - `dist/assets/*.css` compiled stylesheet with zero missing classes.
  - Overall bundle size within optimal distribution limits.

---

## 7. Execution Commands & Automation Matrix

| Command | Description | Target |
|---|---|---|
| `node tests/run_all_tests.mjs` | Master test runner executing all Unit, Integration, and E2E suites | All Tiers |
| `node tests/unit/ui_design_tokens.test.mjs` | Design system, Tailwind tokens, and CSS constraints | Tier 1 & 2 |
| `node tests/unit/course_data_integrity.test.mjs` | 12 modules, 60 terms, 36 quizzes schema & integrity | Tier 1 & 2 |
| `node tests/unit/labs_integrity.test.mjs` | 12 simulation labs mounting, step controls & container | Tier 1 & 2 |
| `node tests/integration/navigation_search_theme.test.mjs` | State transitions, search filtering, theme toggle | Tier 3 |
| `node tests/e2e/workflow_simulation.test.mjs` | End-to-end curriculum simulation & student journey | Tier 4 |
| `node tests/e2e/build_verification.test.mjs` | Production build and dist bundle verification | Tier 4 |
| `npm run build` | Vite production compiler | Build Verification |

---
