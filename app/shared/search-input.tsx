"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
interface Props {
	className?: string;
}
export const SearchInput: React.FC<Props> = ({ className }) => {
	const [focus, setFocus] = useState(false);
	return (
		<div className={cn("relative mx-10 z-40", className)}>
			{focus && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>}
			<div className="relative z-40 group">
				<Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
				<input
					type="text"
					onFocus={() => setFocus(true)}
					className=" text-gray-300 bg-gray-100  text-sm rounded-sm hover:bg-gray-200 block w-full pl-10 p-2.5"
					placeholder="Поиск пиццы..."
				/>
			</div>
			<div
				className={cn(
					"absolute left-0  mt-4 w-full top-2 border-gray-200 shadow-lg rounded-sm p-4 opacity-0 translate-y-4 transition-all duration-300 ease-in-out ",
					focus && "bg-white visible opacity-100  z-40 top-0"
				)}>
				123
			</div>
		</div>
	);
};
