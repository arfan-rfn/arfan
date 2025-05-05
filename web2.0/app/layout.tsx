import "@/styles/globals.css"
import { Metadata, Viewport } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import GoogleAnalytics from "@/components/google-analytics"
import { getSEOTags } from "@/lib/seo"
import { Toaster } from "@/components/ui/sonner"
import QueryProviders from "@/components/query-provider"
import { JsonLd } from "@/components/json-ld"



export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = getSEOTags({
  title: siteConfig.name,
  relativeUrl: "/",
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/manifest.json`,
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryProviders>
              <JsonLd />
              <div className="relative flex min-h-screen flex-col bg-background">
                {children}
              </div>
              <Toaster />
              <TailwindIndicator />
            </QueryProviders>
            <Suspense>
              <GoogleAnalytics />
            </Suspense>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
