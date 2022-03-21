// service统一出口
import CMRequest from './api/index'

const cmRequest = new CMRequest({
  baseURL: import.meta.env.BASE_URL,
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
