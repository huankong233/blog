---
title: fs
author: huan_kong
createTime: 2023/07/10 08:49:19
permalink: /note/kkbot/libs/fs
---

## 函数列表

### 1.删除文件夹

函数名: `deleteFolder`

函数参数：

| 字段          | 类型  | 说明       | 默认值    |
| ------------- | ----- | ---------- | ---------- |
| `folder` | `String` | 需要删除的文件夹 | `undefined` |

### 2.下载文件

函数名: `downloadFile`

函数参数：

| 字段          | 类型  | 说明       | 默认值    |
| ------------- | ----- | ---------- | ---------- |
| `url` | `String` | 文件地址 | `undefined` |
| `ext` | `String` | 文件后缀 | `.png` |

返回值: 下载完成后的地址
