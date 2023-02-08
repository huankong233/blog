---
title: fetch
date: 2023-02-08
---

### 用途

1. 我封装的一个使用 `node-fetch` 的库

### 用法

#### 参数

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `url`     | string | 请求地址     |
| `data`    | object | 需要携带的参数|
| `type`    | string | [说明](#fetch说明)|

#### fetch说明

如果 `type` 为 `GET` 会自动拼接到 `url` 上

如果 `type` 为 `POST` 会自动格式化
