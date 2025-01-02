import { Container, Filters, ProductGroup, Title, TopBar } from "./shared";

interface Props {
	className?: string;
}
const Home: React.FC<Props> = ({ className }) => {
	return (
		<div className="mt-10">
			<Container>
				<Title text="Все пиццы" className="font-extrabold" size="lg" />
			</Container>
			<TopBar />

			<Container className="mt-10">
				<div className="flex gap-[60px]">
					<div className="w-[250px]">
						<Filters />
					</div>
					<div className="flex-1">
						<ProductGroup
							title={"Пиццы"}
							products={[
								{
									id: 1,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
								{
									id: 2,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
								{
									id: 3,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
								{
									id: 4,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
								{
									id: 5,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
							]}
							categoryId={1}
						/>
						<ProductGroup
							title={"Комбо"}
							products={[
								{
									id: 1,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
								{
									id: 2,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
								{
									id: 3,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
								{
									id: 4,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
								{
									id: 5,
									name: "Диабло",
									imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif",
									items: [{price: 100,},
									],
								},
							]}
							categoryId={2}
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
