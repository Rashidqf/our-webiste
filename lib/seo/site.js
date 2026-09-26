const {
  CANONICAL_ORIGIN,
  normalizeSiteOrigin,
  normalizeCanonicalPath,
  absoluteUrl: buildAbsoluteUrl,
} = require('./siteUrl.cjs');

export const SITE_URL = normalizeSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL);

export const SITE = {
  name: 'Ryzonix',
  legalName: 'Ryzonix',
  tagline: 'Your digital partner for responsive, secure, and scalable websites.',
  description:
    'Remote-first software development and IT consulting for Karachi, Pakistan and worldwide. Ryzonix builds custom software, websites, SaaS, mobile apps and MVPs.',
  email: 'sales@ryzonix.pro',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  ogImage: `${SITE_URL}/images/logo.png`,
  locale: 'en_US',
  founded: '2025',
  employees: '2-10',
  industry: 'IT Services & IT Consulting',
  locationLabel: 'Remote-first · Serving Karachi, Pakistan and worldwide',
  serviceAreas: ['Karachi, Pakistan', 'Worldwide'],
  serviceTypes: [
    'Custom Software Development',
    'Web Development',
    'IT Consulting',
    'Startup MVP Development',
    'SaaS Application Development',
    'Mobile App Development',
    'Deployment and Maintenance',
  ],
  social: {
    facebook: 'https://www.facebook.com/ryzonix.pro',
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

export const titleSuffix = `${SITE.name} – Web Development & IT Consulting`;

/** @param {string} pageTitle e.g. "Services" */
export function formatTitle(pageTitle) {
  return `${pageTitle} | ${titleSuffix}`;
}

export { normalizeSiteOrigin, normalizeCanonicalPath, CANONICAL_ORIGIN };

export function absoluteUrl(path = '/') {
  return buildAbsoluteUrl(SITE_URL, path);
}
