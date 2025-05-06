import React from "react";
import { TimelineItem } from "./timeline";
import { cn } from "@/lib/utils";

interface TimelineCardProps {
  item: TimelineItem;
}

export function TimelineCard({ item }: TimelineCardProps) {
  return (
    <div className="relative w-full max-w-2xl mr-2">
      <div className="flex items-center justify-end">
        <div className="flex-1 bg-white/70 dark:bg-background/80 backdrop-blur-lg border border-primary/10 rounded-2xl shadow-xl p-8 transition-all hover:scale-[1.02] hover:shadow-primary/10">
          <div className="flex items-center gap-3 mb-2 justify-end">
            <span className="text-xs font-semibold text-primary/80 tracking-wide">
              {item.date}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2 justify-end">
            {item.title}
            <span style={{ color: item.color }}>{item.icon}</span>
          </h3>
          <p className="text-muted-foreground mb-3 leading-relaxed text-right">
            {item.description}
          </p>
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-2 justify-end">
              {item.tags.map((tag) => (
                <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="h-8 w-1 rounded bg-primary/60 ml-4" style={{ background: item.color }} />
      </div>
    </div>
  );
}