import { CartItem } from '@prisma/client';
import { create } from 'zustand';
import { Api } from '../services/api-client';
import { getCartItems } from '@/lib/get-cart-items';

interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: CartItem[];
	fetchCartItems: () => Promise<void>;
}

export const useCart = create<CartState>()((set) => ({
		loading: false,
		error: false,
		totalAmount: 0,
		items: [],
		fetchCartItems: async () => {
			try {
				set({ loading: true });
				const data = await Api.cart.getCart();
				set(getCartItems(data));
				set({loading: false});
			} catch (error) {
				set({ error: true });

			}
		}
	}
));
