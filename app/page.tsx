import { Container, Filters, Title, TopBar } from "./shared";

interface Props {
	// categories: Category[];
	className?: string;
 }
 const Home: React.FC<Props>=({className}) =>{

	return (
		<div className='mt-10'>
			<Container>
			<Title text="Все пиццы" className="font-extrabold" size="lg"/>
			</Container>
			<TopBar/>

			<Container className="mt-10">
				<div className="flex gap-[60px]">
					<div className="w-[250px]">
						<Filters />
					</div>
					<div className='flex-1'>
						Товары
					</div>
				</div>

			</Container>
		</div>
	);
}

export default Home