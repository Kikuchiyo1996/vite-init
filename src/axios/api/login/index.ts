import cmRequest from '../../index'
import { IAccount } from './type'

export function accountLoginRequest(account: IAccount) {
	return cmRequest.post<responseType>({
		url: '/login',
		data: account,
	})
}
