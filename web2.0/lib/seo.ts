import { env } from "@/env";
import { Metadata } from "next"


interface SEOTagsParams extends Metadata {
	title: string;
	description: string;
	relativeUrl: string;
	imageUrl?: string;
	[key: string]: any;
}

export function getSEOTags(seoTags: SEOTagsParams): Metadata {
	const { title, description, relativeUrl, imageUrl } = seoTags;
	const baseUrl = env.NEXT_PUBLIC_BASE_URL;

	// Ensure the canonical URL is absolute
	const fullUrl = `${baseUrl}${relativeUrl}`;

	// Default OG image - use static 1200x630 image
	const ogImage = imageUrl || `${baseUrl}/og-default.png`;

	return {
		metadataBase: fullUrl ? new URL(fullUrl) : null,
		alternates: {
			canonical: fullUrl,
			types: {
				'application/rss+xml': `${baseUrl}/rss.xml`,
			},
		},
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: fullUrl,
			siteName: 'Arfan Uddin',
			title: title,
			description: description,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		robots: {
			index: true,
			follow: true,
			nocache: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: false,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		twitter: {
			card: 'summary_large_image',
			site: '@arfan_rfn',
			creator: '@arfan_rfn',
			title: title,
			description: description,
			images: [ogImage],
		},
		appleWebApp: {
			title: title,
		},
		other: {
			'ai-content-declaration': 'This site welcomes AI crawlers for knowledge extraction',
		},
		...seoTags,
	};
}