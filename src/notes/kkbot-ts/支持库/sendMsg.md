---
title: sendMsg
author: huan_kong
createTime: 2023/12/07 22:38:20
permalink: /docs/kkbot-ts/支持库/sendMsg/
---

## 函数列表

### 1.快捷操作

函数名: `quickOperation`

函数参数:

| 字段        | 类型                                                        | 说明           | 默认值      |
| ----------- | ----------------------------------------------------------- | -------------- | ----------- |
| `context`   | `SocketHandle['message']`                                   | `context` 对象 | `undefined` |
| `operation` | `WSSendParam['.handle_quick_operation_async']['operation']` | 操作           | `undefined` |

### 2.发送消息

函数名: `sendMsg`

函数参数:

| 字段      | 类型                                                                                            | 说明           | 默认值      |
| --------- | ----------------------------------------------------------------------------------------------- | -------------- | ----------- |
| `context` | `{ message_type: 'private'; user_id: number }` \| `{ message_type: 'group'; group_id: number }` | `context` 对象 | `undefined` |
| `message` | `string` \| `SendMessageArray` \| `SendMessageObject`                                           | 信息           | `undefined` |

### 3.合并发送

函数名: `sendForwardMsg`

函数参数:

| 字段       | 类型                                                                                            | 说明           | 默认值      |
| ---------- | ----------------------------------------------------------------------------------------------- | -------------- | ----------- |
| `context`  | `{ message_type: 'private'; user_id: number }` \| `{ message_type: 'group'; group_id: number }` | `context` 对象 | `undefined` |
| `messages` | `Tags.CQNode[]`                                                                                 | `CQNode` 对象  | `undefined` |

此方法可能不是一看就能用明白,详细请查看 [`go-cqhttp` 的文档](https://docs.go-cqhttp.org/cqcode/#合并转发)
