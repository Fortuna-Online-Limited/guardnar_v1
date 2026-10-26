import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Package } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { categories } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { supabase } from '@/lib/supabase';

type Product = {
  id: string;
  title: string;
  sku: string;
  description: string;
  quantity: number;
  price: number;
  photo_url: string;
};

const categoryBySlug: Record<string, string[]> = {
  disposable: ['一次性无粉手套'],
  latex: ['乳膠手套', '乳胶手套'],
  fashion: ['時款手套', '时款手套'],
  work: ['勞動手套', '劳动手套'],
  sports: ['運動手套', '运动手套'],
};

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const cat = categories.find((c) => c.slug === slug);
  const { lang } = useLang();
  const { ref, shown } = useReveal();
  const [products, setProducts] = useState<Product[]>([]);
  const [productsError, setProductsError] = useState(false);

  useEffect(() => {
    if (!cat || !slug) return;
    const categoryNames = categoryBySlug[slug];
    if (!categoryNames || !supabase) {
      setProductsError(true);
      return;
    }
    const client = supabase;

    async function loadProducts() {
      const { data, error } = await client
        .from('products')
        .select('id, title, sku, description, quantity, price, photo_url')
        .in('category', categoryNames)
        .order('sku');

      if (error) {
        setProductsError(true);
        return;
      }

      setProducts((data as Product[]) ?? []);
    }

    void loadProducts();
  }, [cat]);

  if (!cat) {
    return (
      <div className="pt-24 max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-700 text-white mb-4">
          {lang === 'zh' ? '未找到该品类' : 'Category Not Found'}
        </h1>
        <Link to="/products" className="text-ember-400 hover:text-ember-300 transition-colors">
          {lang === 'zh' ? '返回产品页 →' : 'Back to Products →'}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-steel-500 mb-8 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors">
            {lang === 'zh' ? '首页' : 'Home'}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/products" className="hover:text-white transition-colors">
            {lang === 'zh' ? '产品' : 'Products'}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-steel-300">{lang === 'zh' ? cat.labelZh : cat.labelEn}</span>
        </nav>

        <div
          ref={ref}
          className={`mb-8 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">
            {cat.labelEn}
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-700 tracking-tight text-white">
            {lang === 'zh' ? cat.labelZh : cat.labelEn}
          </h1>
        </div>

        <div
          className={`relative rounded-2xl overflow-hidden mb-10 transition-all duration-700 ${
            shown ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={cat.image}
            alt={lang === 'zh' ? cat.labelZh : cat.labelEn}
            className="w-full h-56 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
        </div>

        <p
          className={`text-base sm:text-lg text-steel-200 leading-[1.85] transition-all duration-700 ${
            shown ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {lang === 'zh' ? cat.description.zh : cat.description.en}
        </p>

        <div className="mt-16 pt-10 border-t border-white/5">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">Product Catalogue</span>
              <h2 className="mt-2 font-display text-3xl font-700 text-white">
                {lang === 'zh' ? `${products.length} 件产品` : `${products.length} Products`}
              </h2>
            </div>
            <Package className="h-6 w-6 text-ember-400" />
          </div>
          {productsError && (
            <p className="mb-6 rounded-xl border border-ember-500/20 bg-ember-500/5 p-4 text-sm text-steel-300">
              {lang === 'zh' ? '产品资料暂时无法加载。' : 'Product data could not be loaded.'}
            </p>
          )}
          {!productsError && products.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-5 mb-16">
              {products.map((product) => (
                <Link to={`/product/${product.sku}`} key={product.sku} className="overflow-hidden rounded-2xl bg-ink-800/60 border border-white/5 hover:border-ember-500/30 transition-all duration-500 hover:-translate-y-1 block">
                  <div className="flex gap-4 p-4">
                    <img src={product.photo_url} alt={product.title} className="h-24 w-24 shrink-0 rounded-xl object-cover bg-ink-900" 
                      onError={(e) => { e.currentTarget.style.opacity = '0'; }} />
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-base font-600 text-white leading-snug">{product.title}</h3>
                        <span className="text-ember-400 text-sm font-600 whitespace-nowrap">¥{product.price}</span>
                      </div>
                      <p className="mt-2 text-xs text-steel-400">{product.sku} · {lang === 'zh' ? '数量' : 'Qty'}: {product.quantity}</p>
                      <p className="mt-2 text-xs text-steel-500 leading-relaxed line-clamp-2">{product.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-white/5">
          <h2 className="text-sm uppercase tracking-wider text-steel-500 mb-5">
            {lang === 'zh' ? '其他品类' : 'Other Categories'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/category/${c.slug}`}
                  className="px-4 py-2.5 rounded-lg bg-ink-800/60 border border-white/5 hover:border-ember-500/30 text-sm text-steel-200 hover:text-white transition-all"
                >
                  {lang === 'zh' ? c.labelZh : c.labelEn}
                  <span className="text-steel-500 ml-2">
                    {lang === 'zh' ? c.labelEn : c.labelZh}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
