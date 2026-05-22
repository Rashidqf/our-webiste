import { formatTitle } from './site';

/** Static page meta (title, description 150–160 chars, keywords) */
export const PAGE_META = {
  home: {
    title: formatTitle('Custom Web Development Services'),
    description:
      'Ryzonix builds responsive, secure, and scalable websites, SaaS apps, and MVPs for startups and enterprises. Get a free consultation today.',
    keywords:
      'custom web development, IT consulting, SaaS development, startup MVP, mobile apps, Ryzonix, scalable websites',
    path: '/',
  },
  about: {
    title: formatTitle('About Us'),
    description:
      'Meet Ryzonix—a remote-first software house founded in 2025. We deliver clean code, secure architecture, and intuitive UX for growing brands.',
    keywords:
      'about Ryzonix, web development company, IT consulting team, software house, remote-first agency',
    path: '/about',
  },
  service: {
    title: formatTitle('Services'),
    description:
      'Explore Ryzonix services: custom web development, tech consulting, startup MVPs, SaaS apps, mobile apps, and deployment. Start your project.',
    keywords:
      'web development services, SaaS development, MVP development, mobile app development, tech consulting, Ryzonix services',
    path: '/service',
  },
  project: {
    title: formatTitle('Portfolio'),
    description:
      'See Ryzonix portfolio—SaaS platforms, AI products, FinTech automation, and web apps built with modern, scalable stacks. View case studies.',
    keywords:
      'web development portfolio, SaaS case studies, software projects, Ryzonix work, digital product examples',
    path: '/project',
  },
  contact: {
    title: formatTitle('Contact'),
    description:
      'Contact Ryzonix for web development, consulting, or MVP quotes. Email hello@ryzonix.com—we respond quickly to startup and enterprise inquiries.',
    keywords:
      'contact Ryzonix, web development quote, IT consulting inquiry, hire developers, project consultation',
    path: '/contact',
  },
  blog: {
    title: formatTitle('Blog'),
    description:
      'Insights on web development, SaaS architecture, MVPs, and IT consulting from the Ryzonix team. Practical guides for founders and product leaders.',
    keywords:
      'web development blog, SaaS tips, MVP guides, IT consulting articles, Ryzonix blog',
    path: '/blog',
  },
  pricing: {
    title: formatTitle('Pricing'),
    description:
      'Transparent engagement models for web development and consulting at Ryzonix. Find the right fit for your startup MVP or enterprise platform.',
    keywords:
      'web development pricing, consulting rates, MVP cost, Ryzonix pricing, software development packages',
    path: '/pricing',
  },
  team: {
    title: formatTitle('Team'),
    description:
      'Meet the Ryzonix team—engineers and consultants focused on responsive, secure, and scalable digital products for startups and enterprises.',
    keywords:
      'Ryzonix team, web developers, software consultants, IT services team',
    path: '/team',
  },
  notFound: {
    title: formatTitle('Page Not Found'),
    description: 'The page you requested could not be found. Return to Ryzonix home or contact us for web development and IT consulting.',
    keywords: 'Ryzonix, page not found',
    path: '/404',
    noindex: true,
  },
};
