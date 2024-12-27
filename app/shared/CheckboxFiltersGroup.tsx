import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './FilterCheckbox';
import { Input } from '@/components/ui';
type Item = FilterChecboxProps;
interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	className?: string;
	selectedIds?: Set<string>;
	onClickCheckbox?: (value: string) => void;
	loading?: boolean;
	name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 6,
	searchInputPlaceholder = 'Поиск ...',
	className,
	selectedIds,
	onClickCheckbox,
	loading,
	name,
}) => {
	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>
			<div className='mb-5'>
				<Input placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
			</div>
			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{items.map((item) => (
					<FilterCheckbox
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						checked={selectedIds?.has(item.value)}
						key={String(item.value)}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						name={name}
					/>
				))}
			</div>
		</div>
	);
};
