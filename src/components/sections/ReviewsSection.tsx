"use client";

import React, { useState } from "react";
import { RESULTS } from "@/lib/data";

const REVIEW_PORTRAITS = [
  "https://framerusercontent.com/images/gtCsnjITh4FJZxvR6mJl8ITbA.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/rYF6VrXEAAW6zGsmEsPDhvtAY.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/py9KhPBZwCXd1QM59jPco86fIk.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/AN3J79LdNmBN2sL5osuX3cTIPw.webp?scale-down-to=2048",
  "https://framerusercontent.com/images/tbKfoU4sf8kUohplyzin5oZI8.webp?scale-down-to=2048",
];

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState<number>(0);

  const reviews = RESULTS.slice(0, 5);

  return (
    <section className="relative w-full bg-[#F2F3EE] text-[#14161A] py-24 md:py-36 px-6 md:px-14 border-t border-[#14161A]/10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#14161A]/10 pb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#14161A]/60 mb-3 font-semibold">
              Client words
            </div>
            <h2 className="text-4xl sm:text-6xl font-tight font-semibold tracking-[-0.03em] text-[#14161A]">
              What changed, in their words.
            </h2>
          </div>
          <p className="text-base text-[#14161A]/70 max-w-sm font-sans leading-relaxed">
            Founders, operations leads and office managers whose weeks got
            shorter.
          </p>
        </div>

        {/* Testimonial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Portrait & Badge */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <figure className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-[#E8E9E3] border border-[#14161A]/12 shadow-xl flex flex-col justify-between p-6">
              {/* Photo */}
              <img
                src={REVIEW_PORTRAITS[activeReview]}
                alt={reviews[activeReview].quote.author}
                className="absolute inset-0 w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Verified pill */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono font-medium text-white/80">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md">
                  0{activeReview + 1} / 05
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4F542]">
                  VERIFIED CLIENT
                </span>
              </div>

              {/* Author Details Box */}
              <figcaption className="relative z-10 p-4 rounded-xl bg-black/75 backdrop-blur-md text-white border border-white/10">
                <div className="font-tight font-semibold text-lg text-white">
                  {reviews[activeReview].quote.author}
                </div>
                <div className="text-xs font-mono text-white/70 mt-0.5">
                  {reviews[activeReview].quote.role}
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Right Large Blockquote */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-6xl text-[#14161A]/20 font-serif leading-none select-none">
                “
              </span>
              <blockquote className="text-2xl sm:text-4xl md:text-5xl font-tight font-semibold tracking-[-0.03em] text-[#14161A] leading-[1.14]">
                {reviews[activeReview].quote.text}
              </blockquote>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#14161A]/10">
              <div className="flex items-center gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReview(idx)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                      activeReview === idx
                        ? "bg-[#14161A] scale-125"
                        : "bg-[#14161A]/20 hover:bg-[#14161A]/50"
                    }`}
                    title={`Review ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() =>
                    setActiveReview(
                      (activeReview - 1 + reviews.length) % reviews.length
                    )
                  }
                  className="w-10 h-10 rounded-full border border-[#14161A]/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                  title="Previous review"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setActiveReview((activeReview + 1) % reviews.length)
                  }
                  className="w-10 h-10 rounded-full border border-[#14161A]/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                  title="Next review"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
