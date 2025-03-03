import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { CountButtonProps } from './cart-item-count-block';
import { Button } from '../ui';
import { cn } from '@/lib/utils';

interface Props {
	type: string;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
	size?: CountButtonProps['size'];
}

export const CartItemCountIcon: React.FC<Props> = ({
	type,
	disabled,
	onClick,
	size,
}) => {
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			className={cn(
				'p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400',
				size === 'sm'
					? 'w-[30px] h-[30px] rounded-[10px]'
					: 'w-[38px] h-[38px] rounded-md'
			)}
		>
			{type === 'minus' ? (
				<Minus className={size === 'sm' ? 'h-4' : 'h-5'} />
			) : (
				<Plus className={size === 'sm' ? 'h-4' : 'h-5'} />
			)}
		</Button>
	);
};
