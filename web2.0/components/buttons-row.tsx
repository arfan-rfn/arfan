"use client"

import { useCallback, useEffect, useRef, useState, ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

type Props = {
	children: ReactNode
	className: string // must specify the `w-` property
}

export function ButtonsRow({ children, className }: Props) {
	const contentRowRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [showNavButton, setShowNavButton] = useState({
		right: false,
		left: false,
	})


	useEffect(() => {
		const handleResize = () => {
			if (!containerRef.current || !contentRowRef.current) return
			const { clientWidth: containerWidth } = containerRef.current
			const { clientWidth: contentWidth } = contentRowRef.current
			setShowNavButton((prevState) => ({
				...prevState,
				right: containerWidth < contentWidth,
			}))
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	const handleNavigate = useCallback(
		(direction: "left" | "right") => {
			if (!containerRef || !containerRef.current) return
			const { scrollLeft, clientWidth } = containerRef.current
			const scrollTo =
				direction === "right"
					? scrollLeft + clientWidth - 50
					: scrollLeft - clientWidth + 50

			containerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
		},
		[containerRef]
	)

	const handleScroll = useCallback(() => {
		if (!containerRef || !containerRef.current) return
		const { scrollLeft, clientWidth, scrollWidth } = containerRef.current
		setShowNavButton((prevState) => {
			const newState = { ...prevState }
			if (scrollLeft + clientWidth >= scrollWidth) {
				newState.right = false
			}
			if (scrollLeft > 0 && scrollLeft + clientWidth < scrollWidth) {
				newState.right = true
				newState.left = true
			}
			if (scrollLeft === 0) {
				newState.left = false
			}
			return newState
		})
	}, [setShowNavButton])

	return (
		<div className={cn("relative w-full", className)}>

			<Button
				className={cn(
					"absolute left-0 top-1 z-10 hidden px-2",
					showNavButton.left ? "block" : "hidden",
				)}
				onClick={() => handleNavigate("left")}
				variant="chip"
				size="round"
			>
				<Icons.ChevronLeft className="m-auto size-5" />
				<div className="sr-only">Scroll left</div>
			</Button>
			<div
				ref={containerRef}
				onScroll={handleScroll}
				className={cn(
					"no-scrollbar w-[calc(100vw-2rem)] snap-x overflow-x-scroll",
					className
				)}
			>
				<div
					ref={contentRowRef}
					className={cn("my-1 flex w-max items-center justify-center space-x-2 md:px-0")}
				>
					{children}
				</div>
			</div>

			<Button
				className={cn(
					"absolute right-0 top-1 z-10 hidden px-2",
					showNavButton.right ? "block" : "hidden",
				)}
				onClick={() => handleNavigate("right")}
				variant="chip"
				size="round"
			>
				<Icons.ChevronRight className="m-auto size-5" />
				<div className="sr-only">Scroll right</div>
			</Button>
		</div>

	)
}
