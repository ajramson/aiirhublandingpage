"use client";

import { useEffect } from "react";

/**
 * Placeholder analytics hook. No provider implementation.
 * Attach to root layout or individual pages as needed.
 */
export function useAnalytics(page: string) {
  useEffect(() => {
    // Minimal, privacy-friendly placeholder
    console.debug("analytics:view", { page, timestamp: Date.now() });
  }, [page]);
}


