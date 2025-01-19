import React from "react";
import { Title } from ".";
import { Input } from "@/components/ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { FilterCheckbox } from "./FilterCheckbox";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	
	return (
		<div className={className}>
			<Title
				text="Фильтрация"
				size="sm"
				className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
			/>
			<div className="flex flex-col gap-4 mb-10">
				<FilterCheckbox value="1" text="Можно собирать" />
				<FilterCheckbox value="2" text="Новинки" />
			</div>

			<p className="mb-3 font-bold">Цена от и до:</p>
			<div className="flex gap-3 mb-5">
				<Input
					type="number"
					placeholder="0"
					min={0}
					max={1000} 
					defaultValue={0}
					// onChange={(e) => set('priceFrom', e.target.value)}
					// value={String(filters.priceFrom || 0)}
				/>
				<Input
					type="number"
					min={100}
					max={30000}
					placeholder="30000"
					// onChange={(e) => set('priceTo', e.target.value)}
					// value={String(filters.priceTo || 0)}
				/>
			</div>
			<RangeSlider min={0} max={1000} step={10} />
			<CheckboxFiltersGroup
				title="ингридиенты"
				className="mt-10"
				// limit={6}
				defaultItems={[
					{
						text: "Сырный соус",
						value: "3",
					},
					{
						text: "моцарелла",
						value: "4",
					},
					{
						text: "Чеснок",
						value: "5",
					},
					{
						text: "Солёные огурчики",
						value: "6",
					},
					{
						text: "Красный лук",
						value: "7",
					},
					{
						text: "Томаты",
						value: "8",
					},
				]}
				items={[
					{
						text: "Сырный соус",
						value: "3",
					},
					{
						text: "моцарелла",
						value: "4",
					},
					{
						text: "Чеснок",
						value: "5",
					},
					{
						text: "Солёные огурчики",
						value: "6",
					},
					{
						text: "Красный лук",
						value: "7",
					},
					{
						text: "Томаты",
						value: "8",
					},
					{
						text: "Томатыы",
						value: "9",
					},
				]}
			/>

		</div>
	);
};
