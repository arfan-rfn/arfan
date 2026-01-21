// app/blog/page.tsx

import Link from 'next/link'
import Image from 'next/image'
import { getRecentBlogPosts } from './recent-blog'

const DEFAULT_OG_IMAGE = 'https://arfanu.com/og-default.png'

export default async function BlogPage() {
	const posts = await getRecentBlogPosts()

	return (
		<section className="mx-auto px-4 py-8" aria-labelledby="blog-heading">
			<h1 id="blog-heading" className="text-2xl font-medium mb-8">Blog</h1>
			<div className="grid gap-6" role="feed" aria-label="Blog posts">
				{posts.map((post) => (
					<article
						key={post.slug}
						itemScope
						itemType="https://schema.org/BlogPosting"
						className="group"
					>
						<Link
							href={`/blog/${post.slug}`}
							itemProp="url"
							className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-md transition-all duration-200"
						>
							{/* Image */}
							<div className="relative w-full sm:w-48 md:w-56 h-36 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
								<Image
									src={post.ogImage || DEFAULT_OG_IMAGE}
									alt={post.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
									sizes="(max-width: 640px) 100vw, 224px"
								/>
							</div>

							{/* Content */}
							<div className="flex flex-col flex-1 min-w-0">
								<h2
									className="text-lg font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors"
									itemProp="headline"
								>
									{post.title}
								</h2>

								{post.description && (
									<p
										className="text-muted-foreground text-sm mt-2 line-clamp-2"
										itemProp="description"
									>
										{post.description}
									</p>
								)}

								<div className="flex items-center gap-2 text-muted-foreground text-xs mt-auto pt-3">
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
										<>
											<span className="text-border">·</span>
											<span itemProp="author" itemScope itemType="https://schema.org/Person">
												<span itemProp="name">{post.author}</span>
											</span>
										</>
									)}
									<span className="text-border">·</span>
									<span aria-label={`${post.readingTime.minutes} minute read`}>
										{post.readingTime.text}
									</span>
								</div>
							</div>
						</Link>
					</article>
				))}
			</div>
		</section>
	)
}
