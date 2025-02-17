import { PizzaSize, PizzaType } from "@/app/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

export const calcTotalPizzaPrice = (
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>,
	pizzaSize: PizzaSize,
	pizzaType: PizzaType
) => {
	const pizzaPrice =
		items.find((item) => item.size === pizzaSize && item.pizzaType === pizzaType)?.price || 0;
	const totalIngredientsPrice = ingredients
		.filter((ingredient) => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0);

	return pizzaPrice + totalIngredientsPrice;
};
