---
title: retry
author: huan_kong
createTime: 2023/12/07 22:34:41
permalink: /note/kkbot-ts/支持库/retry/
---

## 函数列表

### 1.自动重试

函数名: `retryAsync`

函数参数:

| 字段    | 类型     | 说明               | 默认值      |
| ------- | -------- | ------------------ | ----------- |
| `func`  | `T`      | 需要执行的异步函数 | `undefined` |
| `times` | `number` | 失败后尝试的次数   | `3`         |
| `ms`    | `number` | 失败后延迟的时间   | `0`         |
