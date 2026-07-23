import { InlineMath, BlockMath } from 'react-katex';

interface InlineProps {
  formula: string;
}

interface BlockProps {
  formula: string;
  label?: string;
}

export function InlineFormula({ formula }: InlineProps) {
  return (
    <span className="font-mono text-primary dark:text-blue-300 px-0.5">
      <InlineMath math={formula} />
    </span>
  );
}

export function BlockFormula({ formula, label }: BlockProps) {
  return (
    <div className="my-5 px-5 py-4 bg-muted rounded-xl border border-border overflow-x-auto font-mono">
      <BlockMath math={formula} />
      {label && (
        <p className="text-xs text-muted-foreground text-right mt-2 font-sans">{label}</p>
      )}
    </div>
  );
}
