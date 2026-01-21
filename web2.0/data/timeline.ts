import { TimelineItem } from "@/types/timeline";

const research: TimelineItem[] = [
  {
    id: "publication-jss-slr-2026",
    date: "2026-01-01",
    title: "Journal Publication in JSS - Microservice Logs Analysis Employing AI: A Systematic Literature Review",
    description: "First-authored systematic literature review on AI techniques for microservice log analysis accepted for publication in the Journal of Systems and Software. Analyzed 82 studies from 2,208 papers.",
    icon: "Research",
    color: "indigo",
    tags: ["Publication", "Microservices", "Journal", "JSS", "AI", "SLR"],
    url: "/blog/ai-microservice-log-analysis-slr"
  },
  {
    id: "pc-ESOCC2025",
    date: "2024-11-24",
    title: "PC Member, ESOCC2025",
    description: "Served as a Program Committee member for the 11th European Conference on Service-Oriented and Cloud Computing (ESOCC 2025), reviewing research papers on cloud computing and service-oriented architectures.",
    icon: "Research",
    color: "blue",
    tags: ["ESOCC2025", "PC Member", "Reviewer"],
    url: "https://conf.researchr.org/home/esocc-2025"
  },
  {
    id: "pc-ISD2025",
    date: "2025-06-09",
    title: "PC Member, ISD2025",
    description: "Serving as a reviewer for the 33rd International Conference on Information Systems Development (ISD 2025), evaluating research papers in software engineering and information systems.",
    icon: "Research",
    color: "blue",
    tags: ["ISD2025", "PC Member", "Reviewer"],
    url: "https://isd2025.fon.bg.ac.rs/"
  },

  {
    id: "publication-jss2025",
    date: "2025-03-01",
    title: "Journal Publication in JSS",
    description: "Co-authored 'Multivocal study on microservice dependencies' published in the Journal of Systems and Software.",
    icon: "Research",
    color: "indigo",
    tags: ["Publication", "Microservices", "Journal", "JSS"],
    url: "https://doi.org/10.1016/j.jss.2025.112334"
  },
  {
    id: "publication-closer2024",
    date: "2024-04-01",
    title: "Conference Publication at CLOSER 2024",
    description: "Co-authored a paper on dependency management and maintainability in microservices.",
    icon: "Research",
    color: "pink",
    tags: ["Conference", "Microservices", "CLOSER", "Publication"],
  },
  {
    id: "publication-cisose2025",
    date: "2025-06-01",
    title: "IEEE CISOSE 2025 SRC Track Publication",
    description: "Authored a paper on Graph-Based LLM Prompting for Scalable Microservice API Testing",
    icon: "Research",
    color: "pink",
    tags: ["Conference", "Microservices", "CISOSE", "Publication", "SRC Track"],
    url: "https://conf.researchr.org/home/cisose-2025"
  }
].map(item => ({
  ...item,
  icon: "Research",
  color: "green",
  tags: ["Research", ...item.tags],
}))

const workExperiences: TimelineItem[] = [
  {
    id: "kmap-developer",
    date: "2022-05-01",
    endDate: "2024-06-01",
    title: "Web Application Developer II, University of Arizona Research, Innovation & Impact",
    description: "Led migration of KMap to NextJS, improving SEO and CTR by over 6x. Managed the web development team and worked on UI/UX improvements.",
    icon: "Work",
    color: "green",
    tags: ["NextJS", "Team Lead", "SEO", "UI/UX", "KMap"],
    url: "https://kmap.arizona.edu"
  },

  {
    id: "icpc-developer",
    date: "2024-08-01",
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
    date: "2020-01-20",
    endDate: "2022-05-01",
    title: "Full Stack Software Engineer, Hamilton Innovations",
    description: "Designed frontend UIs with Flutter/React, built APIs in NodeJS, and architected databases in PostgreSQL/MySQL.",
    icon: "Work",
    color: "orange",
    tags: ["Flutter", "NodeJS", "PostgreSQL", "MySQL", "Full Stack"],
  },
  {
    id: "hexagon-intern",
    date: "2019-05-01",
    endDate: "2019-12-01",
    title: "Software Development Intern, Hexagon Mining",
    description: "Rewrote the serializer for MPSO in C#, improving performance by 2x and reducing memory usage.",
    icon: "Work",
    color: "red",
    tags: ["Internship", "C#", "Performance", "Optimization"],
  },
].map(item => ({
  ...item,
  icon: "Work",
  color: "purple",
  tags: ["Work", ...item.tags],
}))

const education: TimelineItem[] = [
  {
    id: "phd-arizona",
    date: "2024-08-01",
    title: "PhD in Software Engineering",
    description: "Started PhD at the University of Arizona with a Graduate Assistantship.",
    icon: "Education",
    color: "blue",
    tags: ["PhD", "Software Engineering", "University of Arizona"],
    url: "https://www.arizona.edu"
  },
  {
    id: "mba-arizona",
    date: "2023-08-01",
    endDate: "2024-05-01",
    title: "Master of Business Administration",
    description: "Completed a year of MBA studies at the Eller College of Management at the University of Arizona before withdrawing.",
    icon: "Education",
    color: "blue",
    tags: ["MBA", "Business Administration", "University of Arizona"],
    url: "https://www.arizona.edu"
  },
  {
    id: "bachelor-arizona",
    date: "2016-01-01",
    endDate: "2020-05-01",
    title: "Bachelor of Science in Computer Science",
    description: "Graduated from the University of Arizona with a Bachelor of Science in Computer Science.",
    icon: "Education",
    color: "blue",
    tags: ["Bachelor", "Computer Science", "University of Arizona"],
    url: "https://www.arizona.edu"
  }
].map(item => ({
  ...item,
  icon: "Education",
  color: "teal",
  tags: ["Education", ...item.tags],
}))

export const timelineItems: TimelineItem[] = [
  ...research,
  ...workExperiences,
  ...education,
  {
    id: "ta-leader",
    date: "2019-01-01",
    endDate: "2020-05-01",
    title: "Section Leader, Department of Computer Science, UArizona",
    description: "Led TA sections for CSc 210 and 252, evaluated assignments, and held office hours.",
    icon: "Leadership",
    color: "teal",
    tags: ["TA", "Mentorship", "Teaching", "University of Arizona"],
  },
  {
    id: "cs-mentor",
    date: "2018-01-01",
    endDate: "2019-05-01",
    title: "Mentor, Department of Computer Science, UArizona",
    description: "Led Raspberry Pi workshops and mentored freshmen on academic/career success strategies.",
    icon: "Leadership",
    color: "purple",
    tags: ["Mentorship", "Teaching", "Raspberry Pi", "University of Arizona"],
  },
  {
    id: "lead-hackaz",
    date: "2018-01-01",
    endDate: "current",
    title: "Lead Organizer, Hack Arizona",
    description: "Ran workshops on Android and Flutter, helped find sponsors and organize beginner-friendly sessions.",
    icon: "Leadership",
    color: "yellow",
    tags: ["Hackathon", "Leadership", "Workshops", "Android"],
  },
  {
    id: "hackaz-2025",
    date: "2025-03-22",
    endDate: "2025-03-24",
    title: "HackAZ 2025: Leading as Advisor & Organizer",
    description: "Organized a successful hackathon with over 200 participants, featuring workshops on Flutter, Android, and more.",
    icon: "Leadership",
    color: "yellow",
    tags: ["Hackathon", "HackAZ", "Workshops", "Leadership", "Organizer"],
    url: "/blog/hackaz-2025"
  }
];
