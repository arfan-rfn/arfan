"use client"

import { env } from "@/env"
import { pageView } from "@/lib/analytics-event"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

export default function GoogleAnalytics() {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const GTM_ID = env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
	const AHREFS_ID = process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_ID;
	useEffect(() => {
		if (pathname) {
			pageView(pathname)
		}
	}, [pathname, searchParams])

	let googleAnalytics = null;
	let ahrefsAnalytics = null

	if (process.env.NODE_ENV === "production" && GTM_ID !== 'test') {
		googleAnalytics = (
			<>
				<noscript>
					<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					/>
				</noscript>
				<Script
					id="gtm-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${GTM_ID}');
  `,
					}}
				/>
			</>
		);
	}

	if (process.env.NODE_ENV === "production" && AHREFS_ID !== 'test') {
		ahrefsAnalytics = (
			<>
				<Script src="https://analytics.ahrefs.com/analytics.js" data-key={AHREFS_ID} async></Script>
			</>
		);
	}

	return (
		<>
			{ahrefsAnalytics}
			{googleAnalytics}
		</>
	)
}
