// app/blog/page.tsx

import Link from 'next/link'
import { getRecentBlogPosts } from './recent-blog'

export default async function BlogPage() {
	const posts = await getRecentBlogPosts()

	return (
		<div className="mx-auto px-4 py-8">
			<h1 className="text-2xl font-medium mb-6">Blog</h1>
			<div className="space-y-4">
				{posts.map((post) => (
					<Link
						key={post!.slug}
						href={`/blog/${post!.slug}`}
						className="block pl-4 border-l-2 border-transparent hover:border-muted-foreground transition-colors"
					>
						<div className="text-lg">{post!.title}</div>
						{post!.description && (
							<div className="text-gray-600 text-sm mt-1">
								{post!.description}
							</div>
						)}
						<div className="text-gray-500 text-sm mt-1">
							{post!.date && new Date(post!.date).toLocaleDateString()}
							{post!.author && ` · ${post!.author}`}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
