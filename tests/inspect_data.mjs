import { COURSE_MODULES } from '../src/data/courseData.js';

console.log(`Loaded ${COURSE_MODULES.length} modules:`);
COURSE_MODULES.forEach((mod) => {
  console.log(`- Module ${mod.id} [${mod.slug}]:`);
  console.log(`    Title: ${mod.title}`);
  console.log(`    Sections: ${mod.sections?.length || 0}`);
  console.log(`    Terms: ${mod.terms?.length || 0}`);
  console.log(`    Quiz: ${mod.quiz?.length || 0}`);
  console.log(`    Lab: ${mod.labName}`);
});
