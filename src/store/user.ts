import { defineStore } from 'pinia'

export const useUserStore = defineStore({
	id: 'user',
	state: () => {
		return {
			name: '张三',
		}
	},
	actions: {
		updateName(name: string) {
			this.name = name
		},
	},
	getters: {
		fullName: (state) => {
			return '御风'
		},
	},
})
