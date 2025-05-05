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

	return {
		metadataBase: fullUrl ? new URL(fullUrl) : null,
		alternates: {
			canonical: fullUrl,
		},
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: fullUrl,
			title: title,
			description: description,
			images: [
				{
					url: imageUrl || `${baseUrl}/favicon-16x16.png`,
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
			title: title,
			description: description,
		},
		appleWebApp: {
			title: title,
		},
		...seoTags,
	};
}