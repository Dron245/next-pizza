import Image from 'next/image';
import React from 'react';
import { CartButton, CartDrawer, Container, SearchInput } from '.';
import { Button } from '@/app/shared/components/ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<Container className='flex items-center justify-between py-8'>
			<Link href='/' className='flex items-center gap-4'>
				<Image src='/logo.png' alt='Лого' width={35} height={35} />
				<div>
					<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
					<p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
				</div>
			</Link>

			<SearchInput className='mx-10 flex-1' />
			<div className='flex items-center gap-3'>
				<Button className='gap-1 items-center' variant={'outline'}>
					<User />
					<b>Войти</b>
				</Button>
				<CartButton />
			</div>
		</Container>
	);
};
