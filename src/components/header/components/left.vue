<template>
	<div class="leftWrap">
		<div class="logo">
			<img src="@/assets/home_Images/logo.png" @click="router.push('/')" />
		</div>
		<div class="shop">
			<img src="@/assets/home_Images/shop.svg" @click="router.push('/mall')" />
		</div>
	</div>
</template>

<script setup lang="ts" name="Left">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<style lang="scss" scoped>
.leftWrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 250px;

	.logo {
		img {
			cursor: pointer;
			width: 125px;
			height: 38px;
		}
	}
	.shop {
		img {
			cursor: pointer;
			width: 24px;
			height: 24px;
		}
	}
}
</style>
