import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Package, Tag, Boxes, Warehouse, ImageIcon } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

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

const categoryLabels: Record<string, { zh: string; en: string; slug: string }> = {
  一次性无粉手套: { zh: '一次性无粉手套', en: 'Disposable Powder-Free', slug: 'disposable' },
  乳膠手套: { zh: '乳膠手套', en: 'Latex Gloves', slug: 'latex' },
  时款手套: { zh: '时款手套', en: 'Fashion Gloves', slug: 'fashion' },
  劳动手套: { zh: '劳动手套', en: 'Work Gloves', slug: 'work' },
  运动手套: { zh: '运动手套', en: 'Sports Gloves', slug: 'sports' },
  乳胶手套: { zh: '乳胶手套', en: 'Latex Gloves', slug: 'latex' },
  時款手套: { zh: '時款手套', en: 'Fashion Gloves', slug: 'fashion' },
  勞動手套: { zh: '勞動手套', en: 'Work Gloves', slug: 'work' },
  運動手套: { zh: '運動手套', en: 'Sports Gloves', slug: 'sports' },
};

function ProductView({ product, lang }: { product: Product; lang: 'zh' | 'en' }) {
  const { ref, shown } = useReveal();
  const [imgError, setImgError] = useState(false);
  const cat = categoryLabels[product.category] ?? Object.values(categoryLabels).find((c) => c.zh === product.category);

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-steel-500 mb-8 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors">
            {lang === 'zh' ? '首页' : 'Home'}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/products" className="hover:text-white transition-colors">
            {lang === 'zh' ? '产品目录' : 'Products'}
          </Link>
          {cat && (
            <>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to={`/category/${cat.slug}`} className="hover:text-white transition-colors">
                {lang === 'zh' ? cat.zh : cat.en}
              </Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-steel-300">{product.sku}</span>
        </nav>

        <Link
          to={cat ? `/category/${cat.slug}` : '/products'}
          className="inline-flex items-center gap-2 text-sm text-steel-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {lang === 'zh' ? '返回列表' : 'Back to list'}
        </Link>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 border border-white/5 aspect-square">
            {imgError ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-steel-600">
                <ImageIcon className="h-12 w-12" strokeWidth={1.2} />
                <span className="text-sm">{lang === 'zh' ? '图片暂不可用' : 'Image unavailable'}</span>
              </div>
            ) : (
              <img
                src={product.photo_url}
                alt={product.title}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            )}
            <span className="absolute top-4 left-4 rounded-full bg-ink-950/80 border border-white/10 px-3 py-1 text-xs text-steel-200">
              {product.sku}
            </span>
          </div>

          <div className="flex flex-col">
            {cat && (
              <span className="text-xs tracking-[0.2em] uppercase text-ember-400 font-500">
                {lang === 'zh' ? cat.zh : cat.en}
              </span>
            )}
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-700 tracking-tight text-white leading-tight">
              {product.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-700 text-ember-400">
                ¥{product.price}
              </span>
              <span className="text-sm text-steel-500">
                {lang === 'zh' ? '参考价格（人民币）' : 'Reference price (RMB)'}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-ink-800/60 border border-white/5 p-5">
                <div className="flex items-center gap-2 text-steel-400 text-xs uppercase tracking-wider">
                  <Boxes className="h-4 w-4 text-ember-400" />
                  {lang === 'zh' ? '库存数量' : 'Quantity'}
                </div>
                <p className="mt-2 font-display text-xl font-600 text-white">{product.quantity}</p>
              </div>
              <div className="rounded-2xl bg-ink-800/60 border border-white/5 p-5">
                <div className="flex items-center gap-2 text-steel-400 text-xs uppercase tracking-wider">
                  <Tag className="h-4 w-4 text-ember-400" />
                  {lang === 'zh' ? '产品编号' : 'SKU'}
                </div>
                <p className="mt-2 font-display text-xl font-600 text-white">{product.sku}</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-sm uppercase tracking-wider text-steel-500 mb-3">
                {lang === 'zh' ? '产品描述' : 'Description'}
              </h2>
              <p className="text-base text-steel-200 leading-[1.85]">{product.description}</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-ember-500 px-6 py-3 text-sm font-600 text-ink-950 hover:bg-ember-400 transition-colors"
              >
                <Package className="h-4 w-4" />
                {lang === 'zh' ? '查询订购' : 'Inquire to Order'}
              </Link>
              {cat && (
                <Link
                  to={`/category/${cat.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm text-steel-200 hover:border-ember-500/30 hover:text-white transition-all"
                >
                  <Warehouse className="h-4 w-4" />
                  {lang === 'zh' ? `查看更多${cat.zh}` : `More ${cat.en}`}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductDetail() {
  const { sku } = useParams<{ sku: string }>();
  const { lang } = useLang();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadProduct() {
      if (!sku) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      if (!supabase) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('_guardnar_products')
        .select('id, title, sku, description, quantity, price, photo_url, category')
        .eq('sku', sku)
        .maybeSingle();

      if (!active) return;

      if (error || !data) {
        setNotFound(true);
      } else {
        setProduct(data as Product);
      }
      setLoading(false);
    }

    void loadProduct();
    return () => {
      active = false;
    };
  }, [sku]);

  if (loading) {
    return (
      <div className="pt-24">
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="rounded-2xl border border-white/5 bg-ink-800/40 p-16 text-center text-steel-400">
            {lang === 'zh' ? '正在加载产品资料…' : 'Loading product…'}
          </div>
        </section>
      </div>
    );
  }

  if (notFound || !product) {
    return (
      <div className="pt-24">
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-700 text-white mb-4">
            {lang === 'zh' ? '未找到该产品' : 'Product Not Found'}
          </h1>
          <Link to="/products" className="text-ember-400 hover:text-ember-300 transition-colors">
            {lang === 'zh' ? '返回产品目录 →' : 'Back to Products →'}
          </Link>
        </section>
      </div>
    );
  }

  return <ProductView product={product} lang={lang} />;
}
