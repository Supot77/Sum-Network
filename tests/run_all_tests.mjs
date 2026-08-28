#!/usr/bin/env node

/**
 * Universal Core Networking Web App - Master E2E & Unit Test Runner
 * Executes all 4-Tier verification test suites.
 */

import { runUiDesignTokensTests } from './unit/ui_design_tokens.test.mjs';
import { runCourseDataIntegrityTests } from './course_data_integrity.test.mjs';
import { runLabsIntegrityTests } from './labs_integrity.test.mjs';
import { runNavigationSearchThemeTests } from './navigation_search_theme.test.mjs';
import { runWorkflowSimulationTests } from './workflow_simulation.test.mjs';
import { runBuildVerificationTests } from './build_verification.test.mjs';
import { runAdversarialShellDesignTests } from './adversarial_shell_design.test.mjs';

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bgBlue: '\x1b[44m',
  white: '\x1b[37m'
};

async function runMasterTestSuite() {
  console.log(`\n${colors.bright}${colors.cyan}================================================================================${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}   UNIVERSAL CORE NETWORKING WEB APP - 4-TIER MASTER TEST VERIFICATION RUNNER   ${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}================================================================================${colors.reset}\n`);

  const suites = [
    { name: '1. UI Design Tokens & System Constraints (Tier 1 & 2)', runner: runUiDesignTokensTests },
    { name: '2. Course Data Curriculum & Quiz Integrity (Tier 1 & 2)', runner: runCourseDataIntegrityTests },
    { name: '3. 12 Interactive Simulation Labs & Shell (Tier 1 & 2)', runner: runLabsIntegrityTests },
    { name: '4. Navigation, Search & Theme Sync (Tier 3)', runner: runNavigationSearchThemeTests },
    { name: '5. Student Learning Workflow E2E Simulation (Tier 4)', runner: runWorkflowSimulationTests },
    { name: '6. Production Build & Distribution Bundle (Tier 4)', runner: runBuildVerificationTests },
    { name: '7. Adversarial Shell, Design & Stress Testing (Tier 4+)', runner: runAdversarialShellDesignTests }
  ];

  let grandTotalPassed = 0;
  let grandTotalFailed = 0;
  const suiteResults = [];

  for (const suite of suites) {
    console.log(`${colors.bright}${colors.yellow}▶ Running ${suite.name}...${colors.reset}`);
    const start = performance.now();
    let res;
    try {
      res = await suite.runner();
    } catch (err) {
      res = {
        suite: suite.name,
        passed: 0,
        failed: 1,
        tests: [{ name: 'Suite Execution Exception', status: 'FAIL', details: err.message }]
      };
    }
    const elapsed = (performance.now() - start).toFixed(1);

    grandTotalPassed += res.passed;
    grandTotalFailed += res.failed;
    suiteResults.push({ ...res, elapsed });

    // Print individual tests in this suite
    res.tests.forEach((t) => {
      if (t.status === 'PASS') {
        console.log(`  ${colors.green}✔${colors.reset} ${colors.gray}[PASS]${colors.reset} ${t.name}`);
      } else {
        console.log(`  ${colors.red}✖ [FAIL] ${t.name}${colors.reset} ${t.details ? `(${t.details})` : ''}`);
      }
    });

    console.log(`  ${colors.gray}Suite finished in ${elapsed} ms: ${res.passed} passed, ${res.failed} failed.${colors.reset}\n`);
  }

  // Summary Table
  console.log(`${colors.bright}${colors.cyan}================================================================================${colors.reset}`);
  console.log(`${colors.bright}${colors.white}                            MASTER TEST EXECUTION SUMMARY                       ${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}================================================================================${colors.reset}`);

  suiteResults.forEach((sr, idx) => {
    const statusColor = sr.failed === 0 ? colors.green : colors.red;
    const statusText = sr.failed === 0 ? 'ALL PASSED' : `${sr.failed} FAILED`;
    console.log(
      ` ${idx + 1}. ${sr.suite.padEnd(54, ' ')} : ${statusColor}${statusText.padEnd(12, ' ')}${colors.reset} (${sr.passed} passed, ${sr.elapsed} ms)`
    );
  });

  const totalTests = grandTotalPassed + grandTotalFailed;
  const passRate = totalTests > 0 ? ((grandTotalPassed / totalTests) * 100).toFixed(1) : '0';

  console.log(`${colors.bright}${colors.cyan}--------------------------------------------------------------------------------${colors.reset}`);
  console.log(
    ` ${colors.bright}Total Tests: ${totalTests}  |  Passed: ${colors.green}${grandTotalPassed}${colors.reset}${colors.bright}  |  Failed: ${grandTotalFailed > 0 ? colors.red : colors.green}${grandTotalFailed}${colors.reset}${colors.bright}  |  Pass Rate: ${colors.cyan}${passRate}%${colors.reset}`
  );
  console.log(`${colors.bright}${colors.cyan}================================================================================\n${colors.reset}`);

  if (grandTotalFailed > 0) {
    console.log(`${colors.red}${colors.bright}❌ TEST RUN FAILED with ${grandTotalFailed} defect(s).${colors.reset}\n`);
    process.exit(1);
  } else {
    console.log(`${colors.green}${colors.bright}✅ ALL TEST SUITES PASSED PERFECTLY (100% Test Readiness Established)!${colors.reset}\n`);
    process.exit(0);
  }
}

runMasterTestSuite();
