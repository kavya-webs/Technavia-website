import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://technaviatechnology.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/lp/"],
      },
      // Search Engines
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/lp/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/lp/"],
      },
      // AI Search & Retrieval Crawlers (ChatGPT Search, Perplexity, Claude, Gemini)
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/lp/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/lp/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/lp/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/lp/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/lp/"],
      },
      // Foundation Model Training & Corpus Ingestion Bots
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/lp/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/lp/"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/lp/"],
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/lp/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
