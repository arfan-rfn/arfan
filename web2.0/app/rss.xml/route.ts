import { getRecentBlogPosts } from '@/app/(app)/blog/recent-blog'

export const dynamic = 'force-static'

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arfanu.com'
  const posts = await getRecentBlogPosts()

  const rssItems = posts
    .map((post) => {
      const pubDate = post.date
        ? new Date(post.date).toUTCString()
        : new Date().toUTCString()

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description || '')}</description>
      <pubDate>${pubDate}</pubDate>
      <author>arfan@arfanu.com (${escapeXml(post.author || 'Arfan')})</author>
    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Arfan Uddin's Blog</title>
    <link>${baseUrl}</link>
    <description>Software Engineering PhD candidate sharing insights on AI, LLMs, microservices, and building products.</description>
    <language>en-us</language>
    <managingEditor>arfan@arfanu.com (Arfan Uddin)</managingEditor>
    <webMaster>arfan@arfanu.com (Arfan Uddin)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/android-chrome-512x512.png</url>
      <title>Arfan Uddin's Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
