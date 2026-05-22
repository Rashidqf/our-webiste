import Services from '../api/Services';
import Projects from '../api/projects';
import { SITE_URL } from '../lib/seo/site';

const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/service', priority: '0.9', changefreq: 'weekly' },
  { path: '/project', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.6', changefreq: 'monthly' },
  { path: '/team', priority: '0.5', changefreq: 'monthly' },
];

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSiteMap() {
  const lastmod = new Date().toISOString().split('T')[0];
  const featuredServices = Services.slice(0, 6);

  const urls = [
    ...STATIC_ROUTES.map((r) =>
      urlEntry(`${SITE_URL}${r.path}`, lastmod, r.changefreq, r.priority)
    ),
    ...featuredServices.map((s) =>
      urlEntry(
        `${SITE_URL}/service-single/${s.slug}`,
        lastmod,
        'monthly',
        '0.7'
      )
    ),
    ...Projects.map((p) =>
      urlEntry(
        `${SITE_URL}/project-single/${p.slug}`,
        lastmod,
        'monthly',
        '0.7'
      )
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  return null;
}
