import { Container, ProductForm } from '@/app/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string };
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
	});
	console.log(product);

	if (!product) {
		return notFound();
	 }
	return (
		<Container className="flex flex-col my-10">
			<ProductForm product={product} />
		</Container>
	);
}
