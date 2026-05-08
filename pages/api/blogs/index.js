import dbConnect from "../../../lib/mongodb";
import { assertBlogWriteAuthorized } from "../../../lib/blogApiAuth";
import { listPublishedBlogs, createBlogPost } from "../../../lib/blogQueries";
import BlogPost from "../../../models/BlogPost";

function parseIntQuery(v, fallback) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : fallback;
}

export default async function handler(req, res) {
  try {
    await dbConnect();
  } catch (e) {
    console.error("[api/blogs] db connect", e);
    return res.status(503).json({
      error: "Database unavailable",
      message: e.message || "Could not connect to MongoDB",
    });
  }

  if (req.method === "GET") {
    const page = parseIntQuery(req.query.page, 1);
    const limit = parseIntQuery(req.query.limit, 9);
    let includeDrafts = false;
    if (req.query.drafts === "1") {
      if (!assertBlogWriteAuthorized(req, res)) return;
      includeDrafts = true;
    }

    try {
      if (includeDrafts) {
        const safeLimit = Math.min(Math.max(limit, 1), 50);
        const safePage = Math.max(page, 1);
        const skip = (safePage - 1) * safeLimit;
        const [docs, total] = await Promise.all([
          BlogPost.find({})
            .sort({ updatedAt: -1 })
            .skip(skip)
            .limit(safeLimit)
            .select("-content")
            .lean()
            .exec(),
          BlogPost.countDocuments({}).exec(),
        ]);
        const { toPublicBlog } = await import("../../../lib/blogSerialize");
        return res.status(200).json({
          posts: docs.map((d) => toPublicBlog(d, { includeContent: false })),
          total,
          totalPages: Math.max(1, Math.ceil(total / safeLimit)),
          page: safePage,
          limit: safeLimit,
        });
      }

      const result = await listPublishedBlogs({ page, limit });
      return res.status(200).json(result);
    } catch (e) {
      console.error("[api/blogs] GET", e);
      return res.status(500).json({ error: "Failed to list posts" });
    }
  }

  if (req.method === "POST") {
    if (!assertBlogWriteAuthorized(req, res)) return;

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const {
      slug,
      title,
      title2,
      subtitle,
      description,
      content,
      author,
      authorTitle,
      screens,
      bloggrid,
      blogSingleImg,
      blClass,
      animation,
      commentCount,
      readMinutes,
      tags,
      status,
      publishedAt,
    } = body || {};

    if (!slug || !title || !content || !author || !screens) {
      return res.status(400).json({
        error: "Validation error",
        message: "slug, title, content, author, and screens are required",
      });
    }

    try {
      const created = await createBlogPost({
        slug: String(slug).trim(),
        title: String(title).trim(),
        title2: title2 ? String(title2).trim() : undefined,
        subtitle: subtitle ? String(subtitle).trim() : undefined,
        description: description ? String(description).trim() : undefined,
        content: String(content),
        author: String(author).trim(),
        authorTitle: authorTitle ? String(authorTitle).trim() : undefined,
        screens: String(screens).trim(),
        bloggrid: bloggrid ? String(bloggrid).trim() : undefined,
        blogSingleImg: blogSingleImg ? String(blogSingleImg).trim() : undefined,
        blClass: blClass ? String(blClass).trim() : undefined,
        animation: animation ? String(animation).trim() : undefined,
        commentCount:
          commentCount !== undefined ? Number(commentCount) : undefined,
        readMinutes:
          readMinutes !== undefined ? Number(readMinutes) : undefined,
        tags: Array.isArray(tags) ? tags.map(String) : undefined,
        status:
          status === "draft" || status === "published" ? status : undefined,
        publishedAt: publishedAt ? new Date(publishedAt) : undefined,
      });
      return res.status(201).json(created);
    } catch (e) {
      if (e.code === 11000) {
        return res.status(409).json({ error: "Slug already exists" });
      }
      console.error("[api/blogs] POST", e);
      return res.status(500).json({ error: "Failed to create post" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: `Method ${req.method} not allowed` });
}
