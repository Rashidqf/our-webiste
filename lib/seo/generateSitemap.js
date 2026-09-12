import Services from "../../api/Services";
import Projects from "../../api/projects";
import { absoluteUrl } from "./site";
import { listPublishedBlogSitemapEntries } from "../blogQueries";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/service", priority: "0.9", changefreq: "weekly" },
  { path: "/project", priority: "0.8", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/pricing", priority: "0.6", changefreq: "monthly" },
  { path: "/team", priority: "0.5", changefreq: "monthly" },
];

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function todayIsoDate() {
  return new Date().toISOString().split("T")[0];
}

function seedBlogSitemapFallback() {
  try {
    const seedPosts = require("../../scripts/blog-seed-data");
    return seedPosts.map((post) => ({
      slug: post.slug,
      lastmod: post.publishedAt
        ? new Date(post.publishedAt).toISOString().split("T")[0]
        : todayIsoDate(),
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
  const lastmod = todayIsoDate();
  const featuredServices = Services.slice(0, 6);
  const blogEntries = await fetchBlogSitemapEntries();

  const urls = [
    ...STATIC_ROUTES.map((r) =>
      urlEntry(absoluteUrl(r.path), lastmod, r.changefreq, r.priority),
    ),
    ...Projects.map((p) =>
      urlEntry(
        absoluteUrl(`/project-single/${p.slug}`),
        lastmod,
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
