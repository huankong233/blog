---
title: getters
author: huan_kong
createTime: 2023/07/02 09:10:22
permalink: /note/pinia/learn/getters/
---

## 4.如何使用 `Getters`

`Getters` 自带缓存功能，不会重复调用

```typescript
export const useMainStore = defineStore('main', {
  // 用于存储数据
  state: () => {
    return {
      count: 0,
      arr: [1, 2, 3]
    }
  },
  // 类似计算属性
  getters: {
    moreCount(state) {
      return state.count + 10
    }
  },
  // 封装业务逻辑
  actions: {}
})
```

其中传入的 `state` 是可选参数

虽然可以用 `this` 替换，但是会影响 `ts` 的类型判断，需要手动指定数据类型，不推荐使用
