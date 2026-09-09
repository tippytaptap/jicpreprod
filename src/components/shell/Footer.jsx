import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { SITE } from '@/content/site';

const QUICK_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Prayer Times', to: '/prayer-times' },
  { label: 'Projects', to: '/projects' },
  { label: 'Madrassah', to: '/madrassah' },
  { label: 'Youth', to: '/youth' },
  { label: 'Gallery', to: '/projects/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="jic-site-footer jic-site-footer-compact">
      <div className="container mx-auto px-4 py-5 md:py-7">
        <div className="jic-footer-compact-grid">
          <nav className="jic-footer-links-inline" aria-label="Footer links">
            {QUICK_LINKS.map(({ label, to }) => <Link key={to} to={to}>{label}</Link>)}
          </nav>

          <div className="jic-footer-actions-compact">
            <div className="jic-footer-socials flex gap-2">
              {SITE.socials.facebook && <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18}/></a>}
              {SITE.socials.twitter && <a href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"><Twitter size={18}/></a>}
              {SITE.socials.instagram && <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18}/></a>}
              {SITE.socials.youtube && <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18}/></a>}
            </div>
            <Link to="/projects#donate" className="jic-footer-donate inline-flex">Donate</Link>
          </div>
        </div>

        <div className="jic-footer-bottom mt-4 flex flex-col gap-2 pt-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}</p>
          <div className="flex gap-4"><Link to="/privacy">Privacy</Link></div>
        </div>
      </div>
    </footer>
  );
}
