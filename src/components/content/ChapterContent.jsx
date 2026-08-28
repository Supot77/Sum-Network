import React from 'react';
import { BookOpen, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import QuizSection from './QuizSection';
import MarkdownRenderer from '../common/MarkdownRenderer';
import DiagramVisualizer from '../common/DiagramVisualizer';

export default function ChapterContent({ module, onNext, onPrev, hasNext, hasPrev, onCompleteModule, isCompleted }) {
  if (!module) return null;

  return (
    <article className="space-y-10 animate-fadeIn font-sans max-w-none">
      {/* Chapter Editorial Header */}
      <div className="space-y-4 border-b border-[#DDD3C1]/80 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D5] dark:bg-zinc-800 text-[#4F4335] dark:text-zinc-300 text-xs font-mono border border-[#DDD3C1] dark:border-zinc-700">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{module.categoryTh || module.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16120D] dark:text-zinc-100 tracking-tight leading-tight">
          {module.title}
        </h1>
        
        {module.subtitle && (
          <p className="text-sm sm:text-base font-mono text-[#6B5C4B] dark:text-zinc-400">
            {module.subtitle}
          </p>
        )}
      </div>

      {/* Embedded Visualizer Diagram Header for this module */}
      <DiagramVisualizer moduleId={module.id} sectionIndex={0} />

      {/* Main Full-Length Unsummarized Markdown Content */}
      <div className="pt-2 text-base leading-relaxed">
        {module.fullMarkdown ? (
          <MarkdownRenderer content={module.fullMarkdown} />
        ) : (
          module.sections && module.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 border-b border-[#DDD3C1]/60 dark:border-zinc-800/60 pb-8 my-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#16120D] dark:text-zinc-100 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8E7E6A] dark:bg-zinc-400" />
                {sec.title}
              </h2>
              <MarkdownRenderer content={sec.content} />
            </div>
          ))
        )}
      </div>

      {/* Interactive Quiz Section */}
      {module.quiz && module.quiz.length > 0 && (
        <QuizSection 
          quizList={module.quiz} 
          moduleId={module.id}
          onComplete={() => onCompleteModule(module.id)} 
          isCompleted={isCompleted}
        />
      )}

      {/* Chapter Navigation Footer */}
      <div className="flex items-center justify-between pt-8 border-t border-[#DDD3C1] dark:border-zinc-800">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EAE3D5] hover:bg-[#DDD3C1] dark:bg-zinc-900 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:pointer-events-none border border-[#DDD3C1] dark:border-zinc-800 text-sm font-medium text-[#4F4335] dark:text-zinc-300 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>บทก่อนหน้า</span>
        </button>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#231D16] hover:bg-[#382F24] dark:bg-zinc-100 dark:hover:bg-white text-[#FAF7F2] dark:text-zinc-900 text-sm font-bold shadow-md disabled:opacity-30 disabled:pointer-events-none transition-all"
        >
          <span>ไปบทถัดไป</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
