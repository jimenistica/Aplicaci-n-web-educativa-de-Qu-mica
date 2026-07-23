import { Link } from 'react-router-dom';
import { Clock, ChevronRight, CheckCircle2, Circle, BookOpen } from 'lucide-react';
import type { Topic } from '../types';

const difficultyColors: Record<string, string> = {
  'Básico': 'text-accent bg-accent/10',
  'Intermedio': 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-400/10',
  'Avanzado': 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-400/10',
};

const categoryColors: Record<string, string> = {
  'Química General': 'bg-primary/10 text-primary',
  'Orgánica': 'bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-400',
  'Fisicoquímica': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-400',
  'Analítica': 'bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-400',
  'Inorgánica': 'bg-rose-100 text-rose-700 dark:bg-rose-400/10 dark:text-rose-400',
};

function ProgressIndicator({ progress }: { progress: 0 | 50 | 100 }) {
  if (progress === 100)
    return <CheckCircle2 size={16} className="text-accent shrink-0" />;
  if (progress === 50)
    return (
      <div className="relative w-4 h-4 shrink-0">
        <Circle size={16} className="text-border absolute inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-1/2 h-full bg-accent/30 rounded-l-full" />
        </div>
      </div>
    );
  return <Circle size={16} className="text-border shrink-0" />;
}

interface Props {
  topic: Topic;
}

export default function TopicCard({ topic }: Props) {
  return (
    <Link
      to={`/temas/${topic.id}`}
      className="group block bg-card border border-border rounded-xl p-5 hover:border-ring/40 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-1.5">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${categoryColors[topic.category] ?? 'bg-muted text-muted-foreground'}`}>
            {topic.category}
          </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${difficultyColors[topic.difficulty]}`}>
            {topic.difficulty}
          </span>
        </div>
        <ProgressIndicator progress={topic.progress} />
      </div>

      <h3 className="font-serif font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors leading-snug mb-1">
        {topic.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
        {topic.subtitle}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {topic.readTime} min
          </span>
          <span className="flex items-center gap-1">
            <BookOpen size={12} />
            {topic.sections.length} secciones
          </span>
        </div>
        <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>

      {topic.progress > 0 && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>Progreso</span>
            <span>{topic.progress}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all"
              style={{ width: `${topic.progress}%` }}
            />
          </div>
        </div>
      )}
    </Link>
  );
}
