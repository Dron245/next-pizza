'use client';
import React from 'react';
import { Title } from '.';
import { Input } from '@/components/ui';
import { RangeSlider } from './RangeSlider';
import { CheckboxFiltersGroup } from './CheckboxFiltersGroup';
import { FilterCheckbox } from './FilterCheckbox';
import { filtersHook } from '../hooks/useFilterCheckbox';

interface Props {
	className?: string;
}

interface RangeProps {
	priceFrom: number;
	priceTo: number;
}
export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, selected, onAddId } = filtersHook();
	const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));
	const [price, setPrice] = React.useState<RangeProps>({
		priceFrom: 200,
		priceTo: 700,
	});
	const updatePrice = (name: keyof RangeProps, value: number) =>
		setPrice({
			...price,
			[name]: value,
		});
	return (
		<div className={className}>
			<Title
				text='Фильтрация'
				size='sm'
				className='mb-5 font-bold pb-4 border-b border-b-neutral-100'
			/>
			<div className='flex flex-col gap-4 mb-10'>
				<FilterCheckbox value='1' text='Можно собирать' />
				<FilterCheckbox value='2' text='Новинки' />
			</div>

			<p className='mb-3 font-bold'>Цена от и до:</p>
			<div className='flex gap-3 mb-5'>
				<Input
					type='number'
					placeholder='0'
					min={0}
					max={1000}
					value={price.priceFrom}
					// onChange={(e) => (console.log(e.target.value))}
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
				value={[price.priceFrom, price.priceTo]}
				onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
			/>
			<CheckboxFiltersGroup
				title='ингридиенты'
				className='mt-10'
				limit={5}
				onAddId={onAddId}
				selected={selected}
				onClickCheckbox={onAddId}
				name='ingredients'
				loading={loading}
				defaultItems={items.slice(0, 5)}
				items={items}
			/>
		</div>
	);
};
