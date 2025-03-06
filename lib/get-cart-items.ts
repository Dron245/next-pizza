import { CartDTO } from "@/app/shared/services/dto/DTO"

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
	// console.log(123);
	// if (!Array.isArray(data.items)) {
	// 	console.error("Ошибка: data.items не является массивом", data.items);
	// 	return { items: [] };
	// }
	const items = data[0].items.map((item) => ({
		id: item.id,
		quantity: item.quantity,
		name: item.productItem.product.name,
		imageUrl: item.productItem.product.imageUrl,
		// price: calcCartItemTotalPrice(item),
		price: 1000,
		pizzaSize: item.productItem.size,
		pizzaType: item.productItem.pizzaType,
		disabled: false,
		ingredients: item.ingredients.map((ingredient) => ({
			name: ingredient.name,
			price: ingredient.price,
		})),
	}))
	
	console.log(456);
	return {items} ;
}