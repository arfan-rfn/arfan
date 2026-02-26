// import "./env.mjs"

// /** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { hostname: "*.amazonaws.com" },
      { hostname: "arfanu.com" },
      { hostname: "assets.arfanu.com" },
    ],
  },
  experimental: {
    mdxRs: true,
    viewTransition: true
  },
}

// Note: Custom remark/rehype plugins like remark-gfm and rehype-slug require
// mdxRs: false, but this conflicts with Next.js 16 Turbopack build.
// For now, using mdxRs: true (Rust compiler) without custom plugins.
// GFM features like tables and strikethrough may need manual components.
const withMDX = createMDX({})

export default withMDX(nextConfig)
