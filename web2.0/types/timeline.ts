import { ReactNode } from "react";
import { Icons } from "@/components/icons";

export type TimelineItem = {
  id: string;
  year: string;
  date: string;
  title: string;
  description: string;
  icon: keyof typeof Icons;
  color: string;
  tags: string[];
};

export type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};