<template>
  <el-config-provider :locale="languagePackCache">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import langStore from '@/store/lang'

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
