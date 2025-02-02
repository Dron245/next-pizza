'use client';
import React from 'react';
import { Title } from '.';
import { Input } from '@/app/shared/components/ui';
import { RangeSlider } from './RangeSlider';
import { CheckboxFiltersGroup } from './CheckboxFiltersGroup';
import { useQuery, useIngredients, useFilters } from '../../hooks';

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const filters = useFilters();
	
	useQuery(filters)
	const { ingredients, loading } = useIngredients();
	const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));
	const updatePricesRange = (prices: number[]) => {
		filters.updatePrices('priceFrom', prices[0]);
		filters.updatePrices('priceTo', prices[1]);
	};
	
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
				onClickCheckbox={filters.togglePizzaTypes}
				items={[
					{ text: 'тонкое', value: '1' },
					{ text: 'традиционное', value: '2' },
				]}
				selected={filters.pizzaTypes}
			/>

			<p className='mb-3 font-bold'>Цена от и до:</p>
			<div className='flex gap-3 mb-5'>
				<Input
					type='number'
					name='priceTo'
					placeholder='200'
					min={0}
					max={1000}
					value={filters.prices.priceFrom}
					onChange={(e) => filters.updatePrices('priceFrom', Number(e.target.value))}
				/>
				<Input
					type='number'
					name='priceFrom'
					min={0}
					max={1000}
					placeholder='700'
					value={filters.prices.priceTo}
					onChange={(e) => filters.updatePrices('priceTo', Number(e.target.value))}
				/>
			</div>
			<RangeSlider
				min={0}
				max={1000}
				step={10}
				value={[filters.prices.priceFrom || 200, filters.prices.priceTo || 700]}
				onValueChange={updatePricesRange}
			/>
			<CheckboxFiltersGroup
				name='size'
				title='размер'
				className='mt-10'
				onClickCheckbox={filters.toggleSize}
				items={[
					{ text: '26 см', value: '1' },
					{ text: '30 см', value: '2' },
					{ text: '40 см', value: '3' },
				]}
				selected={filters.sizes}
			/>
			<CheckboxFiltersGroup
				name='ingredients'
				title='ингридиенты'
				className='mt-10'
				limit={5}
				selected={filters.selectedIngredients}
				onClickCheckbox={filters.toggleIngredients}
				loading={loading}
				defaultItems={items.slice(0, 5)}
				items={items}
				ingredients={true}
			/>
		</div>
	);
};
