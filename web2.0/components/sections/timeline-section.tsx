"use client";
import { Timeline } from "@/components/timeline/timeline";
import { timelineItems } from "@/data/timeline";
import { motion } from "framer-motion";
import { Footprints } from "lucide-react";

export function TimelineSection() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Footprints className="size-8 text-primary -rotate-12" />
              <h2 className="font-serif text-4xl font-bold tracking-tight text-[var(--primary-border)]">
                The Scenic Route
              </h2>
            </motion.div>

            {/* Perforated divider — same dashed motif as the cards */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 flex items-center justify-center gap-2"
            >
              <span className="h-px w-16 border-t border-dashed border-primary/50" />
              <span className="size-1.5 rotate-45 bg-primary/60" />
              <span className="h-px w-16 border-t border-dashed border-primary/50" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-center max-w-2xl text-lg leading-snug text-pretty italic"
          >
            From platform to platform, this is the story of where I paused, where I pushed forward, and where I found purpose.
          </motion.p>

          <div className="w-full max-w-5xl">
            <Timeline items={timelineItems} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}