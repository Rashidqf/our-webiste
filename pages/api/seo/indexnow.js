import { submitToIndexNow } from "../../../lib/seo/indexNow.js";
import { assertBlogWriteAuthorized } from "../../../lib/blogApiAuth.js";
import { generateSitemapXml } from "../../../lib/seo/generateSitemap.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  // Allow authorized blog editors or pass-through for configured URLs
  if (process.env.BLOG_API_SECRET) {
    if (!assertBlogWriteAuthorized(req, res)) return;
  }

  let urls = [];
  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

  if (Array.isArray(body.urls) && body.urls.length > 0) {
    urls = body.urls;
  } else if (typeof body.url === "string" && body.url.trim()) {
    urls = [body.url.trim()];
  } else {
    // Default: submit all URLs from sitemap
    try {
      const sitemap = await generateSitemapXml();
      const matches = sitemap.match(/<loc>(.*?)<\/loc>/g);
      if (matches) {
        urls = matches.map((m) => m.replace(/<\/?loc>/g, "").trim());
      }
    } catch (err) {
      return res.status(500).json({
        error: "Failed to generate sitemap URLs for submission",
        message: err.message,
      });
    }
  }

  const result = await submitToIndexNow(urls);
  return res.status(result.success ? 200 : result.status || 500).json(result);
}
