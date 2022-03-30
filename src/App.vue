<template>
	<el-config-provider :locale="languagePackCache">
		<!-- <Header v-if="isShowHeader" /> -->
		<Header v-if="isShowHeader" />

		<div class="main"><router-view v-wechat-title="route.meta.title" /></div>

		<Footer />
	</el-config-provider>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/store'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'

const route = useRoute()
const isShowHeader = computed(() => route.meta.isShowHeader ?? true)
const { languagePackCache } = storeToRefs(useLangStore())
</script>
<style scoped lang="scss">
.main {
	min-height: 100vh;
}
</style>
