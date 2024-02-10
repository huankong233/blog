---
title: fs
author: huan_kong
createTime: 2023/12/07 22:09:19
permalink: /note/kkbot-ts/支持库/fs/
---

## 函数列表

### 1.删除文件夹

函数名: `deleteFolder`

函数参数:

| 字段     | 类型     | 说明             | 默认值      |
| -------- | -------- | ---------------- | ----------- |
| `folder` | `string` | 需要删除的文件夹 | `undefined` |

### 2.下载文件

函数名: `downloadFile`

函数参数:

| 字段  | 类型     | 说明     | 默认值      |
| ----- | -------- | -------- | ----------- |
| `url` | `string` | 文件地址 | `undefined` |
| `ext` | `string` | 文件后缀 | `.png`      |

返回值: 下载完成后的绝对路径

### 3.删除指定数量的老文件

函数名: `deleteOldestFiles`

函数参数:

| 字段      | 类型     | 说明     | 默认值      |
| --------- | -------- | -------- | ----------- |
| `dirPath` | `string` | 文件路径 | `undefined` |
| `count`   | `number` | 删除数量 | `undefined` |

### 4.获取指定文件的base64

函数名: `getFileBase64`

函数参数:

| 字段  | 类型     | 说明     | 默认值      |
| ----- | -------- | -------- | ----------- |
| `url` | `string` | 文件地址 | `undefined` |
