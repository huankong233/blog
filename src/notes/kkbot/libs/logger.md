---
title: logger
author: huan_kong
createTime: 2023/07/01 21:18:08
permalink: /note/kkbot/libs/logger
---

## 提示

推荐直接导入方式

## 变量列表

### 1.logger

变量名: `logger`

变量值:

```javascript
{
  INFO, SUCCESS, WARNING, NOTICE, DEBUG
}
```

## 函数列表

### 1.INFO

函数名: `INFO`

函数参数：

| 字段         | 类型     | 说明                        | 默认值      |
| ------------ | -------- | --------------------------- | ----------- |
| `...message` | `String` | 可以传入多个参数,都会被输出 | `undefined` |

### 2.SUCCESS

函数名: `SUCCESS`

函数参数:

和函数 [INFO](#_1-info) 一致

### 3.WARNING

函数名: `WARNING`

函数参数:

和函数 [INFO](#_1-info) 一致

### 4.NOTICE

函数名: `NOTICE`

函数参数:

和函数 [INFO](#_1-info) 一致

### 5.DEBUG

函数名: `DEBUG`

函数参数:

和函数 [INFO](#_1-info) 一致

### 6.获取时间

函数名: `getTime`

函数参数：

| 字段 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ------ |
