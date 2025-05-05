import { Icons } from "@/components/icons"

type suggestionItem = {
	title: string
	href?: string
	label?: string
	items?: suggestionItem[]
	disabled?: boolean
	external?: boolean
	icon?: keyof typeof Icons
}

export const searchSuggestion: suggestionItem[] = [
	{
		title: "Links",
		items: [
			{
				title: "Home",
				href: "/",
			},
		],
	},
	{
		title: "Resources",
		items: [
			{
				title: "Privacy Policy",
				href: "/privacy-policy",
				items: [],
			},
			{
				title: "Terms And Conditions",
				href: "/terms-conditions",
				items: [],
			},
		],
	},
];