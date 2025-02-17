import { PizzaSize, PizzaType, mapPizzaTypes } from "@/app/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const DetailsPizza = (
	pizzaSize: PizzaSize,
	pizzaType: PizzaType,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>,
) => {
	const totalPrice = calcTotalPizzaPrice(
		items,
		ingredients,
		selectedIngredients,
		pizzaSize,
		pizzaType
	);
	const textDetails = `${pizzaSize} см, ${mapPizzaTypes[pizzaType]} пицца`;
	return {
		totalPrice,
		textDetails,
	};
};
