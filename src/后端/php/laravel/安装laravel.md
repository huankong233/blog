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

## 安装Composer

`Windows` 推荐使用 [安装器](https://getcomposer.org/Composer-Setup.exe)

`Linux/Mac` 需要按照 [官方](https://pkg.phpcomposer.com/#how-to-install-composer) 的安装方法安装

## 安装Laravel

::: warning
必须先安装一个 [7zip](https://7-zip.org/) 才能正常安装!!!!
:::

通过 `Composer` 安装 `Laravel` 安装器:

~~~bash
composer global require "laravel/installer"
~~~

安装完成后, 通过简单的 `laravel new` 命令即可在当前目录下创建一个新的 `Laravel` 应用。

例如, `laravel new blog` 将会创建一个名为 `blog` 的新应用, 且包含所有 `Laravel` 依赖。

## 安装指定版本

`test` 是应用名

`9.x` 是版本号

~~~bash
composer create-project laravel/laravel test 9.x
~~~
