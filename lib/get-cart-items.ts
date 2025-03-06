import { CartDTO } from "@/app/shared/services/dto/DTO"
import { calcCartItemTotalPrice } from ".";

export type GetCartItem = {
	id: number;
	quantity: number;
	name: string;
	imageUrl: string;
	price: number;
	pizzaSize: number|null;
	pizzaType: number|null;
	disabled: boolean;
	ingredients: { name: string; price: number }[];
}
export const getCartItems = (data: CartDTO): { items: GetCartItem[] } => {
	console.log(data);
	
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
	}))
	
	return {items} ;
}