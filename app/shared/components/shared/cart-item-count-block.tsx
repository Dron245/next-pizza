'use client';
import React from 'react';
import { CartItemCountIcon } from '.';

interface Props {
	value: number;
	setQuantity: ( znak: 'plus' | 'minus') => void;
	className?: string;
}

export const CartItemCountBlock: React.FC<Props> = ({ setQuantity, value, className }) => {
	return (
		<div className={className}>
			<CartItemCountIcon
				onClick={() => setQuantity( 'minus')}
				disabled={value === 1}
				className='w-5 h-5 minus cursor-pointer'
				type={'minus'}
			/>
			<p>{value}</p>
			<CartItemCountIcon
				onClick={() => setQuantity( 'plus')}
				className='w-5 h-5 plus cursor-pointer'
				type={'plus'}
			/>
		</div>
	);
};
