# JIC Production Deployment

## Environment variables
Create a `.env` file locally or set these in your host:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Optional:

- `VITE_ITIKAAF_SHEETS_WEBHOOK_URL`

## Supabase
Run `supabase/production_schema.sql` in Supabase SQL Editor. It creates the CMS, timetable, events, media, users/roles and RLS policies.

## Admin
Create the first user in Supabase Auth, then add the matching user to the app users/admin table as described in the schema. Admin access is protected by Supabase auth and role checks.

## Build

```bash
npm install
npm run build
```

Upload/deploy `dist/`.

## Hostinger SPA routing
`public/.htaccess` is copied into the build and routes client-side URLs back to `index.html`.

## Security
Never put a Supabase service-role key in the browser app. Only use the anon/publishable key in Vite environment variables. Keep service keys inside Supabase Edge Functions or server-side infrastructure.
