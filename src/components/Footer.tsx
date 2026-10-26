import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import {
  navItems,
  categoryNav,
  certificationList,
  mainlandContact,
  t,
  companyFullName,
  brandLogo,
} from '@/data/content';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="relative border-t border-white/5 bg-ink-950 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={brandLogo}
                alt="Guardnar"
                className="h-14 w-28 rounded-md object-contain"
              />
              <span className="font-display text-xl font-700 text-white">
                Guard<span className="text-ember-400">nar</span>
              </span>
            </div>
            <p className="text-sm text-steel-400 leading-relaxed mb-2">
              {t(companyFullName, lang)}
            </p>
            <p className="text-xs text-steel-600">
              {lang === 'zh' ? '加德纳（Guardnar）品牌' : 'Guardnar Brand'}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-steel-500 mb-4">
              {lang === 'zh' ? '导航' : 'Navigation'}
            </h3>
            <ul className="space-y-2">
              {navItems.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-steel-300 hover:text-white transition-colors">
                    {lang === 'zh' ? l.labelZh : l.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-steel-500 mb-4">
              {lang === 'zh' ? '产品类别' : 'Categories'}
            </h3>
            <ul className="space-y-2">
              {categoryNav.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="text-sm text-steel-300 hover:text-white transition-colors">
                    {lang === 'zh' ? c.labelZh : c.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-steel-500 mb-4">
              {lang === 'zh' ? '联系方式' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-steel-400">
                <Phone className="h-4 w-4 text-ember-400 shrink-0 mt-0.5" />
                <a href={`tel:${mainlandContact.switchboard}`} className="hover:text-white transition-colors">
                  {mainlandContact.switchboard}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-steel-400 leading-relaxed">
                <MapPin className="h-4 w-4 text-ember-400 shrink-0 mt-0.5" />
                {t(mainlandContact.address, lang)}
              </li>
            </ul>
            <h3 className="text-xs uppercase tracking-wider text-steel-500 mb-3 mt-6">
              {lang === 'zh' ? '资质认证' : 'Certifications'}
            </h3>
            <p className="text-xs text-steel-500 leading-relaxed">
              {certificationList.join(' · ')}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-steel-600">
          <p>© {new Date().getFullYear()} {t(companyFullName, lang)} · Guardnar</p>
        </div>
      </div>
    </footer>
  );
}
