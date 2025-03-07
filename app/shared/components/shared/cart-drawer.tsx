'use client';
import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from '@/app/shared/components/ui/sheet';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import { CartDrawerItem } from '.';
import { getCartItemDetails } from '@/lib/get-cart-item-details';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useCart } from '../../hooks/use-cart';
import { PizzaSize, PizzaType } from '../../constants/pizza';

interface Props {
	className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
	children,
}) => {
	const { items, totalAmount } = useCart();

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent
				aria-describedby={undefined}
				className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'
			>
				<div className={cn('flex flex-col h-full')}>
					<SheetHeader>
						<SheetTitle>
							В корзине{' '}
							<span className='font-bold'>{items.length} товара </span>
						</SheetTitle>
					</SheetHeader>

					<div className='-mx-6 mt-5 overflow-auto flex-1'>
						{items.map((item) => (
							<div className="mb-2" key={item.id}>
								<CartDrawerItem
								id={item.id}
								key={item.id}
								imageUrl={item.imageUrl}
								name={item.name}
								price={item.price}
								details={getCartItemDetails(
									item.pizzaType as PizzaType,
									item.pizzaSize as PizzaSize,
									item.ingredients
								)}
								quantity={item.quantity}
							/>
							</div>
						))}
					</div>

					<SheetFooter className='-mx-6 bg-white p-8'>
						<div className='w-full'>
							<div className='flex mb-4'>
								<span className='flex flex-1 text-lg text-neutral-500'>
									Итого
									<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
								</span>

								<span className='font-bold text-lg'>{totalAmount} ₽</span>
							</div>

							<Link href='/checkout'>
								<Button
									// onClick={() => setRedirecting(true)}
									type='submit'
									className='w-full h-12 text-base'
								>
									Оформить заказ
									<ArrowRight className='w-5 ml-2' />
								</Button>
							</Link>
						</div>
					</SheetFooter>
				</div>
			</SheetContent>
		</Sheet>
	);
};
