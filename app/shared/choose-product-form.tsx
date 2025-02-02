import React from 'react';
import { ProductImage, Title } from '.';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface Props {
className?: string;
imageUrl:string;
name:string;
onClickAdd?: () => void
}

export const ChooseProductForm: React.FC<Props> = ({imageUrl, name, className }) => {
	const description = `${name} 30см`
	const totalPrice = 350
  return (
	 <div className={cn(className, 'flex flex-1')}>
		<div className='flex items-center justify-center flex-1 relative w-full'>
			<img src={imageUrl} alt={name} className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'  />
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
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