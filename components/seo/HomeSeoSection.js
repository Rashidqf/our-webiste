import Link from 'next/link';
import { SITE } from '../../lib/seo/site';

const ClickHandler = () => window.scrollTo(10, 0);

/** Keyword-rich home copy (300+ words) — complements hero visuals */
export default function HomeSeoSection() {
  return (
    <section className="seo-content-section section-padding pt-0" aria-labelledby="home-seo-heading">
      <div className="container">
        <h2 id="home-seo-heading" className="seo-content-section__title">
          Remote software development for Karachi and worldwide teams
        </h2>
        <p>
          {SITE.description} Founded in 2025, Ryzonix works with founders, small businesses, and enterprises
          that need maintainable software and a clear path from the first release to ongoing operations.
        </p>
        <p>
          Karachi is an important service market, not a claim of a walk-in office. Read how our{' '}
          <Link href="/karachi" onClick={ClickHandler} title="Remote software development services for Karachi businesses">
            remote development work supports Karachi businesses
          </Link>{' '}
          or explore the full range of services available to clients worldwide.
        </p>

        <h3>Web development, SaaS, MVPs, mobile apps &amp; consulting</h3>
        <p>
          Our <Link href="/service" onClick={ClickHandler} title="View all Ryzonix services">
            custom web development services
          </Link>{' '}
          cover marketing sites, customer portals, and full-stack web apps. We build{' '}
          <strong>SaaS applications</strong> with authentication, billing hooks, and observability;
          deliver <strong>startup MVPs</strong> that validate ideas quickly; and extend products with{' '}
          <strong>mobile app development</strong> aligned to your APIs. When you need direction before build,
          our <strong>tech consulting</strong> clarifies architecture, security, and stack choices.
        </p>

        <h3>Clean code, secure delivery, scalable architecture</h3>
        <ul>
          <li>Responsive, mobile-first interfaces that perform on real devices</li>
          <li>Security-minded defaults, sensible auth, and maintainable APIs</li>
          <li>Scalable structure and DevOps-ready deployment pipelines</li>
          <li>Transparent communication for startups and enterprise stakeholders</li>
        </ul>
        <p>
          Explore our{' '}
          <Link href="/project" onClick={ClickHandler} title="Ryzonix portfolio and case studies">
            portfolio
          </Link>{' '}
          to see SaaS platforms, AI products, and automation builds—or read more{' '}
          <Link href="/about" onClick={ClickHandler} title="About Ryzonix">
            about our team
          </Link>
          .
        </p>

        <div className="seo-content-section__cta">
          <h3>Ready to build your digital presence?</h3>
          <p>Let&apos;s talk about your roadmap, timeline, and goals.</p>
          <Link href="/contact" onClick={ClickHandler} className="theme-btn" title="Contact Ryzonix">
            <span className="rolling-text">Let&apos;s talk</span>
            <i className="ti-arrow-top-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
