import { ReactNode } from "react";

export interface TimelineItem {
  id: string;
  year: string;
  date: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  tags?: string[];
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}