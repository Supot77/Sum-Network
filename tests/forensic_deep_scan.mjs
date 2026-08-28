import fs from 'fs';
import path from 'path';

const projectRoot = 'D:\\Network\\web\\app';
const srcDir = path.join(projectRoot, 'src');

console.log('====================================================');
console.log('    FORENSIC AUDITOR DEEP CODEBASE INSPECTION       ');
console.log('====================================================\n');

// 1. Scan for suspicious / forbidden strings across all source files
const suspiciousKeywords = [
  'lorem ipsum',
  'todo',
  'fixme',
  'tbd',
  'placeholder',
  'fake',
  'dummy',
  'mock_result',
  'bypass',
  'hack',
  'return true // shortcut',
  'return 100 // shortcut'
];

function scanFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        scanFiles(fullPath, fileList);
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allSrcFiles = scanFiles(srcDir);
console.log([Phase 1.1] Total source files scanned in src/: );

let totalSuspiciousMatches = 0;
for (const file of allSrcFiles) {
  const relativePath = path.relative(projectRoot, file);
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const kw of suspiciousKeywords) {
      if (line.toLowerCase().includes(kw)) {
        console.log(  ⚠ [FLAGGED] : - matches keyword ": );
 totalSuspiciousMatches++;
 }
 }
 }
}
if (totalSuspiciousMatches === 0) {
 console.log(' ✔ ZERO suspicious/dummy placeholder patterns found across all source files!\n');
} else {
 console.log( ❌ FOUND suspicious matches!\n);
}

// 2. Validate courseData.js content authenticity and quality
console.log('[Phase 1.2] Validating courseData.js content authenticity and quality...');
import { COURSE_MODULES } from '../src/data/courseData.js';

console.log( - Total modules count: (Expected: 12));
if (COURSE_MODULES.length !== 12) {
 console.error(' ❌ Violation: Module count is not 12!');
}

let totalSections = 0;
let totalTerms = 0;
let totalQuizzes = 0;
let answerDistribution = { 0: 0, 1: 0, 2: 0, 3: 0 };
let invalidQuizzes = 0;

COURSE_MODULES.forEach((mod, idx) => {
 if (mod.id !== idx + 1) {
 console.error( ❌ Module ID mismatch at index : found , expected );
 }
 if (!mod.title || mod.title.length < 5) {
 console.error( ❌ Module has invalid title: );
 }
 if (!mod.description || mod.description.length < 20) {
 console.error( ❌ Module has insufficient description: );
 }
 
 // Sections check
 if (!Array.isArray(mod.sections) || mod.sections.length < 3) {
 console.error( ❌ Module has fewer than 3 sections ());
 } else {
 totalSections += mod.sections.length;
 mod.sections.forEach((sec, sIdx) => {
 if (!sec.title || !sec.content || sec.content.length < 30) {
 console.error( ❌ Module Section content too short: );
 }
 });
 }

 // Terms check
 if (!Array.isArray(mod.terms) || mod.terms.length < 5) {
 console.error( ❌ Module has fewer than 5 terms ());
 } else {
 totalTerms += mod.terms.length;
 mod.terms.forEach((t, tIdx) => {
 if (!t.term || !t.meaning || t.meaning.length < 15) {
 console.error( ❌ Module Term meaning too short: );
 }
 });
 }

 // Quizzes check
 if (!Array.isArray(mod.quiz) || mod.quiz.length < 3) {
 console.error( ❌ Module has fewer than 3 quiz questions ());
 } else {
 totalQuizzes += mod.quiz.length;
 mod.quiz.forEach((q, qIdx) => {
 if (!q.question || q.question.length < 10) {
 console.error( ❌ Module Question too short: );
 invalidQuizzes++;
 }
 if (!Array.isArray(q.options) || q.options.length !== 4) {
 console.error( ❌ Module Question options count != 4: found );
 invalidQuizzes++;
 }
 if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
 console.error( ❌ Module Question invalid correctAnswer index: );
 invalidQuizzes++;
 } else {
 answerDistribution[q.correctAnswer]++;
 }
 if (!q.explanation || q.explanation.length < 15) {
 console.error( ❌ Module Question explanation too short: );
 invalidQuizzes++;
 }
 });
 }
});

console.log( ✔ Total Modules Verified: /12);
console.log( ✔ Total Theory Sections: (avg /module));
console.log( ✔ Total Key Technical Terms: (avg /module));
console.log( ✔ Total Interactive Quiz Questions: (avg /module));
console.log( ✔ Quiz Answer Key Distribution: Option A: , Option B: , Option C: , Option D: );
console.log( ✔ Invalid/Defective Quizzes: );

console.log('\n[Phase 1.3] Inspecting UI and Lab Components...');
const labFiles = [
 'Lab01_TopologyExplorer.jsx',
 'Lab02_EncapsulationStudio.jsx',
 'Lab03_VrpCliTerminal.jsx',
 'Lab04_SwitchMacLearningLab.jsx',
 'Lab05_VlanTaggingLab.jsx',
 'Lab06_StpElectionLab.jsx',
 'Lab07_EthTrunkClusterLab.jsx',
 'Lab08_SubnettingCalculator.jsx',
 'Lab09_IpRoutingForwarder.jsx',
 'Lab10_OspfStateMachineLab.jsx',
 'Lab11_Ipv6NdSlaacLab.jsx',
 'Lab12_InterVlanRouterLab.jsx',
 'LabContainer.jsx'
];

for (const lab of labFiles) {
 const labPath = path.join(srcDir, 'components', 'labs', lab);
 if (!fs.existsSync(labPath)) {
 console.error( ❌ Missing lab component: );
 } else {
 const code = fs.readFileSync(labPath, 'utf-8');
 const lineCount = code.split('\n').length;
 const hasControls = code.includes('Play') || code.includes('Step') || code.includes('Reset') || code.includes('Calculate') || code.includes('Send') || code.includes('Execute') || code.includes('Run') || code.includes('onClick');
 console.log( ✔ : lines, interactive controls: );
 }
}

console.log('\n====================================================');
console.log(' FORENSIC SCAN COMPLETE ');
console.log('====================================================');
