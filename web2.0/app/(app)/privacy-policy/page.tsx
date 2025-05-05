import { siteConfig } from "@/config/site";
import { env } from "@/env";
import { getSEOTags } from "@/lib/seo";


const CHATGPT_PROMPT = `
You're a lawyer. Write a privacy policy for my website that satisfies all legal requirements in the United States. Ask me for the information you need, one question at a time.
`;

export const metadata = getSEOTags({
	title: "Privacy Policy",
	description: "Privacy policy for your website",
	relativeUrl: "/privacy-policy",
})

export default function PrivacyPolicy() {
	const LastUpdate = "May 22, 2024";
	const ApplicationName = siteConfig.name;
	const WebsiteURL = env.NEXT_PUBLIC_BASE_URL;

	return (
		<section className="container my-4">
			<h1 className="mt-4 text-3xl font-bold">
				Privacy Policy
			</h1>

			<p className="mb-2 italic">
				Last updated: {LastUpdate}
			</p>

			<p className="text-center text-lg font-semibold">
				**This is a sample privacy policy generated with AI. Please replace this with your own privacy policy.**
			</p>

			<div className="m-4">
				<p className="py-1">
					Welcome to {ApplicationName}! We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy applies to {WebsiteURL} and governs data collection, processing, and usage in compliance with the privacy laws of the United States. By using the website, you consent to the data practices described in this policy.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					Collection of Your Personal Information
				</h2>

				<p className="py-1">
					We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) signing up for our newsletter; (c) sending us an email message. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					Use of Cookies
				</h2>
				<p className="py-1">
					The site uses “cookies” to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
				</p>


				<h2 className="mt-2 py-1 font-semibold">
					Analytics
				</h2>

				<p className="py-1">
					We may track the pages you visit, the type of browser you use, and other data related to your interaction with our website. We use this information to analyze trends, administer the site, and gather demographic information to improve our offerings. This data is shared with our trusted third-party service providers to help perform statistical analysis.
				</p>


				<h2 className="mt-2 py-1 font-semibold">
					Sharing Information with Third Parties
				</h2>

				<p className="py-1">
					We do not sell, rent, or lease our customer lists to third parties. We may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to {ApplicationName}, and they are required to maintain the confidentiality of your information.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					Your Rights
				</h2>
				<p className="py-1">
					You have the right to access, edit, or delete your personal information at any time. If you would like to exercise these rights, please contact us at [Your Contact Information].
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					Changes to this Statement
				</h2>

				<p className="py-1">
					{ApplicationName} reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					Contact Information
				</h2>

				<p className="py-1">
					{ApplicationName} welcomes your questions or comments regarding this Statement of Privacy. If you believe that {ApplicationName} has not adhered to this Statement, please contact us at:
				</p>

				[Your Contact Information]

				<p className="py-1">
					Please replace placeholders like {ApplicationName}, {WebsiteURL}, and [Your Contact Information] with actual details. Also, ensure that the effective date is accurately set to the date you plan to implement or update the privacy policy on your website.
				</p>
			</div>
		</section>
	);
}