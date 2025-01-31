import { ProductWithRelations } from "@/@types/prisma";
import React from "react";
import { ChoosePizzaForm, ChooseProductForm } from ".";

interface Props {
	className?: string;
	product: ProductWithRelations;
	onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, className }) => {
	const isPizza = Boolean(product.items[0].pizzaType);
	return (
		<>
			{isPizza ? (
				<ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
			) : (
				<ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
			)}
		</>
	);
};
