import React from 'react';
import katex from 'katex';
import SmartDiagramBlock from './SmartDiagramBlock';
import MathFormulaCard from './MathFormulaCard';
import { Info, Sparkles } from 'lucide-react';

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

export function renderInlineText(text) {
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

export default function StructuredContentRenderer({ blocks }) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return null;

  return (
    <div className="space-y-6 font-sans">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'heading': {
            if (block.level === 2) {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#16120D] dark:text-zinc-100 pt-6 pb-2 border-b border-[#DDD3C1]/60 dark:border-zinc-800 tracking-tight flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8E7E6A] dark:bg-zinc-400 flex-shrink-0" />
                  <span>{renderInlineText(block.text)}</span>
                </h2>
              );
            }
            if (block.level === 3) {
              return (
                <h3 key={idx} className="text-base sm:text-lg lg:text-xl font-bold text-[#231D16] dark:text-zinc-200 pt-4 pb-1 tracking-tight">
                  {renderInlineText(block.text)}
                </h3>
              );
            }
            return (
              <h4 key={idx} className="text-sm sm:text-base font-semibold text-[#382F24] dark:text-zinc-300 pt-2 pb-1">
                {renderInlineText(block.text)}
              </h4>
            );
          }

          case 'paragraph': {
            return (
              <p key={idx} className="text-sm sm:text-base text-[#382F24] dark:text-zinc-300 leading-relaxed">
                {renderInlineText(block.text)}
              </p>
            );
          }

          case 'callout': {
            return (
              <div key={idx} className="my-4 p-4 sm:p-5 rounded-2xl bg-[#EAE3D5]/80 dark:bg-zinc-900/80 border border-[#DDD3C1] dark:border-zinc-700/80 shadow-sm flex items-start gap-3.5">
                <div className="p-1.5 rounded-xl bg-[#FAF7F2] dark:bg-zinc-800 text-amber-900 dark:text-amber-400 border border-[#DDD3C1]/80 dark:border-zinc-700 flex-shrink-0 mt-0.5">
                  <Info className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-[#231D16] dark:text-zinc-200 leading-relaxed font-sans flex-1">
                  {renderInlineText(block.text)}
                </div>
              </div>
            );
          }

          case 'formula': {
            return (
              <MathFormulaCard
                key={idx}
                title={block.title}
                formula={block.formula}
                description={block.description}
                variables={block.variables}
              />
            );
          }

          case 'table': {
            return (
              <div key={idx} className="my-6 overflow-x-auto rounded-2xl border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950/70 shadow-sm">
                <table className="w-full text-xs sm:text-sm border-collapse text-left font-sans">
                  <thead>
                    <tr className="bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 text-[#16120D] dark:text-zinc-100 font-bold">
                      {block.headers.map((h, hIdx) => {
                        const alignClass = block.aligns && block.aligns[hIdx] === 'center' ? 'text-center' : block.aligns && block.aligns[hIdx] === 'right' ? 'text-right' : 'text-left';
                        return (
                          <th key={hIdx} className={`p-3.5 border-r border-[#DDD3C1]/60 dark:border-zinc-800 last:border-r-0 tracking-tight font-semibold ${alignClass}`}>
                            {renderInlineText(h)}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD3C1]/50 dark:divide-zinc-800/50">
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#EAE3D5]/40 dark:hover:bg-zinc-900/40 transition-colors">
                        {row.map((cell, cIdx) => {
                          const alignClass = block.aligns && block.aligns[cIdx] === 'center' ? 'text-center' : block.aligns && block.aligns[cIdx] === 'right' ? 'text-right' : 'text-left';
                          return (
                            <td key={cIdx} className={`p-3.5 border-r border-[#DDD3C1]/40 dark:border-zinc-800 last:border-r-0 text-[#382F24] dark:text-zinc-300 ${alignClass}`}>
                              {renderInlineText(cell)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          case 'diagram': {
            return (
              <SmartDiagramBlock key={idx} rawContent={block.content} />
            );
          }

          case 'list': {
            if (block.ordered) {
              return (
                <ol key={idx} className="my-4 space-y-2.5 pl-5 list-decimal list-outside text-sm sm:text-base text-[#382F24] dark:text-zinc-300">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="leading-relaxed pl-1">
                      {renderInlineText(item)}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={idx} className="my-4 space-y-2.5 text-sm sm:text-base text-[#382F24] dark:text-zinc-300">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E7E6A] dark:bg-zinc-400 mt-2 flex-shrink-0" />
                    <span className="flex-1">{renderInlineText(item)}</span>
                  </li>
                ))}
              </ul>
            );
          }

          case 'divider': {
            return (
              <hr key={idx} className="my-8 border-t border-[#DDD3C1]/80 dark:border-zinc-800/80" />
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
