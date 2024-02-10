---
title: loadPlugin
author: huan_kong
createTime: 2023/06/30 18:31:37
permalink: /note/kkbot-js/支持库/loadPlugin/
---

## 函数列表

### 1.加载单个插件

函数名: `loadPlugin`

函数参数:

| 字段         | 类型   | 说明         | 默认值      |
| ------------ | ------ | ------------ | ----------- |
| `pluginName` | string | 插件文件夹名 | `undefined` |
| `pluginDir`  | string | 插件文件夹   | `"plugins"` |

### 2.加载多个插件

函数名: `loadPlugins`

函数参数:

| 字段        | 类型     | 说明         | 默认值      |
| ----------- | -------- | ------------ | ----------- |
| `plugins`   | `Array`  | 插件文件夹名 | `undefined` |
| `pluginDir` | `String` | 插件文件夹   | `"plugins"` |

### 3.加载文件夹内的所有插件

函数名: `loadPluginDir`

函数参数:

| 字段        | 类型     | 说明       | 默认值      |
| ----------- | -------- | ---------- | ----------- |
| `pluginDir` | `String` | 插件文件夹 | `undefined` |
