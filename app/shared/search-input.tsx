'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useClickAway, useDebounce } from 'react-use';
import { Product } from '@prisma/client';
import { Api } from '@/services/api-client';
import Link from 'next/link';
interface Props {
	className?: string;
}
export const SearchInput: React.FC<Props> = ({ className }) => {
	const [focus, setFocus] = useState(false);
	const [searchvalue, setSearchValue] = useState('');
	const [products, setProducts] = useState<Product[]>([]);
	const menu = React.useRef(null);
	// console.log(products);

	useDebounce(
		async () => {
			try {
				const products = await Api.products.search(searchvalue);
				setProducts(products);
			} catch (error) {
				console.log(error);
			}
		},
		150,
		[searchvalue]
	);

	useClickAway(menu, () => {
		setFocus(false);
	});

	function onClick() {
		setSearchValue('');
		// setProducts([]);
		setFocus(false);
	}
	return (
		<>
			{focus && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'></div>
			)}
			<div ref={menu} className={cn('relative z-40 group w-full', className)}>
				<Search className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
				<input
					name='search-pizza'
					type='text'
					onFocus={() => setFocus(true)}
					className='  bg-gray-100  text-sm rounded-sm focus:outline-none block w-full pl-10 p-2.5'
					placeholder='Поиск пиццы...'
					value={searchvalue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				{products && products.length > 0 && (
					<div
						className={cn(
							'absolute w-full top-14 border-gray-200 shadow-md rounded-sm p-2 opacity-0 translate-y-4 transition-all invisible duration-300 ease-in-out ',
							focus && 'bg-white visible opacity-100  z-40 top-12'
						)}
					>
						{products.map((product) => (
							<Link href={`/products/${product.id}`} key={product.id}>
								<div
									onClick={onClick}
									className='flex bg-white items-center gap-2 mb-2 hover:bg-primary/10'
								>
									<img src={product.imageUrl} alt={product.name} className='w-8 h-8' />
									{product.name}
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};
