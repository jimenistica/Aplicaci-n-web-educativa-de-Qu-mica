import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, FlaskConical, X, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { topics } from '../data/topics';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof topics>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const q = value.toLowerCase();
    setResults(topics.filter((t) => t.title.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)).slice(0, 4));
  };

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/temas', label: 'Temas' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <FlaskConical size={16} className="text-primary-foreground" strokeWidth={2} />
            </div>
            <span className="font-serif font-bold text-lg text-foreground hidden sm:block">
              Quimicaeduca
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-sm ml-auto relative">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                placeholder="Buscar temas…"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-muted rounded-lg border border-transparent focus:border-ring focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
              />
            </div>
            {results.length > 0 && (
              <div className="absolute top-full mt-1 left-0 right-0 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
                {results.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => { navigate(`/temas/${r.id}`); setQuery(''); setResults([]); }}
                    className="w-full text-left px-4 py-3 hover:bg-muted flex items-start gap-3 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">{r.title}</span>
                    <span className="ml-auto text-xs text-muted-foreground shrink-0 mt-0.5">{r.category}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
