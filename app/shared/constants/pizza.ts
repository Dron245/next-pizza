const mapPizzaSizes = {
	20: 'маленькая',
	30: 'средняя',
	40: 'большая',
} as const;

const mapPizzaTypes = {
	1: 'традиционная',
	2: 'тонкая',
} as const;

export const pizzaEntriesSizes = Object.entries(mapPizzaSizes).map(([value, name]) => ({
	name,
	value,
}));

export const pizzaEntriesTypes = Object.entries(mapPizzaTypes).map(([value, name]) => ({
	value,
	name,
}));

export type PizzaSize = keyof typeof mapPizzaSizes;
export type PizzaType = keyof typeof mapPizzaTypes;

export { mapPizzaSizes, mapPizzaTypes };
