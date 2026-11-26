"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, BookOpen } from "lucide-react";

export type ServiceGuideKey =
  | "web-development-seo"
  | "llm-visibility"
  | "ai-automations";

interface RelatedLinkItem {
  label: string;
  tag: string;
  href: string;
}

const SERVICE_RELATED_LINKS: Record<ServiceGuideKey, RelatedLinkItem[]> = {
  "web-development-seo": [
    {
      tag: "BENCHMARK",
      label: "Why sub-400ms LCP is the highest-ROI technical SEO lever",
      href: "/blogs/core-web-vitals-100-guide",
    },
    {
      tag: "ARCHITECTURE",
      label: "Next.js 15 Server Components: Eliminating Client Hydration Bloat",
      href: "/blogs/nextjs-15-server-components-seo",
    },
    {
      tag: "METHODOLOGY",
      label: "See Our 21-Day Build Process (5d Web + 16d SEO)",
      href: "/process",
    },
  ],
  "llm-visibility": [
    {
      tag: "AEO / GEO GUIDE",
      label: "How to rank your brand in ChatGPT, Perplexity, and Gemini",
      href: "/blogs/ranking-in-chatgpt-perplexity",
    },
    {
      tag: "SCHEMA BLUEPRINT",
      label: "Entity Graph Optimization: Structuring Schema for LLM Crawlers",
      href: "/blogs/entity-graph-optimization-geo",
    },
    {
      tag: "METHODOLOGY",
      label: "See Our 21-Day Build Process (5d Web + 16d SEO)",
      href: "/process",
    },
  ],
  "ai-automations": [
    {
      tag: "PIPELINE GUIDE",
      label: "Automating B2B lead capture: From 4 hours to 42 seconds",
      href: "/blogs/automating-b2b-lead-pipeline",
    },
    {
      tag: "INFRASTRUCTURE",
      label: "Building Resilient AI Agents with n8n, Supabase Vector & Webhooks",
      href: "/blogs/autonomous-crm-sync-agents",
    },
    {
      tag: "METHODOLOGY",
      label: "See Our 21-Day Build Process (5d Web + 16d SEO)",
      href: "/process",
    },
  ],
};

function AdModeDetector({ onAdChange }: { onAdChange: (isAd: boolean) => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hasAdParam =
      searchParams.get("ad") === "1" || Boolean(searchParams.get("utm_source"));
    onAdChange(hasAdParam);
  }, [searchParams, onAdChange]);

  return null;
}

/**
 * Compact 3-link internal cluster strip rendered directly below #service-book on service pages.
 * Remains present in SSR static HTML for organic search crawlers while hiding client-side for
 * paid ad visitors (?ad=1 or ?utm_source=...) so ad traffic stays locked onto #service-book.
 */
export function ServiceRelatedStrip({ serviceType }: { serviceType: ServiceGuideKey }) {
  const [isAdMode, setIsAdMode] = useState(false);
  const links = SERVICE_RELATED_LINKS[serviceType];

  if (isAdMode) {
    return null;
  }

  return (
    <section
      aria-label="Related Guides and Process"
      className="py-10 md:py-12 px-6 md:px-10 lg:px-16 border-b border-white/[0.08] bg-[#0B0D10]"
    >
      <Suspense fallback={null}>
        <AdModeDetector onAdChange={setIsAdMode} />
      </Suspense>

      <div className="max-w-[1280px] mx-auto flex flex-col gap-5">
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#A8B0BC]">
          <BookOpen className="w-3.5 h-3.5 text-[#D4F542]" />
          <span>RELATED GUIDES &amp; PROCESS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-4 sm:p-5 rounded-2xl bg-[#14161A]/80 border border-white/[0.08] hover:border-[#D4F542]/50 hover:bg-[#14161A] transition-all flex flex-col justify-between gap-3 group"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4F542] font-semibold">
                {item.tag}
              </span>
              <span className="text-sm font-tight font-medium text-[#F8F8F5] group-hover:text-[#D4F542] transition-colors leading-snug">
                {item.label}
              </span>
              <span className="text-xs font-mono text-[#A8B0BC] group-hover:text-[#D4F542] inline-flex items-center gap-1.5 pt-1">
                <span>Read more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceRelatedStrip;
