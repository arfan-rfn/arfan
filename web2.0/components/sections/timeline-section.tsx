"use client";
import { Timeline } from "@/components/timeline/timeline";
import { timelineItems } from "@/data/timeline";
import { motion } from "framer-motion";

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
          <div className="relative text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            >
              🚉 The Scenic Route
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-2 left-1/2 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-center max-w-2xl text-lg leading-tight text-pretty tracking-tight"
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