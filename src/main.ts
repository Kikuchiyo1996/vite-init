import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import App from './App.vue'
import router from './router/index'
import store from './store'
// import 'element-plus/dist/index.css'
import I18n from './lang/i18n'

localStorage.setItem('currentLang', 'cn')
const app = createApp(App)
app.use(router)
  .use(store)
  .use(ElementPlus, {
    locale: navigator.language === 'en' ? en : zh,
  })
  .use(I18n)
  .mount('#app')
