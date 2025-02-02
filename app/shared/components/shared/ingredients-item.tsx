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
	onclick?: () => void;
}

export const IngredientsItem: React.FC<Props> = ({
	className,
	name,
	imageUrl,
	price,
	active,
	onclick,
}) => {
	return (
		<div
			onClick={onclick}
			className={cn(
				"relative cursor-pointer p-2 w-32 flex flex-col items-center rounded-md text-sm shadow-md bg-white",
				{ "border border-primary rounded-sm": active }
			)}>
			<img className="w-[110px] h-[110px]" src={imageUrl} alt={name} />
			<p className="mt-2 text-center text-xs mb-1">{name}</p>
			<p className="font-bold">{price} ₽</p>
			{active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
		</div>
	);
};
