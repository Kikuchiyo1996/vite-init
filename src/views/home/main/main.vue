<template>
	<div class="mainWrap">
		<div class="w">
			<img src="@/assets/home_Images/goods.png" />
		</div>
	</div>
</template>

<script setup lang="ts" name="Main">
import { ref, reactive } from 'vue'
</script>

<style lang="scss" scoped>
.mainWrap {
	background-color: black;
	overflow-y: scroll;
	.w {
		width: 50vw;
		height: auto;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
}
</style>
