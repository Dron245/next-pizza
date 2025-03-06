import { create } from "zustand";
import { Api } from "../services/api-client";
import { GetCartItem, getCartItems } from "@/lib/get-cart-items";

interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: GetCartItem[];
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
			set(getCartItems(data));
			set({ loading: false });
			
		} catch (error) {
			set({ error: true, loading: false });
		}
	},
	updadeCartItems: async () => {
		
	},
	removeCartItem: async (id: number) => {
		
	},
	deleteCartItem: async (id: number) => {
		
	},
}));
