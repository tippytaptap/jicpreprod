/**
 * Primary navigation plus contextual sub-tabs.
 * Keep labels short enough to work on mobile and in the desktop mega menu.
 */

export const NAV_GROUPS = [
  { name: 'Home', path: '/', children: [] },
  {
    name: 'About', path: '/about', children: [
      { name: 'About Us', path: '/about' },
      { name: 'Meet the Team', path: '/team' },
      { name: 'Our History', path: '/about#history' },
      { name: 'Financial History', path: '/financial-history' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    name: 'Services', path: '/services', children: [
      { name: 'Services Overview', path: '/services' },
      { name: 'Daily Prayers', path: '/prayer-times' },
      { name: 'Jummah', path: '/prayer-times#jummah' },
      { name: 'Quran Classes', path: '/madrassah#classes' },
      { name: 'Community Services', path: '/services#community' },
      { name: 'Funeral Services', path: '/services#funeral' },
      { name: 'Nikah', path: '/services#marriage' },
      { name: 'Hall Booking', path: '/services#hall-booking' },
    ],
  },
  {
    name: 'Projects', path: '/projects', children: [
      { name: 'Projects Overview', path: '/projects' },
      { name: 'Masjid Extension', path: '/projects#masjid-extension' },
      { name: 'Main Prayer Hall', path: '/projects#main-prayer-hall' },
      { name: 'Wudu Area', path: '/projects#wudu-area' },
      { name: 'Community Hall', path: '/projects#community-hall' },
      { name: 'Madrassah Building', path: '/projects#madrassah-project' },
      { name: 'Current Appeals', path: '/projects#donate' },
      { name: 'Gallery', path: '/projects#update-gallery' },
      { name: 'How to Support', path: '/projects#donate' },
    ],
  },
  {
    name: 'Prayer Times', path: '/prayer-times', children: [
      { name: 'Today', path: '/prayer-times' },
      { name: 'Monthly Timetable', path: '/prayer-times#monthly' },
      { name: 'Jummah', path: '/prayer-times#jummah' },
    ],
  },
  {
    name: 'Madrassah', path: '/madrassah', children: [
      { name: 'About Madrassah', path: '/madrassah' },
      { name: 'Our Programs', path: '/madrassah#programs' },
      { name: 'Classes & Courses', path: '/madrassah#classes' },
      { name: 'Special Courses', path: '/madrassah#special-courses' },
      { name: 'Enrolment', path: '/madrassah#enrollment' },
      { name: 'Policies', path: '/madrassah#policies' },
      { name: 'Student Portal', path: '/madrassah#student-portal' },
    ],
  },
  {
    name: 'Youth', path: '/youth', children: [
      { name: 'Youth Overview', path: '/youth' },
      { name: 'Youth Projects', path: '/youth#projects' },
      { name: 'Activities', path: '/youth#activities' },
      { name: "I'tikaf Program", path: '/youth#itikaf' },
      { name: 'Trips & Events', path: '/youth#trips-events' },
      { name: 'Volunteering', path: '/youth#volunteering' },
      { name: 'Classes & Skills', path: '/youth#classes-skills' },
    ],
  },
];

export const NAV_ITEMS = [
  ...NAV_GROUPS.map(({ name, path }) => ({ name, path })),
  { name: 'Financial History', path: '/financial-history' },
  { name: 'Meet the Team', path: '/team' },
  { name: 'Contact Us', path: '/contact' },
];
