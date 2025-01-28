import React from 'react';
import { Categories, Container, SortPOpup } from '.';
import { cn } from '@/lib/utils';
import { Category } from './Categories';



interface Props {
	className?: string;
	categories: Category[]
}

export const TopBar: React.FC<Props> = ({categories, className }) => {
	return (
		<div className={cn(
				'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
				className
			)}
		>
			<Container className='flex justify-between items-center'>
				<Categories items={categories} />
				<SortPOpup />
			</Container>
		</div>
	);
};
