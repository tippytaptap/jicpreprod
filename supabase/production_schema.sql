-- JIC production CMS foundation
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'viewer' check (role in ('viewer','teacher','editor','admin')),
  display_name text,
  created_at timestamptz not null default now()
);
create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text,
  updated_at timestamptz not null default now()
);
create table if not exists public.prayer_times (
  id uuid primary key default gen_random_uuid(),
  prayer_date date unique not null,
  fajr text, sunrise text, dhuhr text, asr text, maghrib text, isha text,
  jummah_1 text, jummah_2 text,
  updated_at timestamptz not null default now()
);
create table if not exists public.events (
 id uuid primary key default gen_random_uuid(), title text not null, description text, starts_at timestamptz,
 poster_url text, published boolean not null default false, created_at timestamptz not null default now()
);
create table if not exists public.pages (
 id uuid primary key default gen_random_uuid(), section text not null, slug text unique not null, title text not null,
 body text, sort_order int default 0, published boolean default true, created_at timestamptz default now(), updated_at timestamptz default now()
);
create table if not exists public.media_links (
 id uuid primary key default gen_random_uuid(), kind text not null, title text, url text not null, active boolean default true, created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.site_content enable row level security;
alter table public.prayer_times enable row level security;
alter table public.events enable row level security;
alter table public.pages enable row level security;
alter table public.media_links enable row level security;

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$
 select exists(select 1 from public.profiles where id=auth.uid() and role='admin');
$$;

create policy "public content read" on public.site_content for select using (true);
create policy "admin content write" on public.site_content for all using (public.is_admin()) with check (public.is_admin());
create policy "public timetable read" on public.prayer_times for select using (true);
create policy "admin timetable write" on public.prayer_times for all using (public.is_admin()) with check (public.is_admin());
create policy "public events read" on public.events for select using (published=true or public.is_admin());
create policy "admin events write" on public.events for all using (public.is_admin()) with check (public.is_admin());
create policy "public pages read" on public.pages for select using (published=true or public.is_admin());
create policy "admin pages write" on public.pages for all using (public.is_admin()) with check (public.is_admin());
create policy "public media read" on public.media_links for select using (active=true or public.is_admin());
create policy "admin media write" on public.media_links for all using (public.is_admin()) with check (public.is_admin());
create policy "profile self read" on public.profiles for select using (id=auth.uid() or public.is_admin());
create policy "admin profile write" on public.profiles for all using (public.is_admin()) with check (public.is_admin());
