export type FaqCategoryId =
  | "about-technavia"
  | "web-design-ecommerce"
  | "google-seo"
  | "ai-search-geo"
  | "b2b-ai-automations";

export interface FaqQuestionItem {
  id: string;
  num: number;
  question: string;
  answer: string;
}

export interface FaqCluster {
  id: FaqCategoryId;
  clusterNum: string;
  title: string;
  shortLabel: string;
  rangeLabel: string;
  relatedServiceHref: string;
  relatedServiceLabel: string;
  items: FaqQuestionItem[];
}

export const FAQ_CLUSTERS: FaqCluster[] = [
  {
    id: "about-technavia",
    clusterNum: "01",
    title: "About Technavia Technology & Entity Identity",
    shortLabel: "About Technavia Technology",
    rangeLabel: "Q1–Q10",
    relatedServiceHref: "/results",
    relatedServiceLabel: "See Real Websites We Built →",
    items: [
      {
        id: "q1",
        num: 1,
        question: "What is Technavia Technology?",
        answer:
          "Technavia Technology (also stylized as TECHNAVIA) is a Surat, Gujarat, India-based remote-first B2B and e-commerce technology studio—unaffiliated with Technavia Pvt Ltd or Technavio market research—that builds fast websites engineered for Google SEO, AI search visibility (ChatGPT, Gemini, and Perplexity), and custom B2B AI lead automations. Most client systems launch in 21 days with 100% code and asset ownership.",
      },
      {
        id: "q2",
        num: 2,
        question: "What core services does Technavia Technology offer?",
        answer:
          "Technavia Technology focuses on three connected growth systems: (1) high-speed Website Design and Technical SEO for e-commerce and B2B brands, (2) LLM Visibility (AEO/GEO) so AI assistants recommend your business, and (3) Custom B2B AI Automations for sub-60-second lead response and CRM sync.",
      },
      {
        id: "q3",
        num: 3,
        question: "Who does Technavia Technology typically work with?",
        answer:
          "Technavia Technology partners with e-commerce store owners, D2C brands, and non-technical founders for Website Design, Google SEO, and AI Search Visibility, and with B2B companies, agencies, clinics, and service firms for custom AI lead-response and operations automations.",
      },
      {
        id: "q4",
        num: 4,
        question: "How does Technavia Technology's 21-day build process work?",
        answer:
          "Every Technavia Technology sprint follows five fixed milestones: Days 1–3 audit and offer blueprint, Days 4–10 custom frontend build, Days 11–14 SEO and AI search setup, Days 15–18 CRM and automation wiring, and Days 19–21 speed testing and full handover—requiring under 2 hours of client time.",
      },
      {
        id: "q5",
        num: 5,
        question: "How much do Technavia Technology's services cost?",
        answer:
          "Technavia Technology charges a transparent, fixed project fee based on scope—such as page count, custom e-commerce features, or number of automated workflows—rather than open-ended hourly billing. Every prospective client receives an exact fixed quote after a free 20-minute audit call, with no mandatory monthly retainer.",
      },
      {
        id: "q6",
        num: 6,
        question: "Does Technavia Technology offer a speed or performance guarantee?",
        answer:
          "Yes. Every website Technavia Technology launches is guaranteed to score 95+ on Google's official mobile speed benchmarks (Core Web Vitals) and comes with 100% source-code ownership. If a launched site misses our speed benchmark, we optimize it at no additional cost until it passes.",
      },
      {
        id: "q7",
        num: 7,
        question: "Do clients own 100% of their website, domain, and automations?",
        answer:
          "Yes. Technavia Technology operates on a strict zero-lock-in model. Clients retain 100% ownership of their domain, design files, source code repository, hosting accounts, and self-hosted automation workflows—meaning you are never forced to pay an agency forever just to keep your systems online.",
      },
      {
        id: "q8",
        num: 8,
        question: "Can I inspect real websites Technavia Technology has built?",
        answer:
          "Yes. Technavia Technology showcases live production builds and permissioned self-hosted client mirrors on our Results page, including Seravolve (D2C skincare e-commerce with an interactive 3-step quiz), TG media (growth agency with interactive video reels), and COSMO SOLOR (clean-tech solar platform).",
      },
      {
        id: "q9",
        num: 9,
        question: "Where is Technavia Technology located and what time zones do you serve?",
        answer:
          "Technavia Technology is a remote-first technology studio based in Surat, Gujarat, India serving e-commerce and B2B teams worldwide across North America, Europe, the Middle East, and India. All audits, build reviews, and handover calls are scheduled around your local business hours, with direct email responses within one business day.",
      },
      {
        id: "q10",
        num: 10,
        question: "How do I start a project or request a free audit with Technavia Technology?",
        answer:
          "You can book a free 20-minute strategy call or request a free 5-minute website and AI visibility review directly through Technavia Technology's booking page, or email inquiry@technaviatechnology.com. No preparation or technical knowledge is required—we screen-share your exact opportunities live.",
      },
    ],
  },
  {
    id: "web-design-ecommerce",
    clusterNum: "02",
    title: "Website Design, Speed & E-Commerce Conversion",
    shortLabel: "Web & E-Commerce",
    rangeLabel: "Q11–Q22",
    relatedServiceHref: "/services/web-development-seo",
    relatedServiceLabel: "Explore Web Dev + SEO →",
    items: [
      {
        id: "q11",
        num: 11,
        question: "Why does mobile website speed matter so much for e-commerce sales?",
        answer:
          "Mobile speed directly controls how many paid ad clicks turn into orders. According to [Google's mobile speed research](https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/), 53% of mobile visits are likely to be abandoned if a page takes longer than 3 seconds to load—meaning slow templates waste ad spend before shoppers even see your product.",
      },
      {
        id: "q12",
        num: 12,
        question: "How fast should an e-commerce or business website load?",
        answer:
          "Google defines a \"Good\" Largest Contentful Paint (LCP) as 2.5 seconds or less ([web.dev](https://web.dev/articles/vitals)), while high-converting stores aim for under 1.0 second. Loading main headlines and product visuals in under a second cuts bounce rates and lifts return on ad spend (ROAS).",
      },
      {
        id: "q13",
        num: 13,
        question: "Why isn't my current website converting Meta or Google Ads traffic?",
        answer:
          "Paid ad traffic usually fails to convert for three reasons: slow mobile load times (3–5+ seconds), vague headlines that don't match the ad's promise within 5 seconds, or bloated contact/checkout forms that ask too many questions upfront. Fixing message match, speed, and form friction resolves most leaks.",
      },
      {
        id: "q14",
        num: 14,
        question: "Should an e-commerce store use a custom fast frontend or a standard template?",
        answer:
          "Standard themes work when launching your first product, but stacked plugins and heavy scripts often push mobile load times past 4 seconds. Upgrading to a clean, speed-engineered storefront removes plugin bloat, protects mobile ad clicks, and creates a smoother shopping experience.",
      },
      {
        id: "q15",
        num: 15,
        question: "Can Technavia Technology redesign my existing website without losing my Google rankings?",
        answer:
          "Yes. During every redesign, Technavia Technology maps every existing URL, sets up permanent 301 redirects for any changed paths, preserves winning page titles and headings, and improves page speed—protecting your existing Google traffic while giving search engines a cleaner site to rank.",
      },
      {
        id: "q16",
        num: 16,
        question: "How long does it take to launch a new conversion-focused website?",
        answer:
          "A complete business or e-commerce website with Technavia Technology typically launches in 21 days. Focused single-offer ad landing pages can ship in 5–7 days, while larger custom multi-category stores follow a clear weekly milestone schedule agreed upon before work starts.",
      },
      {
        id: "q17",
        num: 17,
        question: "How much of my time is needed during a website build?",
        answer:
          "You only need roughly 2 hours total across the 21-day build: a 30-minute kickoff call to align on your offer and customers, and a mid-build review call. Technavia Technology handles the strategy, plain-English sales copywriting, mobile design, speed optimization, and launch.",
      },
      {
        id: "q18",
        num: 18,
        question: "Do you write the website copy, or do I have to write it myself?",
        answer:
          "Technavia Technology writes the full conversion copy for you. We structure every page around clear buyer outcomes, proof, and risk reversal—using everyday language your customers actually speak instead of confusing technical buzzwords.",
      },
      {
        id: "q19",
        num: 19,
        question: "Will I be able to edit text, images, and products without hiring a developer?",
        answer:
          "Yes. We build every website so non-technical founders and marketing teams can easily update headlines, product photos, prices, and blog posts, and we include a short screen-recorded handover guide showing exactly how to make updates.",
      },
      {
        id: "q20",
        num: 20,
        question: "Should I send Meta Ads traffic to my homepage or a dedicated landing page?",
        answer:
          "Dedicated landing pages convert significantly better than generic homepages. Sending cold Meta Ads clicks to a single-offer page that mirrors your ad's exact headline and removes distracting navigation bars prevents choice overload and lowers your cost per lead or purchase.",
      },
      {
        id: "q21",
        num: 21,
        question: "How many fields should a high-converting website booking form have?",
        answer:
          "Keep initial forms to 3–4 essential fields (such as Name, Email, and an optional Website URL) or use a 2-step tap-pill flow. Removing high-friction questions like budget ranges and strict timelines on the first step dramatically reduces form abandonment on mobile.",
      },
      {
        id: "q22",
        num: 22,
        question: "Do you provide ongoing maintenance after my website launches?",
        answer:
          "Yes, optionally. Every launch includes a post-launch support window and full documentation so you can run independently, and clients who want continuous SEO growth, new landing pages, or A/B testing can choose a flexible monthly optimization retainer.",
      },
    ],
  },
  {
    id: "google-seo",
    clusterNum: "03",
    title: "Google SEO in Plain English",
    shortLabel: "Google SEO",
    rangeLabel: "Q23–Q33",
    relatedServiceHref: "/services/web-development-seo",
    relatedServiceLabel: "Explore Web Dev + SEO →",
    items: [
      {
        id: "q23",
        num: 23,
        question: "What does \"SEO\" actually mean in simple English?",
        answer:
          "SEO (Search Engine Optimization) means organizing your website's speed, page titles, headings, and product or service descriptions so Google clearly understands what you sell—and shows your business near the top when potential customers search for it, bringing you free traffic without paying per click.",
      },
      {
        id: "q24",
        num: 24,
        question: "What is the difference between Technical SEO and Content SEO?",
        answer:
          "Technical SEO ensures Google can crawl, load, and understand your site cleanly (fast mobile speed, clean URLs, XML sitemaps, and structured data). Content SEO creates helpful pages, product descriptions, and FAQs answering real customer questions. You need both to rank consistently.",
      },
      {
        id: "q25",
        num: 25,
        question: "How long does it take to see results from Google SEO?",
        answer:
          "Technical fixes—like fixing broken indexing, slow mobile speed, and missing page titles—can improve crawl health and impressions within 2 to 6 weeks. Competitive page-one rankings typically compound over 3 to 6 months as Google measures user engagement and site authority.",
      },
      {
        id: "q26",
        num: 26,
        question: "What are Google's Core Web Vitals, and do they affect rankings?",
        answer:
          "Core Web Vitals are Google's three official user-experience metrics: LCP ≤ 2.5s (loading speed), INP ≤ 200ms (click responsiveness), and CLS ≤ 0.1 (visual stability without jumping text) ([web.dev](https://web.dev/articles/vitals)). Passing all three improves both user conversion and search competitiveness.",
      },
      {
        id: "q27",
        num: 27,
        question: "Why is internal linking important for Google SEO?",
        answer:
          "Internal links connect your blog articles, case studies, and homepage to your core service and product pages. Descriptive anchor text tells Google which pages are your most important commercial offerings and helps crawlers discover every page without leaving orphan dead ends.",
      },
      {
        id: "q28",
        num: 28,
        question: "Can a one-page website rank well on Google?",
        answer:
          "One-page websites rarely rank for multiple services or products because Google prefers one focused topic per URL. Separating each core service or product category onto its own dedicated page allows you to match specific buyer searches cleanly and rank for far more keywords.",
      },
      {
        id: "q29",
        num: 29,
        question: "What is a Google Doorway Page, and how do I avoid getting penalized?",
        answer:
          "Doorway pages are dozens of near-identical, copy-pasted pages created only to rank for slightly different cities or industries ([Google Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies)). Avoid penalties by keeping indexed SEO pages genuinely unique and marking repetitive paid-ad landing page variations as noindex.",
      },
      {
        id: "q30",
        num: 30,
        question: "Why isn't my brand-new website showing up on Google yet?",
        answer:
          "New websites stay invisible on Google if they lack an XML sitemap submitted to Google Search Console, have an accidental noindex tag or blocked robots.txt file, or sit behind aggressive CDN bot-challenge screens that return HTTP 403 errors to Googlebot.",
      },
      {
        id: "q31",
        num: 31,
        question: "How does structured data (Schema markup) help my website?",
        answer:
          "Schema markup is invisible background code (JSON-LD) that labels your business name, services, products, reviews, and FAQs in a standardized format. It removes guesswork for Google and AI search engines so they attach the right facts directly to your brand.",
      },
      {
        id: "q32",
        num: 32,
        question: "Do I need to pay for SEO every month forever?",
        answer:
          "Not for foundational Technical SEO. Fixing your site architecture, speed, schema, and core service pages can be completed in a single 21-day sprint. Ongoing monthly SEO is only needed if you want to publish new content and aggressively outrank competitors every month.",
      },
      {
        id: "q33",
        num: 33,
        question: "How does SEO work together with Meta Ads and Google Ads?",
        answer:
          "Paid ads generate immediate traffic and sales today, while SEO builds a compounding organic asset that lowers your average customer acquisition cost over time. Plus, faster SEO-engineered landing pages directly improve ad quality scores and mobile conversion rates.",
      },
    ],
  },
  {
    id: "ai-search-geo",
    clusterNum: "04",
    title: "AI Search, ChatGPT & Perplexity (AEO/GEO)",
    shortLabel: "AI Search (GEO)",
    rangeLabel: "Q34–Q45",
    relatedServiceHref: "/services/llm-visibility",
    relatedServiceLabel: "Explore LLM Visibility →",
    items: [
      {
        id: "q34",
        num: 34,
        question: "What is AI Search Optimization (AEO / GEO) in plain English?",
        answer:
          "Just as SEO helps your website appear on Google, AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) structure your website and brand signals so ChatGPT, Perplexity, Gemini, and Google AI Overviews directly recommend your business when customers ask who to buy from.",
      },
      {
        id: "q35",
        num: 35,
        question: "How is GEO different from traditional Google SEO?",
        answer:
          "Traditional SEO focuses on ranking clickable links for short keywords, while GEO focuses on getting your brand cited inside AI-generated answers to full conversational questions. Because LLMs cite only 2–7 domains per answer ([RankAbove](https://www.rankabove.ai/reports/seo-geo-aeo-page-anatomy)), clarity and verifiable proof matter more than keyword volume.",
      },
      {
        id: "q36",
        num: 36,
        question: "What actually makes ChatGPT and Perplexity cite a website, according to research?",
        answer:
          "In Princeton and Georgia Tech's KDD 2024 study of 10,000 queries ([Aggarwal et al.](https://arxiv.org/abs/2311.09735)), adding credible quotations (+40.9%), concrete statistics (+30.6%), clear fluent writing (+28.0%), and source citations (+27.5%) drove the biggest gains—while keyword stuffing dropped visibility by −8.3%.",
      },
      {
        id: "q37",
        num: 37,
        question: "What is Entity SEO, and why does it matter for AI search?",
        answer:
          "Entity SEO makes search engines and AI models recognize your company as one distinct, verified real-world business rather than random text ([WebYes](https://www.webyes.com/blogs/entity-seo/)). Using one consistent brand name, connected Organization schema, and matching profiles across the web prevents AI tools from confusing or ignoring you.",
      },
      {
        id: "q38",
        num: 38,
        question: "Why does ChatGPT recommend my competitors instead of my business?",
        answer:
          "AI assistants usually recommend competitors because their websites state who they help and what they offer in clearer plain text, their business details match across third-party directories and LinkedIn, or your website's server or robots.txt is accidentally blocking AI crawlers.",
      },
      {
        id: "q39",
        num: 39,
        question: "How long should FAQ answers be to win AI Overviews and LLM citations?",
        answer:
          "AEO research shows that 40 to 60 words immediately following a question-phrased heading is the extraction sweet spot for both Google AI Overviews and AI assistants ([RankAbove](https://www.rankabove.ai/reports/seo-geo-aeo-page-anatomy)). Each answer should be self-contained so it makes total sense when quoted out of context.",
      },
      {
        id: "q40",
        num: 40,
        question: "Does adding an llms.txt file automatically rank my website in ChatGPT?",
        answer:
          "No. Large-scale 2026 crawler studies show that Google ignores llms.txt and over 97% of sites with the file receive zero AI bot requests for it ([bot.spot](https://www.bot.spot/articles/llms-txt)). Real AI visibility comes from server-rendered HTML, entity schema, clear answer blocks, and third-party brand mentions.",
      },
      {
        id: "q41",
        num: 41,
        question: "Which AI crawlers should my website allow in robots.txt?",
        answer:
          "To appear in AI search answers, your robots.txt and CDN firewall should allow search indexing bots including Googlebot, Bingbot, OAI-SearchBot (ChatGPT Search), PerplexityBot, and ClaudeBot—and disable aggressive 403 JavaScript bot challenges that block automated crawlers.",
      },
      {
        id: "q42",
        num: 42,
        question: "Do I need a Wikipedia page to get recommended by ChatGPT or Gemini?",
        answer:
          "No. While Wikipedia is heavily cited for encyclopedic topics, AI search engines pull commercial recommendations from your own entity home website, structured schema, LinkedIn, Clutch, Google Business Profile, and industry publications ([Authority Builders](https://authority.builders/blog/entity-seo/)).",
      },
      {
        id: "q43",
        num: 43,
        question: "Will optimizing for AI Search hurt my regular Google SEO?",
        answer:
          "No—it strengthens it. Google's AI Overviews rely on the same core crawler and helpful-content signals as traditional search ([Google AI Search Guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). Clearer answers, faster server-rendered pages, and cleaner schema lift both channels together.",
      },
      {
        id: "q44",
        num: 44,
        question: "Do I need to rebuild my entire website to improve LLM visibility?",
        answer:
          "Usually no. In most cases, Technavia Technology can upgrade your existing website in 21 days by adding connected Entity and FAQ schema, rewriting key pages with quotable answer blocks, unblocking AI crawlers, and aligning your off-site brand profiles.",
      },
      {
        id: "q45",
        num: 45,
        question: "How do you measure and track AI Search visibility?",
        answer:
          "Because AI answers don't have fixed \"rank #3\" positions like classic Google, Technavia Technology benchmarks 10–25 real buyer prompts in your category across ChatGPT, Perplexity, and Gemini before and after our 21-day build—tracking brand mentions, citation links, and AI referral traffic in analytics.",
      },
    ],
  },
  {
    id: "b2b-ai-automations",
    clusterNum: "05",
    title: "Custom B2B AI Automations & Speed-to-Lead",
    shortLabel: "B2B Automations",
    rangeLabel: "Q46–Q55",
    relatedServiceHref: "/services/ai-automations",
    relatedServiceLabel: "Explore B2B AI Automations →",
    items: [
      {
        id: "q46",
        num: 46,
        question: "Why does responding to B2B leads in under 5 minutes matter so much?",
        answer:
          "According to the MIT and Harvard Business Review Lead Response Management study ([CaseyResponse](https://caseyresponse.com/blog/lead-response-time-statistics)), teams that respond within 5 minutes are 21× more likely to qualify a lead than those waiting 30 minutes, and 78% of buyers purchase from the first business to respond.",
      },
      {
        id: "q47",
        num: 47,
        question: "How does Technavia Technology's sub-60-second AI lead automation work?",
        answer:
          "When a prospect submits your website form or Meta/LinkedIn Lead Ad, our automation captures the inquiry in under a second, researches their company, scores ICP fit, sends a personalized email or WhatsApp reply with your booking link within 60 seconds, and logs everything into your CRM.",
      },
      {
        id: "q48",
        num: 48,
        question: "What B2B workflows deliver the highest ROI to automate first?",
        answer:
          "The three fastest-payback B2B automations are: (1) instant inbound lead capture, enrichment, and calendar booking, (2) two-way CRM data entry and multi-touch follow-up sequences, and (3) automated client onboarding (contracts, folders, welcome emails, and Slack channels) plus weekly KPI reporting.",
      },
      {
        id: "q49",
        num: 49,
        question: "Why does Technavia Technology build automations on self-hosted n8n instead of Zapier?",
        answer:
          "Zapier's per-task pricing becomes expensive quickly as B2B lead volume and multi-step AI calls scale. Self-hosted n8n handles complex AI branching, retries, and API integrations at a fraction of the monthly software cost—and you own 100% of the workflow infrastructure.",
      },
      {
        id: "q50",
        num: 50,
        question: "Which CRMs and B2B tools can Technavia Technology integrate with?",
        answer:
          "Technavia Technology integrates directly with HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho, Google Workspace, Slack, Microsoft Teams, WhatsApp Business API, Calendly, Cal.com, Stripe, Meta Lead Ads, and virtually any platform offering webhooks or a REST API.",
      },
      {
        id: "q51",
        num: 51,
        question: "How long does it take to launch a custom B2B AI automation system?",
        answer:
          "Your first revenue-critical workflow—such as instant lead capture, AI qualification, and CRM sync—typically goes live in 7 to 10 days, with complete multi-workflow sales and onboarding systems tested and handed over within 21 days.",
      },
      {
        id: "q52",
        num: 52,
        question: "Will automated AI lead replies sound robotic to high-ticket B2B buyers?",
        answer:
          "No. Technavia Technology designs brand-matched prompts that reference the prospect's exact form answers, company website, and requested bottleneck—sounding like a sharp, helpful account executive while smoothly handing the conversation to your human sales rep the moment they reply or book.",
      },
      {
        id: "q53",
        num: 53,
        question: "How do you keep client data and CRM credentials secure in AI automations?",
        answer:
          "Workflows run on isolated, self-hosted instances you control using encrypted API keys, scoped permissions, and zero-training enterprise API endpoints—meaning your proprietary lead lists and CRM records are never shared across other clients or used to train public AI models.",
      },
      {
        id: "q54",
        num: 54,
        question: "What happens if a third-party API changes or an automation hits an error?",
        answer:
          "Every Technavia Technology workflow includes automated error-handling branches, automatic retries, and instant Slack or email alerts so silent failures never drop a lead. We also provide full documentation and an optional light support retainer as your tech stack evolves.",
      },
      {
        id: "q55",
        num: 55,
        question: "How quickly do B2B teams typically see ROI from AI automations?",
        answer:
          "Most B2B teams reclaim 15 to 30 hours per week in eliminated manual CRM entry and follow-up busywork while capturing warm ad leads that previously went cold overnight—often paying back the fixed build fee within the first 30 to 60 days.",
      },
    ],
  },
];

export const ALL_FAQS: FaqQuestionItem[] = FAQ_CLUSTERS.flatMap((c) => c.items);

/**
 * Strips Markdown link syntax [Label](https://...) into clean readable plain text for JSON-LD schema.
 */
export function faqAnswerToPlainText(answer: string): string {
  return answer.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1 ($2)");
}
