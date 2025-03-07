import { CartDTO } from '@/app/shared/services/dto/DTO';
import { calcCartItemTotalPrice } from '.';

export type TransformCartItem = {
	id: number;
	quantity: number;
	name: string;
	imageUrl: string;
	price: number;
	disabled?: boolean;
	pizzaSize: number | null;
	pizzaType: number | null;
	ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
	items: TransformCartItem[],
	totalAmount: number
}
export const getCartItems = (data: CartDTO): ReturnProps => {
	
	const items = data.items.map((item) => ({
		id: item.id,
		quantity: item.quantity,
		name: item.productItem.product.name,
		imageUrl: item.productItem.product.imageUrl,
		price: calcCartItemTotalPrice(item),
		pizzaSize: item.productItem.size,
		pizzaType: item.productItem.pizzaType,
		disabled: false,
		ingredients: item.ingredients.map((ingredient) => ({
			name: ingredient.name,
			price: ingredient.price,
		})),
	}));

	return {
		items,
		totalAmount: data.totalAmount,
		};
};
