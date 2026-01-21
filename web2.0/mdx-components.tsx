import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';
import { buttonVariants } from './components/ui/button';
import { cn } from './lib/utils';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

// Shared heading styles with anchor link support
const headingBaseStyles = 'group scroll-mt-20 [&_.anchor-link]:opacity-0 [&_.anchor-link]:hover:opacity-100 [&:hover_.anchor-link]:opacity-100 [&_.anchor-link]:transition-opacity [&_.anchor-link]:duration-200 [&_.anchor-link]:text-gray-400 [&_.anchor-link]:hover:text-gray-600 [&_.anchor-link]:dark:text-zinc-500 [&_.anchor-link]:dark:hover:text-zinc-300 [&_.anchor-link]:no-underline [&_.anchor-link]:mr-2 [&_.anchor-link]:text-sm';

const components = {
	h1: (props: HeadingProps) => (
		<h1 className={cn("font-bold text-xl pt-12 mb-0", headingBaseStyles)} {...props} />
	),
	h2: (props: HeadingProps) => (
		<h2
			className={cn("text-gray-800 dark:text-zinc-200 font-semibold mt-8 mb-3", headingBaseStyles)}
			{...props}
		/>
	),
	h3: (props: HeadingProps) => (
		<h3
			className={cn("text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3", headingBaseStyles)}
			{...props}
		/>
	),
	h4: (props: HeadingProps) => <h4 className={cn("font-medium", headingBaseStyles)} {...props} />,
	p: (props: ParagraphProps) => (
		<p className="text-gray-800 dark:text-zinc-300 leading-snug mt-2" {...props} />
	),
	ol: (props: ListProps) => (
		<ol
			className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2"
			{...props}
		/>
	),
	ul: (props: ListProps) => (
		<ul
			className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1"
			{...props}
		/>
	),
	li: (props: ListItemProps) => <li className="pl-1" {...props} />,
	em: (props: ComponentPropsWithoutRef<'em'>) => (
		<em className="font-medium" {...props} />
	),
	strong: (props: ComponentPropsWithoutRef<'strong'>) => (
		<strong className="" {...props} />
	),
	a: ({ href, children, ...props }: AnchorProps) => {
		const className = cn(buttonVariants({ variant: 'link' }), 'mx-0 px-0 underline underline-offset-3 hover:underline-offset-4 decoration-gray-800 dark:hover:decoration-gray-200');
		if (href?.startsWith('/')) {
			return (
				<Link href={href} className={className} {...props}>
					{children}
				</Link>
			);
		}
		if (href?.startsWith('#')) {
			return (
				<a href={href} className={className} {...props}>
					{children}
				</a>
			);
		}
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
				{...props}
			>
				{children}
			</a>
		);
	},
	code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
		const codeHTML = highlight(children as string);
		return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
	},
	Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
		<table>
			<thead>
				<tr>
					{data.headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.rows.map((row, index) => (
					<tr key={index}>
						{row.map((cell, cellIndex) => (
							<td key={cellIndex}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	),
	blockquote: (props: BlockquoteProps) => (
		<blockquote
			className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
			{...props}
		/>
	),
};

declare global {
	type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
	return components;
}