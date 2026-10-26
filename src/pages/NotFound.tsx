import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LanguageContext';

export default function NotFound() {
  const { lang } = useLang();

  return (
    <div className="pt-24 min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="font-display text-8xl font-700 text-ember-500/30">404</span>
        <h1 className="mt-4 font-display text-3xl font-700 text-white">
          {lang === 'zh' ? '页面未找到' : 'Page Not Found'}
        </h1>
        <p className="mt-4 text-steel-400 leading-relaxed">
          {lang === 'zh'
            ? '该页面不存在或已被移动。请从下方导航继续浏览。'
            : 'This page does not exist or has been moved. Please use the navigation below.'}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-lg bg-ember-500 hover:bg-ember-400 text-white font-500 transition-all"
          >
            {lang === 'zh' ? '返回首页' : 'Back Home'}
          </Link>
          <Link
            to="/products"
            className="px-5 py-2.5 rounded-lg glass border border-white/10 text-white font-500 transition-all"
          >
            {lang === 'zh' ? '浏览产品' : 'Browse Products'}
          </Link>
        </div>
      </div>
    </div>
  );
}
