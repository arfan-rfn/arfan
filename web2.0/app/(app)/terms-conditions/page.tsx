
import { siteConfig } from "@/config/site";
import { env } from "@/env";
import { getSEOTags } from "@/lib/seo";

const CHATGPT_PROMPT = `
You're a lawyer. Write a Terms and Condition for my website that satisfies all legal requirements in the United States. Ask me for the information you need, one question at a time.
`;

export const metadata = getSEOTags({
	title: "Terms and Condition",
	description: "Terms and Condition for your website",
	relativeUrl: "/terms-conditions",
})

export default function TermsAndCondition() {
	const LastUpdate = "May 22, 2024";
	const ApplicationName = siteConfig.name;
	const WebsiteURL = env.NEXT_PUBLIC_BASE_URL;

	return (
		<section className="container my-4">
			<h1 className="mt-4 text-3xl font-bold">
				Terms and Condition
			</h1>
			<p className="mb-2 italic">
				Last updated: {LastUpdate}
			</p>

			<p className="text-center text-lg font-semibold">
				**This is a sample Terms and Condition generated with AI. Please replace this with your own Terms and Condition.**
			</p>
			<div className="m-4">
				<p className="py-1">
					Welcome to {ApplicationName}! These terms and conditions outline the rules and regulations for the use of {ApplicationName}’s Website, located at {WebsiteURL}.
				</p>

				<p className="py-1">
					By accessing this website, we assume you accept these terms and conditions. Do not continue to use {ApplicationName} if you do not agree to take all of the terms and conditions stated on this page.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					1. The use of the Services
				</h2>

				<p className="py-1">
					Our website provides a NextJS template to start new projects quickly. The services are provided “as is,” with all faults, and {ApplicationName} expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					2. Cookies
				</h2>

				<p className="py-1">
					We employ the use of cookies. By accessing {ApplicationName}, you agreed to use cookies in agreement with the {ApplicationName}’s Privacy Policy.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					3. License
				</h2>

				<p className="py-1">
					Unless otherwise stated, {ApplicationName} and/or its licensors own the intellectual property rights for all material on {ApplicationName}. All intellectual property rights are reserved. You may access this from {ApplicationName} for your own personal use subjected to restrictions set in these terms and conditions.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					4. User Responsibilities
				</h2>

				<p className="py-1">
					You agree to subscribe only with accurate and current information for receiving the newsletter and not to use false identities or impersonate any person or use a name that you are not authorized to use.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					5. Communication
				</h2>

				<p className="py-1">
					By subscribing to our newsletter, you agree that we may use your email to contact you regarding updates or offers.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					6. Limitation of Liability
				</h2>

				<p className="py-1">
					In no event shall {ApplicationName}, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. {ApplicationName}, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					7. Changes to Terms
				</h2>

				<p className="py-1">
					{ApplicationName} is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					8. Assignment
				</h2>

				<p className="py-1">
					The {ApplicationName} is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					9. Entire Agreement
				</h2>

				<p className="py-1">
					These Terms constitute the entire agreement between {ApplicationName} and you in relation to your use of this Website, and supersede all prior agreements and understandings.
				</p>

				<h2 className="mt-2 py-1 font-semibold">
					10. Governing Law & Jurisdiction
				</h2>

				<p className="py-1">
					These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
				</p>

				<p className="py-1">
					Please replace placeholders like {ApplicationName}, {WebsiteURL}, and [Your State] with actual details. Also, ensure that the update date is accurately set to the date you plan to implement or update the terms and conditions on your website.
				</p>
			</div>
		</section>
	);
}