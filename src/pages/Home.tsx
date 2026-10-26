import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  BadgeCheck,
  Users,
  Award,
  Sparkles,
  Hand,
  Factory,
  Target,
} from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import {
  tagline,
  heroCopy,
  whyChooseUs,
  qualityPromise,
  innovationItems,
  categories,
  productTiles,
  stats,
  certificationList,
  corporateSpirit,
  t,
} from '@/data/content';

const iconMap: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Globe,
  BadgeCheck,
  Users,
};

export default function Home() {
  const { lang } = useLang();
  const heroReveal = useReveal();
  const whyReveal = useReveal();
  const qualityReveal = useReveal();
  const innovReveal = useReveal();
  const productReveal = useReveal();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/guardnar/Main.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/60 to-ink-950" />
        </div>

        <div
          ref={heroReveal.ref}
          className={`relative max-w-7xl mx-auto px-6 py-24 transition-all duration-1000 ${
            heroReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-8">
              <Sparkles className="h-3.5 w-3.5 text-ember-400" />
              <span className="text-xs tracking-wide text-steel-200 font-500">
                {lang === 'zh' ? '1993年创立 · 30余年专业防护' : 'Since 1993 · Over 30 Years of Protection'}
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-700 tracking-tight text-white leading-[1.05] text-balance">
              {t(tagline, lang)}
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-steel-300 leading-relaxed max-w-2xl font-300">
              {t(heroCopy, lang)}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ember-500 hover:bg-ember-400 text-white font-500 transition-all shadow-lg shadow-ember-600/30 hover:-translate-y-0.5"
              >
                {lang === 'zh' ? '浏览产品' : 'View Products'}
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-3.5 rounded-xl glass border border-white/10 text-white font-500 hover:border-ember-500/30 transition-all"
              >
                {lang === 'zh' ? '了解我们' : 'About Us'}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/5 glass">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 divide-x divide-white/5">
            {stats.map((s, i) => (
              <div key={i} className="py-6 px-4 text-center first:pl-6 last:pr-6">
                <div className="font-display text-3xl font-700 text-ember-400">{s.value}</div>
                <div className="mt-1 text-xs text-steel-400 tracking-wide">
                  {t(s.label, lang)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyReveal.ref} className="relative max-w-7xl mx-auto px-6 py-24">
        <div
          className={`mb-14 transition-all duration-700 ${
            whyReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">
            {lang === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 tracking-tight text-white max-w-2xl">
            {lang === 'zh'
              ? '从泉州到全球，守护每一双手'
              : 'From Quanzhou to the world, protecting every pair of hands'}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {whyChooseUs.map((f, i) => {
            const Icon = iconMap[f.icon] ?? ShieldCheck;
            return (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl bg-ink-800/60 border border-white/5 hover:border-ember-500/30 transition-all duration-500 hover:-translate-y-1 ${
                  whyReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500/20 to-ember-700/10 border border-ember-500/20">
                    <Icon className="h-6 w-6 text-ember-400" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-600 text-white mb-2">
                      {t(f.title, lang)}
                    </h3>
                    <p className="text-sm text-steel-300 leading-relaxed">
                      {t(f.body, lang)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quality Promise — Values */}
      <section ref={qualityReveal.ref} className="relative bg-ink-900/50 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`mb-14 transition-all duration-700 ${
              qualityReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">
              {lang === 'zh' ? '品质承诺' : 'Quality Promise'}
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 tracking-tight text-white max-w-2xl">
              {lang === 'zh' ? '企业定位、使命与愿景' : 'Positioning, Mission & Vision'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {qualityPromise.map((v, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl bg-ink-800/40 border border-white/5 hover:border-ember-500/20 transition-all duration-500 ${
                  qualityReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-px w-8 bg-ember-500" />
                  <Target className="h-5 w-5 text-ember-400" />
                </div>
                <h3 className="font-display text-xl font-600 text-white mb-3">
                  {t(v.title, lang)}
                </h3>
                <p className="text-sm text-steel-300 leading-relaxed">
                  {t(v.body, lang)}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications strip */}
          <div
            className={`mt-14 flex flex-wrap items-center gap-3 transition-all duration-700 ${
              qualityReveal.shown ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-xs uppercase tracking-wider text-steel-500 mr-2">
              {lang === 'zh' ? '权威认证' : 'Certifications'}
            </span>
            {certificationList.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-lg bg-ink-800/60 border border-white/5 text-xs text-steel-300"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Passion */}
      <section ref={innovReveal.ref} className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className={`transition-all duration-700 ${
                innovReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">
                {lang === 'zh' ? '创新与热情' : 'Innovation & Passion'}
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 tracking-tight text-white mb-6">
                {lang === 'zh'
                  ? '以创新驱动发展，以热情守护生命'
                  : 'Driven by innovation, passionate about protecting lives'}
              </h2>
              <div className="space-y-6">
                {innovationItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 transition-all duration-700 ${
                      innovReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-800 border border-white/5">
                      {i === 0 ? <Award className="h-5 w-5 text-ember-400" /> : i === 1 ? <BadgeCheck className="h-5 w-5 text-ember-400" /> : <Factory className="h-5 w-5 text-ember-400" />}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-600 text-white mb-1">
                        {t(item.title, lang)}
                      </h3>
                      <p className="text-sm text-steel-300 leading-relaxed">
                        {t(item.body, lang)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`mt-10 p-6 rounded-2xl bg-gradient-to-br from-ember-500/10 to-transparent border border-ember-500/15 transition-all duration-700 ${
                innovReveal.shown ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="font-display text-xl sm:text-2xl font-600 text-ember-300 text-balance">
                {t(corporateSpirit, lang)}
              </p>
              <p className="mt-2 text-xs text-steel-500">
                {lang === 'zh' ? '嘉鸿企业精神' : 'Ka Hung Corporate Spirit'}
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              innovReveal.shown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.pexels.com/photos/16368419/pexels-photo-16368419.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt={lang === 'zh' ? '工业防护场景' : 'Industrial protection'}
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl glass border border-white/10 shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <Hand className="h-8 w-8 text-ember-400" />
                <div>
                  <div className="font-display text-2xl font-700 text-white">PPE</div>
                  <div className="text-xs text-steel-400">
                    {lang === 'zh' ? '个人安全防护装备专家' : 'Personal Protective Equipment Experts'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section ref={productReveal.ref} className="relative bg-ink-900/50 border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 transition-all duration-700 ${
              productReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">
                {lang === 'zh' ? '产品中心' : 'Products'}
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 tracking-tight text-white">
                {lang === 'zh' ? '五大手套品类' : 'Five Glove Categories'}
              </h2>
            </div>
            <Link
              to="/products"
              className="group flex items-center gap-2 text-sm text-ember-400 hover:text-ember-300 transition-colors"
            >
              {lang === 'zh' ? '查看全部' : 'View All'}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productTiles.map((slug, i) => {
              const cat = categories.find((c) => c.slug === slug)!;
              return (
                <Link
                  key={slug}
                  to={`/category/${slug}`}
                  className={`group relative overflow-hidden rounded-2xl bg-ink-800/70 border border-white/5 hover:border-ember-500/30 transition-all duration-500 hover:-translate-y-1.5 ${
                    productReveal.shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={lang === 'zh' ? cat.labelZh : cat.labelEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/20 to-transparent" />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-600 text-white">
                        {lang === 'zh' ? cat.labelZh : cat.labelEn}
                      </h3>
                      <p className="text-sm text-steel-500 mt-1">
                        {lang === 'zh' ? cat.labelEn : cat.labelZh}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-700 border border-white/5 group-hover:bg-ember-500 group-hover:border-ember-500 transition-all">
                      <ArrowRight className="h-4 w-4 text-ember-400 group-hover:text-white" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
