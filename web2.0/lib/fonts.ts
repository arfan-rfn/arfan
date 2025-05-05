import { JetBrains_Mono as FontMono, Inter as FontSans, Nunito, PT_Sans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});