<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script setup lang="ts" name="Login">

import { useMainStore, useLoginStore } from '@/store'
import { storeToRefs } from 'pinia'
import LoginPanel from './components/login-panel.vue'

const mainStore = useMainStore()
const loginStore = useLoginStore()

const { info: maininfo } = storeToRefs(mainStore) // 结构pinia数据并成响应式
const { info: logininfo } = storeToRefs(loginStore) // 结构pinia数据并成响应式

console.log(maininfo.value, logininfo.value)
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('@/assets/login/login-bg.svg');
}
</style>
