<template>
  <el-button type="primary">
    primary
    {{ test }}
  </el-button>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/user'

const test = ref('123')

const userStore = useUserStore()

userStore.updateName('123')
</script>
<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
