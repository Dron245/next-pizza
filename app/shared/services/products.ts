import { Product } from '@prisma/client';
import axiosInstance from './instance';
import { ApiSearch } from './constants';
export async function search(query: string): Promise<Product[]> {
	const res = await axiosInstance.get<Product[]>(ApiSearch.SEARCH_PRODUCTS, {
		params: {
			query,
		},
	});
	return res.data;
}
