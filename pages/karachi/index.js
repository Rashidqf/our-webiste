import React, { Fragment } from 'react';
import Link from 'next/link';
import SeoHead from '../../components/seo/SeoHead';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import { faqPageSchema, serviceSchema, webPageSchema } from '../../lib/seo/schemas';
import { SITE } from '../../lib/seo/site';
import Services from '../../api/Services';
import Logo from '/public/images/logo.png';

const TITLE = `Software Development Company in Karachi | Remote-First ${SITE.name}`;
const DESCRIPTION =
  'Looking for a software development company in Karachi? Ryzonix works remotely with Karachi teams on custom software, web and mobile apps, SaaS, MVPs, and ongoing support.';
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
      <section className="seo-content-section section-padding" aria-labelledby="karachi-page-title">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">Karachi</span>
          </nav>
          <p className="hero-seo-tagline">Karachi, Pakistan · Remote-first · Worldwide</p>
          <h1 id="karachi-page-title" className="seo-content-section__title">
            Software Development Company in Karachi
          </h1>
          <p className="seo-content-section__lead">
            Ryzonix is a remote-first software development company serving businesses in Karachi and across
            Pakistan. We work with startups, small businesses, and established teams around the world to turn
            product plans into websites, custom software, mobile apps, and SaaS products, with support through
            deployment and ongoing maintenance.
          </p>
          <p>
            There is no public Karachi office listed on this site. The engagement is remote: start with a
            clear conversation about your users, goals, constraints, and the next useful release.
          </p>
          <Link href="/contact" className="theme-btn" title="Discuss a software project with Ryzonix">
            <span className="rolling-text">Discuss your project</span>
            <i className="ti-arrow-top-right" aria-hidden="true"></i>
          </Link>
        </div>
      </section>

      <section className="seo-content-section seo-content-section--light section-padding" aria-labelledby="karachi-services-title">
        <div className="container">
          <h2 id="karachi-services-title" className="seo-content-section__title">
            Product and engineering services for Karachi teams
          </h2>
          <p className="seo-content-section__lead">
            Choose support for a specific release or bring Ryzonix in earlier to clarify the technical
            approach. Each service below links to its detailed scope.
          </p>
          <div className="row">
            {Services.slice(0, 6).map((service) => (
              <article className="col-lg-6 seo-service-block" key={service.slug}>
                <h3>{service.title}</h3>
                <p>{SERVICE_CONTEXT[service.slug]}</p>
                <Link
                  href={`/service-single/${service.slug}`}
                  title={`${service.title} services from Ryzonix`}
                >
                  Explore {service.title.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
          <p>
            Custom software work is scoped around the product rather than a fixed package. See all{' '}
            <Link href="/service">Ryzonix software development and IT services</Link> for the full service list.
          </p>
        </div>
      </section>

      <section className="seo-content-section section-padding" aria-labelledby="karachi-process-title">
        <div className="container">
          <h2 id="karachi-process-title" className="seo-content-section__title">
            How remote software delivery works
          </h2>
          <ol>
            <li>
              <strong>Scope the problem.</strong> Share the product goal, target users, current stage, and
              constraints through the contact form or email.
            </li>
            <li>
              <strong>Agree the next release.</strong> Ryzonix helps define a practical scope, technical
              direction, and milestones before implementation.
            </li>
            <li>
              <strong>Build and review iteratively.</strong> Work moves through focused delivery steps with
              online reviews and clear progress updates.
            </li>
            <li>
              <strong>Launch and support.</strong> Deployment, monitoring, and maintenance can continue after
              the initial release when the project needs it.
            </li>
          </ol>
          <p>
            Karachi teams can begin by email or the project inquiry form. The site does not publish a WhatsApp
            number or a meeting-booking link; meeting arrangements can be agreed during the initial conversation.
          </p>
        </div>
      </section>

      <section className="seo-content-section seo-content-section--light section-padding" aria-labelledby="karachi-fit-title">
        <div className="container">
          <h2 id="karachi-fit-title" className="seo-content-section__title">
            Who this work can support
          </h2>
          <p>
            The remote model can suit Karachi founders shaping an MVP, small businesses improving a customer
            experience, SaaS teams adding product capabilities, and established organizations modernizing
            software. Those are the kinds of problems Ryzonix describes across its services; they are not claims
            of named Karachi clients or local case studies.
          </p>
          <h3>Selected work from the wider Ryzonix portfolio</h3>
          <p>
            These examples show the team's product and engineering experience. They are not presented as
            Karachi-based client projects.
          </p>
          <ul>
            {PORTFOLIO_EXAMPLES.map((project) => (
              <li key={project.href}>
                <Link href={project.href}>{project.title}</Link>: {project.description}
              </li>
            ))}
          </ul>
          <p>
            <Link href="/project">Browse all Ryzonix portfolio projects</Link>.
          </p>
        </div>
      </section>

      <section className="seo-faq section-padding" aria-labelledby="karachi-faq-title">
        <div className="container">
          <h2 id="karachi-faq-title">Questions from Karachi businesses</h2>
          <dl className="seo-faq__list">
            {KARACHI_FAQS.map((faq) => (
              <div className="seo-faq__item" key={faq.question}>
                <dt>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <p>
            Ready to discuss a build? <Link href="/contact">Contact Ryzonix</Link> or email{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </main>
    <Footer hclass="footer-section section-padding pb-0" />
    <Scrollbar />
  </Fragment>
);

export default KarachiPage;
