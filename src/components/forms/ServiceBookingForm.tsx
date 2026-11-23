"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export type ServicePageType = "web-development-seo" | "llm-visibility" | "ai-automations";

interface ServiceBookingFormProps {
  serviceType: ServicePageType;
}

const SERVICE_CONFIGS = {
  "web-development-seo": {
    serviceName: "Web Development + Technical SEO",
    headline: "Claim Your Free 5-Min Site Speed & Conversion Audit",
    subhead: "Drop your URL. A senior engineer will record a custom tear-down or walk you through it live on a 20-min call.",
    group1Label: "Current Platform:",
    group1Options: ["WordPress", "Webflow / Framer", "Shopify / Custom", "Building From Scratch"],
    group2Label: "Biggest Website Leak:",
    group2Options: ["Slow Load Speed", "Not Ranking on Google", "Traffic Not Converting", "Outdated Brand Look"],
    websiteLabel: "Your Website URL",
    websitePlaceholder: "https://yourcompany.com",
    submitLabel: "Book My 20-Min Website Audit",
  },
  "llm-visibility": {
    serviceName: "LLM Visibility (AEO / GEO)",
    headline: "See What ChatGPT & Perplexity Say About Your Brand Today",
    subhead: "We'll run 10 live buyer prompts in your niche and walk you through your exact AI visibility gap in 20 minutes.",
    group1Label: "Primary AI Search Goal:",
    group1Options: ["Rank in ChatGPT", "Rank in Perplexity & Gemini", "Google AI Overviews", "All AI Answer Engines"],
    group2Label: "Current AI Presence:",
    group2Options: ["Invisible (0 Citations)", "Competitors Rank Above Us", "Haven't Checked Yet"],
    websiteLabel: "Your Website URL",
    websitePlaceholder: "https://yourcompany.com",
    hasCompetitorField: true,
    submitLabel: "Run My Free AI Visibility Audit",
  },
  "ai-automations": {
    serviceName: "Custom AI Automations",
    headline: "Get Your Custom 20-Min AI Workflow Blueprint",
    subhead: "Tell us where manual work is slowing you down—we'll map the exact n8n & AI automation live on a screen share.",
    group1Label: "First Bottleneck to Automate:",
    group1Options: ["Lead Capture & Instant Follow-Up", "CRM Sync & Data Entry", "AI Qualification & Booking", "Internal Reporting / Ops"],
    group2Label: "Current CRM / Stack:",
    group2Options: ["HubSpot", "GoHighLevel / Salesforce", "Sheets / Notion", "Other / None Yet"],
    websiteLabel: "Company Website or LinkedIn URL",
    websitePlaceholder: "https://company.com or linkedin.com/company/...",
    submitLabel: "Map My Automation Pipeline",
  },
} as const;

export function ServiceBookingForm({ serviceType }: ServiceBookingFormProps) {
  const config = SERVICE_CONFIGS[serviceType];

  const [step, setStep] = useState<1 | 2>(1);

  // Diagnostic pills
  const [pill1, setPill1] = useState<string>(config.group1Options[0]);
  const [pill2, setPill2] = useState<string>(config.group2Options[0]);

  // Contact capture inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");

  // Honeypot
  const [websiteHp, setWebsiteHp] = useState("");

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    setErrorMessage(null);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    if (!websiteUrl.trim()) {
      setErrorMessage(`Please enter your ${config.websiteLabel}.`);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: Record<string, any> = {
        fullName: fullName.trim(),
        email: email.trim(),
        websiteUrl: websiteUrl.trim(),
        services: [config.serviceName],
        sourcePage: `/services/${serviceType}`,
        website_hp: websiteHp,
      };

      if (serviceType === "web-development-seo") {
        payload.platform = pill1;
        payload.biggestLeak = pill2;
      } else if (serviceType === "llm-visibility") {
        payload.aiGoal = pill1;
        payload.aiPresence = pill2;
        if (competitorUrl.trim()) payload.competitorUrl = competitorUrl.trim();
      } else if (serviceType === "ai-automations") {
        payload.firstBottleneck = pill1;
        payload.crmStack = pill2;
      }

      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setStep(1);
    setFullName("");
    setEmail("");
    setWebsiteUrl("");
    setCompetitorUrl("");
    setErrorMessage(null);
  };

  return (
    <div
      id="service-book"
      className="w-full max-w-2xl mx-auto rounded-3xl bg-[#14161A]/95 border border-[#D4F542]/30 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.9)] relative overflow-hidden scroll-mt-24"
    >
      {/* Decorative top neon lime highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4F542] to-transparent" />

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 text-center flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-[#D4F542]/10 border border-[#D4F542]/40 flex items-center justify-center text-[#D4F542]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl sm:text-3xl font-tight font-semibold text-[#F8F8F5]">
              Audit Reserved Successfully
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{fullName}</span>. A senior engineer will review{" "}
              <span className="text-[#D4F542] font-mono">{websiteUrl}</span> and dispatch your custom {config.serviceName} diagnostic blueprint within 24 hours.
            </p>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-mono text-[#D4F542] hover:underline cursor-pointer"
            >
              ← Submit another audit inquiry
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Honeypot field for bot suppression */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={websiteHp}
              onChange={(e) => setWebsiteHp(e.target.value)}
            />
          </div>

          {/* Form Header */}
          <div className="flex flex-col gap-2 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#D4F542] font-semibold">
                  {step === 1 ? "Step 01 / 02 · Diagnostics" : "Step 02 / 02 · Direct Delivery"}
                </span>
              </div>
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[11px] font-mono text-white/50 hover:text-[#D4F542] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Adjust diagnostics</span>
                </button>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-tight font-semibold text-[#F8F8F5] leading-tight pt-1">
              {config.headline}
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
              {config.subhead}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              /* STEP 1: Micro-Commitment Diagnostic Pills */
              <motion.div
                key="step-1-diagnostics"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-5"
              >
                {/* Diagnostic Group 1 */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                    {config.group1Label}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {config.group1Options.map((opt) => {
                      const isSelected = pill1 === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setPill1(opt)}
                          className={`p-3 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? "bg-[#D4F542] text-black font-semibold border-[#D4F542] shadow-[0_0_14px_rgba(212,245,66,0.25)]"
                              : "bg-white/[0.04] text-white/80 border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.18]"
                          }`}
                        >
                          <span className="truncate pr-1">{opt}</span>
                          <span
                            className={`w-3 h-3 rounded-full border shrink-0 flex items-center justify-center ${
                              isSelected ? "border-black bg-black" : "border-white/30"
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Diagnostic Group 2 */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                    {config.group2Label}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {config.group2Options.map((opt) => {
                      const isSelected = pill2 === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setPill2(opt)}
                          className={`p-3 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? "bg-[#D4F542] text-black font-semibold border-[#D4F542] shadow-[0_0_14px_rgba(212,245,66,0.25)]"
                              : "bg-white/[0.04] text-white/80 border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.18]"
                          }`}
                        >
                          <span className="truncate pr-1">{opt}</span>
                          <span
                            className={`w-3 h-3 rounded-full border shrink-0 flex items-center justify-center ${
                              isSelected ? "border-black bg-black" : "border-white/30"
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full h-12 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer shadow-[0_0_20px_rgba(212,245,66,0.3)]"
                  >
                    <span>Next: Deliver My 20-Min Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* STEP 2: Minimal Contact Capture */
              <motion.div
                key="step-2-contact"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-xs font-mono text-white/60">
                  <span className="truncate">Selected: <span className="text-[#D4F542]">{pill1}</span> · <span className="text-[#D4F542]">{pill2}</span></span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-white/40 hover:text-white underline text-[11px] ml-2 shrink-0 cursor-pointer"
                  >
                    Edit
                  </button>
                </div>

                {/* 2-Column Grid for Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                      Full Name <span className="text-[#D4F542]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-10 px-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] focus:bg-white/[0.08] text-white text-xs font-mono outline-none transition-all placeholder:text-white/30"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                      Work Email <span className="text-[#D4F542]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-10 px-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] focus:bg-white/[0.08] text-white text-xs font-mono outline-none transition-all placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Website URL */}
                {("hasCompetitorField" in config && config.hasCompetitorField) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                        {config.websiteLabel} <span className="text-[#D4F542]">*</span>
                      </label>
                      <input
                        type="url"
                        required
                        placeholder={config.websitePlaceholder}
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="w-full h-10 px-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] focus:bg-white/[0.08] text-white text-xs font-mono outline-none transition-all placeholder:text-white/30"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                        Top Competitor URL <span className="text-white/40">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        placeholder="https://competitor.com"
                        value={competitorUrl}
                        onChange={(e) => setCompetitorUrl(e.target.value)}
                        className="w-full h-10 px-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] focus:bg-white/[0.08] text-white text-xs font-mono outline-none transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                      {config.websiteLabel} <span className="text-[#D4F542]">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder={config.websitePlaceholder}
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full h-10 px-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] focus:bg-white/[0.08] text-white text-xs font-mono outline-none transition-all placeholder:text-white/30"
                    />
                  </div>
                )}

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-red-400 text-xs font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 disabled:opacity-60 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer shadow-[0_0_20px_rgba(212,245,66,0.3)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Generating Blueprint...</span>
                      </>
                    ) : (
                      <>
                        <span>{config.submitLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] font-mono text-white/50 text-center tracking-tight">
                    No pitch deck · Live screen-share audit · Zero obligation
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
}

export default ServiceBookingForm;
