// import { Ingredient } from '@prisma/client';
import instance from './instance';
// import { ApiSearch } from './constants';
// export async function getIngredients(): Promise<Ingredient[]> {
// 	const res = await instance.get<Ingredient[]>(ApiSearch.INGREDIENTS);
// 	return res.data;
// }

export async function getCart(): Promise<any> {
	const res = await instance.get<any>('/cart');
	return res.data;
}

export async function removeCartItem(id: number): Promise<any> {
	const res = await instance.delete<any>(`/cart/${id}`);
	return res.data;
}
