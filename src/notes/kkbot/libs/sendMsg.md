---
title: sendMsg
author: huan_kong
createTime: 2023/07/01 21:18:20
permalink: /note/kkbot/libs/sendMsg
---

## 函数列表

### 1.快捷回复

函数名: `replyMsg`

函数参数：

| 字段          | 类型  | 说明       | 默认值    |
| ------------- | ----- | ---------- | ---------- |
| `context` | `Object` | `context` 对象 | `undefined` |
| `message` | `String` | 信息 | `undefined` |
| `at` | `Boolean` | 是否要at发送者 | `undefined` |
| `reply` | `Boolean` | 是否要用回复形式 | `undefined` |

### 2.发送私信

函数名: `sendMsg`

函数参数：

| 字段          | 类型  | 说明       | 默认值    |
| ------------- | ----- | ---------- | ---------- |
| `user_id` | `Number` | `QQ` 号 | `undefined` |
| `message` | `String` | 信息 | `undefined` |

### 3.合并发送

函数名: `sendForwardMsg`

函数参数：

| 字段          | 类型  | 说明       | 默认值    |
| ------------- | ----- | ---------- | ---------- |
| `context` | `Object` | `context` 对象 | `undefined` |
| `messages` | `Array` | `CQNode` 对象 | `undefined` |

此方法可能不是一看就能用明白,详细请查看 [`go-cqhttp` 的文档](https://docs.go-cqhttp.org/cqcode/#合并转发)
