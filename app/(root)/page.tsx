import { prisma } from '@/prisma/prisma-client';
import { Container, Filters, ProductGroup, Title, TopBar } from '../shared';

interface Props {
	className?: string;
}

const Home: React.FC<Props> = async ({ className }) => {
	const category = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true,
				},
			},
		},
	});

	return (
		<div className='mt-10'>
			<Container>
				<Title text='Все пиццы' className='font-extrabold' size='lg' />
			</Container>
			<TopBar categories={category.filter((category) => category.products.length > 0)} />

			<Container className='mt-10'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div className='flex-1'>
						{category.map(
							(category) =>
								category.products.length > 0 && (
									<ProductGroup
										key={category.id}
										title={category.name}
										products={category.products}
										categoryId={category.id}
									/>
								)
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
