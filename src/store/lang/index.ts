import { defineStore } from 'pinia'
import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

export const useLangStore = defineStore('lang', {
	state: () => ({
		currentLang: 'zh',
		languagePack: zh,
		languages: [
			{
				name: 'zh',
				languagePack: zh,
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
