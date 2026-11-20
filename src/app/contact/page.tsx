"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full pt-[100px]">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-14 border-b border-white/[0.08] max-w-[1280px] mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#D4F542]">Contact</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Write to <br />
          <span className="text-[#D4F542]">the desk.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          A question about a running workflow, an invoice, a tool we should know or a role. Every
          message reaches a human engineer within one working day.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 md:px-14 max-w-[1000px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Info */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">
              Email
            </span>
            <a
              href="mailto:hello@runbookops.agency"
              className="text-xl font-tight font-semibold text-white hover:text-[#D4F542] transition-colors"
            >
              hello@runbookops.agency
            </a>
          </div>

          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">
              Base
            </span>
            <div className="text-sm text-white/80">London · Remote-First</div>
            <div className="text-xs font-mono text-white/50 mt-1">UTC / GMT timezone</div>
          </div>

          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">
              Response commitment
            </span>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              All new enquiries reviewed within 24 hours Monday through Friday. Existing retainer
              clients have direct on-call Slack channels.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-[#D4F542] text-center flex flex-col items-center gap-3">
              <span className="text-2xl text-[#D4F542]">✓</span>
              <h4 className="text-2xl font-tight font-semibold text-white">Message dispatched</h4>
              <p className="text-xs text-white/70">
                Thank you. We will get back to your email within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/[0.1] flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/60 uppercase">Your name</label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:border-[#D4F542] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/60 uppercase">Work email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:border-[#D4F542] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/60 uppercase">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the tools you run and what you want to automate..."
                  className="px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:border-[#D4F542] focus:outline-none resize-none"
                />
              </div>

              <Button type="submit" variant="solid" className="w-full">
                Send message
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
