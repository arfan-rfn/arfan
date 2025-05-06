"use client";
import { Icons } from "@/components/icons";
import { Timeline } from "@/components/timeline/timeline";
import { motion } from "framer-motion";

type TimelineEventType = "achievement" | "blog" | "work" | "project" | "event";

interface TimelineItem {
  id: string;
  date: Date;
  type: TimelineEventType;
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: string[];
  link?: string;
  // Additional properties based on type
  company?: string; // for work experience
  role?: string; // for work experience
  technologies?: string[]; // for projects
  readTime?: string; // for blog posts
}

// Helper function to get icon based on event type
const getIconForType = (type: TimelineEventType) => {
  switch (type) {
    case "achievement":
      return <Icons.Check className="h-4 w-4" />;
    case "blog":
      return <Icons.Copy className="h-4 w-4" />;
    case "work":
      return <Icons.System className="h-4 w-4" />;
    case "project":
      return <Icons.GitHub className="h-4 w-4" />;
    case "event":
      return <Icons.Circle className="h-4 w-4" />;
    default:
      return <Icons.Circle className="h-4 w-4" />;
  }
};

const getColorForType = (type: TimelineEventType) => {
  switch (type) {
    case "achievement": return "#22c55e"; // green
    case "blog": return "#3b82f6"; // blue
    case "work": return "#f59e42"; // orange
    case "project": return "#a855f7"; // purple
    case "event": return "#f43f5e"; // red
    default: return "#64748b"; // slate
  }
};

// Sample timeline data
const timelineItems: TimelineItem[] = [
  {
    id: "1",
    date: new Date("2024-01-01"),
    type: "work",
    title: "Founder at Connecto",
    description: "Building a modern platform for connecting professionals and creating meaningful relationships.",
    company: "Connecto",
    role: "Founder",
    tags: ["Startup", "Leadership", "Product Development"],
  },
  {
    id: "2",
    date: new Date("2023-09-01"),
    type: "achievement",
    title: "PhD in Software Engineering",
    description: "Researching modern software development practices and their impact on team productivity.",
    tags: ["Research", "Software Engineering", "Education"],
  },
  {
    id: "3",
    date: new Date("2023-06-15"),
    type: "blog",
    title: "Modern Web Development Practices",
    description: "Exploring the latest trends and best practices in web development.",
    readTime: "5 min read",
    tags: ["Web Development", "Best Practices"],
  },
  {
    id: "4",
    date: new Date("2022-03-01"),
    type: "work",
    title: "Senior Software Engineer",
    description: "Led the development of multiple high-impact features and mentored junior developers.",
    company: "TechCorp",
    role: "Senior Software Engineer",
    tags: ["Leadership", "Mentorship", "Full Stack Development"],
  },
  {
    id: "5",
    date: new Date("2022-01-10"),
    type: "project",
    title: "AI-Powered Analytics Platform",
    description: "Developed a machine learning platform for business analytics.",
    technologies: ["Python", "TensorFlow", "React", "TypeScript"],
    tags: ["AI", "Machine Learning", "Full Stack"],
  },
  {
    id: "6",
    date: new Date("2020-06-01"),
    type: "work",
    title: "Software Engineer",
    description: "Developed and maintained critical features for enterprise applications.",
    company: "Enterprise Solutions",
    role: "Software Engineer",
    tags: ["Web Development", "API Design", "Testing"],
  },
];

// Sort timeline items by date (newest first)
const sortedTimelineItems = [...timelineItems].sort((a, b) => b.date.getTime() - a.date.getTime());

// Flatten the items for the timeline component
const flattenedTimelineItems = sortedTimelineItems.map((item) => ({
  ...item,
  year: item.date.getFullYear().toString(),
  month: item.date.toLocaleString('default', { month: 'long' }),
  date: item.date.toLocaleDateString('default', { month: 'long', day: 'numeric' }),
  icon: getIconForType(item.type),
  color: getColorForType(item.type),
}));

export function TimelineSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0.5px,transparent_0.5px)] bg-[size:20px_20px] opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-4">
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
              className="absolute -bottom-2 left-1/2 h-1 w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-center max-w-2xl text-lg leading-relaxed"
          >
            From platform to platform, this is the story of where I paused, where I pushed forward, and where I found purpose.
          </motion.p>

          <div className="w-full max-w-5xl">
            <Timeline items={flattenedTimelineItems} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}