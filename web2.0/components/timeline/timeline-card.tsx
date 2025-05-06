import React from "react";
import { TimelineItem } from "./timeline";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineCardProps {
  item: TimelineItem;
}

export function TimelineCard({ item }: TimelineCardProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center">
        <div className="h-8 w-1 rounded bg-primary/60 mr-4" style={{ background: item.color }} />
        <Card className="flex-1">
          <CardHeader className="p-6 pb-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-primary/80 tracking-wide">
                {item.date}
              </span>
            </div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              {item.title}
              <span style={{ color: item.color }}>{item.icon}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-muted-foreground mb-3 leading-relaxed">
              {item.description}
            </p>
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}