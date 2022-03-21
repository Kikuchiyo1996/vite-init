import { createI18n } from 'vue-i18n'
import messages from './index'

// ! 默认语言=>读取浏览器的语言
const language =
	navigator.language ? navigator.language : 'en'
.toLowerCase()

const i18n = createI18n({
	fallbackLocale: 'cn',
	globalInjection: true,
	legacy: false,
	locale: language.split('-')[0] || 'cn',
	messages,
})

export default i18n
