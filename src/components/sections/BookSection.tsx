"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  "Web Dev + Technical SEO",
  "LLM Visibility (AEO / GEO)",
  "Custom AI Automations",
  "Full 21-Day Growth Engine",
] as const;

type ServiceType = (typeof SERVICE_OPTIONS)[number];

export function BookSection({ defaultService }: { defaultService?: string }) {
  const initialService: ServiceType = (() => {
    if (defaultService) {
      const match = SERVICE_OPTIONS.find((s) => s.toLowerCase() === defaultService.toLowerCase());
      if (match) return match;
    }
    return "Web Dev + Technical SEO";
  })();

  const [step, setStep] = useState<1 | 2>(1);
  const [selectedService, setSelectedService] = useState<ServiceType>(initialService);

  // Step 2 Contact Inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  // Honeypot
  const [websiteHp, setWebsiteHp] = useState("");

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleServiceSelect = (srv: ServiceType) => {
    setSelectedService(srv);
    setErrorMessage(null);
  };

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
      setErrorMessage("Please enter your website URL.");
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
          projectBrief: `Homepage 20-min audit brief for: ${selectedService}`,
          sourcePage: "/",
          website_hp: websiteHp,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit brief. Please try again.");
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
    setErrorMessage(null);
  };

  return (
    <section id="book-section" className="relative w-full bg-[#0B0D10] text-[#F8F8F5] py-20 md:py-32 px-6 md:px-14 border-t border-white/[0.08] overflow-hidden">
      {/* Background Photography: tech engineering environment */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/tech/hero_tech.webp"
          alt="Modern engineering architecture"
          className="w-full h-full object-cover object-[50%_50%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/90 via-[#0B0D10]/40 to-[#0B0D10]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/60" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <SectionLabel>START YOUR UPGRADE</SectionLabel>
          <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.02]">
            Get a free 5-minute audit— <br />
            <span className="text-[#D4F542]">or book a 20-min build call.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-lg">
            No pitch decks or pushy sales reps. Pick your primary focus area and drop your URL. We&apos;ll inspect your setup and share actionable insights within 48 hours.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-white/50">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
              Direct Senior Engineer
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
              Zero Pushy Follow-Up
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
              100% Free
            </span>
          </div>
        </motion.div>

        {/* Right Interactive 2-Step Brief Card (~0.55x Viewport) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0B0D10]/95 border border-white/[0.14] backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle top lime line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4F542] to-transparent opacity-60" />

          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.08] mb-4">
            <span className="text-xs sm:text-sm font-semibold font-tight text-white uppercase tracking-wider">
              {isSuccess ? "Brief Submitted" : step === 1 ? "01 · Pick Service Focus" : "02 · Where to send audit"}
            </span>
            {!isSuccess && (
              <span className="text-[11px] sm:text-xs font-mono text-[#D4F542] font-medium">
                Step {step} of 2
              </span>
            )}
          </div>

          {isSuccess ? (
            /* Inline Success State */
            <div className="py-8 text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4F542]/10 border border-[#D4F542]/40 flex items-center justify-center text-[#D4F542]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-tight font-semibold text-[#F8F8F5]">
                Audit Request Received
              </h3>
              <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{fullName}</span>. We will analyze <span className="text-[#D4F542] font-mono">{websiteUrl}</span> for <span className="text-white font-medium">{selectedService}</span> and send your custom assessment within 48 hours.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="pt-2 text-xs font-mono text-[#D4F542] hover:underline cursor-pointer"
              >
                ← Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Bot honeypot */}
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

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  /* Step 1: Pick Service Pill */
                  <motion.div
                    key="homepage-step-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col gap-3"
                  >
                    <span className="text-[11px] sm:text-xs font-mono text-white/60 uppercase tracking-widest">
                      What are we fixing on this 20-min call?
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SERVICE_OPTIONS.map((srv) => {
                        const isSelected = selectedService === srv;
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => handleServiceSelect(srv)}
                            className={`p-3 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between border cursor-pointer ${
                              isSelected
                                ? "bg-[#D4F542] text-black font-semibold border-[#D4F542] shadow-[0_0_14px_rgba(212,245,66,0.25)]"
                                : "bg-white/[0.05] text-white/80 border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.2]"
                            }`}
                          >
                            <span>{srv}</span>
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                                isSelected ? "border-black bg-black" : "border-white/30"
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
                        onClick={handleNext}
                        className="w-full h-11 sm:h-12 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer shadow-[0_0_16px_rgba(212,245,66,0.3)]"
                      >
                        <span>Next: Contact Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Step 2: Minimal Contact Capture Inline */
                  <motion.div
                    key="homepage-step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-mono text-white/60 uppercase tracking-widest">
                        Focus: <span className="text-[#D4F542]">{selectedService}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[11px] font-mono text-white/50 hover:text-[#D4F542] flex items-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft className="w-3 h-3" />
                        <span>Change</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-mono uppercase text-white/70">
                          Full Name <span className="text-[#D4F542]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Alex Mercer"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full h-9 px-3 rounded-lg bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] text-white text-xs font-mono outline-none placeholder:text-white/30"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-mono uppercase text-white/70">
                          Work Email <span className="text-[#D4F542]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-9 px-3 rounded-lg bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] text-white text-xs font-mono outline-none placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-mono uppercase text-white/70">
                        Website URL <span className="text-[#D4F542]">*</span>
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://company.com"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="w-full h-9 px-3 rounded-lg bg-white/[0.05] border border-white/[0.12] focus:border-[#D4F542] text-white text-xs font-mono outline-none placeholder:text-white/30"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-red-400 text-[11px] font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-11 sm:h-12 rounded-xl bg-[#D4F542] hover:bg-[#D4F542]/90 disabled:opacity-60 text-black font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer shadow-[0_0_16px_rgba(212,245,66,0.3)]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Dispatching Brief...</span>
                          </>
                        ) : (
                          <>
                            <span>Book My 20-Min Audit Call</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <div className="text-[10px] font-mono text-white/40 text-center">
                        No pitch deck · Live screen-share audit · Zero obligation
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
