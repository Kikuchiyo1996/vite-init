import { defineStore } from 'pinia'

import cn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

export default defineStore({
	id: 'lang',
	state: () => ({
		currentLang: 'cn',
		languagePack: cn,
		languages: [
			{
				name: 'cn',
				languagePack: cn,
			},
			{
				name: 'en',
				languagePack: en,
			},
		],
		}),
	actions: {
		// 切换语言包
		changGlobalLang(val: string) {
			this.currentLang = val
			this.languagePack = this.languages.filter((item) => item.name === val)[0].languagePack
		},
	},
	getters: {
		languagePackCache: (state) => state.languagePack,
	},
})
