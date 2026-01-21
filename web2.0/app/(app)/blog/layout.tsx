import { ViewTransition } from 'react';
import { ProfileSectionCompact } from '@/components/sections/profile-section-compact';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<ViewTransition>
			<div className="container mx-auto px-4 my-4">
				{/* Mobile Profile Section */}
				<div className="md:hidden mb-4">
					<ProfileSectionCompact />
				</div>

				<div className="flex gap-8">
					{/* Desktop Profile Section */}
					<aside className="hidden md:block sticky top-4 h-fit">
						<ProfileSectionCompact />
					</aside>
					<main className="flex-1">
						{children}
					</main>
				</div>
			</div>
		</ViewTransition>
	);
}