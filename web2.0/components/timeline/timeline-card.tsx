import React from "react";
import { TimelineItem } from "@/types/timeline";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TimelineCardProps {
  item: TimelineItem;
}

export function TimelineCard({ item }: TimelineCardProps) {
  return (
    <motion.div
      className="relative w-full max-w-2xl"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-1"
          style={{ background: item.color }}
        />
        <CardContent>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-medium text-muted-foreground">
                  {item.date}
                </span>
                <span className="text-primary">
                  {item.icon}
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
}