import React from 'react';

interface Props {
	className?: string;
	src: string;
}

export const CartDrawerItemImage: React.FC<Props> = ({ src, className }) => {
	return <div className={className}>
		<img className='w-[60px] h-[60px]' src={src} />
	</div>;
};
