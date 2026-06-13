/** Default proposal payload — maps 1:1 to ProposalDocument / ryzonix-proposal.html fields */

import { pickVisibleSections } from './sectionVisibility';

export const PROPOSAL_LOGO_SRC = '/images/logo.png';
export const PROPOSAL_LOGO_ALT = 'Ryzonix';
export const PROPOSAL_SIGNATURE_SRC = '/mysignature.png';

export const DEFAULT_PROPOSAL = {
  meta: {
    clientName: 'Wadiya Fashion',
    preparedBy: 'Ryzonix',
    proposalDate: '',
    validUntil: '',
    coverEyebrow: 'Project Proposal · Confidential',
    coverTitle: 'Website',
    coverTitleAccent: 'Development',
    coverTitleSuffix: 'Proposal',
    projectTitle: 'Wadiya Fashion – Website & eCommerce Development',
    coverSubtitle:
      'A tailored plan to help your brand build trust, attract customers, and grow sales online.',
    currency: 'PKR',
  },
  overview: {
    sectionLabel: 'Section 01',
    title: 'Project Overview',
    paragraphs: [
      'Thank you for considering Ryzonix for your online business. We are pleased to offer website development solutions for Wadiya Fashion, a modern fashion brand offering men\'s clothing, women\'s clothing, watches, jewelry, and fashion accessories.',
      'Our goal is to create a professional, mobile-friendly, and visually appealing website that helps your business build trust, attract customers, and increase sales.',
    ],
  },
  services: {
    sectionLabel: 'Section 02',
    title: 'Services & Scope',
    intro:
      'We offer a complete end-to-end development experience tailored to your brand and target audience.',
    items: [
      {
        icon: '🎨',
        title: 'Premium Store Design',
        description:
          'Fashion-focused layouts with strong product presentation, category browsing, and brand storytelling.',
      },
      {
        icon: '🛒',
        title: 'eCommerce Development',
        description:
          'Product listings, cart, checkout, customer accounts, and order management built for growth.',
      },
      {
        icon: '📱',
        title: 'Mobile Responsive Layout',
        description:
          'Pixel-perfect experience across desktop, tablet, and mobile for shoppers on any device.',
      },
      {
        icon: '⚡',
        title: 'SEO & Performance',
        description:
          'Fast-loading, SEO-friendly structure so customers can find and buy from you online.',
      },
      {
        icon: '💬',
        title: 'WhatsApp Integration',
        description:
          'Direct inquiry buttons so customers can reach you instantly from any page.',
      },
      {
        icon: '🔧',
        title: '30-Day Support',
        description:
          'Post-launch technical support including minor adjustments and guidance.',
      },
    ],
  },
  timeline: {
    sectionLabel: 'Section 03',
    title: 'Project Timeline',
    intro:
      'Estimated completion time for the eCommerce store scope.',
    totalDuration: '10–14 working days',
    phases: [
      {
        number: '01',
        week: 'Day 1–2',
        title: 'Discovery & Content Planning',
        description:
          'Confirm pages, categories, branding direction, and content requirements.',
      },
      {
        number: '02',
        week: 'Day 3–6',
        title: 'Design & Client Approval',
        description:
          'Homepage and key page designs shared for review and revision.',
      },
      {
        number: '03',
        week: 'Day 7–11',
        title: 'Development & Integration',
        description:
          'Store build, product setup, payments, forms, and third-party integrations.',
      },
      {
        number: '04',
        week: 'Day 12–14',
        title: 'Testing & Launch',
        description:
          'QA across devices, final client walkthrough, deployment, and handover.',
      },
    ],
  },
  pricing: {
    sectionLabel: 'Section 04',
    title: 'Investment & Pricing',
    intro:
      'All pricing is in Pakistani Rupees (PKR) unless stated otherwise.',
    lineItems: [
      { deliverable: 'Complete eCommerce Store', details: 'Shop, cart, checkout, accounts', price: '35,000' },
      { deliverable: 'Premium Hosting', details: '1 year included (Package 3)', price: 'Included' },
      { deliverable: 'Business Email Setup', details: 'Configuration assistance', price: 'Included' },
      { deliverable: 'SSL Certificate', details: 'Secure HTTPS setup', price: 'Included' },
      { deliverable: 'Basic SEO Optimization', details: 'On-page structure & metadata', price: 'Included' },
      { deliverable: '30-Day Technical Support', details: 'Minor fixes & guidance', price: 'Included' },
    ],
    totalLabel: 'Total Project Investment',
    total: 'PKR 35,000',
    paymentNote:
      '30% advance to start · 40% at design approval · 30% before final handover.',
  },
  terms: {
    sectionLabel: 'Section 05',
    title: 'Terms & Conditions',
    items: [
      'This proposal is valid for 30 days from the date of issue.',
      'Timeline is subject to content, images, and client approvals.',
      'Client is responsible for providing product data, images, and brand assets on time.',
      'Scope is limited to what is described in this document. Additional features will be quoted separately.',
      'Hosting and domain renewal after included period are the client\'s responsibility unless agreed otherwise.',
      'Ryzonix may showcase the project in its portfolio unless the client requests otherwise in writing.',
    ],
  },
  signature: {
    title: 'Acceptance & Sign-Off',
    intro:
      'By signing below, both parties agree to the scope, pricing, timeline, and terms outlined in this proposal.',
    providerLabel: 'Ryzonix (Service Provider)',
    providerSignatory: 'Authorised Signatory · Ryzonix',
    clientLabel: 'Client (Project Owner)',
  },
  closing: {
    message:
      'We look forward to helping Wadiya Fashion establish a strong digital presence and grow its business online.',
    name: 'Muhammad Rashid Khan',
    role: 'Founder · Ryzonix',
    tagline: 'Website Development & Digital Solutions',
  },
  about: {
    sectionLabel: 'About Us',
    title: 'About Ryzonix',
    paragraphs: [
      'Ryzonix is a remote-first software house helping startups and businesses launch professional websites, eCommerce stores, and digital products.',
      'We combine clean design with reliable delivery — from first consultation to launch and ongoing support.',
    ],
    promise:
      'Every project is handled with the same care we would give our own business.',
    stats: [
      { value: '50+', label: 'Projects Delivered' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '5 Yrs', label: 'Industry Experience' },
    ],
  },
  footer: {
    brand: 'Ryzonix',
    tagline: 'ryzonix.pro · IT Services & IT Consulting',
    disclaimer: 'This document is confidential and intended solely for the named recipient.',
  },
};

/** Fill ISO dates when missing (today + 30 days valid-until) */
export function withProposalDates(data) {
  const today = new Date();
  const validUntil = new Date(today);
  validUntil.setDate(today.getDate() + 30);

  const fmt = (d) =>
    d.toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' });

  return {
    ...data,
    meta: {
      ...data.meta,
      proposalDate: data.meta.proposalDate || fmt(today),
      validUntil: data.meta.validUntil || fmt(validUntil),
    },
  };
}

/** Full sample proposal (all sections) for Load sample button */
export function getDefaultProposal() {
  return withProposalDates(JSON.parse(JSON.stringify(DEFAULT_PROPOSAL)));
}

/** Merge partial AI JSON over defaults — used for Load sample / previews */
export function normalizeProposal(data) {
  return buildProposal(data, { useDefaults: true });
}

/** Parse user JSON — only sections present in JSON are rendered */
export function parseProposalJson(raw) {
  const parsed = JSON.parse(raw);
  if (!parsed.meta?.clientName) {
    throw new Error('Missing required field: meta.clientName');
  }
  return buildProposal(parsed, { useDefaults: false });
}

function buildProposal(data, { useDefaults }) {
  const meta = {
    ...(useDefaults ? DEFAULT_PROPOSAL.meta : {}),
    ...data.meta,
  };

  const sectionInput = useDefaults ? { ...DEFAULT_PROPOSAL, ...data } : data;
  const sections = pickVisibleSections(sectionInput, useDefaults ? DEFAULT_PROPOSAL : {});

  return withProposalDates({
    meta,
    ...sections,
  });
}
