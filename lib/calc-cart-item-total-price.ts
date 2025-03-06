import { GetCartItem } from "./get-cart-items";

type calcCartItemTotalPrice = (item: GetCartItem) => number;
export const calcCartItemTotalPrice = (item): number => {
	return (
		(item.productItem.price +
			item.ingredients.reduce(
				(acc: number, ingredient: { price: number }) => acc + ingredient.price,
				0
			)) *
		item.quantity
	);
};
