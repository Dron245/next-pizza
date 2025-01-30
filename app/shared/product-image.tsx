import React from 'react';

interface Props {
className?: string;
imageUrl?: string;
name: string
}

export const ProductImage: React.FC<Props> = ({imageUrl, className, name }) => {
  return (
	 <div className={className}>
		<img className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]' src={imageUrl} alt={name} />
	 </div>
  );
};