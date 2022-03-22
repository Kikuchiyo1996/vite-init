// service统一出口
import CMRequest from './api/index'

// console.log(import.meta.env.VITE_APP_API_URL)

const cmRequest = new CMRequest({
	// baseURL: import.meta.env.VITE_APP_API_URL,
	baseURL: 'http://127.0.0.1:4523/mock/413172',
	timeout: 1000,
	interceptors: {
		requestInterceptor: (config) =>
			// ! 携带token的拦截
			/* if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      } */
			config,
		requestInterceptorCatch: (err) => err,
		responseInterceptor: (res) => res,
		responseInterceptorCatch: (err) => err,
	},
})

export default cmRequest
