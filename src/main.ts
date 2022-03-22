import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
import I18n from './lang/i18n'
import 'normalize.css'
import '@/styles/common.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {
	locale: navigator.language === 'en' ? en : zh,
})
app.use(I18n)
app.use(createPinia())
app.mount('#app')
