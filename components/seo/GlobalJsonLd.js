import Head from 'next/head';
import {
  organizationSchema,
  professionalServiceSchema,
  webSiteSchema,
} from '../../lib/seo/schemas';

/** Site-wide JSON-LD loaded on every page */
export default function GlobalJsonLd() {
  const schemas = [
    organizationSchema(),
    professionalServiceSchema(),
    webSiteSchema(),
  ];

  return (
    <Head>
      {/* SEO: Global Schema */}
      {schemas.map((schema, index) => (
        <script
          key={`global-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
