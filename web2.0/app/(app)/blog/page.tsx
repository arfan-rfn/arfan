// app/blog/page.tsx

import Link from 'next/link'
import Image from 'next/image'
import { getRecentBlogPosts } from './recent-blog'
import { TornPaper } from '@/components/ui/torn-paper'
import { tiltFromString, washiTapeFor } from '@/lib/paper'

const DEFAULT_OG_IMAGE = 'https://arfanu.com/og-default.png'

export default async function BlogPage() {
	const posts = await getRecentBlogPosts()

	return (
		<section className="mx-auto max-w-4xl px-2 py-6 sm:py-10" aria-labelledby="blog-heading">
			<header className="mb-10 text-center">
				<p className="font-typewriter text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
					Field Notes
				</p>
				<h1 id="blog-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[var(--primary-border)]">
					The Blog
				</h1>
				<div className="mt-4 flex items-center justify-center gap-2" aria-hidden>
					<span className="h-px w-16 border-t border-dashed border-primary/50" />
					<span className="size-1.5 rotate-45 bg-primary/60" />
					<span className="h-px w-16 border-t border-dashed border-primary/50" />
				</div>
			</header>

			<div className="grid gap-12" role="feed" aria-label="Blog posts">
				{posts.map((post) => (
					<article
						key={post.slug}
						itemScope
						itemType="https://schema.org/BlogPosting"
					>
						<Link href={`/blog/${post.slug}`} itemProp="url" className="block">
							<TornPaper
								interactive
								tilt={tiltFromString(post.slug)}
								tapeColor={washiTapeFor(post.slug)}
								contentClassName="p-5 sm:p-6"
							>
								<div className="flex flex-col sm:flex-row gap-5">
									{/* Taped photo */}
									<div className="relative w-full sm:w-64 h-44 sm:h-40 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
										<Image
											src={post.ogImage || DEFAULT_OG_IMAGE}
											alt={post.title}
											fill
											className="object-cover transition-transform duration-300 group-hover:scale-105"
											sizes="(max-width: 640px) 100vw, 224px"
										/>
									</div>

									{/* Content */}
									<div className="flex flex-col flex-1 min-w-0">
										<h2
											className="font-serif text-xl sm:text-2xl font-bold leading-snug line-clamp-2 text-foreground transition-colors group-hover:text-primary"
											itemProp="headline"
										>
											{post.title}
										</h2>

										{post.description && (
											<p
												className="text-muted-foreground text-sm sm:text-base mt-2 line-clamp-2 leading-snug"
												itemProp="description"
											>
												{post.description}
											</p>
										)}

										<div className="font-typewriter flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-auto pt-3">
											{post.date && (
												<time dateTime={post.date} itemProp="datePublished">
													{new Date(post.date).toLocaleDateString('en-US', {
														year: 'numeric',
														month: 'short',
														day: 'numeric',
													})}
												</time>
											)}
											<span className="size-1 rotate-45 bg-primary/50" aria-hidden />
											<span aria-label={`${post.readingTime.minutes} minute read`}>
												{post.readingTime.text}
											</span>
										</div>
									</div>
								</div>
							</TornPaper>
						</Link>
					</article>
				))}
			</div>
		</section>
	)
}
