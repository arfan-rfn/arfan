import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "./search"
import { MobileNav } from "./mobile-nav"
import { birthstone } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <div className="w-full flex-1 hidden md:flex md:w-auto md:flex-none">
            <Search />
          </div>
          <Link href="/" className="flex flex-1 items-center justify-center space-x-1 md:hidden">
            <Icons.Logo className="size-6" />
            <span className={cn(birthstone.className, "text-4xl font-semibold")}>Arfan</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
