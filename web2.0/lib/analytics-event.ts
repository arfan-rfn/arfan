type WindowWithDataLayer = Window & {
	dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export function pageView(url: string) {
	if (typeof window.dataLayer !== "undefined") {
		window.dataLayer.push({
			event: "pageview",
			page: url,
		})
	}
}