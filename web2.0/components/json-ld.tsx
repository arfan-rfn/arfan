import { env } from "@/env";
import { siteConfig } from "@/config/site";
import { toAbsoluteUrl } from "@/lib/utils";

// Define the base JSON-LD schema type
export type JsonLdProps = {
	type?: string;
	name?: string;
	description?: string;
	url?: string;
	image?: string;
	datePublished?: string;
	dateModified?: string;
	author?: {
		"@type": string;
		name: string;
		url?: string;
	};
	publisher?: {
		"@type": string;
		name: string;
		logo?: {
			"@type": string;
			url: string;
		};
	};
	// Allow for additional custom properties
	[key: string]: any;
};

// Default values for the JSON-LD component
const defaultJsonLd: JsonLdProps[] = [
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: siteConfig.name,
		description: siteConfig.description,
		url: env.NEXT_PUBLIC_BASE_URL,
		publisher: {
			"@type": "Organization",
			name: siteConfig.name,
			logo: {
				"@type": "ImageObject",
				url: `${env.NEXT_PUBLIC_BASE_URL}/logo.png`,
			},
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		name: siteConfig.name,
		url: env.NEXT_PUBLIC_BASE_URL,
		logo: `${env.NEXT_PUBLIC_BASE_URL}/logo.png`,
		sameAs: siteConfig.socials.map((social) => social.url),
	}
];

/**
 * Processes a JSON-LD object to convert relative URLs to absolute URLs
 * @param data - The JSON-LD data to process
 * @returns The processed JSON-LD data with absolute URLs
 */
function processJsonLdData(data: JsonLdProps): JsonLdProps {
	const processed = { ...data };

	// Convert URL to absolute if it exists
	if (processed.url) {
		processed.url = toAbsoluteUrl(processed.url);
	}

	// Convert image to absolute if it exists
	if (processed.image) {
		processed.image = toAbsoluteUrl(processed.image);
	}

	// Process author URL if it exists
	if (processed.author?.url) {
		processed.author.url = toAbsoluteUrl(processed.author.url);
	}

	// Process publisher logo URL if it exists
	if (processed.publisher?.logo?.url) {
		processed.publisher.logo.url = toAbsoluteUrl(processed.publisher.logo.url);
	}

	// Process any other URL properties that might be in the data
	// This is a simple approach that might need to be extended for more complex schemas
	Object.keys(processed).forEach(key => {
		if (
			typeof processed[key] === "string" &&
			(key.endsWith("Url") || key === "url" || key === "image" || key === "logo")
		) {
			processed[key] = toAbsoluteUrl(processed[key]);
		}
	});

	return processed;
}

/**
 * Creates a JSON-LD object based on the specified type
 * @param type - The schema type
 * @param data - The data to use for the JSON-LD object
 * @returns A JSON-LD object
 */
function createJsonLdByType(type: string, data: JsonLdProps): JsonLdProps {
	const baseData = {
		"@context": "https://schema.org",
		"@type": type,
		...data,
	};

	// Add type-specific defaults
	switch (type) {
		case "WebSite":
			return {
				...baseData,
				name: data.name || siteConfig.name,
				description: data.description || siteConfig.description,
				url: data.url || env.NEXT_PUBLIC_BASE_URL,
				publisher: data.publisher || defaultJsonLd[0].publisher,
			};

		case "WebPage":
			return {
				...baseData,
				name: data.name || siteConfig.name,
				description: data.description || siteConfig.description,
				url: data.url || env.NEXT_PUBLIC_BASE_URL,
				image: data.image || `${env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
				datePublished: data.datePublished || new Date().toISOString(),
				dateModified: data.dateModified || new Date().toISOString(),
				publisher: data.publisher || defaultJsonLd[0].publisher,
			};

		case "Article":
			return {
				...baseData,
				headline: data.name || siteConfig.name,
				description: data.description || siteConfig.description,
				image: data.image || `${env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
				datePublished: data.datePublished || new Date().toISOString(),
				dateModified: data.dateModified || new Date().toISOString(),
				author: data.author || {
					"@type": "Person",
					name: siteConfig.name,
				},
				publisher: data.publisher || defaultJsonLd[0].publisher,
			};

		case "Organization":
			return {
				...baseData,
				name: data.name || siteConfig.name,
				url: data.url || env.NEXT_PUBLIC_BASE_URL,
				logo: data.logo || `${env.NEXT_PUBLIC_BASE_URL}/logo.png`,
				sameAs: siteConfig.socials.map((social) => social.url),
			};

		default:
			return baseData;
	}
}

/**
 * A unified JSON-LD component that can be used for any schema type
 * @param props - Component props
 * @returns A script tag with the JSON-LD data
 */
export function JsonLd({ data, type }: { data?: JsonLdProps | JsonLdProps[], type?: string }) {
	// If no data is provided, use the default array
	if (!data) {
		return (
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultJsonLd) }}
			/>
		);
	}

	// Handle both single object and array of objects
	const jsonLdData = Array.isArray(data)
		? data.map(item => {
			// If type is provided, use it for all items, otherwise use the type in the item
			const itemType = item.type || type || "WebSite";
			return processJsonLdData(createJsonLdByType(itemType, item));
		})
		: processJsonLdData(createJsonLdByType(data.type || type || "WebSite", data));

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
		/>
	);
}
