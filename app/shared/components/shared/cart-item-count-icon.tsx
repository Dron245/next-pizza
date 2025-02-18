'use client';
import { cn } from '@/lib/utils';
import { Minus, Plus } from 'lucide-react';
import React from 'react';

interface Props {
	type: string;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
}

export const CartItemCountIcon: React.FC<Props> = ({ type, disabled, onClick, className }) => {
	return type === 'minus' ? (
		<Minus
			className={cn(className, { 'opacity-50 pointer-events-none': disabled })}
			onClick={onClick}
		/>
	) : (
		<Plus onClick={onClick} className={cn(className)}/>
	);
};
