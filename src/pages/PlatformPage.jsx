import React from 'react';
import { ArrowRight, BookOpen, Check, HeartHandshake, MessageCircle, Play, ShieldCheck, Sparkles, Users, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PLATFORM_FEATURES } from '@/content/platform';

const iconFor = (title) => ({
  'Live lessons': Video,
  'My family': Users,
  'Courses & Madrassah': BookOpen,
  'Giving & events': HeartHandshake,
  'Certificates & services': ShieldCheck,
  'Smart administration': Sparkles,
}[title] || Sparkles);

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[#07111b] px-6 pb-20 pt-16 text-white md:px-12 lg:px-20">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#d9aa43]/40 bg-[#d9aa43]/10 px-4 py-2 text-sm text-[#f0cf78]">JIC community platform</span>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">One place for prayer, learning and community.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">A real Jamatia Islamic Centre app for families, learners, teachers, volunteers and administrators. Start on the website, then carry the same account into iPhone and Android.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portal" className="inline-flex items-center gap-2 rounded-full bg-[#f0cf78] px-5 py-3 font-semibold text-[#07111b]">Explore the portal <ArrowRight size={17} /></Link>
              <Link to="/madrassah" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white">View learning <BookOpen size={17} /></Link>
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ['Public', 'Prayer times, Courses, Madrassah, Janazah, Donate and Live.'],
              ['Your account', 'My family, My courses, bookings, messages and receipts.'],
              ['JIC workspaces', 'Teacher, volunteer and admin tools appear only when authorised.'],
            ].map(([title, text]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[.07] p-5 backdrop-blur"><p className="font-semibold text-[#f0cf78]">{title}</p><p className="mt-2 text-sm leading-6 text-white/70">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-2xl"><p className="font-semibold uppercase tracking-[.18em] text-primary">Built around real JIC tasks</p><h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">Useful features, in the right place.</h2><p className="mt-4 text-muted-foreground">The public website stays simple. Once someone signs in, their account opens the parts they are allowed to use.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_FEATURES.map((feature) => { const Icon = iconFor(feature.title); return <article key={feature.title} className="group rounded-3xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon size={21} /></span><span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{feature.tag}</span></div><h3 className="mt-5 text-xl font-semibold">{feature.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{feature.text}</p><div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">See how it works <ArrowRight size={15} className="transition group-hover:translate-x-1" /></div></article>; })}
        </div>
      </section>

      <section className="border-y bg-muted/30 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div><p className="font-semibold uppercase tracking-[.18em] text-primary">Ready for every screen</p><h2 className="mt-3 font-serif text-4xl tracking-tight">The website becomes the app foundation.</h2><p className="mt-4 leading-7 text-muted-foreground">We keep navigation, permissions, payments, notifications and records in one shared model. That lets us ship the responsive website first, then package the same experience as a progressive web app and native mobile apps.</p><ul className="mt-6 space-y-3">{['One account across website, iPhone and Android', 'Role-based access for parents, teachers and admins', 'Live lessons, reminders and messages designed for mobile', 'Secure Supabase policies remain the source of truth'].map((item) => <li key={item} className="flex items-start gap-3"><Check className="mt-1 shrink-0 text-primary" size={18} /><span>{item}</span></li>)}</ul></div>
          <div className="rounded-[2rem] bg-[#07111b] p-6 text-white shadow-xl"><div className="flex items-center justify-between"><div><p className="text-sm text-white/60">Live now</p><h3 className="mt-1 text-2xl font-semibold">Weekly Tafseer</h3></div><span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-200">LIVE</span></div><div className="mt-6 aspect-video rounded-2xl bg-gradient-to-br from-[#173441] to-[#07111b] p-5"><div className="flex h-full items-end justify-between"><div><p className="text-sm text-white/60">Ustadh Yusuf · 12 learners</p><p className="mt-1 text-lg">Private lesson room</p></div><span className="grid h-12 w-12 place-items-center rounded-full bg-[#f0cf78] text-[#07111b]"><Play size={18} fill="currentColor" /></span></div></div><div className="mt-5 flex items-center justify-between text-sm text-white/60"><span className="inline-flex items-center gap-2"><MessageCircle size={16} /> Chat enabled</span><span>Attendance automatic</span></div></div>
        </div>
      </section>
    </div>
  );
}
