/**
 * Centralized schema generators for JSON-LD structured data
 */

import { env } from '@/env'
import { siteConfig } from '@/config/site'
import type { ReadingTime } from './reading-time'

const baseUrl = env.NEXT_PUBLIC_BASE_URL

export interface BlogPostingSchema {
  title: string
  description: string
  slug: string
  date: string
  dateModified?: string
  author?: string
  image?: string
  tags?: string[]
  readingTime?: ReadingTime
}

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generates BlogPosting schema for blog posts
 */
export function generateBlogPostingSchema(post: BlogPostingSchema) {
  const url = `${baseUrl}/blog/${post.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    image: post.image || `${baseUrl}/og-image.png`,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    ...(post.readingTime && {
      wordCount: post.readingTime.words,
      timeRequired: `PT${post.readingTime.minutes}M`,
    }),
    author: {
      '@type': 'Person',
      name: post.author || siteConfig.name,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/android-chrome-512x512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(post.tags &&
      post.tags.length > 0 && {
        keywords: post.tags.join(', '),
      }),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  }
}

/**
 * Generates BreadcrumbList schema
 */
export function generateBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  }
}

/**
 * Generates Person schema for about pages
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: baseUrl,
    image: `${baseUrl}/assets/arfan.svg`,
    description: siteConfig.description,
    sameAs: siteConfig.socials.map((social) => social.url),
    jobTitle: 'PhD Student in Software Engineering',
    worksFor: {
      '@type': 'Organization',
      name: 'University of Arizona',
      url: 'https://www.arizona.edu',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'University of Arizona',
    },
    knowsAbout: [
      'Software Engineering',
      'Artificial Intelligence',
      'Large Language Models',
      'Microservices',
      'Full-stack Development',
    ],
  }
}

/**
 * Generates WebSite schema with SearchAction
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: baseUrl,
    },
    inLanguage: 'en-US',
  }
}

/**
 * Generates speakable specification for voice search
 */
export function generateSpeakableSpec(cssSelectors: string[] = ['h1', 'h2', '.description']) {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: cssSelectors,
  }
}
