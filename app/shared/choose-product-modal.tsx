import { ProductWithRelations } from '@/@types/prisma';
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import React from 'react';
import { ChoosePizzaForm, ChooseProductForm } from '.';

interface Props {
className?: string;
product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
	const isPizza = Boolean(product.items[0].pizzaType);
  return (
	 <div className={cn('flex flex-1', className)}>
		{
			isPizza ? (
				<ChoosePizzaForm
					imageUrl={product.imageUrl}
					name={product.name}/>
			) : (
				<ChooseProductForm product={product} />
			)
		}
	 </div>
  );
};