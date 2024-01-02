---
title: sendMsg
author: huan_kong
createTime: 2023/07/01 21:18:20
permalink: /note/kkbot-js/libs/sendMsg
---

## 函数列表

### 1.快捷回复

函数名: `replyMsg`

函数参数:

| 字段      | 类型      | 说明               | 默认值      |
| --------- | --------- | ------------------ | ----------- |
| `context` | `Object`  | `context` 对象     | `undefined` |
| `message` | `String`  | 信息               | `undefined` |
| `action`  | `Object`  | 设置需要执行的操作 | `{}`        |
| `toEmoji` | `Boolean` | 是否转换为 emoji   | `true`      |

action:
| 字段    | 类型      | 说明             | 默认值  |
| ------- | --------- | ---------------- | ------- |
| `at`    | `Boolean` | 是否要 at 发送者 | `false` |
| `reply` | `Boolean` | 是否要用回复形式 | `false` |

### 2.发送私信

函数名: `sendMsg`

函数参数:

| 字段      | 类型      | 说明             | 默认值      |
| --------- | --------- | ---------------- | ----------- |
| `user_id` | `Number`  | `QQ` 号          | `undefined` |
| `message` | `String`  | 信息             | `undefined` |
| `toEmoji` | `Boolean` | 是否转换为 emoji | `true`      |

### 3.合并发送

函数名: `sendForwardMsg`

函数参数:

| 字段       | 类型      | 说明             | 默认值      |
| ---------- | --------- | ---------------- | ----------- |
| `context`  | `Object`  | `context` 对象   | `undefined` |
| `messages` | `Array`   | `CQNode` 对象    | `undefined` |
| `toEmoji`  | `Boolean` | 是否转换为 emoji | `true`      |

此方法可能不是一看就能用明白,详细请查看 [`go-cqhttp` 的文档](https://docs.go-cqhttp.org/cqcode/#合并转发)

### 4.消息反转义为 emoji

函数名: `parseToEmoji`

函数参数:

| 字段      | 类型     | 说明 | 默认值      |
| --------- | -------- | ---- | ----------- |
| `message` | `String` | 消息 | `undefined` |

默认是不处理对象的,如果需要处理对象的话,需要在对需要反转义的 `emoji` 处手动调用次方法
