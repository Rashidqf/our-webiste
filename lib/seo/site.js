/** Central SEO / brand constants for Ryzonix */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.ryzonix.pro';

export const SITE = {
  name: 'Ryzonix',
  legalName: 'Ryzonix',
  tagline: 'Your digital partner for responsive, secure, and scalable websites.',
  description:
    'Ryzonix delivers custom web development, SaaS apps, startup MVPs, mobile apps, and IT consulting for startups, SMBs, and enterprises.',
  email: 'ryzonix50@gmail.com',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  ogImage: `${SITE_URL}/images/logo.png`,
  locale: 'en_US',
  founded: '2025',
  employees: '2-10',
  industry: 'IT Services & IT Consulting',
  locationLabel: 'Remote-first · Worldwide',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61578278572030',
    instagram: 'https://www.instagram.com/ryz0nix/',
    linkedin: 'https://www.linkedin.com/company/ryzonix/',
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

export const SOCIAL_PROFILES = Object.values(SITE.social);

export const titleSuffix = 'Ryzonix – Web Development & IT Consulting';

/** @param {string} pageTitle e.g. "Services" */
export function formatTitle(pageTitle) {
  return `${pageTitle} | ${titleSuffix}`;
}

/** Normalize paths for canonical URLs (no trailing slash except root). */
export function normalizeCanonicalPath(path = '/') {
  if (!path || path === '/') return '/';
  const withLeading = path.startsWith('/') ? path : `/${path}`;
  return withLeading.replace(/\/+$/, '') || '/';
}

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${normalizeCanonicalPath(path)}`;
}
