"use client";
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";
interface FilterProps {
	ingredients: Ingredient[];
	loading: boolean;
}
export function useIngredients(): FilterProps {
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
