
import { ChooseProductModal, ProductForm, ProductModal } from "@/app/shared";
import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
	where: {
		id: Number(params.id),
	},
	include: {
		ingredients: true,
		items: true,
	}
})
	if (!product) {
		return notFound();
	 }
  return (
   <ProductModal product={product}/>
  );
}
