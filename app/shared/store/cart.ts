import { create } from 'zustand';
import { Api } from '../services/api-client';
import { TransformCartItem, getCartItems } from '@/lib/get-cart-items';

interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: TransformCartItem[];
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
			set({ loading: true, error: false });
			const data = await Api.cart.getCart();
			set(getCartItems(data));
		} catch (error) {
			set({ error: true });
		} finally {
			set({ loading: false });
		}
	},
	updadeCartItems: async () => {},
	removeCartItem: async (id: number) => {},
	deleteCartItem: async (id: number) => {},
}));
