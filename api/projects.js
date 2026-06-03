import pimg1 from "/public/images/projects_banner/Trading-Automation.png";
import pimg2 from "/public/images/projects_banner/SpeakSmart.png";
import pimg3 from "/public/images/projects_banner/Pocket-Coach-AI.png";
import pimg4 from "/public/images/projects_banner/aipoweredrecruitmentautomation.png";
import pimg5 from "/public/images/projects_banner/Daylily.png";
import pimg6 from "/public/images/projects_banner/AI-Product-Designer.png";
import pimg7 from "/public/images/projects_banner/moonline-ai.png";
import pimg8 from "/public/images/projects_banner/lumera-skin-ai.png";
import pimg9 from "/public/images/projects_banner/CynCity.png";
import pimg10 from "/public/images/projects_banner/Custom-Neon-Sign.png";
import pimg11 from "/public/images/projects_banner/rodeoshop.us.png";
import pimg12 from "/public/images/projects_banner/emb-patches.png";
import pimg13 from "/public/images/projects_banner/dubai-patches.png";

const Projects = [
    {
        id: "1",
        slug: "trading-automation-system",
        title: "Trading Automation System",
        tagline: "Advanced Multi-Account Trading Automation Platform",
        title2: "FinTech",
        title3: "Automation",
        subtitle: "React · Node.js · Python · MongoDB",
        subtitle2: "Multi-account automation",
        pimg1: pimg1,
        date: "2024",
        location: "Remote",
        tags: ["Full-stack", "FinTech"],
        client: "Enterprise trading desk",
        projectType: "Trading automation platform",
        website: { label: "—", href: null },
        detailIntro: [
            "Developed a comprehensive trading automation system that combines modern web technologies with Python-based browser automation to manage multiple trading accounts simultaneously. The system features real-time communication, automated order execution, and advanced risk management.",
            "The platform integrates a React frontend with a Node.js backend and a Python automation bot so traders can manage portfolios, execute trades, and monitor markets in real time. It supports bulk operations through CSV import/export and implements anti-detection measures for reliable platform interaction.",
            "Enterprise-grade architecture handles concurrent operations with multi-threading, stores data in MongoDB, and pushes live updates through Socket.IO.",
        ],
        detailOverviewHeading: "Technology stack & architecture",
        detailOverviewBody: [
            "Microservices-style separation across frontend, backend, and automation workers: React 18 with Redux Toolkit and Material-UI, Tailwind CSS for layout, Express on Node.js, MongoDB persistence, and Socket.IO for live updates.",
            "The Python side uses FastAPI with Selenium WebDriver for Chrome automation, session management across accounts, and safeguards for stable headless operation.",
        ],
        detailHighlightBullets: [
            "Multi-account management with CSV import/export and primary/secondary roles",
            "Automated orders, partial exits, amendments, stop-loss and take-profit flows",
            "REST APIs for accounts, orders, and trades with validation and error handling",
            "Real-time order status and account sync via Socket.IO",
        ],
        detailResultsHeading: "Technical expertise demonstrated",
        detailResultsLead:
            "Demonstrates full-stack delivery across React, Node.js, and Python automation; real-time apps with WebSockets; MongoDB and API design; multi-threading and concurrent workloads; CSV bulk processing; and production-minded deployment patterns.",
        detailOutcomePoints: [
            {
                title: "Real-time operations",
                text: "Socket.IO for live order and account updates across connected clients.",
            },
            {
                title: "Automation at scale",
                text: "Python bot with Selenium, anti-detection patterns, and resilient session handling.",
            },
        ],
    },
    {
        id: "2",
        slug: "speaksmart",
        title: "SpeakSmart",
        tagline: "AI-Powered Real-Time English Conversation Platform",
        title2: "EdTech",
        title3: "AI voice",
        subtitle: "React · Node.js · Flask · OpenAI",
        subtitle2: "Thinkific SSO",
        pimg1: pimg2,
        date: "2024",
        location: "Remote",
        tags: ["AI", "Real-time voice"],
        client: "English learning product team",
        projectType: "AI conversation learning platform",
        website: { label: "speak.englishtodayusa.com", href: "https://speak.englishtodayusa.com" },
        detailIntro: [
            "SpeakSmart helps learners practice spoken English through natural, real-time AI conversations. It connects with Thinkific so students get a seamless path from courses into live speaking practice.",
            "Powered by OpenAI models, the experience supports fluid dialogue—including an optional continuous mode so learners are not forced to click before every utterance.",
            "Built with React.js, Node.js, and Flask with integrations for speech APIs, Thinkific, and Google Workspace.",
        ],
        detailOverviewHeading: "Platform highlights",
        detailOverviewBody: [
            "Frontend: React.js, Tailwind CSS, and client integrations for Web Speech API / WebRTC-style capture where appropriate, with extra care for Safari on Mac and iOS.",
            "Backend: Node.js and Express plus Flask layers, OpenAI APIs for voice and text, and Thinkific plus Google Sheets flows for SSO and provisioning.",
        ],
        detailHighlightBullets: [
            "Live AI conversation with vocal replies",
            "Speech-to-text and text-to-speech tuned for desktop and Android",
            "Thinkific SSO via Google Sheets / Google API with secure onboarding",
            "Transcript review after sessions with clearer personalization",
            "Selectable AI personas and difficulty per session",
        ],
        detailResultsHeading: "Outcome",
        detailResultsLead:
            "Delivers a cross-browser, responsive practice environment that pairs course platforms with conversational AI—showing integration depth across auth, voice, and LMS tooling.",
        detailOutcomePoints: [
            {
                title: "Integrated learning path",
                text: "Frictionless handoff between Thinkific enrollment and AI speaking sessions.",
            },
            {
                title: "Adaptive UX",
                text: "Modes and device quirks handled for smoother recordings and playback.",
            },
        ],
    },
    {
        id: "3",
        slug: "pocket-coach-ai",
        title: "Pocket Coach AI",
        tagline: "Intelligent Business Idea Development Platform",
        title2: "SaaS",
        title3: "AI coaching",
        subtitle: "Next.js · MongoDB · OpenAI Assistants",
        subtitle2: "Idea viability scoring",
        pimg1: pimg3,
        date: "2024",
        location: "Remote",
        tags: ["Next.js", "AI assistants"],
        client: "Startup coaching product",
        projectType: "AI business coaching web app",
        website: { label: "voraiq.com", href: "https://www.voraiq.com/" },
        detailIntro: [
            "Pocket Coach AI guides founders from rough ideas toward clearer plans and market signals using an Assistants-style conversational coach.",
            "Users chat naturally for feedback, strategy prompts, and structured next steps while vScore evaluates viability from inputs and conversation history.",
            "Shipped on Next.js and React with MongoDB, NextAuth (Google, Apple, email/password), Shadcn UI, and Tailwind CSS.",
        ],
        detailOverviewHeading: "Capabilities",
        detailOverviewBody: [
            "Langbase and Relevance AI power recurring industry insights and weekly reports; users can add AI teammates with marketing, finance, or tech specialties.",
            "Media and deployment considerations include Cloudinary and VPS hosting for controlled scaling.",
        ],
        detailHighlightBullets: [
            "Assistants API-driven coaching chat with realtime guidance",
            "vScore viability scoring from structured and unstructured inputs",
            "Multi-provider authentication via NextAuth.js",
            "AI teammate roles for collaborative planning sessions",
            "Modern UI with Shadcn components and responsive layouts",
        ],
        detailResultsHeading: "Product impact",
        detailResultsLead:
            "Combines conversational AI, scoring, and teammate personas into one cohesive founder workflow—demonstrating advanced integration beyond a simple chatbot wrapper.",
        detailOutcomePoints: [
            {
                title: "Actionable insights",
                text: "Automated reporting and industry snapshots keep users oriented weekly.",
            },
            {
                title: "Trustworthy access",
                text: "Enterprise-friendly auth mix without sacrificing onboarding speed.",
            },
        ],
    },
    {
        id: "4",
        slug: "ai-powered-recruitment-automation",
        title: "AI Powered Recruitment Automation",
        tagline: "Advanced Middleware for Intelligent Recruitment",
        title2: "Enterprise AI",
        title3: "Middleware",
        subtitle: "FastAPI · Azure OpenAI · Pinecone",
        subtitle2: "Salesforce ATS bridge",
        pimg1: pimg4,
        date: "2024",
        location: "Remote",
        tags: ["Python", "Vector search"],
        client: "Recruitment technology partner",
        projectType: "AI middleware & matching engine",
        website: { label: "—", href: null },
        detailIntro: [
            "Middleware connects a Salesforce ATS with Azure OpenAI and a vector database to automate candidate sourcing and proposal drafting.",
            "It scores vacancies against large candidate pools using semantic similarity plus business rules—skills, experience, availability, geography, compensation, and history.",
            "FastAPI coordinates Salesforce webhooks, embedding pipelines, Pinecone retrieval, and templated proposal generation for high-fit candidates.",
        ],
        detailOverviewHeading: "Architecture",
        detailOverviewBody: [
            "API gateway handles routing, validation, and auth; services include MatchingService, OpenAIService, VectorDBService, and DocumentProcessor for heterogeneous résumé formats.",
            "Pinecone stores embeddings for résumés and job descriptions; SQLite persists operational state and assistant instructions. Fully async workflows target high concurrency.",
        ],
        detailHighlightBullets: [
            "Semantic job-to-candidate matching with multi-criteria ranking",
            "Dynamic proposal text aligned to each requisition",
            "Lightweight monitoring dashboard for prompts and operations",
            "Dockerized services suitable for cloud deployment",
        ],
        detailResultsHeading: "Stack snapshot",
        detailResultsLead:
            "Python, FastAPI, Uvicorn; Azure OpenAI (gpt-4.1, text-embedding-3-small); Pinecone; Pydantic; NLTK & scikit-learn; SQLAlchemy + SQLite; Jinja2/HTML dashboard; Docker and Git-based delivery.",
        detailOutcomePoints: [
            {
                title: "Recruiter leverage",
                text: "Cuts manual matching time while improving consistency of outreach.",
            },
            {
                title: "Explainable pipeline",
                text: "Composable services make it easier to tune prompts and retrieval.",
            },
        ],
    },
    {
        id: "5",
        slug: "daylily-shopify-ai-assistant",
        title: "Daylily",
        tagline: "Interactive 3D AI Sales Assistant — Shopify App",
        title2: "E-commerce",
        title3: "Shopify",
        subtitle: "React · Node.js · Shopify APIs",
        subtitle2: "Heygen · Langbase",
        pimg1: pimg5,
        date: "2024",
        location: "Remote",
        tags: ["Shopify", "3D avatar"],
        client: "Shopify merchant ecosystem",
        projectType: "Shopify embedded AI sales assistant",
        website: { label: "daylily.chat", href: "https://www.daylily.chat" },
        detailIntro: [
            "Daylily embeds a Heygen-powered 3D avatar that acts as a consultative seller, combining conversational AI with catalog memory for richer storefront interactions.",
            "Langbase supplies NLU and memory modules so the assistant understands each shop's products and shopper behavior for recommendations and upsells.",
            "Uses the Shopify Embedded App SDK, OAuth, Storefront and Admin APIs, plus resilient fallbacks when upstream APIs fluctuate.",
        ],
        detailOverviewHeading: "Merchant-facing capabilities",
        detailOverviewBody: [
            "Billing logic differentiates short interactions from longer sessions and applies commission handling on attributed purchases.",
            "Admin analytics cover sessions, conversions, revenue attribution, and exports for merchandising teams.",
        ],
        detailHighlightBullets: [
            "Interactive avatar storefront experiences",
            "Product memory and personalization per merchant catalog",
            "Usage-based billing with purchase success fees",
            "Mobile-responsive shopper flows",
        ],
        detailResultsHeading: "Technology footprint",
        detailResultsLead:
            "React.js UI with Three.js avatar rendering, Tailwind styling, Node.js/Express services, MongoDB data, Langbase intelligence, Heygen avatars, AWS and Vercel hosting patterns, and deep Shopify OAuth integration.",
        detailOutcomePoints: [
            {
                title: "Conversion focus",
                text: "Designed around measurable shopper sessions and attributable revenue.",
            },
            {
                title: "Operational resilience",
                text: "Graceful degradation paths when AI or partner APIs are degraded.",
            },
        ],
    },
    {
        id: "6",
        slug: "shopify-ai-product-designer",
        title: "Shopify AI Product Designer",
        tagline: "Interactive AI Design Platform for Personalized Products",
        title2: "Shopify",
        title3: "Generative AI",
        subtitle: "React · Remix · Prisma · OpenAI",
        subtitle2: "Canvas & AI imagery",
        pimg1: pimg6,
        date: "2024",
        location: "Remote",
        tags: ["Remix", "DALL·E"],
        client: "Customization-forward brands",
        projectType: "Shopify private customization app",
        website: { label: "—", href: null },
        detailIntro: [
            "Private Shopify app that lets buyers compose personalized merchandise using canvas tools plus AI image generation and edits.",
            "React 18 with TypeScript and Remix ties storefront contexts to resilient API routes; Prisma on SQLite keeps lightweight transactional data while Shopify OAuth secures tenants.",
            "Integrates OpenAI DALL·E 3 and ImagineAPI with Langbase-backed prompt enhancement plus Konva/Fabric canvas workflows.",
        ],
        detailOverviewHeading: "Designer studio",
        detailOverviewBody: [
            "Supports drag-and-drop text, shapes, and imagery with live previews and multi-view products (e.g., front/back).",
            "Theme extension surfaces the studio on product pages; orders carry customized assets and metadata for fulfillment.",
        ],
        detailHighlightBullets: [
            "AI generation and natural-language image edits",
            "Advanced typography and masking tools",
            "Customer dashboards for saved designs",
            "English and German UI via react-i18next",
        ],
        detailResultsHeading: "Delivery highlights",
        detailResultsLead:
            "Modern Remix full-stack patterns, Node 18+, Multer/Formidable uploads, and Shopify-compliant OAuth demonstrate readiness for merchant-grade rollout.",
        detailOutcomePoints: [
            {
                title: "Merchant differentiation",
                text: "Transforms passive PDPs into configurable, AI-assisted experiences.",
            },
            {
                title: "Global-ready UX",
                text: "Localization and responsive layouts cover desktop and mobile shoppers.",
            },
        ],
    },
    {
        id: "7",
        slug: "moonline-ai-voice-agent-restaurants",
        title: "Moonline",
        tagline: "AI Voice Agent for Restaurants",
        title2: "AI Voice",
        title3: "Automation",
        subtitle: "React · Next.js · NestJS · PostgreSQL",
        subtitle2: "POS & VoIP integrations",
        pimg1: pimg7,
        date: "2025",
        location: "Remote",
        tags: ["Voice AI", "Next.js"],
        client: "Restaurant technology partner",
        projectType: "AI voice agent & admin dashboard",
        website: { label: "moonline.ai", href: "https://moonline.ai" },
        detailIntro: [
            "Moonline is an AI-powered voice agent built for restaurants. It automates phone answering, reservations, order-taking, and FAQs using natural, human-like conversations—available 24/7 so no call goes unanswered.",
            "The platform listens with context, remembers preferences where appropriate, and integrates with POS, delivery, and phone systems so it can act as a central automation hub for front-of-house operations.",
            "A real-time admin dashboard surfaces call analytics, transcripts, sentiment, and performance metrics to help operators tune behavior and measure impact.",
        ],
        detailOverviewHeading: "Architecture & goals",
        detailOverviewBody: [
            "Frontend built with React and Next.js for responsive operator dashboards; backend services on Node and NestJS with PostgreSQL for sessions, analytics, and integration metadata.",
            "Voice stack combines speech-to-text and text-to-speech with AI processing for intent recognition, memory-backed personalization, and response generation aligned to each restaurant’s menu and policies.",
        ],
        detailHighlightBullets: [
            "Human-like voice handling for reservations, orders, menu questions, and complaints with optional staff handoff",
            "AI memory for repeat callers, tone configuration, and brand-consistent answers",
            "Real-time analytics: call logs, daily/weekly stats, recordings, and transcripts",
            "Integrations with POS, delivery platforms, CRM, loyalty, and VoIP providers",
        ],
        detailResultsHeading: "Business impact",
        detailResultsLead:
            "Targets zero missed calls, higher conversion on phone orders and bookings, roughly 70% reduction in manual phone workload, and lower operational cost versus dedicated phone coverage.",
        detailOutcomePoints: [
            {
                title: "Revenue & service",
                text: "More orders and reservations captured with intelligent upsell paths and consistent service quality.",
            },
            {
                title: "Operational clarity",
                text: "Dashboards and exports give leadership visibility into volume, intent, and outcomes.",
            },
        ],
    },
    {
        id: "8",
        slug: "lumera-ai-smart-skin-analysis",
        title: "Lumera AI",
        tagline: "Smart Skin Analysis & Skincare App",
        title2: "UI/UX",
        title3: "Beauty-tech",
        subtitle: "Figma · AI skincare flows · Design system",
        subtitle2: "Portfolio-ready mobile UI",
        pimg1: pimg8,
        date: "2025",
        location: "Remote",
        tags: ["Figma", "Mobile UI"],
        client: "Beauty & health-tech concept",
        projectType: "Figma app UI — skin AI & store",
        website: { label: "—", href: null },
        detailIntro: [
            "Lumera AI is a premium mobile app UI designed in Figma: an end-to-end journey from AI-based skin scanning to detailed skin health reports and personalized product recommendations.",
            "The experience blends clarity and calm—percentage-based skin metrics (acne, dryness, wrinkles, overall health), tailored product suggestions with usage duration, and flows for user profiles, storefront, and admin management.",
            "The work demonstrates a complete ecosystem in one cohesive file: splash and onboarding, scanning, reports, store, and admin tooling for catalog updates.",
        ],
        detailOverviewHeading: "Design scope",
        detailOverviewBody: [
            "Soft pastel palette, minimal typography, and custom cards, charts, and navigation patterns suited to dermatology and skincare startups.",
            "Screens cover camera-based scan entry, results dashboards, smart suggestions, patient-style home summaries, category-filtered product store, and admin add/edit product flows.",
        ],
        detailHighlightBullets: [
            "AI skin scan flow with intuitive camera UX",
            "Skin reports with clear percentage breakdowns and condition callouts",
            "Smart product recommendations with suggested treatment duration",
            "Built-in store UI with filters plus admin panel for products and pricing",
        ],
        detailResultsHeading: "Tools & positioning",
        detailResultsLead:
            "Figma-only delivery focused on beauty-tech branding, engagement, and a startup-ready visual system without production code.",
        detailOutcomePoints: [
            {
                title: "Trust & clarity",
                text: "Visual hierarchy keeps medical-adjacent data approachable and scannable.",
            },
            {
                title: "Go-to-market ready",
                text: "Structured flows map cleanly to engineering handoff for AI skincare products.",
            },
        ],
    },
    {
        id: "9",
        slug: "cyncity-ai-health-wellness-platform",
        title: "CynCity",
        tagline: "AI-Powered Health & Wellness Platform",
        title2: "Health",
        title3: "Wearables",
        subtitle: "React · NestJS · SwiftUI · PostgreSQL",
        subtitle2: "Apple Watch & web dashboard",
        pimg1: pimg9,
        date: "2025",
        location: "Remote",
        tags: ["Wearables", "NestJS"],
        client: "Wellness & performance product",
        projectType: "Mobile, watch, web & backend platform",
        website: { label: "Visit App store", href: "https://apps.apple.com/us/app/cyncity/id6742030989" },
        detailIntro: [
            "CynCity is a health and performance platform that combines wearable data, real-time sync, and AI-driven insights across fitness, sleep, stress, nutrition, and mental well-being.",
            "Native iOS with SwiftUI, a dedicated Apple Watch experience, and a React web dashboard give users and professionals layered views of vitals, workouts, recovery, and coaching.",
            "A NestJS backend with PostgreSQL ingests and processes sensor streams at scale, powering predictive analytics, anomaly detection, fatigue and stress modeling, and personalized wellness plans.",
        ],
        detailOverviewHeading: "Platform capabilities",
        detailOverviewBody: [
            "Wearable integration covers heart rate, steps, stress proxies, temperature, sleep stages, and workout telemetry with Bluetooth sync and Apple Watch sensor paths.",
            "AI layers provide coaching suggestions, smart alerts, sleep efficiency scoring, activity intensity graphs, breathing exercises, and offline-friendly caching with push notifications.",
        ],
        detailHighlightBullets: [
            "Real-time wearable sync with Apple Watch–level depth",
            "AI health insights, predictive fatigue/stress signals, and personalized plans",
            "Sleep cycle detection with deep/light insights and optimization tips",
            "SwiftUI iOS app plus React/Next.js web for coaches and power users",
        ],
        detailResultsHeading: "Impact",
        detailResultsLead:
            "Designed for athletes, health-conscious users, and everyday optimizers who need seamless tracking, motivating insights, and global-ready scalability.",
        detailOutcomePoints: [
            {
                title: "Actionable routines",
                text: "Users improve habits with automated tracking and guided wellness tools.",
            },
            {
                title: "Unified ecosystem",
                text: "Wrist, phone, and web stay aligned through a resilient, optimized data pipeline.",
            },
        ],
    },
    {
        id: "10",
        slug: "custom-neon-sign-tool-shopify-ai",
        title: "Custom Neon Sign Tool",
        tagline: "AI Design Platform for Shopify",
        title2: "Shopify",
        title3: "Generative design",
        subtitle: "React · Remix · MySQL · AI",
        subtitle2: "Embedded merchant app",
        pimg1: pimg10,
        date: "2025",
        location: "Remote",
        tags: ["Shopify", "Remix"],
        client: "Custom neon & signage merchants",
        projectType: "Embedded Shopify design & pricing app",
        website: { label: "create-neon-sign", href: "https://customneon.com/create-neon-sign/" },
        detailIntro: [
            "The Custom Neon Sign Tool lets shoppers design neon signs on the storefront with live glow preview, typography controls, wall mockups, and artwork uploads converted into neon-ready artwork with AI assistance.",
            "AI validates manufacturability, suggests neon-friendly revisions, and estimates pricing from dimensions, font complexity, colors, materials, LED tubing, and mount options—reducing production errors and support load.",
            "Fully embedded in Shopify, the app syncs variants, pricing, and order metadata so merchants receive print-ready assets and structured production data.",
        ],
        detailOverviewHeading: "Product surface",
        detailOverviewBody: [
            "React canvas rendering with real-time neon simulation, responsive layouts across desktop and mobile, and mockups on brick, concrete, bedroom, and product scenes.",
            "Remix-powered APIs, MySQL for sessions and saved layers, and automated pricing engine tied into checkout flows.",
        ],
        detailHighlightBullets: [
            "Live neon text designer with fonts, spacing, stroke, and multi-color glow",
            "AI image-to-neon conversion with feasibility checks and bendability guidance",
            "Shopify-embedded experience with variant and order sync",
            "Dynamic pricing from size, materials, complexity, and mount selections",
        ],
        detailResultsHeading: "Merchant outcomes",
        detailResultsLead:
            "Improves conversion through interactive customization, cuts rework with AI validation, and elevates customer confidence via accurate previews and instant quotes.",
        detailOutcomePoints: [
            {
                title: "Fewer errors",
                text: "Print-ready outputs and validation reduce costly remakes.",
            },
            {
                title: "Better buying journey",
                text: "Transparent pricing and immersive previews increase trust and completion rates.",
            },
        ],
    },
    {
        id: "11",
        slug: "rodeo-shop-western-wear",
        title: "Rodeo Shop",
        tagline: "Premium Western Wear E-commerce Store",
        title2: "E-commerce",
        title3: "WordPress",
        subtitle: "WordPress · WooCommerce · Custom Theme",
        subtitle2: "Western Lifestyle Brand",
        pimg1: pimg11,
        date: "2025",
        location: "USA",
        tags: ["WordPress", "WooCommerce", "E-commerce"],
        client: "Rodeo Shop",
        projectType: "E-commerce Website",
        website: { label: "rodeoshop.us", href: "https://rodeoshop.us/" },
        detailIntro: [
            "Developed a complete e-commerce platform for Rodeo Shop, specializing in authentic western wear including cowboy jackets, hats, shirts, boots, and accessories.",
            "Built on WordPress with WooCommerce, featuring a custom-designed theme that captures the rugged spirit of the American West while maintaining modern usability.",
            "Includes product catalog with variants, size guides, customer reviews, and a seamless shopping experience."
        ],
        detailOverviewHeading: "Platform Features",
        detailOverviewBody: [
            "Custom WordPress theme with Western aesthetic and responsive design",
            "WooCommerce integration with advanced product filtering and bulk ordering",
            "High-quality product imagery and lifestyle photography showcase",
            "Order tracking system and customer account management"
        ],
        detailHighlightBullets: [
            "Authentic Western design language",
            "Advanced product filtering & search",
            "Mobile-first responsive design",
            "Order tracking & customer portal",
            "Fast loading optimized for conversions"
        ],
        detailResultsHeading: "Project Outcome",
        detailResultsLead: "Successfully launched a premium online destination for western fashion enthusiasts with strong brand identity and smooth shopping experience.",
        detailOutcomePoints: [
            {
                title: "Brand Identity",
                text: "Strong visual identity reflecting American rodeo culture and craftsmanship."
            },
            {
                title: "E-commerce Performance",
                text: "Optimized for conversions with clear CTAs and smooth checkout flow."
            }
        ],
    },
    {
        id: "12",
        slug: "embroidered-patch-uk",
        title: "EmbroideredPatch",
        tagline: "Custom Embroidered Patches Platform - UK",
        title2: "E-commerce",
        title3: "Custom Products",
        subtitle: "Laravel · PHP · MySQL",
        subtitle2: "Bespoke Patch Builder",
        pimg1: pimg12,
        date: "2025",
        location: "United Kingdom",
        tags: ["Laravel", "E-commerce", "Custom Product"],
        client: "EmbroideredPatch.co.uk",
        projectType: "Custom Product E-commerce Website",
        website: { label: "embroideredpatch.co.uk", href: "https://embroideredpatch.co.uk/" },
        detailIntro: [
            "Built a full-featured custom embroidered patches platform for the UK market using Laravel.",
            "Customers can order various types of patches including iron-on, Velcro, sew-on, biker, military, and more with multiple backing options.",
            "Includes quote system, design upload, free proofing, and order management."
        ],
        detailOverviewHeading: "Key Features",
        detailOverviewBody: [
            "Laravel backend with robust admin panel",
            "Custom product configurator (size, backing, thread colors, etc.)",
            "Artwork upload and free digital proof system",
            "Multi-currency and UK-focused shipping"
        ],
        detailHighlightBullets: [
            "Advanced product customizer",
            "Free design proof & unlimited revisions",
            "Bulk ordering system",
            "Professional admin dashboard",
            "Quote request system"
        ],
        detailResultsHeading: "Technical Excellence",
        detailResultsLead: "Delivered a scalable Laravel solution capable of handling complex custom product workflows with excellent user experience.",
        detailOutcomePoints: [
            {
                title: "Customization Depth",
                text: "Highly flexible patch builder with multiple options and real-time preview."
            },
            {
                title: "Business Efficiency",
                text: "Streamlined ordering and production workflow for the client."
            }
        ],
    },
    {
        id: "13",
        slug: "dubai-patches-uae",
        title: "Dubai Patches",
        tagline: "Premium Custom Patches Manufacturer - UAE",
        title2: "E-commerce",
        title3: "Custom Products",
        subtitle: "Laravel & Core PHP",
        subtitle2: "Gulf Market Leader",
        pimg1: pimg13,
        date: "2025",
        location: "UAE",
        tags: ["Laravel", "PHP", "E-commerce"],
        client: "CustomPatch.ae & Dubaipatches.ae",
        projectType: "Custom Patches E-commerce Platform",
        website: { 
            label: "custompatch.ae / dubaipatches.ae", 
            href: "https://custompatch.ae/" 
        },
        detailIntro: [
            "Developed two high-performance websites for custom patches business in the UAE market.",
            "One built on Laravel and another on core PHP, both offering extensive customization options for embroidered, PVC, woven, military, and other patch types."
        ],
        detailOverviewHeading: "Project Scope",
        detailOverviewBody: [
            "Complete e-commerce solution with advanced product builder",
            "Multi-language & multi-currency support for GCC region",
            "Instant quote system and order management",
            "Professional design upload and approval workflow"
        ],
        detailHighlightBullets: [
            "Advanced patch customizer",
            "Multiple patch types & materials",
            "Fast quote generation",
            "Mobile optimized experience",
            "Strong visual product gallery"
        ],
        detailResultsHeading: "Delivery",
        detailResultsLead: "Successfully delivered professional, conversion-focused websites tailored to the UAE/Gulf market with excellent customization capabilities.",
        detailOutcomePoints: [
            {
                title: "Regional Adaptation",
                text: "Designed specifically for UAE market preferences and business needs."
            },
            {
                title: "Technical Flexibility",
                text: "Built both Laravel and core PHP versions as per client requirements."
            }
        ],
    }
];

export default Projects;
