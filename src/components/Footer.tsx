import { FlaskConical, GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <FlaskConical size={16} className="text-primary-foreground" strokeWidth={2} />
              </div>
              <span className="font-serif font-bold text-lg text-foreground">Quimicaeduca</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma de estudio de química universitaria con teoría, ejemplos resueltos y quizzes interactivos.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Áreas</h4>
            <ul className="space-y-2">
              {['Química General', 'Orgánica', 'Fisicoquímica', 'Analítica', 'Inorgánica'].map((area) => (
                <li key={area}>
                  <Link
                    to={`/temas?categoria=${encodeURIComponent(area)}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen size={14} className="shrink-0" />
                Contenido universitario
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap size={14} className="shrink-0" />
                Quizzes con retroalimentación
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <FlaskConical size={14} className="shrink-0" />
                Fórmulas con LaTeX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Quimicaeduca — Plataforma educativa universitaria
          </p>
          <p className="text-xs text-muted-foreground">
            Fórmulas renderizadas con KaTeX
          </p>
        </div>
      </div>
    </footer>
  );
}
