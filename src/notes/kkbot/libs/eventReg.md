---
title: eventReg
author: huan_kong
createTime: 2023/07/01 21:17:27
permalink: /note/kkbot/libs/eventReg
---

## 函数列表

### 1.快捷注册事件处理函数

函数名: `eventReg`

函数参数：

| 字段       | 类型                               | 说明                       | 默认值      |
| ---------- | ---------------------------------- | -------------------------- | ----------- |
| `type`     | `"message"` `"notice"` `"request"` | 事件类型                   | `undefined` |
| `callback` | `Function`                         | 事件被触发时需要执行的函数 | `undefined` |
| `priority` | `Number`                           | 调用时的顺序               | `1`         |

`priority` 的值越大越先执行

请最大不要超过 `100`

最小不要小于 `1`

### 2.快捷判断是否@了机器人

函数名: `haveAt`

函数参数：

| 字段          | 类型     | 说明                      | 默认值      |
| ------------- | -------- | ------------------------- | ----------- |
| `context`     | `Object` | 事件返回的 `context` 对象 | `undefined` |
| `commandName` | `String` | 手动指定命令名            | `@`         |

返回值(匹配成功):

```json
{
  "name": "@",
  "params": []
}
```

返回值(匹配失败):

```json
false
```

### 3.格式化命令

函数名: `format`

函数参数：

| 字段      | 类型     | 说明 | 默认值      |
| --------- | -------- | ---- | ----------- |
| `message` | `String` | 消息 | `undefined` |

返回值(是命令):

```json
{
  "name": "name",
  "params": ["123", "234"]
}
```

返回值(不是命令):

```json
false
```

### 3.缺少参数

函数名: `missingParams`

函数参数：

| 字段           | 类型     | 说明                      | 默认值      |
| -------------- | -------- | ------------------------- | ----------- |
| `context`      | `Object` | 事件返回的 `context` 对象 | `undefined` |
| `params`       | `Array`  | 参数的数组                | `undefined` |
| `paramsLength` | `Number` | 需要的参数长度            | `undefined` |
