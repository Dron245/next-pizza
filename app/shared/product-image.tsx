import React from 'react';

interface Props {
className?: string;
imageUrl?: string
}

export const ProductImage: React.FC<Props> = ({imageUrl, className }) => {
  return (
	 <div className={className}>
		<img src={imageUrl} alt="Logo" />
	 </div>
  );
};