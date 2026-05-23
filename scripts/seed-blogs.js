/**
 * Seed portfolio-based blog posts. Requires MONGODB_URI in .env (load via dotenv).
 * Images use static paths under /public/images/projects_banner/ for live deployment.
 * Run: npm run seed:blogs
 */
require("dotenv").config({ path: ".env.local" });
require("dotenv").config({ path: ".env" });


const mongoose = require("mongoose");
const samples = require("./blog-seed-data");
const dns = require("dns");
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

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Set MONGODB_URI in .env or .env.local");
    process.exit(1);
  }
  dns.setServers(['127.0.0.1','8.8.8.8'] );

  await mongoose.connect(uri, { maxPoolSize: 5 });
  const slugs = samples.map((s) => s.slug);
  await BlogPost.deleteMany({ slug: { $in: slugs } });
  await BlogPost.insertMany(samples);
  console.log(`Seeded ${samples.length} posts:`);
  slugs.forEach((slug) => console.log(`  - ${slug}`));
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
