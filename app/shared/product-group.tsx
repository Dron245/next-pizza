'use client';
import React, { useEffect } from "react";
import { Title, ProductCard } from ".";
import { cn } from "@/lib/utils";
import { useIntersection } from 'react-use';
import { useCategoryStore } from "../store";
interface Props {
	className?: string;
	title: string;
	products: any[];
	categoryId: number;
	listClassName?: string;
}

export const ProductGroup: React.FC<Props> = ({
	title,
	products,
	listClassName,
	className,
	categoryId
}) => {
	const setActiveCategory = useCategoryStore((state) => state.setactiveId);
	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});
	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategory(categoryId);
		}
	}, [intersection, categoryId, title]);
	return (
		<div ref={intersectionRef} className={cn("[&:not(:last-child)]:mb-10", className)} id={title}>
			<Title text={title} size='lg' className="font-extrabold mb-5" />
			<div className={cn("grid grid-cols-3 gap-[50px]", className)}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						className={listClassName}
						price={product.items[0].price}
					/>
				))}
			</div>
		</div>
	);
};
