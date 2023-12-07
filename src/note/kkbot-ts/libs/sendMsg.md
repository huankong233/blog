---
title: sendMsg
author: huan_kong
createTime: 2023/12/07 22:38:20
permalink: /note/kkbot-ts/libs/sendMsg
---

## 函数列表

### 1.回复消息

函数名: `replyMsg`

函数参数：

| 字段      | 类型                                                             | 说明               | 默认值      |
| --------- | ---------------------------------------------------------------- | ------------------ | ----------- |
| `context` | `CQEvent<'message'>['context']` \| [`fakeContext`](#fakecontext) | `context` 对象     | `undefined` |
| `message` | `string`                                                         | 信息               | `undefined` |
| `action`  | [`action`](#action)                                              | 设置需要执行的操作 | `{}`        |

### 2.发送私信

函数名: `sendMsg`

函数参数：

| 字段      | 类型      | 说明             | 默认值      |
| --------- | --------- | ---------------- | ----------- |
| `user_id` | `number`  | `QQ` 号          | `undefined` |
| `message` | `string`  | 信息             | `undefined` |
| `toEmoji` | `boolean` | 是否转换为 emoji | `true`      |

### 3.合并发送

函数名: `sendForwardMsg`

函数参数：

| 字段       | 类型                                                             | 说明           | 默认值      |
| ---------- | ---------------------------------------------------------------- | -------------- | ----------- |
| `context`  | `CQEvent<'message'>['context']` \| [`fakeContext`](#fakecontext) | `context` 对象 | `undefined` |
| `messages` | `Tags.CQNode[]`                                                  | `CQNode` 对象  | `undefined` |

此方法可能不是一看就能用明白,详细请查看 [`go-cqhttp` 的文档](https://docs.go-cqhttp.org/cqcode/#合并转发)

### 4.消息反转义为 emoji

函数名: `parseToEmoji`

函数参数：

| 字段      | 类型  | 说明 | 默认值      |
| --------- | ----- | ---- | ----------- |
| `message` | `any` | 消息 | `undefined` |

默认是不处理对象的,如果需要处理对象的话,需要在对需要反转义的 `emoji` 处手动调用次方法

## 接口列表

### fakeContext

~~~ typescript
type fakeContext = PrivateMessage | GroupMessage

interface PrivateMessage {
  message_type: 'private'
  user_id: number
  self_id?: number
  message_id?: number
}

interface GroupMessage {
  message_type: 'group'
  user_id: number
  self_id?: number
  group_id: number
  message_id?: number
}
~~~

### action

默认除了 `toEmoji` 都为 `false`

~~~ typescript
interface action {
  at: boolean
  reply: boolean
  toEmoji: boolean
}
~~~