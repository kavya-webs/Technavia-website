import React from "react";
import { LitDot } from "./LitDot";

interface SectionLabelProps {
  children: React.ReactNode;
  hasDot?: boolean;
  className?: string;
}

export function SectionLabel({ children, hasDot = true, className = "" }: SectionLabelProps) {
  return (
    <div className={`rb-lbl flex items-center gap-2 mb-3 ${className}`}>
      {hasDot && <LitDot />}
      <span>{children}</span>
    </div>
  );
}
