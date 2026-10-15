export const PLATFORM_FEATURES = [
  { title: 'Live lessons', text: 'Private lesson rooms with attendance marked when a learner joins, chat, recordings and follow-up work.', tag: 'Education' },
  { title: 'My family', text: 'Parents can switch between children, see progress, homework, fees, reports and message the teacher.', tag: 'Families' },
  { title: 'Courses & Madrassah', text: 'Public course discovery, admissions, class dates, payments and a personal My courses area.', tag: 'Learning' },
  { title: 'Giving & events', text: 'Apple Pay, Google Pay, bank transfer, Gift Aid, registrations, reminders and transparent appeal progress.', tag: 'Community' },
  { title: 'Certificates & services', text: 'Nikah, Janazah and Ijazah workflows with signed documents and QR verification.', tag: 'Services' },
  { title: 'Smart administration', text: 'Applications, fees, absence alerts, tasks, approvals, role permissions and an audit trail in one workspace.', tag: 'Staff' },
];

export const PORTAL_ROLES = {
  family: {
    label: 'Parent / learner',
    title: 'Everything your family needs',
    summary: 'Attendance, progress, homework, fees and live lessons in one calm view.',
    actions: ['My family', 'My courses', 'Join live lesson', 'Message teacher'],
    stats: [['Attendance', '96%'], ['Next lesson', '12 min'], ['Fees', 'Paid']],
  },
  teacher: {
    label: 'Teacher',
    title: 'Your teaching day',
    summary: 'Open your assigned classes, take the register and share feedback without hunting through menus.',
    actions: ['Start live room', 'Take register', 'Assign homework', 'Add progress note'],
    stats: [['Classes today', '3'], ['Learners', '28'], ['Messages', '4']],
  },
  admin: {
    label: 'Administrator',
    title: 'Today at JIC',
    summary: 'A focused workspace for applications, finance, services, content and approvals.',
    actions: ['Review applications', 'Approve reminders', 'Manage people', 'Open audit trail'],
    stats: [['Applications', '6'], ['Tasks due', '3'], ['Approvals', '1']],
  },
};
