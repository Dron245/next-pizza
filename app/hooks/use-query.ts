import { useEffect } from 'react';
import { Filters } from './use-Filters';
import { useRouter } from 'next/navigation';
import qs from 'qs';

export const useQuery = (filters: Filters) => {
	const router = useRouter();
	useEffect(() => {
		const params = {
			pizzaTypes: Array.from(filters.pizzaTypes),
			size: Array.from(filters.sizes),
			...filters.prices,
			ingredients: Array.from(filters.selectedIngredients),
		};
		console.log(params,222);
		
		const querry = qs.stringify(params, { arrayFormat: 'comma' });
		router.push(`?${querry}`, {
			scroll: false,
		});
	}, [filters]);
	
};
