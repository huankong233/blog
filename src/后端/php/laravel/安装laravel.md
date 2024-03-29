---
title: 安装laravel
author: huan_kong
createTime: 2021/09/10 12:19:15
permalink: /article/kgctwqjp/
tags: 
  - 后端
  - php
  - laravel
---

## 安装

官方推荐使用[docker 安装](#使用composer)

我推荐使用[composer 安装](#使用docker)

## 使用Composer

### 安装Composer

`Windows` 推荐使用 [安装器](https://getcomposer.org/Composer-Setup.exe)

`Linux/Mac` 需要按照 [官方](https://pkg.phpcomposer.com/#how-to-install-composer) 的安装方法安装

### 安装Laravel

通过 `Composer` 安装 `Laravel` 安装器:

~~~bash
composer global require "laravel/installer"
~~~

安装完成后, 通过简单的 `laravel new` 命令即可在当前目录下创建一个新的 `Laravel` 应用。

例如, `laravel new blog` 将会创建一个名为 `blog` 的新应用, 且包含所有 `Laravel` 依赖。

## 使用Docker

::: tip
需要[安装wsl2环境](https://zhuanlan.zhihu.com/p/386590591)
并且安装完成 `docker` 环境
:::

终端运行

~~~bash
curl -s https://laravel.build/example-app | bash
~~~
