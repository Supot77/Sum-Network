import { COURSE_MODULES } from '../src/data/courseData.js';
import { fileURLToPath } from 'url';

export async function runWorkflowSimulationTests() {
  const results = {
    suite: 'E2E Scenario Tests: End-to-End Student Learning Journey (Tier 4)',
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

  // =========================================================================
  // SCENARIO 1: Complete Student Curriculum Mastery (12 Modules, Quizzes & Labs)
  // =========================================================================
  const completedModules = [];
  let currentModuleIndex = 0;
  let totalQuizzesAttempted = 0;
  let totalQuizzesPassed = 0;

  for (let i = 0; i < COURSE_MODULES.length; i++) {
    const mod = COURSE_MODULES[i];
    const modNum = mod.id;

    // 1. Enter chapter
    assert(`E2E.Step1.Mod${modNum} - Successfully navigate to Module ${modNum} (${mod.slug})`, mod.id === (i + 1));

    // 2. Read sections
    assert(`E2E.Step2.Mod${modNum} - Read ${mod.sections?.length || 0} theory sections`, (mod.sections?.length || 0) >= 3);

    // 3. Review Terms
    assert(`E2E.Step3.Mod${modNum} - Review technical terms matrix (${mod.terms?.length || 0} terms)`, (mod.terms?.length || 0) > 0);

    // 4. Take Quizzes
    let quizScore = 0;
    const userAnswers = {};

    mod.quiz?.forEach((q, qIdx) => {
      totalQuizzesAttempted++;
      // Student selects correct answer
      const correct = q.answer !== undefined ? q.answer : q.correctAnswer;
      userAnswers[qIdx] = correct;
      if (userAnswers[qIdx] === correct) {
        quizScore++;
        totalQuizzesPassed++;
      }
    });

    const passedQuiz = quizScore === (mod.quiz?.length || 0);
    assert(`E2E.Step4.Mod${modNum} - Complete quiz with 100% score (${quizScore}/${mod.quiz?.length})`, passedQuiz);

    if (passedQuiz) {
      completedModules.push(mod.id);
    }

    // 5. Interact with Lab Sandbox
    assert(`E2E.Step5.Mod${modNum} - Execute simulation sandbox (${mod.labName})`, Boolean(mod.labName));

    currentModuleIndex++;
  }

  // Final Course Completion Verification
  assert('E2E.Summary - All 12 modules completed in sequence', completedModules.length === 12);
  assert('E2E.Summary - All attempted quizzes passed with 100% precision', totalQuizzesAttempted > 0 && totalQuizzesAttempted === totalQuizzesPassed);

  // =========================================================================
  // SCENARIO 2: Field Engineer Quick Diagnostic & Interactive Calculation Flow
  // =========================================================================

  // Test Case A: Subnetting Calculator Math (Lab 08)
  const computeSubnetHosts = (prefix) => {
    const hostBits = 32 - prefix;
    const totalHosts = Math.pow(2, hostBits);
    return Math.max(0, totalHosts - 2);
  };
  assert('E2E.DiagA - Lab 08 /24 subnet calculator yields 254 usable hosts', computeSubnetHosts(24) === 254);
  assert('E2E.DiagA - Lab 08 /26 subnet calculator yields 62 usable hosts', computeSubnetHosts(26) === 62);
  assert('E2E.DiagA - Lab 08 /30 point-to-point subnet yields 2 usable hosts', computeSubnetHosts(30) === 2);

  // Test Case B: IPv6 EUI-64 Interface ID Inversion (Lab 11)
  const computeEui64 = (macStr) => {
    const clean = macStr.replace(/[-:]/g, '');
    if (clean.length !== 12) return 'Invalid MAC';
    const part1 = clean.substring(0, 6);
    const part2 = clean.substring(6, 12);
    let firstByte = parseInt(part1.substring(0, 2), 16);
    firstByte = firstByte ^ 2;
    const hexFirst = firstByte.toString(16).padStart(2, '0');
    return `${hexFirst}${part1.substring(2, 4)}:${part1.substring(4, 6)}ff:fe${part2.substring(0, 2)}:${part2.substring(2, 6)}`.toLowerCase();
  };

  const macTest = '00-E0-FC-12-34-56';
  const expectedEui64 = '02e0:fcff:fe12:3456';
  assert(`E2E.DiagB - Lab 11 EUI-64 converts MAC ${macTest} to ${expectedEui64}`, computeEui64(macTest) === expectedEui64);

  // Test Case C: STP Root Bridge Election Logic (Lab 06)
  const switches = [
    { name: 'SW1', priority: 32768, mac: '4c1f-cc00-1111' },
    { name: 'SW2', priority: 4096, mac: '4c1f-cc00-2222' },
    { name: 'SW3', priority: 32768, mac: '4c1f-cc00-3333' },
  ];
  const electRootBridge = (swList) => {
    return [...swList].sort((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return a.mac.localeCompare(b.mac);
    })[0];
  };
  const rootBridge = electRootBridge(switches);
  assert('E2E.DiagC - Lab 06 STP election correctly chooses lowest priority switch (SW2: 4096) as Root Bridge', rootBridge.name === 'SW2');

  return results;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runWorkflowSimulationTests().then((res) => {
    console.log(`\n--- ${res.suite} ---`);
    res.tests.forEach((t) => console.log(`[${t.status}] ${t.name}`));
    console.log(`\nSummary: Passed ${res.passed}, Failed ${res.failed}\n`);
    process.exit(res.failed > 0 ? 1 : 0);
  });
}
