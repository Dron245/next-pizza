import React from 'react';

interface Props {
	value: Number;
	className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
	return (
		<div className={className}>
			<b>{String(value)}</b>
		</div>
	);
};
