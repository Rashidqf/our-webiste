import React from 'react';
import Link from 'next/link';
import { SERVICE_SEO_BLOCKS } from '../../lib/seo/serviceContent';
import { serviceSchema } from '../../lib/seo/schemas';
import BrandBlobGlow from '../icons/BrandBlobGlow';

const ClickHandler = () => window.scrollTo(10, 0);

/** Full service descriptions + internal links for /service, fully styled to Ryzonix cyber theme */
export default function ServicePageSeoContent() {
  return (
    <section className="seo-content-section service-details-section section-padding" aria-labelledby="services-page-details-title">
      <div className="container">
        {/* Section Header following Ryzonix theme title pattern */}
        <div className="title scroll-text-animation" data-animation="fade_from_bottom">
          <div className="section-eyebrow">
            <span className="eyebrow-badge">
              <span className="eyebrow-dot"></span> Full Service Catalog
            </span>
          </div>
          <h2 id="services-page-details-title" className="section-heading">
            Detailed <span>Service Scopes</span>
          </h2>
          <p className="seo-content-section__lead">
            From custom websites and SaaS platforms to startup MVPs and mobile apps, Ryzonix delivers
            engineering you can scale. Explore our{' '}
            <Link href="/project" onClick={ClickHandler} title="Ryzonix portfolio">
              portfolio
            </Link>{' '}
            or{' '}
            <Link href="/contact" onClick={ClickHandler} title="Contact Ryzonix">
              request a quote
            </Link>
            . For teams in Karachi, see our{' '}
            <Link href="/karachi" onClick={ClickHandler} title="Remote software development for Karachi businesses">
              remote software development services for Karachi businesses
            </Link>.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid matching theme */}
        <div className="row g-4 seo-cards-row">
          {SERVICE_SEO_BLOCKS.map((block) => (
            <div className="col-lg-6 col-12" key={block.id}>
              <article className="seo-service-block" id={`service-${block.slug}`}>
                <div className="seo-service-block__header">
                  <span className="seo-service-block__num">{block.id}</span>
                  <span className="seo-service-block__badge">Software Engineering</span>
                </div>
                
                <h3 className="seo-service-block__title">
                  <Link
                    href="/service-single/[slug]"
                    as={`/service-single/${block.slug}`}
                    onClick={ClickHandler}
                    title={`${block.title} – Ryzonix`}
                  >
                    {block.title}
                  </Link>
                </h3>
                
                <p className="seo-service-block__desc">{block.summary}</p>
                
                <div className="seo-service-block__benefits">
                  <h4 className="seo-service-block__benefits-title">
                    <i className="ti-check-box" aria-hidden="true"></i> Key Benefits
                  </h4>
                  <ul className="seo-service-block__benefits-list">
                    {block.benefits.map((benefit) => (
                      <li key={benefit}>
                        <span className="check-icon" aria-hidden="true">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#66E0A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="benefit-text">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="seo-service-block__footer">
                  <Link
                    href="/service-single/[slug]"
                    as={`/service-single/${block.slug}`}
                    onClick={ClickHandler}
                    className="theme-btn seo-service-block__cta"
                    title={`${block.cta} – Ryzonix`}
                  >
                    <span className="rolling-text">{block.cta}</span>
                    <i className="ti-arrow-top-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-shape">
        <BrandBlobGlow filterId="seoServiceDetailsBlobFilter" opacity={0.2} />
      </div>
    </section>
  );
}

/** JSON-LD Service schemas for /service page head */
export function getServicePageSchemas() {
  return SERVICE_SEO_BLOCKS.map((block) =>
    serviceSchema({
      title: block.title,
      slug: block.slug,
      description: block.description.slice(0, 200),
    })
  );
}
