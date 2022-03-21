<template>
  <el-config-provider :locale="languagePackCache">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import langStore from '@/store/lang'
import { storeToRefs } from 'pinia'

const { languagePackCache } = storeToRefs(langStore())

</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
