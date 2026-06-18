import Head from 'next/head';
import { SITE, absoluteUrl, normalizeCanonicalPath } from '../../lib/seo/site';

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
  const canonical = absoluteUrl(normalizeCanonicalPath(canonicalPath));
  const image = ogImage || SITE.ogImage;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const keywordContent = keywords || SITE.defaultKeywords.join(', ');

  return (
    <Head>
      {/* SEO: Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
      <meta name="author" content={SITE.name} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* SEO: Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />

      {/* SEO: Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
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
