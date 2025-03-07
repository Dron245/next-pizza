'use client';
import { useEffect } from 'react';
import { useCartStore } from '../store/cart';
import { TransformCartItem } from '@/lib/get-cart-items';

// type ReturnProps = {
// 	totalAmount: number;
// 	items: TransformCartItem[];
// 	loading: boolean;
// 	updateItemQuantity: (id: number, quantity: number) => void;
// 	removeCartItem: (id: number) => void;
// 	addCartItem: () => void;
//  };
export const useCart = () => {
	const cartState = useCartStore((state) => state);
	const items = cartState.items;
	const totalAmount = items.reduce((total, item) =>
		total + item.price, 0);
	useEffect(() => {
		cartState.fetchCartItems();
	}, []);
	console.log(items);
	
	return {
		items,
		totalAmount
	};
};
