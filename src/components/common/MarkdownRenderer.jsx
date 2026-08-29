import React from 'react';
import katex from 'katex';
import SmartDiagramBlock from './SmartDiagramBlock';
import MathFormulaCard from './MathFormulaCard';

function renderMathInline(latex) {
  try {
    return (
      <span 
        className="inline-katex mx-1 font-mono text-[13px] text-[#16120D] dark:text-zinc-100 font-semibold"
        dangerouslySetInnerHTML={{
          __html: katex.renderToString(latex, { displayMode: false, throwOnError: false })
        }}
      />
    );
  } catch (e) {
    return <code className="px-1 py-0.5 rounded bg-[#EAE3D5] text-xs font-mono">{latex}</code>;
  }
}

function renderInline(text) {
  if (!text) return null;

  // 1. Split by inline math $...$
  const mathParts = text.split(/(\$(?:[^$]|\\\$)+\$)/g);

  return mathParts.map((mPart, mIdx) => {
    if (mPart.startsWith('$') && mPart.endsWith('$') && mPart.length > 2) {
      const latex = mPart.slice(1, -1);
      return <React.Fragment key={`math-${mIdx}`}>{renderMathInline(latex)}</React.Fragment>;
    }

    // 2. Split by inline code `...`
    const codeParts = mPart.split(/(`[^`]+`)/g);
    
    return codeParts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        const codeContent = part.slice(1, -1);
        return (
          <code key={i} className="px-1.5 py-0.5 mx-0.5 rounded-md bg-[#EAE3D5] dark:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[#231D16] dark:text-zinc-200 font-mono text-xs font-semibold shadow-2xs">
            {codeContent}
          </code>
        );
      }

      // 3. Split by bold **...**
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((bPart, j) => {
        if (bPart.startsWith('**') && bPart.endsWith('**')) {
          return (
            <strong key={`${i}-${j}`} className="font-bold text-[#16120D] dark:text-zinc-100 font-sans">
              {bPart.slice(2, -2)}
            </strong>
          );
        }
        
        // 4. Split by italic *...*
        const italicParts = bPart.split(/(\*[^*]+\*)/g);
        return italicParts.map((itPart, k) => {
          if (itPart.startsWith('*') && itPart.endsWith('*')) {
            return (
              <em key={`${i}-${j}-${k}`} className="italic text-[#4F4335] dark:text-zinc-300">
                {itPart.slice(1, -1)}
              </em>
            );
          }
          return itPart;
        });
      });
    });
  });
}

function parseFormulaCard(latexBlock) {
  // If block starts with [Title] or has variables format
  let title = '';
  let latex = latexBlock;
  let desc = '';
  let variables = [];

  const lines = latexBlock.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length > 0 && lines[0].startsWith('%title:')) {
    title = lines[0].replace('%title:', '').trim();
    lines.shift();
  }
  if (lines.length > 0 && lines[lines.length - 1].startsWith('%vars:')) {
    const varStr = lines[lines.length - 1].replace('%vars:', '').trim();
    variables = varStr.split(';').map(v => {
      const [s, m] = v.split('=').map(x => x.trim());
      return { symbol: s, meaning: m };
    });
    lines.pop();
  }
  latex = lines.join(' ');
  return { title, latex, desc, variables };
}

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Math Display Block ($$ ... $$) -> MathFormulaCard
    if (trimmed.startsWith('$$')) {
      const mathLines = [];
      if (trimmed.endsWith('$$') && trimmed.length > 4) {
        mathLines.push(trimmed.slice(2, -2).trim());
        i++;
      } else {
        i++;
        while (i < lines.length && !lines[i].trim().endsWith('$$')) {
          mathLines.push(lines[i]);
          i++;
        }
        if (i < lines.length && lines[i].trim().endsWith('$$')) {
          mathLines.push(lines[i].trim().replace(/\$\$$/, ''));
          i++;
        }
      }
      const rawBlock = mathLines.join('\n').trim();
      const parsed = parseFormulaCard(rawBlock);

      elements.push(
        <MathFormulaCard 
          key={`math-block-${elements.length}`} 
          formula={parsed.latex} 
          title={parsed.title}
          description={parsed.desc}
          variables={parsed.variables}
        />
      );
      continue;
    }

    // 2. Fenced Code Block / ASCII Diagram -> SmartDiagramBlock
    if (trimmed.startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      const rawCode = codeLines.join('\n');
      elements.push(
        <SmartDiagramBlock key={`diag-${elements.length}`} rawContent={rawCode} />
      );
      i++;
      continue;
    }

    // 3. Horizontal Rule (---)
    if (trimmed === '---' || trimmed === '***') {
      elements.push(
        <hr key={`hr-${elements.length}`} className="my-8 border-t border-[#DDD3C1]/80 dark:border-zinc-800/80" />
      );
      i++;
      continue;
    }

    // 4. Blockquotes / Formula Callouts (> ...)
    if (trimmed.startsWith('>')) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
        i++;
      }
      const quoteText = quoteLines.join(' ');
      const isFormula = quoteText.includes('📐') || quoteText.includes('สูตร');

      elements.push(
        <div 
          key={`quote-${elements.length}`} 
          className={`my-4 p-4 rounded-xl border ${
            isFormula 
              ? 'bg-[#EAE3D5]/80 dark:bg-zinc-900 border-[#DDD3C1] dark:border-zinc-700 shadow-sm' 
              : 'bg-[#F4EFE6] dark:bg-zinc-900/60 border-l-4 border-l-[#8E7E6A] border-[#DDD3C1]/60 dark:border-zinc-800'
          }`}
        >
          <div className="text-xs sm:text-sm text-[#231D16] dark:text-zinc-200 leading-relaxed font-sans">
            {renderInline(quoteText)}
          </div>
        </div>
      );
      continue;
    }

    // 5. Headings
    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${elements.length}`} className="text-xl sm:text-2xl font-bold text-[#16120D] dark:text-zinc-100 mt-8 mb-3 font-sans border-b border-[#DDD3C1]/50 dark:border-zinc-800/50 pb-2">
          {renderInline(trimmed.slice(3))}
        </h2>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${elements.length}`} className="text-base sm:text-lg font-bold text-[#231D16] dark:text-zinc-200 mt-6 mb-2 font-sans">
          {renderInline(trimmed.slice(4))}
        </h3>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      elements.push(
        <h4 key={`h4-${elements.length}`} className="text-sm sm:text-base font-semibold text-[#382F24] dark:text-zinc-300 mt-4 mb-2 font-sans">
          {renderInline(trimmed.slice(5))}
        </h4>
      );
      i++;
      continue;
    }

    // 6. Modern Vintage Markdown Table (| col | col |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerCells = tableLines[0].split('|').slice(1, -1).map(c => c.trim());
        const alignRow = tableLines[1].split('|').slice(1, -1).map(c => c.trim());
        const rowLines = tableLines.slice(2);

        elements.push(
          <div key={`table-${elements.length}`} className="my-6 overflow-x-auto rounded-2xl border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950/70 shadow-sm">
            <table className="w-full text-xs sm:text-sm border-collapse text-left font-sans">
              <thead>
                <tr className="bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 text-[#16120D] dark:text-zinc-100 font-bold">
                  {headerCells.map((h, hIdx) => {
                    const align = alignRow[hIdx]?.startsWith(':') && alignRow[hIdx]?.endsWith(':') ? 'text-center' : alignRow[hIdx]?.endsWith(':') ? 'text-right' : 'text-left';
                    return (
                      <th key={hIdx} className={`p-3.5 border-r border-[#DDD3C1]/60 dark:border-zinc-800 last:border-r-0 tracking-tight font-semibold ${align}`}>
                        {renderInline(h)}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD3C1]/50 dark:divide-zinc-800/50">
                {rowLines.map((r, rIdx) => {
                  const cells = r.split('|').slice(1, -1).map(c => c.trim());
                  return (
                    <tr key={rIdx} className="hover:bg-[#EAE3D5]/40 dark:hover:bg-zinc-900/40 transition-colors">
                      {cells.map((cell, cIdx) => {
                        const align = alignRow[cIdx]?.startsWith(':') && alignRow[cIdx]?.endsWith(':') ? 'text-center' : alignRow[cIdx]?.endsWith(':') ? 'text-right' : 'text-left';
                        return (
                          <td key={cIdx} className={`p-3.5 border-r border-[#DDD3C1]/40 dark:border-zinc-800 last:border-r-0 text-[#382F24] dark:text-zinc-300 ${align}`}>
                            {renderInline(cell)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 7. Unordered List (•, -, *)
    if (/^[•\-\*]\s+/.test(trimmed)) {
      const listItems = [];
      while (i < lines.length && /^[•\-\*]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[•\-\*]\s+/, ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-3 space-y-2 text-sm sm:text-base text-[#382F24] dark:text-zinc-300 font-sans">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E7E6A] dark:bg-zinc-500 mt-2.5 flex-shrink-0" />
              <span className="flex-1">{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 8. Ordered List (1. 2. 3.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${elements.length}`} className="my-3 space-y-2 pl-5 list-decimal list-outside text-sm sm:text-base text-[#382F24] dark:text-zinc-300 font-sans">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 9. Regular paragraph
    if (trimmed) {
      elements.push(
        <p key={`p-${elements.length}`} className="text-sm sm:text-base text-[#382F24] dark:text-zinc-300 leading-relaxed my-2.5 font-sans">
          {renderInline(trimmed)}
        </p>
      );
    }

    i++;
  }

  return <div className="space-y-1">{elements}</div>;
}
