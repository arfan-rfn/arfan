import { getRecentBlogPosts } from '@/app/(app)/blog/recent-blog'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arfanu.com'
  const posts = await getRecentBlogPosts()

  const header = `# Arfan Uddin - Full Site Content
# Generated: ${new Date().toISOString()}
# URL: ${baseUrl}

This document contains the full content of arfanu.com for AI/LLM consumption.
For a summary, see: ${baseUrl}/llms.txt

---

## Site Owner

Name: Md Arfan Uddin
Role: PhD Student in Software Engineering, University of Arizona
Focus: AI/LLM applications in Microservices
Founder: Connecto (https://getconnecto.app)

## Expertise

- Software Engineering Research
- Large Language Models (LLMs)
- Microservices & Distributed Systems
- Full-stack Development (Next.js, Spring Boot, Kafka, Redis)
- Mobile Development (Android, Flutter)
- DevSecOps

---

## Blog Posts

`

  const postContents: string[] = []

  for (const post of posts) {
    const mdxPath = path.join(
      process.cwd(),
      'app/(app)/blog',
      post.slug,
      'page.mdx'
    )

    let content = ''
    try {
      const fileContent = fs.readFileSync(mdxPath, 'utf-8')
      // Strip imports, exports, and JSX components - keep markdown content
      content = fileContent
        .replace(/^import\s+.*$/gm, '')
        .replace(/^export\s+(const|let|var|function|default)\s+[\s\S]*?(?=^#|\n\n[A-Z]|$)/gm, '')
        .replace(/<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>/g, '')
        .replace(/<[A-Z][^/>]*\/>/g, '')
        .replace(/<[a-z][^>]*className[^>]*>[\s\S]*?<\/[a-z][^>]*>/g, '')
        .trim()
    } catch {
      content = post.description || ''
    }

    const postText = `
### ${post.title}

**URL:** ${baseUrl}/blog/${post.slug}
**Date:** ${post.date || 'Unknown'}
**Author:** ${post.author || 'Arfan'}
**Description:** ${post.description || ''}

${content}

---
`
    postContents.push(postText)
  }

  const footer = `
## Contact & Links

- Homepage: ${baseUrl}
- Blog: ${baseUrl}/blog
- LinkedIn: https://www.linkedin.com/in/rfn/
- GitHub: https://github.com/arfan-rfn
- X/Twitter: https://x.com/arfan_rfn
- Connecto: https://getconnecto.app

---

End of document.
`

  const fullContent = header + postContents.join('\n') + footer

  return new Response(fullContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
