import i18n from '@/lang/i18n'

const { t } = i18n.global
export const homeRouter = [
	{
		path: '/home',
		name: 'home',
		meta: {
			title: t('home.title'),
		},
		component: () => import('@/views/home/index.vue'),
	},
	// {
	// 	path: '/mall',
	// 	name: 'mall',
	// 	meta: {
	// 		title: t('robosen_mall.title'),
	// 	},
	// 	component: () => import('@/views/robosen-mall/mall-home.vue'),
	// },
]
