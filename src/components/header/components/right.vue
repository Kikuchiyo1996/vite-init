<template>
	<div class="rightWrap">
		<ul>
			<li><img src="@/assets/home_Images/search.svg" alt="" /></li>
			<li><img src="@/assets/home_Images/menu.svg" alt="" /></li>
			<li><img src="@/assets/home_Images/user.svg" alt="" /></li>
			<li>
				<el-dropdown @command="chageLanguage">
					<span class="el-dropdown-link">
						<img src="@/assets/home_Images/language.svg" />
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item command="zh">简体中文</el-dropdown-item>
							<el-dropdown-item command="en">English</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="Right">
import LocalCache from '@utils/cache'
import { useLangStore } from '@/store'
import { useI18n } from 'vue-i18n'

const langStore = useLangStore()
const { locale } = useI18n()
const chageLanguage = (command: string) => {
	locale.value = command
	langStore.changGlobalLang(command)
	LocalCache.setCache('language', command)
	// window.location.reload()
}
</script>

<style lang="scss" scoped>
.rightWrap {
	width: 250px;

	ul {
		display: flex;
		li {
			padding: 0 20px;
			img {
				cursor: pointer;
				width: 24px;
				height: 24px;
			}
		}
	}
}
</style>
