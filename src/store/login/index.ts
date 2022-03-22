import { ILoginState } from './types'


import { defineStore } from 'pinia'
// 1. 定义容器、导出容器

export const useLoginStore = defineStore('login', {

  state: () => {
    return {
      info: 'useLoginStore 可以使用',
      count: 0
    }
  },

  getters: {

    count10(state) {
      return (state.count += 10)
    }
  },

  actions: {}
})
