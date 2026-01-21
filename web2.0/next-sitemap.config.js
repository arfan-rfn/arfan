/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arfanu.com'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  outDir: "public",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*", "/test"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/rss.xml`,
    ],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*", "/test"],
      },
      // AI crawlers - allow access for LLM discoverability
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/blog/*"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/blog/*"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/blog/*"],
      },
      {
        userAgent: "Anthropic-AI",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/blog/*"],
      },
    ],
  },
}
