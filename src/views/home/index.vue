<template>
	<div class="indexWrap">
		<!-- <Header /> -->
		<Main />
		<!-- <Footer /> -->
	</div>
</template>

<script setup lang="ts" name="Index">
import { ref, reactive } from 'vue'
import Main from './main/main.vue'
</script>

<style lang="scss" scoped>
.indexWrap {
	width: 100%;
	min-height: 100vh;
	font-size: 16px;
}
</style>
