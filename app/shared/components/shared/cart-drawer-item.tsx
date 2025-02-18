'use client';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import * as CartItemDetails from './cart-item-details';
import { CartItemCountBlock } from './cart-item-count-block';
interface Props {
	src: string;
	disabled?: boolean;
	title: string;
	price: Number;
	description: string;
	className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
	className,
	src,
	title,
	description,
	price,
	disabled,
}) => {
	// function setQuantity(value:number, znak: 'plus' | 'minus') {
	// 	if (znak ==='minus' && value > 1) {
	// 		--value
	// 	} else {
	// 		console.log(123);

	// 		value++
	// 	}
	// }
	const [quantity, setQuantity] = useState<number>(1);

	// ✅ Функция для изменения количества
	function updateQuantity(znak: 'plus' | 'minus') {
		console.log(123);
		
		setQuantity((prev) => (znak === 'plus' ? prev + 1 : Math.max(1, prev - 1)));
	}
	return (
		<div
			className={cn(
				'flex bg-white p-5 gap-6',
				{
					'opacity-50 pointer-events-none': disabled,
				},
				className
			)}
		>
			<CartItemDetails.Image src={src} />

			<div className='flex-1'>
				<h3 className='text-lg font-semibold'>{title}</h3>
				<p className='text-gray-600 text-sm'>{description}</p>

				<div className='flex justify-between items-center gap-2'>
					<CartItemCountBlock
						setQuantity={updateQuantity}
						className='flex items-center gap-2'
						value={quantity}
					/>
					<CartItemDetails.Price value={price} />
				</div>
			</div>
		</div>
	);
};
