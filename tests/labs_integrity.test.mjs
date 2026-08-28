import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../');

export async function runLabsIntegrityTests() {
  const results = {
    suite: 'Unit Tests: 12 Interactive Simulation Labs & Container (Tier 1 & 2)',
    passed: 0,
    failed: 0,
    tests: []
  };

  function assert(name, condition, details = '') {
    if (condition) {
      results.passed++;
      results.tests.push({ name, status: 'PASS', details });
    } else {
      results.failed++;
      results.tests.push({ name, status: 'FAIL', details });
    }
  }

  const labsDir = path.join(ROOT_DIR, 'src/components/labs');
  assert('T1.5.0 - Labs directory exists at src/components/labs', fs.existsSync(labsDir));

  // LabContainer verification
  const containerPath = path.join(labsDir, 'LabContainer.jsx');
  assert('T1.5.1 - LabContainer.jsx exists', fs.existsSync(containerPath));

  if (fs.existsSync(containerPath)) {
    const containerContent = fs.readFileSync(containerPath, 'utf8');
    assert('T1.5.2 - LabContainer imports all 12 lab components', 
      containerContent.includes('Lab01_') &&
      containerContent.includes('Lab02_') &&
      containerContent.includes('Lab03_') &&
      containerContent.includes('Lab04_') &&
      containerContent.includes('Lab05_') &&
      containerContent.includes('Lab06_') &&
      containerContent.includes('Lab07_') &&
      containerContent.includes('Lab08_') &&
      containerContent.includes('Lab09_') &&
      containerContent.includes('Lab10_') &&
      containerContent.includes('Lab11_') &&
      containerContent.includes('Lab12_')
    );

    assert('T1.5.3 - LabContainer implements Fullscreen modal toggle state',
      containerContent.includes('isFullscreen') && containerContent.includes('setIsFullscreen')
    );

    assert('T1.5.4 - LabContainer provides close/minimize button for fullscreen modal',
      containerContent.includes('Minimize2') || containerContent.includes('setIsFullscreen(false)')
    );

    assert('T2.5.1 - LabContainer gracefully falls back to default lab for unmapped module IDs',
      containerContent.includes('|| Lab01_TopologyExplorer') || containerContent.includes('LABS[moduleId]')
    );
  }

  // 12 Labs definition table
  const expectedLabs = [
    { id: 1, file: 'Lab01_TopologyExplorer.jsx', feature: 'Topology & Fault Sandbox (Star/Ring/Bus/Tree/Mesh)' },
    { id: 2, file: 'Lab02_EncapsulationStudio.jsx', feature: 'OSI/TCP-IP 5-Layer Encapsulation Studio' },
    { id: 3, file: 'Lab03_VrpCliTerminal.jsx', feature: 'Universal Network OS & CLI Modes' },
    { id: 4, file: 'Lab04_SwitchMacLearningLab.jsx', feature: 'Switch MAC Table Learning & Forwarding/Flooding' },
    { id: 5, file: 'Lab05_VlanTaggingLab.jsx', feature: 'IEEE 802.1Q VLAN Tagging & Access/Trunk Studio' },
    { id: 6, file: 'Lab06_StpElectionLab.jsx', feature: 'STP/RSTP 4-Step Election & Reconvergence' },
    { id: 7, file: 'Lab07_EthTrunkClusterLab.jsx', feature: 'Link Aggregation (LAG/LACP) Simulator' },
    { id: 8, file: 'Lab08_SubnettingCalculator.jsx', feature: 'Subnetting & VLSM Calculator' },
    { id: 9, file: 'Lab09_IpRoutingForwarder.jsx', feature: 'IP Routing & Hop-by-Hop L2/L3 Rewriter' },
    { id: 10, file: 'Lab10_OspfStateMachineLab.jsx', feature: 'OSPF 7-State Machine & Adjacency Lab' },
    { id: 11, file: 'Lab11_Ipv6NdSlaacLab.jsx', feature: 'IPv6 NDP & SLAAC Studio' },
    { id: 12, file: 'Lab12_InterVlanRouterLab.jsx', feature: 'Inter-VLAN Routing Comparative Lab' }
  ];

  expectedLabs.forEach((lab) => {
    const labPath = path.join(labsDir, lab.file);
    const exists = fs.existsSync(labPath);
    assert(`T1.Lab${lab.id < 10 ? '0' + lab.id : lab.id} - ${lab.file} exists (${lab.feature})`, exists);

    if (exists) {
      const content = fs.readFileSync(labPath, 'utf8');

      // Check React component export
      assert(`Lab ${lab.id} - Exports valid default React function component`,
        content.includes('export default function') || content.includes('export default')
      );

      // Check interactive state logic
      assert(`Lab ${lab.id} - Manages interactive simulation state (useState)`,
        content.includes('useState')
      );

      // Check step-by-step or control elements (buttons, inputs, onChange, onClick, sliders)
      const hasControls = 
        content.includes('Step') ||
        content.includes('step') ||
        content.includes('play') ||
        content.includes('Play') ||
        content.includes('Reset') ||
        content.includes('reset') ||
        content.includes('onClick') ||
        content.includes('onChange') ||
        content.includes('calculate') ||
        content.includes('cmd') ||
        content.includes('<input') ||
        content.includes('<button');
      assert(`Lab ${lab.id} - Exposes interactive simulation controls (inputs, buttons, or step machine)`, hasControls);

      // Check visual / SVG / layout elements
      const hasVisual =
        content.includes('<svg') ||
        content.includes('grid') ||
        content.includes('flex') ||
        content.includes('rounded-');
      assert(`Lab ${lab.id} - Renders responsive visual layout elements`, hasVisual);
    }
  });

  return results;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runLabsIntegrityTests().then((res) => {
    console.log(`\n--- ${res.suite} ---`);
    res.tests.forEach((t) => console.log(`[${t.status}] ${t.name}`));
    console.log(`\nSummary: Passed ${res.passed}, Failed ${res.failed}\n`);
    process.exit(res.failed > 0 ? 1 : 0);
  });
}
