import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
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
interface Props {
	className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
	children,
}) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
				<div className={cn('flex flex-col h-full')}>
					<SheetHeader>
						<SheetTitle>
							В корзине <span className='font-bold'>3 товара </span>
						</SheetTitle>
					</SheetHeader>

					<div className='-mx-6 mt-5 overflow-auto flex-1'>
						<CartDrawerItem
							imageUrl='https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
							name={'Диабло'}
							price={300}
							details={getCartItemDetails(1, 20, [
								{
									name: 'Пепперони',
									price: 0,
								},
							])}
							quantity={1}
							id={0}
						/>
					</div>

					<SheetFooter className='-mx-6 bg-white p-8'>
						<div className='w-full'>
							<div className='flex mb-4'>
								<span className='flex flex-1 text-lg text-neutral-500'>
									Итого
									<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
								</span>

								<span className='font-bold text-lg'>450 ₽</span>
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
