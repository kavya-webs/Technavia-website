"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react";

const SERVICE_OPTIONS = [
  "Web Dev + Technical SEO",
  "LLM Visibility (AEO / GEO)",
  "Custom AI Automations",
  "Full 21-Day Growth Engine (5d Web + 16d SEO)",
] as const;

type ServiceType = (typeof SERVICE_OPTIONS)[number];

interface InquiryFormProps {
  defaultService?: string;
  className?: string;
}

export function InquiryForm({
  defaultService,
  className = "",
}: InquiryFormProps) {
  const searchParams = useSearchParams();

  // Determine initial service from query param or prop
  const paramService = searchParams.get("service") || searchParams.get("type");
  const initialService: ServiceType = (() => {
    if (paramService) {
      if (paramService.includes("seo") || paramService.includes("web")) return "Web Dev + Technical SEO";
      if (paramService.includes("llm") || paramService.includes("aeo") || paramService.includes("geo")) return "LLM Visibility (AEO / GEO)";
      if (paramService.includes("auto")) return "Custom AI Automations";
    }
    if (defaultService) {
      const match = SERVICE_OPTIONS.find((s) => s.toLowerCase() === defaultService.toLowerCase());
      if (match) return match;
    }
    return "Web Dev + Technical SEO";
  })();

  // 2-Step Form State
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedService, setSelectedService] = useState<ServiceType>(initialService);

  // Contact Capture State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [bottleneck, setBottleneck] = useState("");

  // Honeypot field for spam protection
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

  const handleServiceSelect = (srv: ServiceType) => {
    setSelectedService(srv);
    setErrorMessage(null);
  };

  const handleContinue = () => {
    setErrorMessage(null);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!fullName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid work email address.");
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
          services: [selectedService],
          bottleneck: bottleneck.trim() || undefined,
          projectBrief: bottleneck.trim() ? `Bottleneck: ${bottleneck.trim()}` : "20-Min Architecture Audit Requested",
          sourcePage,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          website_hp: websiteHp,
        }),
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

  const resetForm = () => {
    setIsSuccess(false);
    setStep(1);
    setFullName("");
    setEmail("");
    setWebsiteUrl("");
    setBottleneck("");
    setErrorMessage(null);
  };

  return (
    <div
      className={`w-full max-w-xl mx-auto bg-[#14161A]/95 border border-white/[0.14] rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden ${className}`}
    >
      {/* Decorative top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4F542] to-transparent opacity-60" />

      {/* Success View */}
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 text-center flex flex-col items-center gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-[#D4F542]/10 border border-[#D4F542]/40 flex items-center justify-center text-[#D4F542]">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl sm:text-2xl font-tight font-semibold text-[#F8F8F5]">
              Audit Request Dispatched
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
              We received your notes for <span className="text-[#D4F542] font-mono">{selectedService}</span>. A senior engineer will review your website and reply with a live screen-share link or Loom audit within 24 hours.
            </p>
          </div>

          <div className="pt-3">
            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-mono text-[#D4F542] hover:underline cursor-pointer"
            >
              ← Submit another request
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
          {/* Honeypot field for bot detection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="inquiry_hp_website">Leave this field blank</label>
            <input
              type="text"
              id="inquiry_hp_website"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={websiteHp}
              onChange={(e) => setWebsiteHp(e.target.value)}
            />
          </div>

          {/* Breadcrumb Step Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/70">
                {step === 1 ? "Step 01 / 02 · Select Focus" : "Step 02 / 02 · Contact Details"}
              </span>
            </div>
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-[11px] font-mono text-white/50 hover:text-[#D4F542] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Change service</span>
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              /* STEP 1: Micro-Commitment Focus Area Pills */
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg font-tight font-semibold text-[#F8F8F5]">
                    What are we fixing on this 20-min call?
                  </h3>
                  <p className="text-xs text-white/60">
                    Pick your primary bottleneck. We will run live diagnostics before the call.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                  {SERVICE_OPTIONS.map((srv) => {
                    const isSelected = selectedService === srv;
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => handleServiceSelect(srv)}
                        className={`p-3.5 sm:p-4 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between border cursor-pointer ${
                          isSelected
                            ? "bg-[#D4F542] text-black font-semibold border-[#D4F542] shadow-[0_0_16px_rgba(212,245,66,0.25)]"
                            : "bg-white/[0.04] text-white/80 border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.2]"
                        }`}
                      >
                        <span>{srv}</span>
                        <span
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                            isSelected
                              ? "border-black bg-black text-[#D4F542]"
                              : "border-white/30"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="w-full h-11 sm:h-12 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer shadow-[0_0_20px_rgba(212,245,66,0.3)]"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* STEP 2: Minimal Contact Capture */
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg font-tight font-semibold text-[#F8F8F5]">
                    Where should we send your audit link?
                  </h3>
                  <p className="text-xs text-white/60">
                    Focus: <span className="text-[#D4F542] font-mono">{selectedService}</span>
                  </p>
                </div>

                {/* 2-Column Desktop Grid for Name + Email */}
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

                {/* Full Width Website URL (Optional) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                    Website URL <span className="text-white/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://company.com (optional)"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] focus:bg-white/[0.08] text-white text-xs font-mono outline-none transition-all placeholder:text-white/30"
                  />
                </div>

                {/* Optional 1-line bottleneck input (NOT a tall textarea) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                    Biggest bottleneck <span className="text-white/40 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4.2s mobile load, 0 ChatGPT citations, or manual lead copy-paste"
                    value={bottleneck}
                    onChange={(e) => setBottleneck(e.target.value)}
                    className="w-full h-10 px-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] focus:bg-white/[0.08] text-white text-xs font-mono outline-none transition-all placeholder:text-white/30"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-red-400 text-xs font-mono"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit Action */}
                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 sm:h-12 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 disabled:opacity-60 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer shadow-[0_0_20px_rgba(212,245,66,0.3)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Reserving Slot...</span>
                      </>
                    ) : (
                      <>
                        <span>Book My 20-Min Audit Call</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Micro-trust line under button */}
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

export default InquiryForm;
