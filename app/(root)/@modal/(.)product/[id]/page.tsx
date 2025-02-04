import { ChooseProductModal } from '@/app/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(params.id),
		},
		include: {
			ingredients: true,
			items: true,
		},
	});
	if (!product) {
		return notFound();
	}
	// console.log(product);
	return <ChooseProductModal product={product} />;
}
