"use client";
import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox";
import { Input, Skeleton } from "@/app/shared/components/ui";
type Item = FilterChecboxProps;
interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	className?: string;
	// selectedIds?: Set<string>;
	defaultValue?: string[];
	onClickCheckbox?: (id: string) => void;
	loading?: boolean;
	name?: string;
	onAddId?: (id: string) => void;
	selected?: Set<string>;
	ingredients?: boolean;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit,
	searchInputPlaceholder = "Поиск ...",
	className,
	onClickCheckbox,
	loading,
	name,
	selected,
	ingredients,
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	const list = showAll
		? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
		: (defaultItems || items).slice(0, limit);

	if (loading) {
		return (
			<>
				{Array(limit)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
					))}
				<Skeleton className="w-6 h-6 mb-4 rounded-[8px]" />
			</>
		);
	}
	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>
			{showAll && (
				<div className="mb-5">
					<Input
						name='search'
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}
			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item) => (
					<FilterCheckbox
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						checked={selected?.has(item.value)}
						key={String(item.value)}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						name={name}
					/>
				))}
			</div>
			<div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
				{ingredients && (
					<button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				)}
			</div>
		</div>
	);
};
