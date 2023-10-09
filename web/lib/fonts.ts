import { JetBrains_Mono as FontMono, Birthstone, Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const birthstone = Birthstone({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-name",
})
