---
name: research-to-blog
description: Convert academic research papers into engaging, SEO-optimized blog posts. Use when asked to (1) create a blog post from a research paper/preprint, (2) summarize research for general audiences, (3) promote published papers via blog content, or (4) convert academic writing to accessible MDX.
metadata:
  author: arfan
  version: "2.1.0"
  argument-hint: <paper-pdf-or-link>
---

# Research to Blog Post Converter

Convert academic research papers into engaging, SEO-optimized blog posts while preserving technical accuracy.

## Site Configuration Reference

**IMPORTANT**: Always reference `/web2.0/config/site.ts` for author contact information and social links. Never hardcode contact details.

```typescript
// Read site config for:
// - siteConfig.name           → Author name
// - siteConfig.socials        → GitHub, Twitter/X, LinkedIn, ResearchGate, Google Scholar
// - siteConfig.description    → Site description
```

Available social links from config:
- GitHub: `siteConfig.socials[0].url`
- X/Twitter: `siteConfig.socials[1].url`
- LinkedIn: `siteConfig.socials[2].url`
- ResearchGate: `siteConfig.socials[3].url`
- Google Scholar: `siteConfig.socials[4].url`

## Workflow Summary

```
┌─────────────────────────────────────────────────────────────────┐
│  1. ANALYZE    →  Read paper, extract key elements              │
│                                                                 │
│  2. REQUEST    →  Prompt user for ALL figures/tables needed     │
│                   ⚠️  STOP HERE - Wait for user to provide      │
│                                                                 │
│  3. WRITE      →  Generate blog post with provided figures      │
│                                                                 │
│  4. FINALIZE   →  Confirm all images are in place               │
└─────────────────────────────────────────────────────────────────┘
```

**CRITICAL**: Do NOT proceed to writing (Phase 3) until user provides the requested figures.

## Input Handling

This skill accepts two input types:

### 1. PDF Files
- Local file paths (e.g., `~/Downloads/paper.pdf`)

**⚠️ LARGE PDF WARNING**: Never attempt to read entire academic PDFs directly with the Read tool. Research papers often exceed context limits and will fail or truncate.

**Recommended approach for PDFs:**

1. **Convert PDF to text first** (preserves layout):
   ```bash
   pdftotext -layout ~/Downloads/paper.pdf ~/Downloads/paper.txt
   ```

2. **Read incrementally**:
   - First 200 lines for abstract/intro: `Read ~/Downloads/paper.txt` with `limit: 200`
   - Use `grep` to find specific sections: `grep -n "Key Findings\|Results\|Conclusion" ~/Downloads/paper.txt`
   - Jump to relevant sections using `offset` parameter

3. **Section extraction strategy**:
   ```bash
   # Find section headings
   grep -n "^[0-9]\. \|^Abstract\|^Introduction\|^Method\|^Result\|^Discussion\|^Conclusion" ~/Downloads/paper.txt

   # Extract specific page range (if you know page numbers)
   pdftotext -f 1 -l 5 -layout ~/Downloads/paper.pdf ~/Downloads/intro.txt
   ```

**Fallback option**: If extraction is difficult (scanned PDFs, complex layouts), ask the user:
```
The PDF appears difficult to extract programmatically. Could you provide:
1. The paper title and authors
2. Abstract (copy-paste)
3. 3-5 key findings/contributions
4. Any figures you want included

I'll create the blog post from this information.
```

### 2. Preprint/Paper Links
Supported preprint servers:
- **arXiv**: `https://arxiv.org/abs/XXXX.XXXXX` or `https://arxiv.org/pdf/XXXX.XXXXX`
- **SSRN**: `https://ssrn.com/abstract=XXXXXXX` or `https://papers.ssrn.com/...`
- **ResearchGate**: `https://www.researchgate.net/publication/...`
- **bioRxiv/medRxiv**: `https://www.biorxiv.org/content/...`
- **OSF Preprints**: `https://osf.io/preprints/...`
- **Direct PDF URLs**: Any URL ending in `.pdf`

For URLs, use WebFetch to retrieve the paper content.

## Workflow

### Phase 1: Paper Analysis

**For large PDFs (recommended workflow):**

1. **Convert to searchable text**:
   ```bash
   pdftotext -layout ~/Downloads/paper.pdf ~/Downloads/paper.txt
   ```

2. **Extract abstract and introduction** (first 200-300 lines):
   ```bash
   # Read beginning of paper
   Read ~/Downloads/paper.txt with limit: 250
   ```

3. **Locate key sections**:
   ```bash
   grep -n "Abstract\|Introduction\|Method\|Result\|Finding\|Conclusion\|Discussion" ~/Downloads/paper.txt
   ```

4. **Jump to specific sections** using `offset` parameter based on grep results

5. **For complex tables/figures**, ask user to copy-paste or screenshot them

**For URLs/small documents:**
1. **Obtain the paper** - Fetch from URL using WebFetch

**Extract key elements**:
   - Title, authors, publication venue
   - Abstract and core contributions
   - Methodology overview
   - Key findings (quantitative results, tables, statistics)
   - Figures and their purposes
   - Conclusions and implications

### Phase 2: Figure & Data Request (REQUIRED)

**IMPORTANT**: Before writing any content, you MUST analyze the paper and prompt the user for all important visual assets. Do not proceed to Phase 3 until the user provides the requested figures.

After analyzing the paper, present the user with a comprehensive figure request:

```
## Figures & Data Needed for Your Blog Post

I've analyzed your paper and identified the following visuals that will make your blog post more engaging and informative.

### Required: Paper URL, PDF & OG Image

| Item | Description | Location |
|------|-------------|----------|
| **Paper URL** | DOI or official publisher link | In metadata `paperUrl` field |
| **PDF File** | Copy of the research paper | `/web2.0/app/(app)/blog/[slug]/paper.pdf` |
| **OG Image** | Social sharing preview (1200x630px) | `/web2.0/public/blog/[slug]/og-image.png` |

### Required Figures (for blog content)

| # | Paper Reference | What It Shows | Save As | Location |
|---|-----------------|---------------|---------|----------|
| 1 | [Figure X / Page Y] | [Description] | `[name].png` | `/web2.0/app/(app)/blog/[slug]/` |
| 2 | [Figure X / Page Y] | [Description] | `[name].png` | `/web2.0/app/(app)/blog/[slug]/` |

### Key Results & Benchmarks

| # | Paper Reference | Data/Results | Save As | Blog Section |
|---|-----------------|--------------|---------|--------------|
| 1 | [Table X / Page Y] | [Performance metrics / benchmarks] | `results-[metric].png` | Key Finding #N |
| 2 | [Figure X / Page Y] | [Comparison chart / benchmark] | `benchmark-comparison.png` | Key Finding #N |

### Data Visualizations (if applicable)

| # | Paper Reference | Visualization Type | Save As | Purpose |
|---|-----------------|-------------------|---------|---------|
| 1 | [Figure X] | [Sankey/Heatmap/Distribution] | `[type]-diagram.png` | Shows [relationship/pattern] |

### Tables to Export as Images (if complex)

| # | Paper Reference | Table Content | Save As | Note |
|---|-----------------|---------------|---------|------|
| 1 | [Table X / Page Y] | [Description] | `table-[name].png` | Complex table better as image |

---

**Instructions:**
1. **Provide the paper URL** (DOI preferred, or publisher link)
2. **Copy the PDF** to `/web2.0/app/(app)/blog/[post-slug]/paper.pdf`
3. **Create OG image** (1200x630px) and save to `/web2.0/public/blog/[post-slug]/og-image.png`
4. Export each figure from your paper (screenshot or PDF export)
5. Save figures with the filenames listed above
6. Place content figures in: `/web2.0/app/(app)/blog/[post-slug]/`
7. Recommended image size: 1200-2000px wide, PNG format

**File locations summary:**
- OG Image: `/web2.0/public/blog/[slug]/og-image.png` (for social preview)
- PDF: `/web2.0/app/(app)/blog/[slug]/paper.pdf` (for download)
- Figures: `/web2.0/app/(app)/blog/[slug]/` (for blog content)

**Accepted formats**: PNG (preferred), JPG, SVG, PDF (I'll convert PDFs to PNG)

**Please provide these files and the paper URL, then I'll proceed with writing your blog post.**
```

#### What to Identify from the Paper

Scan the paper for these visual elements:

| Element Type | Look For | Priority |
|--------------|----------|----------|
| **Architecture/System Design** | Framework diagrams, system overview | High |
| **Main Results** | Performance tables, benchmark comparisons | High |
| **Methodology** | Workflow, pipeline, process diagrams | High |
| **Key Data Viz** | Charts showing main findings | High |
| **Taxonomy/Classification** | Hierarchies, categorizations (for surveys) | Medium |
| **Ablation Studies** | Tables showing component contributions | Medium |
| **Comparison Charts** | Bar charts, line graphs comparing methods | Medium |
| **Statistical Results** | Significance tests, distributions | Low |
| **Supplementary Figures** | Additional supporting visuals | Low |

#### Figure Selection Rules

**MUST include:**
- The single most impactful results figure/table
- Architecture or methodology diagram (if exists)
- Any figure the paper highlights as a main contribution

**SHOULD include:**
- Benchmark comparison tables (as images if complex)
- Data visualizations that tell a story
- Figures that would be hard to describe in text alone

**SKIP:**
- Dense mathematical equations
- Raw data plots without clear takeaways
- Figures requiring deep domain expertise
- Low-quality or hard-to-read figures
- Redundant figures showing similar data

See `references/figure-guidelines.md` for detailed naming conventions and optimization guidelines.

### Phase 3: Content Structure

Structure the blog post following `references/blog-structure.md`. Key sections:

1. **Hook** - Why this research matters (1-2 paragraphs)
2. **Overview** - Research scope with key metrics table
3. **Key Findings** - 3-5 main findings with supporting data
4. **Practical Implications** - For researchers and/or practitioners
5. **Future Directions** - What's next
6. **Citation** - BibTeX block
7. **About** - Author credentials and contact

### Phase 4: Writing Guidelines

**Tone transformation**:
- Academic -> Accessible (but not dumbed down)
- Passive voice -> Active voice
- Jargon -> Plain language with definitions
- Hedged claims -> Confident statements (where appropriate)

**Preserve accuracy**:
- Keep exact statistics and percentages
- Maintain nuance in limitations
- Link to original paper and data

**SEO optimization**:
- Target 5-10 relevant keywords
- Write descriptive alt text for all figures
- Include internal/external links
- Aim for 1,500-3,000 words

### Phase 5: Output Generation

**Output location**: `/web2.0/app/(app)/blog/[post-slug]/page.mdx`

**Images**:
- Content figures: Same directory as `page.mdx`, import as ES6 modules
- OG Image: `/web2.0/public/blog/[post-slug]/og-image.png`

**CRITICAL - Before writing MDX:**
1. **Verify all image files exist** before adding imports. Missing imports will cause build errors.
2. **Read site config** at `/web2.0/config/site.ts` for author info and social links.
3. Only import images that the user has confirmed are in place.

Generate MDX file using this exact format (ES6 exports, NOT YAML frontmatter):

```typescript
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
// ONLY import images that exist - verify with user first!
// import taxonomyImg from "./taxonomy.png";
// import workflowImg from "./workflow.png";
// Additional image imports - ADD ONLY AFTER USER CONFIRMS FILES EXIST

export const metadata = {
  title: "[Engaging title - not the paper title]",
  description: "[150-160 char meta description with keywords]",
  date: "[YYYY-MM-DD]",
  author: "Arfan Uddin",
  tags: ["keyword-1", "keyword-2", "keyword-3"],
  // Research paper metadata (REQUIRED)
  paperUrl: "[DOI or publisher URL - e.g., https://doi.org/10.1000/xyz123]",
  pdfAttachment: "/blog/[slug]/paper.pdf",
  alternates: {
    canonical: "/blog/[slug]",
  },
  // OpenGraph metadata (REQUIRED for social sharing)
  openGraph: {
    type: 'article',
    title: "[Same as title above]",
    description: "[Same as description above]",
    url: 'https://arfanu.com/blog/[slug]',
    siteName: 'Arfan Uddin',
    images: [{
      url: 'https://arfanu.com/blog/[slug]/og-image.png',
      width: 1200,
      height: 630,
      alt: '[Descriptive alt text for OG image]',
    }],
    publishedTime: '[YYYY-MM-DD]',
    authors: ['Arfan Uddin'],
  },
  // Twitter Card metadata (REQUIRED for Twitter preview)
  twitter: {
    card: 'summary_large_image',
    title: "[Same as title above]",
    description: "[Same as description above]",
    images: ['https://arfanu.com/blog/[slug]/og-image.png'],
  },
};

export const StyledLink = ({ href, children }) => {
  const isExternal = href.startsWith('http');
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "relative inline-block text-primary",
        "after:absolute after:bottom-0 after:left-0 after:w-full",
        "after:h-[2px] after:bg-primary after:origin-bottom-right",
        "after:scale-x-0 hover:after:scale-x-100 after:transition-transform",
        "after:duration-300 after:ease-out"
      )}
    >
      {children}
    </Link>
  );
};

export const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": metadata.title,
  "description": metadata.description,
  "image": [metadata.openGraph.images[0].url],
  "url": `https://arfanu.com${metadata.alternates.canonical}`,
  "datePublished": metadata.date,
  "dateModified": metadata.date,
  "author": {
    "@type": "Person",
    "name": metadata.author,
    "url": "https://arfanu.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Arfan's Blog",
    "logo": {
      "@type": "ImageObject",
      "url": "https://arfanu.com/assets/arfan.svg"
    }
  },
  "keywords": metadata.tags.join(", "),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://arfanu.com${metadata.alternates.canonical}`
  },
  "isAccessibleForFree": "True",
  "inLanguage": "en-US",
  "articleSection": "Research"
};

<JsonLd data={jsonLdData} />

# [Post Title]

[Opening hook - why this research matters]

📄 **Paper**: <StyledLink href={metadata.paperUrl}>[Journal/Conference Name]</StyledLink>
📥 **PDF**: <StyledLink href={metadata.pdfAttachment} download>Download Paper</StyledLink>
📦 **Code/Data**: <StyledLink href="[URL]">[Link text]</StyledLink> {/* Optional - include if available */}

## Research Overview

| Metric | Value |
|--------|-------|
| [Scope metric 1] | [Value] |
| [Scope metric 2] | [Value] |

<Image
  src={workflowImg}
  alt="[Descriptive alt text]"
  width={800}
  height={450}
  className="w-[70%] rounded-lg mx-auto my-6"
/>

## Key Finding #1: [Title]

[Content...]

## Key Finding #2: [Title]

[Content...]

## Practical Implications

### For Researchers
1. **[Action]**: [Explanation]

### For Practitioners
1. **[Action]**: [Explanation]

## Citation

If you find this work useful, please cite:

\`\`\`bibtex
@article{author2024title,
  title={Full Paper Title},
  author={Last, First and Last, First},
  journal={Journal/Conference Name},
  year={2024}
}
\`\`\`

## About

This research was conducted at **[Institution]**, with support from **[Funding source]**.

{/* Use contact link from site config - see /web2.0/config/site.ts */}
Feel free to <StyledLink href="/#contact">reach out</StyledLink>!
```

**Note on contact info**: Always use `/#contact` for the contact link (from site config). Never hardcode email addresses.

## File Locations Summary

| File Type | Location | Purpose |
|-----------|----------|---------|
| Blog post MDX | `/web2.0/app/(app)/blog/[slug]/page.mdx` | Main blog content |
| Content figures | `/web2.0/app/(app)/blog/[slug]/*.png` | Imported in MDX |
| PDF attachment | `/web2.0/app/(app)/blog/[slug]/paper.pdf` | Download link |
| **OG Image** | `/web2.0/public/blog/[slug]/og-image.png` | Social sharing preview |

**IMPORTANT**: The OG image MUST be in the `/public` directory for proper social media previews. Next.js serves static files from `/public` at the root URL.

## Pre-Write Verification

**CRITICAL**: Before writing the MDX file, you MUST:

1. **Verify images exist** - Use `ls` to check that all images are in place:
   ```bash
   ls -la /Users/rfnmac/projects/arfan/web2.0/app/\(app\)/blog/[slug]/
   ls -la /Users/rfnmac/projects/arfan/web2.0/public/blog/[slug]/
   ```

2. **Only import existing images** - Do NOT add import statements for images that don't exist. This causes build errors:
   ```
   Module not found: Can't resolve './architecture.png'
   ```

3. **Read site config** for author info:
   ```bash
   # Check site config for contact info
   cat /Users/rfnmac/projects/arfan/web2.0/config/site.ts
   ```

## Files Checklist

Before finalizing, confirm with user:

```
## Files Checklist

Please confirm you have these files ready:

### Required Files
| File | Location | Status |
|------|----------|--------|
| `og-image.png` (1200x630px) | `/web2.0/public/blog/[slug]/` | [ ] |
| `paper.pdf` | `/web2.0/app/(app)/blog/[slug]/` | [ ] |

### Content Figures
| File | Location | Status |
|------|----------|--------|
| `[figure-1].png` | `/web2.0/app/(app)/blog/[slug]/` | [ ] |
| `[figure-2].png` | `/web2.0/app/(app)/blog/[slug]/` | [ ] |

### Required Information
| Item | Value | Status |
|------|-------|--------|
| Paper URL (DOI preferred) | `https://doi.org/...` | [ ] |
| Code/Data repository URL | (if available) | [ ] |

**Image usage in MDX:**

// Content figures (imported from local directory)
import taxonomyImg from "./taxonomy.png";
import workflowImg from "./workflow.png";

<Image
  src={workflowImg}
  alt="Descriptive alt text"
  width={800}
  height={450}
  className="w-[70%] rounded-lg mx-auto my-6"
/>

// OG image is referenced via URL in metadata.openGraph.images
```

## Quick Reference

| Paper Element | Blog Equivalent |
|---------------|-----------------|
| Abstract | Hook + Overview |
| Related Work | Remove (or brief mention) |
| Methodology | Simplified explanation |
| Results | Key Findings with visuals |
| Discussion | Practical Implications |
| Conclusion | Future Directions |
| References | Link to paper + BibTeX |

## Common Figure Types

| Figure Type | When to Include | Naming Convention |
|-------------|-----------------|-------------------|
| Architecture/Framework | Always if available | `architecture.png` |
| Results chart/graph | Top 1-2 most impactful | `results-[metric].png` |
| Workflow/Process | If methodology is key | `workflow.png`, `pipeline.png` |
| Comparison table | If converted to image | `comparison.png` |
| Taxonomy/Hierarchy | For survey/SLR papers | `taxonomy.png` |
| Sankey/Flow diagram | For relationship data | `sankey-diagram.png` |

## PDF Figure Conversion

If user provides PDF figures, convert to PNG:

```bash
pdftoppm -png -r 300 input.pdf output-name
mv output-name-1.png output-name.png
```

## OG Image Requirements

**CRITICAL**: OG image must be placed in `/web2.0/public/blog/[slug]/og-image.png`

| Property | Requirement |
|----------|-------------|
| Dimensions | 1200x630 pixels (1.91:1 ratio) |
| Format | PNG or JPG |
| Location | `/web2.0/public/blog/[slug]/og-image.png` |
| URL in metadata | `https://arfanu.com/blog/[slug]/og-image.png` |

The OG image URL is used in:
- `metadata.openGraph.images[0].url`
- `metadata.twitter.images[0]`

## Handling Large Documents

### Quick Start for Large PDFs

```bash
# Step 1: Convert PDF to text
pdftotext -layout ~/Downloads/paper.pdf ~/Downloads/paper.txt

# Step 2: Read abstract/intro (first 200 lines)
# Use Read tool with limit: 200

# Step 3: Find key sections
grep -n "^[0-9]\.\|Abstract\|Introduction\|Method\|Result\|Conclusion" ~/Downloads/paper.txt
```

### Troubleshooting

| Issue | Solution |
|-------|----------|
| `pdftotext` not found | Install: `brew install poppler` (macOS) or `apt install poppler-utils` (Linux) |
| Garbled text output | PDF may be scanned; ask user for copy-paste of key sections |
| Tables not readable | Request user to screenshot tables as images |
| PDF too large for conversion | Extract specific pages: `pdftotext -f 1 -l 10 paper.pdf output.txt` |
| Complex multi-column layout | Try without `-layout` flag, or ask user to provide text |

### Alternative: User-Provided Summary

If automated extraction fails, prompt the user:

```
I'm having difficulty extracting text from this PDF. To create your blog post, please provide:

**Required:**
1. Paper title and authors
2. Abstract (copy-paste from paper)
3. 3-5 key findings with any relevant numbers/statistics

**Optional (will improve the post):**
4. Research methodology summary (1-2 sentences)
5. Main figure descriptions you want included
6. Any specific quotes or claims you want highlighted

I'll create the blog post from this information and you can provide figures separately.
```

### PDF Page Extraction

For very long papers, extract only relevant pages:

```bash
# Extract pages 1-5 (intro/abstract)
pdftotext -f 1 -l 5 -layout paper.pdf intro.txt

# Extract pages 10-15 (results)
pdftotext -f 10 -l 15 -layout paper.pdf results.txt

# Extract last 3 pages (conclusion)
pdftotext -l 3 -layout paper.pdf conclusion.txt  # -l alone gets last N pages
```
