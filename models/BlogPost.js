import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 200,
    },
    title: { type: String, required: true, trim: true, maxlength: 300 },
    title2: { type: String, trim: true, maxlength: 300 },
    subtitle: { type: String, trim: true, maxlength: 200 },
    description: { type: String, trim: true, maxlength: 2000 },
    /** Markdown body (rendered with react-markdown on the client) */
    content: { type: String, required: true },
    author: { type: String, required: true, trim: true },
    authorTitle: { type: String, trim: true },
    /** Public URL paths under /public, e.g. /images/blog/img-1.jpg */
    screens: { type: String, required: true, trim: true },
    bloggrid: { type: String, trim: true },
    blogSingleImg: { type: String, trim: true },
    blClass: { type: String, default: "format-standard-image", trim: true },
    animation: { type: String, default: "1200", trim: true },
    commentCount: { type: Number, default: 0, min: 0 },
    readMinutes: { type: Number, default: 3, min: 1 },
    tags: [{ type: String, trim: true }],
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },
    publishedAt: { type: Date, index: true },
  },
  { timestamps: true },
);

blogPostSchema.index({ status: 1, publishedAt: -1 });

blogPostSchema.pre("save", function preSave(next) {
  if (
    (this.isModified("status") || this.isNew) &&
    this.status === "published" &&
    !this.publishedAt
  ) {
    this.publishedAt = new Date();
  }
  next();
});

const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
