// import "./env.mjs"

// /** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{
      hostname: "*.amazonaws.com"
    }],
  },
  experimental: {
    mdxRs: true,
    viewTransition: true
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
