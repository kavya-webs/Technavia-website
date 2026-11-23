"use client";

import React, { Suspense } from "react";
import { InquiryForm } from "@/components/forms/InquiryForm";

export function BookForm() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-white/50 font-mono text-xs">Loading form...</div>}>
      <InquiryForm defaultTimeline="Immediate (< 30 days)" />
    </Suspense>
  );
}

export default BookForm;
