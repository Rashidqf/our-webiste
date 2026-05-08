import dbConnect from "../../../lib/mongodb";
import { assertBlogWriteAuthorized } from "../../../lib/blogApiAuth";
import {
  getPublishedPostBySlug,
  updateBlogPostBySlug,
  deleteBlogPostBySlug,
} from "../../../lib/blogQueries";
import BlogPost from "../../../models/BlogPost";
import { toPublicBlog } from "../../../lib/blogSerialize";

export default async function handler(req, res) {
  const raw = req.query.slug;
  const slug = Array.isArray(raw) ? raw[0] : raw;

  if (!slug) {
    return res.status(400).json({ error: "Missing slug" });
  }

  try {
    await dbConnect();
  } catch (e) {
    console.error("[api/blogs/[slug]] db connect", e);
    return res.status(503).json({
      error: "Database unavailable",
      message: e.message || "Could not connect to MongoDB",
    });
  }

  if (req.method === "GET") {
    let preview = false;
    if (req.query.preview === "1") {
      if (!assertBlogWriteAuthorized(req, res)) return;
      preview = true;
    }

    try {
      if (preview) {
        const doc = await BlogPost.findOne({ slug }).lean().exec();
        if (!doc) return res.status(404).json({ error: "Not found" });
        return res
          .status(200)
          .json(toPublicBlog(doc, { includeContent: true }));
      }

      const post = await getPublishedPostBySlug(slug);
      if (!post) return res.status(404).json({ error: "Not found" });
      return res.status(200).json(post);
    } catch (e) {
      console.error("[api/blogs/[slug]] GET", e);
      return res.status(500).json({ error: "Failed to load post" });
    }
  }

  if (req.method === "PATCH") {
    if (!assertBlogWriteAuthorized(req, res)) return;

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const allowed = [
      "title",
      "title2",
      "subtitle",
      "description",
      "content",
      "author",
      "authorTitle",
      "screens",
      "bloggrid",
      "blogSingleImg",
      "blClass",
      "animation",
      "commentCount",
      "readMinutes",
      "tags",
      "status",
      "publishedAt",
      "slug",
    ];

    const payload = {};
    for (const key of allowed) {
      if (body[key] !== undefined) payload[key] = body[key];
    }

    if (payload.publishedAt) {
      payload.publishedAt = new Date(payload.publishedAt);
    }
    if (payload.slug) {
      payload.slug = String(payload.slug).trim();
    }

    try {
      const updated = await updateBlogPostBySlug(slug, payload);
      if (!updated) return res.status(404).json({ error: "Not found" });
      return res.status(200).json(updated);
    } catch (e) {
      if (e.code === 11000) {
        return res.status(409).json({ error: "Slug already exists" });
      }
      console.error("[api/blogs/[slug]] PATCH", e);
      return res.status(500).json({ error: "Failed to update post" });
    }
  }

  if (req.method === "DELETE") {
    if (!assertBlogWriteAuthorized(req, res)) return;

    try {
      const ok = await deleteBlogPostBySlug(slug);
      if (!ok) return res.status(404).json({ error: "Not found" });
      return res.status(204).end();
    } catch (e) {
      console.error("[api/blogs/[slug]] DELETE", e);
      return res.status(500).json({ error: "Failed to delete post" });
    }
  }

  res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
  return res.status(405).json({ error: `Method ${req.method} not allowed` });
}
