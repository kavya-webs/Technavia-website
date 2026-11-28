export interface WorkflowItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  tools: string[];
  timestamp: string;
  timeAction: string;
  trigger: string;
  steps: string[];
  result: string;
  img: string;
  caseStudy: {
    client: string;
    metric: string;
    quote: string;
  };
}

export interface ResultItem {
  id: string;
  num: string;
  client: string;
  industry: string;
  year: string;
  badge: string;
  headline: string;
  metric: string;
  metricSub: string;
  summary: string;
  before: string;
  after: string;
  workflowUsed: string;
  highlights: string[];
  url: string;
  ctaText: string;
  previewImg: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface IndustryItem {
  id: string;
  num: string;
  name: string;
  share: string;
  workflows: string[];
  description: string;
  exampleClient: string;
}

export interface ToolItem {
  id: string;
  num: string;
  name: string;
  category: string;
  description: string;
  connectsTo: string[];
  workflowCount: number;
  since: string;
}

export interface ArticleItem {
  slug: string;
  type: string;
  category: "Web Engineering" | "AI Visibility" | "AI Automations";
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export interface FaqItem {
  num: string;
  question: string;
  answer: string;
  category?: string;
}

// -------------------------------------------------------------
// TECHNAVIA 3 CORE SERVICES
// -------------------------------------------------------------
export const WORKFLOWS: WorkflowItem[] = [
  {
    id: "web-dev-seo",
    num: "01",
    title: "Web Development + Technical SEO",
    tagline: "Fast, conversion-focused websites engineered to rank from day one.",
    summary:
      "High-performance Next.js architectures with 100/100 Core Web Vitals, semantic Schema.org hierarchy, and canonical entity graphs designed to index and rank on Google from the moment of launch.",
    description:
      "Slow, bloated agency sites bleed conversion and fail Google's rendering budget. Technavia Technology engineers clean TypeScript codebases with zero render-blocking bloat, achieving sub-400ms LCP times and instant search engine indexation.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Schema.org", "Vercel"],
    timestamp: "02:14",
    timeAction: "Core Web Vitals 100 · Schema Indexed",
    trigger: "Production deployment & automated indexing hook",
    steps: [
      "Modular Next.js App Router build with automated server-side caching",
      "Semantic HTML5 & deep JSON-LD Schema graph injected at build-time",
      "Sub-400ms Largest Contentful Paint (LCP) optimized across global CDNs",
      "Automated XML sitemaps and immediate Google Search Console ping",
    ],
    result: "100/100 Google Lighthouse scores, indexation within 24 hours, and 3.2x higher organic crawl efficiency.",
    img: "/images/tech/web_dev_seo.webp",
    caseStudy: {
      client: "Seravolve",
      metric: "+64% Quiz Conversion · < 1.0s LCP",
      quote: "The 3-step quiz engine and sub-second routine builder Technavia Technology built turned our storefront into an interactive conversion machine.",
    },
  },
  {
    id: "llm-visibility",
    num: "02",
    title: "LLM Visibility (AEO / GEO)",
    tagline: "Structured entity optimization so your brand is recommended by ChatGPT, Gemini & Perplexity.",
    summary:
      "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) that position your company as the authoritative citation when buyers prompt AI models for vendor recommendations.",
    description:
      "Traditional SEO is no longer enough when B2B buyers query ChatGPT, Perplexity, and Gemini instead of clicking 10 blue links. Technavia Technology structures your knowledge graph, entity associations, and authoritative data so AI models cite your brand first.",
    tools: ["ChatGPT", "Gemini", "Perplexity", "Claude", "Knowledge Graph"],
    timestamp: "02:15",
    timeAction: "Knowledge Graph Synced · AI Citations Live",
    trigger: "Continuous LLM citation monitoring & entity sync",
    steps: [
      "Entity graph mapping across Wikidata, Crunchbase, and industry ontologies",
      "Information gain content structuring designed specifically for LLM retrieval (RAG)",
      "Digital PR and authoritative co-occurrence engineering across Tier-1 sources",
      "Automated prompt-benchmark tracking across GPT-4o, Claude 3.5, Gemini Pro, and Perplexity",
    ],
    result: "From 0% to 68% share of AI model recommendations for high-intent category prompts.",
    img: "/images/tech/llm_visibility.webp",
    caseStudy: {
      client: "COSMO SOLOR",
      metric: "185% Inquiry Surge · < 0.6s LCP",
      quote: "Technavia Technology's entity graph optimization and sub-second architecture positioned our renewable solutions prominently across Google and generative search engines.",
    },
  },
  {
    id: "ai-automations",
    num: "03",
    title: "Custom AI Automations",
    tagline: "Tailored workflows that automate lead capture, follow-ups, and operations on autopilot.",
    summary:
      "Event-driven autonomous pipelines that qualify inbound enquiries, enrich firmographics, schedule meetings, and sync CRMs while your team sleeps.",
    description:
      "Eliminate administrative friction and human delay. Technavia Technology connects your web forms, CRM, email infrastructure, and AI models into hardened background workflows that run 24/7 with zero manual intervention.",
    tools: ["Python", "LangChain", "OpenAI API", "Supabase", "n8n"],
    timestamp: "02:16",
    timeAction: "Leads Qualified · Pipeline on Autopilot",
    trigger: "New inbound enquiry or operational event trigger",
    steps: [
      "Form submission triggers instant firmographic data enrichment (company size, revenue, tech stack)",
      "LLM agent evaluates enquiry against ICP criteria and drafts personalized response",
      "High-value leads automatically routed to account executive calendar with full brief attached",
      "CRM records, Slack alerts, and automated follow-up sequences synchronized on autopilot",
    ],
    result: "Average response time dropped from 4 hours to 42 seconds, boosting discovery call bookings by 142%.",
    img: "/images/tech/ai_automations.webp",
    caseStudy: {
      client: "TG media",
      metric: "+310% Pipeline Engagement · 42s Triage",
      quote: "Technavia Technology engineered our 42-second lead triage bus and interactive showcase, eliminating manual ops bottlenecks completely.",
    },
  },
];

// -------------------------------------------------------------
// CASE STUDIES / RESULTS DATA
// -------------------------------------------------------------
export const RESULTS: ResultItem[] = [
  {
    id: "seravolve",
    num: "01",
    client: "Seravolve",
    industry: "D2C E-COMMERCE",
    year: "2025",
    badge: "LIVE PRODUCTION BUILD · D2C E-COMMERCE",
    headline: "Interactive 3-step skincare quiz & custom routine builder engineered for D2C conversion.",
    metric: "+64%",
    metricSub: "QUIZ-TO-CHECKOUT CONVERSION",
    summary: "Custom Next.js 3-step routine quiz with dynamic cart drawer and sub-second checkout.",
    before: "Generic Shopify theme with 3.4s load times and 78% mobile drop-off on catalog pages.",
    after: "Sub-second load speed, 64% quiz completion, and 2.4x higher checkout conversion rate.",
    workflowUsed: "WEB DEV + CRO",
    highlights: [
      "3-Step Hero Quiz Engine",
      "Custom Routine Builder",
      "Multi-Currency E-Commerce UX",
    ],
    url: "https://seravolve.com/",
    ctaText: "Launch Live Site ↗",
    previewImg: "/images/results/seravolve.webp",
    quote: {
      text: "The 3-step quiz engine and sub-second routine builder Technavia Technology built turned our storefront into an interactive conversion machine.",
      author: "Sarah Al-Mansoor",
      role: "Founder & CEO, Seravolve",
    },
  },
  {
    id: "tg-media",
    num: "02",
    client: "TG media",
    industry: "MARKETING AGENCY",
    year: "2025",
    badge: "SELF-HOSTED CLIENT MIRROR · MARKETING AGENCY",
    headline: "Editorial agency showcase featuring interactive vertical reel previews and 3D bento service cards.",
    metric: "+310%",
    metricSub: "PIPELINE ENGAGEMENT",
    summary: "Silky 120Hz video reel masonry, interactive 3D bento grid, and automated lead triage bus.",
    before: "Static agency deck with uncompressed media, sluggish mobile scroll, and zero lead qualification.",
    after: "95+ Core Web Vitals, 42-second lead triage, and 310% higher inbound pipeline engagement.",
    workflowUsed: "MOTION UX + AUTOMATION",
    highlights: [
      "Interactive Video Reel Masonry",
      "3D Stacked Bento Grid",
      "Animated Retention Metrics",
    ],
    url: "https://marketing-agency-neon.vercel.app/",
    ctaText: "Launch Live Preview ↗",
    previewImg: "/images/results/tg_media.webp",
    quote: {
      text: "Our prospective clients are blown away by the reel previews and 3D bento cards. Our inbound booking rate jumped in the first month.",
      author: "Tyler Graham",
      role: "Creative Director, TG media",
    },
  },
  {
    id: "cosmo-solor",
    num: "03",
    client: "COSMO SOLOR",
    industry: "RENEWABLE ENERGY",
    year: "2025",
    badge: "SELF-HOSTED CLIENT MIRROR · RENEWABLE ENERGY",
    headline: "Clean-tech solar conversion platform with interactive story sliders and scroll-reveal architecture.",
    metric: "< 0.6s",
    metricSub: "LCP & COMMERCIAL LEADS",
    summary: "High-speed solar conversion platform with interactive story sliders and schema entity graph.",
    before: "Outdated corporate website with zero mobile responsiveness and poor organic search visibility.",
    after: "0.58s mobile LCP, page-one organic rankings, and 185% commercial solar inquiry surge.",
    workflowUsed: "WEB & SEARCH ARCHITECTURE",
    highlights: [
      "Interactive Stories Carousel",
      "Scroll Blur-Reveal Type",
      "6-Solution Service Grid",
    ],
    url: "https://concept-cosmoenergy.vercel.app/",
    ctaText: "Launch Live Preview ↗",
    previewImg: "/images/results/cosmo_solor.webp",
    quote: {
      text: "Technavia Technology delivered an institutional-grade renewable energy platform that immediately established our credibility with commercial property managers.",
      author: "Christian Cole",
      role: "VP of Operations, COSMO SOLOR",
    },
  },
];

// -------------------------------------------------------------
// SECTORS & CLIENT TYPES
// -------------------------------------------------------------
export const INDUSTRIES: IndustryItem[] = [
  {
    id: "b2b-saas",
    num: "01",
    name: "B2B SaaS & Tech",
    share: "38%",
    workflows: ["Web Dev + Technical SEO", "LLM Visibility", "AI Automations"],
    description: "High-velocity web systems built to convert enterprise buyers and get recommended by generative AI search engines.",
    exampleClient: "Apex Scale, CloudSphere, TensorLabs",
  },
  {
    id: "fintech-finance",
    num: "02",
    name: "FinTech & Professional Services",
    share: "24%",
    workflows: ["Web Dev + Technical SEO", "AI Automations"],
    description: "High-security, sub-second web platforms with automated client intake, KYC verification, and instant reporting.",
    exampleClient: "Vanguard FinTech, Meridian Capital",
  },
  {
    id: "studios-agencies",
    num: "03",
    name: "High-Growth Studios",
    share: "18%",
    workflows: ["LLM Visibility", "AI Automations"],
    description: "Authority positioning that establishes agency founders as category leaders across AI search and traditional SERPs.",
    exampleClient: "Kinetix Studio, Method & Form",
  },
  {
    id: "ecommerce-brands",
    num: "04",
    name: "High-Ticket E-Commerce",
    share: "12%",
    workflows: ["Web Dev + Technical SEO", "LLM Visibility"],
    description: "Headless commerce frontends with deep structured product schema, rich snippets, and generative AI product recommendation indexing.",
    exampleClient: "Aura Home, Valo Gear",
  },
  {
    id: "healthcare-clinics",
    num: "05",
    name: "Specialized Healthcare",
    share: "8%",
    workflows: ["Web Dev + Technical SEO", "AI Automations"],
    description: "Local & technical SEO dominance with automated patient scheduling and zero-friction consultation booking.",
    exampleClient: "Harbour Health, Pulse Ortho",
  },
];

// -------------------------------------------------------------
// TECHNAVIA MODERN TECH STACK
// -------------------------------------------------------------
export const TOOLS: ToolItem[] = [
  {
    id: "nextjs",
    num: "01",
    name: "Next.js & React",
    category: "FRONTEND",
    description: "Sub-second server-side rendering, streaming architectures, and perfect Core Web Vitals.",
    connectsTo: ["TypeScript", "Tailwind CSS", "Vercel"],
    workflowCount: 3,
    since: "2024",
  },
  {
    id: "schema-seo",
    num: "02",
    name: "Schema & JSON-LD",
    category: "TECHNICAL SEO",
    description: "Deep semantic entity graphs enabling Google and AI bots to understand your brand identity.",
    connectsTo: ["Google Search Console", "Wikidata", "Knowledge Graph"],
    workflowCount: 3,
    since: "2024",
  },
  {
    id: "llm-engines",
    num: "03",
    name: "LLM Citation Engines",
    category: "AEO / GEO",
    description: "Structured retrieval engineering for ChatGPT, Gemini, Perplexity, and Claude answer engines.",
    connectsTo: ["OpenAI API", "Anthropic", "Perplexity"],
    workflowCount: 2,
    since: "2024",
  },
  {
    id: "langchain-python",
    num: "04",
    name: "LangChain & Python",
    category: "AI AGENTS",
    description: "Autonomous reasoning agents for real-time lead qualification, firmographic enrichment, and triage.",
    connectsTo: ["Supabase", "OpenAI", "Webhooks"],
    workflowCount: 2,
    since: "2024",
  },
  {
    id: "automation-webhooks",
    num: "05",
    name: "Autonomous Webhooks",
    category: "AUTOMATION",
    description: "Event-driven background pipelines wiring CRMs, calendar systems, and databases with zero latency.",
    connectsTo: ["HubSpot", "Slack", "Stripe", "n8n"],
    workflowCount: 3,
    since: "2024",
  },
  {
    id: "edge-infrastructure",
    num: "06",
    name: "Global Edge Network",
    category: "INFRASTRUCTURE",
    description: "Global CDN distribution, edge serverless computing, and real-time vector database storage.",
    connectsTo: ["Vercel", "Supabase", "Cloudflare"],
    workflowCount: 3,
    since: "2024",
  },
];

// -------------------------------------------------------------
// FAQS
// -------------------------------------------------------------
export const FAQS: FaqItem[] = [
  {
    num: "01",
    category: "TECHNICAL SEO",
    question: "What makes Technavia Technology websites rank faster on Google?",
    answer:
      "Most agency websites are built on bloated CMS templates laden with render-blocking scripts, unoptimized fonts, and broken hierarchy. Technavia Technology engineers clean Next.js architectures with 100/100 Core Web Vitals, sub-400ms LCP times, and deep JSON-LD Schema graphs. Search engine crawlers parse your entity relationships immediately without consuming crawl budget, giving you top rankings faster.",
  },
  {
    num: "02",
    category: "LLM VISIBILITY",
    question: "What is LLM Visibility (AEO / GEO) and why does it matter?",
    answer:
      "Modern buyers increasingly use ChatGPT, Gemini, and Perplexity instead of Google to find software, agencies, and vendors. LLM Visibility (Generative Engine Optimization) structures your content, entity associations, and digital footprint so AI models retrieve and cite your brand as the primary authority when buyers prompt for recommendations.",
  },
  {
    num: "03",
    category: "AI AUTOMATIONS",
    question: "How do your Custom AI Automations work with our existing stack?",
    answer:
      "We build event-driven background pipelines that connect seamlessly into the tools you already use (HubSpot, Salesforce, Slack, Gmail, Supabase). Inbound enquiries are enriched, scored by AI agents, and booked directly into your sales team's calendar within seconds—running 24/7 with zero manual effort.",
  },
  {
    num: "04",
    category: "PROCESS",
    question: "How long does a typical Web Development & SEO project take?",
    answer:
      "Our core builds are executed in a focused 21-day sprint: 5 days for the full website architecture and build, followed by 16 days of deep technical SEO, JSON-LD Schema injection, LLM answer-engine indexing, and automated pipeline integration (21 days total).",
  },
  {
    num: "05",
    category: "INVESTMENT",
    question: "Can we hire Technavia Technology on an ongoing retainer?",
    answer:
      "Yes. In addition to fixed-price project builds, we offer ongoing Autopilot Retainers that cover continuous technical SEO optimization, LLM prompt-citation monitoring, and automated workflow expansion as your business scales.",
  },
  {
    num: "06",
    category: "OWNERSHIP",
    question: "Who owns the code, intellectual property, and AI workflows?",
    answer:
      "You own 100% of everything we build. All Next.js source code, custom Python scripts, Schema configurations, and automation workflows are handed over directly to your team or GitHub repository with complete documentation.",
  },
];

// -------------------------------------------------------------
// ARTICLES & INSIGHTS
// -------------------------------------------------------------
export const ARTICLES: ArticleItem[] = [
  {
    slug: "ranking-in-chatgpt-perplexity",
    type: "Guide",
    category: "AI Visibility",
    date: "November 2025",
    readTime: "6 min read",
    title: "How to rank your brand in ChatGPT, Perplexity, and Gemini (AEO/GEO)",
    excerpt:
      "The definitive framework for structuring your company's entity graph and content so generative AI search engines cite you as the primary category authority.",
    coverImage: "/images/tech/llm_visibility.webp",
    tags: ["AEO", "GEO", "Schema", "ChatGPT", "Perplexity"],
    featured: true,
    author: {
      name: "Technavia Technology Engineering",
      role: "AI & Search Architecture",
    },
    content: [
      "Generative AI has fundamentally shifted how B2B buyers discover solutions. Instead of scrolling through 10 Google links, buyers ask: 'What are the top web engineering studios for AI startups?'",
      "If your brand isn't structured into the training weights, retrieval corpora, or live search indexes of Perplexity and ChatGPT Search, you are effectively invisible to the highest-intent buyers.",
      "In this guide, we break down the 3 layers of Generative Engine Optimization: Entity Graph Mapping, Information Gain Content Structuring, and Digital Authority Co-occurrence.",
      "Layer 1: Semantic Entity Mapping — Connecting your organization to authoritative nodes on Wikidata, Crunchbase, and Schema.org using exact SameAs references.",
      "Layer 2: High Information-Gain Content — Structuring answers in direct, definitive subject-predicate syntax so retrieval-augmented generation (RAG) models quote your site as the canonical source.",
      "Layer 3: Cross-Corpus Co-occurrence — Ensuring your brand is discussed alongside adjacent industry leaders across podcasts, GitHub repos, technical publications, and press releases.",
    ],
  },
  {
    slug: "core-web-vitals-100-guide",
    type: "Benchmark",
    category: "Web Engineering",
    date: "October 2025",
    readTime: "5 min read",
    title: "Why sub-400ms LCP is the highest-ROI technical SEO lever",
    excerpt:
      "How clean Next.js architecture and zero-render-blocking engineering directly translate into higher organic crawl frequency and top Google rankings.",
    coverImage: "/images/tech/web_dev_seo.webp",
    tags: ["Next.js", "Core Web Vitals", "LCP", "Page Speed"],
    author: {
      name: "Technavia Technology Engineering",
      role: "Frontend Systems",
    },
    content: [
      "Page speed is not just a vanity metric—it dictates Google's crawl budget allocation and mobile ranking indexation.",
      "When your Largest Contentful Paint loads in under 400ms, search engine spiders can render 10x more pages per second, indexing new commercial content within hours instead of weeks.",
      "Here is how we eliminate hydration bloat and leverage edge caching to achieve consistent 100/100 Lighthouse performance across mobile and desktop devices.",
      "By stripping out third-party tag managers that block the main thread and deferring non-critical telemetry, the browser engine executes first paint instantly.",
      "Combine Next.js Server Components with automatic AVIF image compression and self-hosted fonts, and every interaction responds under 50 milliseconds.",
    ],
  },
  {
    slug: "automating-b2b-lead-pipeline",
    type: "Architecture",
    category: "AI Automations",
    date: "September 2025",
    readTime: "7 min read",
    title: "Automating B2B lead capture: From 4 hours to 42 seconds",
    excerpt:
      "How event-driven AI pipelines qualify inbound enquiries, enrich firmographics, and schedule meetings while the sales team sleeps.",
    coverImage: "/images/tech/ai_automations.webp",
    tags: ["AI Agents", "Webhooks", "Lead Triage", "HubSpot"],
    author: {
      name: "Technavia Technology Engineering",
      role: "Autonomous Operations",
    },
    content: [
      "Speed-to-lead is the single highest predictor of deal closure. A lead contacted within 5 minutes is 21 times more likely to enter the sales cycle than one contacted after 30 minutes.",
      "By connecting web forms to LLM agents and webhook triggers, Technavia Technology customers enrich company revenue and tech stack data instantly, booking qualified calls without any human overhead.",
      "The incoming payload triggers a serverless background worker that queries Apollo and Clearbit APIs, computes an ICP match score, and assigns a sales tier in real time.",
      "If the lead meets Tier-1 threshold, a personalized calendar link is dispatched within 42 seconds, and the prospect's profile is synced straight to Slack and HubSpot.",
    ],
  },
  {
    slug: "entity-graph-optimization-geo",
    type: "Blueprint",
    category: "AI Visibility",
    date: "August 2025",
    readTime: "8 min read",
    title: "Entity Graph Optimization: Structuring Schema for LLM Crawlers",
    excerpt:
      "How to build machine-readable JSON-LD entity graphs that establish your organization as the definitive authority in your niche.",
    coverImage: "/images/tech/process_indexing.webp",
    tags: ["Entity Graphs", "Knowledge Base", "Wikidata", "JSON-LD"],
    author: {
      name: "Technavia Technology Engineering",
      role: "Knowledge Engineering",
    },
    content: [
      "Standard meta tags are no longer sufficient. When search algorithms like Google Gemini or OpenAI O1 crawl your website, they do not just read text—they construct knowledge graphs.",
      "An entity graph is a structured network of nodes representing your organization, its founders, founders' credentials, trademarks, offerings, and parent categories.",
      "By implementing deeply nested JSON-LD schema with exact @id references, you give LLMs mathematically unambiguous proof of who you are, what you deliver, and why you should be recommended.",
      "In this blueprint, we outline the exact Schema architecture Technavia Technology injects into every client build to dominate entity extraction pipelines.",
    ],
  },
  {
    slug: "nextjs-15-server-components-seo",
    type: "Deep Dive",
    category: "Web Engineering",
    date: "July 2025",
    readTime: "6 min read",
    title: "Next.js 15 Server Components: Eliminating Client Hydration Bloat",
    excerpt:
      "A deep dive into zero-bundle-size React Server Components and how they enable blisteringly fast rendering for enterprise B2B websites.",
    coverImage: "/images/tech/process_build.webp",
    tags: ["React Server Components", "SSR", "TypeScript", "Performance"],
    author: {
      name: "Technavia Technology Engineering",
      role: "Fullstack Architecture",
    },
    content: [
      "For years, modern JavaScript frameworks suffered from the client-side hydration penalty: shipping megabytes of JavaScript that froze mobile CPUs before users could click.",
      "Next.js 15 Server Components completely solve this paradigm. By rendering the markup on edge servers and shipping pure HTML to the client, initial JavaScript execution drops by over 80%.",
      "We explain how to isolate client interactivity into tiny leaves at the edges of your component tree while keeping the entire document structure server-rendered for instant indexing.",
    ],
  },
  {
    slug: "autonomous-crm-sync-agents",
    type: "Case Study",
    category: "AI Automations",
    date: "June 2025",
    readTime: "9 min read",
    title: "Building Resilient AI Agents with n8n, Supabase Vector & Webhooks",
    excerpt:
      "Architectural patterns for running multi-step AI agents that never fail silently and automatically recover from external API timeouts.",
    coverImage: "/images/tech/process_automate.webp",
    tags: ["n8n", "Vector Search", "Supabase", "Autonomous Ops"],
    author: {
      name: "Technavia Technology Engineering",
      role: "AI Infrastructure",
    },
    content: [
      "When automation workflows break, deals fall through the cracks. Most naive AI automations fail because they lack idempotency keys, rate limiters, and retry queues.",
      "At Technavia Technology, we deploy mission-critical workflows with defensive engineering: every webhook payload is stored immediately in Supabase before processing.",
      "If OpenAI rate-limits or a third-party CRM returns a 502, our queue scheduler backs off exponentially and retries automatically without losing a single client record.",
    ],
  },
];

// -------------------------------------------------------------
// PROCESS STEPS
// -------------------------------------------------------------
export interface ProcessStepItem {
  step: string;
  week: string;
  title: string;
  headline: string;
  description: string;
  clientRole: string;
  img: string;
}

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: "01",
    week: "PHASE 1",
    title: "Audit",
    headline: "Forensic technical & entity analysis",
    description:
      "We perform an in-depth audit of your web performance, semantic entity footprint, search rankings, and operational bottlenecks to build a prioritized roadmap.",
    clientRole:
      "A 60-minute discovery call; access to search console and current workflow blueprints.",
    img: "/images/tech/process_audit.webp",
  },
  {
    step: "02",
    week: "PHASE 2",
    title: "Build",
    headline: "Engineering clean web architecture",
    description:
      "We engineer a lightning-fast Next.js application with zero bloat, rigorous TypeScript types, modern Tailwind styles, and sub-second Core Web Vitals.",
    clientRole:
      "Review interactive staging environment and sign off on core page templates.",
    img: "/images/tech/process_build.webp",
  },
  {
    step: "03",
    week: "PHASE 3",
    title: "Index",
    headline: "LLM visibility & structured search schema",
    description:
      "We deploy JSON-LD knowledge graphs, entity relationships, and semantic topic clusters engineered for top rankings on Google and citations in ChatGPT & Perplexity.",
    clientRole:
      "Sign-off on brand entity claims, core services, and knowledge graph attributes.",
    img: "/images/tech/process_indexing.webp",
  },
  {
    step: "04",
    week: "PHASE 4",
    title: "Automate",
    headline: "Connecting pipelines to autopilot",
    description:
      "We wire inbound forms, instant AI lead qualification, CRM synchronization, and automated notification pipelines so growth operations run 24/7.",
    clientRole:
      "Review dummy-lead test run and automated notification alerts.",
    img: "/images/tech/process_automate.webp",
  },
  {
    step: "05",
    week: "ONGOING",
    title: "Scale",
    headline: "Autonomous growth & rank monitoring",
    description:
      "Continuous monitoring of organic keyword rankings, LLM answer engine visibility, and automated workflow uptime with executive monthly reporting.",
    clientRole:
      "Read a 60-second summary while drinking your coffee.",
    img: "/images/tech/process_scale.webp",
  },
];
