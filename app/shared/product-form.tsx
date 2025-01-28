import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import React from 'react';
import { GroupVariants, PizzaImage, Title } from '.';

interface Props {
	className?: string;
	product: Product;
}

export const ProductForm: React.FC<Props> = ({ product, className }) => {
	return (
		<div className={cn(className, 'flex flex-1')}>
			<PizzaImage imageUrl={product.imageUrl} size={40} />
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={product.name} size='md' className='font-extrabold mb-1' />
				<p className='mt-2 mb-3'> flsdkf sldkfms ldkfm </p>
				<GroupVariants
					className='mb-3'
					items={[
						{ name: '20', value: '1', disabled: true },
						{ name: '30', value: '2' },
						{ name: '40', value: '3' },
					]}
					
				/>
			</div>
		</div>
	);
};
