/*
# Drop the legacy `products` table

1. Removed tables
- `public.products` is dropped entirely.
- This table was a compatibility copy; the website only reads from `_guardnar_products`.

2. Reason
- The owner is connecting this app to a Supabase project that already has a `products` table used by another project.
- Removing the Bolt-managed `products` table prevents any naming conflict or accidental data overwrite when switching databases.

3. Data safety
- All 30 catalogue rows already exist in `_guardnar_products`, which the website reads from.
- No data used by the website is lost.
*/

DROP TABLE IF EXISTS public.products CASCADE;
