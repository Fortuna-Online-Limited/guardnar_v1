/*
# Create the `_guardnar_products` catalogue table

1. New Tables
- `_guardnar_products` is a branded copy of the existing public product catalogue.
- It keeps the existing product columns: `id`, `title`, `sku`, `description`, `quantity`, `price`, `photo_url`, `category`, and `created_at`.

2. Data
- Copies all existing product rows from `public.products`.
- Re-running this migration synchronises rows by the unique `sku` without deleting existing data.

3. Security
- Enables row-level security on `_guardnar_products`.
- Grants only SELECT access to the public `anon` and `authenticated` roles.
- Adds a public read policy because this website has no sign-in screen.
- Explicitly revokes browser insert, update, and delete access.

4. Important notes
- The original `public.products` table is retained as a compatibility copy so existing integrations are not broken.
- The website is switched to `_guardnar_products`; future catalogue changes should update this table.
*/

CREATE TABLE IF NOT EXISTS public._guardnar_products (
  LIKE public.products INCLUDING ALL
);

ALTER TABLE public._guardnar_products ENABLE ROW LEVEL SECURITY;

REVOKE INSERT, UPDATE, DELETE ON public._guardnar_products FROM anon, authenticated;
GRANT SELECT ON public._guardnar_products TO anon, authenticated;

DROP POLICY IF EXISTS "Public can view guardnar products" ON public._guardnar_products;
CREATE POLICY "Public can view guardnar products"
ON public._guardnar_products FOR SELECT
TO anon, authenticated
USING (true);

INSERT INTO public._guardnar_products (id, title, sku, description, quantity, price, photo_url, category, created_at)
SELECT id, title, sku, description, quantity, price, photo_url, category, created_at
FROM public.products
ON CONFLICT (sku) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  quantity = EXCLUDED.quantity,
  price = EXCLUDED.price,
  photo_url = EXCLUDED.photo_url,
  category = EXCLUDED.category;
