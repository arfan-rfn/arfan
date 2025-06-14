export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Arfan Uddin",
  description:
    "This is my personal site — I’m Arfan, a software researcher and founder. Follow along as I work on my PhD and build things.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/arfan-rfn/next-template",
  },
  // Icon must be exist in the component/icons.tsx file
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/arfan-rfn",
      icon: "GitHub",
    },
    {
      name: "X",
      url: "https://x.com/arfan_rfn",
      icon: "TwitterX",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rfn/",
      icon: "LinkedIn",
    },
    {
      name: "ResearchGate",
      url: "https://www.researchgate.net/profile/Md-Arfan-Uddin",
      icon: "ResearchGate",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=0123456789&hl=en&user=fwzzYBsAAAAJ",
      icon: "GoogleScholar",
    },
  ],
  footer: {
    links: {
      "Build by Me": [
        {
          name: "Connecto",
          url: "https://getconnecto.app",
        },
        {
          name: "Nextjs Template",
          url: "https://nextjs.arfanu.com",
        }
      ],
      Resources: [
        {
          name: "About Me",
          url: "/blog/about-me",
        },
        {
          name: "Terms and Conditions",
          url: "/terms-conditions",
        },
        {
          name: "Privacy Policy",
          url: "/privacy-policy",
        }
      ],
      About: [
        {
          name: "Contact",
          url: "/#contact",
        },
      ],
    },
  }
}
