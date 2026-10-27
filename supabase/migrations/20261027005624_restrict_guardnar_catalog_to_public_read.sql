/*
# Restrict Guardnar catalogue to public read-only access

1. Changes
- Removes INSERT, UPDATE, and DELETE privileges from the public anon and authenticated roles on `_guardnar_products`.
- Keeps SELECT access for both roles so the website can display catalogue cards and detail pages.

2. Security
- The public catalogue is intentionally readable without sign-in.
- Browser visitors cannot alter catalogue data.
*/

REVOKE INSERT, UPDATE, DELETE ON public._guardnar_products FROM anon, authenticated;
GRANT SELECT ON public._guardnar_products TO anon, authenticated;