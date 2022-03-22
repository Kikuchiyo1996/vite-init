import { defineStore } from 'pinia'
import { ILoginState } from './types'

// 1. 定义容器、导出容器

export const useMainStore = defineStore('main', {
	state: () => ({
		info: 'useMainStore 可以使用',
		count: 0,
	}),

	getters: {
		count10(state) {},
	},

	actions: {},
})
