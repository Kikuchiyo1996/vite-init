import { createI18n } from 'vue-i18n'
import LocalCache from '@utils/cache'
import messages from './languagePack/index'

// ! 默认语言=>读取浏览器的语言
const language = (navigator.language ? navigator.language.toLowerCase() : 'en').split('-')[0]

const i18n = createI18n({
	globalInjection: true,
	legacy: false,
	locale: LocalCache.getCache('language') || language,
	fallbackLocale: 'en',
	messages,
})

export default i18n
