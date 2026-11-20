"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

function BookForm() {
  const searchParams = useSearchParams();
  const initialTeam = searchParams.get("team") || "6–20";
  const initialWorkflows = searchParams.get("workflows")
    ? searchParams.get("workflows")!.split(",")
    : ["Invoicing", "Leads"];

  const [teamSize, setTeamSize] = useState<string>(initialTeam);
  const [selectedWfs, setSelectedWfs] = useState<string[]>(initialWorkflows);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const teamSizes = ["1–5", "6–20", "21–100", "100+"];
  const workflowOptions = ["Invoicing", "Leads", "Support", "Onboarding", "Reporting", "Other"];

  const toggleWf = (wf: string) => {
    setSelectedWfs((prev) =>
      prev.includes(wf) ? prev.filter((w) => w !== wf) : [...prev, wf]
    );
  };

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
          <span className="text-[#D4F542]">Book a call</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-tight font-semibold text-[#F8F8F5] tracking-tight leading-[0.95] max-w-4xl">
          Twenty minutes. <br />
          <span className="text-[#D4F542]">No pitch.</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
          Tell us what eats your week and the tools you use. On the call you see which of it can run
          on its own, and what week it can go live.
        </p>
      </section>

      {/* Booking Form Interface */}
      <section className="py-24 px-6 md:px-14 max-w-[800px] mx-auto w-full">
        {submitted ? (
          <div className="p-12 rounded-2xl bg-zinc-900/80 border border-[#D4F542] text-center flex flex-col items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-[#D4F542] text-black grid place-items-center text-2xl font-bold">
              ✓
            </span>
            <h3 className="text-3xl font-tight font-semibold text-white">Call request received.</h3>
            <p className="text-sm text-white/70 max-w-md">
              A calendar invite and preparation link have been sent to{" "}
              <span className="text-white font-mono">{email}</span>. A human engineer will review your
              tool stack before the call.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-2xl bg-zinc-900/60 border border-white/[0.1] backdrop-blur-xl flex flex-col gap-8"
          >
            {/* Team Size Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                01 Team size
              </label>
              <div className="flex flex-wrap gap-2">
                {teamSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setTeamSize(size)}
                    className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                      teamSize === size
                        ? "bg-[#D4F542] text-black font-semibold shadow-[0_0_12px_rgba(212,245,66,0.3)]"
                        : "bg-white/[0.06] text-white/80 border border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Workflow Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                02 What eats your week
              </label>
              <div className="flex flex-wrap gap-2">
                {workflowOptions.map((wf) => {
                  const isSel = selectedWfs.includes(wf);
                  return (
                    <button
                      key={wf}
                      type="button"
                      onClick={() => toggleWf(wf)}
                      className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                        isSel
                          ? "bg-[#D4F542] text-black font-semibold shadow-[0_0_12px_rgba(212,245,66,0.3)]"
                          : "bg-white/[0.06] text-white/80 border border-white/[0.08] hover:border-white/20"
                      }`}
                    >
                      {wf}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/60 uppercase">Your name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] text-white text-sm focus:border-[#D4F542] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/60 uppercase">Work email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] text-white text-sm focus:border-[#D4F542] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-white/60 uppercase">
                Tools you currently run (optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g. HubSpot, Xero, Slack, Notion"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="px-4 py-3 rounded-xl bg-black/50 border border-white/[0.1] text-white text-sm focus:border-[#D4F542] focus:outline-none resize-none"
              />
            </div>

            <Button type="submit" variant="solid" className="w-full">
              Confirm 20-minute screen share
            </Button>

            <p className="text-center text-[11px] font-mono text-white/40">
              No sales pitch · Directly with an automation engineer · London UK time
            </p>
          </form>
        )}
      </section>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-xs font-mono">Loading form...</div>}>
      <BookForm />
    </Suspense>
  );
}
