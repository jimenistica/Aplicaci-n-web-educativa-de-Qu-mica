import { Info, Lightbulb, AlertTriangle, BookMarked } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'info' | 'tip' | 'warning' | 'definition';

const config: Record<Variant, { icon: typeof Info; classes: string; iconClass: string }> = {
  info: {
    icon: Info,
    classes: 'bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/30',
    iconClass: 'text-blue-600 dark:text-blue-400',
  },
  tip: {
    icon: Lightbulb,
    classes: 'bg-accent/8 border-accent/30 dark:bg-accent/10 dark:border-accent/30',
    iconClass: 'text-accent',
  },
  warning: {
    icon: AlertTriangle,
    classes: 'bg-amber-50 border-amber-200 dark:bg-amber-400/10 dark:border-amber-400/30',
    iconClass: 'text-amber-600 dark:text-amber-400',
  },
  definition: {
    icon: BookMarked,
    classes: 'bg-primary/5 border-primary/25 dark:bg-primary/10 dark:border-primary/30',
    iconClass: 'text-primary',
  },
};

interface Props {
  variant?: Variant;
  title?: string;
  children?: ReactNode;
  content?: string;
}

export default function Callout({ variant = 'info', title, children, content }: Props) {
  const { icon: Icon, classes, iconClass } = config[variant];
  const body = content?.split('\n').map((line, i) => (
    <p key={i} className={i > 0 ? 'mt-1.5' : ''}>{line}</p>
  ));

  return (
    <div className={`my-5 flex gap-3.5 p-4 rounded-xl border ${classes}`}>
      <Icon size={17} className={`shrink-0 mt-0.5 ${iconClass}`} strokeWidth={2} />
      <div className="min-w-0">
        {title && <p className={`text-sm font-semibold mb-1 ${iconClass}`}>{title}</p>}
        <div className="text-sm text-foreground leading-relaxed">
          {children ?? body}
        </div>
      </div>
    </div>
  );
}
