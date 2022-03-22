<template>
  <el-select
    v-model="$i18n.locale"
    @change="handleChangeLang"
  >
    <el-option
      v-for="item in allLanguages"
      :key="item"
      :value="item"
    />
  </el-select>

  <el-popconfirm title="Are you sure to delete this?">
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import langStore from '@/store/lang'

const allLanguages = reactive(['cn', 'en'])

function handleChangeLang(val:string) {
 langStore().changGlobalLang(val)
}
</script>
<style scoped>

</style>
