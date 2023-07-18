import '@/styles/globals.css'
import { Inter, Birthstone as FontHeading } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-sans",
})

const birthstone = FontHeading({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-heading",
})

interface ReactRootLayout {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Software Engineer',
    'Web Developer',
    'Full Stack Developer'
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    }
  ],
  creator: siteConfig.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    siteName: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@arfan_rfn',
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    appleIcon: '/apple-touch-icon.png',
    shortcut: "/favicon-16x16.png",
  },
  manifest: siteConfig.manifest,
}

export default function RootLayout({ children }: ReactRootLayout) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          "min-h-full font-sans antialiased bg-yellow-400",
          inter.variable,
          birthstone.variable,
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
