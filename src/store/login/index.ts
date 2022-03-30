import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/axios/api/login'
import { IAccount } from '@/axios/api/login/type'

// 1. 定义容器、导出容器

export const useLoginStore = defineStore('login', {
	state: () => ({
		info: 'useLoginStore 可以使用',
		count: 0,
		token: '',
	}),

	getters: {
		count10(state) {},
	},
	actions: {
		async login(payload: IAccount) {
			const { data } = await accountLoginRequest(payload)
			this.token = data.token
		},
	},
})
