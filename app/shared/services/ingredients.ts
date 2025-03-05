import { Ingredient } from '@prisma/client';
import instance from './instance';
import { ApiSearch } from './constants';
export async function getIngredients(): Promise<Ingredient[]> {
	const res = await instance.get<Ingredient[]>(ApiSearch.INGREDIENTS);
	return res.data;
}