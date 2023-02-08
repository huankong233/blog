---
title: reply
date: 2023-02-08
---

### sendMsg

发送私信

#### 参数

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `who`     | number | 收信人     |
| `message` | string | 信息     |

#### 返回数据

message_id

### replyMsg

回复消息

#### 参数

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `context`     | object | 消息对象     |
| `message`     | number | 回复内容     |
| `at`     | boolean | 是否at发送者     |
| `reply`     | boolean | 是否使用回复形式     |

#### 返回数据

message_id

### send_forward_msg

合并信息发送

#### 参数

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `context`     | object | 消息对象     |
| `message`     | number | 回复内容     |

#### 返回数据

message_id
