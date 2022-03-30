<template>
	<el-select v-model="$i18n.locale" @change="handleChangeLang">
		<el-option v-for="item in allLanguages" :key="item" :value="item" />
	</el-select>
	<el-popconfirm title="Are you sure to delete this?">
		<template #reference>
			<el-button>Delete</el-button>
		</template>
	</el-popconfirm>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useLangStore } from '@/store'

const allLanguages = reactive(['zh', 'en'])

function handleChangeLang(val: string) {
	useLangStore().changGlobalLang(val)
}
</script>
<style scoped></style>
