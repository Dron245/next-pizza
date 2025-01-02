"use client";
import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox";
import { Button, Input } from "@/components/ui";
type Item = FilterChecboxProps;
interface Props {
	title: string;
	items: Item[];
	defaultItems: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	className?: string;
	// selectedIds?: Set<string>;
	defaultValue?: string[];
	onClickCheckbox?: (value: string[]) => void;
	loading?: boolean;
	name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = "Поиск ...",
	className,
	// selectedIds,
	onClickCheckbox,
	loading,
	name,
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	const list = showAll
		? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
		: defaultItems.slice(0, 5);
	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>
			{showAll && (
				<div className="mb-5">
					<Input
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}
			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item) => (
					<FilterCheckbox
						onCheckedChange={(itr) => console.log(itr)}
						checked={false}
						key={String(item.value)}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						name={name}
					/>
				))}
			</div>
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>

			<button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
				{showAll ? "Скрыть" : "+ Показать все"}
			</button>
				</div>
		</div>
	);
};
