---
title: logger
author: huan_kong
createTime: 2023/07/01 21:18:08
permalink: /note/kkbot-js/libs/logger
---

## 函数列表

### 1.makeLogger

函数名: `makeLogger`

函数参数:

| 字段     | 类型     | 说明       | 默认值      |
| -------- | -------- | ---------- | ----------- |
| `params` | `Object` | 传入的参数 | `undefined` |

`params` :

| 字段         | 类型     | 说明           | 默认值      |
| ------------ | -------- | -------------- | ----------- |
| `pluginName` | `String` | 插件名         | `undefined` |
| `subModule`  | `String` | 插件附属组件名 | `undefined` |
| `type`       | `String` | logger 的类型  | `PLUGIN`    |

### 2.makeSystemLogger

函数名: `makeSystemLogger`

和函数 `makeLogger` 参数一致,但是 `type` 的默认值为 `SYSTEM`
