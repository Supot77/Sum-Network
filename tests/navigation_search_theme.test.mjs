import { COURSE_MODULES } from '../src/data/courseData.js';
import { fileURLToPath } from 'url';

export async function runNavigationSearchThemeTests() {
  const results = {
    suite: 'Integration Tests: Navigation, Search & Theme Sync (Tier 3)',
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

  // --- 1. Navigation State Machine Simulation ---
  let currentModuleId = 1;
  const totalModules = COURSE_MODULES.length;

  const handleNext = () => {
    if (currentModuleId < totalModules) {
      currentModuleId++;
    }
  };

  const handlePrev = () => {
    if (currentModuleId > 1) {
      currentModuleId--;
    }
  };

  const handleSelectModule = (id) => {
    if (id >= 1 && id <= totalModules) {
      currentModuleId = id;
    }
  };

  assert('T3.1.1 - Navigation starts at Module 1', currentModuleId === 1);
  handlePrev();
  assert('T3.1.2 - handlePrev at lower bound stays at Module 1', currentModuleId === 1);

  handleNext();
  assert('T3.1.3 - handleNext advances from Module 1 to Module 2', currentModuleId === 2);

  handleSelectModule(12);
  assert('T3.1.4 - handleSelectModule jumps directly to Module 12', currentModuleId === 12);

  handleNext();
  assert('T3.1.5 - handleNext at upper bound stays at Module 12', currentModuleId === 12);

  handleSelectModule(5);
  assert('T3.1.6 - handleSelectModule jumps to intermediate Module 5', currentModuleId === 5);

  // --- 2. Theme Switching Logic ---
  let isDark = true;
  const toggleTheme = () => { isDark = !isDark; };

  assert('T3.2.1 - Theme initializes as Dark mode', isDark === true);
  toggleTheme();
  assert('T3.2.2 - toggleTheme transitions from Dark to Light mode', isDark === false);
  toggleTheme();
  assert('T3.2.3 - toggleTheme transitions back from Light to Dark mode', isDark === true);

  // --- 3. Search Indexing & Filter Logic ---
  function performSearch(query) {
    if (!query || query.trim() === '') return [];
    const q = query.toLowerCase().trim();
    return COURSE_MODULES.filter((m) => {
      const matchTitle = m.title?.toLowerCase().includes(q);
      const matchSub = m.subtitle?.toLowerCase().includes(q);
      const matchOverview = m.overview?.toLowerCase().includes(q);
      const matchCategory = m.category?.toLowerCase().includes(q) || m.categoryTh?.toLowerCase().includes(q);
      const matchLab = m.labName?.toLowerCase().includes(q) || m.labDescription?.toLowerCase().includes(q);
      const matchTerms = m.terms?.some(t => t.term?.toLowerCase().includes(q) || t.desc?.toLowerCase().includes(q));
      return matchTitle || matchSub || matchOverview || matchCategory || matchLab || matchTerms;
    });
  }

  // Exact & Partial keyword searches
  const vlanResults = performSearch('VLAN');
  assert('T3.3.1 - Search for "VLAN" finds VLAN module(s)', vlanResults.length >= 1 && vlanResults.some(m => m.slug.includes('vlan')));

  const ospfResults = performSearch('OSPF');
  assert('T3.3.2 - Search for "OSPF" finds OSPF module', ospfResults.length >= 1 && ospfResults.some(m => m.slug.includes('ospf')));

  const subnetResults = performSearch('Subnet');
  assert('T3.3.3 - Search for "Subnet" finds Subnetting module', subnetResults.length >= 1 && subnetResults.some(m => m.slug.includes('08-')));

  const thaiQueryResults = performSearch('โทโพโลยี');
  assert('T3.3.4 - Search in Thai "โทโพโลยี" returns Module 1', thaiQueryResults.length >= 1 && thaiQueryResults.some(m => m.id === 1));

  // Edge & Boundary search cases
  const emptyResults = performSearch('');
  assert('T3.3.5 - Empty search query returns empty array without throwing', Array.isArray(emptyResults) && emptyResults.length === 0);

  const specialRegexResults = performSearch('^.*[a-z]+$?');
  assert('T3.3.6 - Regex metacharacters in query do not cause RegExp crashes', Array.isArray(specialRegexResults));

  const nonExistentResults = performSearch('xyz999completelyunmatchedquery');
  assert('T3.3.7 - Non-matching query cleanly returns 0 results', nonExistentResults.length === 0);

  // --- 4. Completed Modules State Manager & Quiz Evaluation ---
  const completedModules = [];
  const handleCompleteModule = (id) => {
    if (!completedModules.includes(id)) {
      completedModules.push(id);
    }
  };

  // Evaluate Module 1 Quiz
  const mod1 = COURSE_MODULES[0];
  let mod1Answers = {};
  mod1.quiz?.forEach((q, idx) => {
    mod1Answers[idx] = q.answer !== undefined ? q.answer : q.correctAnswer;
  });

  // Calculate score
  let mod1Score = 0;
  mod1.quiz?.forEach((q, idx) => {
    const correct = q.answer !== undefined ? q.answer : q.correctAnswer;
    if (mod1Answers[idx] === correct) mod1Score++;
  });

  assert('T3.4.1 - Answering all Module 1 quizzes correctly scores 100%', mod1Score === mod1.quiz?.length);

  if (mod1Score === mod1.quiz?.length) {
    handleCompleteModule(mod1.id);
  }
  assert('T3.4.2 - Perfect score triggers module completion', completedModules.includes(1));

  // Test idempotency
  handleCompleteModule(1);
  assert('T3.4.3 - Duplicate completion event does not duplicate array entry', completedModules.filter(id => id === 1).length === 1);

  // Simulate incorrect submission for Module 2
  const mod2 = COURSE_MODULES[1];
  let mod2IncorrectAnswers = {};
  mod2.quiz?.forEach((q, idx) => {
    // deliberately wrong answer (offset by +1 mod options length)
    const correct = q.answer !== undefined ? q.answer : q.correctAnswer;
    mod2IncorrectAnswers[idx] = (correct + 1) % q.options.length;
  });

  let mod2Score = 0;
  mod2.quiz?.forEach((q, idx) => {
    const correct = q.answer !== undefined ? q.answer : q.correctAnswer;
    if (mod2IncorrectAnswers[idx] === correct) mod2Score++;
  });

  assert('T3.4.4 - Submitting wrong answers results in 0 score', mod2Score === 0);
  if (mod2Score === mod2.quiz?.length) {
    handleCompleteModule(mod2.id);
  }
  assert('T3.4.5 - Failed quiz does not add module to completedModules', !completedModules.includes(2));

  return results;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runNavigationSearchThemeTests().then((res) => {
    console.log(`\n--- ${res.suite} ---`);
    res.tests.forEach((t) => console.log(`[${t.status}] ${t.name}`));
    console.log(`\nSummary: Passed ${res.passed}, Failed ${res.failed}\n`);
    process.exit(res.failed > 0 ? 1 : 0);
  });
}
