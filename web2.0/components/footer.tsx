import React from 'react';
import { Icons } from './icons';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { ThemeToggle } from './theme-toggle';

export function Footer() {
	return (
		<footer className="relative bottom-0 bg-accent p-4 text-accent-foreground">
			<div className="container mx-auto text-left">
				<div className="flex flex-wrap justify-start">
					<div className="w-full p-4 md:w-2/5">
						<div className="flex items-center gap-2">
							<Icons.Logo className="my-4 h-12 w-auto" />
							<span className="text-lg font-semibold">{siteConfig.name}</span>
						</div>
						<ul className="my-2 list-none">

							<li className='mx-2 mt-2 flex items-center justify-start'>
								{siteConfig.socials.map(({ name, url, icon }) => {
									const SocialIcon = Icons[icon as keyof typeof Icons];
									if (!SocialIcon){
										console.error(`ERROR: Icon ${icon} not found in Icons. Hiding social link ${name} in footer`);
										return null;
									}
									return (
										<Link href={url} key={name} className='mr-4 opacity-70 hover:opacity-100'>
											<SocialIcon className="size-5" />
											<span className="sr-only">{name}</span>
										</Link>
									);
								})}
							</li>
						</ul>

					</div>


					{Object.entries(siteConfig.footer.links).map(([key, value]: any) => (
						<div key={key} className="w-full p-4 sm:w-1/3 md:w-1/5" >
							<h2 className="mb-2 text-start text-lg font-semibold">{key}</h2>
							<ul className="list-none">
								{value.map(({ name, url }: any, i: Number) =>
									<li key={`${name}-${i}`} className='py-1'>
										<Link
											href={url}
											className={cn(buttonVariants({ variant: 'link', size: 'text' }), 'font-light')}
										>
											{name}
										</Link>
									</li>
								)}
							</ul>
						</div>
					))}

				</div>
				<div className='flex justify-between'>
					<p className="mt-4 text-xs">
						&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
					</p>
					<ThemeToggle />
				</div>
			</div>
		</footer>
	);
};
