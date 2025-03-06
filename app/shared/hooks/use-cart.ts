'use client';
import { useEffect } from "react";
import { useCartStore } from "../store/cart";

export const useCart = () => {
	const cartStore = useCartStore((state) => state);
	const items = cartStore.items;
	useEffect(() => {
		cartStore.fetchCartItems();

	}, []);
	
	return {
		items,
	};
};

