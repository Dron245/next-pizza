const pizzaSizes = {
	20: "маленькая",
	30: "средняя",
	40: "большая",
};

const pizzaTypes = {
	1: "тонкое",
	2: "традиционное",
};

export const pizzaEntriesSizes = Object.entries(pizzaSizes)
.map(([value, name]) => ({ value, name }));

export const pizzaEntriesTypes = Object.entries(pizzaTypes)
.map(([value, name]) => ({ value, name }));

export type PizzaSizes = keyof typeof pizzaSizes;
export type PizzaTypes = keyof typeof pizzaTypes;

export { pizzaSizes, pizzaTypes };
