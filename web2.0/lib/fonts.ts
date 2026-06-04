import { Fraunces, Newsreader, Birthstone, Special_Elite } from "next/font/google"

// Display + titles. Warm old-style serif with optical sizing — carries the
// vintage / travel-journal voice. Variable weight axis.
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

// Body / long-form reading. Serif drawn for on-screen text, same old-style
// DNA as Fraunces so heading + body read as one family.
export const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
})

// Handwritten logotype for the "Arfan" name.
export const birthstone = Birthstone({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-name",
})

// Typewriter face for micro-labels (timeline date stubs, eyebrows).
export const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-typewriter",
  display: "swap",
})
