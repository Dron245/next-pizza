import { CartDTO } from './dto/DTO';
import instance from './instance';


export async function getCart(): Promise<CartDTO> {
	const res = await instance.get<CartDTO>('/cart');
	return res.data;
}

// export async function removeCartItem(id: number): Promise<any> {
// 	const res = await instance.delete<any>(`/cart/${id}`);
// 	return res.data;
// }
