import Head from 'next/head';
import { SITE, absoluteUrl } from '../../lib/seo/site';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} [props.keywords]
 * @param {string} props.canonicalPath - e.g. "/service"
 * @param {string} [props.ogImage]
 * @param {string} [props.ogType]
 * @param {boolean} [props.noindex]
 * @param {object[]} [props.jsonLd] - extra JSON-LD objects
 */
export default function SeoHead({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd = [],
}) {
  const hasCanonical = Boolean(canonicalPath);
  const canonical = hasCanonical ? absoluteUrl(canonicalPath) : null;
  const image = ogImage || SITE.ogImage;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const keywordContent = keywords || SITE.defaultKeywords.join(', ');

  return (
    <Head>
      {/* SEO: Meta Tags */}
      {title ? <title>{title}</title> : <title> </title>}
      {description ? <meta name="description" content={description} /> : null}
      {keywords || !noindex ? <meta name="keywords" content={keywordContent} /> : null}
      <meta name="author" content={SITE.name} />
      <meta name="robots" content={robots} />
      {hasCanonical ? <link rel="canonical" href={canonical} /> : null}

      {/* SEO: Open Graph */}
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:image" content={image} />
      {hasCanonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />

      {/* SEO: Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={image} />

      {/* SEO: Schema (page-level JSON-LD) */}
      {jsonLd.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
