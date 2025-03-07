import { Ingredient } from '@prisma/client';
import axiosInstance from './instance';
import { ApiSearch } from './constants';
export async function getIngredients(): Promise<Ingredient[]> {
	const res = await axiosInstance.get<Ingredient[]>(ApiSearch.INGREDIENTS);
	return res.data;
}
