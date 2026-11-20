import React from 'react';
import Link from 'next/link';
import BrandBlobGlow from '../icons/BrandBlobGlow';

const ClickHandler = () => window.scrollTo(10, 0);

/** Supporting home copy for Pakistan-wide software development services, fully styled to Ryzonix theme. */
export default function HomeSeoSection() {
  return (
    <section className="seo-content-section section-padding pt-0" aria-labelledby="home-seo-heading">
      <div className="container">
        <div className="title scroll-text-animation" data-animation="fade_from_bottom">
          <div className="section-eyebrow">
            <span className="eyebrow-badge">
              <span className="eyebrow-dot"></span> Distributed Software Consultancy
            </span>
          </div>
          <h2 id="home-seo-heading" className="section-heading">
            Software Development for <span>Pakistan &amp; Worldwide Teams</span>
          </h2>
          <p className="seo-content-section__lead">
            Ryzonix is a remote-first software development company in Pakistan. We build custom websites,
            web applications, SaaS products, and mobile apps for founders, small businesses, and established
            teams, supporting projects from discovery through deployment and ongoing maintenance.
          </p>
        </div>

        <div className="seo-info-card">
          <p>
            For Karachi teams, our work is remote rather than a walk-in office service. Read how we support{' '}
            <Link href="/karachi" onClick={ClickHandler} title="Remote software development services for Karachi businesses">
              software development projects for Karachi businesses
            </Link>{' '}
            or explore the full range of services available to clients worldwide.
          </p>

          <h2>Web Development, SaaS, MVPs, Mobile Apps &amp; Consulting</h2>
          <p>
            Our{' '}
            <Link href="/service-single/Web-Development" onClick={ClickHandler} title="Custom web development services">
              custom web development
            </Link>{' '}
            covers marketing sites, customer portals, and full-stack web apps. We build{' '}
            <Link href="/service-single/SaaS-Applications" onClick={ClickHandler}>
              SaaS applications
            </Link>{' '}
            with authentication, billing hooks, and observability; deliver{' '}
            <Link href="/service-single/Startup-MVPs" onClick={ClickHandler}>
              startup MVPs
            </Link>{' '}
            that validate ideas quickly; and extend products with{' '}
            <Link href="/service-single/Mobile-App-Development" onClick={ClickHandler}>
              mobile app development
            </Link>{' '}
            aligned to your APIs. Our{' '}
            <Link href="/service-single/Tech-Consulting" onClick={ClickHandler}>
              IT consulting
            </Link>{' '}
            helps clarify architecture, security, and stack choices before a build.
          </p>

          <p>
            Our portfolio also showcases AI product development and integration, including recruitment automation
            and conversational speech intelligence.{' '}
            <Link href="/project" onClick={ClickHandler} title="AI and software development case studies">
              Explore AI and software case studies
            </Link>.
          </p>

          <h2>Clean Code, Secure Delivery, Scalable Architecture</h2>
          <ul className="seo-service-block__benefits-list" style={{ marginTop: '16px', marginBottom: '20px' }}>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="benefit-text">Responsive, mobile-first interfaces that perform flawlessly on real devices</span>
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="benefit-text">Security-minded defaults, sensible authentication patterns, and maintainable APIs</span>
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="benefit-text">
                Scalable cloud structure and{' '}
                <Link href="/service-single/Deployment-Maintenance" onClick={ClickHandler}>
                  DevOps-ready deployment and maintenance
                </Link>
              </span>
            </li>
            <li>
              <span className="check-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="benefit-text">Transparent milestone reviews and direct engineering communication</span>
            </li>
          </ul>

          <p>
            Explore our{' '}
            <Link href="/project" onClick={ClickHandler} title="Ryzonix portfolio and case studies">
              portfolio
            </Link>{' '}
            to see live platforms and automation builds—or read more{' '}
            <Link href="/about" onClick={ClickHandler} title="About Ryzonix">
              about our team and engineering principles
            </Link>.
          </p>

          <div className="seo-content-section__cta">
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '8px' }}>Ready to build your digital presence?</h3>
            <p style={{ color: '#BCC0CB', marginBottom: '20px' }}>Let&apos;s talk about your product roadmap, architecture, and launch goals.</p>
            <Link href="/contact" onClick={ClickHandler} className="theme-btn" title="Contact Ryzonix">
              <span className="rolling-text">Let&apos;s talk</span>
              <i className="ti-arrow-top-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-shape">
        <BrandBlobGlow filterId="homeSeoBlobFilter" opacity={0.2} />
      </div>
    </section>
  );
}
