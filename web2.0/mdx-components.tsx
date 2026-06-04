import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';
import { buttonVariants } from './components/ui/button';
import { cn } from './lib/utils';
import { TornPaper } from './components/ui/torn-paper';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

// Shared heading styles with anchor link support
const headingBaseStyles = 'group scroll-mt-24 [&_.anchor-link]:opacity-0 [&_.anchor-link]:hover:opacity-100 [&:hover_.anchor-link]:opacity-100 [&_.anchor-link]:transition-opacity [&_.anchor-link]:duration-200 [&_.anchor-link]:text-muted-foreground/60 [&_.anchor-link]:hover:text-primary [&_.anchor-link]:no-underline [&_.anchor-link]:mr-2 [&_.anchor-link]:text-sm';

const components = {
	// Each blog post is written on a torn sheet of diary paper.
	wrapper: ({ children }: { children: React.ReactNode }) => (
		<div className="py-4 sm:py-8">
			<TornPaper
				className="mx-auto w-full max-w-3xl"
				contentClassName="px-6 py-10 sm:px-14 sm:py-16"
				tapeColor="color-mix(in oklab, var(--primary) 52%, transparent)"
				curl
			>
				<article className="text-foreground">{children}</article>
			</TornPaper>
		</div>
	),
	// The post's leading `# Title` becomes the diary page title.
	h1: (props: HeadingProps) => (
		<h1
			className={cn(
				'font-serif text-3xl sm:text-4xl font-bold leading-tight text-[var(--primary-border)] mt-0 mb-5 pb-4 border-b border-dashed border-border',
				headingBaseStyles
			)}
			{...props}
		/>
	),
	h2: (props: HeadingProps) => (
		<h2
			className={cn('font-serif text-2xl font-bold text-foreground mt-10 mb-3', headingBaseStyles)}
			{...props}
		/>
	),
	h3: (props: HeadingProps) => (
		<h3
			className={cn('font-serif text-xl font-semibold text-foreground mt-8 mb-2', headingBaseStyles)}
			{...props}
		/>
	),
	h4: (props: HeadingProps) => (
		<h4 className={cn('font-serif text-lg font-semibold text-foreground mt-6 mb-2', headingBaseStyles)} {...props} />
	),
	p: (props: ParagraphProps) => (
		<p className="text-foreground/90 text-base sm:text-lg leading-relaxed my-4" {...props} />
	),
	ol: (props: ListProps) => (
		<ol className="text-foreground/90 text-base sm:text-lg list-decimal pl-6 my-4 space-y-2 marker:text-primary" {...props} />
	),
	ul: (props: ListProps) => (
		<ul className="text-foreground/90 text-base sm:text-lg list-disc pl-6 my-4 space-y-2 marker:text-primary" {...props} />
	),
	li: (props: ListItemProps) => <li className="pl-1 leading-relaxed" {...props} />,
	em: (props: ComponentPropsWithoutRef<'em'>) => <em className="italic" {...props} />,
	strong: (props: ComponentPropsWithoutRef<'strong'>) => (
		<strong className="font-semibold text-foreground" {...props} />
	),
	a: ({ href, children, ...props }: AnchorProps) => {
		const className = cn(
			buttonVariants({ variant: 'link' }),
			'mx-0 px-0 h-auto font-normal text-primary underline underline-offset-3 hover:underline-offset-4 decoration-primary/50 hover:decoration-primary'
		);
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
			<a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
				{children}
			</a>
		);
	},
	code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
		const codeHTML = highlight(children as string);
		return (
			<code
				className="font-mono text-[0.85em] rounded-md bg-muted/70 px-1.5 py-0.5 text-foreground"
				dangerouslySetInnerHTML={{ __html: codeHTML }}
				{...props}
			/>
		);
	},
	hr: () => (
		<div className="my-10 flex items-center justify-center gap-2" aria-hidden>
			<span className="h-px w-20 border-t border-dashed border-border" />
			<span className="size-1.5 rotate-45 bg-primary/50" />
			<span className="h-px w-20 border-t border-dashed border-border" />
		</div>
	),
	img: (props: ComponentPropsWithoutRef<'img'>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className="my-8 w-full rounded-md border border-border shadow-[0_2px_0_0_var(--border)]"
			alt={props.alt ?? ''}
			{...props}
		/>
	),
	Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
		<div className="my-6 overflow-x-auto">
			<table className="w-full text-left text-sm border-collapse">
				<thead>
					<tr className="border-b border-border">
						{data.headers.map((header, index) => (
							<th key={index} className="font-serif font-semibold text-foreground py-2 pr-4">{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.rows.map((row, index) => (
						<tr key={index} className="border-b border-dashed border-border/60">
							{row.map((cell, cellIndex) => (
								<td key={cellIndex} className="text-foreground/90 py-2 pr-4">{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	),
	blockquote: (props: BlockquoteProps) => (
		<blockquote
			className="my-6 border-l-2 border-primary/60 pl-5 italic text-muted-foreground [&>p]:my-0"
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
