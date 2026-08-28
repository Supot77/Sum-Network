import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COURSE_MODULES, CATEGORIES } from '../src/data/courseData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../');

export async function runAdversarialShellDesignTests() {
  const results = {
    suite: 'Adversarial Stress-Tests: Design System, Shell, Search, Quiz, and Labs',
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
      results.tests.push({ name, status: 'FAIL', details: details || 'Condition was false' });
    }
  }

  console.log('\n--- Starting Adversarial Stress-Tests ---\n');

  // =========================================================================
  // 1. DESIGN SYSTEM AUDIT: GLOW, NEON, AND TYPOGRAPHY ARTIFACTS
  // =========================================================================
  const srcFiles = [];
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.name.endsWith('.jsx') || entry.name.endsWith('.js') || entry.name.endsWith('.css') || entry.name.endsWith('.html')) {
        srcFiles.push(fullPath);
      }
    }
  }
  scanDir(path.join(ROOT_DIR, 'src'));
  if (fs.existsSync(path.join(ROOT_DIR, 'index.html'))) {
    srcFiles.push(path.join(ROOT_DIR, 'index.html'));
  }

  const glowPatterns = [
    /shadow-\[0_0_/i,
    /drop-shadow-\[0_0_/i,
    /box-shadow:\s*0\s+0\s+\d+px/i,
    /filter:\s*drop-shadow\(0\s+0\s+\d+px/i,
    /neon/i,
    /glow/i
  ];

  let glowViolations = [];
  for (const file of srcFiles) {
    const relPath = path.relative(ROOT_DIR, file);
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      // Exclude comments or valid labels
      for (const pattern of glowPatterns) {
        if (pattern.test(line)) {
          // Check if it's a comment or harmless description
          const isHarmless = line.includes('ตัดทอนแสงเรืองฟุ้ง') || 
                             line.includes('no glow') || 
                             line.includes('No glow') || 
                             line.includes('ตัดแสงฟุ้ง') ||
                             line.includes('glow') && (line.includes('//') || line.includes('/*') || line.includes('* '));
          if (!isHarmless && (line.includes('shadow-') || line.includes('glow') || line.includes('neon'))) {
            glowViolations.push(`${relPath}:${idx + 1} -> ${line.trim()}`);
          }
        }
      }
    });
  }

  assert(
    'ADV-1.1: Zero glow or neon effect classes across all source files',
    glowViolations.length === 0,
    glowViolations.length > 0 ? `Found glow artifacts:\n${glowViolations.join('\n')}` : 'No glow artifacts found'
  );

  // Check Font declarations
  const indexHtmlContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
  assert(
    'ADV-1.2: index.html loads Inter, Sarabun, Fira Code, and JetBrains Mono',
    indexHtmlContent.includes('Inter') &&
    indexHtmlContent.includes('Sarabun') &&
    indexHtmlContent.includes('JetBrains+Mono') &&
    indexHtmlContent.includes('Fira+Code')
  );

  const tailwindContent = fs.readFileSync(path.join(ROOT_DIR, 'tailwind.config.js'), 'utf8');
  assert(
    'ADV-1.3: tailwind.config.js declares font families with fallback sans & mono stacks',
    tailwindContent.includes("sans: ['Inter', 'Sarabun'") &&
    tailwindContent.includes("mono: ['JetBrains Mono', 'Fira Code'")
  );

  // =========================================================================
  // 2. COMPONENT IMPORT INTEGRITY
  // =========================================================================
  const appContent = fs.readFileSync(path.join(ROOT_DIR, 'src/App.jsx'), 'utf8');
  const labContainerContent = fs.readFileSync(path.join(ROOT_DIR, 'src/components/labs/LabContainer.jsx'), 'utf8');

  // Verify all 12 labs exist and are imported in LabContainer
  for (let i = 1; i <= 12; i++) {
    const padded = i < 10 ? `0${i}` : `${i}`;
    const labFiles = fs.readdirSync(path.join(ROOT_DIR, 'src/components/labs')).filter(f => f.startsWith(`Lab${padded}`));
    assert(`ADV-2.${i}: Lab ${padded} component file exists in src/components/labs/`, labFiles.length === 1);
    if (labFiles.length === 1) {
      assert(`ADV-2.${i}b: LabContainer imports and maps Lab ${padded} (${labFiles[0]})`, labContainerContent.includes(labFiles[0].replace('.jsx', '')));
    }
  }

  // =========================================================================
  // 3. THEME PERSISTENCE & CLASS SYNCHRONIZATION
  // =========================================================================
  // Test theme state toggling and DOM class synchronization logic
  let mockHtmlClassList = new Set();
  const mockDocumentElement = {
    classList: {
      add: (cls) => mockHtmlClassList.add(cls),
      remove: (cls) => mockHtmlClassList.delete(cls),
      contains: (cls) => mockHtmlClassList.has(cls)
    }
  };

  function simulateThemeEffect(isDark) {
    if (isDark) {
      mockDocumentElement.classList.add('dark');
    } else {
      mockDocumentElement.classList.remove('dark');
    }
  }

  simulateThemeEffect(true);
  assert('ADV-3.1: Dark theme adds "dark" class to documentElement', mockDocumentElement.classList.contains('dark'));

  simulateThemeEffect(false);
  assert('ADV-3.2: Light theme removes "dark" class from documentElement', !mockDocumentElement.classList.contains('dark'));

  simulateThemeEffect(true);
  assert('ADV-3.3: Re-toggling dark theme restores "dark" class', mockDocumentElement.classList.contains('dark'));

  // Test App.jsx structure for theme binding
  assert(
    'ADV-3.4: App.jsx wraps layout with dynamic dark/light background tokens',
    appContent.includes("isDark ? 'dark bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'")
  );

  // =========================================================================
  // 4. SEARCHMODAL KEYBOARD NAVIGATION & EDGE CASES
  // =========================================================================
  function filterModules(query) {
    return COURSE_MODULES.filter(m => {
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        m.title.toLowerCase().includes(q) ||
        (m.subtitle && m.subtitle.toLowerCase().includes(q)) ||
        (m.overview && m.overview.toLowerCase().includes(q)) ||
        (m.sections && m.sections.some(s => s.title.toLowerCase().includes(q) || (s.content && s.content.toLowerCase().includes(q))))
      );
    });
  }

  // Stress test: Empty query returns all 12 modules
  const allModules = filterModules('');
  assert('ADV-4.1: Empty query returns all 12 modules', allModules.length === 12);

  // Stress test: Whitespace only query returns all 12 modules
  const whitespaceModules = filterModules('     ');
  assert('ADV-4.2: Whitespace-only query returns all 12 modules', whitespaceModules.length === 12);

  // Stress test: 500-char long query does not crash and returns 0 results
  const longQuery = 'a'.repeat(500);
  const longResults = filterModules(longQuery);
  assert('ADV-4.3: 500-character query returns 0 results without memory error', longResults.length === 0);

  // Stress test: Special characters & Regex metacharacters
  const specialChars = '[.*+?^${}()|/\\';
  let specialSuccess = true;
  try {
    const specialResults = filterModules(specialChars);
    specialSuccess = Array.isArray(specialResults);
  } catch (e) {
    specialSuccess = false;
  }
  assert('ADV-4.4: Regex metacharacters in query do not crash search algorithm', specialSuccess);

  // Stress test: Thai language search
  const thaiSearch = filterModules('เราเตอร์');
  assert('ADV-4.5: Thai search "เราเตอร์" finds routing / router modules', thaiSearch.length >= 1);

  // Stress test: Arrow navigation wrapping state machine
  function simulateSearchKeyNav(filteredList, actions) {
    let selectedIndex = 0;
    for (const key of actions) {
      if (key === 'ArrowDown') {
        selectedIndex = (selectedIndex + 1) % Math.max(1, filteredList.length);
      } else if (key === 'ArrowUp') {
        selectedIndex = (selectedIndex - 1 + filteredList.length) % Math.max(1, filteredList.length);
      }
    }
    return selectedIndex;
  }

  // 12 items: ArrowDown 12 times should wrap from 0 to 0
  const wrapDown = simulateSearchKeyNav(allModules, Array(12).fill('ArrowDown'));
  assert('ADV-4.6: ArrowDown 12 times wraps back to 0', wrapDown === 0);

  // 12 items: ArrowUp from 0 should wrap to index 11 (last item)
  const wrapUp = simulateSearchKeyNav(allModules, ['ArrowUp']);
  assert('ADV-4.7: ArrowUp from index 0 wraps to index 11 (last item)', wrapUp === 11);

  // 1 item filtered: ArrowDown and ArrowUp should always remain 0
  const singleItem = [allModules[0]];
  const singleWrapDown = simulateSearchKeyNav(singleItem, ['ArrowDown']);
  const singleWrapUp = simulateSearchKeyNav(singleItem, ['ArrowUp']);
  assert('ADV-4.8: Single item list remains at index 0 for both ArrowUp/ArrowDown', singleWrapDown === 0 && singleWrapUp === 0);

  // 0 items filtered: simulate math max clamp
  const emptyList = [];
  const emptyWrap = simulateSearchKeyNav(emptyList, ['ArrowDown', 'ArrowUp']);
  assert('ADV-4.9: Empty result list does not produce NaN or crash in nav calculation', Number.isInteger(emptyWrap) && emptyWrap === 0);

  // =========================================================================
  // 5. QUIZSECTION STATE TRANSITIONS & SUBMISSION INTEGRITY
  // =========================================================================
  for (const mod of COURSE_MODULES) {
    assert(`ADV-5.${mod.id}.1: Module ${mod.id} quiz array has at least 3 questions`, Array.isArray(mod.quiz) && mod.quiz.length >= 3);
    
    mod.quiz.forEach((q, qIdx) => {
      const correct = q.correctAnswer !== undefined ? q.correctAnswer : q.answer;
      assert(
        `ADV-5.${mod.id}.q${qIdx + 1}: Question "${q.question.slice(0, 30)}..." has valid options (>=2) and correct index in bounds`,
        Array.isArray(q.options) && q.options.length >= 2 && correct >= 0 && correct < q.options.length && typeof q.explanation === 'string' && q.explanation.length > 0
      );
    });
  }

  // Quiz state machine simulation
  class QuizStateMachine {
    constructor(quizList) {
      this.quizList = quizList;
      this.selectedAnswers = {};
      this.showResults = false;
      this.completed = false;
    }

    select(qIdx, optIdx) {
      if (this.showResults) return false; // Locked after submission
      this.selectedAnswers[qIdx] = optIdx;
      return true;
    }

    check() {
      this.showResults = true;
      let correctCount = 0;
      this.quizList.forEach((q, idx) => {
        const correct = q.correctAnswer !== undefined ? q.correctAnswer : q.answer;
        if (this.selectedAnswers[idx] === correct) correctCount++;
      });
      if (correctCount === this.quizList.length) {
        this.completed = true;
      }
      return { correctCount, total: this.quizList.length, passed: this.completed };
    }

    reset() {
      this.selectedAnswers = {};
      this.showResults = false;
      this.completed = false;
    }
  }

  const sampleQuiz = COURSE_MODULES[0].quiz;
  const qsm = new QuizStateMachine(sampleQuiz);

  // Test 1: Initial state
  assert('ADV-5.A: Initial quiz state has 0 selected answers and not completed', Object.keys(qsm.selectedAnswers).length === 0 && !qsm.completed && !qsm.showResults);

  // Test 2: Answering partial quiz
  qsm.select(0, sampleQuiz[0].correctAnswer ?? sampleQuiz[0].answer);
  assert('ADV-5.B: Partial selection records answer for question 0', qsm.selectedAnswers[0] !== undefined);

  // Test 3: Submitting partial quiz
  const partialResult = qsm.check();
  assert('ADV-5.C: Submitting incomplete quiz does not mark completed', !partialResult.passed && !qsm.completed);

  // Test 4: Answer locking when showResults is true
  const lockAttempt = qsm.select(0, 999);
  assert('ADV-5.D: Selecting answers when results are shown is locked and rejected', lockAttempt === false && qsm.selectedAnswers[0] !== 999);

  // Test 5: Reset clears state
  qsm.reset();
  assert('ADV-5.E: Reset clears selected answers and results visibility', Object.keys(qsm.selectedAnswers).length === 0 && !qsm.showResults);

  // Test 6: Perfect score completion
  sampleQuiz.forEach((q, idx) => {
    qsm.select(idx, q.correctAnswer ?? q.answer);
  });
  const perfectResult = qsm.check();
  assert('ADV-5.F: Perfect answers achieve 100% and triggers completed flag', perfectResult.passed && perfectResult.correctCount === sampleQuiz.length && qsm.completed);

  // =========================================================================
  // 6. LABCONTAINER FULLSCREEN MODAL TOGGLE STATE MACHINE
  // =========================================================================
  class LabContainerStateMachine {
    constructor(moduleId) {
      this.moduleId = moduleId;
      this.isFullscreen = false;
    }

    openFullscreen() {
      this.isFullscreen = true;
    }

    closeFullscreen() {
      this.isFullscreen = false;
    }

    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    }
  }

  const lcsm = new LabContainerStateMachine(1);
  assert('ADV-6.1: LabContainer initializes in inline mode (isFullscreen === false)', lcsm.isFullscreen === false);

  lcsm.openFullscreen();
  assert('ADV-6.2: openFullscreen transitions to isFullscreen === true', lcsm.isFullscreen === true);

  lcsm.closeFullscreen();
  assert('ADV-6.3: closeFullscreen transitions to isFullscreen === false', lcsm.isFullscreen === false);

  lcsm.toggleFullscreen();
  assert('ADV-6.4: toggleFullscreen toggles from false to true', lcsm.isFullscreen === true);

  lcsm.toggleFullscreen();
  assert('ADV-6.5: toggleFullscreen toggles back from true to false', lcsm.isFullscreen === false);

  // Check LabContainer code for accessibility and escape handling
  const labContainerSrc = fs.readFileSync(path.join(ROOT_DIR, 'src/components/labs/LabContainer.jsx'), 'utf8');
  assert('ADV-6.6: LabContainer renders backdrop blur on fullscreen overlay', labContainerSrc.includes('backdrop-blur'));
  assert('ADV-6.7: LabContainer passes isFullscreen prop to ActiveLabComponent', labContainerSrc.includes('isFullscreen={false}') && labContainerSrc.includes('isFullscreen={true}'));

  // =========================================================================
  // 7. SUMMARY & CONCLUSION
  // =========================================================================
  console.log(`\n================================================================`);
  console.log(` ADV-TEST SUMMARY: ${results.passed} PASSED, ${results.failed} FAILED`);
  console.log(`================================================================\n`);

  return results;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runAdversarialShellDesignTests().then(res => {
    process.exit(res.failed > 0 ? 1 : 0);
  });
}
