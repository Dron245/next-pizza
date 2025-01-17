import { Product } from '@prisma/client';
import instance from './instance';
import { ApiSearch } from './constants';
export async function search(query: string): Promise<Product[]> {
	const res = await instance.get<Product[]>(ApiSearch.SEARCH_PRODUCTS, {
		params: {
			query,
		},
	});
	return res.data;
}
