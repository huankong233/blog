---
title: Action
author: huan_kong
createTime: 2023/07/02 09:10:08
permalink: /notes/pinia/学习/action/
---

## 使用 `Action`

~~~typescript
// store.ts
export const useMainStore = defineStore('main', {
  // 用于存储数据
  state: () => {
    return {
      count: 0,
      arr: [1, 2, 3]
    }
  },
  // 类似计算属性
  getters: {},
  // 封装业务逻辑
  actions: {
    changeArr(number: number) {
      this.count += number
      this.arr.push(123)
    }
  }
})

// HelloWorld.vue
function changeCount(number: number) {
  mainStroe.changeArr(number)
}
~~~
