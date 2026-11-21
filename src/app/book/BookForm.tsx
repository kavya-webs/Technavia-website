"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function BookForm() {
  const searchParams = useSearchParams();
  const initialTeam = searchParams.get("team") || "6–20";
  const initialWorkflows = searchParams.get("workflows")
    ? searchParams.get("workflows")!.split(",")
    : ["Invoicing", "Leads"];

  const [teamSize, setTeamSize] = useState<string>(initialTeam);
  const [selectedWfs, setSelectedWfs] = useState<string[]>(initialWorkflows);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tools, setTools] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const teamSizes = ["1–5", "6–20", "21–100", "100+"];
  const workflowOptions = [
    "Invoicing",
    "Leads",
    "Support",
    "Onboarding",
    "Reporting",
    "CRM Sync",
    "Other",
  ];

  const toggleWf = (wf: string) => {
    setSelectedWfs((prev) =>
      prev.includes(wf) ? prev.filter((w) => w !== wf) : [...prev, wf]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-[840px] mx-auto">
      {submitted ? (
        <div className="p-10 md:p-14 rounded-3xl bg-zinc-950/90 border border-[#D4F542] text-center flex flex-col items-center gap-5 shadow-[0_0_40px_rgba(212,245,66,0.2)]">
          <div className="w-14 h-14 rounded-full bg-[#D4F542] text-black grid place-items-center text-3xl font-bold">
            ✓
          </div>
          <h3 className="text-3xl sm:text-4xl font-tight font-semibold text-white">
            Architecture Call Confirmed
          </h3>
          <p className="text-sm sm:text-base text-white/70 max-w-lg font-sans leading-relaxed">
            Calendar invite and preparation notes have been dispatched to{" "}
            <span className="text-[#D4F542] font-mono">{email}</span>. An automation engineer will review your
            selected workflows ({selectedWfs.join(", ")}) before we open the screen share.
          </p>

          <div className="mt-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/60 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D4F542]" />
            <span>Format: 20-min Google Meet · Live workflow wireframe · London time</span>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-white/[0.14] backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] flex flex-col gap-8"
        >
          {/* Step 1: Team Size */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
                01 · Team Size
              </label>
              <span className="text-xs font-mono text-white/40">Select current headcount</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {teamSizes.map((size) => {
                const isSelected = teamSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setTeamSize(size)}
                    className={`py-3 px-4 rounded-xl text-xs font-mono transition-all cursor-pointer text-center ${
                      isSelected
                        ? "bg-[#D4F542] text-black font-semibold shadow-[0_0_14px_rgba(212,245,66,0.35)]"
                        : "bg-white/[0.05] text-white/75 hover:bg-white/[0.1] hover:text-white border border-white/[0.08]"
                    }`}
                  >
                    {size} people
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Workflows */}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.08]">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
                02 · What Eats Your Week
              </label>
              <span className="text-xs font-mono text-white/40">
                {selectedWfs.length} selected
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {workflowOptions.map((wf) => {
                const isSelected = selectedWfs.includes(wf);
                return (
                  <button
                    key={wf}
                    type="button"
                    onClick={() => toggleWf(wf)}
                    className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#D4F542] text-black font-semibold shadow-[0_0_12px_rgba(212,245,66,0.3)]"
                        : "bg-white/[0.05] text-white/70 hover:bg-white/[0.1] hover:text-white border border-white/[0.08]"
                    }`}
                  >
                    {wf}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Contact Details */}
          <div className="flex flex-col gap-4 pt-4 border-t border-white/[0.08]">
            <label className="text-xs font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
              03 · Details for Screen Share
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/60 uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/30 font-sans"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/60 uppercase">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/30 font-sans"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-white/60 uppercase">
                Tools you currently run (optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g. HubSpot, Xero, Slack, Notion, Airtable, Make..."
                value={tools}
                onChange={(e) => setTools(e.target.value)}
                className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/30 font-sans resize-none"
              />
            </div>
          </div>

          {/* Submit Action */}
          <Button type="submit" variant="solid" className="w-full justify-center">
            Confirm 20-minute screen share →
          </Button>

          <p className="text-center text-[11px] font-mono text-white/40">
            No sales slides · Live workflow mapping · Directly with an engineer
          </p>
        </form>
      )}
    </div>
  );
}

export default BookForm;