---
layout: Post
title: 安装laravel
author: huan_kong
date: 2021-9-10
headerImage: https://api.huankong.top/random
tags:
  - 后端
  - php
  - laravel
---

## 1.安装Composer(可以使用安装器)

安装器[下载连接](https://dl.huankong.top/OneDrive/%E5%B8%B8%E7%94%A8%E8%BD%AF%E4%BB%B6%E5%A4%87%E4%BB%BD/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7/Composer-Setup.exe) 或者前往[composer中文网](https://pkg.phpcomposer.com/#how-to-install-composer)

## 2.安装 Laravel

首先，通过 Composer 安装 Laravel 安装器：

~~~batch
composer global require "laravel/installer"
~~~

确保 ``~/.composer/vendor/bin`` 在系统路径中，否则不能在任意路径调用 ``laravel`` 命令。
安装完成后，通过简单的 ``laravel new`` 命令即可在当前目录下创建一个新的 Laravel 应用。
例如，``laravel new blog`` 将会创建一个名为 ``blog`` 的新应用，且包含所有  Laravel 依赖。
