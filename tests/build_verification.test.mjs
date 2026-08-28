import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../');

export async function runBuildVerificationTests() {
  const results = {
    suite: 'E2E Build & Production Bundle Verification (Tier 4)',
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

  // 1. package.json build script check
  const pkgPath = path.join(ROOT_DIR, 'package.json');
  assert('T4.Build.1 - package.json exists and is readable', fs.existsSync(pkgPath));

  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    assert('T4.Build.2 - package.json defines "build": "vite build" script', pkg.scripts && pkg.scripts.build === 'vite build');
    assert('T4.Build.3 - React 18 is declared in dependencies', pkg.dependencies && Boolean(pkg.dependencies.react));
    assert('T4.Build.4 - Vite is declared in devDependencies', pkg.devDependencies && Boolean(pkg.devDependencies.vite));
  }

  // 2. Production dist/ directory check
  const distDir = path.join(ROOT_DIR, 'dist');
  assert('T4.Build.5 - dist/ output directory exists', fs.existsSync(distDir));

  if (fs.existsSync(distDir)) {
    // Check index.html
    const indexHtmlPath = path.join(distDir, 'index.html');
    assert('T4.Build.6 - dist/index.html entry file exists', fs.existsSync(indexHtmlPath));

    if (fs.existsSync(indexHtmlPath)) {
      const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
      assert('T4.Build.7 - dist/index.html contains root mount node (#root)', htmlContent.includes('id="root"'));
      assert('T4.Build.8 - dist/index.html includes bundled javascript module script', htmlContent.includes('<script type="module"') || htmlContent.includes('.js'));
      assert('T4.Build.9 - dist/index.html includes bundled stylesheet link', htmlContent.includes('rel="stylesheet"') || htmlContent.includes('.css'));
      assert('T4.Build.10 - dist/index.html does not contain raw unresolved template placeholders (%...%)', !htmlContent.includes('%VITE_'));
    }

    // Check assets directory
    const assetsDir = path.join(distDir, 'assets');
    assert('T4.Build.11 - dist/assets directory exists', fs.existsSync(assetsDir));

    if (fs.existsSync(assetsDir)) {
      const assetFiles = fs.readdirSync(assetsDir);
      const jsFiles = assetFiles.filter(f => f.endsWith('.js'));
      const cssFiles = assetFiles.filter(f => f.endsWith('.css'));

      assert('T4.Build.12 - At least one production JS bundle was compiled', jsFiles.length >= 1);
      assert('T4.Build.13 - At least one production CSS bundle was compiled', cssFiles.length >= 1);

      // Verify asset file sizes are within reasonable bounds
      jsFiles.forEach(jsFile => {
        const jsStats = fs.statSync(path.join(assetsDir, jsFile));
        assert(`T4.Build.14 - JS bundle (${jsFile}: ${(jsStats.size / 1024).toFixed(1)} KB) has healthy size`, jsStats.size > 20000 && jsStats.size < 5000000);
      });

      cssFiles.forEach(cssFile => {
        const cssStats = fs.statSync(path.join(assetsDir, cssFile));
        assert(`T4.Build.15 - CSS bundle (${cssFile}: ${(cssStats.size / 1024).toFixed(1)} KB) has healthy size`, cssStats.size > 5000 && cssStats.size < 1000000);
      });
    }
  }

  return results;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runBuildVerificationTests().then((res) => {
    console.log(`\n--- ${res.suite} ---`);
    res.tests.forEach((t) => console.log(`[${t.status}] ${t.name}`));
    console.log(`\nSummary: Passed ${res.passed}, Failed ${res.failed}\n`);
    process.exit(res.failed > 0 ? 1 : 0);
  });
}
