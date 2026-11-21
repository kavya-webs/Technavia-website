"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

export interface IndustryItem {
  id: string;
  num: string;
  name: string;
  share: string;
  typicalWorkflows: string;
  workflowsList?: string[];
  description?: string;
  exampleClient?: string;
  img: string;
}

export const INDUSTRY_ITEMS: IndustryItem[] = [
  {
    id: "clinics",
    num: "01",
    name: "Clinics",
    share: "24 %",
    typicalWorkflows: "Appointment reminders, intake forms, recall lists",
    workflowsList: ["Appointment reminders", "Intake forms", "Recall lists", "Deposit collection"],
    description: "Dental practices, physio centers and medical clinics reclaiming front desk time from repetitive scheduling calls.",
    exampleClient: "Harbour Dental",
    img: "/images/industries/clinics.jpg",
  },
  {
    id: "agencies",
    num: "02",
    name: "Agencies",
    share: "21 %",
    typicalWorkflows: "Proposal to contract, client onboarding, timesheet to invoice",
    workflowsList: ["Proposal to contract", "Client onboarding", "Timesheet to invoice", "Review requests"],
    description: "Design studios, software consultancies and marketing teams automating billing, timesheets and project kickoffs.",
    exampleClient: "Northcode Studio",
    img: "/images/industries/agencies.jpg",
  },
  {
    id: "ecommerce",
    num: "03",
    name: "E-commerce",
    share: "18 %",
    typicalWorkflows: "Order updates, returns, low-stock alerts",
    workflowsList: ["Order updates", "Automated returns", "Low-stock alerts", "Review syndication"],
    description: "Shopify and WooCommerce brands automating order triage, shipping updates, inventory reorders and customer tickets.",
    exampleClient: "Norden Objects",
    img: "/images/industries/ecommerce.jpg",
  },
  {
    id: "logistics",
    num: "04",
    name: "Logistics",
    share: "14 %",
    typicalWorkflows: "Job dispatch, proof of delivery, customer updates",
    workflowsList: ["Job dispatch", "Proof of delivery", "Customer updates", "Driver scheduling"],
    description: "Depots, freight forwarders and courier operators eliminating manual spreadsheet entry and dispatch status calls.",
    exampleClient: "Crosslane Freight",
    img: "/images/industries/logistics.jpg",
  },
  {
    id: "legal",
    num: "05",
    name: "Legal",
    share: "13 %",
    typicalWorkflows: "Matter intake, conflict checks, time to bill",
    workflowsList: ["Matter intake", "Conflict checks", "Time to bill", "Document generation"],
    description: "Boutique law firms, conveyancers and corporate counsels automating document intake, conflict indexing and billing runs.",
    exampleClient: "Vanguard Legal",
    img: "/images/industries/legal.jpg",
  },
  {
    id: "real-estate",
    num: "06",
    name: "Real estate",
    share: "10 %",
    typicalWorkflows: "Viewing bookings, valuation follow-ups, vendor updates",
    workflowsList: ["Viewing bookings", "Valuation follow-ups", "Vendor updates", "Portal lead sync"],
    description: "Estate agencies and property management desks connecting portal leads directly to negotiator calendars in seconds.",
    exampleClient: "Aldgate Estates",
    img: "/images/industries/real_estate.jpg",
  },
];

export interface IndustriesSectionProps {
  variant?: "list" | "grid";
  showHeader?: boolean;
}

export function IndustriesSection({ variant = "list", showHeader = true }: IndustriesSectionProps = {}) {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const [isHoveringList, setIsHoveringList] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for floating preview card attached to cursor (list view)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Animated slant green thread line beneath "All industries" button
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const greenLineY2 = useTransform(scrollYProgress, [0.25, 0.85], ["98%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B0D10] text-[#F8F8F5] pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-14 border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-14">
        {/* Header */}
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <SectionLabel>Industries</SectionLabel>
              <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[1.05]">
                Six sectors, <br className="hidden sm:block" />
                <span className="text-[#D4F542]">the same ten jobs.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4 max-w-md">
              <p className="text-sm sm:text-base text-white/70 leading-relaxed md:text-right font-sans">
                Every sector has its own version of the work that repeats every day. We have wired
                most of it before, so your build starts from a running workflow, not a blank page.
              </p>
            </div>
          </div>
        )}

        {/* Variant: Grid Directory Cards (Enhanced with local photography, hover zoom, and glassmorphic badges) */}
        {variant === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRY_ITEMS.map((ind) => (
              <div
                key={ind.id}
                className="group relative rounded-3xl bg-zinc-950/80 border border-white/[0.12] hover:border-[#D4F542]/50 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Image Header with Hover Zoom & Gradient Vignette */}
                <div className="relative w-full h-56 overflow-hidden bg-zinc-900">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent" />

                  {/* Top Floating Glassmorphic Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono font-semibold text-white">
                      <span className="text-[#D4F542] mr-1.5">{ind.num}</span> / 06
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono font-medium text-[#D4F542]">
                      {ind.share} of clients
                    </span>
                  </div>

                  {/* Sector Name on Bottom of Image */}
                  <div className="absolute bottom-4 left-6 z-10">
                    <h3 className="text-3xl font-tight font-bold text-white tracking-tight">
                      {ind.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-6">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-white/70 leading-relaxed font-sans">
                      {ind.description}
                    </p>
                    {ind.exampleClient && (
                      <div className="flex items-center gap-2 text-xs font-mono text-white/50 pt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4F542]" />
                        <span>Reference client:</span>
                        <span className="text-white/80 font-medium">{ind.exampleClient}</span>
                      </div>
                    )}
                  </div>

                  {/* Workflows Pill List */}
                  <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.08]">
                    <span className="text-[11px] font-mono text-[#D4F542] uppercase tracking-wider font-semibold">
                      Typical workflows:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(ind.workflowsList || ind.typicalWorkflows.split(", ")).map((wf, wfIdx) => (
                        <span
                          key={`${wf}-${wfIdx}`}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white/80 border border-white/[0.08] transition-colors"
                        >
                          {wf}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link CTA */}
                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-white transition-colors">
                    <span>SECTOR PLAYBOOK</span>
                    <Link
                      href="/workflows"
                      className="text-[#D4F542] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold"
                    >
                      <span>Explore blueprints</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Variant: List (Interactive Row List with Cursor-Attached Floating Image for Home) */
          <>
            <div
              ref={listRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHoveringList(true)}
              onMouseLeave={() => setIsHoveringList(false)}
              className="relative w-full flex flex-col divide-y divide-white/[0.08] border-t border-b border-white/[0.08]"
            >
              {/* Floating Image Card Attached to Cursor (Video Reference Match) */}
              <motion.div
                style={{
                  x: springX,
                  y: springY,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{
                  opacity: isHoveringList ? 1 : 0,
                  scale: isHoveringList ? 1 : 0.85,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute z-30 pointer-events-none w-[310px] sm:w-[350px] h-[400px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/20 bg-zinc-950 shadow-[0_25px_60px_rgba(0,0,0,0.85)] hidden lg:block"
              >
                {/* Top-Left Pill */}
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 text-black font-mono font-semibold text-xs tracking-wider shadow-md">
                  {INDUSTRY_ITEMS[hoveredIdx].num} / 06
                </div>

                {/* Background Image corresponding to hovered industry */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={INDUSTRY_ITEMS[hoveredIdx].img}
                    alt={INDUSTRY_ITEMS[hoveredIdx].name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>

                {/* Bottom Dark Overlay Box */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 flex flex-col gap-1 shadow-xl">
                  <span className="text-[11px] font-mono font-bold text-[#D4F542] uppercase tracking-wider">
                    TYPICAL WORKFLOWS
                  </span>
                  <span className="text-xs font-mono text-white/90 leading-snug">
                    {INDUSTRY_ITEMS[hoveredIdx].typicalWorkflows}
                  </span>
                </div>
              </motion.div>

              {/* Industry Rows */}
              {INDUSTRY_ITEMS.map((ind, idx) => {
                const isHovered = hoveredIdx === idx && isHoveringList;

                return (
                  <Link
                    key={ind.id}
                    href="/industries"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className="group py-5 sm:py-7 md:py-10 flex items-center justify-between transition-colors duration-200 cursor-pointer"
                  >
                    {/* Left: Number + Title + Arrow Button */}
                    <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
                      <span
                        className={`text-xs sm:text-sm md:text-base font-mono transition-colors duration-200 ${
                          isHovered ? "text-[#D4F542]" : "text-white/40"
                        }`}
                      >
                        {ind.num}
                      </span>

                      <div className="flex items-center gap-2 sm:gap-4">
                        <h3
                          className={`text-2xl sm:text-4xl md:text-5xl lg:text-[68px] font-tight font-bold tracking-tight transition-colors duration-200 leading-none ${
                            isHovered ? "text-white" : "text-white/40 group-hover:text-white"
                          }`}
                        >
                          {ind.name}
                        </h3>

                        {/* Arrow Button pill appearing on hover matching video */}
                        <span
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4F542] text-black font-bold text-xs sm:text-sm flex items-center justify-center transition-all duration-300 ${
                            isHovered
                              ? "opacity-100 scale-100 translate-x-0"
                              : "opacity-0 scale-75 -translate-x-2 pointer-events-none"
                          }`}
                        >
                          →
                        </span>
                      </div>
                    </div>

                    {/* Right: Percentage Share */}
                    <div className="flex items-center gap-1.5 sm:gap-3 text-right">
                      <span className="text-lg sm:text-2xl font-mono font-semibold text-[#D4F542]">
                        {ind.share}
                      </span>
                      <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/40 hidden md:inline">
                        OF OUR CLIENTS
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Bar: All industries Button moved after sectors list */}
            <div className="relative w-full pt-4 flex justify-end">
              <Button href="/industries" variant="quiet">
                All industries
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Animated Slanted Green Line after "All industries" button matching Image 3 & Video */}
      {variant === "list" && (
        <div className="relative w-full h-16 mt-4 overflow-hidden pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0%"
              y1="98%"
              x2="100%"
              y2={greenLineY2}
              stroke="#D4F542"
              strokeWidth="1.5"
              className="drop-shadow-[0_0_8px_#D4F542] drop-shadow-[0_0_16px_rgba(212,245,66,0.8)]"
            />
          </svg>
        </div>
      )}
    </section>
  );
}

export default IndustriesSection;