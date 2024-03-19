---
title: loadConfig
author: huan_kong
createTime: 2023/12/07 22:15:37
permalink: /docs/kkbot-ts/支持库/loadConfig/
---

## 函数列表

### 1.加载单个配置文件

函数名: `loadConfig`

函数参数:

| 字段            | 类型      | 说明                     | 默认值       |
| --------------- | --------- | ------------------------ | ------------ |
| `configName`    | `string`  | `config` 名字            | `undefined`  |
| `RegToGlobal`   | `boolean` | 是否加载到全局           | `true`       |
| `configPath`    | `string`  | 配置文件所在的位置       | `"./config"` |
| `forceOverride` | `boolean` | 是否强制覆盖原有配置文件 | `false`      |
