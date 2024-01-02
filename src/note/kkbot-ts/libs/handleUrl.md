---
title: handleUrl
author: huan_kong
createTime: 2023/12/07 22:14:54
permalink: /note/kkbot-ts/libs/handleUrl
---

## 变量列表

### 1.被屏蔽的地址

变量名: `bannedHosts`

变量值:

~~~ typescript
['danbooru.donmai.us', 'konachan.com', 'fanbox.cc', 'pixiv.net']
~~~

## 函数列表

### 1.链接混淆

函数名: `confuseURL`

函数参数:

| 字段    | 类型      | 说明           | 默认值      |
| ------- | --------- | -------------- | ----------- |
| `url`   | `string`  | 需要混淆的链接 | `undefined` |
| `force` | `boolean` | 是否强制修改   | `false`     |

### 2.缩短 `pixiv` 链接

函数名: `pixivShorten`

函数参数:

| 字段  | 类型     | 说明                      | 默认值      |
| ----- | -------- | ------------------------- | ----------- |
| `url` | `string` | 需要缩短的 `pixiv` 的链接 | `undefined` |

### 3.去除 `QQ` 的追踪参数

函数名: `getUniversalImgURL`

函数参数:

| 字段  | 类型     | 说明       | 默认值 |
| ----- | -------- | ---------- | ------ |
| `url` | `string` | 图片的链接 | `""`   |
