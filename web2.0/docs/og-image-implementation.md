# OG Image Implementation

## Default OG Image

- **File**: `/public/og-default.png`
- **Dimensions**: 1200x630 pixels
- **Used for**: All pages that don't specify a custom OG image

## Custom OG Images for Blog Posts

Blog posts can specify a custom OG image by adding the `ogImage` field to their metadata:

```typescript
export const metadata = {
  title: "My Post Title",
  description: "Description...",
  date: "2025-01-20",
  author: "Arfan",
  ogImage: "/blog-images/my-post-og.png", // Optional
};
```

If no `ogImage` is specified, `/public/og-default.png` is used.
