import React from 'react';
import { Container } from './Container';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface Props {
 className?: string;
}
const cats = ['Все', 'Мясные', 'Острые', 'Сладкие', 'Вегетарианские', 'С курицей', 'Ещё ']
const activeId = 0
export const TopBar: React.FC<Props> = ({ className }) => {
  return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
		{
			cats.map((cat, index)=> (
				<a key={index} className={cn(
					'flex items-center font-bold h-11 rounded-2xl px-5',
					index === activeId && 'bg-white shadow-md shadow-gray-200 text-primary',
				 )}>
					{cat}
				</a>
			))
		}
		</div>
  );
};