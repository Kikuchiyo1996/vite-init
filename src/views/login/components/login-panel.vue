<template>
	<div class="login-panel">
		<h1 class="title">后台管理系统</h1>
		<el-tabs v-model="currentTab" type="border-card" stretch>
			<el-tab-pane name="account">
				<template #label>
					<span>
						<i class="el-icon-user-solid"></i>
						账号登录
					</span>
				</template>
				<LoginAccount ref="accountRefs" />
			</el-tab-pane>
			<el-tab-pane name="phone">
				<template #label>
					<span>
						<i class="el-icon-mobile-phone"></i>
						手机登录
					</span>
				</template>
				<LoginPhone ref="phoneRefs" />
			</el-tab-pane>
		</el-tabs>
		<div class="account-control">
			<el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
			<el-link type="primary">忘记密码</el-link>
		</div>
		<el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
	</div>
</template>

<script setup lang="ts" name="LoginPanel">
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { phoneRef, accountRef } from './type'

const currentTab = ref('account')
const isKeepPassword = ref(true)
const accountRefs = ref<accountRef>()
const phoneRefs = ref<phoneRef>()

const handleLoginClick = () => {
	if (currentTab.value === 'account') {
		accountRefs.value?.loginAction(isKeepPassword.value)
	}
}
</script>

<style lang="scss" scoped>
.login-panel {
	margin-bottom: 150px;
	width: 320px;

	.title {
		text-align: center;
	}

	.account-control {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}

	.login-btn {
		width: 100%;
		margin-top: 10px;
	}
}
</style>
