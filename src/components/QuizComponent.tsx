import { useState } from 'react';
import { CheckCircle2, XCircle, Trophy, RotateCcw, ChevronRight } from 'lucide-react';
import type { QuizQuestion } from '../types';

interface Props {
  questions: QuizQuestion[];
}

type AnswerState = 'unanswered' | 'correct' | 'incorrect';

interface UserAnswer {
  selectedIndex: number;
  state: AnswerState;
}

export default function QuizComponent({ questions }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Map<string, UserAnswer>>(new Map());
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const answer = answers.get(question.id);
  const isAnswered = answer !== undefined;

  const score = Array.from(answers.values()).filter((a) => a.state === 'correct').length;

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    const state: AnswerState = index === question.correctIndex ? 'correct' : 'incorrect';
    setAnswers((prev) => new Map(prev).set(question.id, { selectedIndex: index, state }));
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setAnswers(new Map());
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const grade = pct >= 80 ? 'Excelente' : pct >= 60 ? 'Bien' : 'Seguí practicando';
    const gradeColor = pct >= 80 ? 'text-accent' : pct >= 60 ? 'text-amber-500' : 'text-red-500';

    return (
      <div className="bg-card border border-border rounded-2xl p-8 text-center">
        <Trophy size={48} className="mx-auto mb-4 text-accent" strokeWidth={1.5} />
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Resultado del Quiz</h3>
        <p className={`text-4xl font-bold mb-1 ${gradeColor}`}>{pct}%</p>
        <p className="text-muted-foreground mb-2">
          {score} de {questions.length} respuestas correctas
        </p>
        <p className={`text-lg font-semibold mb-8 ${gradeColor}`}>{grade}</p>

        {/* Answer review */}
        <div className="text-left space-y-3 mb-8">
          {questions.map((q, i) => {
            const a = answers.get(q.id);
            const correct = a?.state === 'correct';
            return (
              <div
                key={q.id}
                className={`flex gap-3 p-3 rounded-lg ${correct ? 'bg-accent/8' : 'bg-red-50 dark:bg-red-500/10'}`}
              >
                {correct ? (
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                ) : (
                  <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {i + 1}. {q.question}
                  </p>
                  {!correct && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Correcta: <strong className="text-foreground">{q.options[q.correctIndex]}</strong>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <RotateCcw size={15} />
          Intentar de nuevo
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-serif font-semibold text-foreground">Quiz</h3>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {questions.map((_, i) => {
              const a = answers.get(questions[i].id);
              return (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current
                      ? 'bg-primary'
                      : a?.state === 'correct'
                      ? 'bg-accent'
                      : a?.state === 'incorrect'
                      ? 'bg-red-400'
                      : 'bg-border'
                  }`}
                />
              );
            })}
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            {current + 1}/{questions.length}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <p className="text-base font-medium text-foreground mb-5 leading-relaxed">
          {question.question}
        </p>

        <div className="space-y-2.5">
          {question.options.map((opt, i) => {
            let cls =
              'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-150 ';
            if (!isAnswered) {
              cls += 'border-border hover:border-ring/50 hover:bg-muted text-foreground cursor-pointer';
            } else if (i === question.correctIndex) {
              cls += 'border-accent bg-accent/10 text-foreground font-medium cursor-default';
            } else if (i === answer?.selectedIndex) {
              cls += 'border-red-300 bg-red-50 dark:bg-red-500/10 dark:border-red-500/40 text-foreground cursor-default';
            } else {
              cls += 'border-border bg-muted/50 text-muted-foreground cursor-default';
            }

            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={isAnswered}>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-mono shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                  {isAnswered && i === question.correctIndex && (
                    <CheckCircle2 size={16} className="ml-auto text-accent shrink-0" />
                  )}
                  {isAnswered && i === answer?.selectedIndex && i !== question.correctIndex && (
                    <XCircle size={16} className="ml-auto text-red-500 shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div
            className={`mt-4 p-4 rounded-xl text-sm leading-relaxed ${
              answer.state === 'correct'
                ? 'bg-accent/8 text-foreground border border-accent/25'
                : 'bg-red-50 dark:bg-red-500/10 text-foreground border border-red-200 dark:border-red-500/30'
            }`}
          >
            <span className="font-semibold">
              {answer.state === 'correct' ? '✓ Correcto — ' : '✗ Incorrecto — '}
            </span>
            {question.explanation}
          </div>
        )}
      </div>

      {/* Footer */}
      {isAnswered && (
        <div className="px-6 pb-5 flex justify-end">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {current < questions.length - 1 ? 'Siguiente' : 'Ver resultado'}
            <ChevronRight size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
