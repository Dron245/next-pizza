import { PizzaSize, PizzaType, mapPizzaTypes } from '@/app/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';
interface DetailsPizzaProps {
	items: ProductItem[];
	pizzaSize: PizzaSize;
	pizzaType: PizzaType;
	ingredients: Ingredient[];
	selectedIngredients: Set<number>;
}
export const DetailsPizza = ({
	pizzaSize,
	pizzaType,
	items,
	ingredients,
	selectedIngredients,
}: DetailsPizzaProps) => {
	const pizzaPrice =
		items.find((item) => item.size === pizzaSize && item.pizzaType === pizzaType)?.price || 0;
	const totalIngredientsPrice = ingredients
		.filter((ingredient) => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0);

	const totalPrice = calcTotalPizzaPrice(
		pizzaType,
		pizzaSize,
		items,
	);
	const textDetails = `${pizzaSize} см, ${mapPizzaTypes[pizzaType]} пицца`;
	return {
		totalPrice,
		textDetails,
	};
};
