"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "ghost" | "quiet";
  hasArrow?: boolean;
  hasLamp?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "solid",
  hasArrow = true,
  hasLamp = false,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const isGhost = variant === "ghost";
  const isQuiet = variant === "quiet";

  const btnClasses = [
    "rb-btn",
    hasArrow ? "rb-has-a" : "",
    isGhost ? "rb-ghost" : "",
    isQuiet ? "rb-quiet" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerContent = (
    <span className="rb-btn-face">
      <span className="inline-flex items-center gap-2 z-10">
        {hasLamp && (
          <span className="relative z-10 flex-shrink-0 w-2 h-2 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542]" />
        )}
        <span className="font-semibold">{children}</span>
      </span>

      {hasArrow && (
        <span className="rb-btn-a">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="2" y1="8" x2="14" y2="8" />
            <polyline points="9 3 14 8 9 13" />
          </svg>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={btnClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={btnClasses}>
      {innerContent}
    </button>
  );
}
