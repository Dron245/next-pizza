"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import React from "react";
import { ProductWithRelations } from "@/@types/prisma";
import { cn } from "@/lib/utils";
import { ProductForm } from "..";

interface Props {
	className?: string;
	// product: Product;
	product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter();
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent aria-describedby={undefined}
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className
				)}>
				<DialogTitle className="hidden">Выбор продукта</DialogTitle>
				<ProductForm product={product} />
			</DialogContent>
		</Dialog>
	);
};
