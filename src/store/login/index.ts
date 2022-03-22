import { defineStore } from 'pinia'
import { ILoginState } from './types'

// 1. 定义容器、导出容器

export const useLoginStore = defineStore('login', {
	state: () => ({
		info: 'useLoginStore 可以使用',
		count: 0,
	}),

	getters: {
		count10(state) {},
	},

	actions: {},
})
