import { cn } from "@/lib/utils";
import { Ingredient } from "@prisma/client";
import { on } from "events";
import { CircleCheck } from "lucide-react";
import React, { act } from "react";
// import { useSet } from "react-use";

interface Props {
	className?: string;
	imageUrl: string;
	name: string;
	price: number;
	active?: boolean;
	onclickAdd?: () => void;
}

export const IngredientsItem: React.FC<Props> = ({
	className,
	name,
	imageUrl,
	price,
	active,
	onclickAdd,
}) => {
	return (
		<div
			onClick={onclickAdd}
			className={cn(
				"relative cursor-pointer p-1 w-32 flex flex-col items-center rounded-md text-sm shadow-md bg-white",
				{ "border border-primary rounded-sm": active }
			)}>
			<img className="w-16 h-16" src={imageUrl} alt={name} />
			<p className="text-xs mb-1">{name}</p>
			<p className="font-bold">{price} ₽</p>
			{active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
		</div>
	);
};
