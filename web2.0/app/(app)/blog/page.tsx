// app/blog/page.tsx

import Link from 'next/link'
import { getRecentBlogPosts } from './recent-blog'

export default async function BlogPage() {
	const posts = await getRecentBlogPosts()

	return (
		<section className="mx-auto px-4 py-8" aria-labelledby="blog-heading">
			<h1 id="blog-heading" className="text-2xl font-medium mb-6">Blog</h1>
			<div className="space-y-4" role="feed" aria-label="Blog posts">
				{posts.map((post) => (
					<article
						key={post.slug}
						itemScope
						itemType="https://schema.org/BlogPosting"
						className="block"
					>
						<Link
							href={`/blog/${post.slug}`}
							className="block pl-4 border-l-2 border-transparent hover:border-muted-foreground transition-colors"
							itemProp="url"
						>
							<h2 className="text-lg" itemProp="headline">{post.title}</h2>
							{post.description && (
								<p
									className="text-gray-600 dark:text-gray-400 text-sm mt-1"
									itemProp="description"
								>
									{post.description}
								</p>
							)}
							<div className="text-gray-500 dark:text-gray-500 text-sm mt-1">
								{post.date && (
									<time dateTime={post.date} itemProp="datePublished">
										{new Date(post.date).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										})}
									</time>
								)}
								{post.author && (
									<span itemProp="author" itemScope itemType="https://schema.org/Person">
										{' · '}
										<span itemProp="name">{post.author}</span>
									</span>
								)}
								{' · '}
								<span aria-label={`${post.readingTime.minutes} minute read`}>
									{post.readingTime.text}
								</span>
							</div>
						</Link>
					</article>
				))}
			</div>
		</section>
	)
}
