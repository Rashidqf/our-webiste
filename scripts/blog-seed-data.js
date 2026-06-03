/**
 * Portfolio-based blog posts for Ryzonix.
 * Images use static paths under /public/images/projects_banner/ for live deployment.
 */

const AUTHOR = "Ryzonix";

/** @type {Record<string, string>} */
const IMAGES = {
  trading: "/images/projects_banner/Trading-Automation.png",
  speaksmart: "/images/projects_banner/SpeakSmart.png",
  pocketCoach: "/images/projects_banner/Pocket-Coach-AI.png",
  recruitment: "/images/projects_banner/aipoweredrecruitmentautomation.png",
  daylily: "/images/projects_banner/Daylily.png",
  productDesigner: "/images/projects_banner/AI-Product-Designer.png",
  moonline: "/images/projects_banner/moonline-ai.png",
  lumera: "/images/projects_banner/lumera-skin-ai.png",
  cyncity: "/images/projects_banner/CynCity.png",
  neonSign: "/images/projects_banner/Custom-Neon-Sign.png",
  rodeoshop: "/images/projects_banner/rodeoshop.us.png",
  embpatches: "/images/projects_banner/emb-patches.png",
  dubaipatches: "/images/projects_banner/dubai-patches.png",
};

function post({
  slug,
  title,
  title2,
  category,
  description,
  imageKey,
  tags,
  publishedAt,
  readMinutes,
  content,
}) {
  const img = IMAGES[imageKey];
  return {
    slug,
    title,
    title2,
    subtitle: `${category} / BY: ${AUTHOR}`,
    description,
    author: AUTHOR,
    authorTitle: AUTHOR,
    screens: img,
    bloggrid: img,
    blogSingleImg: img,
    tags,
    status: "published",
    publishedAt: new Date(publishedAt),
    readMinutes,
    content,
  };
}

const portfolioPosts = [
  post({
    slug: "building-multi-account-trading-automation-platform",
    title: "Building a multi-account trading automation platform",
    title2: "Lessons from React, Node.js, and Python at scale",
    category: "FINTECH",
    description:
      "How we combined a React dashboard, Node.js APIs, and a Python Selenium bot to automate multi-account trading with real-time updates and risk controls.",
    imageKey: "trading",
    tags: ["FinTech", "Automation", "Full-stack", "React", "Python"],
    publishedAt: "2025-01-12T10:00:00Z",
    readMinutes: 7,
    content: `## The problem

Trading desks often juggle multiple accounts, partial exits, and stop-loss rules across platforms that were never designed for bulk operations. Manual workflows break under volume—and every missed update costs money.

We built a **trading automation system** that lets operators manage portfolios, execute orders, and monitor markets from one dashboard while a Python automation layer handles browser-based execution at scale.

[View the full case study →](/project-single/trading-automation-system)

## Architecture that actually ships

The platform splits cleanly into three layers:

- **React 18 frontend** with Redux Toolkit and Material-UI for account dashboards, order flows, and CSV import/export
- **Node.js / Express backend** with REST APIs for accounts, orders, and trades—validation and error handling baked in from day one
- **Python FastAPI + Selenium** workers for headless Chrome automation, session management, and anti-detection patterns

**MongoDB** stores operational state. **Socket.IO** pushes live order status and account sync so traders never refresh a page hoping for updates.

## What made the difference

### Multi-account management without chaos

CSV import/export, primary/secondary account roles, and concurrent operations via multi-threading let teams scale from a handful of accounts to dozens without rewriting the core.

### Real-time beats polling

WebSocket updates for order status and account sync removed the "did it fill?" anxiety. When money moves fast, latency in the UI is a product bug—not an infra nice-to-have.

### Automation resilience

Selenium sessions fail. Browsers update. Platforms change DOMs. We invested in session recovery, anti-detection measures, and structured error reporting so operators trust the bot instead of babysitting it.

## Takeaways for your next build

1. **Separate UI, API, and automation**—each layer can be deployed, scaled, and debugged independently
2. **Design for bulk ops early**—CSV pipelines and role models are cheaper at the start than bolted on later
3. **Treat real-time as a requirement**—not a Phase 2 feature—for any ops-heavy dashboard

If you are planning a FinTech automation product, [contact us](/contact) to scope architecture before you commit to the wrong split between web and bot layers.`,
  }),

  post({
    slug: "real-time-ai-voice-for-language-learning",
    title: "Real-time AI voice for language learning",
    title2: "Building SpeakSmart with Thinkific SSO and OpenAI",
    category: "EDTECH",
    description:
      "How we shipped a cross-browser AI conversation platform that connects Thinkific courses to live English speaking practice—with SSO, transcripts, and adaptive UX.",
    imageKey: "speaksmart",
    tags: ["EdTech", "AI", "Voice", "React", "OpenAI"],
    publishedAt: "2025-02-08T14:00:00Z",
    readMinutes: 6,
    content: `## Why voice beats drills for fluency

Learners can pass grammar quizzes and still freeze in conversation. **SpeakSmart** closes that gap with natural, real-time AI dialogue—optional continuous mode included so users are not forced to click before every sentence.

The product integrates with **Thinkific** so students move seamlessly from course content into live speaking sessions.

[Explore the SpeakSmart case study →](/project-single/speaksmart)

## Stack and integrations

| Layer | Choices |
|-------|---------|
| Frontend | React.js, Tailwind CSS, Web Speech API / capture flows |
| Backend | Node.js, Express, Flask for AI and LMS bridges |
| AI | OpenAI for voice and text generation |
| Auth | Thinkific SSO via Google Sheets / Google API provisioning |

## Hard problems we solved

### Cross-browser voice UX

Safari on Mac and iOS behaves differently from Chrome on Android. We tuned speech-to-text and text-to-speech paths per device class instead of assuming one Web API path works everywhere.

### Frictionless LMS handoff

Thinkific enrollment should not end in a separate login screen. Google-backed SSO and secure onboarding let learners land in a session in seconds.

### Session value after the call

Transcript review, selectable AI personas, and difficulty settings turn each conversation into feedback learners can act on—not a black box they forget.

## What teams can copy

- **Integrate where users already are** (LMS, CRM, storefront)—do not force a new identity silo
- **Design for device quirks** before launch; voice products live or die on microphone reliability
- **Persist transcripts** for personalization and support; they are product data, not logs

Building an AI learning product? [Browse our portfolio](/project) or [get in touch](/contact).`,
  }),

  post({
    slug: "ai-business-coaching-from-idea-to-vscore",
    title: "From rough idea to viability score with AI coaching",
    title2: "Inside Pocket Coach AI",
    category: "SAAS",
    description:
      "Pocket Coach AI combines OpenAI Assistants, vScore viability scoring, and multi-provider auth to guide founders from ideas toward actionable plans.",
    imageKey: "pocketCoach",
    tags: ["SaaS", "AI", "Next.js", "Startup", "NextAuth"],
    publishedAt: "2025-03-05T09:30:00Z",
    readMinutes: 6,
    content: `## Founders do not need another generic chatbot

They need structured guidance: market signals, strategy prompts, and honest feedback on whether an idea is worth the next six months.

**Pocket Coach AI** delivers that through an Assistants-style conversational coach plus **vScore**—a viability score built from structured inputs and conversation history.

[See Pocket Coach AI in the portfolio →](/project-single/pocket-coach-ai)

## Product building blocks

- **Next.js + React** with Shadcn UI and Tailwind for a modern, responsive shell
- **MongoDB** for user and session data
- **NextAuth.js** with Google, Apple, and email/password—enterprise-friendly without slow onboarding
- **Langbase & Relevance AI** for recurring industry insights and weekly reports
- **AI teammate personas** (marketing, finance, tech) for collaborative planning

## Why vScore matters

Chat alone drifts. A scoring layer forces the product to synthesize what was said into a comparable signal founders can track over time. That turns "interesting conversation" into **actionable product UX**.

## Lessons for AI SaaS founders

1. **Go beyond wrapper UX**—scoring, reports, and personas create retention
2. **Auth flexibility early**—Google + Apple + email covers most B2C and prosumer segments
3. **Weekly rituals**—automated industry snapshots give users a reason to return

We help teams ship AI products that feel like software, not demos. [Contact Ryzonix](/contact) for MVP scoping.`,
  }),

  post({
    slug: "ai-recruitment-middleware-salesforce-pinecone",
    title: "AI recruitment middleware that connects Salesforce to vector search",
    title2: "Semantic matching at enterprise scale",
    category: "ENTERPRISE AI",
    description:
      "A FastAPI middleware layer that scores vacancies against candidate pools using Azure OpenAI embeddings, Pinecone retrieval, and Salesforce ATS webhooks.",
    imageKey: "recruitment",
    tags: ["Python", "FastAPI", "Azure OpenAI", "Pinecone", "Recruitment"],
    publishedAt: "2025-04-18T11:00:00Z",
    readMinutes: 7,
    content: `## Recruiters drown in résumés

Keyword search misses strong fits. Manual review does not scale. We built **AI-powered recruitment automation**—middleware that sits between a **Salesforce ATS** and modern AI retrieval.

[Full project breakdown →](/project-single/ai-powered-recruitment-automation)

## Pipeline overview

\`\`\`
Salesforce webhook → FastAPI gateway → Embedding service → Pinecone query → Ranked matches → Proposal draft
\`\`\`

**MatchingService**, **OpenAIService**, **VectorDBService**, and **DocumentProcessor** compose the core—each tunable without redeploying the whole stack.

## Technical choices

| Component | Role |
|-----------|------|
| Azure OpenAI (gpt-4.1, text-embedding-3-small) | Embeddings and proposal text |
| Pinecone | Vector store for résumés and job descriptions |
| SQLite + SQLAlchemy | Operational state and assistant instructions |
| FastAPI + Uvicorn | Fully async, high-concurrency API |
| Docker | Cloud-ready deployment |

Matching blends **semantic similarity** with business rules: skills, experience, geography, compensation, and availability.

## Why middleware beats monolith

Recruiters keep Salesforce. Engineering keeps AI velocity. A thin, composable layer means you can swap embedding models, tune prompts, and adjust ranking without migrating the ATS.

## If you are building similar systems

- Start with **webhook → embed → retrieve → rank** as the smallest valuable loop
- Persist **prompt and retrieval config** in versioned storage—not hardcoded strings
- Ship a **lightweight ops dashboard** early; non-engineers will need to tune behavior

Need help designing AI middleware? [Talk to us](/contact).`,
  }),

  post({
    slug: "3d-ai-sales-assistant-for-shopify-stores",
    title: "3D AI sales assistants for Shopify stores",
    title2: "What we learned building Daylily",
    category: "E-COMMERCE",
    description:
      "Daylily embeds a Heygen-powered 3D avatar on Shopify storefronts—combining Langbase NLU, catalog memory, and usage-based billing for consultative selling.",
    imageKey: "daylily",
    tags: ["Shopify", "E-commerce", "AI", "3D", "React"],
    publishedAt: "2025-05-22T15:00:00Z",
    readMinutes: 6,
    content: `## Static product pages underperform when shoppers have questions

**Daylily** is a Shopify embedded app that puts an interactive **3D AI sales assistant** on the storefront—powered by Heygen avatars and Langbase intelligence with per-merchant product memory.

[View the Daylily case study →](/project-single/daylily-shopify-ai-assistant)

## Merchant-facing capabilities

- **Interactive avatar** experiences that feel consultative, not gimmicky
- **Catalog-aware recommendations** and upsell paths from Langbase NLU + memory modules
- **Usage-based billing** with commission handling on attributed purchases
- **Admin analytics**: sessions, conversions, revenue attribution, exports

## Architecture highlights

React.js with Three.js for avatar rendering, Node.js/Express services, MongoDB, Shopify Embedded App SDK, OAuth, and Storefront/Admin APIs—with **graceful fallbacks** when partner APIs degrade.

## Conversion-focused design

We measured success in **attributed revenue**, not chat volume. Session length, purchase success fees, and merchant dashboards all align with outcomes merchants care about.

## Takeaways for Shopify AI apps

1. **Plan for API volatility**—Heygen, Langbase, and Shopify all move; degradation paths are mandatory
2. **Bill on value**—session tiers + success fees align incentives
3. **Mobile-first shopper flows**—most storefront traffic is still phone-sized

Building a Shopify AI experience? See our [Shopify projects](/project) or [reach out](/contact).`,
  }),

  post({
    slug: "shopify-ai-product-designer-custom-merchandise",
    title: "Shopify AI product designer for custom merchandise",
    title2: "Canvas tools meet DALL·E on the storefront",
    category: "SHOPIFY",
    description:
      "A private Shopify app combining Konva/Fabric canvas editing, DALL·E 3 generation, and Remix full-stack patterns for personalized product design.",
    imageKey: "productDesigner",
    tags: ["Shopify", "Remix", "Generative AI", "DALL·E", "TypeScript"],
    publishedAt: "2025-06-14T10:00:00Z",
    readMinutes: 6,
    content: `## Personalization sells—but only if buyers can actually design

The **Shopify AI Product Designer** lets shoppers compose custom merchandise with drag-and-drop canvas tools, live previews, multi-view products, and **AI image generation** via DALL·E 3 and ImagineAPI.

[Case study →](/project-single/shopify-ai-product-designer)

## Studio features

- Typography, shapes, masking, and natural-language image edits
- **Theme extension** surfaces the designer on product detail pages
- Orders carry customized assets and metadata for fulfillment
- **English and German** UI via react-i18next

## Stack

React 18 + TypeScript, **Remix** for resilient full-stack routes, Prisma on SQLite for lightweight transactional data, Shopify OAuth for tenant security, Langbase for prompt enhancement.

## Why Remix for merchant apps

Server routes colocated with UI simplify OAuth, webhooks, and file uploads (Multer/Formidable)—fewer moving parts than a detached SPA + API repo for small teams.

## For brands considering AI customization

- **Preview fidelity** drives completion rates—invest in canvas performance early
- **Fulfillment metadata** is as important as the pretty frontend
- **Localization** matters for EU merchants from day one

We build Shopify apps that survive real checkout flows. [Contact us](/contact).`,
  }),

  post({
    slug: "ai-voice-agent-for-restaurants-moonline",
    title: "AI voice agents for restaurants that never miss a call",
    title2: "Building Moonline with NestJS and real-time analytics",
    category: "VOICE AI",
    description:
      "Moonline automates phone answering, reservations, and order-taking for restaurants—with POS integrations, sentiment analytics, and 24/7 coverage.",
    imageKey: "moonline",
    tags: ["Voice AI", "Restaurants", "Next.js", "NestJS", "Automation"],
    publishedAt: "2025-08-03T12:00:00Z",
    readMinutes: 7,
    content: `## Every missed call is lost revenue

Restaurants lose orders and reservations when staff are busy—or after hours. **Moonline** is an AI voice agent that answers naturally, handles menus and FAQs, and integrates with POS, delivery, and VoIP systems.

[Moonline project details →](/project-single/moonline-ai-voice-agent-restaurants)

## What the agent handles

- Reservations, takeout orders, menu questions, complaints—with optional staff handoff
- **Memory for repeat callers**, tone configuration, and brand-consistent answers
- Real-time **analytics**: call logs, transcripts, sentiment, daily/weekly stats

## Stack

React + Next.js dashboards for operators; **NestJS** + **PostgreSQL** for sessions, analytics, and integration metadata; speech-to-text and text-to-speech pipelines with intent recognition aligned to each restaurant's menu and policies.

## Business impact we designed for

- Zero missed calls during peak hours
- ~**70% reduction** in manual phone workload (target metric for operators)
- Higher conversion on phone orders with intelligent upsell paths

## Implementation advice

1. **Menu and policy grounding** beats generic LLM charm—restaurants need accurate answers
2. **Operator dashboards** are the retention surface; voice quality alone is not enough
3. **Integration depth** (POS, delivery, CRM) determines whether the agent can act or only talk

Launching voice automation? [See our work](/project) or [book a consult](/contact).`,
  }),

  post({
    slug: "designing-lumera-ai-skincare-app-ui",
    title: "Designing Lumera AI: skin analysis UX that builds trust",
    title2: "Figma flows from scan to storefront",
    category: "UI/UX",
    description:
      "A premium mobile UI system for AI skin scanning, health reports, personalized recommendations, and an integrated product store—built entirely in Figma.",
    imageKey: "lumera",
    tags: ["UI/UX", "Figma", "Beauty-tech", "Mobile", "Design system"],
    publishedAt: "2025-09-20T09:00:00Z",
    readMinutes: 5,
    content: `## Medical-adjacent data needs calm, clear UI

**Lumera AI** is a Figma-designed mobile experience: AI skin scanning → percentage-based health reports → personalized product recommendations → storefront and admin tooling.

[View Lumera AI →](/project-single/lumera-ai-smart-skin-analysis)

## End-to-end flows in one system

- Splash, onboarding, and camera-based scan entry
- Results dashboards with acne, dryness, wrinkles, and overall health metrics
- Smart suggestions with suggested treatment duration
- Category-filtered store plus admin add/edit product panels

## Design principles

- **Soft pastel palette** and minimal typography reduce anxiety around skin data
- **Custom cards and charts** make percentages scannable at a glance
- **Admin parity**—merchants can update catalog and pricing without a separate tool

## Why Figma-first still matters

For beauty-tech and health startups, a cohesive visual system de-risks engineering handoff and investor demos. We structured screens so engineering can map 1:1 to React Native or Flutter sprints.

## For founders in wellness/beauty

Invest in **trust hierarchy** before animations. Users accept AI suggestions when the report feels authoritative—not flashy.

Need product design or dev handoff? [Contact Ryzonix](/contact).`,
  }),

  post({
    slug: "cyncity-health-platform-wearables-ai-insights",
    title: "CynCity: unifying wearables, web, and AI health insights",
    title2: "SwiftUI, Apple Watch, and NestJS at scale",
    category: "HEALTHTECH",
    description:
      "A health platform combining Apple Watch telemetry, SwiftUI mobile, React web dashboards, and NestJS/PostgreSQL for predictive wellness analytics.",
    imageKey: "cyncity",
    tags: ["Health", "Wearables", "NestJS", "SwiftUI", "Apple Watch"],
    publishedAt: "2025-10-11T11:30:00Z",
    readMinutes: 7,
    content: `## Health data is useless when it stays on the wrist

**CynCity** connects wearable sensors, mobile apps, and web dashboards so users—and coaches—see fitness, sleep, stress, and recovery in one place.

[Full CynCity case study →](/project-single/cyncity-ai-health-wellness-platform)

## Platform surface

| Surface | Tech |
|---------|------|
| iOS + Apple Watch | SwiftUI, Bluetooth sync, on-wrist telemetry |
| Web dashboard | React / Next.js for coaches and power users |
| Backend | NestJS, PostgreSQL, real-time ingestion |

## AI and analytics layers

Predictive fatigue/stress modeling, sleep efficiency scoring, anomaly detection, personalized wellness plans, breathing exercises, and push notifications—with offline-friendly caching.

## Sensor coverage

Heart rate, steps, stress proxies, temperature, sleep stages, workout intensity—synced reliably across wrist, phone, and web.

## Build lessons

1. **Ingestion pipelines** are the product—UI polish cannot fix dropped packets
2. **Coach-facing web** expands TAM beyond consumer-only apps
3. **Predictive alerts** must be tunable; false positives erode trust fast

Building a wellness platform? [Explore our portfolio](/project).`,
  }),

  post({
    slug: "custom-neon-sign-designer-shopify-ai",
    title: "Custom neon sign designer for Shopify with AI validation",
    title2: "Live glow preview meets manufacturability checks",
    category: "SHOPIFY",
    description:
      "An embedded Shopify app for designing neon signs with real-time glow simulation, AI artwork conversion, dynamic pricing, and print-ready production outputs.",
    imageKey: "neonSign",
    tags: ["Shopify", "Remix", "Generative AI", "E-commerce", "Customization"],
    publishedAt: "2025-11-28T14:00:00Z",
    readMinutes: 6,
    content: `## Custom products need custom UX—and fewer remakes

The **Custom Neon Sign Tool** lets shoppers design neon signs on the storefront: live glow preview, typography controls, wall mockups, and **AI-assisted artwork conversion** with manufacturability validation.

[Project case study →](/project-single/custom-neon-sign-tool-shopify-ai)

## Shopper experience

- Real-time neon text designer: fonts, spacing, stroke, multi-color glow
- Mockups on brick, concrete, bedroom, and product scenes
- **Dynamic pricing** from size, materials, complexity, and mount options
- AI checks bendability and suggests neon-friendly revisions

## Merchant integration

Fully embedded in Shopify—variant sync, order metadata, and print-ready assets flow into production without manual re-entry.

## Stack

React canvas rendering, **Remix** APIs, MySQL for sessions and saved layers, automated pricing engine tied to checkout.

## Outcomes merchants care about

- **Fewer production errors** from AI validation before purchase
- **Higher conversion** from immersive previews and instant quotes
- **Lower support load** when pricing is transparent upfront

We specialize in Shopify customization apps. [Get in touch](/contact).`,
  }),
];

const generalPosts = [
  post({
    slug: "why-responsive-secure-web-matters",
    title: "Why responsive, secure web foundations matter in 2026",
    title2: "Build products users trust on every device",
    category: "ENGINEERING",
    description:
      "Performance, accessibility, and security are not extras—they define whether your product scales or stalls.",
    imageKey: "trading",
    tags: ["Web Development", "Security", "Performance"],
    publishedAt: "2026-01-15T10:00:00Z",
    readMinutes: 5,
    content: `## Start with real constraints

Mobile traffic, slow networks, and evolving threats mean your stack choices matter from day one.

### What we optimize for

- **Responsive layouts** that stay usable on small screens
- **Secure defaults** for auth, cookies, and APIs
- **Observability** so issues surface before users churn

> Shipping fast is easier when the foundation does not fight you.

## Patterns from our portfolio

Across [FinTech automation](/project-single/trading-automation-system), [Shopify apps](/project-single/shopify-ai-product-designer), and [voice AI products](/project-single/moonline-ai-voice-agent-restaurants), the same baseline applies: responsive UI, hardened APIs, and deployment hygiene.

## Next steps

If you are planning a new build or a refactor, map non-functional requirements alongside features—they save expensive rewrites later. [Contact Ryzonix](/contact) for a discovery call.`,
  }),

  post({
    slug: "from-mvp-to-production-saas",
    title: "From MVP to production SaaS without a rewrite",
    title2: "Lean scope, solid architecture",
    category: "PRODUCT",
    description:
      "MVPs should validate ideas—but the good ones are structured so you can grow into a real SaaS.",
    imageKey: "pocketCoach",
    tags: ["SaaS", "MVP", "Architecture"],
    publishedAt: "2026-02-10T14:30:00Z",
    readMinutes: 5,
    content: `## Scope the MVP honestly

Cut features, not quality bars for data integrity, auth, and deployment hygiene.

We applied this building [Pocket Coach AI](/project-single/pocket-coach-ai)—viability scoring and AI teammates shipped in a Next.js shell that could grow without a ground-up rewrite.

### Patterns that age well

1. Clear **domain boundaries** between billing, core app, and integrations
2. **Feature flags** instead of hard forks for experiments
3. **Automated deploys** from the first production environment

## When to invest more

Add multi-tenancy hardening, audit logs, and backup strategy before revenue-critical launches—not after.

[Browse our SaaS work](/project) or [start a conversation](/contact).`,
  }),

  post({
    slug: "tech-consulting-before-you-build",
    title: "When tech consulting pays off before you write code",
    title2: "Stack and risk decisions early",
    category: "CONSULTING",
    description:
      "A short architecture review often prevents the wrong framework, host, or data model from becoming debt.",
    imageKey: "recruitment",
    tags: ["Consulting", "Architecture"],
    publishedAt: "2026-03-01T09:00:00Z",
    readMinutes: 4,
    content: `## Questions worth answering early

- Where will **PII** live and how is it encrypted?
- What **SLA** do stakeholders expect for uptime?
- Which **integrations** are must-haves in v1?

These questions shaped builds like our [recruitment AI middleware](/project-single/ai-powered-recruitment-automation) and [restaurant voice agent](/project-single/moonline-ai-voice-agent-restaurants)—different domains, same need for upfront risk mapping.

### Deliverables that help teams

- Written **architecture outline** with trade-offs
- **Risk register** for security and scale
- **Roadmap** that sequences infra vs product work

Consulting should reduce uncertainty—not replace your internal owners. [Contact us](/contact).`,
  }),
  post({
    slug: "rodeo-shop-western-wear-ecommerce",
    title: "Building Rodeo Shop: Premium Western Wear E-commerce",
    title2: "WordPress + WooCommerce with strong brand identity",
    category: "E-COMMERCE",
    description:
      "How we built a high-converting western lifestyle store featuring cowboy jackets, hats, and accessories with custom WordPress & WooCommerce development.",
    imageKey: "rodeoshop",
    tags: ["WordPress", "WooCommerce", "E-commerce", "Custom Theme"],
    publishedAt: "2026-04-05T10:00:00Z",
    readMinutes: 6,
    content: `## From vision to online store

**Rodeo Shop** brings the spirit of the American West to life online — cowboy jackets, western hats, boots, and apparel with authentic rodeo aesthetics and modern shopping experience.

[View Rodeo Shop Project →](/project-single/rodeo-shop-western-wear)

## What we delivered

- Custom WordPress theme designed around rugged Western identity
- Full WooCommerce setup with product variants, size guides, and collections
- Optimized product pages with lifestyle imagery and clear CTAs
- Order tracking system and customer account dashboard
- Fast loading performance and mobile-first responsiveness

## Key Challenges Solved

- Balancing bold Western visual language with clean, modern UX
- Managing complex product variations (sizes, colors, materials)
- Building trust through craftsmanship storytelling and in-house production narrative

## Takeaways

1. **Brand storytelling** is as important as functionality in lifestyle e-commerce.
2. Strong visual hierarchy and lifestyle photography significantly boost conversion.
3. Custom theme development on WordPress still offers excellent flexibility when done right.

Looking to build a premium lifestyle or fashion e-commerce store? [Contact Ryzonix](/contact).`,
  }),

  post({
    slug: "laravel-custom-embroidered-patches-uk",
    title: "Custom Embroidered Patches Platform for UK Market",
    title2: "Built with Laravel – From quote to delivery",
    category: "E-COMMERCE",
    description:
      "End-to-end Laravel solution for custom embroidered patches including configurator, free proofs, multiple backings, and no minimum order policy.",
    imageKey: "embpatches",
    tags: ["Laravel", "PHP", "E-commerce", "Custom Product"],
    publishedAt: "2026-04-12T09:30:00Z",
    readMinutes: 7,
    content: `## Powering custom patch manufacturing in the UK

**EmbroideredPatch.co.uk** is a complete custom product platform where customers can order embroidered patches, Velcro patches, iron-on, biker patches, military patches, and more.

[View EmbroideredPatch Project →](/project-single/embroidered-patch-uk)

## Core Features Delivered

- Advanced product configurator (size, backing type, thread colors, shape, etc.)
- Free artwork upload + unlimited digital proof revisions
- Quote system and bulk ordering capabilities
- Professional admin dashboard for order & production management
- Responsive design optimized for UK customers

## Technical Highlights

- Robust Laravel architecture with clean separation of concerns
- Dynamic pricing engine based on complexity and quantity
- Secure file upload and design approval workflow
- No minimum order logic with scalable backend

## Lessons Learned

1. **Customization depth** is the biggest conversion driver in this industry.
2. Fast proofing and clear communication build strong customer trust.
3. Flexible backend rules (no MOQ, multiple backings) were critical for business success.

Need a powerful custom product platform? [Let’s talk](/contact).`,
  }),

  post({
    slug: "dubai-patches-custom-patches-uae",
    title: "Dubai Patches & CustomPatch.ae – UAE Market Leader",
    title2: "Laravel + Core PHP solutions for Gulf region",
    category: "E-COMMERCE",
    description:
      "Two high-performance custom patches websites built for the UAE market — advanced configurator, multi-language, instant quotes, and premium user experience.",
    imageKey: "dubaipatches",
    tags: ["Laravel", "PHP", "E-commerce", "UAE", "Custom Product"],
    publishedAt: "2026-04-18T11:00:00Z",
    readMinutes: 6,
    content: `## Serving the custom patches demand in the UAE

We developed **CustomPatch.ae** (Laravel) and **Dubaipatches.ae** (Core PHP) — two professional platforms for custom embroidered patches, PVC patches, military patches, woven labels, and more across the Gulf.

[View Dubai Patches Projects →](/project-single/dubai-patches-uae)

## What was delivered

- Powerful patch customizer with multiple materials and backing options
- Instant quote generation system
- Free design proof with unlimited revisions
- Multi-currency and Arabic/English support readiness
- Strong visual product gallery and trust-building elements

## Technical Approach

- One project on modern **Laravel** stack with excellent admin panel
- Second project on optimized **Core PHP** as per client preference
- Clean, fast, and conversion-focused frontend
- Scalable architecture ready for high order volume

## Regional Success Factors

1. Understanding **GCC market expectations** — speed, quality, and premium feel.
2. Strong emphasis on **mobile experience** (majority of traffic).
3. Flexible ordering system (small and bulk orders).

We help businesses in the Middle East establish strong online presence. [Contact us](/contact) for similar custom product platforms.`,
  }),
];

module.exports = [...portfolioPosts, ...generalPosts];
