import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { TimelineCard } from "./timeline-card";

export interface TimelineItem {
  id: string;
  year: string;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tags?: string[];
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  // Group items by year for sticky year markers
  const grouped = items.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {} as Record<string, TimelineItem[]>);
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className={cn("relative flex w-full", className)}>
      {/* Vertical timeline line on the right */}
      <div className="absolute right-6 top-0 h-full w-1 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 rounded-full" />
      <div className="flex flex-col w-full mr-16">
        {years.map((year) => (
          <div key={year} className="relative mb-8">
            {/* Sticky year marker on the right */}
            <div className="sticky top-24 z-10 flex items-center justify-end mb-8">
              <div className="flex items-center">
                <div className="mr-4 h-1 w-8 bg-primary/40 rounded-full" />
                <div className="h-10 w-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-background">
                  {year}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              {grouped[year].map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-start group"
                >
                  {/* Glowing timeline marker */}
                  <div className="absolute -right-12.5 top-6">
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="relative flex flex-col items-center"
                    >
                      {/* Dot */}
                      <motion.div
                        className="size-3 rounded-full -translate-x-1/2"
                        style={{
                          backgroundColor: 'var(--primary)',
                          boxShadow: `0 0 0 2px white, 0 0 0 4px var(--primary)/20`
                        }}
                      />
                    </motion.div>
                  </div>
                  {/* Card right-aligned */}
                  <TimelineCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}