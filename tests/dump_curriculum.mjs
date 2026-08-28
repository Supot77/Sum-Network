import { COURSE_MODULES } from '../src/data/courseData.js';

COURSE_MODULES.forEach((mod) => {
  console.log(`\n==================================================`);
  console.log(`Module ${mod.id}: ${mod.title}`);
  console.log(`Subtitle: ${mod.subtitle}`);
  console.log(`Category: ${mod.category} | ${mod.categoryTh}`);
  console.log(`Overview: ${mod.overview}`);
  console.log(`\n--- TERMS (${mod.terms.length}) ---`);
  mod.terms.forEach((t, idx) => {
    console.log(`  [${idx+1}] ${t.term}: ${t.desc || t.meaning}`);
  });
  console.log(`\n--- QUIZZES (${mod.quiz.length}) ---`);
  mod.quiz.forEach((q, qIdx) => {
    const ansIdx = q.answer !== undefined ? q.answer : q.correctAnswer;
    console.log(`  Q${qIdx+1}: ${q.question}`);
    q.options.forEach((opt, oIdx) => {
      const marker = oIdx === ansIdx ? ' [*CORRECT*]' : '            ';
      console.log(`    ${marker} [${oIdx}] ${opt}`);
    });
    console.log(`    Explanation: ${q.explanation}`);
  });
});
