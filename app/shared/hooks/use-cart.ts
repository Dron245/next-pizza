import { useEffect } from "react";
import { useCartStore } from "../store/cart";

export const useCart = () => {

	const cartSore = useCartStore((state) => state);
	useEffect(() => {
		cartSore.fetchCartItems();
		
	}, []);

	return {
		cartSore
	};
};