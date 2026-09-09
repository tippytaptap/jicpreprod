/**
 * ============================================================
 *  NAVIGATION  —  src/content/nav.js
 * ============================================================
 *  Primary navigation plus contextual sub-tabs.
 * ============================================================
 */

export const NAV_GROUPS = [
  { name: 'Home', path: '/', children: [] },
  {
    name: 'About', path: '/about', children: [
      { name: 'About Us', path: '/about' },
      { name: 'Meet the Team', path: '/team' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Financial History', path: '/financial-history' },
    ],
  },
  {
    name: 'Services', path: '/services', children: [
      { name: 'All Services', path: '/services' },
      { name: 'Funeral Services', path: '/services#funeral' },
      { name: 'Nikah', path: '/services#marriage' },
      { name: 'Community', path: '/services#community' },
    ],
  },
  {
    name: 'Projects', path: '/projects', children: [
      { name: 'Overview', path: '/projects' },
      { name: 'Masjid Extension', path: '/projects#masjid-extension' },
      { name: 'Update Gallery', path: '/projects#update-gallery' },
      { name: 'Funeral Service', path: '/projects#funeral-service' },
      { name: 'Madrassah Project', path: '/projects#madrassah-project' },
      { name: 'Community Hall', path: '/projects#community-hall' },
      { name: 'Main Prayer Hall', path: '/projects#main-prayer-hall' },
    ],
  },
  {
    name: 'Prayer Times', path: '/prayer-times', children: [
      { name: 'Today', path: '/prayer-times' },
      { name: 'Monthly', path: '/prayer-times#monthly' },
      { name: 'Jummah', path: '/prayer-times#jummah' },
    ],
  },
  {
    name: 'Madrassah', path: '/madrassah', children: [
      { name: 'Overview', path: '/madrassah' },
      { name: 'Classes & Courses', path: '/madrassah#classes' },
      { name: 'Special Courses', path: '/madrassah#special-courses' },
      { name: 'Enrollment', path: '/madrassah#enrollment' },
    ],
  },
  {
    name: 'Youth', path: '/youth', children: [
      { name: 'Youth Overview', path: '/youth' },
      { name: "I'tikaf", path: '/youth#itikaf' },
      { name: 'Activities', path: '/youth#activities' },
      { name: 'Youth Courses', path: '/madrassah#special-courses' },
    ],
  },
];

// Kept for existing components that expect a flat list.
export const NAV_ITEMS = [
  ...NAV_GROUPS.map(({ name, path }) => ({ name, path })),
  { name: 'Financial History', path: '/financial-history' },
  { name: 'Meet the Team', path: '/team' },
  { name: 'Contact Us', path: '/contact' },
];
