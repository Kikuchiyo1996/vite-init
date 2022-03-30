import type { AxiosRequestConfig } from 'axios'

export interface requestInterceptors {
	// !请求拦截器
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestInterceptorCatch?: (error: any) => any
	// !响应拦截器
	responseInterceptor?: <T>(res: T) => T
	responseInterceptorCatch?: (error: any) => any
}
// ! 自定义参数
export interface requestConfig extends AxiosRequestConfig {
	interceptors?: requestInterceptors
	showLoading?: boolean
}
