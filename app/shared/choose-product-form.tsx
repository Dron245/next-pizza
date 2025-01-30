import { ProductWithRelations } from '@/@types/prisma';
import React from 'react';
import { ProductImage, Title } from '.';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface Props {
className?: string;
product:ProductWithRelations
}

export const ChooseProductForm: React.FC<Props> = ({product, className }) => {
	const description = `${product.name} 30см`
	const totalPrice = 350
  return (
	 <div className={cn(className, 'flex flex-1')}>
		<div className='flex items-center justify-center flex-1 relative w-full'>
			<ProductImage imageUrl={product.imageUrl} name={product.name} />
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={product.name} size='md' className='font-extrabold mb-1' />
				<p className='mt-2 mb-3'>{description}</p>
				<Button
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
					type='submit'
				>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	 </div>
  );
};