import { TimelineItem } from "@/types/timeline";

export const timelineItems: TimelineItem[] = [
  {
    id: "phd-arizona",
    date: "August 2024",
    title: "PhD in Software Engineering",
    description: "Started PhD at the University of Arizona with a Graduate Assistantship.",
    icon: "Education",
    color: "blue",
    tags: ["PhD", "Software Engineering", "University of Arizona"],
    url: "https://www.arizona.edu"
  },
  {
    id: "kmap-developer",
    date: "May 2022",
    endDate: "June 2024",
    title: "Web Application Developer II, University of Arizona Research, Innovation & Impact",
    description: "Led migration of KMap to NextJS, improving SEO and CTR by over 6x. Managed the web development team and worked on UI/UX improvements.",
    icon: "Work",
    color: "green",
    tags: ["NextJS", "Team Lead", "SEO", "UI/UX", "KMap"],
    url: "https://kmap.arizona.edu"
  },
  {
    id: "icpc-developer",
    date: "August 2024",
    endDate: "current",
    title: "Full-Stack Developer, ICPC",
    description: "Built and maintained systems for 50k+ students worldwide during ICPC programming contests.",
    icon: "Work",
    color: "purple",
    tags: ["ICPC", "Full-Stack", "High Scale", "Global System"],
    url: "https://icpc.global"
  },
  {
    id: "hamilton-engineer",
    date: "May 2020",
    title: "Full Stack Software Engineer, Hamilton Innovations",
    description: "Designed frontend UIs with Flutter/React, built APIs in NodeJS, and architected databases in PostgreSQL/MySQL.",
    icon: "Work",
    color: "orange",
    tags: ["Flutter", "NodeJS", "PostgreSQL", "MySQL", "Full Stack"],
  },
  {
    id: "hexagon-intern",
    date: "January 2020",
    endDate: "December 2020",
    title: "Software Development Intern, Hexagon Mining",
    description: "Rewrote the serializer for MPSO in C#, improving performance by 2x and reducing memory usage.",
    icon: "Work",
    color: "red",
    tags: ["Internship", "C#", "Performance", "Optimization"],
  },
  {
    id: "ta-leader",
    date: "January 2019",
    endDate: "May 2020",
    title: "Section Leader, Department of Computer Science, UArizona",
    description: "Led TA sections for CSc 210 and 252, evaluated assignments, and held office hours.",
    icon: "Leadership",
    color: "teal",
    tags: ["TA", "Mentorship", "Teaching", "University of Arizona"],
  },
  {
    id: "hereim-project",
    date: "July 2022",
    title: "Here I'm – Personal Project",
    description: "A real-time profile sharing app for meetups, built using Flutter and NodeJS, hosted on Google Cloud and MongoDB Atlas.",
    icon: "Code",
    color: "cyan",
    tags: ["Flutter", "NodeJS", "MongoDB", "Google Cloud", "Mobile"],
    url: "https://hereim.xyz"
  },
  {
    id: "lead-hackaz",
    date: "January 2018",
    endDate: "current",
    title: "Lead Organizer, Hack Arizona",
    description: "Ran workshops on Android and Flutter, helped find sponsors and organize beginner-friendly sessions.",
    icon: "Leadership",
    color: "yellow",
    tags: ["Hackathon", "Leadership", "Workshops", "Android"],
  },
  {
    id: "publication-jss2025",
    date: "March 2025",
    title: "Journal Publication in JSS",
    description: "Co-authored 'Multivocal study on microservice dependencies' published in the Journal of Systems and Software.",
    icon: "Research",
    color: "indigo",
    tags: ["Publication", "Microservices", "Journal", "JSS"],
    url: "https://doi.org/10.1016/j.jss.2025.112334"
  },
  {
    id: "publication-closer2024",
    date: "April 2024",
    title: "Conference Publication at CLOSER 2024",
    description: "Co-authored a paper on dependency management and maintainability in microservices.",
    icon: "Research",
    color: "pink",
    tags: ["Conference", "Microservices", "CLOSER", "Publication"],
  }
];
