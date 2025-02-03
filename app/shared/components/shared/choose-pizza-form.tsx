"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { GroupVariants, IngredientsItem, PizzaImage, Title } from ".";
import { Button } from "@/app/shared/components/ui";
import { Ingredient, ProductItem } from "@prisma/client";
import {
	pizzaEntriesSizes,
	pizzaEntriesTypes,
	PizzaSizes,
	PizzaTypes,
} from "../../constants/pizza";
import { useSet } from "react-use";

interface Props {
	className?: string;
	imageUrl: string;
	name: string;
	ingredients: Ingredient[];
	items: ProductItem[];
	onclickAdd?: () => void;
}

export const ChoosePizzaForm: React.FC<Props> = ({
	name,
	imageUrl,
	className,
	ingredients,
}) => {
	const [pizzaSizeActive, setPizzaSizeActive] = React.useState<PizzaSizes>(30);
	const [pizzaTypeActive, setPizzaTypeActive] = React.useState<PizzaTypes>(1);
	const [selectedIngredients, { toggle: setActiveIngredients }] = useSet<number>();
	const totalPrice = 350;
	return (
		<div className={cn(className, "flex flex-1")}>
			<PizzaImage imageUrl={imageUrl} size={pizzaSizeActive} />
			<div className="w-[490px] bg-[#f7f6f5] p-7">
				<Title text={name} size="md" className="font-extrabold mb-1" />
				<p className="mt-2 mb-3"> flsdkf sldkfms ldkfm </p>
				<GroupVariants
					className="mb-3"
					items={pizzaEntriesSizes}
					value={String(pizzaSizeActive)}
					onClick={(size) => setPizzaSizeActive(Number(size) as PizzaSizes)}
				/>
				<GroupVariants
					className="mb-3"
					items={pizzaEntriesTypes}
					value={String(pizzaTypeActive)}
					onClick={(type) => setPizzaTypeActive(Number(type) as PizzaTypes)}
				/>
				<div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
					<div className="grid grid-cols-3 gap-3">
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
				<Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10" type="submit">
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	);
};
