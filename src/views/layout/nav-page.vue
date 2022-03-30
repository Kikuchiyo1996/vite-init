<template>
	<nav>
		<ul>
			<li>
				<el-button type="primary" @click="$router.push('/mall')">
					{{ $t('nav.mall') }}
				</el-button>
			</li>
			<li>
				<el-button type="warning" @click="$router.push('/community')">
					{{ $t('nav.community') }}
				</el-button>
			</li>

			<li>
				<ChangeLanguage />
			</li>
		</ul>
	</nav>
</template>
<script setup lang="ts">
import ChangeLanguage from '@/components/change-language.vue'
</script>

<style scoped lang="scss">
ul {
	display: flex;
	justify-content: center;
}
</style>
