---
title: fetch
author: huan_kong
createTime: 2023/07/01 21:17:35
permalink: /note/kkbot-js/libs/fetch
---

## 变量列表

### 1.默认超时时间

变量名: `TIMEOUT`

变量值:

```javascript
60 * 1000
```

## 函数列表

### 1.不带重试的 Get 请求

函数名: `fetchGet`

函数参数：

| 字段  | 类型     | 说明         | 默认值 |
| ----- | -------- | ------------ | ------ |
| `req` | `Object` | 请求参数设置 | `{}`   |

req:
| 字段      | 类型     | 说明              | 默认值      |
| --------- | -------- | ----------------- | ----------- |
| `url`     | `Object` | 请求的链接        | `undefined` |
| `data`    | `Object` | 请求携带的数据    | `{}`        |
| `timeOut` | `Object` | 超时时间(单位:ms) | `60 * 1000` |
| `headers` | `Object` | 自定义头部信息    | `undefined` |

### 2.不带重试的 Post 请求

函数名: `fetchPost`

函数参数：

和 [fetchGet](#_1-不带重试的get请求) 参数一致

### 3.异步重试

函数名: `retryAsync`

函数参数:

| 字段        | 类型       | 说明           | 默认值      |
| ----------- | ---------- | -------------- | ----------- |
| `func`      | `Function` | 需要执行的函数 | `undefined` |
| `times`     | `Number`   | 需要重试的次数 | `3`         |
| `sleepTime` | `Number`   | 失败后等待时间 | `0`         |

### 4.带重试的 Get 请求

函数名: `get`

函数参数：

| 字段    | 类型     | 说明         | 默认值      |
| ------- | -------- | ------------ | ----------- |
| `req`   | `Object` | 请求参数设置 | `{}`        |
| `times` | `Number` | 重试的次数   | `undefined` |

req:

和 [fetchGet](#_1-不带重试的get请求) 参数一致

### 4.带重试的 Post 请求

函数名: `post`

函数参数：

和 [get](#_4-带重试的get请求) 参数一致
