import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { useRoute, useRouter } from 'vue-router'

import { ElLoading, ElMessage } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import type { requestInterceptors, requestConfig } from './types'

const router = useRouter()
const route = useRoute()

/**
 *  ! 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
	router.replace({
		path: '/login',
		query: {
			redirect: route.fullPath,
		},
	})
}
/**
 * ! 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 * @param {String} message 请求失败的提示
 */
const errorHandle = (status: string, msg?: string) => {
	if (status >= '3000' && status <= '6000') {
		ElMessage({
			message: msg,
			type: 'warning',
		})
	}
	switch (status) {
		case '4001':
			toLogin()
			break
		case '4003':
			setTimeout(() => {
				useRouter().push('/403')
			}, 1000)
			break
		default:
			break
	}
}
class HttpRequest {
	instance: AxiosInstance

	interceptors?: requestInterceptors

	showLoading: boolean

	loading?: LoadingInstance

	constructor(config: requestConfig) {
		// 创建axios实例
		this.instance = axios.create(config)

		// 保存基本信息
		this.showLoading = config.showLoading ?? true
		this.interceptors = config.interceptors

		// ! 公用拦截器
		this.instance.interceptors.request.use(
			(interceptorsConfig) => {
				if (this.showLoading) {
					this.loading = ElLoading.service({
						lock: true,
						text: 'loading....',
						background: 'rgba(0, 0, 0, 0.5)',
					})
				}
				return interceptorsConfig
			},
			(err) => err,
		)

		// ! 自定义拦截器
		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCatch,
		)
		// ! 全局响应拦截器
		this.instance.interceptors.response.use(
			(res) => {
				// 将loading移除
				setTimeout(() => {
					this.loading?.close()
				}, 500)
				const { data } = res
				errorHandle(data.code)
				return data
			},
			(err) => {
				this.loading?.close()
				return err
			},
		)
	}

	request<T>(config: requestConfig): Promise<T> {
		return new Promise((resolve, reject) => {
			let axiosConfig = config
			// ! 针对单个请求的拦截器
			if (axiosConfig.interceptors?.requestInterceptor) {
				axiosConfig = axiosConfig.interceptors.requestInterceptor(axiosConfig)
			}

			// 判断是否需要显示loading
			if (axiosConfig.showLoading === false) {
				this.showLoading = axiosConfig.showLoading
			}

			this.instance
				.request<any, T>(axiosConfig)
				.then((res) => {
					let responseData = res
					// ! 单个请求的响应拦截
					if (axiosConfig.interceptors?.responseInterceptor) {
						responseData = axiosConfig.interceptors.responseInterceptor<T>(res)
					}
					// 复原loading状态
					this.showLoading = true
					resolve(responseData)
				})
				.catch((err) => {
					this.showLoading = true
					reject(err)
					return err
				})
		})
	}

	get<T>(config: requestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'GET' })
	}

	post<T>(config: requestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'POST' })
	}

	delete<T>(config: requestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'DELETE' })
	}

	patch<T>(config: requestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'PATCH' })
	}
}

export default HttpRequest
