import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/components/change-language.vue'),
	},
	{
		path: '/demo',
		component: () => import('@/components/demo-test.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
