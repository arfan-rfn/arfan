import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-16">

        <div className="mt-6 space-y-12 grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-6">

          <div className="relative col-span-2 row-span-1 rounded-lg sm:row-span-1">
            <div className="relative h-full w-full overflow-hidden rounded-lg sm:h-full">
              <Icons.logo className="w-full" color="red" />
            </div>
          </div>

          <div className="relative col-span-2 row-span-2 rounded-lg text-center lg:text-left">
            <h1 className="text-[11rem]/[9rem] text-slate-700 font-name">
              Arfan Uddin
            </h1>
            <h3 className="text-4xl/tight text-slate-500">
              Software Engineer
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}
