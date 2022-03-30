import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import i18n from '@/lang/i18n'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { loginRouter } from './login'
import { communityRouter } from './community'
import { mallRouter } from './mall'
import { homeRouter } from './home'

const { t } = i18n.global

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/home',
	},
	...homeRouter,
	...loginRouter,
	...mallRouter,
	...communityRouter,
	{
		path: '/404',
		component: () => import('@/views/error-page/404.vue'),
		meta: {
			title: '404',
		},
	},
	{
		path: '/403',
		component: () => import('@/views/error-page/403.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404',
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
// ! 顶部进度条
router.beforeEach((to, from, next) => {
	NProgress.start()
	next()
})

router.afterEach(() => {
	NProgress.done()
})
export default router
