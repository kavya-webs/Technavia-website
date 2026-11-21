"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const TOPIC_OPTIONS = [
  "Workflow Audit",
  "Monthly Retainer",
  "Custom Integration",
  "Tool Advice",
  "Careers",
];

export function ContactForm() {
  const [topic, setTopic] = useState<string>("Workflow Audit");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-[#D4F542] text-center flex flex-col items-center gap-4 shadow-[0_0_35px_rgba(212,245,66,0.2)]">
        <div className="w-12 h-12 rounded-full bg-[#D4F542] text-black grid place-items-center text-2xl font-bold">
          ✓
        </div>
        <h4 className="text-2xl sm:text-3xl font-tight font-semibold text-white">
          Message dispatched to the desk
        </h4>
        <p className="text-sm text-white/70 max-w-md font-sans leading-relaxed">
          Thank you, <span className="text-white font-medium">{name}</span>. A senior automation
          engineer in London will review your enquiry and respond to{" "}
          <span className="text-[#D4F542] font-mono">{email}</span> within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setMessage("");
          }}
          className="mt-2 text-xs font-mono text-white/50 hover:text-white transition-colors underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/[0.14] backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] flex flex-col gap-6"
    >
      {/* Topic Selection */}
      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
          Topic / Area of enquiry
        </label>
        <div className="flex flex-wrap gap-2">
          {TOPIC_OPTIONS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                topic === t
                  ? "bg-[#D4F542] text-black font-semibold shadow-[0_0_12px_rgba(212,245,66,0.3)]"
                  : "bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white border border-white/[0.08]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
            Your name
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Elena Rostova"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/30 font-sans"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
            Work email
          </label>
          <input
            type="email"
            required
            placeholder="elena@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/30 font-sans"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
          Message & current tool stack
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about the manual tasks that eat your week and what tools you connect (e.g. HubSpot, Xero, Slack, Notion)..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] text-white text-sm focus:border-[#D4F542] focus:ring-1 focus:ring-[#D4F542]/40 focus:outline-none transition-all placeholder:text-white/30 font-sans resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="solid" className="w-full justify-center">
        Send message to the desk →
      </Button>

      <p className="text-center text-[11px] font-mono text-white/40">
        Direct to engineering · No automated sequences · London UTC/GMT
      </p>
    </form>
  );
}

export default ContactForm;