// service统一出口
import Request from './request'

const cmRequest = new Request({
	baseURL: import.meta.env.VITE_APP_API_URL,
	timeout: 5000,
	interceptors: {
		requestInterceptor: (config) => {
			const axiosConfig = config
			const token = localStorage.getItem('token')
			// ! 携带token的拦截
			if (token && axiosConfig.headers) {
				axiosConfig.headers.Authorization = `Bearer ${token}`
			}
			return axiosConfig
		},
		requestInterceptorCatch: (err) => err,
		responseInterceptor: (res) => res,
		responseInterceptorCatch: (err) => err,
	},
})

export default cmRequest
