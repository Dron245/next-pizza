export const getCartItems = (data: { totalAmount: any; items: any }) => {

	return {
		totalAmount: data.totalAmount,
		items: data.items
	}
}