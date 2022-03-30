<template>
	<div class="login-account">
		<el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
			<el-form-item label="账号" prop="name">
				<el-input v-model="account.name" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="account.password" show-password />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts" name="LoginAccount">
import type { ElForm } from 'element-plus'
import LocalCache from '@utils/cache'
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'

const account = reactive({
	name: LocalCache.getCache('name') ?? '',
	password: LocalCache.getCache('password') ?? '',
})
const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
	formRef.value?.validate((valid) => {
		if (valid) {
			// 1.判断是否需要记住密码
			if (isKeepPassword) {
				// 本地缓存
				LocalCache.setCache('name', account.name)
				LocalCache.setCache('password', account.password)
			} else {
				LocalCache.deleteCache('name')
				LocalCache.deleteCache('password')
			}
			console.log('点击了登录')
		}
	})
}

defineExpose({
	loginAction,
})
</script>
