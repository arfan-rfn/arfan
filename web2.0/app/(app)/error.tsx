'use client' // Error components must be Client Components

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className="flex h-96 flex-col items-center justify-center gap-6">
			<h2 className="text-xl font-semibold">
				Something went wrong!
			</h2>
			<div className="flex gap-4">
				<Button
					onClick={
						() => reset()
					}
				>
					Try again
				</Button>
				<Link href="/" className={cn(buttonVariants({variant: 'outline'}))}>
					Go back home
				</Link>
			</div>
		</div>
	)
}