import dbConnect from "./mongodb";
import BlogPost from "../models/BlogPost";
import { toPublicBlog } from "./blogSerialize";

const publishedFilter = () => ({
  status: "published",
  publishedAt: { $lte: new Date() },
});

export async function listPublishedBlogs({ page = 1, limit = 9 } = {}) {
  await dbConnect();
  const safeLimit = Math.min(Math.max(Number(limit) || 9, 1), 50);
  const safePage = Math.max(Number(page) || 1, 1);
  const skip = (safePage - 1) * safeLimit;

  const filter = publishedFilter();

  const [docs, total] = await Promise.all([
    BlogPost.find(filter)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(safeLimit)
      .select("-content")
      .lean()
      .exec(),
    BlogPost.countDocuments(filter).exec(),
  ]);

  const posts = docs.map((d) => toPublicBlog(d, { includeContent: false }));
  const totalPages = Math.max(1, Math.ceil(total / safeLimit));

  return {
    posts,
    total,
    totalPages,
    page: safePage,
    limit: safeLimit,
  };
}

export async function getPublishedPostBySlug(slug) {
  if (!slug || typeof slug !== "string") return null;
  await dbConnect();

  const doc = await BlogPost.findOne({
    slug,
    ...publishedFilter(),
  })
    .lean()
    .exec();

  if (!doc) return null;
  return toPublicBlog(doc, { includeContent: true });
}

export async function createBlogPost(payload) {
  await dbConnect();
  const doc = await BlogPost.create(payload);
  return toPublicBlog(doc.toObject(), { includeContent: true });
}

export async function updateBlogPostBySlug(slug, payload) {
  await dbConnect();
  const doc = await BlogPost.findOneAndUpdate(
    { slug },
    { $set: payload },
    { new: true, runValidators: true },
  )
    .lean()
    .exec();

  if (!doc) return null;
  return toPublicBlog(doc, { includeContent: true });
}

export async function deleteBlogPostBySlug(slug) {
  await dbConnect();
  const res = await BlogPost.deleteOne({ slug }).exec();
  return res.deletedCount === 1;
}

/** Slug + lastmod for sitemap.xml (published posts only). */
export async function listPublishedBlogSitemapEntries() {
  await dbConnect();

  const docs = await BlogPost.find(publishedFilter())
    .sort({ publishedAt: -1 })
    .select("slug publishedAt updatedAt")
    .lean()
    .exec();

  return docs.map((d) => ({
    slug: d.slug,
    lastmod: toSitemapDate(d.publishedAt || d.updatedAt),
  }));
}

function toSitemapDate(value) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().split("T")[0];
  }
  return date.toISOString().split("T")[0];
}
