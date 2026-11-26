import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://technaviatechnology.com";

  // Static core indexable routes (200 OK canonicals only)
  // Real per-page ISO dates prevent artificial lastmod churn on deployment
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-11-23T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-11-23T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/web-development-seo`,
      lastModified: new Date("2026-11-23T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/llm-visibility`,
      lastModified: new Date("2026-11-23T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-automations`,
      lastModified: new Date("2026-11-23T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: new Date("2026-11-20T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date("2026-11-10T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date("2026-11-23T00:00:00.000Z"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-11-01T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-11-23T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date("2026-11-23T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2026-11-26T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date("2026-10-25T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date("2026-10-20T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  // Dynamic verified proof case studies
  const resultRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/results/seravolve`,
      lastModified: new Date("2026-11-20T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/results/tg-media`,
      lastModified: new Date("2026-11-18T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/results/cosmo-solor`,
      lastModified: new Date("2026-11-15T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Dynamic technical blog blueprints
  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blogs/ranking-in-chatgpt-perplexity`,
      lastModified: new Date("2026-10-15T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs/core-web-vitals-100-guide`,
      lastModified: new Date("2026-10-01T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs/automating-b2b-lead-pipeline`,
      lastModified: new Date("2026-09-15T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs/entity-graph-optimization-geo`,
      lastModified: new Date("2026-08-20T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs/nextjs-15-server-components-seo`,
      lastModified: new Date("2026-07-28T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs/autonomous-crm-sync-agents`,
      lastModified: new Date("2026-06-12T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  return [...staticRoutes, ...resultRoutes, ...blogRoutes];
}
