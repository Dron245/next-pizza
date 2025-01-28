'use client';
import { cn } from "@/lib/utils";
import React, { act } from "react";
import { useCategoryStore } from "../store";
export type Category = {
	id:number,
	name:string
}
interface Props {
	className?: string;
	items: Category[]
}


export const Categories: React.FC<Props> = ({items, className }) => {
	const activeId = useCategoryStore((state) => state.activeId);
	return (
		<div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
			{items.map((cat, index) => (
				<a
					key={index}
					href={`/#${cat.name}`}
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5",
						cat.id === activeId && "bg-white shadow-md shadow-gray-200 text-primary"
					)}>
					<button>{cat.name}</button>
				</a>
			))}
		</div>
	);
};
