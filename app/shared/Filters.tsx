'use client';
import React, { useEffect } from 'react';
import { Title } from '.';
import { Input } from '@/components/ui';
import { RangeSlider } from './RangeSlider';
import { CheckboxFiltersGroup } from './CheckboxFiltersGroup';
import { filtersHook } from '../hooks/useFilterCheckbox';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
	className?: string;
}

interface RangeProps {
	priceFrom?: number;
	priceTo?: number;
}
interface Filter extends RangeProps {
	ingredients: Set<string>;
	size: Set<string>;
	pizzaTypes: Set<string>
}
export const Filters: React.FC<Props> = ({ className }) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const { ingredients, loading, selected, onAddId } = filtersHook();
	const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));
	const [price, setPrice] = React.useState<RangeProps>({});

	
	const [ size, {toggle: toggleSize}] = useSet(
		new Set<string>(
			searchParams.has('size') ? searchParams.get('size')?.split(',') : [],
		)
	);
	const [ pizzaTypes, {toggle: togglePizzaTypes}] = useSet(
		new Set<string>(
			searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [],
		)
	);
	const updatePrice = (name: keyof RangeProps, value: number) =>
		setPrice({
			...price,
			[name]: value,
		});
	useEffect(() => {
	  
		const filter:Filter = {
			...price,
			ingredients: selected,
			size: new Set<string>(Array.from(size)),
			pizzaTypes: new Set<string>(Array.from(pizzaTypes))
		}
		// console.log(filter);
		
	 const querry = qs.stringify(filter, 
		// {arrayFormat: 'comma'}
	);
	 console.log( querry);
	 router.push(`?${querry}`, {
			scroll: false
	 });
	//  console.log(searchParams);
	}, [price, selected, size, pizzaTypes, searchParams])
	
	return (
		<div className={className}>
			<Title
				text='Фильтрация'
				size='sm'
				className='mb-5 font-bold pb-4 border-b border-b-neutral-100'
			/>
			<CheckboxFiltersGroup
				title={'Тип теста'}
				name={'types'}
				className='mb-4'
				onClickCheckbox={togglePizzaTypes}
				items={[
					{ text: 'тонкое', value: '1' },
					{ text: 'традиционное', value: '2' },
				]}
				selected={pizzaTypes}
			/>

			<p className='mb-3 font-bold'>Цена от и до:</p>
			<div className='flex gap-3 mb-5'>
				<Input
					type='number'
					placeholder='200'
					min={0}
					max={1000}
					value={price.priceFrom}
					onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
				/>
				<Input
					type='number'
					min={0}
					max={1000}
					placeholder='700'
					value={price.priceTo}
					onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
				/>
			</div>
			<RangeSlider
				min={0}
				max={1000}
				step={10}
				value={[price.priceFrom || 200, price.priceTo || 700]}
				onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
			/>
			<CheckboxFiltersGroup
				name='size'
				title='размер'
				className='mt-10'
				onClickCheckbox={toggleSize}
				items={[
					{ text: '26 см', value: '1' },
					{ text: '30 см', value: '2' },
					{ text: '40 см', value: '3' },
				]}
				selected={size}
			/>
			<CheckboxFiltersGroup
				name='ingredients'
				title='ингридиенты'
				className='mt-10'
				limit={5}
				onAddId={onAddId}
				selected={selected}
				onClickCheckbox={onAddId}
				loading={loading}
				defaultItems={items.slice(0, 5)}
				items={items}
				ingredients={true}
			/>
		</div>
	);
};
