import React from "react";
import { TimelineItem } from "@/types/timeline";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import Link from "next/link";

interface TimelineCardProps {
  item: TimelineItem;
}

const getIconComponent = (iconName: TimelineItem["icon"]): React.ReactNode => {
  const IconComponent = Icons[iconName];
  return <IconComponent className="size-5" />;
};

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
};

const formatDateRange = (startDate: string, endDate?: string): string => {
  // Force dates to be interpreted at start of day in local timezone
  const [startYear, startMonth, startDay] = startDate.split('-').map(Number);
  const start = new Date(startYear, startMonth - 1, startDay);

  const end = endDate?.toLowerCase() === 'current'
    ? null
    : endDate
    ? (() => {
        const [endYear, endMonth, endDay] = endDate.split('-').map(Number);
        return new Date(endYear, endMonth - 1, endDay);
      })()
    : null;


  if (!end) {
    const startStr = formatDate(startDate);
    return endDate?.toLowerCase() === 'current'
      ? `${startStr} - Present`
      : startStr;
  }

  // If same year, only show year once
  if (start.getFullYear() === end.getFullYear()) {
    const startStr = start.toLocaleString('en-US', { month: 'short' });
    const endStr = end.toLocaleString('en-US', { month: 'short', year: 'numeric' });
    return `${startStr} - ${endStr}`;
  }

  // Different years, show full dates
  return `${formatDate(startDate)} - ${formatDate(endDate!)}`;
};

// Deterministic, gentle tilt per card so the timeline reads like scraps
// casually taped into a journal rather than a rigid grid. Range ~[-2deg, +2deg].
const tiltFor = (id: string): number => {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return (h % 161) / 40 - 2;
};

export function TimelineCard({ item }: TimelineCardProps) {
  const dateRange = formatDateRange(item.date, item.endDate);
  const tilt = tiltFor(item.id);

  // Tone the raw category color down so it harmonizes with the warm
  // parchment palette instead of shouting like a default web color.
  const accentSoft = `color-mix(in oklab, ${item.color} 16%, var(--card))`;
  const accentInk = `color-mix(in oklab, ${item.color} 55%, var(--foreground))`;
  // Washi-tape color encodes the category. Pulled partly toward the olive
  // primary so every tape reads as the same set of tape, not raw web colors,
  // then made translucent for the tape look.
  const tapeColor = `color-mix(in oklab, color-mix(in oklab, ${item.color} 88%, var(--primary)) 62%, transparent)`;

  const cardContent = (
    <motion.div
      className="group relative w-full max-w-2xl"
      initial={false}
      animate={{ rotate: tilt, y: 0 }}
      whileHover={{ rotate: 0, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Torn paper backing: an SVG turbulence filter frays the edges, then a
          drop-shadow (chained after) hugs the ragged silhouette. Kept behind
          the text so the displacement never blurs the content. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--card) 70%, white) 0%, color-mix(in oklab, var(--card) 88%, white) 18%, color-mix(in oklab, var(--card) 92%, white) 100%)",
          filter:
            "url(#torn-paper) drop-shadow(0 5px 5px rgba(60,42,20,0.18)) drop-shadow(0 1px 0 rgba(60,42,20,0.12))",
        }}
      />

      {/* Washi tape pinning the scrap at the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-3 left-1/2 z-20 h-6 w-24 -translate-x-1/2 -rotate-3 rounded-[2px] sm:h-7 sm:w-28"
        style={{
          background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.16) 0 5px, rgba(255,255,255,0) 5px 10px), ${tapeColor}`,
          boxShadow:
            "0 2px 4px rgba(60,42,20,0.28), inset 0 0 0 1px rgba(255,255,255,0.18)",
        }}
      />

      <div className="relative z-10 px-5 py-7 sm:px-7">
        {/* Stamp header: ticket-stub date on the left, stamp badge on the right */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="font-typewriter text-[11px] sm:text-xs uppercase tracking-[0.1em] text-muted-foreground">
            {dateRange}
          </span>
          <span
            className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: accentSoft, color: accentInk }}
          >
            {getIconComponent(item.icon)}
          </span>
        </div>

        <h3 className="font-serif text-base sm:text-lg font-bold leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <>
            {/* Perforated tear-off rule, like a journal divider / ticket stub */}
            <div className="mt-4 border-t border-dashed border-border" />
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted/70 text-muted-foreground px-2 py-0.5 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );

  if (item.url) {
    const absoluteUrl = item.url
    const isExternal = absoluteUrl.startsWith('http://') || absoluteUrl.startsWith('https://');

    if (isExternal) {
      return (
        <a
          href={absoluteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }

    return (
      <Link href={item.url} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}