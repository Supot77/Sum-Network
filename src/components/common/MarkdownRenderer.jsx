import React from 'react';

function renderInline(text) {
  if (!text) return null;

  // Split by inline code: `code`
  const codeParts = text.split(/(`[^`]+`)/g);
  
  return codeParts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="px-1.5 py-0.5 mx-0.5 rounded bg-[#EAE3D5] dark:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[#231D16] dark:text-zinc-200 font-mono text-xs font-semibold">
          {part.slice(1, -1)}
        </code>
      );
    }

    // Split by bold: **bold**
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bPart, j) => {
      if (bPart.startsWith('**') && bPart.endsWith('**')) {
        return (
          <strong key={`${i}-${j}`} className="font-bold text-[#16120D] dark:text-zinc-100 font-sans">
            {bPart.slice(2, -2)}
          </strong>
        );
      }
      
      // Split by italic: *italic*
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
}

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Fenced Code Block / ASCII Box
    if (trimmed.startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={`code-${elements.length}`} className="my-5 rounded-xl overflow-hidden border border-[#DDD3C1] dark:border-zinc-800 bg-[#EAE3D5]/80 dark:bg-zinc-950 shadow-sm">
          <pre className="p-4 font-mono text-xs sm:text-sm text-[#231D16] dark:text-zinc-200 overflow-x-auto leading-relaxed whitespace-pre select-all">
            <code>{codeLines.join('\n')}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // 2. Horizontal Rule (--- or ***)
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      elements.push(
        <hr key={`hr-${elements.length}`} className="my-8 border-t border-[#DDD3C1]/80 dark:border-zinc-800" />
      );
      i++;
      continue;
    }

    // 3. Headings (# H1, ## H2, ### H3, #### H4)
    if (trimmed.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${elements.length}`} className="text-2xl sm:text-3xl font-extrabold text-[#16120D] dark:text-zinc-100 mt-8 mb-4 font-sans tracking-tight">
          {renderInline(trimmed.slice(2))}
        </h1>
      );
      i++;
      continue;
    }
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

    // 4. Markdown Table (| col | col |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerCells = tableLines[0].split('|').slice(1, -1).map(c => c.trim());
        const rowLines = tableLines.slice(2);

        elements.push(
          <div key={`table-${elements.length}`} className="my-5 overflow-x-auto rounded-xl border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-950/60 shadow-sm">
            <table className="w-full text-xs sm:text-sm border-collapse text-left font-sans">
              <thead>
                <tr className="bg-[#EAE3D5] dark:bg-zinc-900 border-b border-[#DDD3C1] dark:border-zinc-800 text-[#16120D] dark:text-zinc-100 font-bold">
                  {headerCells.map((h, hIdx) => (
                    <th key={hIdx} className="p-3 border-r border-[#DDD3C1]/60 dark:border-zinc-800 last:border-r-0">
                      {renderInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD3C1]/50 dark:divide-zinc-800/50">
                {rowLines.map((r, rIdx) => {
                  const cells = r.split('|').slice(1, -1).map(c => c.trim());
                  return (
                    <tr key={rIdx} className="hover:bg-[#EAE3D5]/40 dark:hover:bg-zinc-900/40 transition-colors">
                      {cells.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 border-r border-[#DDD3C1]/40 dark:border-zinc-800 last:border-r-0 text-[#382F24] dark:text-zinc-300">
                          {renderInline(cell)}
                        </td>
                      ))}
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

    // 5. Unordered List (•, -, *)
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

    // 6. Ordered List (1. 2. 3.)
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

    // 7. Regular paragraph
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
