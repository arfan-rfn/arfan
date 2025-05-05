// app/(app)/blog/getRecentBlogPosts.ts
import fs from 'fs'
import path from 'path'

export async function getRecentBlogPosts() {
	const blogDir = path.join(process.cwd(), 'app/(app)/blog')
	const entries = fs.readdirSync(blogDir, { withFileTypes: true })

	const posts = await Promise.all(
		entries
			.filter((entry) => entry.isDirectory())
			.map(async (entry) => {
				const slug = entry.name
				const mod = await import(`./${slug}/page.mdx`)
				const metadata = mod.metadata || {}

				return {
					slug,
					title: metadata.title || 'Untitled',
					date: metadata.date || null,
					author: metadata.author || null,
					description: metadata.description || '',
				}
			})
	)

	return posts
		.filter(Boolean)
		.sort((a, b) =>
			new Date(b!.date || 0).getTime() - new Date(a!.date || 0).getTime()
		)
}
