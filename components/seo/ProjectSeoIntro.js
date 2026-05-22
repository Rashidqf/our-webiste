import Link from 'next/link';

const ClickHandler = () => window.scrollTo(10, 0);

export default function ProjectSeoIntro() {
  return (
    <section className="seo-content-section seo-content-section--light section-padding pb-0" aria-labelledby="portfolio-page-h1">
      <div className="container">
        <h1 id="portfolio-page-h1" className="seo-content-section__title">
          Portfolio &amp; Case Studies | Ryzonix
        </h1>
        <p>
          Browse <strong>Ryzonix portfolio</strong> projects—SaaS platforms, AI-powered products, FinTech automation,
          and custom web applications built with modern, scalable stacks. Each case study highlights the business problem,
          technical approach, and outcomes our team delivered for startups and enterprise clients.
        </p>
        <p>
          Need similar results? View our{' '}
          <Link href="/service" onClick={ClickHandler} title="Web development services">
            web development services
          </Link>{' '}
          or{' '}
          <Link href="/contact" onClick={ClickHandler} title="Start a project with Ryzonix">
            get in touch
          </Link>{' '}
          to discuss your product roadmap.
        </p>
      </div>
    </section>
  );
}
