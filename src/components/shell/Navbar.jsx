import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, MapPin, Menu, Moon, Pause, Play, Sun, X, ChevronDown } from 'lucide-react';
import JamatiaLogo from '@/components/shell/JamatiaLogo';
import { NAV_ITEMS } from '@/content/nav';
import { SITE } from '@/content/site';
import { usePrayerTimes } from '@/components/sections/prayer-times/PrayerTimesLogic';
import { cn } from '@/lib/utils';

const PRAYERS = [['Fajr','fajr'],['Sunrise','sunrise'],['Dhuhr','dhuhr'],['Asr','asr'],['Maghrib','maghrib'],['Isha','isha']];
const shortTime = v => v && v !== 'N/A' ? String(v).replace(/^0/,'').replace(/\s?[AP]M$/i,'') : '—';

const safeGet = (key, fallback) => {
  try { return window.localStorage.getItem(key) ?? fallback; }
  catch { return fallback; }
};
const safeSet = (key, value) => {
  try { window.localStorage.setItem(key, value); } catch {}
};

export default function Navbar() {
  const { todaysTimes } = usePrayerTimes();
  const [menuOpen,setMenuOpen] = useState(false);
  const [theme,setTheme] = useState(() => safeGet('jic-theme', 'dark'));
  const [glass,setGlass] = useState(() => safeGet('jic-glass', 'on') !== 'off');
  const [playing,setPlaying] = useState(false);
  const [radioError,setRadioError] = useState(false);
  const audioRef = useRef(null);
  const streamUrl = import.meta.env.VITE_RADIO_STREAM_URL || SITE.radio?.streamUrl || '';

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', theme==='dark');
    document.documentElement.dataset.surface = glass ? 'glass':'solid';
    safeSet('jic-theme',theme);
    safeSet('jic-glass',glass?'on':'off');
  },[theme,glass]);

  useEffect(()=>()=>{ if(audioRef.current){audioRef.current.pause(); audioRef.current.src='';}},[]);

  const toggleRadio = async () => {
    if(!streamUrl) return;
    if(!audioRef.current){
      audioRef.current = new Audio(streamUrl);
      audioRef.current.preload='none';
      audioRef.current.addEventListener('playing',()=>{setPlaying(true);setRadioError(false);});
      audioRef.current.addEventListener('pause',()=>setPlaying(false));
      audioRef.current.addEventListener('error',()=>{setPlaying(false);setRadioError(true);});
    }
    try { playing ? audioRef.current.pause() : await audioRef.current.play(); }
    catch { setPlaying(false); setRadioError(true); }
  };

  return <header className="jic-header fixed inset-x-0 top-0 z-50">
    <div className="mx-auto max-w-[1500px] px-2 sm:px-4 pt-2">
      <div className="jic-glass jic-info-shell rounded-2xl overflow-hidden">
        <div className="jic-address"><MapPin size={16}/><span>Woodlands Rd · Birmingham · B11 4ER</span></div>
        <div className="jic-prayer-row">
          {PRAYERS.map(([label,key])=><div className="jic-prayer" key={key}><span>{label}</span><strong>{shortTime(todaysTimes?.[key])}</strong></div>)}
        </div>
        <button className={cn('jic-radio',playing&&'is-live')} onClick={toggleRadio}>
          {playing?<Pause size={15}/>:<Play size={15}/>}<span>JIC Radio</span><i className="live-dot"/><small>{radioError?'Retry':'Live'}</small>
        </button>
        <div className="jic-display-controls">
          <button onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?<Sun size={17}/>:<Moon size={17}/>}</button>
          <button onClick={()=>setGlass(v=>!v)}><span className={cn('glass-switch',glass&&'on')}><i/></span><span>Glass {glass?'On':'Off'}</span></button>
        </div>
      </div>

      <div className="jic-mainnav mt-2">
        <Link to="/" className="jic-brand" aria-label="Jamatia Islamic Centre home"><JamatiaLogo/></Link>
        <nav className="jic-desktop-nav">
          {NAV_ITEMS.slice(0,7).map(({name,path})=><NavLink key={path} to={path} className={({isActive})=>cn('nav-pill',isActive&&'active')}>{name}{['About','Services','Projects','Madrassah','Youth'].includes(name)&&<ChevronDown size={13}/>}</NavLink>)}
        </nav>
        <div className="jic-nav-actions">
          <Link to="/projects" className="donate-button"><Heart size={18}/><span>Donate</span></Link>
          <button className="header-icon" onClick={()=>setMenuOpen(v=>!v)} aria-label="Menu">{menuOpen?<X size={23}/>:<Menu size={23}/>}</button>
        </div>
      </div>

      <AnimatePresence>{menuOpen&&<motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="jic-mobile-menu jic-glass">
        <div className="jic-menu-logo"><JamatiaLogo/></div>
        {NAV_ITEMS.map(({name,path})=><NavLink key={path} to={path} onClick={()=>setMenuOpen(false)} className={({isActive})=>cn('jic-menu-link',isActive&&'active')}>{name}<span>›</span></NavLink>)}
        <Link to="/projects" onClick={()=>setMenuOpen(false)} className="jic-menu-donate"><Heart size={18}/> Donate</Link>
      </motion.div>}</AnimatePresence>
    </div>
  </header>;
}
