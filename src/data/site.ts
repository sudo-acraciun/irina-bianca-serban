// Every user-facing string lives here, so a copy change is one edit.

/** Shown wherever the text for a section has not been written yet. */
export const TODO = '// todo - to be updated';

/** Shown after each mentee's name until their line is written. */
export const NOTE_TODO = '// todo add some text';

/** Stands in for every link whose real target has not been supplied yet. */
const PLACEHOLDER_URL = 'https://www.google.com/';

/** An entry that becomes a link once its `url` is known. */
export interface Entry {
  /** Plain text before the link, when only part of the entry is linked. */
  lead?: string;
  text: string;
  /** Rendered in italics after " x ", as the collaborators on a project. */
  partners?: string;
  /** Rendered after " - ". */
  note?: string;
  url?: string;
}

/** A url without a scheme is a page or file of this site, under the base path. */
export function href(url: string): string {
  return /^[a-z]+:/i.test(url) ? url : `${import.meta.env.BASE_URL}${url}`;
}

/** URL segment derived from a title, so a renamed project also moves its page. */
export function slugify(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const SITE = {
  name: 'Dr. Irina Bianca Serban',
  tagline: null as string | null,
  intro: null as string | null,
};

export const INTERESTS = [
  'Usability/ human factors of medical technology/ eHealth / wearable technology/ education/ decision-support systems',
  'Care pathway and service design/ research',
  'How humans interact with data in complex/intelligent systems',
  'Smart (AI) technology innovation and implementation (e.g., AI-enabled activity recognition or decision-support systems)',
  'Research study design/ coordination/ management',
];

export const EXPERIENCE = [
  'Direct and indirect user research, stakeholder identification',
  'Academic writing and publication (incl. lit reviews, Scopus, Web of Science)',
  'Documentation',
  'Stakeholder management (multidisciplinary, multicultural)',
  'Project management and coordination (incl. both research and scrum/ agile workflows)',
  'Study and protocol design',
  'Creative user research methods and strategy creation',
  'Data collection and analysis (qual:..., quant:..., multimedia, triangulation)',
  'Present complex insights to various audiences',
  'Transforming insights into actionable product/ service initiatives',
  'Deriving and defining requirements for intelligent, complex systems (AI, IoT, hybrid systems)',
  'Prototype design and development, including software development',
];

const projectGroups: { title: string; items: Entry[] }[] = [
  {
    title: 'I4H x TUE',
    items: [
      { text: 'Human Factors specialist and deliverable owner', partners: 'I4H international consortium' },
      {
        text: 'Patient monitoring and clinical workflows in prehabilitation for cancer surgery',
        partners: 'MMC, Philips, Kinduct Canada',
      },
      { text: 'User compliance in wearable ECG patches', partners: 'TNO Holst Centre' },
      {
        text: 'Defining and prototyping remote cardiac rehabilitation care pathway and system',
        partners: 'MMC, MiBida',
      },
      {
        text: 'Remote lifestyle and health monitoring of professional football players',
        partners: 'PSV Eindhoven, XCo Canada',
      },
    ],
  },
  {
    title: 'MedApp Apotheek B.V.',
    items: [
      { text: 'User Experience/ User Interface Design Lead MedApp redesign' },
      { text: 'Apotheek Panel for the pharmacy team' },
      { text: 'MedApp V2 website' },
    ],
  },
  {
    title: 'Other projects',
    items: [
      { text: 'Brainport Connects – application for expat social cohesion x ClickNL Grant' },
      { text: 'POZE immersive gamified experience for festival goers – Effenaar' },
      {
        text: 'Dumbo – intelligent home system for ambient sound labelling into human activities x Honors Academy TUE',
      },
    ],
  },
];

/** Every project links to its own page under /projects/, titled with the link text. */
export const PROJECT_GROUPS = projectGroups.map((group) => ({
  title: group.title,
  items: group.items.map((item) => ({ ...item, url: `projects/${slugify(item.text)}` })),
}));

export const PUBLICATIONS = { text: 'All publications', url: 'publications' } satisfies Entry;
export const TALKS = { text: 'Talks & Presentations', url: 'talks' } satisfies Entry;

export const SIDEBAR_LINKS: Entry[] = [
  { text: 'Industry CV', url: PLACEHOLDER_URL },
  { text: 'Academic CV', url: PLACEHOLDER_URL },
  PUBLICATIONS,
  TALKS,
];

export const CONTACT: Entry[] = [
  { text: 'Email', url: 'mailto:irina.b.serban@gmail.com' },
  { text: 'LinkedIn', url: 'https://www.linkedin.com/in/irinabiancaserban/' },
  { text: 'Google Scholar', url: 'https://scholar.google.com/citations?user=joFAxnAAAAAJ&hl=en' },
];

export const SIDEBAR: { title: string; items: Entry[] }[] = [
  {
    title: 'Prizes',
    items: [
      { lead: '1st place Best Poster ', text: 'NOW ICT Open 2025', url: PLACEHOLDER_URL },
      { text: 'Innovation Award for I4H consortium ITEA 2024', url: PLACEHOLDER_URL },
    ],
  },
  {
    title: 'Grants',
    items: [
      { text: 'ITEA Inno4Health', url: PLACEHOLDER_URL },
      { text: 'ClickNL PPG toeslag', url: PLACEHOLDER_URL },
    ],
  },
  {
    // Each name links to the mentee's LinkedIn profile.
    title: 'Mentorship',
    items: [
      { text: 'Rosa', note: NOTE_TODO, url: PLACEHOLDER_URL },
      { text: 'Rick x 2', note: NOTE_TODO, url: PLACEHOLDER_URL },
      { text: 'Prehab', note: NOTE_TODO, url: PLACEHOLDER_URL },
      { text: 'Tessa', note: NOTE_TODO, url: PLACEHOLDER_URL },
      { text: 'Danique', note: NOTE_TODO, url: PLACEHOLDER_URL },
    ],
  },
  {
    title: 'Languages',
    items: [
      { text: 'Romanian native' },
      { text: 'English C2 professional' },
      {
        text: 'Dutch A2-B1 constantly improving, passed inburgering exams, in the process of acquiring Dutch citizenship',
      },
    ],
  },
  {
    title: 'Academic background',
    items: [
      { text: 'High school in Romania' },
      { text: "Bachelor's @ TUE" },
      { text: "Master's" },
      { text: 'PhD' },
    ],
  },
];
