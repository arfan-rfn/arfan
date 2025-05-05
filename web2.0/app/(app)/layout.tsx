import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

interface AppLayoutProps {
	children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<>
			<SiteHeader />
			<div className="container flex-1">{children}</div>
			<Footer />
		</>
	)
}