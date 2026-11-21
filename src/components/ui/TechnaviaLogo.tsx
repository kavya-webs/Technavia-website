"use client";

import React from "react";

interface TechnaviaLogoProps {
  variant?: "horizontal" | "stacked" | "symbol" | "wordmark";
  className?: string;
  symbolSize?: number;
  wordmarkHeight?: number;
  symbolColor?: string;
  wordmarkColor?: string;
}

/**
 * Official TECHNAVIA Master Logo Component
 * - Symbol: Symmetric 6-node triangular network in #D4F542 (Neon Lime)
 * - Wordmark: Geometric sans-serif with crossbar-less chevron A's mirroring V in #F8F8F5
 */
export function TechnaviaLogo({
  variant = "horizontal",
  className = "",
  symbolSize = 34,
  wordmarkHeight = 22,
  symbolColor = "#D4F542",
  wordmarkColor = "#F8F8F5",
}: TechnaviaLogoProps) {
  // Pure 6-Node Triangular Network Symbol (viewBox: 200 40 270 175)
  const SymbolSVG = (
    <svg
      viewBox="200 40 270 175"
      fill="none"
      stroke={symbolColor}
      strokeWidth="13.60"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      style={{ width: symbolSize, height: symbolSize * (175 / 270) }}
      aria-hidden="true"
    >
      {/* Connecting bars */}
      <line x1="240.00" y1="58.30" x2="314.90" y2="58.30" />
      <line x1="357.90" y1="58.30" x2="432.80" y2="58.30" />
      <line x1="321.67" y1="73.96" x2="292.13" y2="105.34" />
      <line x1="351.13" y1="73.96" x2="380.67" y2="105.34" />
      <line x1="439.58" y1="73.97" x2="410.12" y2="105.33" />
      <line x1="290.53" y1="138.02" x2="323.27" y2="180.48" />
      <line x1="382.27" y1="138.02" x2="349.53" y2="180.48" />
      <line x1="336.40" y1="176.00" x2="336.40" y2="121.30" strokeLinecap="round" />
      {/* Nodes */}
      <circle cx="218.50" cy="58.30" r="21.50" />
      <circle cx="336.40" cy="58.30" r="21.50" />
      <circle cx="454.30" cy="58.30" r="21.50" />
      <circle cx="277.40" cy="121.00" r="21.50" />
      <circle cx="395.40" cy="121.00" r="21.50" />
      <circle cx="336.40" cy="197.50" r="21.50" />
    </svg>
  );

  // Geometric Wordmark: TECHNAVIA with chevron A's (viewBox: 25 275 625 85)
  const WordmarkSVG = (
    <svg
      viewBox="25 275 625 85"
      fill={wordmarkColor}
      className="shrink-0 transition-colors"
      style={{ height: wordmarkHeight, width: wordmarkHeight * (625 / 85), color: wordmarkColor }}
      aria-label="TECHNAVIA"
    >
      {/* T */}
      <path d="M 30.60 282.90 Q 30.60 280.30 33.20 280.30 L 91.00 280.30 Q 93.60 280.30 93.60 282.90 L 93.60 291.20 Q 93.60 293.80 91.00 293.80 L 69.85 293.80 Q 68.85 293.80 68.85 294.80 L 68.85 350.90 Q 68.85 353.50 66.25 353.50 L 57.95 353.50 Q 55.35 353.50 55.35 350.90 L 55.35 294.80 Q 55.35 293.80 54.35 293.80 L 33.20 293.80 Q 30.60 293.80 30.60 291.20 Z" />
      {/* E */}
      <path d="M 106.60 282.90 Q 106.60 280.30 109.20 280.30 L 156.00 280.30 Q 158.60 280.30 158.60 282.90 L 158.60 291.20 Q 158.60 293.80 156.00 293.80 L 121.10 293.80 Q 120.10 293.80 120.10 294.80 L 120.10 309.10 Q 120.10 310.10 121.10 310.10 L 150.00 310.10 Q 152.60 310.10 152.60 312.70 L 152.60 321.00 Q 152.60 323.60 150.00 323.60 L 121.10 323.60 Q 120.10 323.60 120.10 324.60 L 120.10 339.00 Q 120.10 340.00 121.10 340.00 L 156.00 340.00 Q 158.60 340.00 158.60 342.60 L 158.60 350.90 Q 158.60 353.50 156.00 353.50 L 109.20 353.50 Q 106.60 353.50 106.60 350.90 Z" />
      {/* C */}
      <path d="M 238.57 334.34 A 37.30 37.30 0 1 1 238.57 299.46 Q 239.54 301.43 237.54 302.34 L 229.26 306.12 Q 227.26 307.03 226.25 305.07 A 23.80 23.80 0 1 0 226.25 328.73 Q 227.26 326.77 229.26 327.68 L 237.54 331.46 Q 239.54 332.37 238.57 334.34 Z" />
      {/* H */}
      <path d="M 252.60 282.90 Q 252.60 280.30 255.20 280.30 L 263.50 280.30 Q 266.10 280.30 266.10 282.90 L 266.10 309.10 Q 266.10 310.10 267.10 310.10 L 298.10 310.10 Q 299.10 310.10 299.10 309.10 L 299.10 282.90 Q 299.10 280.30 301.70 280.30 L 310.00 280.30 Q 312.60 280.30 312.60 282.90 L 312.60 350.90 Q 312.60 353.50 310.00 353.50 L 301.70 353.50 Q 299.10 353.50 299.10 350.90 L 299.10 324.60 Q 299.10 323.60 298.10 323.60 L 267.10 323.60 Q 266.10 323.60 266.10 324.60 L 266.10 350.90 Q 266.10 353.50 263.50 353.50 L 255.20 353.50 Q 252.60 353.50 252.60 350.90 Z" />
      {/* N */}
      <path d="M 328.60 282.90 Q 328.60 280.30 331.20 280.30 L 340.75 280.30 Q 342.10 280.30 342.88 281.40 L 375.28 327.46 Q 377.10 330.04 377.10 326.88 L 377.10 282.90 Q 377.10 280.30 379.70 280.30 L 388.00 280.30 Q 390.60 280.30 390.60 282.90 L 390.60 350.90 Q 390.60 353.50 388.00 353.50 L 378.45 353.50 Q 377.10 353.50 376.32 352.40 L 343.92 306.34 Q 342.10 303.76 342.10 306.92 L 342.10 350.90 Q 342.10 353.50 339.50 353.50 L 331.20 353.50 Q 328.60 353.50 328.60 350.90 Z" />
      {/* A1 */}
      <path d="M 428.56 281.98 Q 429.20 280.30 430.99 280.30 L 441.81 280.30 Q 443.60 280.30 444.24 281.98 L 470.06 349.98 Q 471.40 353.50 467.63 353.50 L 458.75 353.50 Q 456.96 353.50 456.32 351.82 L 437.33 301.83 Q 436.40 299.37 435.47 301.83 L 416.48 351.82 Q 415.84 353.50 414.05 353.50 L 405.17 353.50 Q 401.40 353.50 402.74 349.98 Z" />
      {/* V */}
      <path d="M 468.34 283.82 Q 467.00 280.30 470.77 280.30 L 479.65 280.30 Q 481.44 280.30 482.08 281.98 L 501.07 331.97 Q 502.00 334.43 502.93 331.97 L 521.92 281.98 Q 522.56 280.30 524.35 280.30 L 533.23 280.30 Q 537.00 280.30 535.66 283.82 L 509.84 351.82 Q 509.20 353.50 507.41 353.50 L 496.59 353.50 Q 494.80 353.50 494.16 351.82 Z" />
      {/* I */}
      <path d="M 548.60 282.90 Q 548.60 280.30 551.20 280.30 L 559.50 280.30 Q 562.10 280.30 562.10 282.90 L 562.10 350.90 Q 562.10 353.50 559.50 353.50 L 551.20 353.50 Q 548.60 353.50 548.60 350.90 Z" />
      {/* A2 */}
      <path d="M 600.56 281.98 Q 601.20 280.30 602.99 280.30 L 613.81 280.30 Q 615.60 280.30 616.24 281.98 L 642.06 349.98 Q 643.40 353.50 639.63 353.50 L 630.75 353.50 Q 628.96 353.50 628.32 351.82 L 609.33 301.83 Q 608.40 299.37 607.47 301.83 L 588.48 351.82 Q 587.84 353.50 586.05 353.50 L 577.17 353.50 Q 573.40 353.50 574.74 349.98 Z" />
    </svg>
  );

  if (variant === "symbol") {
    return <div className={`inline-flex items-center justify-center ${className}`}>{SymbolSVG}</div>;
  }

  if (variant === "wordmark") {
    return <div className={`inline-flex items-center text-[#F8F8F5] ${className}`}>{WordmarkSVG}</div>;
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-3.5 text-[#F8F8F5] ${className}`}>
        {SymbolSVG}
        {WordmarkSVG}
      </div>
    );
  }

  // Default: horizontal (symbol on left, wordmark on right)
  return (
    <div className={`flex items-center gap-3 text-[#F8F8F5] ${className}`}>
      {SymbolSVG}
      {WordmarkSVG}
    </div>
  );
}
