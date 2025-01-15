import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const querry = req.nextUrl.searchParams.get('querry') || '';
	
	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: querry,
				mode: 'insensitive'
			}
		},
		// take: 5
	})
	return NextResponse.json(products);
}