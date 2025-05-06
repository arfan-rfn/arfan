import React from "react";
import { TimelineItem } from "@/types/timeline";
import { cn, toAbsoluteUrl } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import Link from "next/link";

interface TimelineCardProps {
  item: TimelineItem;
}

const getIconComponent = (iconName: TimelineItem["icon"]): React.ReactNode => {
  const IconComponent = Icons[iconName];
  return <IconComponent className="size-6" />;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
};

const getYearFromDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.getFullYear().toString();
};

const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  if (!end) {
    return formatDate(startDate);
  }

  // If same year, only show year once
  if (start.getFullYear() === end.getFullYear()) {
    const startStr = start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const endStr = end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${startStr} - ${endStr}`;
  }

  // Different years, show full dates
  return `${formatDate(startDate)} - ${formatDate(endDate!)}`;
};

export function TimelineCard({ item }: TimelineCardProps) {
  const dateRange = formatDateRange(item.date, item.endDate);
  const year = getYearFromDate(item.date);

  const cardContent = (
    <motion.div
      className="relative w-full max-w-2xl"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-1 bg-primary"
          style={{ background: item.color }}
        />
        <CardContent>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-medium text-muted-foreground">
                  {dateRange}
                </span>
                <span className="text-primary">
                  {getIconComponent(item.icon)}
                </span>
              </div>
              <h3 className="text-lg font-semibold truncate">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {item.description}
              </p>
              {item.tags && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground px-2 py-0.5 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
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