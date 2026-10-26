import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Package, Search, SlidersHorizontal } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { categories, productTiles } from '@/data/content';
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
  category: string;
};

const categoryLabels: Record<string, { zh: string; en: string }> = {
  一次性无粉手套: { zh: '一次性无粉手套', en: 'Disposable Powder-Free' },
  乳胶手套: { zh: '乳胶手套', en: 'Latex Gloves' },
  时款手套: { zh: '时款手套', en: 'Fashion Gloves' },
  劳动手套: { zh: '劳动手套', en: 'Work Gloves' },
  运动手套: { zh: '运动手套', en: 'Sports Gloves' },
};

export default function Products() {
  const { lang } = useLang();
  const { ref, shown } = useReveal();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadProducts() {
      if (!supabase) {
        setError(lang === 'zh' ? '产品资料暂时无法加载，请稍后再试。' : 'Product data could not be loaded. Please try again later.');
        setLoading(false);
        return;
      }

      const { data, error: queryError } = await supabase
        .from('_guardnar_products')
        .select('id, title, sku, description, quantity, price, photo_url, category')
        .order('sku');

      if (!active) return;
      if (queryError) {
        setError(lang === 'zh' ? '产品资料暂时无法加载，请稍后再试。' : 'Product data could not be loaded. Please try again later.');
        setLoading(false);
        return;
      }

      setProducts((data as Product[]) ?? []);
      setLoading(false);
    }

    void loadProducts();
    return () => {
      active = false;
    };
  }, [lang]);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const searchMatch = !term || `${product.title} ${product.sku} ${product.description}`.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [products, search, selectedCategory]);

  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-steel-500 mb-8">
          <Link to="/" className="hover:text-white transition-colors">
            {lang === 'zh' ? '首页' : 'Home'}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-steel-300">{lang === 'zh' ? '产品目录' : 'Product Catalogue'}</span>
        </nav>

        <div
          ref={ref}
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">Products</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-700 tracking-tight text-white">
            {lang === 'zh' ? '产品目录' : 'Product Catalogue'}
          </h1>
          <p className="mt-5 text-lg text-steel-300 leading-relaxed">
            {lang === 'zh'
              ? '五大手套品类，覆盖一次性无粉、乳胶、时款、劳动与运动防护，满足不同行业与环境的需求。'
              : 'Five glove categories covering disposable powder-free, latex, fashion, work and sports protection — meeting the demands of diverse industries and environments.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-24">
          {productTiles.map((slug, i) => {
            const cat = categories.find((c) => c.slug === slug)!;
            return (
              <Link
                key={slug}
                to={`/category/${slug}`}
                className={`group relative overflow-hidden rounded-3xl bg-ink-800/70 border border-white/5 hover:border-ember-500/30 transition-all duration-500 hover:-translate-y-1.5 ${
                  shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={lang === 'zh' ? cat.labelZh : cat.labelEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/30 to-transparent" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-600 text-white">
                      {lang === 'zh' ? cat.labelZh : cat.labelEn}
                    </h3>
                    <p className="text-sm text-steel-400 mt-1">
                      {lang === 'zh' ? cat.labelEn : cat.labelZh}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-700 border border-white/5 group-hover:bg-ember-500 group-hover:border-ember-500 transition-all">
                    <ArrowRight className="h-5 w-5 text-ember-400 group-hover:text-white" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="border-t border-white/5 pt-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">
                {lang === 'zh' ? '产品目录' : 'Product Catalogue'}
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-700 tracking-tight text-white">
                {lang === 'zh' ? `${products.length || 30} 款产品` : `${products.length || 30} Products`}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-steel-400">
              <Package className="h-4 w-4 text-ember-400" />
              {lang === 'zh' ? '资料来自产品目录' : 'From the product catalogue'}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <label className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-steel-500" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={lang === 'zh' ? '搜索产品名称、SKU或描述' : 'Search by name, SKU or description'}
                className="w-full rounded-xl bg-ink-800/70 border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder:text-steel-600 outline-none focus:border-ember-500/50 transition-colors"
              />
            </label>
            <div className="flex items-center gap-2 min-w-0">
              <SlidersHorizontal className="h-4 w-4 text-ember-400 shrink-0" />
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full md:w-56 rounded-xl bg-ink-800/70 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-ember-500/50 transition-colors"
              >
                <option value="all">{lang === 'zh' ? '全部类别' : 'All Categories'}</option>
                {Object.keys(categoryLabels).map((category) => (
                  <option key={category} value={category}>
                    {lang === 'zh' ? categoryLabels[category].zh : categoryLabels[category].en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading && (
            <div className="rounded-2xl border border-white/5 bg-ink-800/40 p-10 text-center text-steel-400">
              {lang === 'zh' ? '正在加载产品资料…' : 'Loading products…'}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-ember-500/20 bg-ember-500/5 p-10 text-center text-steel-300">
              {error}
            </div>
          )}

          {!loading && !error && filteredProducts.length === 0 && (
            <div className="rounded-2xl border border-white/5 bg-ink-800/40 p-10 text-center text-steel-400">
              {lang === 'zh' ? '没有找到符合条件的产品。' : 'No products match your search.'}
            </div>
          )}

          {!loading && !error && filteredProducts.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <Link
                  to={`/product/${product.sku}`}
                  key={product.sku}
                  className="group overflow-hidden rounded-2xl bg-ink-800/60 border border-white/5 hover:border-ember-500/30 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                    <img
                      src={product.photo_url}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-ink-950/80 border border-white/10 px-2.5 py-1 text-[11px] text-steel-200">
                      {product.sku}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-base font-600 text-white leading-snug">{product.title}</h3>
                      <span className="text-ember-400 font-600 whitespace-nowrap">¥{product.price}</span>
                    </div>
                    <p className="mt-3 text-xs text-steel-400 leading-relaxed line-clamp-3">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-steel-500">
                      <span>{lang === 'zh' ? '数量' : 'Qty'}: {product.quantity}</span>
                      <span>{lang === 'zh' ? categoryLabels[product.category]?.zh ?? product.category : categoryLabels[product.category]?.en ?? product.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
