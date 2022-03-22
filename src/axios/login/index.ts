import cmRequest from '../index'
import { IDataType } from '../resposenTypes'
import { IAccount } from './type'

export function accountLoginRequest(account: IAccount) {
	return cmRequest.post<IDataType>({
		url: '/login',
		data: account,
	})
}
