---
title: loadConfig
author: huan_kong
createTime: 2023/06/30 18:31:37
permalink: /note/kkbot/libs/loadConfig
---

## 函数列表

### 1.加载单个配置文件

函数名: `loadConfig`

函数参数：

| 字段          | 类型  | 说明       | 默认值    |
| ------------- | ----- | ---------- | ---------- |
| `configName` | `String` | `config` 名字 | `undefined` |
| `RegToGlobal` | `Boolean` | 是否加载到全局 | `true` |
| `configPath` | `String` | 配置文件所在的位置 | `"./config"` |
| `_pluginName` | `String` `null` | 用于在插件加载时自动加载配置文件 <br> (手动加载请勿使用此参数!!!) | `null` |

### 2.加载多个配置文件

函数名: `loadConfigs`

函数参数：

| 字段          | 类型  | 说明       | 默认值    |
| ------------- | ----- | ---------- | ---------- |
| `configNames` | `Array` | `configs` 名字 | `undefined` |
| `global`      | `Boolean` | 是否加载到全局   | `undefined` |
| `configPath` | `String` | 配置文件所在的位置 | `"./config"` |
