import { SITE, SITE_URL, absoluteUrl, SOCIAL_PROFILES } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: SITE.logo,
    description: SITE.description,
    email: SITE.email,
    foundingDate: SITE.founded,
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 2,
      maxValue: 10,
    },
    sameAs: SOCIAL_PROFILES,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE.email,
      availableLanguage: ['English'],
    },
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    url: SITE_URL,
    image: SITE.logo,
    description: SITE.description,
    email: SITE.email,
    priceRange: '$$',
    areaServed: 'Worldwide',
    serviceType: [
      'Custom Web Development',
      'Tech Consulting',
      'Startup MVP Development',
      'SaaS Application Development',
      'Mobile App Development',
    ],
    sameAs: SOCIAL_PROFILES,
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE_URL },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** @param {{ name: string, url: string }[]} items */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** @param {{ title: string, slug: string, description: string }} service */
export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    url: absoluteUrl(`/service-single/${service.slug}`),
  };
}

/** @param {{ title: string, slug: string, description?: string, publishedAt?: string, image?: string }} post */
export function blogPostingSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.title,
    url: absoluteUrl(`/blog-single/${post.slug}`),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: SITE.logo,
      },
    },
    image: post.image || SITE.ogImage,
    mainEntityOfPage: absoluteUrl(`/blog-single/${post.slug}`),
  };
}

/** @param {{ question: string, answer: string }[]} faqs */
export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export const CONTACT_FAQS = [
  {
    question: 'What services does Ryzonix offer?',
    answer:
      'Ryzonix provides custom web development, tech consulting, startup MVPs, SaaS applications, mobile app development, and deployment & maintenance for startups, SMBs, and enterprises.',
  },
  {
    question: 'Who is Ryzonix a good fit for?',
    answer:
      'We work with founders validating an MVP, growing SaaS teams, and enterprises modernizing web platforms—anyone who needs responsive, secure, and scalable engineering.',
  },
  {
    question: 'How do I start a project with Ryzonix?',
    answer:
      'Email ryzonix50@gmail.com or use our contact form with your goals, timeline, and budget range. We reply with a short discovery call and a clear next-step proposal.',
  },
  {
    question: 'Does Ryzonix work remotely?',
    answer:
      'Yes. Ryzonix is remote-first and collaborates with clients worldwide using modern tooling, async updates, and secure delivery practices.',
  },
];
