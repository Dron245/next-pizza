import { CartDTO } from './dto/DTO';
import axiosInstance from './instance';

export async function getCart(): Promise<CartDTO> {
	const res = await axiosInstance.get<CartDTO>('/cart');
	return res.data;
}

// export async function removeCartItem(id: number): Promise<any> {
// 	const res = await axiosInstance.delete<any>(`/cart/${id}`);
// 	return res.data;
// }
