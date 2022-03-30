import type { ElForm } from 'element-plus'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export type formRef = InstanceType<typeof ElForm>
export type accountRef = InstanceType<typeof LoginAccount>
export type phoneRef = InstanceType<typeof LoginPhone>
