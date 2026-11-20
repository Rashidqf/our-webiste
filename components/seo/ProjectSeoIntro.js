import React from 'react';
import Link from 'next/link';
import BrandBlobGlow from '../icons/BrandBlobGlow';

const ClickHandler = () => window.scrollTo(10, 0);

export default function ProjectSeoIntro() {
  return (
    <section className="seo-content-section section-padding pb-0" aria-labelledby="portfolio-page-h1">
      <div className="container">
        <div className="section-eyebrow">
          <span className="eyebrow-badge">
            <span className="eyebrow-dot"></span> Engineering Case Studies
          </span>
        </div>
        <h1 id="portfolio-page-h1" className="seo-content-section__title">
          Portfolio &amp; Case Studies | <span>Ryzonix</span>
        </h1>
        <div className="seo-info-card">
          <p>
            Browse <strong>Ryzonix portfolio</strong> projects—SaaS platforms, AI-powered products, FinTech automation,
            and custom web applications built with modern, scalable stacks. Each case study highlights the business problem,
            architectural design, tech stack selection, and measurable outcomes our engineering team delivered for startups and global enterprise clients.
          </p>
          <p>
            From rapid MVP prototyping and multi-tenant SaaS architecture to complex browser automation systems and conversational AI agents,
            our cross-functional engineers apply clean code principles, automated testing, and cloud-native deployments to ensure long-term product reliability.
          </p>
          <p>
            Need similar results for your business? View our{' '}
            <Link href="/service" onClick={ClickHandler} title="Web development services">
              web development services
            </Link>{' '}
            or{' '}
            <Link href="/contact" onClick={ClickHandler} title="Start a project with Ryzonix">
              get in touch
            </Link>{' '}
            to discuss your product roadmap and receive a detailed project proposal.
          </p>
          <p>
            For teams in Karachi exploring remote product development, read how Ryzonix serves{' '}
            <Link href="/karachi" onClick={ClickHandler} title="Software development services for Karachi teams">
              businesses in Karachi, Pakistan
            </Link>{' '}
            and start a conversation about your own product.
          </p>
        </div>
      </div>
      <div className="bg-shape">
        <BrandBlobGlow filterId="projectSeoBlobFilter" opacity={0.18} />
      </div>
    </section>
  );
}
