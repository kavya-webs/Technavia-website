"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export interface SubpageHeroProps {
  pageName: string;
  parentCrumb?: { label: string; href: string };
  titleLine1: string;
  titleLine2: string;
  highlightLine2?: boolean;
  highlightText?: string;
  subtitle: string;
  badgeText?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage: string;
  imageAlt?: string;
  imagePosition?: string;
  wireframeNumber?: string;
  statusPills?: Array<{ text: string; variant?: "brass" | "ghost" | "outline" }>;
}

function renderTitleContent(
  text: string,
  highlightText?: string,
  isFullLineHighlighted?: boolean
): React.ReactNode {
  if (highlightText && text.toLowerCase().includes(highlightText.toLowerCase())) {
    const lowerText = text.toLowerCase();
    const lowerHighlight = highlightText.toLowerCase();
    const startIndex = lowerText.indexOf(lowerHighlight);
    const endIndex = startIndex + highlightText.length;

    const before = text.slice(0, startIndex);
    const match = text.slice(startIndex, endIndex);
    const after = text.slice(endIndex);

    return (
      <>
        {before}
        <span className="text-[#D4F542]">{match}</span>
        {after}
      </>
    );
  }

  if (isFullLineHighlighted) {
    return <span className="text-[#D4F542]">{text}</span>;
  }

  return text;
}

export function SubpageHero({
  pageName,
  parentCrumb,
  titleLine1,
  titleLine2,
  highlightLine2,
  highlightText,
  subtitle,
  badgeText,
  primaryCta,
  secondaryCta,
  backgroundImage,
  imageAlt,
  imagePosition,
  wireframeNumber,
  statusPills,
}: SubpageHeroProps) {
  // Determine if Line 2 should be highlighted in brass
  // Defaults to true if no highlightText is specified, or honors explicit boolean
  const isLine2Highlighted =
    highlightLine2 !== undefined ? highlightLine2 : !highlightText;

  // Flexible handling for Tailwind class vs CSS string object position
  const isTailwindObjectPos = imagePosition && imagePosition.startsWith("object-");
  const objectPosClass = isTailwindObjectPos
    ? imagePosition
    : !imagePosition
      ? "object-[50%_40%]"
      : "";
  const customObjectPosStyle =
    !isTailwindObjectPos && imagePosition ? { objectPosition: imagePosition } : undefined;

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-36 pb-16 px-6 md:px-8 lg:px-14 bg-[#0B0D10] text-[#F8F8F5] overflow-hidden border-b border-white/[0.08]">
      {/* Background Photography with High Vividness Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={backgroundImage}
          alt={imageAlt || `${pageName} hero background`}
          className={`w-full h-full object-cover opacity-95 contrast-[1.04] brightness-[1.02] ${objectPosClass}`}
          style={customObjectPosStyle}
        />
        {/* Directional left scrim focused behind text, clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/80 via-[#0B0D10]/35 via-42% to-transparent" />
        {/* Soft top and bottom blending bands */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B0D10]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0D10]/85 via-[#0B0D10]/40 to-transparent" />
      </div>

      {/* Wireframe stroke number (optional ambient decorative background) */}
      {wireframeNumber && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-0 pointer-events-none select-none right-6 md:right-14 lg:right-20 bottom-12 md:bottom-16"
        >
          <span
            className="text-[140px] sm:text-[200px] lg:text-[280px] font-tight font-extralight tracking-tighter leading-none"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
              color: "transparent",
            }}
          >
            {wireframeNumber}
          </span>
        </motion.div>
      )}

      {/* Top Breadcrumbs & Hero Copy */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full flex flex-col gap-8 my-auto">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-white/50"
        >
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <span>/</span>
          {parentCrumb && (
            <>
              <Link href={parentCrumb.href} className="hover:text-white transition-colors">
                {parentCrumb.label.toUpperCase()}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="flex items-center gap-1.5 text-white/90">
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            {pageName.toUpperCase()}
          </span>
        </motion.div>

        {/* Optional Eyebrow Badge */}
        {badgeText && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_8px_#D4F542]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#F8F8F5]/90 font-medium">
              {badgeText}
            </span>
          </motion.div>
        )}

        {/* Hero Title with masked split-line phase-in animation */}
        <h1 className="text-5xl sm:text-7xl lg:text-[96px] font-tight font-semibold tracking-[-0.04em] text-[#F8F8F5] leading-[0.96] max-w-5xl">
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="block"
            >
              {renderTitleContent(titleLine1, highlightText, false)}
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
              className="block"
            >
              {renderTitleContent(titleLine2, highlightText, isLine2Highlighted)}
            </motion.span>
          </span>
        </h1>

        {/* Subhead text phasing in */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-white/75 leading-relaxed font-sans max-w-2xl"
        >
          {subtitle}
        </motion.p>

        {/* Action Buttons */}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {primaryCta && (
              <Button href={primaryCta.href} variant="solid">
                {primaryCta.label}
              </Button>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-tight font-semibold transition-colors border border-white/[0.1]"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_6px_#D4F542]" />
                <span>{secondaryCta.label}</span>
              </Link>
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom Status Pills Row */}
      {statusPills && statusPills.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="relative z-10 max-w-[1280px] mx-auto w-full pt-12 border-t border-white/[0.08] flex flex-wrap items-center gap-3"
        >
          {statusPills.map((pill, idx) => {
            let pillClasses =
              "px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider ";
            if (pill.variant === "brass") {
              pillClasses +=
                "bg-[#D4F542] text-black font-semibold shadow-[0_0_12px_rgba(212,245,66,0.3)]";
            } else if (pill.variant === "outline") {
              pillClasses += "border border-white/[0.18] text-white/90 bg-white/[0.02]";
            } else {
              // 'ghost' or default
              pillClasses +=
                "bg-white/[0.06] border border-white/[0.1] text-white/80 backdrop-blur-sm";
            }
            return (
              <span key={idx} className={pillClasses}>
                {pill.text}
              </span>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}

export default SubpageHero;
