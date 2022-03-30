declare interface responseType<T = any> {
	code: number
	data?: T
	msg?: string
}
