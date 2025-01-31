import { cn } from '@/lib/utils';
import React from 'react';
import { GroupVariants, PizzaImage, Title } from '.';
import { Button } from '@/components/ui';
import { Ingredient } from '@prisma/client';

interface Props {
className?: string;
imageUrl: string;
name: string;
ingredients: Ingredient[];
}

export const ChoosePizzaForm: React.FC<Props> = ({name, imageUrl, className }) => {
	const totalPrice = 350
	return (
		<div className={cn(className, 'flex flex-1')}>
			<PizzaImage imageUrl={imageUrl} size={40} />
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<p className='mt-2 mb-3'> flsdkf sldkfms ldkfm </p>
				<GroupVariants
					className='mb-3'
					items={[
						{ name: '20', value: '1', disabled: true },
						{ name: '30', value: '2' },
						{ name: '40', value: '3' },
					]}
					
				/>
				<Button
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
					type='submit'
				>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	);
};