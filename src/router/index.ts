import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@components/change-language.vue'),
	},
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
