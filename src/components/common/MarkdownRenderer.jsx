import React from 'react';

function renderInline(text) {
  if (!text) return null;

  const codeParts = text.split(/(`[^`]+`)/g);
  
  return codeParts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="px-1.5 py-0.5 mx-0.5 rounded bg-[#EAE3D5] dark:bg-zinc-800 border border-[#DDD3C1] dark:border-zinc-700 text-[#231D16] dark:text-zinc-200 font-mono text-xs font-semibold">
          {part.slice(1, -1)}
        </code>
      );
    }

    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bPart, j) => {
      if (bPart.startsWith('**') && bPart.endsWith('**')) {
        return (
          <strong key={`${i}-${j}`} className="font-bold text-[#16120D] dark:text-zinc-100 font-sans">
            {bPart.slice(2, -2)}
          </strong>
        );
      }
      return bPart;
    });
  });
}

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements = [];
  let currentList = [];
  let listType = null;

  const flushList = () => {
    if (currentList.length > 0) {
      if (listType === 'number') {
        elements.push(
          <ol key={`list-${elements.length}`} className="my-2.5 space-y-2 pl-4 list-decimal list-outside text-sm sm:text-base text-[#382F24] dark:text-zinc-300">
            {currentList.map((item, idx) => (
              <li key={idx} className="leading-relaxed pl-1">
                {renderInline(item)}
              </li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-2.5 space-y-2 text-sm sm:text-base text-[#382F24] dark:text-zinc-300">
            {currentList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E7E6A] dark:bg-zinc-500 mt-2 flex-shrink-0" />
                <span className="flex-1">{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      }
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch) {
      if (listType && listType !== 'number') flushList();
      listType = 'number';
      currentList.push(numMatch[2]);
      return;
    }

    const bulletMatch = trimmed.match(/^[•\-\*]\s+(.*)$/);
    if (bulletMatch) {
      if (listType && listType !== 'bullet') flushList();
      listType = 'bullet';
      currentList.push(bulletMatch[1]);
      return;
    }

    flushList();

    if (trimmed.startsWith('### ')) {
      elements.push(
        <h4 key={idx} className="text-sm sm:text-base font-bold text-[#16120D] dark:text-zinc-100 mt-4 mb-1.5 font-sans">
          {renderInline(trimmed.slice(4))}
        </h4>
      );
    } else if (trimmed.startsWith('## ')) {
      elements.push(
        <h3 key={idx} className="text-base sm:text-lg font-bold text-[#16120D] dark:text-zinc-100 mt-5 mb-2 font-sans">
          {renderInline(trimmed.slice(3))}
        </h3>
      );
    } else {
      elements.push(
        <p key={idx} className="text-sm sm:text-base text-[#382F24] dark:text-zinc-300 leading-relaxed my-1.5">
          {renderInline(trimmed)}
        </p>
      );
    }
  });

  flushList();

  return <div className="space-y-1">{elements}</div>;
}
