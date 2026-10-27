import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { navItems, categoryNav, brandLogo } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const location = useLocation();
  const { lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setCatOpen(false);
  }, [location.pathname]);

  const labelText = (item: { labelZh: string; labelEn: string }) =>
    lang === 'zh' ? item.labelZh : item.labelEn;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-ink-200/60 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={brandLogo}
            alt="Guardnar"
            className="h-12 w-24 rounded-md object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((l) => (
            <div key={l.to} className="relative">
              {l.to === '/products' ? (
                <div
                  className="relative"
                  onMouseEnter={() => setCatOpen(true)}
                  onMouseLeave={() => setCatOpen(false)}
                >
                  <Link
                    to="/products"
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-400 rounded-lg transition-colors ${
                      location.pathname === l.to || location.pathname.startsWith('/category/')
                        ? scrolled
                          ? 'text-ember-600 bg-ember-50'
                          : 'text-white bg-white/5'
                        : scrolled
                          ? 'text-ink-700 hover:text-ember-600 hover:bg-ink-100/60'
                          : 'text-steel-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {labelText(l)}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${catOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {catOpen && (
                    <div className="absolute top-full left-0 pt-1 w-60 animate-fade-in">
                      <div className={`rounded-xl border p-2 shadow-xl ${scrolled ? 'bg-white/95 backdrop-blur-md border-ink-200' : 'glass border-white/10'}`}>
                        {categoryNav.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={`block px-3 py-2.5 rounded-lg transition-colors ${scrolled ? 'hover:bg-ink-100/60' : 'hover:bg-white/5'}`}
                          >
                            <span className={`block text-sm ${scrolled ? 'text-ink-800' : 'text-white'}`}>{c.labelZh}</span>
                            <span className="block text-xs text-steel-400">{c.labelEn}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={l.to}
                  className={`px-4 py-2 text-sm font-400 rounded-lg transition-colors ${
                    location.pathname === l.to
                      ? scrolled
                        ? 'text-ember-600 bg-ember-50'
                        : 'text-white bg-white/5'
                      : scrolled
                        ? 'text-ink-700 hover:text-ember-600 hover:bg-ink-100/60'
                        : 'text-steel-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {labelText(l)}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
              scrolled
                ? 'text-ink-600 hover:text-ember-600 hover:bg-ink-100/60'
                : 'text-steel-200 hover:text-white hover:bg-white/5'
            }`}
            aria-label="Switch language"
          >
            <Languages className="h-4 w-4" />
            <span className="font-500">{lang === 'zh' ? 'EN' : '中'}</span>
          </button>
          <button
            className={`lg:hidden p-2 ${scrolled ? 'text-ink-800' : 'text-white'}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className={`lg:hidden border-t px-6 py-4 animate-fade-in max-h-[80vh] overflow-y-auto ${scrolled ? 'bg-white/95 backdrop-blur-md border-ink-200' : 'glass border-white/5'}`}>
          <ul className="flex flex-col gap-1">
            {navItems.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`block px-4 py-3 text-sm rounded-lg ${scrolled ? 'text-ink-700 hover:text-ember-600 hover:bg-ink-100/60' : 'text-steel-200 hover:text-white hover:bg-white/5'}`}
                >
                  <span className={scrolled ? 'text-ink-900' : 'text-white'}>{l.labelZh}</span>
                  <span className="text-steel-500 ml-2">{l.labelEn}</span>
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-1 px-4 text-xs uppercase tracking-wide text-steel-600">
              {lang === 'zh' ? '产品类别' : 'Categories'}
            </li>
            {categoryNav.map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  className={`block px-4 py-2.5 pl-8 text-sm rounded-lg ${scrolled ? 'text-steel-600 hover:text-ember-600 hover:bg-ink-100/60' : 'text-steel-300 hover:text-white hover:bg-white/5'}`}
                >
                  {c.labelZh} <span className="text-steel-600">· {c.labelEn}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
