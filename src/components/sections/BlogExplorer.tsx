"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArticleItem } from "@/lib/data";

interface BlogExplorerProps {
  articles: ArticleItem[];
}

const CATEGORIES = ["All", "Web Engineering", "AI Visibility", "AI Automations"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export function BlogExplorer({ articles }: BlogExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "read-time-asc" | "read-time-desc">("newest");

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let result = articles.filter((article) => {
      // Category match
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category?.toLowerCase().includes(q) ||
        article.tags?.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortBy === "read-time-asc") {
        const timeA = parseInt(a.readTime) || 0;
        const timeB = parseInt(b.readTime) || 0;
        return timeA - timeB;
      }
      if (sortBy === "read-time-desc") {
        const timeA = parseInt(a.readTime) || 0;
        const timeB = parseInt(b.readTime) || 0;
        return timeB - timeA;
      }
      if (sortBy === "oldest") {
        return a.slug.localeCompare(b.slug);
      }
      // default newest: keep order
      return 0;
    });

    return result;
  }, [articles, searchQuery, selectedCategory, sortBy]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: articles.length };
    articles.forEach((a) => {
      if (a.category) {
        counts[a.category] = (counts[a.category] || 0) + 1;
      }
    });
    return counts;
  }, [articles]);

  const featured = useMemo(() => {
    return articles.find((a) => a.featured) || articles[0];
  }, [articles]);

  const showFeaturedSpotlight = selectedCategory === "All" && !searchQuery.trim();

  return (
    <div className="flex flex-col gap-12 w-full">
      {/* Search, Filter & Sort Control Panel */}
      <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-[#14161A]/90 border border-white/[0.08] backdrop-blur-md shadow-2xl">
        {/* Top Row: Search Input & Sort Selector */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blueprints by title, concept, or tag (e.g. Next.js, GEO, Schema)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#0B0D10] border border-white/[0.12] text-sm text-[#F8F8F5] placeholder:text-white/40 focus:outline-none focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-white transition-colors"
                title="Clear search"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-white/50 uppercase tracking-wider whitespace-nowrap">
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2.5 rounded-xl bg-[#0B0D10] border border-white/[0.12] text-xs font-mono text-[#F8F8F5] focus:outline-none focus:border-[#D4F542] transition-colors cursor-pointer"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="read-time-asc">Read time: Quickest</option>
              <option value="read-time-desc">Read time: Deep dive</option>
            </select>
          </div>
        </div>

        {/* Bottom Row: Category Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-white/[0.06]">
          <div className="flex items-center overflow-x-auto scrollbar-none pb-1 sm:pb-0 gap-2 max-w-full">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap min-h-[36px] ${
                    isSelected
                      ? "bg-[#D4F542] text-black font-semibold shadow-[0_0_12px_rgba(212,245,66,0.35)]"
                      : "bg-[#0B0D10] text-white/70 hover:text-white border border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-black/15 text-black" : "bg-white/[0.08] text-white/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Result Count */}
          <span className="text-xs font-mono text-white/50">
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? "blueprint" : "blueprints"}
          </span>
        </div>
      </div>

      {/* Featured Spotlight (Visible when unfiltered) */}
      {showFeaturedSpotlight && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4F542]">
            <span className="w-2 h-2 rounded-full bg-[#D4F542] animate-pulse" />
            FEATURED BLUEPRINT
          </div>

          <Link
            href={`/blogs/${featured.slug}`}
            className="group relative overflow-hidden rounded-3xl bg-[#14161A] border border-white/[0.12] hover:border-[#D4F542]/60 transition-all duration-400 p-8 sm:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between backdrop-blur-md shadow-2xl"
          >
            {/* Background Image with subtle gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/80 to-transparent" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-between gap-6 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-semibold">
                  {featured.category}
                </span>
                <span className="text-white/60 font-medium">
                  {featured.date} · {featured.readTime}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-3xl sm:text-5xl font-tight font-semibold text-[#F8F8F5] group-hover:text-[#D4F542] transition-colors leading-[1.08] tracking-tight">
                  {featured.title}
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                  {featured.excerpt}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[11px] font-mono text-white/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.1]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4F542] group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Read full blueprint →
                </span>
              </div>
            </div>

            {/* Right Metric Box / Badge */}
            <div className="relative z-10 flex lg:flex-col items-start lg:items-end justify-between border-t lg:border-t-0 lg:border-l border-white/[0.1] pt-6 lg:pt-0 lg:pl-10 shrink-0">
              <div className="flex flex-col lg:items-end">
                <span className="text-4xl sm:text-5xl font-tight font-semibold text-white">
                  TOP 1
                </span>
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest mt-1">
                  CITATION RANK
                </span>
              </div>

              <div className="w-12 h-12 rounded-full bg-[#D4F542] text-black grid place-items-center group-hover:scale-110 transition-transform shadow-[0_0_16px_rgba(212,245,66,0.4)]">
                <svg
                  className="w-5 h-5 -rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Main Articles Grid */}
      <div className="flex flex-col gap-6">
        {showFeaturedSpotlight && (
          <h3 className="text-xl font-tight font-semibold text-white/90">
            All blueprints & engineering field notes
          </h3>
        )}

        {filteredArticles.length === 0 ? (
          /* Empty State */
          <div className="p-16 rounded-2xl bg-[#14161A]/50 border border-white/[0.08] text-center flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/[0.06] text-[#D4F542] grid place-items-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h4 className="text-xl font-tight font-semibold text-white">
              No blueprints found
            </h4>
            <p className="text-sm text-white/60 max-w-md">
              We couldn't find any articles matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 px-5 py-2 rounded-full bg-[#D4F542] text-black font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          /* 3-Column Card Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.28 }}
                >
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="p-6 sm:p-7 rounded-2xl bg-[#14161A]/85 border border-white/[0.08] hover:border-[#D4F542]/50 hover:bg-[#14161A] transition-all flex flex-col justify-between gap-6 group backdrop-blur-md h-full relative overflow-hidden shadow-lg hover:shadow-2xl"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-zinc-900 border border-white/[0.06]">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14161A] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0B0D10]/90 border border-white/[0.1] text-[#D4F542] text-[10px] font-mono font-semibold tracking-wider">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-col gap-3 flex-1">
                      <div className="flex items-center justify-between text-xs font-mono text-white/40">
                        <span>{article.type}</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h4 className="text-xl font-tight font-semibold text-[#F8F8F5] group-hover:text-[#D4F542] transition-colors leading-snug">
                        {article.title}
                      </h4>

                      <p className="text-xs text-white/70 leading-relaxed font-sans line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Tags & Action Link */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.08]">
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-white/50 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-white/40">{article.date}</span>
                        <span className="text-[#D4F542] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                          Read blueprint →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
