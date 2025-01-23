"use client";
import React, { useEffect } from "react";
import { Title } from ".";
import { Input } from "@/components/ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { filtersHook } from "../hooks/useFilterCheckbox";
import qs from "qs";
import { useRouter } from "next/navigation";
import { useParams } from "../hooks/useParams";

interface Props {
	className?: string;
}

interface RangeProps {
	priceFrom?: number;
	priceTo?: number;
}
interface Filter extends RangeProps {
	ingredients: string[];
	size: string[];
	pizzaTypes: string[];
}
export const Filters: React.FC<Props> = ({ className }) => {
	const router = useRouter();
	const {
		price,
		setPrice,
		size,
		toggleSize,
		pizzaTypes,
		togglePizzaTypes,
		selectedIngredients,
		toggleIngredients,
	} = useParams();
	const { ingredients, loading } = filtersHook();
	const items = ingredients.map((item) => ({ text: item.name, value: String(item.id) }));

	const updatePrice = (name: keyof RangeProps, value: number) =>
		setPrice({
			...price,
			[name]: value,
		});

	useEffect(() => {
		const filter: Filter = {
			...price,
			ingredients: Array.from(selectedIngredients),
			size: Array.from(size),
			pizzaTypes: Array.from(pizzaTypes),
		};

		const querry = qs.stringify(filter, { arrayFormat: "comma" });
		router.push(`?${querry}`, {
			scroll: false,
		});
	}, [price, selectedIngredients, size, pizzaTypes]);

	return (
		<div className={className}>
			<Title
				text="Фильтрация"
				size="sm"
				className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
			/>
			<CheckboxFiltersGroup
				title={"Тип теста"}
				name={"types"}
				className="mb-4"
				onClickCheckbox={togglePizzaTypes}
				items={[
					{ text: "тонкое", value: "1" },
					{ text: "традиционное", value: "2" },
				]}
				selected={pizzaTypes}
			/>

			<p className="mb-3 font-bold">Цена от и до:</p>
			<div className="flex gap-3 mb-5">
				<Input
					type="number"
					placeholder="200"
					min={0}
					max={1000}
					value={price.priceFrom}
					onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
				/>
				<Input
					type="number"
					min={0}
					max={1000}
					placeholder="700"
					value={price.priceTo}
					onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
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
				name="size"
				title="размер"
				className="mt-10"
				onClickCheckbox={toggleSize}
				items={[
					{ text: "26 см", value: "1" },
					{ text: "30 см", value: "2" },
					{ text: "40 см", value: "3" },
				]}
				selected={size}
			/>
			<CheckboxFiltersGroup
				name="ingredients"
				title="ингридиенты"
				className="mt-10"
				limit={5}
				selected={selectedIngredients}
				onClickCheckbox={toggleIngredients}
				loading={loading}
				defaultItems={items.slice(0, 5)}
				items={items}
				ingredients={true}
			/>
		</div>
	);
};
