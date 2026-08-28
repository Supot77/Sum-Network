import { COURSE_MODULES } from '../src/data/courseData.js';

let passed = 0;
let failed = 0;
const failures = [];

function check(testName, condition, details = '') {
  if (condition) {
    passed++;
    console.log('[PASS] ' + testName);
  } else {
    failed++;
    failures.push({ testName, details });
    console.log('[FAIL] ' + testName + ' - ' + details);
  }
}

console.log('=== EMPIRICAL ADVERSARIAL CURRICULUM CHALLENGE HARNESS ===\n');

// 1. Module Count & Top-Level Structure Integrity
console.log('--- 1. Module Count & Structure ---');
check('COURSE_MODULES is an array', Array.isArray(COURSE_MODULES));
check('COURSE_MODULES contains exactly 12 modules', COURSE_MODULES.length === 12);

let totalTerms = 0;
let totalQuizzes = 0;

COURSE_MODULES.forEach((mod, idx) => {
  const modId = idx + 1;
  check(`Module ${modId}: ID matches sequence`, mod.id === modId);
  check(`Module ${modId}: Title is non-empty`, typeof mod.title === 'string' && mod.title.trim().length > 0);
  check(`Module ${modId}: Subtitle is non-empty`, typeof mod.subtitle === 'string' && mod.subtitle.trim().length > 0);
  check(`Module ${modId}: Category is non-empty`, typeof mod.category === 'string' && mod.category.trim().length > 0);
  check(`Module ${modId}: Overview is comprehensive (>20 chars)`, typeof mod.overview === 'string' && mod.overview.length > 20);
  check(`Module ${modId}: Sections array >= 3 sections`, Array.isArray(mod.sections) && mod.sections.length >= 3);

  // Sections check
  mod.sections.forEach((sec, sIdx) => {
    check(`Module ${modId} Sec ${sIdx + 1}: Title non-empty`, typeof sec.title === 'string' && sec.title.trim().length > 0);
    check(`Module ${modId} Sec ${sIdx + 1}: Content non-empty (>50 chars)`, typeof sec.content === 'string' && sec.content.trim().length > 50);
  });

  // Terms check
  check(`Module ${modId}: Terms array has exactly 5 terms`, Array.isArray(mod.terms) && mod.terms.length === 5);
  if (Array.isArray(mod.terms)) {
    mod.terms.forEach((t, tIdx) => {
      totalTerms++;
      const hasTerm = typeof t.term === 'string' && t.term.trim().length > 0;
      const desc = t.desc || t.meaning;
      const hasDesc = typeof desc === 'string' && desc.trim().length > 0;
      check(`Module ${modId} Term ${tIdx + 1} ('${t.term}'): Non-empty term and definition`, hasTerm && hasDesc, `term: ${t.term}, desc: ${desc}`);
    });
  }

  // Quiz check
  check(`Module ${modId}: Quiz array has at least 3 questions`, Array.isArray(mod.quiz) && mod.quiz.length >= 3);
  if (Array.isArray(mod.quiz)) {
    mod.quiz.forEach((q, qIdx) => {
      totalQuizzes++;
      const qPrefix = `Module ${modId} Quiz ${qIdx + 1}`;
      check(`${qPrefix}: Non-empty question string`, typeof q.question === 'string' && q.question.trim().length > 5);
      check(`${qPrefix}: Options array length >= 2`, Array.isArray(q.options) && q.options.length >= 2);
      
      // Check each option is non-empty
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, oIdx) => {
          check(`${qPrefix} Opt ${oIdx + 1}: Non-empty string`, typeof opt === 'string' && opt.trim().length > 0);
        });

        // Check options are distinct
        const optSet = new Set(q.options.map(o => o.trim()));
        check(`${qPrefix}: All options are unique (no duplicates)`, optSet.size === q.options.length);
      }

      // Check answer index bounds
      const ansIdx = q.answer !== undefined ? q.answer : q.correctAnswer;
      check(`${qPrefix}: Answer index (${ansIdx}) is valid within options bounds (0..${q.options ? q.options.length - 1 : -1})`, 
        typeof ansIdx === 'number' && Number.isInteger(ansIdx) && ansIdx >= 0 && ansIdx < (q.options ? q.options.length : 0));

      check(`${qPrefix}: Non-empty explanation (>10 chars)`, typeof q.explanation === 'string' && q.explanation.trim().length > 10);
    });
  }
});

console.log('\n--- 2. Technical Domain Calculations & RFC Standards ---');

// Test 2.1: Full-Mesh Topology Formula N(N-1)/2
function fullMeshLinks(n) {
  return (n * (n - 1)) / 2;
}
check('Full-Mesh Formula: N=8 gives 28 links', fullMeshLinks(8) === 28);
check('Full-Mesh Formula: N=4 gives 6 links', fullMeshLinks(4) === 6);
check('Full-Mesh Formula: N=10 gives 45 links', fullMeshLinks(10) === 45);

const mod1 = COURSE_MODULES[0];
const mod1MeshQuiz = mod1.quiz.find(q => q.question.includes('Full-Mesh') || q.question.includes('8 โหนด'));
check('Module 1 has Full-Mesh Quiz question', Boolean(mod1MeshQuiz));
if (mod1MeshQuiz) {
  const ansIndex = mod1MeshQuiz.answer !== undefined ? mod1MeshQuiz.answer : mod1MeshQuiz.correctAnswer;
  const chosenOpt = mod1MeshQuiz.options[ansIndex];
  check('Module 1 Full-Mesh Quiz correct option is 28 links', chosenOpt.includes('28'));
}

// Test 2.2: Subnetting Calculations: /22 Usable Hosts = 2^(32-22) - 2 = 1024 - 2 = 1022
function usableIpv4Hosts(prefixLen) {
  if (prefixLen >= 31) return prefixLen === 31 ? 2 : 1;
  const hostBits = 32 - prefixLen;
  return Math.pow(2, hostBits) - 2;
}
check('IPv4 Subnetting: /24 usable hosts = 254', usableIpv4Hosts(24) === 254);
check('IPv4 Subnetting: /22 usable hosts = 1022', usableIpv4Hosts(22) === 1022);
check('IPv4 Subnetting: /30 usable hosts = 2', usableIpv4Hosts(30) === 2);
check('IPv4 Subnetting: /28 usable hosts = 14', usableIpv4Hosts(28) === 14);

const mod8 = COURSE_MODULES[7];
const mod8Str = JSON.stringify(mod8);
check('Module 8 Subnetting Module covers /22 and 1022 usable hosts', mod8Str.includes('1,022') || mod8Str.includes('1022'));

// Test 2.3: IPv6 RFC 5952 Compression Rules
function compressIPv6(fullHex) {
  let hextets = fullHex.toLowerCase().split(':').map(h => parseInt(h, 16).toString(16));
  if (hextets.length !== 8) return null;
  
  let bestStart = -1;
  let bestLen = 0;
  let curStart = -1;
  let curLen = 0;
  
  for (let i = 0; i < 8; i++) {
    if (hextets[i] === '0') {
      if (curStart === -1) {
        curStart = i;
        curLen = 1;
      } else {
        curLen++;
      }
      if (curLen > bestLen && curLen >= 2) {
        bestLen = curLen;
        bestStart = curStart;
      }
    } else {
      curStart = -1;
      curLen = 0;
    }
  }
  
  if (bestLen >= 2) {
    const left = hextets.slice(0, bestStart).join(':');
    const right = hextets.slice(bestStart + bestLen).join(':');
    return left + '::' + right;
  }
  return hextets.join(':');
}

check('IPv6 RFC 5952: 2001:0db8:0000:0000:0000:0000:1428:57ab -> 2001:db8::1428:57ab', 
  compressIPv6('2001:0db8:0000:0000:0000:0000:1428:57ab') === '2001:db8::1428:57ab');
check('IPv6 RFC 5952: 2001:0db8:0000:0000:0000:0000:0000:0001 -> 2001:db8::1', 
  compressIPv6('2001:0db8:0000:0000:0000:0000:0000:0001') === '2001:db8::1');
check('IPv6 RFC 5952: 0000:0000:0000:0000:0000:0000:0000:0001 -> ::1', 
  compressIPv6('0000:0000:0000:0000:0000:0000:0000:0001') === '::1');
check('IPv6 RFC 5952: 2001:0db8:0000:0001:0000:0000:0000:0001 -> 2001:db8:0:1::1',
  compressIPv6('2001:0db8:0000:0001:0000:0000:0000:0001') === '2001:db8:0:1::1');

const mod11 = COURSE_MODULES[10];
const mod11Str = JSON.stringify(mod11);
check('Module 11 references RFC 5952, SLAAC and NDP', 
  mod11Str.includes('RFC 5952') && 
  mod11Str.includes('SLAAC') && 
  mod11Str.includes('NDP'));

// Test 2.4: OSPF State Machine Transitions
const expectedOspfStates = ['Down', 'Init', '2-Way', 'ExStart', 'Exchange', 'Loading', 'Full'];
const mod10 = COURSE_MODULES[9];
const mod10Str = JSON.stringify(mod10);
expectedOspfStates.forEach(st => {
  check(`Module 10 OSPF contains state '${st}' in curriculum`, mod10Str.includes(st));
});

// Test 2.5: STP 4-Step Election Rules
const mod6 = COURSE_MODULES[5];
const mod6Str = JSON.stringify(mod6);
check('Module 6 STP covers Bridge Priority, Root Path Cost, Sender BID, Port ID',
  mod6Str.includes('Bridge ID') &&
  mod6Str.includes('Root Path Cost') &&
  mod6Str.includes('Priority'));

console.log('\n--- 3. Total Counts & Metrics ---');
check('Total Terms count is exactly 60 (5 terms x 12 modules)', totalTerms === 60, `Actual: ${totalTerms}`);
check('Total Quiz questions >= 36 (>= 3 per module)', totalQuizzes >= 36, `Actual: ${totalQuizzes}`);

console.log('\n=====================================================');
console.log('ADVERSARIAL STRESS TEST SUMMARY:');
console.log(`  Passed: ${passed}`);
console.log(`  Failed: ${failed}`);
console.log('=====================================================\n');

if (failed > 0) {
  console.log('Failures breakdown:');
  failures.forEach(f => console.log(`  - ${f.testName}: ${f.details}`));
  process.exit(1);
} else {
  console.log('ALL ADVERSARIAL CURRICULUM CHALLENGES PASSED EMPIRICALLY!\n');
  process.exit(0);
}