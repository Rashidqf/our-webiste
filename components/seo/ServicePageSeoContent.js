import Link from 'next/link';
import { SERVICE_SEO_BLOCKS } from '../../lib/seo/serviceContent';
import { serviceSchema } from '../../lib/seo/schemas';

const ClickHandler = () => window.scrollTo(10, 0);

/** Full service descriptions + internal links for /service */
export default function ServicePageSeoContent() {
  return (
    <>
      {/* SEO: Service page body copy */}
      <section className="seo-content-section section-padding" aria-labelledby="services-page-h1">
        <div className="container">
          <h1 id="services-page-h1" className="seo-content-section__title">
            Web Development &amp; IT Consulting Services | Ryzonix
          </h1>
          <p className="seo-content-section__lead">
            From custom websites and SaaS platforms to startup MVPs and mobile apps, Ryzonix delivers
            engineering you can scale. See our{' '}
            <Link href="/project" onClick={ClickHandler} title="Ryzonix portfolio">
              portfolio
            </Link>{' '}
            or{' '}
            <Link href="/contact" onClick={ClickHandler} title="Contact Ryzonix">
              request a quote
            </Link>
            .
          </p>

          {SERVICE_SEO_BLOCKS.map((block) => (
            <article key={block.id} className="seo-service-block" id={`service-${block.slug}`}>
              <h2>{block.title}</h2>
              <p>{block.description}</p>
              <h3>Key benefits</h3>
              <ul>
                {block.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <p>
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
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
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
