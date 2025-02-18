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
import { ArrowBigRight } from 'lucide-react';
import { CartDrawerItem } from '.';
import { getCartItemDetails } from '@/lib/get-cart-item-details';
interface Props {
	className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent>
				<SheetHeader className='space-y-1'>
					<SheetTitle className='font-bold'>В корзине 3 товара</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>

				<div className='space-y-2'>
					<CartDrawerItem
						src='https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
						title={'Диабло'}
						price={300}
						description={getCartItemDetails('тонкая', '20 см', ['сыр', 'помидор'])}
					/>
				</div>

				<SheetFooter className='space-y-2'>
					<div className='flex'>
						<span className='font-bold'>Итого</span>
						<span className='ml-auto font-bold'>1000</span>
					</div>
					<Button className='w-full'>
						<span>Оформить заказ</span>
						<ArrowBigRight className='w-5 h-5 ml-2' />
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};
