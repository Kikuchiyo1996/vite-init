<template>
	<div class="headerWrap">
		<div class="main">
			<Left />
			<Center />
			<Right />
		</div>
	</div>
</template>

<script setup lang="ts" name="Header">
import { ref, reactive } from 'vue'
import Left from './components/left.vue'
import Center from './components/center.vue'
import Right from './components/right.vue'
</script>

<style lang="scss" scoped>
.headerWrap {
	height: 65px;
	background-color: #000;
	color: #fff;

	.main {
		z-index: 1000;
		background-color: #000;
		position: fixed;
		top: 0;
		height: 65px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		width: 100%;
		padding: 0 50px;
	}
}
</style>
