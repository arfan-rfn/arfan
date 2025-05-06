import { ReactNode } from "react";
import { Icons } from "@/components/icons";

export type TimelineItem = {
  id: string;
  date: string; // Human readable date format (e.g. "March 15, 2023")
  endDate?: string; // Optional end date
  title: string;
  description: string;
  icon: keyof typeof Icons;
  color: string;
  tags: string[];
  url?: string; // Optional URL for redirection
};

export type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};