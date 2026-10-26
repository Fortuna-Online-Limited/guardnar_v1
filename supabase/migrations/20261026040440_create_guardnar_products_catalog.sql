/*
# Create Guardnar product catalog

1. New Tables
- `products` stores the public Guardnar catalogue displayed on the website.
- `id` is the stable UUID identifier.
- `title` is the product name shown to visitors.
- `sku` is the unique product code from the supplied catalogue image.
- `description` is the Chinese product description from the supplied catalogue.
- `quantity` is the listed pack or stock quantity.
- `price` is the listed catalogue price.
- `photo_url` is the public product image URL in Supabase Storage.
- `category` is the Chinese catalogue category.
- `created_at` records when the row was added.

2. Data
- Adds the 30 products supplied in the catalogue image.
- Re-running this migration updates the same SKU rows instead of creating duplicates.

3. Security
- Enables row-level security on `products`.
- Grants read-only access to the public `anon` and `authenticated` roles.
- Adds a public SELECT policy because this is a public product catalogue and the site has no sign-in screen.

4. Important notes
- The website only reads catalogue data from this table; public visitors cannot create, edit or delete products through the browser.
- Product images use the supplied Guardnar Storage naming convention: one JPG per SKU.
*/

CREATE TABLE IF NOT EXISTS public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  sku text NOT NULL UNIQUE,
  description text NOT NULL,
  quantity integer NOT NULL CHECK (quantity >= 0),
  price numeric(12, 2) NOT NULL CHECK (price >= 0),
  photo_url text NOT NULL,
  category text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.products TO anon, authenticated;

DROP POLICY IF EXISTS "Public can view products" ON public.products;
CREATE POLICY "Public can view products"
ON public.products FOR SELECT
TO anon, authenticated
USING (true);

INSERT INTO public.products (title, sku, description, quantity, price, photo_url, category)
VALUES
  ('100個藍色無粉手套', 'GD_5831', '全能型：用途廣泛，可貫射用，適用於各種任務及環境，兼備均衡的保護與舒適感', 100, 60, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_5831.jpg', '一次性无粉手套'),
  ('100個藍色無粉手套', 'GD_0274', '全能型：用途廣泛，可貫射用，適用於各種任務及環境，兼備均衡的保護與舒適感', 100, 60, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_0274.jpg', '一次性无粉手套'),
  ('100個白色無粉手套', 'GD_9460', '全能型：用途廣泛，可貫射用，適用於各種任務及環境，兼備均衡的保護與舒適感', 100, 60, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_9460.jpg', '一次性无粉手套'),
  ('100個黑色無粉手套', 'GD_3128', '全能型：用途廣泛，可貫射用，適用於各種任務及環境，兼備均衡的保護與舒適感', 100, 60, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_3128.jpg', '一次性无粉手套'),
  ('100個粉紅色無粉手套', 'GD_7059', '全能型：用途廣泛，可貫射用，適用於各種任務及環境，兼備均衡的保護與舒適感', 100, 60, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_7059.jpg', '一次性无粉手套'),
  ('100個綠色無粉手套', 'GD_3479', '全能型：用途廣泛，可貫射用，適用於各種任務及環境，兼備均衡的保護與舒適感', 100, 60, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_3479.jpg', '一次性无粉手套'),
  ('藍色白色防滑手套', 'GD_1683', '柔軟的棉紗乳膠手套保護纖細的雙手免受磨損、熱、割傷', 100, 30, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_1683.jpg', '乳膠手套'),
  ('粉紅色白色防水乳膠手套', 'GD_8246', '柔軟的棉紗乳膠手套保護纖細的雙手免受磨損、熱、割傷', 100, 30, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_8246.jpg', '乳膠手套'),
  ('黃色白色防水乳膠手套', 'GD_4902', '柔軟的棉紗乳膠手套保護纖細的雙手免受磨損、熱、割傷', 100, 30, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_4902.jpg', '乳膠手套'),
  ('綠色防水乳膠手套', 'GD_6375', '柔軟的棉紗乳膠手套保護纖細的雙手免受磨損、熱、割傷', 100, 30, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_6375.jpg', '乳膠手套'),
  ('粉紅色防水乳膠手套', 'GD_2519', '柔軟的棉紗乳膠手套保護纖細的雙手免受磨損、熱、割傷', 100, 30, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_2519.jpg', '乳膠手套'),
  ('紅色防水乳膠手套', 'GD_9087', '柔軟的棉紗乳膠手套保護纖細的雙手免受磨損、熱、割傷', 100, 30, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_9087.jpg', '乳膠手套'),
  ('多日型山刷毛手套', 'GD_3641', '採用刷毛材質，提供手部保暖與柔軟觸感', 100, 30, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_3641.jpg', '時款手套'),
  ('重型手套', 'GD_3720', '經重型用用途與有效的手套，專業的材質提供更好的抓握，還有泡棉增加防護度。', 100, 30, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_3720.jpg', '時款手套'),
  ('可調控螢幕防護手套', 'GD_0196', '腕墊手套採用兩種材質對製成；手背上方的刷毛布料舒適保護細緻，內側的透氣布為顆粒的水蒸氣。', 100, 90, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_0196.jpg', '時款手套'),
  ('氯丁橡膠防護手套', 'GD_2834', '這款手套可在控制的情況下保護雙手，避免刮傷造成的損傷，採用絨感柔軟的無氯丁橡膠，兩片軟軟設計，讓兩手戴著自如', 100, 250, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_2834.jpg', '時款手套'),
  ('掌中自行車手套', 'GD_4268', '這款自行車手套可在戶外操作靈活的抓握，採用的透氣布，柔軟的耐磨材料，防滑的設計，讓您的雙手自如', 150, 150, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_4268.jpg', '時款手套'),
  ('可調節保暖手套', 'GD_1950', '面料柔軟舒適防滑，保暖效果好，有優質皮革面料，保暖舒適，柔軟耐磨', 100, 120, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_1950.jpg', '時款手套'),
  ('100個棉絨棉紗勞工手套（每包12對）', 'GD_8503', '應用範圍廣泛：個人防護裝備', 100, 90, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_8503.jpg', '勞動手套'),
  ('100個棉絨棉紗勞工手套（每包12對）', 'GD_6417', '應用範圍廣泛：個人防護裝備', 100, 80, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_6417.jpg', '勞動手套'),
  ('100個棉絨棉紗勞工手套（每包12對）', 'GD_2395', '應用範圍廣泛：個人防護裝備', 100, 80, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_2395.jpg', '勞動手套'),
  ('100個黃色防滑手套', 'GD_9762', '應用範圍廣泛：個人防護裝備', 100, 200, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_9762.jpg', '勞動手套'),
  ('100個黑方防滑手套', 'GD_3084', '應用範圍廣泛：個人防護裝備', 100, 150, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_3084.jpg', '勞動手套'),
  ('100個工作防滑手套', 'GD_7146', '應用範圍廣泛：個人防護裝備', 100, 250, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_7146.jpg', '勞動手套'),
  ('蜂窩黑色流體手套', 'GD_5629', '適合最喜歡的戶外滑雪活動：耐磨且柔軟的皮革、擋當的手筒、貼心的設計，讓你更靈活。', 100, 699, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_5629.jpg', '運動手套'),
  ('白色成人保暖滑雪手套', 'GD_0873', '這款最服適的雪蛙手套，舒適仿造手裹裏，這款舒適的手套都不錯，讓您戶外運動並維持我於所有的手套。', 100, 250, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_0873.jpg', '運動手套'),
  ('黑色成人滑雪手套', 'GD_4915', '這款覆有防水透氣膜和輕量填充物的手套可提供基本的保暖效果，且外型十分百搭，可在滑雪時及滑雪後保護您的雙手免受寒冷。', 100, 150, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_4915.jpg', '運動手套'),
  ('珍珠灰成人防風滑雪手套', 'GD_8250', '這款覆有防水透氣膜和輕量填充物的手套可提供基本的保暖效果，且外型十分百搭，可在滑雪時及滑雪後保護您的雙手免受寒冷。', 100, 150, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_8250.jpg', '運動手套'),
  ('黑色成人柔軟滑雪手套', 'GD_1537', '這款手套以高品質材質製成，結合優質軟款風皮革，保暖防水，同時兼顧靈活性、精準度與耐用性。袖口彈性設計，穿脫更方便。', 100, 450, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_1537.jpg', '運動手套'),
  ('白色成人保暖滑雪手套', 'GD_6802', '這款是反覆的高級，對於做相當重要，這款搭配的手套都不錯，讓您戶外運動並維持我於所有的手套。', 100, 250, 'https://0ec90b57d6e95fcbda19832f.supabase.co/storage/v1/object/public/guardnar/GD_6802.jpg', '運動手套')
ON CONFLICT (sku) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  quantity = EXCLUDED.quantity,
  price = EXCLUDED.price,
  photo_url = EXCLUDED.photo_url,
  category = EXCLUDED.category;
