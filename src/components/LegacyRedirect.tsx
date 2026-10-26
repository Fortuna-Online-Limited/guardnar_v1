import { Navigate, useLocation } from 'react-router-dom';
import { categories } from '@/data/content';
import NotFound from '@/pages/NotFound';

const oldToNew: Record<string, string> = {
  '/86-2/': '/about',
  '/contact-page/': '/contact',
  '/%e4%ba%a7%e5%93%81%e9%a1%b5/': '/products',
};
categories.forEach((c) => {
  oldToNew[c.oldPath] = `/category/${c.slug}`;
});

function normalize(p: string): string {
  let path = p;
  if (!path.endsWith('/')) path += '/';
  return decodeURIComponent(path);
}

export default function LegacyRedirect() {
  const location = useLocation();
  const raw = location.pathname;
  const candidates = [raw, normalize(raw), raw.toLowerCase(), normalize(raw).toLowerCase()];

  for (const c of candidates) {
    const target = oldToNew[c];
    if (target && target !== raw) {
      return <Navigate to={target} replace />;
    }
  }
  return <NotFound />;
}
