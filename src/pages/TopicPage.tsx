import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Clock, BarChart3, BookOpen, ChevronRight } from 'lucide-react';
import { topics } from '../data/topics';
import { BlockFormula } from '../components/ChemFormula';
import Callout from '../components/Callout';
import QuizComponent from '../components/QuizComponent';
import type { ContentBlock, Section } from '../types';

const difficultyBadge: Record<string, string> = {
  'Básico': 'text-accent bg-accent/10',
  'Intermedio': 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-400/10',
  'Avanzado': 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-400/10',
};

function RenderBlock({ block }: { block: ContentBlock }) {
  if (block.type === 'text') {
    return <p className="text-base text-foreground leading-relaxed my-4">{block.content}</p>;
  }

  if (block.type === 'block-formula' && block.formula) {
    return <BlockFormula formula={block.formula} />;
  }

  if (block.type === 'callout') {
    return (
      <Callout variant={block.variant ?? 'info'} title={block.title} content={block.content} />
    );
  }

  if (block.type === 'example') {
    return (
      <div className="my-6 border border-border rounded-xl overflow-hidden">
        <div className="px-5 py-3.5 bg-muted border-b border-border">
          <h4 className="text-sm font-semibold text-foreground">{block.title}</h4>
        </div>
        <div className="divide-y divide-border">
          {block.steps?.map((step, i) => (
            <div key={i} className="px-5 py-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                {step.label}
              </p>
              {step.content && (
                <p className="text-sm text-foreground leading-relaxed mb-2">{step.content}</p>
              )}
              {step.formula && <BlockFormula formula={step.formula} />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function TableOfContents({
  sections,
  activeId,
}: {
  sections: Section[];
  activeId: string;
}) {
  return (
    <nav className="space-y-0.5">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
            activeId === section.id
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          {section.title}
        </a>
      ))}
      <a
        href="#quiz"
        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
          activeId === 'quiz'
            ? 'bg-primary/10 text-primary font-medium'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
        }`}
      >
        Quiz
      </a>
    </nav>
  );
}

export default function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const topic = topics.find((t) => t.id === id);
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const ids = [...(topic?.sections.map((s) => s.id) ?? []), 'quiz'];
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [topic]);

  if (!topic) return <Navigate to="/temas" replace />;

  const categoryColor =
    topic.category === 'Química General'
      ? 'bg-primary/10 text-primary'
      : topic.category === 'Orgánica'
      ? 'bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-400'
      : 'bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-400';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/temas" className="hover:text-foreground transition-colors flex items-center gap-1">
          <ArrowLeft size={14} />
          Temas
        </Link>
        <ChevronRight size={12} />
        <span className="text-foreground">{topic.title}</span>
      </nav>

      <div className="flex gap-10">
        {/* Main content */}
        <article className="flex-1 min-w-0">
          {/* Topic header */}
          <div className="mb-10 pb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${categoryColor}`}>
                {topic.category}
              </span>
              <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${difficultyBadge[topic.difficulty]}`}>
                {topic.difficulty}
              </span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-foreground leading-tight mb-3">
              {topic.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">{topic.subtitle}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {topic.readTime} min de lectura
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} />
                {topic.sections.length} secciones
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart3 size={14} />
                {topic.quiz.length} preguntas de quiz
              </span>
            </div>

            {topic.progress > 0 && (
              <div className="mt-5 flex items-center gap-3">
                <div className="flex-1 max-w-xs h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-mono">{topic.progress}% completado</span>
              </div>
            )}
          </div>

          {/* Sections */}
          {topic.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                {section.title}
              </h2>
              {section.blocks.map((block, i) => (
                <RenderBlock key={i} block={block} />
              ))}
            </section>
          ))}

          {/* Quiz */}
          <section id="quiz" className="mb-12 scroll-mt-24">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
              Quiz de repaso
            </h2>
            <QuizComponent questions={topic.quiz} />
          </section>
        </article>

        {/* Sticky sidebar */}
        <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Contenido
              </h3>
              <TableOfContents sections={topic.sections} activeId={activeId} />
            </div>

            {/* Other topics */}
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Otros temas
              </h3>
              <div className="space-y-2">
                {topics
                  .filter((t) => t.id !== topic.id)
                  .slice(0, 3)
                  .map((t) => (
                    <Link
                      key={t.id}
                      to={`/temas/${t.id}`}
                      className="block p-2.5 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                        {t.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.category}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
