/** Central SEO / brand constants for Ryzonix */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://ryzonix.pro';

export const SITE = {
  name: 'Ryzonix',
  legalName: 'Ryzonix',
  tagline: 'Your digital partner for responsive, secure, and scalable websites.',
  description:
    'Ryzonix delivers custom web development, SaaS apps, startup MVPs, mobile apps, and IT consulting for startups, SMBs, and enterprises.',
  email: 'hello@ryzonix.com',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  ogImage: `${SITE_URL}/images/logo.png`,
  locale: 'en_US',
  founded: '2025',
  employees: '2-10',
  industry: 'IT Services & IT Consulting',
  social: {
    linkedin: 'https://www.linkedin.com/company/ryzonix',
    facebook: 'https://www.facebook.com/profile.php?id=61578278572030',
  },
  defaultKeywords: [
    'Ryzonix',
    'web development',
    'IT consulting',
    'custom websites',
    'SaaS development',
    'startup MVP',
    'mobile app development',
  ],
};

export const titleSuffix = 'Ryzonix – Web Development & IT Consulting';

/** @param {string} pageTitle e.g. "Services" */
export function formatTitle(pageTitle) {
  return `${pageTitle} | ${titleSuffix}`;
}

export function absoluteUrl(path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
