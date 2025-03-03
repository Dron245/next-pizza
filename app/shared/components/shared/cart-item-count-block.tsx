import { cn } from '@/lib/utils';
import React from 'react';
import { CartItemCountIcon } from '.';

export interface CountButtonProps {
	value: number;
	size?: 'sm' | 'lg';
	onClick?: (type: 'plus' | 'minus') => void;
	className?: string;
}

export const CartItemCountBlock: React.FC<CountButtonProps> = ({
	onClick,
	value = 1,
	size = 'sm',
	className,
}) => {
	return (
		<div
			className={cn(
				'inline-flex items-center justify-between gap-3',
				className
			)}
		>
			<CartItemCountIcon
				onClick={() => onClick?.('minus')}
				disabled={value === 1}
				type={'minus'}
			/>
			<b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>
			<CartItemCountIcon onClick={() => onClick?.('plus')} type={'plus'} />
		</div>
	);
};
