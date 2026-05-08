import pimg1 from "/public/images/projects_banner/Trading-Automation.png";
import pimg2 from "/public/images/projects_banner/SpeakSmart.png";
import pimg3 from "/public/images/projects_banner/Pocket-Coach-AI.png";
import pimg4 from "/public/images/projects_banner/aipoweredrecruitmentautomation.png";
import pimg5 from "/public/images/projects_banner/Daylily.png";
import pimg6 from "/public/images/projects_banner/AI-Product-Designer.png";

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
        website: { label: "—", href: null },
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
        website: { label: "—", href: null },
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
        website: { label: "—", href: null },
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
];

export default Projects;
