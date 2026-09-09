import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Facebook, Instagram, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import JamatiaLogo from '@/components/shell/JamatiaLogo';
import { SITE } from '@/content/site';

const TikTokIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94H10.5c-.45-.48-.88-.98-1.22-1.59-.75-1.31-1.09-2.77-1.2-4.27-.02-1.46-.03-2.92-.02-4.38-.01-1.51.32-2.98 1.05-4.28.72-1.29 1.8-2.3 3.08-2.95V.02z" />
  </svg>
);

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Prayer Times', to: '/prayer-times' },
  { label: 'Madrassah', to: '/madrassah' },
  { label: 'Youth', to: '/youth' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="jic-site-footer">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="jic-footer-logo" aria-label="Jamatia Islamic Centre home">
              <JamatiaLogo />
            </Link>
            <p className="jic-footer-muted mt-4 max-w-sm">{SITE.tagline}</p>
            <div className="jic-footer-socials mt-5 flex gap-3">
              <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={19} /></a>
              <a href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={19} /></a>
              <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={19} /></a>
              <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={19} /></a>
              <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="jic-footer-heading">Explore</h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map(({ label, to }) => <li key={to}><Link className="jic-footer-link" to={to}>{label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="jic-footer-heading">Contact</h3>
            <div className="mt-4 space-y-4">
              <div className="jic-footer-contact"><MapPin size={18}/><span>{SITE.address.full}</span></div>
              <div className="jic-footer-contact"><Phone size={18}/><a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a></div>
            </div>
          </div>

          <div>
            <h3 className="jic-footer-heading">Opening Hours</h3>
            <div className="jic-footer-contact mt-4"><Clock size={18}/><span>{SITE.hours}</span></div>
            <Link to="/projects" className="jic-footer-donate mt-6 inline-flex">Donate to JIC</Link>
          </div>
        </div>

        <div className="jic-footer-bottom mt-9 flex flex-col gap-3 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-4"><Link to="/privacy">Privacy</Link><Link to="/admin">Admin</Link></div>
        </div>
      </div>
    </footer>
  );
}
