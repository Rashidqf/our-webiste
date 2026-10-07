import Link from 'next/link';

const ClickHandler = () => window.scrollTo(10, 0);

/** Supporting home copy for Pakistan-wide software development services. */
export default function HomeSeoSection() {
  return (
    <section className="seo-content-section section-padding pt-0" aria-labelledby="home-seo-heading">
      <div className="container">
        <h2 id="home-seo-heading" className="seo-content-section__title">
          Software development for Pakistan and worldwide teams
        </h2>
        <p>
          Ryzonix is a remote-first software development company in Pakistan. We build custom websites,
          web applications, SaaS products, and mobile apps for founders, small businesses, and established
          teams, supporting projects from discovery through deployment and ongoing maintenance.
        </p>
        <p>
          For Karachi teams, our work is remote rather than a walk-in office service. Read how we support{' '}
          <Link href="/karachi" onClick={ClickHandler} title="Remote software development services for Karachi businesses">
            software development projects for Karachi businesses
          </Link>{' '}
          or explore the full range of services available to clients worldwide.
        </p>

        <h3>Web development, SaaS, MVPs, mobile apps &amp; consulting</h3>
        <p>
          Our <Link href="/service-single/Web-Development" onClick={ClickHandler} title="Custom web development services">
            custom web development
          </Link>{' '}
          covers marketing sites, customer portals, and full-stack web apps. We build{' '}
          <Link href="/service-single/SaaS-Applications" onClick={ClickHandler}>SaaS applications</Link>{' '}
          with authentication, billing hooks, and observability; deliver{' '}
          <Link href="/service-single/Startup-MVPs" onClick={ClickHandler}>startup MVPs</Link>{' '}
          that validate ideas quickly; and extend products with{' '}
          <Link href="/service-single/Mobile-App-Development" onClick={ClickHandler}>mobile app development</Link>{' '}
          aligned to your APIs. Our{' '}
          <Link href="/service-single/Tech-Consulting" onClick={ClickHandler}>IT consulting</Link>{' '}
          helps clarify architecture, security, and stack choices before a build.
        </p>

        <p>
          Our portfolio also shows AI product development and integration, including recruitment automation
          and conversational products.{' '}
          <Link href="/project" onClick={ClickHandler} title="AI and software development case studies">
            Explore AI and software case studies
          </Link>.
        </p>

        <h3>Clean code, secure delivery, scalable architecture</h3>
        <ul>
          <li>Responsive, mobile-first interfaces that perform on real devices</li>
          <li>Security-minded defaults, sensible auth, and maintainable APIs</li>
          <li>
            Scalable structure and{' '}
            <Link href="/service-single/Deployment-Maintenance" onClick={ClickHandler}>
              DevOps-ready deployment and maintenance
            </Link>
          </li>
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
