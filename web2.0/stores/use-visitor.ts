import { create } from 'zustand'
import {  persist } from 'zustand/middleware'

interface useVisitorType {
	firstTime: boolean
	setVisited: () => void
}

export const useVisitor = create<useVisitorType>()(
		persist(
			(set) => ({
				firstTime: true,
				setVisited: () => set({ firstTime: false }),
			}),
			{
				name: 'first-time-user-store',
			}
		)
)