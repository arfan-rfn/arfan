import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import DotPattern from "./dot-pattern";
import { cn } from "@/lib/utils";
import { CodeBlocks } from "./code-blocks";

export function Hero() {
	return (
		<section className="my-4 grid min-h-[55vh] grid-cols-1 items-center gap-6 lg:min-h-[65vh] lg:grid-cols-2">

			<div className="grid items-center gap-6 pb-8 pt-6 md:py-10">
				<div className="flex max-w-[980px] flex-col items-center gap-2 text-center lg:items-start lg:text-start">
					<h1 className="text-4xl font-extrabold leading-snug tracking-tight md:text-5xl">
						Beautifully designed components <br className="hidden sm:inline" />
						built with Radix UI and Tailwind CSS.
					</h1>
					<p className="max-w-[700px] text-lg text-muted-foreground">
						Accessible and customizable components that you can copy and paste
						into your apps. Free. Open Source. And Next.js 13 Ready.
					</p>
				</div>
				<div className="flex justify-center gap-4 lg:justify-start">
					<Link
						href={siteConfig.links.github}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants()}
					>
						Source Code
					</Link>
					{/* <Link
						target="_blank"
						rel="noreferrer"
						href={siteConfig.links.github}
						className={buttonVariants({ variant: "outline" })}
					>
						GitHub
					</Link> */}
				</div>
			</div>
			<div className="">
				{/* <Image src="/assets/hero.svg" alt="hero" width={500} height={500} className="mx-auto" /> */}
				<CodeBlocks code={`npx create-next-app -e https://github.com/arfan-rfn/next-template`} />


			</div>
			<DotPattern
				className={cn(
					"[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] ",
				)}
			/>
		</section>
	);
}