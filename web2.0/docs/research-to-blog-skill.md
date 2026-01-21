# Research-to-Blog Skill Documentation

## Overview

The `/research-to-blog` skill converts academic research papers into SEO-optimized, accessible blog posts for the arfanu.com blog.

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
| Images | Same directory as `page.mdx` |

## MDX Format

The generated posts use ES6 exports (not YAML frontmatter):

```typescript
import { MaskedImage } from "@/components/ui/masked-image";
import { JsonLd } from "@/components/json-ld";
import featuredImg from "./featured-image.png";

export const metadata = {
  title: "Post Title",
  description: "Meta description...",
  date: "YYYY-MM-DD",
  author: "Arfan",
  tags: ["tag1", "tag2"],
  ogImage: "/blog/[slug]/featured-image.png",
  alternates: {
    canonical: "/blog/[slug]",
  },
};

export const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  // ... structured data
};
```

## Key Features

- **OG Images**: Uses `ogImage` metadata field for social sharing
- **Structured Data**: Full JSON-LD for SEO
- **Accessible**: Proper alt text for all images
- **StyledLink**: Consistent link styling with hover animations
- **MaskedImage**: Decorative image masking with variants

## Skill Files

| File | Purpose |
|------|---------|
| `~/.claude/skills/research-to-blog/SKILL.md` | Main skill definition |
| `~/.claude/skills/research-to-blog/references/blog-structure.md` | Section templates |
| `~/.claude/skills/research-to-blog/references/figure-guidelines.md` | Figure conventions |

## Blog Structure

Generated posts follow this structure:

1. **Hook** - Why this research matters
2. **Research Overview** - Scope with metrics table
3. **Key Findings** - 3-5 main findings
4. **Practical Implications** - For researchers/practitioners
5. **Citation** - BibTeX block
6. **About** - Author credentials

## Required Files

| File | Purpose | Notes |
|------|---------|-------|
| `featured-image.png` | OG image for social sharing | 1200x630px recommended |
| `paper.pdf` | Downloadable PDF attachment | Copy of the research paper |

### Paper URL (Required)

Every research blog post must include the official paper URL (DOI or publisher link) in the metadata:
```typescript
paperUrl: "https://doi.org/10.1000/xyz123",
pdfAttachment: "/blog/[slug]/paper.pdf",
```

## Figure Requirements

- Use lowercase, hyphenated filenames
- Recommended size: 1200-2000px wide
- All images stored in post directory
