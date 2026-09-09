import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CalendarDays, Play, Radio, Users, Building2, ArrowRight, Megaphone } from 'lucide-react';
import MosqueIcon from '@/components/icons/MosqueIcon';
import JamatiaLogo from '@/components/shell/JamatiaLogo';
import { IMAGES } from '@/content/images';
import { EVENTS_LIST } from '@/content/pages/home';
import { SITE } from '@/content/site';
import { supabase } from '@/lib/supabaseClient';

function youtubeEmbedUrl(raw){
  if(!raw) return null;
  try{
    const u=new URL(raw);
    if(u.hostname==='youtu.be') return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    const id=u.searchParams.get('v') || (u.pathname.startsWith('/live/')?u.pathname.split('/')[2]:null);
    return id?`https://www.youtube.com/embed/${id}`:null;
  }catch{return null;}
}

function useHomeLiveContent(){
  const [events,setEvents]=useState([]);
  const [announcement,setAnnouncement]=useState(null);
  const [livestream,setLivestream]=useState(null);
  useEffect(()=>{
    const now=new Date().toISOString();
    const today=now.slice(0,10);
    Promise.all([
      supabase.from('events').select('*').eq('published',true).gte('event_date',today).order('event_date',{ascending:true}).limit(4),
      supabase.from('announcements').select('*').eq('published',true).lte('starts_at',now).order('created_at',{ascending:false}).limit(6),
      supabase.from('livestream_settings').select('*').eq('id',1).maybeSingle(),
    ]).then(([e,a,l])=>{
      if(!e.error) setEvents(e.data||[]);
      if(!a.error) setAnnouncement((a.data||[]).find(x=>!x.expires_at||x.expires_at>now)||null);
      if(!l.error) setLivestream(l.data||null);
    });
  },[]);
  return {events,announcement,livestream};
}

const cards=[
  {title:'Services',text:'Religious, educational and community services for all.',to:'/services',cta:'Explore Services',icon:MosqueIcon,img:IMAGES.servicesHero||IMAGES.homeHero},
  {title:'Projects',text:'Building for a stronger future.',to:'/projects',cta:'View Projects',icon:Building2,img:IMAGES.projectsHero||IMAGES.homeHero},
  {title:'Youth',text:'Activities, programs and opportunities.',to:'/youth',cta:'Explore Youth',icon:Users,img:IMAGES.youthHero||IMAGES.homeHero},
  {title:'Madrassah',text:'Islamic education for the next generation.',to:'/madrassah',cta:'View Classes',icon:BookOpen,img:IMAGES.madrassahHero||IMAGES.homeHero},
];

export default function HomePage(){
  const {events,announcement,livestream}=useHomeLiveContent();
  const liveUrl = livestream?.stream_url || SITE.socials.youtube;
  const embedUrl=useMemo(()=>youtubeEmbedUrl(livestream?.stream_url),[livestream]);
  const nextEvent=events[0] || {title:EVENTS_LIST?.[0]?.title||'Jummah Khutbah',displayDate:EVENTS_LIST?.[0]?.date||'Friday'};

  return <div className="jic-premium-home">
    <section className="jic-hero">
      <img src={IMAGES.homeHero} alt="Jamatia Islamic Centre" className="jic-hero-image"/>
      <div className="jic-hero-overlay"/>
      <div className="jic-hero-inner">
        <div className="jic-hero-mobile-logo"><JamatiaLogo/></div>
        <p className="jic-kicker">JAMATIA ISLAMIC CENTRE · BIRMINGHAM</p>
        <h1>A place for faith.<br/>A home for<br className="sm:hidden"/> community.</h1>
        <div className="jic-gold-rule"/>
        <p className="jic-hero-sub">Worship. Learn. Grow. Together.<br/><span>A stronger community for a brighter tomorrow.</span></p>
        <div className="jic-hero-buttons">
          <Link to="/contact" className="jic-primary-cta">Visit the Centre <ArrowRight size={18}/></Link>
          <a href={liveUrl} target="_blank" rel="noreferrer" className="jic-secondary-cta"><Play size={17} fill="currentColor"/> Watch Live</a>
        </div>
      </div>
    </section>

    {announcement&&<section className="jic-announcement"><Megaphone size={18}/><strong>{announcement.title}</strong><span>{announcement.body}</span></section>}

    <section className="jic-feature-grid">
      {cards.map(({title,text,to,cta,icon:Icon,img})=><Link to={to} className="jic-feature-card" key={title} style={{'--card-image':`url("${img}")`}}>
        <Icon className="jic-card-icon"/>
        <div className="jic-card-copy"><h2>{title}</h2><p>{text}</p><span>{cta} <ArrowRight size={17}/></span></div>
      </Link>)}
    </section>

    <section className="jic-event-strip">
      <div className="jic-event-label"><CalendarDays size={17}/><span>Friday Sermon</span></div>
      <div className="jic-event-main"><strong>1st Jamaat 1:30 PM · 2nd Jamaat 2:30 PM</strong><span>{nextEvent.displayDate || 'Every Friday'}</span></div>
      <Link to="/prayer-times#jummah" className="jic-event-arrow">›</Link>
    </section>

    {livestream?.enabled&&livestream.stream_url&&<section id="live" className="jic-live-section">
      <div className="jic-live-heading"><span><Radio size={15}/> Live</span><h2>{livestream.title||'JIC Live'}</h2></div>
      {embedUrl?<div className="jic-live-frame"><iframe src={embedUrl} title={livestream.title||'JIC Live'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>:<a className="jic-primary-cta" href={liveUrl} target="_blank" rel="noreferrer">Watch Live on YouTube</a>}
    </section>}

    <section className="jic-home-footer-strip">
      <div><span className="jic-bell">●</span><div><strong>Stay Updated</strong><small>Get the latest news and events</small></div></div>
      <div className="jic-socials"><a href={SITE.socials.youtube} target="_blank" rel="noreferrer">YouTube</a><a href={SITE.socials.facebook} target="_blank" rel="noreferrer">Facebook</a><a href={SITE.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></div>
    </section>
  </div>;
}
