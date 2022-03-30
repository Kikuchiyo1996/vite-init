import cmRequest from '@/axios/index'
import { Method } from 'axios'
import { originalCommodityType, preSaleCommodityList, shoppingCartType } from './type'

// 原创商品
export function getOriginalCommodityList(payload: originalCommodityType) {
	return cmRequest.request<responseType>({
		url: '/commodity-list/original',
		params: payload,
		method: 'GET',
	})
}
// 预售商品
export function getPreSaleCommodityList(payload: preSaleCommodityList) {
	return cmRequest.request<responseType>({
		url: '/commodity-list/pre-sale',
		params: payload,
		method: 'GET',
	})
}
// 购物车商品
export function shoppingCart(method: Method, payload: shoppingCartType) {
	return cmRequest.request<responseType>({
		url: '/commodity-list/shopping-cart',
		params: payload,
		method,
	})
}
