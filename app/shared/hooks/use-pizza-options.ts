'use client'
import { ProductItem } from '@prisma/client';
import React from 'react';
import { PizzaSize, PizzaType, pizzaEntriesSizes } from '../constants/pizza';
import { useSet } from 'react-use';
import { Variant } from '../components/shared/group-variants';
// interface ReturnProps {
// 	pizzaSize: PizzaSize;
// 	setPizzaSize: (size: PizzaSize) => void;
// 	pizzaType: PizzaType;
// 	setPizzaType: (type: PizzaType) => void;
// 	availableSizes: Variant[],
// 	selectedIngredients: Set<number>;
// 	currentItemId?: number,
// 	setActiveIngredients: (id: number) => void
// }
export const usePizzaOptions = (items:ProductItem[])=> {
	const [pizzaSize, setPizzaSize] = React.useState<PizzaSize>(20);
	const [pizzaType, setPizzaType] = React.useState<PizzaType>(1);
	const [selectedIngredients, { toggle: setActiveIngredients }] = useSet<number>();

	// отсортированный массив объектьов пицц исходя из установленного пользователем типа пиццы
	const filteredPizzasByType = items.filter((item) => item.pizzaType === pizzaType);

	// варианты выбора размеров пицц в зависимости от его наличия в 
	// вариациях продукта
	const availableSizes = pizzaEntriesSizes.map((item) => {
		return {
			name: item.name,
			value: String(item.value),
			disabled: !filteredPizzasByType.some(
				(pizza) => Number(pizza.size) === Number(item.value)
			),
		};
	});
	
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
		console.log('вариации продукта:',items);
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



	
	return {
		pizzaSize,
		setPizzaSize,
		pizzaType,
		setPizzaType,
		availableSizes,
		selectedIngredients,
		setActiveIngredients,
		currentItemId
	}
}