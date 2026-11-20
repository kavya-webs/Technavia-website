import React from "react";

export function LitDot({ className = "", isStatic = false }: { className?: string; isStatic?: boolean }) {
  return (
    <span
      className={`relative inline-block w-2 h-2 flex-shrink-0 rounded-full bg-[#D4F542] shadow-[0_0_10px_#D4F542] ${
        isStatic ? "" : "rb-lit-dot"
      } ${className}`}
    />
  );
}
