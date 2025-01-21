'use client';
import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';
import { useSet } from 'react-use';
interface FilterProps {
	ingredients: Ingredient[];
	loading:boolean;
	onAddId: (id: string) => void;
	selected: Set<string>
}
export function filtersHook():FilterProps {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
	const [loading, setLoading] = React.useState(true);
	// const selected = new Set<string>();
	
	const [ selected, {toggle}] = useSet(
		new Set<string>()
	);
	React.useEffect(() => {
		 async function fetchIngredients() {
			try {
				setLoading(true);
				setIngredients(
					await Api.ingredients.getIngredients()
				);
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
		onAddId:toggle,
		selected
	}
}
