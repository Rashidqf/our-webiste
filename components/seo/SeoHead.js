import Head from 'next/head';
import { SITE, absoluteUrl, normalizeCanonicalPath } from '../../lib/seo/site';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} [props.keywords]
 * @param {string} [props.canonicalPath] - e.g. "/service". Omit on noindex pages.
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
  const canonical = hasCanonical
    ? absoluteUrl(normalizeCanonicalPath(canonicalPath))
    : null;
  const image = ogImage || SITE.ogImage;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const keywordContent = keywords || SITE.defaultKeywords.join(', ');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
      <meta name="author" content={SITE.name} />
      <meta name="robots" content={robots} />
      {hasCanonical ? <link rel="canonical" href={canonical} key="canonical" /> : null}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {hasCanonical ? <meta property="og:url" content={canonical} key="og-url" /> : null}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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
