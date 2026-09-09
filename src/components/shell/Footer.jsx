import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { SITE } from '@/content/site';

const TikTokIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94H10.5c-.45-.48-.88-.98-1.22-1.59-.75-1.31-1.09-2.77-1.2-4.27-.02-1.46-.03-2.92-.02-4.38-.01-1.51.32-2.98 1.05-4.28.72-1.29 1.8-2.3 3.08-2.95V.02z" />
  </svg>
);

const QUICK_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Prayer Times', to: '/prayer-times' },
  { label: 'Projects', to: '/projects' },
  { label: 'Madrassah', to: '/madrassah' },
  { label: 'Youth', to: '/youth' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="jic-site-footer jic-site-footer-compact">
      <div className="container mx-auto px-4 py-6 md:py-7">
        <div className="jic-footer-compact-grid">
          <div className="jic-footer-contact-block">
            <Link to="/contact" className="jic-footer-heading jic-footer-contact-title">Contact Us</Link>
            <p className="mt-2 text-sm opacity-70">Address, phone, email, directions and enquiries.</p>
          </div>

          <nav className="jic-footer-links-inline" aria-label="Footer links">
            {QUICK_LINKS.map(({ label, to }) => <Link key={to} to={to}>{label}</Link>)}
          </nav>

          <div className="jic-footer-actions-compact">
            <div className="jic-footer-socials flex gap-2">
              <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18}/></a>
              <a href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={18}/></a>
              <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18}/></a>
              <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18}/></a>
              <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon className="h-5 w-5"/></a>
            </div>
            <Link to="/projects#donate" className="jic-footer-donate inline-flex">Donate</Link>
          </div>
        </div>

        <div className="jic-footer-bottom mt-5 flex flex-col gap-2 pt-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}</p>
          <div className="flex gap-4"><Link to="/privacy">Privacy</Link></div>
        </div>
      </div>
    </footer>
  );
}
