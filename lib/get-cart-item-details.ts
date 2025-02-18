export const getCartItemDetails = (PizzaType: string, PizzaSize: string,
	 ingredients: string[]) => {
	const details = [];

	if (PizzaSize && PizzaType) {
		// const typeName = mapPizzaType[PizzaType];
		// details.push(`${typeName} ${PizzaSize} см`);
		details.push(`${PizzaType} ${PizzaSize} см`);
	}

	if (ingredients) {
		ingredients.forEach((ingredient) => {
			details.push(ingredient);
		});
	}

	return details.join(', ');
};
