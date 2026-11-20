import React, { Fragment } from 'react';
import Link from 'next/link';
import SeoHead from '../../components/seo/SeoHead';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BrandBlobGlow from '../../components/icons/BrandBlobGlow';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import { faqPageSchema, serviceSchema, webPageSchema } from '../../lib/seo/schemas';
import { SITE } from '../../lib/seo/site';
import Services from '../../api/Services';
import Logo from '/public/images/logo.png';

const TITLE = `Software Development Company in Karachi | ${SITE.name}`;
const DESCRIPTION =
  'Ryzonix provides software development in Karachi, building custom web and mobile apps, SaaS platforms, MVPs, and cloud solutions for growing teams.';
const PAGE_PATH = '/karachi';

const SERVICE_CONTEXT = {
  'Web-Development':
    'Plan and build responsive websites, customer portals, and web applications around your product goals and existing systems.',
  'Tech-Consulting':
    'Get practical help with architecture, stack choices, security, performance, and technical roadmaps before committing to a build.',
  'Startup-MVPs':
    'Shape a focused first release, validate the core workflow, and leave room for the product to grow beyond its MVP.',
  'SaaS-Applications':
    'Build subscription products with maintainable application architecture, authentication, billing integrations, and observability.',
  'Mobile-App-Development':
    'Extend a web product to mobile with a consistent experience and APIs that work across the product.',
  'Deployment-Maintenance':
    'Plan deployment, monitoring, and ongoing improvements so a product remains supportable after launch.',
};

const KARACHI_FAQS = [
  {
    question: 'Does Ryzonix have an office in Karachi?',
    answer:
      'Ryzonix works remotely. This website does not list a public office in Karachi, and the team does not present itself as a local storefront.',
  },
  {
    question: 'Can a Karachi business work with Ryzonix remotely?',
    answer:
      'Yes. Ryzonix serves businesses in Karachi, Pakistan through remote project discovery, iterative delivery, and online reviews.',
  },
  {
    question: 'What software services are available to Karachi teams?',
    answer:
      'Services include web and custom software development, mobile apps, SaaS products, startup MVPs, IT consulting, deployment, and maintenance.',
  },
  {
    question: 'How does a remote project get started?',
    answer:
      'Share your goals, current stage, and timeline through the contact form or sales@ryzonix.pro. Ryzonix typically replies within one business day to discuss next steps.',
  },
  {
    question: 'Does Ryzonix work with clients outside Karachi?',
    answer:
      'Yes. Karachi is an important service market, and Ryzonix also works remotely with clients worldwide.',
  },
];

const PORTFOLIO_EXAMPLES = [
  {
    href: '/project-single/trading-automation-system',
    title: 'Trading Automation System',
    description:
      'A multi-account platform combining web interfaces, APIs, automation, and real-time updates.',
  },
  {
    href: '/project-single/speaksmart',
    title: 'SpeakSmart',
    description:
      'A real-time English conversation product integrating web technology, AI, and learning workflows.',
  },
  {
    href: '/project-single/pocket-coach-ai',
    title: 'Pocket Coach AI',
    description:
      'A product for developing business ideas, with conversational guidance and viability scoring.',
  },
];

const pageSchemas = [
  buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Karachi', path: PAGE_PATH },
  ]),
  webPageSchema({ name: TITLE, description: DESCRIPTION, path: PAGE_PATH }),
  serviceSchema({
    title: 'Remote software development and IT consulting for Karachi businesses',
    description: DESCRIPTION,
    serviceType: SITE.serviceTypes,
    path: PAGE_PATH,
  }),
  faqPageSchema(KARACHI_FAQS),
];

const KarachiPage = () => (
  <Fragment>
    <SeoHead
      title={TITLE}
      description={DESCRIPTION}
      keywords="software development company Karachi, web development company Karachi, IT consulting Karachi, software development services Karachi"
      canonicalPath={PAGE_PATH}
      jsonLd={pageSchemas}
    />
    <NavbarS2 hclass="wpo-site-header wpo-site-header-s4" Logo={Logo} />
    <main>
      {/* Hero Banner */}
      <section className="seo-hero-banner" aria-labelledby="karachi-page-title">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li className="active" aria-current="page">Karachi</li>
            </ol>
          </nav>
          <div className="section-eyebrow">
            <span className="eyebrow-badge">
              <span className="eyebrow-dot"></span> Remote-First · Karachi &amp; Worldwide
            </span>
          </div>
          <h1 id="karachi-page-title" className="hero-h1">
            Software Development Company in <span>Karachi</span>
          </h1>
          <p className="hero-lead">
            Ryzonix is a remote-first software development company serving businesses in Karachi and across
            Pakistan. We work with startups, small businesses, and established teams around the world to turn
            product plans into websites, custom software, mobile apps, and SaaS products.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="theme-btn" title="Discuss a software project with Ryzonix">
              <span>Discuss your project</span>
              <i className="ti-arrow-top-right" aria-hidden="true"></i>
            </Link>
            <Link href="/project" className="theme-link" title="Explore Ryzonix portfolio">
              <span>View Case Studies</span>
              <i className="ti-arrow-top-right"></i>
            </Link>
          </div>
        </div>
        <div className="bg-shape">
          <BrandBlobGlow filterId="karachiHeroBlobFilter" opacity={0.25} />
        </div>
      </section>

      {/* Services for Karachi Teams */}
      <section className="seo-content-section section-padding" aria-labelledby="karachi-services-title">
        <div className="container">
          <div className="title scroll-text-animation" data-animation="fade_from_bottom">
            <div className="section-eyebrow">
              <span className="eyebrow-badge">
                <span className="eyebrow-dot"></span> Engineering Capabilities
              </span>
            </div>
            <h2 id="karachi-services-title" className="section-heading">
              Product &amp; Engineering Services for <span>Karachi Teams</span>
            </h2>
            <p className="seo-content-section__lead">
              Choose support for a specific release or bring Ryzonix in earlier to clarify the technical
              approach. Each service below links to its detailed scope.
            </p>
          </div>

          <div className="row g-4 seo-cards-row">
            {Services.slice(0, 6).map((service, idx) => (
              <div className="col-lg-6 col-12" key={service.slug}>
                <article className="seo-service-block">
                  <div className="seo-service-block__header">
                    <span className="seo-service-block__num">0{idx + 1}</span>
                    <span className="seo-service-block__badge">Service Scope</span>
                  </div>
                  <h3 className="seo-service-block__title">
                    <Link href={`/service-single/${service.slug}`} title={`${service.title} services from Ryzonix`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="seo-service-block__desc">{SERVICE_CONTEXT[service.slug]}</p>
                  <div className="seo-service-block__footer">
                    <Link
                      href={`/service-single/${service.slug}`}
                      className="theme-btn seo-service-block__cta"
                      title={`${service.title} services from Ryzonix`}
                    >
                      <span>Explore {service.title}</span>
                      <i className="ti-arrow-top-right" aria-hidden="true"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '24px' }}>
            Custom software work is scoped around the product rather than a fixed package. See all{' '}
            <Link href="/service">Ryzonix software development and IT services</Link> for the full service list.
          </p>
        </div>
      </section>

      {/* Remote Process & Client Profiles */}
      <section className="seo-content-section section-padding pt-0" aria-labelledby="karachi-process-title">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-12">
              <div className="seo-info-card h-100">
                <h2 id="karachi-process-title">How Remote Software Delivery Works</h2>
                <ul className="seo-service-block__benefits-list" style={{ marginTop: '16px' }}>
                  <li>
                    <span className="check-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="benefit-text">
                      <strong>Scope the problem:</strong> Share the product goal, target users, current stage, and constraints.
                    </span>
                  </li>
                  <li>
                    <span className="check-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="benefit-text">
                      <strong>Agree the next release:</strong> Practical milestones, technology direction, and fixed sprints before code is written.
                    </span>
                  </li>
                  <li>
                    <span className="check-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="benefit-text">
                      <strong>Build and review iteratively:</strong> Staging deployments, test builds, and transparent progress updates.
                    </span>
                  </li>
                  <li>
                    <span className="check-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="benefit-text">
                      <strong>Launch and support:</strong> CI/CD, cloud monitoring, and ongoing maintenance after the first release.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="seo-info-card h-100">
                <h2 id="karachi-fit-title">Who This Work Can Support</h2>
                <p>
                  The remote model suits Karachi founders shaping an MVP, small businesses improving customer
                  experience, SaaS teams adding product capabilities, and established organizations modernizing
                  legacy software.
                </p>
                <h3>Selected Portfolio Highlights</h3>
                <ul className="seo-service-block__benefits-list" style={{ marginTop: '14px' }}>
                  {PORTFOLIO_EXAMPLES.map((project) => (
                    <li key={project.href}>
                      <span className="check-icon" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="benefit-text">
                        <Link href={project.href}><strong>{project.title}</strong></Link>: {project.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '14px' }}>
                  <Link href="/project">Browse all Ryzonix portfolio projects</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="seo-content-section seo-faq section-padding pt-0" aria-labelledby="karachi-faq-title">
        <div className="container">
          <div className="title">
            <h2 id="karachi-faq-title" className="section-heading">
              Frequently Asked <span>Questions</span>
            </h2>
          </div>
          <dl className="seo-faq__list">
            {KARACHI_FAQS.map((faq) => (
              <div className="seo-faq__item" key={faq.question}>
                <dt>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="seo-content-section__cta">
            <h3 style={{ color: '#fff' }}>Ready to discuss a build?</h3>
            <p>
              Contact our team or email{' '}
              <a href={`mailto:${SITE.email}`} style={{ color: '#66E0A3' }}>{SITE.email}</a>.
            </p>
            <Link href="/contact" className="theme-btn" title="Contact Ryzonix">
              <span>Get in Touch</span>
              <i className="ti-arrow-top-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer hclass="footer-section section-padding pb-0" />
    <Scrollbar />
  </Fragment>
);

export default KarachiPage;
