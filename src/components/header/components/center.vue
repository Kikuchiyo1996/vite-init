<template>
	<div class="centerWrap">
		<ul class="navList">
			<li
				v-for="(item, index) in headerList"
				:key="index"
				:class="{ active: activeIndex == index }"
				@click="activeIndex = index"
			>
				{{ item.title }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="Center">
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { HeaderList } from '@/lang/home/types'

const { tm } = useI18n()
const activeIndex = ref<number>()
const headerList = computed(() => reactive(tm('home.headerList') as Array<HeaderList>))
</script>

<style lang="scss" scoped>
.centerWrap {
	height: 100%;
	.navList {
		box-sizing: border-box;
		padding: 10px 0;
		height: 100%;
		display: flex;
		align-items: center;
		li {
			display: flex;
			align-items: center;
			height: 100%;
			transition: all 0.3s;
			cursor: pointer;
			box-sizing: border-box;
			padding: 0 1.5vw;
			border-radius: 5px;
			&:hover {
				color: rgba(193, 197, 201, 0.726);
			}
		}
		.active {
			background-color: rgba(89, 182, 243, 0.726);
		}
	}
}
</style>
