import Link from "next/link";
import React from "react";
import { Title } from ".";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";

export interface product {
	id: number;
	name: string;
	price: number;
	imageUrl?: string;
	className?: string;
}

export const ProductCard: React.FC<product> = ({ id, name, price, imageUrl, className }) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
					<img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
				</div>
			</Link>
			<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
			<p className="text-sm  font-normal text-gray-400">
				{" "}
				Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
			</p>
			<div className="flex items-center justify-between mt-3">
				<span className="text-[20px]">от <b>{price} ₽</b></span>
				<Button variant="secondary" className="text-base font-bold">
					<Plus size={20} className="w-5 h-5 mr-1" />
					Собрать
				</Button>
			</div>
		</div>
	);
};