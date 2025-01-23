"use client";
import { Api } from "@/services/api-client";
import { search } from "@/services/products";
import { Ingredient } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";
interface FilterProps {
	ingredients: Ingredient[];
	loading: boolean;
}
export function filtersHook(): FilterProps {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true);
				setIngredients(await Api.ingredients.getIngredients());
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchIngredients();
	}, []);

	return {
		ingredients,
		loading,
	};
}
