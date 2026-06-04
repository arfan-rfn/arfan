import React from "react";
import { TimelineItem } from "@/types/timeline";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { TornPaper, tiltFromString, washiTapeColor } from "@/components/ui/torn-paper";

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

export function TimelineCard({ item }: TimelineCardProps) {
  const dateRange = formatDateRange(item.date, item.endDate);

  // Tone the raw category color down so it harmonizes with the warm
  // parchment palette instead of shouting like a default web color.
  const accentSoft = `color-mix(in oklab, ${item.color} 16%, var(--card))`;
  const accentInk = `color-mix(in oklab, ${item.color} 55%, var(--foreground))`;

  const cardContent = (
    <TornPaper
      className="w-full max-w-2xl"
      contentClassName="px-5 py-7 sm:px-7"
      tilt={tiltFromString(item.id)}
      tapeColor={washiTapeColor(item.color)}
      interactive
    >
      <>
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
      </>
    </TornPaper>
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