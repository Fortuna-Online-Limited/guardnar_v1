import { Link } from 'react-router-dom';
import { ChevronRight, Quote, Droplets, Flame, Feather, Home, ShieldCheck, HardHat, type LucideIcon } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { aboutParagraphs, corporateSpirit, stats, productLines } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { t } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  HardHat,
  Flame,
  Feather,
  Home,
  ShieldCheck,
};

export default function About() {
  const { lang } = useLang();
  const { ref, shown } = useReveal();

  return (
    <div className="pt-24">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-steel-500 mb-8">
          <Link to="/" className="hover:text-white transition-colors">
            {lang === 'zh' ? '首页' : 'Home'}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-steel-300">{lang === 'zh' ? '关于我们' : 'About'}</span>
        </nav>

        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">About</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-700 tracking-tight text-white">
            {lang === 'zh' ? '关于我们' : 'About Us'}
          </h1>
        </div>

        {/* Stats inline */}
        <div
          className={`grid grid-cols-3 gap-4 mb-12 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {stats.map((s, i) => (
            <div key={i} className="p-5 rounded-xl bg-ink-800/50 border border-white/5 text-center">
              <div className="font-display text-2xl font-700 text-ember-400">{s.value}</div>
              <div className="mt-1 text-xs text-steel-400">{t(s.label, lang)}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {aboutParagraphs.map((p, i) => (
            <p
              key={i}
              className={`text-base sm:text-lg text-steel-200 leading-[1.85] transition-all duration-700 ${
                shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {t(p, lang)}
            </p>
          ))}
        </div>

        {/* Business & Product Lines */}
        <div
          className={`mt-14 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">
            {lang === 'zh' ? '業務與產品特色' : 'Business & Product Lines'}
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-700 tracking-tight text-white mb-8">
            {lang === 'zh' ? '主營產品' : 'Core Products'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {productLines.map((item, i) => {
              const Icon = iconMap[item.icon] ?? ShieldCheck;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-ink-800/50 border border-white/5 hover:border-ember-500/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500/20 to-ember-700/10 border border-ember-500/20">
                      <Icon className="h-5 w-5 text-ember-400" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-600 text-white mb-1.5">
                        {t(item.title, lang)}
                      </h3>
                      <p className="text-sm text-steel-400 leading-relaxed">
                        {t(item.desc, lang)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate spirit quote */}
        <div
          className={`mt-14 p-8 rounded-2xl bg-gradient-to-br from-ember-500/10 to-transparent border border-ember-500/15 transition-all duration-700 ${
            shown ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Quote className="h-8 w-8 text-ember-400/40 mb-4" />
          <p className="font-display text-xl sm:text-2xl font-600 text-ember-300 text-balance">
            {t(corporateSpirit, lang)}
          </p>
          <p className="mt-3 text-xs text-steel-500">
            {lang === 'zh' ? '嘉鸿企业精神' : 'Ka Hung Corporate Spirit'}
          </p>
        </div>
      </section>
    </div>
  );
}
