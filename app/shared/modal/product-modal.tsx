'use client';
import { Dialog } from '@/components/ui';
import { DialogContent } from '@/components/ui/dialog';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ChooseProductModal } from '..';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
	className?: string;
	// product: Product;
	product: ProductWithRelations;
}

export const ProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter();
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className='p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden'>
				<ChooseProductModal product={product} />
			</DialogContent>
		</Dialog>
	);
};
