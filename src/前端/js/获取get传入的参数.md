---
title: 获取get传入的参数
author: huan_kong
createTime: 2022/12/06 12:31:58
permalink: /article/wxx39179/
tags:
  - 前端
  - js
---

## 实现方法

::: tip 2023/11/27 更新
优先使用 `原生支持` 的方法
:::

主要是基于 `window.location.search` 变量
返回内容 `'?from=1&to=3&date=2022-12-06&class=2&passengers=2'`
所以需要截掉 `?`
可以使用 `window.location.search.substring(1)` 来实现

### 原生实现

[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)

``` js
const urlParams = new URLSearchParams(location.search)
// 需要获取指定的参数就只需要 ↓
urlParams.get('id')
```

### 获取指定参数方法

``` js
function getQueryVariable(variable) {
  let query = window.location.search.substring(1)
  let vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=')
    if (pair[0] === variable) return pair[1]
  }
  return false
}
```

### 获取所有参数

``` js
function getAllQueryVariable() {
  let query = window.location.search.substring(1)
  let vars = query.split('&')
  let temp = {}
  vars.forEach(item => {
    let pair = item.split('=')
    temp[pair[0]] = pair[1]
  })
  return temp
}
```
