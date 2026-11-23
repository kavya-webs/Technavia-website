"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const SERVICE_OPTIONS = [
  "Web Dev + Technical SEO",
  "LLM Visibility (AEO / GEO)",
  "Custom AI Automations",
  "Full System (Web + SEO + AI)",
];

const TIMELINE_OPTIONS = [
  "Immediate (< 30 days)",
  "1–3 Months",
  "Audit First",
];

const BUDGET_OPTIONS = [
  "Under $3k",
  "$3k – $7.5k",
  "$7.5k – $15k",
  "$15k+",
  "Not Sure Yet",
];

interface InquiryFormProps {
  defaultService?: string;
  defaultTimeline?: string;
  className?: string;
}

export function InquiryForm({
  defaultService,
  defaultTimeline,
  className = "",
}: InquiryFormProps) {
  const searchParams = useSearchParams();

  // Parse default services
  const paramServices = searchParams.get("services") || searchParams.get("workflows");
  const initialServices = paramServices
    ? paramServices.split(",")
    : defaultService
    ? [defaultService]
    : ["Web Dev + Technical SEO", "LLM Visibility (AEO / GEO)"];

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [services, setServices] = useState<string[]>(initialServices);
  const [projectBrief, setProjectBrief] = useState("");
  const [timeline, setTimeline] = useState(defaultTimeline || "Immediate (< 30 days)");
  const [budget, setBudget] = useState("Under $3k");

  // Honeypot field for spam bots
  const [websiteHp, setWebsiteHp] = useState("");

  // Tracking Attribution
  const [sourcePage, setSourcePage] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSourcePage(window.location.pathname);
      const sp = new URLSearchParams(window.location.search);
      setUtmSource(sp.get("utm_source") || "");
      setUtmMedium(sp.get("utm_medium") || "");
      setUtmCampaign(sp.get("utm_campaign") || "");
    }
  }, []);

  const toggleService = (srv: string) => {
    setServices((prev) => {
      if (prev.includes(srv)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter((s) => s !== srv);
      }
      return [...prev, srv];
    });
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Frontend validation
    if (!fullName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    if (services.length === 0) {
      setErrorMessage("Please select at least one primary service.");
      return;
    }

    if (!projectBrief.trim()) {
      setErrorMessage("Please share a brief note on your core bottleneck or target outcome.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          websiteUrl: websiteUrl.trim(),
          services,
          projectBrief: projectBrief.trim(),
          timeline,
          budget,
          sourcePage,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          website_hp: websiteHp,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error("[FORM_SUBMIT_ERROR]", err);
      setErrorMessage(
        err.message || "An unexpected error occurred. Please email inquiry@technaviatechnology.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0E1116] border border-[#D4F542]/50 text-center flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(212,245,66,0.15)]"
          >
            <div className="w-16 h-16 rounded-full bg-[#D4F542] text-black flex items-center justify-center shadow-[0_0_24px_rgba(212,245,66,0.5)]">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div className="max-w-lg">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4F542] block mb-2 font-semibold">
                INQUIRY DISPATCHED
              </span>
              <h3 className="text-3xl sm:text-4xl font-tight font-semibold text-white tracking-tight">
                Engineering brief received.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                Thank you, <strong className="text-white font-medium">{fullName}</strong>. An email confirmation has been sent to{" "}
                <span className="text-[#D4F542] font-mono">{email}</span>.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-white/50 font-sans leading-relaxed">
                A senior web architect is reviewing your notes ({services.join(", ")}) and will reply with an initial technical assessment within 1 business day.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-white/60 flex items-center gap-3 max-w-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542] shrink-0" />
              <span>Direct engineer response · Zero sales outreach · Non-disclosure guaranteed</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setProjectBrief("");
                setWebsiteUrl("");
              }}
              className="mt-2 text-xs font-mono text-white/50 hover:text-[#D4F542] transition-colors underline cursor-pointer"
            >
              Submit another brief or project
            </button>
          </motion.div>
        ) : (
          <form
            key="inquiry-form"
            onSubmit={handleSubmit}
            toolname="book_technical_audit"
            tooldescription="Submit an inquiry or book a 5-minute Technical SEO, LLM Visibility, or AI Automation audit with TECHNAVIA."
            className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#0E1116] border border-white/[0.12] backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] flex flex-col gap-8 text-[#F8F8F5]"
          >
            {/* Honeypot field (hidden from visual users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">Do not fill this field</label>
              <input
                id="website_hp"
                type="text"
                name="website_hp"
                value={websiteHp}
                onChange={(e) => setWebsiteHp(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Error Notification Banner */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs sm:text-sm font-sans flex items-center gap-3"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* 01: Service Multi-Select */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
                  01 · Primary Need <span className="text-white/40">(Select one or more)</span>
                </label>
                <span className="text-[11px] font-mono text-white/40">Multi-select</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICE_OPTIONS.map((srv) => {
                  const isSelected = services.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-3.5 rounded-xl text-xs sm:text-sm font-sans text-left transition-all cursor-pointer flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#D4F542] text-black font-semibold border-[#D4F542] shadow-[0_0_14px_rgba(212,245,66,0.3)]"
                          : "bg-white/[0.04] text-white/80 hover:bg-white/[0.08] hover:text-white border-white/[0.08]"
                      }`}
                    >
                      <span>{srv}</span>
                      <span
                        className={`w-4 h-4 rounded-full border text-[10px] grid place-items-center transition-colors shrink-0 ml-2 ${
                          isSelected
                            ? "border-black bg-black text-[#D4F542]"
                            : "border-white/30 text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 02: Full Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-white/[0.08]">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/70 uppercase tracking-wider">
                  Full Name <span className="text-[#D4F542]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/25 font-sans"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/70 uppercase tracking-wider">
                  Work Email <span className="text-[#D4F542]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/25 font-sans"
                />
              </div>
            </div>

            {/* 03: Website URL */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-white/70 uppercase tracking-wider">
                Current Website URL <span className="text-white/40">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="https://yourcompany.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/25 font-sans"
              />
            </div>

            {/* 04: Project Brief / Bottleneck */}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
                  02 · Main Bottleneck / Goal <span className="text-[#D4F542]">*</span>
                </label>
                <span className="text-[11px] font-mono text-white/40">Technical brief</span>
              </div>
              <textarea
                required
                rows={4}
                placeholder="What's the #1 ranking, speed, or automation bottleneck you want solved?"
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/25 font-sans leading-relaxed resize-y"
              />
            </div>

            {/* 05: Target Timeline */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.08]">
              <label className="text-xs font-mono text-white/70 uppercase tracking-wider">
                Target Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {TIMELINE_OPTIONS.map((t) => {
                  const isSelected = timeline === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono transition-all cursor-pointer text-center border ${
                        isSelected
                          ? "bg-[#D4F542] text-black font-semibold border-[#D4F542] shadow-[0_0_10px_rgba(212,245,66,0.25)]"
                          : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border-white/[0.08]"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 06: Estimated Investment */}
            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-mono text-white/70 uppercase tracking-wider">
                Estimated Investment Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {BUDGET_OPTIONS.map((b) => {
                  const isSelected = budget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-mono transition-all cursor-pointer text-center border ${
                        isSelected
                          ? "bg-[#D4F542] text-black font-semibold border-[#D4F542] shadow-[0_0_10px_rgba(212,245,66,0.25)]"
                          : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border-white/[0.08]"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Action Button */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4F542] hover:bg-[#c3e33b] text-black text-sm font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_0_24px_rgba(212,245,66,0.35)] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Dispatching...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Engineering Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <span className="text-xs font-mono text-white/45 text-center sm:text-right">
                Direct to senior architect · 1 business day reply
              </span>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InquiryForm;
