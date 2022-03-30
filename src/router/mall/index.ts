import i18n from '@/lang/i18n'

const { t } = i18n.global
export const mallRouter = [
	{
		path: '/mall',
		name: 'mall',
		meta: {
			title: t('mall.original_title'),
		},
		component: () => import('@/views/robosen-mall/original-commodity.vue'),
	},
	{
		path: '/pre-sale',
		name: 'pre-sale',
		meta: {
			title: t('mall.presale_title'),
		},
		component: () => import('@/views/robosen-mall/presale-commodity.vue'),
	},
	{
		path: '/shopping-cart',
		name: 'shopping-cart',
		meta: {
			title: t('mall.shopping_cart_title'),
		},
		component: () => import('@/views/robosen-mall/shopping-cart.vue'),
	},
]
