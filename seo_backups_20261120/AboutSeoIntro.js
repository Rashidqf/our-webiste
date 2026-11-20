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
          <strong>Ryzonix</strong> is a remote-first software engineering and digital consulting company specializing in{' '}
          <strong>custom web development</strong>, scalable SaaS applications, high-performance startup MVPs, and strategic{' '}
          <strong>IT consulting</strong>. Founded in 2025, our mission is to empower ambitious founders, fast-scaling startups,
          and forward-thinking enterprises with modern digital platforms that combine responsive design, bulletproof security, and resilient architecture.
        </p>
        <p>
          Our guiding philosophy—<em>Your digital partner for responsive, secure, and scalable websites</em>—drives every stage of our engineering lifecycle.
          We reject brittle templates and technical debt in favor of clean modular code, intuitive user experience (UX), and automated DevOps workflows.
          Whether validating a market hypothesis with a lean MVP, re-architecting complex multi-tenant cloud applications, or building custom automation systems,
          we align architectural choices directly with strategic business milestones.
        </p>
        <h2>Engineering Principles &amp; Technology Stack</h2>
        <p>
          Our technical teams leverage battle-tested modern web and cloud technologies including Next.js, React, TypeScript, Node.js, Python,
          PostgreSQL, MongoDB, and AWS/Vercel serverless infrastructure. We emphasize rigorous code review, test coverage, sensible authentication models,
          and continuous integration pipelines to ensure every release is production-ready, performant, and maintainable.
        </p>
        <h2>Serving Karachi, Pakistan and Worldwide Teams</h2>
        <p>
          Operating as a distributed, remote-first software consultancy, Ryzonix collaborates seamlessly with clients across North America, Europe,
          the Middle East, and Pakistan. For founders and businesses in Karachi seeking world-class software development without the overhead of traditional
          agencies, we offer asynchronous sprint planning, transparent milestone pricing, and direct engineer access.
        </p>
        <h2>Explore Our Work &amp; Services</h2>
        <p>
          Learn more about our comprehensive{' '}
          <Link href="/service" onClick={ClickHandler} title="Ryzonix services">
            services
          </Link>{' '}
          (web development, tech consulting, SaaS builds, and mobile apps) or explore our{' '}
          <Link href="/project" onClick={ClickHandler} title="Ryzonix portfolio">
            portfolio of case studies
          </Link>.
          For project inquiries, proposals, or consultations,{' '}
          <Link href="/contact" onClick={ClickHandler} title="Contact Ryzonix">
            contact our team
          </Link>{' '}
          at <a href="mailto:sales@ryzonix.pro">sales@ryzonix.pro</a>.
        </p>
      </div>
    </section>
  );
}
