import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, X } from 'lucide-react';
import { topics, categories } from '../data/topics';
import TopicCard from '../components/TopicCard';
import type { Difficulty } from '../types';

const difficulties: Difficulty[] = ['Básico', 'Intermedio', 'Avanzado'];

const difficultyDot: Record<Difficulty, string> = {
  Básico: 'bg-accent',
  Intermedio: 'bg-amber-500',
  Avanzado: 'bg-red-500',
};

export default function TopicsDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') ?? '';

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | ''>('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return topics.filter((t) => {
      if (selectedCategory && t.category !== selectedCategory) return false;
      if (selectedDifficulty && t.difficulty !== selectedDifficulty) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!t.title.toLowerCase().includes(q) && !t.subtitle.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedDifficulty, search]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory((prev) => {
      const next = prev === cat ? '' : cat;
      setSearchParams(next ? { categoria: next } : {});
      return next;
    });
  };

  const handleClear = () => {
    setSelectedCategory('');
    setSelectedDifficulty('');
    setSearch('');
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedDifficulty || search;

  const SidebarContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Área
        </h3>
        <div className="space-y-0.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Nivel
        </h3>
        <div className="space-y-0.5">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty((prev) => (prev === d ? '' : d))}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2.5 ${
                selectedDifficulty === d
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${difficultyDot[d]}`} />
              {d}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={handleClear}
          className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <X size={13} />
          Limpiar filtros
        </button>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Temas de estudio</h1>
        <p className="text-muted-foreground">
          {topics.length} temas disponibles en 5 áreas de la química universitaria
        </p>
      </div>

      {/* Search + mobile filter toggle */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            placeholder="Buscar por título o descripción…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
          />
        </div>
        <button
          className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm text-foreground hover:bg-muted transition-colors"
          onClick={() => setSidebarOpen((o) => !o)}
        >
          <SlidersHorizontal size={15} />
          Filtros
          {hasFilters && (
            <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-mono">
              {[selectedCategory, selectedDifficulty].filter(Boolean).length}
            </span>
          )}
        </button>
      </div>

      {/* Active filters chips */}
      {hasFilters && (
        <div className="flex flex-wrap gap-2 mb-5">
          {selectedCategory && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {selectedCategory}
              <button onClick={() => handleCategorySelect(selectedCategory)} className="hover:text-primary/60">
                <X size={11} />
              </button>
            </span>
          )}
          {selectedDifficulty && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {selectedDifficulty}
              <button onClick={() => setSelectedDifficulty('')} className="hover:text-primary/60">
                <X size={11} />
              </button>
            </span>
          )}
        </div>
      )}

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-24 bg-card border border-border rounded-xl p-4">
            <SidebarContent />
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
            <div className="relative ml-auto w-72 bg-card h-full shadow-xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-foreground">Filtros</h2>
                <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={18} />
                </button>
              </div>
              <SidebarContent />
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-sm">
                No se encontraron temas con esos filtros.
              </p>
              <button onClick={handleClear} className="mt-3 text-sm text-primary hover:underline">
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs text-muted-foreground mb-4 font-mono">
                {filtered.length} {filtered.length === 1 ? 'tema' : 'temas'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
