import { Link } from 'react-router-dom';
import {
  FlaskConical,
  Atom,
  Beaker,
  Microscope,
  BarChart3,
  Layers,
  BookOpen,
  PlayCircle,
  CheckSquare,
  ArrowRight,
  Zap,
} from 'lucide-react';

const categories = [
  {
    name: 'Química General',
    description: 'Átomos, enlace, estequiometría, termodinámica y equilibrio.',
    icon: Atom,
    color: 'bg-blue-50 text-primary dark:bg-primary/10',
    count: 12,
  },
  {
    name: 'Orgánica',
    description: 'Nomenclatura, reacciones de sustitución, adición y eliminación.',
    icon: FlaskConical,
    color: 'bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-400',
    count: 18,
  },
  {
    name: 'Fisicoquímica',
    description: 'Termodinámica química, cinética, fenómenos de transporte.',
    icon: BarChart3,
    color: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-400',
    count: 10,
  },
  {
    name: 'Analítica',
    description: 'Equilibrios en solución, titulaciones, métodos instrumentales.',
    icon: Beaker,
    color: 'bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-400',
    count: 9,
  },
  {
    name: 'Inorgánica',
    description: 'Química de coordinación, grupos principales y metales de transición.',
    icon: Microscope,
    color: 'bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-400',
    count: 8,
  },
];

const methodology = [
  {
    icon: BookOpen,
    title: 'Teoría con fórmulas',
    description:
      'Contenido estructurado con explicaciones claras y fórmulas renderizadas en LaTeX. Cada concepto va acompañado de contexto y aplicaciones reales.',
    accent: 'bg-primary/10 text-primary',
  },
  {
    icon: PlayCircle,
    title: 'Ejemplos resueltos',
    description:
      'Problemas paso a paso con justificación de cada operación. Los ejemplos están diseñados para transferirse directamente a parciales y finales.',
    accent: 'bg-accent/10 text-accent',
  },
  {
    icon: CheckSquare,
    title: 'Quizzes con retroalimentación',
    description:
      'Evaluá tu comprensión con preguntas de opción múltiple. Cada respuesta incluye una explicación detallada, correcta o incorrecta.',
    accent: 'bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-400',
  },
];

const stats = [
  { value: '57+', label: 'Temas disponibles' },
  { value: '5', label: 'Áreas de química' },
  { value: '200+', label: 'Ejercicios resueltos' },
  { value: '3', label: 'Niveles de dificultad' },
];

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,58,138,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-medium mb-6">
              <Zap size={12} />
              Plataforma de química universitaria
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Química universitaria,{' '}
              <span className="text-primary dark:text-blue-400">explicada con precisión</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Teoría estructurada, ejemplos resueltos paso a paso y quizzes interactivos para cada área de la química. Todo en un mismo lugar, con fórmulas renderizadas.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/temas"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-sm"
              >
                Explorar temas
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/temas/estequiometria"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium hover:bg-muted transition-colors"
              >
                <PlayCircle size={16} className="text-accent" />
                Ver ejemplo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-border">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Áreas de estudio</p>
          <h2 className="font-serif text-3xl font-bold text-foreground">Explorá por categoría</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                to={`/temas?categoria=${encodeURIComponent(cat.name)}`}
                className="group bg-card border border-border rounded-xl p-5 hover:border-ring/40 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-lg ${cat.color} flex items-center justify-center mb-4`}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded-md shrink-0">
                    {cat.count} temas
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
              </Link>
            );
          })}

          {/* CTA card */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-4">
                <Layers size={20} strokeWidth={1.8} />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Todos los temas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Accedé al listado completo con filtros por área, nivel de dificultad y progreso.
              </p>
            </div>
            <Link
              to="/temas"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
            >
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Metodología</p>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
              Tres etapas para aprender de verdad
            </h2>
            <p className="text-muted-foreground">
              Cada tema sigue el mismo ciclo probado: entender el concepto, ver cómo se aplica y verificar que lo aprendiste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodology.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="relative">
                  {i < methodology.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-6 -translate-x-3 border-t border-dashed border-border z-10" />
                  )}
                  <div className="bg-background border border-border rounded-xl p-6">
                    <div className={`w-11 h-11 rounded-xl ${m.accent} flex items-center justify-center mb-5`}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <p className="text-xs font-mono text-muted-foreground mb-2">0{i + 1}</p>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-white mb-3">
              Empezá a estudiar ahora
            </h2>
            <p className="text-blue-200 leading-relaxed max-w-lg">
              Más de 57 temas organizados por área y nivel de dificultad. Sin registro, sin barreras.
            </p>
          </div>
          <Link
            to="/temas"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary font-semibold hover:bg-blue-50 transition-colors shadow-sm"
          >
            Explorar temas
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
