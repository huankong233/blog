---
title: logger
author: huan_kong
createTime: 2023/12/07 22:26:08
permalink: /note/kkbot-ts/libs/logger
---

## 实例化方法

### 1.INFO/SUCCESS/WARNING/NOTICE/DEBUG

| 字段          | 类型  | 说明           | 默认值      |
| ------------- | ----- | -------------- | ----------- |
| `...messages` | `any` | 传入的输出内容 | `undefined` |

### 2.ERROR

可以判断当前是否为 `debug` 模式 来选择使用 `WARNING` 还是 `DEBUG`

| 字段          | 类型  | 说明           | 默认值      |
| ------------- | ----- | -------------- | ----------- |
| `...messages` | `any` | 传入的输出内容 | `undefined` |

### 3.changeSubModule

修改 `subModule` 名称并返回一个全新的 `Logger`

| 字段        | 类型     | 说明     | 默认值      |
| ----------- | -------- | -------- | ----------- |
| `subModule` | `string` | 副模块名 | `undefined` |

## 函数列表

### 1.makeLogger

函数名: `makeLogger`

函数参数:

| 字段     | 类型                            | 说明       | 默认值      |
| -------- | ------------------------------- | ---------- | ----------- |
| `params` | [`loggerParams`](#loggerparams) | 传入的参数 | `undefined` |

### 2.makeSystemLogger

函数名: `makeSystemLogger`

和函数 `makeLogger` 参数一致,但是 `type` 的默认值为 `SYSTEM`

## 接口列表

### loggerParams

~~~ typescript
interface loggerParams {
  pluginName: string
  subModule?: string
  type?: 'PLUGIN' | 'SYSTEM'
}
~~~
