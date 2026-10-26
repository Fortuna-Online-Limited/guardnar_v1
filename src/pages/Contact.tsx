import { Link } from 'react-router-dom';
import { ChevronRight, Phone, MapPin, User } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { contactIntro, mainlandContact, hongKongContact, t } from '@/data/content';
import { Reveal, motion, fadeUp, fadeIn, staggerContainer, staggerItem } from '@/components/Motion';

export default function Contact() {
  const { lang } = useLang();

  const renderRegion = (region: typeof mainlandContact) => (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="p-8 rounded-2xl glass border border-white/10 hover:border-ember-500/20 transition-colors duration-500"
    >
      <h2 className="font-display text-xl font-600 text-white mb-6">{t(region.title, lang)}</h2>
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-800 border border-white/5 shrink-0">
            <Phone className="h-5 w-5 text-ember-400" />
          </span>
          <div>
            <p className="text-xs text-steel-500 uppercase tracking-wide">
              {lang === 'zh' ? '总台电话' : 'Switchboard'}
            </p>
            <a
              href={`tel:${region.switchboard}`}
              className="text-steel-100 hover:text-ember-400 transition-colors font-500"
            >
              {region.switchboard}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-800 border border-white/5 shrink-0">
            <MapPin className="h-5 w-5 text-ember-400" />
          </span>
          <div>
            <p className="text-xs text-steel-500 uppercase tracking-wide">
              {lang === 'zh' ? '地址' : 'Address'}
            </p>
            <p className="text-steel-100 leading-relaxed">{t(region.address, lang)}</p>
          </div>
        </div>
        {region.persons.length > 0 && (
          <div className="pt-4 border-t border-white/5 space-y-4">
            <p className="text-xs text-steel-500 uppercase tracking-wide">
              {lang === 'zh' ? '业务对接' : 'Business Contacts'}
            </p>
            {region.persons.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 border border-white/5 shrink-0">
                  <User className="h-4 w-4 text-steel-400" />
                </span>
                <div>
                  <p className="text-sm text-steel-400">{t(p.label, lang)}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm text-white font-500">{p.name}</span>
                    <a
                      href={`tel:${p.phone}`}
                      className="text-sm text-ember-400 hover:text-ember-300 transition-colors"
                    >
                      {p.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="pt-24">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-steel-500 mb-8">
          <Link to="/" className="hover:text-white transition-colors">
            {lang === 'zh' ? '首页' : 'Home'}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-steel-300">{lang === 'zh' ? '联系我们' : 'Contact'}</span>
        </nav>

        <Reveal variants={fadeUp} className="mb-10">
          <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">Contact</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-700 tracking-tight text-white">
            {lang === 'zh' ? '联系我们' : 'Contact Us'}
          </h1>
        </Reveal>

        <Reveal variants={fadeIn} delay={0.15} className="mb-12">
          <p className="text-base sm:text-lg text-steel-200 leading-[1.85]">
            {t(contactIntro, lang)}
          </p>
        </Reveal>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          {renderRegion(mainlandContact)}
          {renderRegion(hongKongContact)}
        </motion.div>
      </section>
    </div>
  );
}
