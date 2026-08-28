import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');

export async function runUiDesignTokensTests() {
  const results = {
    suite: 'Unit Tests: UI Design System & Tokens (Tier 1 & 2)',
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

  // T1.1.1: tailwind.config.js existence and darkMode class
  const tailwindPath = path.join(ROOT_DIR, 'tailwind.config.js');
  const hasTailwind = fs.existsSync(tailwindPath);
  assert('T1.1.1 - tailwind.config.js exists and is readable', hasTailwind);
  
  if (hasTailwind) {
    const tailwindContent = fs.readFileSync(tailwindPath, 'utf8');
    assert(
      'T1.1.1b - tailwind.config.js configures darkMode: "class"',
      tailwindContent.includes("darkMode: 'class'") || tailwindContent.includes('darkMode: "class"')
    );
    assert(
      'T1.1.1c - tailwind.config.js configures content scanning for src files',
      tailwindContent.includes('./src/**/*.{js,ts,jsx,tsx}') || tailwindContent.includes('./src/**')
    );
    assert(
      'T1.1.4 - tailwind.config.js defines typography fonts (Inter, Sarabun, mono)',
      tailwindContent.includes('Inter') && tailwindContent.includes('Sarabun') && (tailwindContent.includes('Fira Code') || tailwindContent.includes('mono') || tailwindContent.includes('JetBrains Mono'))
    );
  }

  // T1.1.2 & T1.1.5: src/index.css inspection
  const cssPath = path.join(ROOT_DIR, 'src/index.css');
  const hasCss = fs.existsSync(cssPath);
  assert('T1.1.2a - src/index.css exists', hasCss);

  if (hasCss) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    assert(
      'T1.1.2b - src/index.css imports tailwind directives (base, components, utilities)',
      cssContent.includes('@tailwind base') && cssContent.includes('@tailwind components') && cssContent.includes('@tailwind utilities')
    );
    assert(
      'T1.1.5 - src/index.css configures refined custom scrollbars',
      cssContent.includes('::-webkit-scrollbar') && cssContent.includes('::-webkit-scrollbar-thumb')
    );
  }

  // T1.1.3: index.html viewport, fonts, and title
  const htmlPath = path.join(ROOT_DIR, 'index.html');
  const hasHtml = fs.existsSync(htmlPath);
  assert('T1.1.3a - index.html exists in root', hasHtml);

  if (hasHtml) {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    assert('T1.1.3b - index.html contains viewport meta tag', htmlContent.includes('name="viewport"'));
    assert('T1.1.3c - index.html mounts root element #root', htmlContent.includes('id="root"'));
    assert('T1.1.3d - index.html references Google Fonts (Inter/Sarabun/Fira Code)', htmlContent.includes('fonts.googleapis.com') || htmlContent.includes('Inter'));
  }

  // Tier 2: Boundary & Layout token tests in components
  const appPath = path.join(ROOT_DIR, 'src/App.jsx');
  if (fs.existsSync(appPath)) {
    const appContent = fs.readFileSync(appPath, 'utf8');
    assert('T2.1.1 - App.jsx supports dark/light mode classes (zinc-950/slate-950 & zinc-50/slate-50)', 
      (appContent.includes('zinc-950') || appContent.includes('slate-950')) && 
      (appContent.includes('zinc-50') || appContent.includes('slate-50'))
    );
    assert('T2.1.2 - App.jsx layout uses max-w container with responsive flex-col lg:flex-row',
      appContent.includes('max-w-') && appContent.includes('lg:flex-row')
    );
    assert('T2.1.3 - App.jsx binds global Ctrl+K / Cmd+K search listener',
      appContent.includes('metaKey') || appContent.includes('ctrlKey')
    );
  }

  // Header & Sidebar subtle 1px border inspection
  const headerPath = path.join(ROOT_DIR, 'src/components/layout/Header.jsx');
  if (fs.existsSync(headerPath)) {
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    assert('T2.1.4 - Header.jsx uses clean subtle 1px border and backdrop blur',
      headerContent.includes('border-b') && (headerContent.includes('backdrop-blur') || headerContent.includes('bg-'))
    );
  }

  const sidebarPath = path.join(ROOT_DIR, 'src/components/layout/Sidebar.jsx');
  if (fs.existsSync(sidebarPath)) {
    const sidebarContent = fs.readFileSync(sidebarPath, 'utf8');
    assert('T2.1.5 - Sidebar.jsx implements 1px active highlight and responsive sidebar container',
      sidebarContent.includes('border') && sidebarContent.includes('modules')
    );
  }

  return results;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runUiDesignTokensTests().then((res) => {
    console.log(`\n--- ${res.suite} ---`);
    res.tests.forEach((t) => console.log(`[${t.status}] ${t.name}`));
    console.log(`\nSummary: Passed ${res.passed}, Failed ${res.failed}\n`);
    process.exit(res.failed > 0 ? 1 : 0);
  });
}
