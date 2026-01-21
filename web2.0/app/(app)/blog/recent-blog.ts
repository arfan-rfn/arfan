// app/(app)/blog/getRecentBlogPosts.ts
import fs from 'fs'
import path from 'path'
import { calculateReadingTime } from '@/lib/reading-time'

export interface BlogPost {
	slug: string
	title: string
	date: string | null
	author: string | null
	description: string
	tags?: string[]
	ogImage?: string
	readingTime: {
		minutes: number
		words: number
		text: string
	}
}

export async function getRecentBlogPosts(): Promise<BlogPost[]> {
	const blogDir = path.join(process.cwd(), 'app/(app)/blog')
	const entries = fs.readdirSync(blogDir, { withFileTypes: true })

	const posts = await Promise.all(
		entries
			.filter((entry) => entry.isDirectory())
			.map(async (entry) => {
				const slug = entry.name
				const mod = await import(`./${slug}/page.mdx`)
				const metadata = mod.metadata || {}

				// Read the MDX file for reading time calculation
				const mdxPath = path.join(blogDir, slug, 'page.mdx')
				let readingTime = { minutes: 1, words: 0, text: '1 min read' }
				try {
					const content = fs.readFileSync(mdxPath, 'utf-8')
					readingTime = calculateReadingTime(content)
				} catch {
					// Use default reading time if file can't be read
				}

				// Extract image - prefer local ogImage path over external openGraph URL
				const ogImage = metadata.ogImage || metadata.openGraph?.images?.[0]?.url || undefined

				return {
					slug,
					title: metadata.title || 'Untitled',
					date: metadata.date || null,
					author: metadata.author || null,
					description: metadata.description || '',
					tags: metadata.tags || [],
					ogImage,
					readingTime,
				}
			})
	)

	return posts
		.filter(Boolean)
		.sort((a, b) =>
			new Date(b!.date || 0).getTime() - new Date(a!.date || 0).getTime()
		) as BlogPost[]
}
