import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

export interface RangeProps {
	priceFrom?: number;
	priceTo?: number;
}

export function useParams() {
	const searchParams = useSearchParams();
	const [price, setPrice] = React.useState<RangeProps>({
		priceFrom: searchParams.has("priceFrom") ? Number(searchParams.get("priceFrom")) : 2000,
		priceTo: searchParams.has("priceTo") ? Number(searchParams.get("priceTo")) : 700,
	});

	const [size, { toggle: toggleSize }] = useSet(
		new Set<string>(searchParams.has("size") ? searchParams.get("size")?.split(",") : [])
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
	return {
		price,
		setPrice,
		size,
		toggleSize,
		pizzaTypes,
		togglePizzaTypes,
		selectedIngredients,
		toggleIngredients,
	};
}
