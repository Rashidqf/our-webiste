/**
 * Seed sample published posts. Requires MONGODB_URI in .env (load via dotenv).
 * Run: npm run seed:blogs
 */
require("dotenv").config({ path: ".env.local" });
require("dotenv").config({ path: ".env" });

const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true },
    title2: String,
    subtitle: String,
    description: String,
    content: { type: String, required: true },
    author: { type: String, required: true },
    authorTitle: String,
    screens: { type: String, required: true },
    bloggrid: String,
    blogSingleImg: String,
    blClass: { type: String, default: "format-standard-image" },
    animation: { type: String, default: "1200" },
    commentCount: { type: Number, default: 0 },
    readMinutes: { type: Number, default: 5 },
    tags: [String],
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
    publishedAt: { type: Date },
  },
  { timestamps: true },
);

const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

const samples = [
  {
    slug: "why-responsive-secure-web-matters",
    title: "Why responsive, secure web foundations matter in 2026",
    title2: "Build products users trust on every device",
    subtitle: "ENGINEERING / BY: Ryzonix",
    description:
      "Performance, accessibility, and security are not extras—they define whether your product scales or stalls.",
    author: "Ryzonix",
    authorTitle: "Ryzonix",
    screens: "/images/blog/img-1.jpg",
    bloggrid: "/images/blog/img-10.jpg",
    blogSingleImg: "/images/blog-details/1.jpg",
    tags: ["Web Development", "Security", "Performance"],
    status: "published",
    publishedAt: new Date("2026-03-15T10:00:00Z"),
    content: `## Start with real constraints

Mobile traffic, slow networks, and evolving threats mean your stack choices matter from day one.

### What we optimize for

- **Responsive layouts** that stay usable on small screens
- **Secure defaults** for auth, cookies, and APIs
- **Observability** so issues surface before users churn

> Shipping fast is easier when the foundation does not fight you.

## Next steps

If you are planning a new build or a refactor, map non-functional requirements alongside features—they save expensive rewrites later.`,
  },
  {
    slug: "from-mvp-to-production-saas",
    title: "From MVP to production SaaS without a rewrite",
    title2: "Lean scope, solid architecture",
    subtitle: "PRODUCT / BY: Ryzonix",
    description:
      "MVPs should validate ideas—but the good ones are structured so you can grow into a real SaaS.",
    author: "Ryzonix",
    authorTitle: "Ryzonix",
    screens: "/images/blog/img-2.jpg",
    bloggrid: "/images/blog/img-11.jpg",
    blogSingleImg: "/images/blog-details/2.jpg",
    tags: ["SaaS", "MVP", "Architecture"],
    status: "published",
    publishedAt: new Date("2026-03-22T14:30:00Z"),
    content: `## Scope the MVP honestly

Cut features, not quality bars for data integrity, auth, and deployment hygiene.

### Patterns that age well

1. Clear **domain boundaries** between billing, core app, and integrations
2. **Feature flags** instead of hard forks for experiments
3. **Automated deploys** from the first production environment

## When to invest more

Add multi-tenancy hardening, audit logs, and backup strategy before revenue-critical launches—not after.`,
  },
  {
    slug: "tech-consulting-before-you-build",
    title: "When tech consulting pays off before you write code",
    title2: "Stack and risk decisions early",
    subtitle: "CONSULTING / BY: Ryzonix",
    description:
      "A short architecture review often prevents the wrong framework, host, or data model from becoming debt.",
    author: "Ryzonix",
    authorTitle: "Ryzonix",
    screens: "/images/blog/img-3.jpg",
    bloggrid: "/images/blog/img-12.jpg",
    blogSingleImg: "/images/blog-details/3.jpg",
    tags: ["Consulting", "Architecture"],
    status: "published",
    publishedAt: new Date("2026-04-01T09:00:00Z"),
    content: `## Questions worth answering early

- Where will **PII** live and how is it encrypted?
- What **SLA** do stakeholders expect for uptime?
- Which **integrations** are must-haves in v1?

### Deliverables that help teams

- Written **architecture outline** with trade-offs
- **Risk register** for security and scale
- **Roadmap** that sequences infra vs product work

Consulting should reduce uncertainty—not replace your internal owners.`,
  },
];

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Set MONGODB_URI in .env or .env.local");
    process.exit(1);
  }

  await mongoose.connect(uri, { maxPoolSize: 5 });
  const slugs = samples.map((s) => s.slug);
  await BlogPost.deleteMany({ slug: { $in: slugs } });
  await BlogPost.insertMany(samples);
  console.log(`Seeded ${samples.length} posts:`, slugs.join(", "));
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
