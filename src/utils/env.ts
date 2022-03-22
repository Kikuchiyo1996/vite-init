let baseURL:string = '';
if (process.env.NODE_ENV === 'development') {
	baseURL = 'http://192.168.1.11:3000';
}
export { baseURL };
