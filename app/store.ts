import { create } from 'zustand'

interface CategoryState {
	activeId: number
	setactiveId: (activeId: number) => void
}

export const useCategoryStore = create<CategoryState>()((set) => ({
	activeId: 1,
	setactiveId: (activeId: number) => set({ activeId }),
}))