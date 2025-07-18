---
title: mysql匹配字符串不区分大小写
createTime: 2024/04/11 16:09:04
permalink: /article/o28qp9j5/
tags:
  - 后端
  - mysql
---

## 震惊

`mysql` 在匹配字符串的时候不区分大小写!!!!

需要在需要匹配大小写的字段后面加上 `BINARY` 才可以正常区分大小写

![1712823047993.png](https://img.huankong.top/i/2024/04/11/66179b0962a6e.png)
