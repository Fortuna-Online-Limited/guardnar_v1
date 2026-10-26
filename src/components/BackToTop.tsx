import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={lang === 'zh' ? '回到顶部' : 'Back to top'}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ember-500 text-white shadow-xl shadow-ember-600/30 transition-all duration-300 hover:bg-ember-400 hover:-translate-y-1 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
