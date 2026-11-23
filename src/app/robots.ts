import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/", "/lp/"],
    },
    sitemap: "https://technaviatechnology.com/sitemap.xml",
  };
}
