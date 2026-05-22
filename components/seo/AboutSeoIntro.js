import Link from 'next/link';

const ClickHandler = () => window.scrollTo(10, 0);

export default function AboutSeoIntro() {
  return (
    <section className="seo-content-section seo-content-section--light section-padding pb-0" aria-labelledby="about-page-h1">
      <div className="container">
        <h1 id="about-page-h1" className="seo-content-section__title">
          About Ryzonix | Web Development &amp; IT Consulting
        </h1>
        <p>
          <strong>Ryzonix</strong> is a remote-first software house specializing in{' '}
          <strong>custom web development</strong>, SaaS applications, startup MVPs, and practical{' '}
          <strong>IT consulting</strong>. Founded in 2025 with a focused team of 2–10 engineers and consultants,
          we partner with startups, small businesses, and enterprises that need responsive, secure, and scalable
          digital products—not template sites that break under growth.
        </p>
        <p>
          Our tagline—<em>Your digital partner for responsive, secure, and scalable websites</em>—reflects how we work:
          discovery-first scoping, clean code, thoughtful UX, and deployment practices that keep production reliable.
          Whether you are validating an MVP or modernizing a legacy platform, we align technology choices with business
          milestones so you ship faster with fewer costly rewrites.
        </p>
        <h2>What we deliver</h2>
        <p>
          Explore our{' '}
          <Link href="/service" onClick={ClickHandler} title="Ryzonix services">
            services
          </Link>{' '}
          including web development, tech consulting, SaaS builds, and mobile apps—or browse the{' '}
          <Link href="/project" onClick={ClickHandler} title="Ryzonix portfolio">
            portfolio
          </Link>{' '}
          for recent work. Ready to start?{' '}
          <Link href="/contact" onClick={ClickHandler} title="Contact Ryzonix">
            Contact us
          </Link>{' '}
          at hello@ryzonix.com.
        </p>
      </div>
    </section>
  );
}
