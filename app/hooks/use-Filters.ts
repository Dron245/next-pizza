import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

export interface PriceProps {
	priceFrom?: number;
	priceTo?: number;
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string;
	sizes: string;
	ingredients: string;
 }

export interface Filters {
	pizzaTypes: Set<string>;
	sizes: Set<string>;
	prices: PriceProps;
	selectedIngredients: Set<string>;
 }
interface ReturnProps extends Filters {
	togglePizzaTypes: (value: string) => void;
	toggleSize: (value: string) => void;
	updatePrices: (name: keyof PriceProps, value: number) => void;
	toggleIngredients: (value: string) => void;
} 
export function useFilters():ReturnProps {
	const searchParams = useSearchParams();
	console.log(searchParams, 777);
	
	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom:  Number(searchParams.get("priceFrom")) || undefined ,
		priceTo:  Number(searchParams.get("priceTo")) || undefined,
	});

	const [sizes, { toggle: toggleSize }] = useSet(
		new Set<string>(searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : [])
	);
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.has("pizzaTypes") ? searchParams.get("pizzaTypes")?.split(",") : []
		)
	);
	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(
			searchParams.has("ingredients") ? searchParams.get("ingredients")?.split(",") : []
		)
	);
	const updatePrices = (name: keyof PriceProps, value: number) =>
		setPrices((prew)=>({
			...prew,
			[name]: value,
		}));
	return {
		pizzaTypes,
		togglePizzaTypes,
		sizes,
		toggleSize,
		prices,
		updatePrices,
		selectedIngredients,
		toggleIngredients,
	};
}
