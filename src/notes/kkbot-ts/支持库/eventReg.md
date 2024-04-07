---
title: eventReg
author: huan_kong
createTime: 2023/12/07 22:04:27
permalink: /docs/kkbot-ts/支持库/eventReg/
---

## 函数列表

### 1.快捷注册事件处理函数

函数名: `eventReg`

函数参数:

| 字段       | 类型                                                                                                            | 说明                       | 默认值      |
| ---------- | --------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `type`     | `"message"` \| `"notice"` \| `"request"`                                                                        | 事件类型                   | `undefined` |
| `callback` | [`messageCallback`](#messagecallback) [`noticeCallback`](#noticecallback) [`requestCallback`](#requestcallback) | 事件被触发时需要执行的函数 | `undefined` |
| `priority` | `number`                                                                                                        | 调用时的顺序               | `1`         |

`priority` 的值越大越先执行

请最大不要超过 `100`

最小不要小于 `1`

### 2.快捷判断是否@了机器人

函数名: `haveAt`

函数参数:

| 字段          | 类型                      | 说明                      | 默认值      |
| ------------- | ------------------------- | ------------------------- | ----------- |
| `context`     | `SocketHandle['message']` | 事件返回的 `context` 对象 | `undefined` |
| `commandName` | `string`                  | 手动指定命令名            | `@`         |

返回值(匹配成功):

~~~json
{
  "name": "@",
  "params": []
}
~~~

返回值(匹配失败):

~~~json
false
~~~

### 3.格式化命令

函数名: `format`

函数参数:

| 字段      | 类型     | 说明 | 默认值      |
| --------- | -------- | ---- | ----------- |
| `message` | `string` | 消息 | `undefined` |

返回值 : [`commandFormat`](#commandformat) | `false`

### 4.缺少参数

函数名: `missingParams`

函数参数:

| 字段           | 类型                              | 说明                      | 默认值      |
| -------------- | --------------------------------- | ------------------------- | ----------- |
| `context`      | `SocketHandle['message']`         | 事件返回的 `context` 对象 | `undefined` |
| `command`      | [`commandFormat`](#commandformat) | 命令对象                  | `undefined` |
| `paramsLength` | `number`                          | 需要的参数长度            | `undefined` |

## 接口

## messageCallback

~~~ typescript
type messageCallback = (event: SocketHandle['message'],command: commandFormat | false) => Promise<undefined | any | 'quit'>
~~~

## noticeCallback

~~~typescript
type noticeCallback = (event: SocketHandle['notice']) => Promise<undefined | any | 'quit'>
~~~

## requestCallback

~~~typescript
type requestCallback = (event: SocketHandle['request']) => Promise<undefined | any | 'quit'>
~~~

## commandFormat

~~~ typescript
interface commandFormat {
  name: string
  params: string[]
}
~~~
