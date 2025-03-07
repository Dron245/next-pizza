import { CartItemDTO } from '@/app/shared/services/dto/DTO';

type calcCartItemTotalPrice = (item: CartItemDTO) => number;
export const calcCartItemTotalPrice = (item: CartItemDTO) => {
	return (
		(item.productItem.price +
			item.ingredients.reduce(
				(acc: number, ingredient: { price: number }) =>
					 acc + ingredient.price, 0)) *item.quantity
	);
};
