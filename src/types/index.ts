export type Difficulty = 'Básico' | 'Intermedio' | 'Avanzado';
export type Category = 'Química General' | 'Orgánica' | 'Fisicoquímica' | 'Analítica' | 'Inorgánica';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ContentBlock {
  type: 'text' | 'block-formula' | 'inline-formula' | 'callout' | 'example' | 'heading';
  content?: string;
  formula?: string;
  variant?: 'info' | 'tip' | 'warning' | 'definition';
  title?: string;
  steps?: { label: string; content?: string; formula?: string }[];
  level?: 2 | 3;
}

export interface Section {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  difficulty: Difficulty;
  progress: 0 | 50 | 100;
  readTime: number;
  sections: Section[];
  quiz: QuizQuestion[];
}
