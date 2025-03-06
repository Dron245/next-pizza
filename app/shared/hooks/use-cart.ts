'use client';
import { useEffect } from "react";
import { useCartStore } from "../store/cart";

export const useCart = () => {
	const cartStore = useCartStore((state) => state);
	const items = cartStore.items;
	const totalAmount = items.reduce((total, item) => total + item.price, 0);
	useEffect(() => {
		cartStore.fetchCartItems();

	}, []);
	
	return {
		items,
		totalAmount
	};
};

