import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { loginRouter } from './login'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/views/layout/nav-page.vue'),
	},
	...loginRouter,
	{
		path: '/404',
		component: () => import('@/views/error-page/404.vue'),
	},
	{
		path: '/401',
		component: () => import('@/views/error-page/401.vue'),
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
