"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowDown, Sparkles } from "lucide-react";

export function AdHeaderBar({ offerText }: { offerText?: string }) {
  const searchParams = useSearchParams();
  const [isAdMode, setIsAdMode] = useState(false);

  useEffect(() => {
    if (searchParams.get("ad") === "1" || searchParams.get("utm_source")) {
      setIsAdMode(true);
    }
  }, [searchParams]);

  if (!isAdMode) return null;

  return (
    <aside aria-label="Direct Audit Invitation" className="sticky top-0 z-50 w-full bg-[#14161A]/95 border-b border-[#D4F542]/30 py-2.5 px-4 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-white/90">
          <Sparkles className="w-3.5 h-3.5 text-[#D4F542]" />
          <span className="hidden sm:inline text-white/70">DIRECT AUDIT INVITATION:</span>
          <span className="text-[#F8F8F5] font-semibold">{offerText || "Claim your free 48-hr tear-down blueprint"}</span>
        </div>
        <a
          href="#service-book"
          className="px-3 py-1 rounded-full bg-[#D4F542] text-black font-semibold text-[11px] flex items-center gap-1.5 hover:bg-[#D4F542]/90 transition-transform active:scale-95 shadow-[0_0_10px_rgba(212,245,66,0.3)] cursor-pointer"
        >
          <span>Claim Audit Below</span>
          <ArrowDown className="w-3 h-3" />
        </a>
      </div>
    </aside>
  );
}

export default AdHeaderBar;
