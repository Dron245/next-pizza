"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import React from "react";
import { ChooseProductModal } from "..";
import { ProductWithRelations } from "@/@types/prisma";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	// product: Product;
	product: ProductWithRelations;
}

export const ProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter();
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className
				)}>
				<ChooseProductModal product={product} />
			</DialogContent>
		</Dialog>
	);
};
