"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A scrap / sheet of torn paper. The ragged edges come from the shared
 * `#torn-paper` SVG filter (rendered once at the app root); a drop-shadow is
 * chained after it so the shadow hugs the torn silhouette. The filter is
 * applied to a backing layer only, never the content, so text stays crisp.
 *
 * Used by the timeline cards, blog listing scraps, and the diary blog page.
 */

// Re-export the pure helpers so existing imports from this module keep working.
export { tiltFromString, washiTapeColor, washiTapeFor } from "@/lib/paper";

const PAPER_BG =
  "linear-gradient(180deg, color-mix(in oklab, var(--card) 70%, white) 0%, color-mix(in oklab, var(--card) 88%, white) 18%, color-mix(in oklab, var(--card) 92%, white) 100%)";

interface TornPaperProps {
  children: React.ReactNode;
  /** Outer wrapper classes (sizing, max-width, etc.). */
  className?: string;
  /** Inner content wrapper classes (padding, etc.). */
  contentClassName?: string;
  /** Washi-tape fill color. Omit for no tape. Use washiTapeColor() to build one. */
  tapeColor?: string;
  /** Base rotation in degrees. */
  tilt?: number;
  /** Straighten + lift on hover (for clickable cards). */
  interactive?: boolean;
  /** Show a gently curled / turned-up bottom-right corner (diary page). */
  curl?: boolean;
}

export function TornPaper({
  children,
  className,
  contentClassName,
  tapeColor,
  tilt = 0,
  interactive = false,
  curl = false,
}: TornPaperProps) {
  return (
    <motion.div
      className={cn("group relative", className)}
      initial={false}
      animate={{ rotate: tilt, y: 0 }}
      whileHover={interactive ? { rotate: 0, y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Torn paper backing */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: PAPER_BG,
          filter:
            "url(#torn-paper) drop-shadow(0 5px 5px rgba(60,42,20,0.18)) drop-shadow(0 1px 0 rgba(60,42,20,0.12))",
        }}
      />

      {/* Turned-up bottom-right corner (dog-ear): a soft shadow cast by the
          lift, then the folded-back triangle of paper over it. */}
      {curl && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-1 right-1 z-[1] size-20"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, rgba(60,42,20,0.30) 0%, rgba(60,42,20,0.12) 38%, transparent 68%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0.5 right-0.5 z-[2] size-14"
            style={{
              clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--card) 55%, #2a1c08 12%) 0%, color-mix(in oklab, var(--card) 80%, white) 55%, color-mix(in oklab, var(--card) 92%, white) 100%)",
              boxShadow: "inset 1px 1px 1px rgba(255,255,255,0.25)",
            }}
          />
        </>
      )}

      {/* Washi tape */}
      {tapeColor && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-3 left-1/2 z-20 h-6 w-24 -translate-x-1/2 -rotate-3 rounded-[2px] sm:h-7 sm:w-28"
          style={{
            background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.16) 0 5px, rgba(255,255,255,0) 5px 10px), ${tapeColor}`,
            boxShadow:
              "0 2px 4px rgba(60,42,20,0.28), inset 0 0 0 1px rgba(255,255,255,0.18)",
          }}
        />
      )}

      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </motion.div>
  );
}
