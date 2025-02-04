'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { GroupVariants, IngredientsItem, PizzaImage, Title } from '.';
import { Button } from '@/app/shared/components/ui';
import { Ingredient, ProductItem } from '@prisma/client';
import {
	pizzaEntriesSizes,
	pizzaEntriesTypes,
	PizzaSize,
	mapPizzaTypes,
	PizzaType,
} from '../../constants/pizza';
import { useSet } from 'react-use';

interface Props {
	className?: string;
	imageUrl: string;
	name: string;
	ingredients: Ingredient[];
	items: ProductItem[];
	onclickAdd?: () => void;
}
console.log(pizzaEntriesTypes);
export const ChoosePizzaForm: React.FC<Props> = ({
	name,
	imageUrl,
	className,
	ingredients,
	items,
}) => {
	const [pizzaSize, setPizzaSize] = React.useState<PizzaSize>(20);
	const [pizzaType, setPizzaType] = React.useState<PizzaType>(1);
	const [selectedIngredients, { toggle: setActiveIngredients }] = useSet<number>();

	// отсортированный массив объектьов пицц исходя из установленного пользователем типа пиццы
	const filteredPizzasByType = items.filter((item) => item.pizzaType === pizzaType);

	// варианты размеров пицц, дополненные полем disabled
	const availableSizes = pizzaEntriesSizes.map((item) => {
		return {
			name: item.name,
			value: String(item.value),
			disabled: !filteredPizzasByType.some(
				(pizza) => Number(pizza.size) === Number(item.value)
			),
		};
	});
	const handleClick = () => {
		// onclickAdd();
		console.log(
			pizzaSize, pizzaType, selectedIngredients
			);
	}
	const currentItemId = items.find(
		(item) => item.pizzaType === pizzaType && item.size === pizzaSize
	)?.id
	React.useEffect(() => {
		// есть вариант заданного размера и при этом не заблокированный
		const isAvailableSize = availableSizes.find(
			(item) => Number(item.value) === pizzaSize && !item.disabled
		);

		// первый не заблокированный вариант
		const availableSize = availableSizes.find((item) => !item.disabled);
		console.log('продукты:',items);
		console.log("отсортированный массив объектов пицц по тесту: ",filteredPizzasByType,);
		console.log("дополненный disabled массив вариантов: ",availableSizes,);
		console.log("есть доступный вариант заданнного размера не аблокированный: ",isAvailableSize,);
		console.log("первый не заблокированный вариант: ",availableSize);
		if (!isAvailableSize && availableSize) {
			setPizzaSize(Number(availableSize.value) as PizzaSize);
		}
		// console.log(items, availableSize);
	}, [pizzaType]);
	// console.log(pizzaEntriesTypes)

	const pizzaPrice =
		items.find(
			(item) => item.size === pizzaSize && item.pizzaType === pizzaType
		)?.price || 0;

	const totalIngredientsPrice = ingredients
		.filter((ingredient) => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0);

	const totalPrice = pizzaPrice + totalIngredientsPrice;
	return (
		<div className={cn(className, 'flex flex-1')}>
			<PizzaImage imageUrl={imageUrl} size={pizzaSize} />
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<p className='mt-2 mb-3'>
					{`${pizzaSize} см, тип теста: ${
						mapPizzaTypes[pizzaType]
					}`}
				</p>

				<GroupVariants
					className='mb-3'
					items={availableSizes}
					value={String(pizzaSize)}
					onClick={(size) => setPizzaSize(Number(size) as PizzaSize)}
				/>
				<GroupVariants
					className='mb-3'
					items={pizzaEntriesTypes}
					value={String(pizzaType)}
					onClick={(type) => setPizzaType(Number(type) as PizzaType)}
				/>
				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
					<div className='grid grid-cols-3 gap-3'>
						{ingredients.map((ingredient) => (
							<IngredientsItem
								key={ingredient.id}
								name={ingredient.name}
								imageUrl={ingredient.imageUrl}
								price={ingredient.price}
								onclick={() => setActiveIngredients(ingredient.id)}
								active={selectedIngredients.has(ingredient.id)}
							/>
						))}
					</div>
				</div>
				<Button
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
					type='submit'
					onClick={handleClick}
				>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	);
};
