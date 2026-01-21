# Research-to-Blog Skill Documentation

## Overview

The `/research-to-blog` skill converts academic research papers into SEO-optimized, accessible blog posts for the arfanu.com blog.

**This is a project-specific skill** located in `/.claude/skills/research-to-blog/`.

## Usage

```
/research-to-blog <paper-pdf-or-link>
```

### Supported Inputs

1. **Local PDF files**: `~/Downloads/paper.pdf`
2. **arXiv**: `https://arxiv.org/abs/XXXX.XXXXX`
3. **SSRN**: `https://ssrn.com/abstract=XXXXXXX`
4. **ResearchGate**: `https://www.researchgate.net/publication/...`
5. **bioRxiv/medRxiv**: `https://www.biorxiv.org/content/...`
6. **Direct PDF URLs**: Any URL ending in `.pdf`

### Handling Large PDFs

For large research papers (common in academic publishing), the skill uses incremental extraction:

```bash
# Convert PDF to searchable text
pdftotext -layout ~/Downloads/paper.pdf ~/Downloads/paper.txt
```

Then the skill reads sections incrementally:
- First 200 lines for abstract/intro
- Uses `grep` to locate key sections
- Jumps to specific sections as needed

If automated extraction fails, the skill will ask you to provide key information manually.

## Output

The skill generates:

| File | Location |
|------|----------|
| Blog post | `/web2.0/app/(app)/blog/[post-slug]/page.mdx` |
| Content images | `/web2.0/app/(app)/blog/[post-slug]/*.png` |
| PDF attachment | `/web2.0/app/(app)/blog/[post-slug]/paper.pdf` |
| **OG Image** | `/web2.0/public/blog/[post-slug]/og-image.png` |

## Required Files

| File | Location | Purpose |
|------|----------|---------|
| `og-image.png` | `/public/blog/[slug]/` | Social sharing preview (1200x630px) |
| `paper.pdf` | `/app/(app)/blog/[slug]/` | Downloadable PDF attachment |

### Paper URL (Required)

Every research blog post must include the official paper URL (DOI or publisher link) in the metadata:

```typescript
paperUrl: "https://doi.org/10.1000/xyz123",
pdfAttachment: "/blog/[slug]/paper.pdf",
```

## MDX Format

The generated posts use ES6 exports (not YAML frontmatter) with full OG metadata:

```typescript
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import taxonomyImg from "./taxonomy.png";

export const metadata = {
  title: "Post Title",
  description: "Meta description...",
  date: "YYYY-MM-DD",
  author: "Arfan Uddin",
  tags: ["tag1", "tag2"],
  paperUrl: "https://doi.org/...",
  pdfAttachment: "/blog/[slug]/paper.pdf",
  alternates: {
    canonical: "/blog/[slug]",
  },
  // OpenGraph metadata for social sharing
  openGraph: {
    type: 'article',
    title: "Post Title",
    description: "Meta description...",
    url: 'https://arfanu.com/blog/[slug]',
    siteName: 'Arfan Uddin',
    images: [{
      url: 'https://arfanu.com/blog/[slug]/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Descriptive alt text for OG image',
    }],
    publishedTime: 'YYYY-MM-DD',
    authors: ['Arfan Uddin'],
  },
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: "Post Title",
    description: "Meta description...",
    images: ['https://arfanu.com/blog/[slug]/og-image.png'],
  },
};

export const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  // ... structured data
};
```

## Key Features

- **OG Images**: Proper `openGraph` and `twitter` metadata for social sharing previews
- **Structured Data**: Full JSON-LD for SEO
- **Paper URL**: Always includes link to original research
- **PDF Attachment**: Downloadable paper included with post
- **Accessible**: Proper alt text for all images
- **StyledLink**: Consistent link styling with hover animations

## Skill Files

| File | Purpose |
|------|---------|
| `/.claude/skills/research-to-blog/SKILL.md` | Main skill definition |
| `/.claude/skills/research-to-blog/references/blog-structure.md` | Section templates |
| `/.claude/skills/research-to-blog/references/figure-guidelines.md` | Figure conventions |

## Blog Structure

Generated posts follow this structure:

1. **Hook** - Why this research matters
2. **Research Overview** - Scope with metrics table
3. **Key Findings** - 3-5 main findings
4. **Practical Implications** - For researchers/practitioners
5. **Citation** - BibTeX block
6. **About** - Author credentials

## Figure Requirements

- Use lowercase, hyphenated filenames
- Recommended size: 1200-2000px wide
- All content images stored in post directory
- OG image (1200x630px) stored in `/public/blog/[slug]/`

## OG Image Requirements

**CRITICAL**: OG image must be placed in `/public/blog/[slug]/og-image.png`

| Property | Requirement |
|----------|-------------|
| Dimensions | 1200x630 pixels (1.91:1 ratio) |
| Format | PNG or JPG |
| Location | `/public/blog/[slug]/og-image.png` |
| URL in metadata | `https://arfanu.com/blog/[slug]/og-image.png` |
