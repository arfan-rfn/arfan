# Blog SEO & LLM Discoverability Implementation Plan

## Status: Completed

## Overview
Implementation plan for improving SEO and LLM discoverability of the blog at arfanu.com.

## Implementation Checklist

### Phase 1: Fix Critical SEO Issues
- [x] Fix robots.txt with production URLs and AI crawler policies
- [x] Fix Open Graph image fallback in lib/seo.ts
- [x] Fix Twitter cards with summary_large_image type

### Phase 2: Add LLM Discoverability
- [x] Create static /public/llms.txt
- [x] Create dynamic /app/llms-full.txt/route.ts

### Phase 3: Add RSS Feed
- [x] Create /app/rss.xml/route.ts

### Phase 4: Add Reading Time
- [x] Create /lib/reading-time.ts utility
- [x] Update blog components to display reading time

### Phase 5: Semantic HTML
- [x] Update blog layout with semantic HTML elements

### Phase 6: Remark/Rehype Plugins
- [x] Packages installed (remark-gfm, rehype-slug, rehype-autolink-headings)
- [x] Update mdx-components.tsx for heading anchors
- Note: Plugins not enabled due to Next.js 16 Turbopack/mdxRs compatibility

### Phase 7: Enhanced JSON-LD
- [x] Create /lib/structured-data.ts
- [x] Add BreadcrumbList support to JSON-LD component

## Manual Steps Required
- [ ] Create /public/og-image.png (1200x630px)
- [ ] Set NEXT_PUBLIC_BASE_URL=https://arfanu.com in production

## Files to Create
| File | Purpose |
|------|---------|
| `/public/llms.txt` | Static LLM discoverability file |
| `/app/llms-full.txt/route.ts` | Dynamic LLM content aggregation |
| `/app/rss.xml/route.ts` | RSS feed route handler |
| `/lib/reading-time.ts` | Reading time calculation utility |
| `/lib/structured-data.ts` | JSON-LD schema generators |

## Files to Modify
| File | Changes |
|------|---------|
| `/next-sitemap.config.js` | Production URLs, AI crawler policies |
| `/lib/seo.ts` | OG image fix, Twitter cards |
| `/next.config.ts` | Add remark/rehype plugins |
| `/mdx-components.tsx` | Heading anchors support |
| `/app/(app)/blog/layout.tsx` | Semantic HTML |
| `/app/(app)/blog/page.tsx` | Semantic HTML, reading time display |
| `/app/(app)/blog/recent-blog.ts` | Add reading time to post data |
| `/components/json-ld.tsx` | BreadcrumbList support |
