import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	
	const token = req.cookies.get('cartToken')?.value;
	
	if(!token) {
		return NextResponse.json({totalAmount: 0, items: []});
	} 

	if (token) {
		const cart = await prisma.cart.findFirst({
			where: {tokenId: token},
			include: {
				items: {
					orderBy: {
						createdAt: 'desc'
					},
					include: {
						productItem: {
							include: {
								product: true,
							}
						},
						ingredients: true,
					},
				},
			},
		});
		return NextResponse.json(cart, {
			status: 200
		})
	}
}