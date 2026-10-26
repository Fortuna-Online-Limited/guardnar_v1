/*
# Restrict Guardnar product catalogue to read-only access

1. Modified table
- `public.products` keeps all existing product rows and columns unchanged.
- Removes browser insert, update and delete privileges from public roles.

2. Security
- `anon` and `authenticated` retain SELECT access for the public website.
- Public visitors cannot modify, replace or delete catalogue records through the Data API.
- The existing public SELECT row-level security policy remains the only allowed browser operation.

3. Important notes
- This migration does not delete or alter product data.
- Future catalogue changes must be performed by an authorised server-side or database administrator workflow.
*/

REVOKE INSERT, UPDATE, DELETE ON public.products FROM anon, authenticated;
