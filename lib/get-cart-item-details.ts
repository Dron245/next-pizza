import {
	PizzaSize,
	PizzaType,
	mapPizzaTypes,
} from '@/app/shared/constants/pizza';
import { Cart, Ingredient } from '@prisma/client';

export const getCartItemDetails = (
	PizzaType: PizzaType,
	PizzaSize: PizzaSize,
	ingredients: Array<{ name: string }>,
): string => {
	const details = [];

	if (PizzaSize && PizzaType) {
		const typeName = mapPizzaTypes[PizzaType];
		details.push(`${typeName} ${PizzaSize} см`);
	}

	if (ingredients) {
		details.push(...ingredients
			.map((ingredient) => ingredient.name));
	}

	return details.join(', ');
};
