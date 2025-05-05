import { unstable_ViewTransition as ViewTransition } from 'react';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<ViewTransition>
			<div className="container mx-auto px-4 my-4">
				{children}
			</div>
		</ViewTransition>
	);
}