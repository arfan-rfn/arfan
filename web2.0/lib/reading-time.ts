/**
 * Calculates reading time for MDX content
 * Average reading speed: 200-250 words per minute
 * Using 200 wpm for technical content
 */

const WORDS_PER_MINUTE = 200

/**
 * Strips MDX-specific syntax to get plain text for word counting
 */
function stripMdxSyntax(content: string): string {
  return content
    // Remove import statements
    .replace(/^import\s+.*$/gm, '')
    // Remove export statements (including multiline)
    .replace(/^export\s+(const|let|var|function|default)\s+[\s\S]*?(?=^[#\-\*]|\n\n[A-Z]|$)/gm, '')
    // Remove JSX components (self-closing)
    .replace(/<[A-Z][^/>]*\/>/g, '')
    // Remove JSX components (with children)
    .replace(/<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>/g, '')
    // Remove HTML-like tags with className
    .replace(/<[a-z][^>]*className[^>]*>[\s\S]*?<\/[a-z][^>]*>/g, '')
    // Remove inline code
    .replace(/`[^`]+`/g, '')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove markdown links, keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove markdown images
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    // Remove markdown headers markers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Remove blockquote markers
    .replace(/^>\s+/gm, '')
    // Remove list markers
    .replace(/^[\-\*]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Counts words in a string
 */
function countWords(text: string): number {
  const words = text.split(/\s+/).filter((word) => word.length > 0)
  return words.length
}

export interface ReadingTime {
  /** Estimated reading time in minutes */
  minutes: number
  /** Word count */
  words: number
  /** Formatted reading time string (e.g., "5 min read") */
  text: string
}

/**
 * Calculates reading time for MDX content
 * @param content - Raw MDX content string
 * @returns Reading time object with minutes, words, and formatted text
 */
export function calculateReadingTime(content: string): ReadingTime {
  const plainText = stripMdxSyntax(content)
  const words = countWords(plainText)
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))

  return {
    minutes,
    words,
    text: `${minutes} min read`,
  }
}
