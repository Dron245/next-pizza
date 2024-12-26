import { cn } from "@/lib/utils";
import { Container, Title, TopBar } from "./shared";

interface Props {
	// categories: Category[];
	className?: string;
 }
 const Home: React.FC<Props>=({className}) =>{

	return (
		<div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
			<Container>
			<Title text="Все пиццы" size="xl" className="font-extrabold"/>
			<TopBar/>
			</Container>
		</div>
	);
}

export default Home