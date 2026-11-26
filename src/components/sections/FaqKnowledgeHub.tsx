"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X, ArrowUpRight, Mail } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import type { FaqCategoryId, FaqCluster } from "@/data/faqs";

export interface FaqKnowledgeHubProps {
  clusters: FaqCluster[];
}

const FILTER_TABS: Array<{ id: "all" | FaqCategoryId; label: string }> = [
  { id: "all", label: "All (55)" },
  { id: "about-technavia", label: "About TECHNAVIA" },
  { id: "web-design-ecommerce", label: "Web & E-Commerce" },
  { id: "google-seo", label: "Google SEO" },
  { id: "ai-search-geo", label: "AI Search (GEO)" },
  { id: "b2b-ai-automations", label: "B2B Automations" },
];

const MARKDOWN_LINK_REGEX = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

/**
 * Renders inline Markdown citation links (`[Label](https://...)`) inside answers
 * as clean accessible external anchor links without altering the dark-tech theme.
 */
function renderAnswerWithLinks(answer: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of answer.matchAll(MARKDOWN_LINK_REGEX)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > lastIndex) {
      parts.push(answer.slice(lastIndex, matchIndex));
    }

    const label = match[1];
    const href = match[2];
    parts.push(
      <a
        key={`${href}-${matchIndex}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D4F542] underline decoration-[#D4F542]/45 underline-offset-4 hover:decoration-[#D4F542] transition-colors"
      >
        {label}
      </a>
    );

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < answer.length) {
    parts.push(answer.slice(lastIndex));
  }

  return parts.length > 0 ? parts : answer;
}

export function FaqKnowledgeHub({ clusters }: FaqKnowledgeHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | FaqCategoryId>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isFiltering = selectedCategory !== "all" || normalizedQuery.length > 0;

  const visibleCount = useMemo(() => {
    let count = 0;
    for (const cluster of clusters) {
      if (selectedCategory !== "all" && cluster.id !== selectedCategory) continue;
      for (const item of cluster.items) {
        if (
          normalizedQuery.length === 0 ||
          item.question.toLowerCase().includes(normalizedQuery) ||
          item.answer.toLowerCase().includes(normalizedQuery)
        ) {
          count += 1;
        }
      }
    }
    return count;
  }, [clusters, selectedCategory, normalizedQuery]);

  const totalQuestions = useMemo(
    () => clusters.reduce((acc, cluster) => acc + cluster.items.length, 0),
    [clusters]
  );

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <section
      id="faq-knowledge-hub"
      className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-20 md:py-28 px-6 md:px-14 border-t border-white/[0.08]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Knowledge Hub Primary H1 & Freshness Line */}
        <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-10">
          <SectionLabel>AEO / GEO Knowledge Hub</SectionLabel>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-tight font-semibold tracking-[-0.03em] text-[#F8F8F5] leading-[1.08] max-w-4xl">
            Frequently Asked Questions: Web Design, Google SEO, AI Search &amp; B2B Automations
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <p className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.14em] text-[#A8B0BC]">
              Last updated: November 2026 &middot; {totalQuestions} plain-English answers
            </p>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#D4F542]">
              Showing {visibleCount} of {totalQuestions}
            </span>
          </div>
        </div>

        {/* Category Filter Pills & Instant Keyword Filter */}
        <div className="flex flex-col gap-5 bg-[#14161A] border border-white/[0.08] rounded-3xl p-5 sm:p-6">
          {/* Instant Search Input */}
          <div className="relative flex items-center">
            <Search
              className="w-4 h-4 text-[#A8B0BC] absolute left-4 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter 55 answers by keyword (e.g. Core Web Vitals, Shopify, ChatGPT, n8n, cost)..."
              aria-label="Filter frequently asked questions by keyword"
              className="w-full bg-[#0B0D10] border border-white/[0.1] focus:border-[#D4F542]/60 rounded-2xl pl-11 pr-11 py-3.5 text-sm sm:text-base text-[#F8F8F5] placeholder:text-[#A8B0BC]/70 outline-none transition-colors"
            />
            {searchQuery.length > 0 && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute right-3 p-1.5 rounded-full text-[#A8B0BC] hover:text-[#F8F8F5] hover:bg-white/[0.08] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            role="group"
            aria-label="Filter FAQs by topic category"
            className="flex flex-wrap items-center gap-2.5"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-mono uppercase tracking-[0.08em] transition-all cursor-pointer border ${
                    isActive
                      ? "bg-[#D4F542] text-[#0B0D10] border-[#D4F542] font-semibold shadow-[0_0_16px_rgba(212,245,66,0.22)]"
                      : "bg-white/[0.03] text-[#A8B0BC] border-white/[0.1] hover:text-[#F8F8F5] hover:border-white/[0.22]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State for Client Search */}
        {visibleCount === 0 && (
          <div className="bg-[#14161A] border border-white/[0.08] rounded-3xl p-10 text-center flex flex-col items-center gap-4">
            <p className="text-lg font-tight font-medium text-[#F8F8F5]">
              No answers matched &ldquo;{searchQuery}&rdquo;
              {selectedCategory !== "all" ? " in this topic" : ""}.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-full bg-[#D4F542] text-[#0B0D10] font-mono text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#e1fa6c] transition-colors"
            >
              Show All 55 Questions
            </button>
          </div>
        )}

        {/* All 5 Semantic Clusters — All 55 Q&As always mounted in initial SSR HTML DOM */}
        <div className="flex flex-col gap-16">
          {clusters.map((cluster) => {
            const categoryMatches =
              selectedCategory === "all" || cluster.id === selectedCategory;

            const matchingItemsCount = cluster.items.filter(
              (item) =>
                normalizedQuery.length === 0 ||
                item.question.toLowerCase().includes(normalizedQuery) ||
                item.answer.toLowerCase().includes(normalizedQuery)
            ).length;

            const isClusterVisible = categoryMatches && matchingItemsCount > 0;

            return (
              <section
                key={cluster.id}
                id={cluster.id}
                aria-labelledby={`${cluster.id}-heading`}
                className={isClusterVisible ? "flex flex-col gap-6" : "hidden"}
              >
                {/* Cluster Heading Row */}
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.12] pb-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#D4F542]">
                      Cluster {cluster.clusterNum} &middot; {cluster.rangeLabel}
                    </span>
                    <h2
                      id={`${cluster.id}-heading`}
                      className="text-2xl sm:text-3xl font-tight font-semibold tracking-[-0.02em] text-[#F8F8F5]"
                    >
                      {cluster.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#A8B0BC]">
                    {cluster.items.length} Questions
                  </span>
                </div>

                {/* Native <details> Accordion List: all <p> answers stay in SSR HTML */}
                <div className="flex flex-col">
                  {cluster.items.map((item) => {
                    const itemMatches =
                      categoryMatches &&
                      (normalizedQuery.length === 0 ||
                        item.question.toLowerCase().includes(normalizedQuery) ||
                        item.answer.toLowerCase().includes(normalizedQuery));

                    return (
                      <details
                        key={item.id}
                        id={item.id}
                        open={
                          item.num === 1 || (isFiltering && normalizedQuery.length > 0 && itemMatches)
                            ? true
                            : undefined
                        }
                        className={
                          itemMatches
                            ? "group border-b border-white/[0.08]"
                            : "hidden"
                        }
                      >
                        <summary className="list-none [&::-webkit-details-marker]:hidden w-full py-5 md:py-6 flex items-start justify-between gap-5 cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4F542]">
                          <div className="flex items-start gap-3.5 sm:gap-5 pr-2">
                            <span className="font-mono text-xs font-semibold text-[#D4F542] pt-1.5 shrink-0 tracking-wider">
                              {String(item.num).padStart(2, "0")}
                            </span>
                            <h3 className="text-lg sm:text-xl font-tight font-medium text-[#F8F8F5] group-hover:text-[#D4F542] group-open:text-[#D4F542] transition-colors leading-snug">
                              {item.question}
                            </h3>
                          </div>
                          <span
                            aria-hidden="true"
                            className="w-7 h-7 mt-0.5 rounded-full border border-white/[0.14] flex items-center justify-center shrink-0 text-[#A8B0BC] group-open:bg-[#D4F542] group-open:border-[#D4F542] group-open:text-[#0B0D10] group-open:rotate-45 transition-all duration-200 text-lg leading-none"
                          >
                            +
                          </span>
                        </summary>
                        <div className="pb-6 pl-8 sm:pl-10 pr-2 md:pr-10">
                          <p className="text-sm sm:text-base text-[#A8B0BC] leading-relaxed font-sans max-w-4xl">
                            {renderAnswerWithLinks(item.answer)}
                          </p>
                        </div>
                      </details>
                    );
                  })}
                </div>

                {/* 1-Line Contextual Service CTA Bar per Cluster */}
                <div className="mt-2 bg-[#14161A] border border-white/[0.08] rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-sm text-[#A8B0BC] font-sans">
                    Want the full technical breakdown for <strong className="text-[#F8F8F5] font-medium">{cluster.shortLabel}</strong>?
                  </span>
                  <Link
                    href={cluster.relatedServiceHref}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#D4F542] hover:underline underline-offset-4 shrink-0"
                  >
                    <span>{cluster.relatedServiceLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Direct Conversion & Email Architect Strip */}
        <div className="bg-[#14161A] border border-white/[0.1] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#D4F542]">
              Still have a specific technical question?
            </span>
            <p className="text-lg sm:text-xl font-tight font-medium text-[#F8F8F5]">
              Book a free 20-minute architecture review or write directly to our engineers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D4F542] text-[#0B0D10] font-tight font-semibold text-sm hover:bg-[#e1fa6c] transition-colors"
            >
              <span>Book a Free 20-Min Audit Call</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href="mailto:contact@technaviatechnology.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-[#F8F8F5] font-mono text-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4F542]" aria-hidden="true" />
              <span>contact@technaviatechnology.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqKnowledgeHub;
