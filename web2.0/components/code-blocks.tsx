'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';

export function CodeBlocks({ code }: { code: string }) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyClick = () => {
		navigator.clipboard.writeText(code);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};



	return (
		<pre onClick={handleCopyClick} className="flex cursor-pointer items-center justify-between overflow-x-hidden rounded-md bg-gray-900 p-4 font-mono text-gray-400">
			<code className='truncate'>npx create-next-app -e https://github.com/arfan-rfn/next-template</code>
			<Button
				variant="ghost"
				size="icon"
				onClick={handleCopyClick}
			>
				{isCopied ? <Icons.Check className="size-4" /> : <Icons.Copy className="size-4" />}
				<div className='sr-only'>copy</div>
			</Button>
		</pre>
	);
};
