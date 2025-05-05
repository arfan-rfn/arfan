import { Nunito, PT_Sans, Birthstone } from "next/font/google"

export const birthstone = Birthstone({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-name",
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