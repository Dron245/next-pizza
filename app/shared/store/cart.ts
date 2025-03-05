import { CartItem } from "@prisma/client";
import { create } from "zustand";
import { Api } from "../services/api-client";
import { getCartItems } from "@/lib/get-cart-items";

interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: CartItem[];
	fetchCartItems: () => Promise<void>;
	updadeCartItems: () => Promise<void>;
	removeCartItem: (id: number) => Promise<void>;
	deleteCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>()((set) => ({
	loading: false,
	error: false,
	totalAmount: 0,
	items: [],
	fetchCartItems: async () => {
		try {
			set({ loading: true });
			const data = await Api.cart.getCart();
			console.log(data);
			set(getCartItems(data));
			set({ loading: false });
		} catch (error) {
			set({ error: true });
		}
	},
	updadeCartItems: async () => {
		// try {
		// 	set({ loading: true });
		// 	const data = await Api.cart.getCart();
		// 	set(getCartItems(data));
		// 	set({loading: false});
		// } catch (error) {
		// 	set({ error: true });
		// }
	},
	removeCartItem: async (id: number) => {
		// try {
		// 	await Api.cart.removeCartItem(id);
		// 	set({ loading: true });
		// 	const data = await Api.cart.getCart();
		// 	set(getCartItems(data));
		// 	set({loading: false});
		// } catch (error) {
		// 	set({ error: true });
		// }
	},
	deleteCartItem: async (id: number) => {
		// try {
		// 	await Api.cart.deleteCartItem(id);
		// 	set({ loading: true });
		// 	const data = await Api.cart.getCart();
		// 	set(getCartItems(data));
		// 	set({loading: false});
		// } catch (error) {
		// 	console.log(error);
		// }
	},
}));
