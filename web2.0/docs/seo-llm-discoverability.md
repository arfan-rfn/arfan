# SEO & LLM Discoverability Documentation

This document describes the SEO and LLM discoverability features implemented in the blog.

## Features Implemented

### 1. Robots.txt with AI Crawler Policies

**File:** `/next-sitemap.config.js`

The robots.txt now includes policies for AI crawlers:
- GPTBot (OpenAI)
- ClaudeBot (Anthropic)
- PerplexityBot
- Anthropic-AI

These crawlers are explicitly allowed access to:
- Homepage (`/`)
- LLM discoverability files (`/llms.txt`, `/llms-full.txt`)
- All blog posts (`/blog/*`)

### 2. LLM Discoverability Files

#### Static llms.txt (`/public/llms.txt`)
A Markdown-formatted summary of the site containing:
- About the site owner
- Expertise areas
- Key projects
- Blog topics
- Important links
- Social profiles

#### Dynamic llms-full.txt (`/app/llms-full.txt/route.ts`)
A dynamically generated file that aggregates all blog content for LLM consumption:
- Full text content of all blog posts
- Metadata (dates, authors, descriptions)
- Cached for 24 hours

### 3. RSS Feed

**File:** `/app/rss.xml/route.ts`

RSS 2.0 feed with Atom namespace including:
- All blog posts
- Proper publication dates
- Author information
- Feed image

Access at: `/rss.xml`

### 4. Reading Time

**File:** `/lib/reading-time.ts`

Utility that calculates:
- Estimated reading time in minutes
- Word count
- Formatted display string ("X min read")

Reading time is now displayed on:
- Blog listing page
- Can be used in individual blog posts

### 5. Twitter Cards

**File:** `/lib/seo.ts`

Enhanced Twitter card metadata:
- Card type: `summary_large_image`
- Site and creator: `@arfan_rfn`
- Proper image handling

### 6. Open Graph Improvements

**File:** `/lib/seo.ts`

- Fixed fallback image (now uses `/og-image.png` instead of favicon)
- Added `siteName`
- RSS feed linked in metadata alternates

### 7. Semantic HTML

**File:** `/app/(app)/blog/page.tsx`

Blog listing now uses:
- `<section>` with aria labels
- `<article>` with Schema.org microdata (BlogPosting)
- `<time>` elements with dateTime attributes
- Proper heading hierarchy

### 8. Structured Data Utilities

**File:** `/lib/structured-data.ts`

Centralized generators for:
- `BlogPosting` schema (with wordCount and timeRequired)
- `BreadcrumbList` schema
- `Person` schema
- `WebSite` schema
- `SpeakableSpecification` for voice search

### 9. BreadcrumbList JSON-LD

**File:** `/components/json-ld.tsx`

New `BreadcrumbJsonLd` component for navigation structure.

## Dynamic OG Images

OG (Open Graph) images are now **automatically generated** using Next.js's built-in image generation.

### How It Works

- **Site-level**: `/app/opengraph-image.tsx` - Default image for the site
- **Blog listing**: `/app/(app)/blog/opengraph-image.tsx` - Image for /blog
- **Individual posts**: Each post directory has its own `opengraph-image.tsx`

### Adding OG Image to New Blog Posts

When creating a new blog post, add an `opengraph-image.tsx` file to the post directory:

```tsx
// app/(app)/blog/my-new-post/opengraph-image.tsx
import { generateBlogPostOgImage, ogImageSize, ogImageContentType } from '@/lib/og-image'

export const runtime = 'edge'
export const alt = 'My New Post Title'
export const size = ogImageSize
export const contentType = ogImageContentType

export default async function Image() {
  return generateBlogPostOgImage({
    title: 'My New Post Title',
    description: 'A brief description of the post.',
    author: 'Arfan',
    date: '2025-01-20',
  })
}
```

### Customizing OG Images

The `generateBlogPostOgImage` function in `/lib/og-image.tsx` can be customized:
- Modify colors, fonts, and layout
- Add custom branding elements
- Change the design per post type

## Required Manual Steps

### Environment Variable

Ensure `NEXT_PUBLIC_BASE_URL` is set to `https://arfanu.com` in production.

## Verification

1. **robots.txt**: Visit `/robots.txt` to verify AI crawler policies
2. **llms.txt**: Visit `/llms.txt` for the static summary
3. **llms-full.txt**: Visit `/llms-full.txt` for full content
4. **RSS**: Visit `/rss.xml` and validate with an RSS validator
5. **Structured Data**: Use Google Rich Results Test
6. **Open Graph**: Use Facebook Sharing Debugger
7. **Twitter Cards**: Use Twitter Card Validator

## Notes on Remark/Rehype Plugins

The plan originally included remark-gfm and rehype-slug plugins. However, Next.js 16 with Turbopack requires `mdxRs: true` (Rust MDX compiler) which is incompatible with custom JavaScript remark/rehype plugins.

The packages were installed but not enabled in the config. If you switch to webpack builds in the future (remove Turbopack), you can enable them by:

1. Set `mdxRs: false` in `next.config.ts`
2. Add the plugins to the MDX config:

```ts
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})
```

## Files Created

| File | Purpose |
|------|---------|
| `/public/llms.txt` | Static LLM discoverability |
| `/app/llms-full.txt/route.ts` | Dynamic LLM content |
| `/app/rss.xml/route.ts` | RSS feed |
| `/lib/reading-time.ts` | Reading time calculation |
| `/lib/structured-data.ts` | JSON-LD schema generators |
| `/lib/og-image.tsx` | Reusable OG image generator utility |
| `/app/opengraph-image.tsx` | Site-level OG image |
| `/app/(app)/blog/opengraph-image.tsx` | Blog listing OG image |
| `/app/(app)/blog/*/opengraph-image.tsx` | Per-post OG images |

## Files Modified

| File | Changes |
|------|---------|
| `/next-sitemap.config.js` | Production URL fallback, AI crawler policies, RSS reference |
| `/lib/seo.ts` | OG image fix, Twitter cards, RSS link |
| `/next.config.ts` | Comment about remark/rehype plugin compatibility |
| `/mdx-components.tsx` | Anchor link styling |
| `/app/(app)/blog/page.tsx` | Semantic HTML, reading time |
| `/app/(app)/blog/recent-blog.ts` | Reading time integration |
| `/components/json-ld.tsx` | BreadcrumbList support |
