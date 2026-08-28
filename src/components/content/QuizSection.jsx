import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuizSection({ quizList, moduleId, onComplete, isCompleted }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  if (!quizList || quizList.length === 0) return null;

  const handleSelect = (qIdx, optIdx) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const getCorrectAnswer = (q) => {
    return q.correctAnswer !== undefined ? q.correctAnswer : q.answer;
  };

  const handleCheck = () => {
    setShowResults(true);
    let correctCount = 0;
    quizList.forEach((q, idx) => {
      if (selectedAnswers[idx] === getCorrectAnswer(q)) correctCount++;
    });

    if (correctCount === quizList.length) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#8E7E6A', '#DDD3C1', '#10b981', '#231D16']
        });
      } catch (e) {}
      if (onComplete) onComplete();
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="rounded-2xl border border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-900/40 p-6 sm:p-7 space-y-6 shadow-sm font-sans">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DDD3C1]/60 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#EAE3D5] dark:bg-zinc-800 text-[#382F24] dark:text-zinc-300 border border-[#DDD3C1] dark:border-zinc-700">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#16120D] dark:text-zinc-100">
              แบบทดสอบประเมินความเข้าใจ (Interactive Quiz)
            </h3>
            <p className="text-xs text-[#6B5C4B] dark:text-zinc-400 mt-0.5">
              ทดสอบความรู้และวิเคราะห์ผลลัพธ์พร้อมคำอธิบายเฉลยละเอียด
            </p>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EAE3D5] dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-[#DDD3C1] dark:border-emerald-800/60 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>ผ่านการประเมินแล้ว</span>
          </span>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {quizList.map((q, qIdx) => {
          const selected = selectedAnswers[qIdx];
          const correct = getCorrectAnswer(q);
          const isCorrect = selected === correct;

          return (
            <div key={q.id || qIdx} className="space-y-3 p-4 sm:p-5 rounded-xl bg-[#F4EFE6] dark:bg-zinc-950/40 border border-[#DDD3C1] dark:border-zinc-800/80">
              <div className="text-sm font-semibold text-[#16120D] dark:text-zinc-100 flex items-start gap-2.5">
                <span className="text-[#8E7E6A] dark:text-zinc-500 font-mono text-xs mt-0.5">Q{qIdx + 1}:</span>
                <span className="leading-snug">{q.question}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  let tileStyle = 'border-[#DDD3C1] dark:border-zinc-800 bg-[#FAF7F2] dark:bg-zinc-900/60 text-[#382F24] dark:text-zinc-300 hover:border-[#BDB09B] dark:hover:border-zinc-700 hover:bg-[#FAF7F2]';

                  if (isThisSelected) {
                    tileStyle = 'border-[#8E7E6A] dark:border-zinc-600 bg-[#EAE3D5] dark:bg-zinc-800 text-[#16120D] dark:text-zinc-100 font-medium shadow-sm';
                  }

                  if (showResults) {
                    if (optIdx === correct) {
                      tileStyle = 'border-emerald-600/80 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300 font-medium';
                    } else if (isThisSelected && !isCorrect) {
                      tileStyle = 'border-rose-600/80 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-300';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      className={`text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between gap-2 ${tileStyle}`}
                    >
                      <span className="leading-relaxed">{opt}</span>
                      {showResults && optIdx === correct && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      )}
                      {showResults && isThisSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className={`text-xs p-3.5 rounded-lg mt-3 leading-relaxed border ${
                  isCorrect 
                    ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-300' 
                    : 'bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-900/40 text-rose-950 dark:text-rose-300'
                }`}>
                  <strong className="font-semibold">💡 เฉลย & คำอธิบาย:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <div className="text-xs text-[#6B5C4B] dark:text-zinc-400 font-mono">
          ตอบแล้ว {answeredCount} / {quizList.length} ข้อ
        </div>

        <div className="flex items-center gap-2">
          {showResults ? (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EAE3D5] dark:bg-zinc-800 hover:bg-[#DDD3C1] dark:hover:bg-zinc-700 text-xs font-semibold text-[#382F24] dark:text-zinc-200 transition-all shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>ทำแบบทดสอบใหม่</span>
            </button>
          ) : (
            <button
              onClick={handleCheck}
              disabled={answeredCount === 0}
              className="px-5 py-2.5 rounded-xl bg-[#231D16] text-[#FAF7F2] hover:bg-[#382F24] dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white disabled:opacity-30 disabled:pointer-events-none text-xs font-bold shadow-sm transition-all"
            >
              ตรวจคำตอบ (Check Answers)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
