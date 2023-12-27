---
title: mysql无法启动
author: huan_kong
createTime: 2023/07/25 11:05:00
permalink: /article/tkjc7erp/
tags: 
  - 后端
  - mysql
---

## 错误提示

```text
Table ".\mysql\db" is marked as crashed and last (automatic?) repair failed
```

## 原因

你的 `mysql` 数据库中的 `db` 表损坏了, 需要修复。你可以尝试以下方法来修复它: 

## 解决方法

1. 停止 `mysql` 服务 进入 `mysql` 的 `bin` 目录下
2. 执行 `mysqld --console --skip-grant-tables --skip-external-locking` 命令, 以跳过权限检查和外部锁定
3. 执行 `mysqlcheck -r --databases mysql --use-frm` 命令(原先的不能停止), 修复数据库
