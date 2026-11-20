import Services from "../../api/Services";
import Projects from "../../api/projects";
import { absoluteUrl } from "./site";
import { listPublishedBlogSitemapEntries } from "../blogQueries";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/karachi", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/service", priority: "0.9", changefreq: "weekly" },
  { path: "/project", priority: "0.8", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
];

function urlEntry(loc, lastmod, changefreq, priority) {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  return `  <url>
    <loc>${loc}</loc>${lastmodTag}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function seedBlogSitemapFallback() {
  try {
    const seedPosts = require("../../scripts/blog-seed-data");
    return seedPosts.map((post) => ({
      slug: post.slug,
      lastmod: post.publishedAt
        ? new Date(post.publishedAt).toISOString().split("T")[0]
        : undefined,
    }));
  } catch {
    return [];
  }
}

async function fetchBlogSitemapEntries() {
  try {
    return await listPublishedBlogSitemapEntries();
  } catch (e) {
    console.error("[sitemap] blog fetch failed, using seed fallback:", e.message);
    return seedBlogSitemapFallback();
  }
}

/** @returns {Promise<string>} Sitemap XML with www canonical URLs */
export async function generateSitemapXml() {
  const featuredServices = Services.slice(0, 6);
  const blogEntries = await fetchBlogSitemapEntries();

  const urls = [
    ...STATIC_ROUTES.map((r) =>
      urlEntry(absoluteUrl(r.path), undefined, r.changefreq, r.priority),
    ),
    ...featuredServices.map((service) =>
      urlEntry(
        absoluteUrl(`/service-single/${service.slug}`),
        undefined,
        "monthly",
        "0.7",
      ),
    ),
    ...Projects.map((p) =>
      urlEntry(
        absoluteUrl(`/project-single/${p.slug}`),
        undefined,
        "monthly",
        "0.7",
      ),
    ),
    ...blogEntries.map((b) =>
      urlEntry(
        absoluteUrl(`/blog-single/${b.slug}`),
        b.lastmod,
        "monthly",
        "0.6",
      ),
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}
