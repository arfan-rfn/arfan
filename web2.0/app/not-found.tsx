import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function NotFound() {
	return (
		<div className="flex h-96 flex-col items-center justify-center gap-6">
			<h2 className="text-xl font-semibold">
				404 | <span className="font-light">Page Not Found</span>

			</h2>
			<div className="flex gap-4">
				<Link href="/" className={cn(buttonVariants())}>
					Go back home
				</Link>
			</div>
		</div>
	)
}