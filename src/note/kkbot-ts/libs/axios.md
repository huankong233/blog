---
title: axios
author: huan_kong
createTime: 2023/12/07 21:55:51
permalink: /note/kkbot-ts/libs/axios
---

## 函数列表

### 1.自动重试Get请求

函数名: `retryGet`

函数参数：

| 字段     | 类型                | 说明     | 默认值      |
| -------- | ------------------- | -------- | ----------- |
| `url`    | `string`            | 请求地址 | `undefined` |
| `config` | [`config`](#config) | 请求参数 | `undefined` |

### 2.自动重试Post请求

函数名: `retryPost`

函数参数：

| 字段     | 类型                | 说明     | 默认值      |
| -------- | ------------------- | -------- | ----------- |
| `url`    | `string`            | 请求地址 | `undefined` |
| `config` | [`config`](#config) | 请求参数 | `undefined` |

### 3.自动重试Head请求

函数名: `retryHead`

函数参数：

| 字段     | 类型                | 说明     | 默认值      |
| -------- | ------------------- | -------- | ----------- |
| `url`    | `string`            | 请求地址 | `undefined` |
| `config` | [`config`](#config) | 请求参数 | `undefined` |

## 接口

### config

~~~ typescript
interface config extends AxiosRequestConfig {
  // 失败后重试次数
  times?: number
  // 失败后延迟时间
  ms?: number
}
~~~