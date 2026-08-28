import { COURSE_MODULES } from '../src/data/courseData.js';
import { fileURLToPath } from 'url';

export async function runCourseDataIntegrityTests() {
  const results = {
    suite: 'Unit Tests: Course Data Model & Curriculum Integrity (Tier 1 & 2)',
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

  // T1.6.0: Exactly 12 modules present
  assert('T1.6.0 - COURSE_MODULES is an array of exactly 12 modules', Array.isArray(COURSE_MODULES) && COURSE_MODULES.length === 12);

  // Validate each module 1 to 12
  COURSE_MODULES.forEach((mod, idx) => {
    const expectedId = idx + 1;
    const modPrefix = `Module ${expectedId} (${mod.slug || 'unknown'})`;

    // Identity & Metadata
    assert(`${modPrefix} - ID matches sequence (${expectedId})`, mod.id === expectedId);
    assert(`${modPrefix} - Has non-empty title & subtitle`, typeof mod.title === 'string' && mod.title.length > 0 && typeof mod.subtitle === 'string');
    assert(`${modPrefix} - Has category and categoryTh`, Boolean(mod.category && mod.categoryTh));
    assert(`${modPrefix} - Has non-empty overview`, typeof mod.overview === 'string' && mod.overview.length > 10);
    assert(`${modPrefix} - Has labName and labDescription`, Boolean(mod.labName && mod.labDescription));

    // Sections
    assert(`${modPrefix} - Has at least 3 detailed sections`, Array.isArray(mod.sections) && mod.sections.length >= 3);
    if (Array.isArray(mod.sections)) {
      mod.sections.forEach((sec, sIdx) => {
        assert(`${modPrefix} Section ${sIdx + 1} - Has non-empty title & content`, typeof sec.title === 'string' && sec.title.length > 0 && typeof sec.content === 'string' && sec.content.length > 0);
      });
    }

    // Technical Terms Matrix
    assert(`${modPrefix} - Has technical terms array with non-empty terms`, Array.isArray(mod.terms) && mod.terms.length > 0);
    if (Array.isArray(mod.terms)) {
      mod.terms.forEach((t, tIdx) => {
        const hasTermName = typeof t.term === 'string' && t.term.length > 0;
        const hasDesc = (typeof t.desc === 'string' && t.desc.length > 0) || (typeof t.meaning === 'string' && t.meaning.length > 0);
        assert(`${modPrefix} Term ${tIdx + 1} ('${t.term || '?' }') - Has term and description`, hasTermName && hasDesc);
      });
    }

    // Conceptual Quizzes
    assert(`${modPrefix} - Has interactive quiz array with valid questions`, Array.isArray(mod.quiz) && mod.quiz.length > 0);
    if (Array.isArray(mod.quiz)) {
      mod.quiz.forEach((q, qIdx) => {
        const hasQuestion = typeof q.question === 'string' && q.question.length > 0;
        const has4Options = Array.isArray(q.options) && q.options.length >= 2;
        const answerIdx = q.answer !== undefined ? q.answer : q.correctAnswer;
        const validAnswer = typeof answerIdx === 'number' && answerIdx >= 0 && answerIdx < q.options.length;
        const hasExplanation = typeof q.explanation === 'string' && q.explanation.length > 0;

        assert(`${modPrefix} Quiz ${qIdx + 1} - Valid question, options & answer index [${answerIdx}]`, hasQuestion && has4Options && validAnswer && hasExplanation);
      });
    }
  });

  // Universal Core Topics Coverage Verification across all 12 modules
  const allContentStr = JSON.stringify(COURSE_MODULES);
  const coreKeywords = [
    'Topology',
    'OSI',
    'TCP',
    'Switch',
    'MAC',
    'VLAN',
    '802.1Q',
    'STP',
    'LACP',
    'Subnet',
    'Routing',
    'OSPF',
    'IPv6',
    'Inter-VLAN'
  ];

  coreKeywords.forEach((kw) => {
    assert(`T1.CoreCurriculum - Curriculum covers universal topic '${kw}'`, allContentStr.toLowerCase().includes(kw.toLowerCase()));
  });

  // Tier 2: Boundary & Corner Checks on Data
  const ids = COURSE_MODULES.map((m) => m.id);
  const uniqueIds = new Set(ids);
  assert('T2.DataBoundary - Module IDs are strictly unique (no duplicates)', ids.length === uniqueIds.size);

  const slugs = COURSE_MODULES.map((m) => m.slug);
  const uniqueSlugs = new Set(slugs);
  assert('T2.DataBoundary - Module slugs are strictly unique (no collision)', slugs.length === uniqueSlugs.size);

  // Check quiz option duplicates within questions
  let hasDuplicateOptions = false;
  COURSE_MODULES.forEach((mod) => {
    mod.quiz?.forEach((q) => {
      if (Array.isArray(q.options)) {
        const optSet = new Set(q.options);
        if (optSet.size !== q.options.length) {
          hasDuplicateOptions = true;
        }
      }
    });
  });
  assert('T2.DataBoundary - No quiz question contains duplicate options', !hasDuplicateOptions);

  return results;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runCourseDataIntegrityTests().then((res) => {
    console.log(`\n--- ${res.suite} ---`);
    res.tests.forEach((t) => console.log(`[${t.status}] ${t.name}`));
    console.log(`\nSummary: Passed ${res.passed}, Failed ${res.failed}\n`);
    process.exit(res.failed > 0 ? 1 : 0);
  });
}
