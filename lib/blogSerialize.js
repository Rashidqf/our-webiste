function formatMetaDate(date) {
  if (!date || Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatDayMonth(date) {
  if (!date || Number.isNaN(date.getTime())) {
    return { day: "", month: "" };
  }
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
  };
}

/**
 * Shape expected by existing blog UI components (replacing api/blogs.js static entries).
 */
export function toPublicBlog(doc, { includeContent = true } = {}) {
  const o = doc.toObject ? doc.toObject() : { ...doc };
  const rawDate = o.publishedAt || o.createdAt;
  const date = rawDate ? new Date(rawDate) : null;
  const { day, month } = formatDayMonth(date);

  const base = {
    id: o._id ? String(o._id) : o.id,
    slug: o.slug,
    title: o.title,
    title2: o.title2 || o.title,
    subtitle: o.subtitle || "",
    description:
      o.description ||
      "Read the full article on the Ryzonix journal—insights on web development, product delivery, and tech consulting.",
    author: o.author,
    authorTitle: o.authorTitle || o.author,
    create_at: formatMetaDate(date),
    day,
    month,
    screens: o.screens,
    bloggrid: o.bloggrid || o.screens,
    blogSingleImg: o.blogSingleImg || o.screens,
    blClass: o.blClass || "format-standard-image",
    animation: o.animation || "1200",
    comment: String(o.commentCount ?? 0),
    link: "READ MORE",
    tags: Array.isArray(o.tags) ? o.tags : [],
    readMinutes: o.readMinutes ?? 3,
  };

  if (includeContent) {
    base.content = o.content || "";
  }

  return base;
}
