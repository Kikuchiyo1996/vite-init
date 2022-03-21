import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CMRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface CMRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: CMRequestInterceptors<T>
  showLoading?: boolean
}
