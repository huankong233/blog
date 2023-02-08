---
layout: Post
title: 安装laravel
date: 2021-09-10
headerImage: https://api.huankong.top/random
tags:
  - 后端
  - php
  - laravel
---

## 安装

官方推荐使用[docker安装](#_1-2docker)

我推荐使用[composer安装](#_1-1composer)

### Composer

#### 安装 Composer

`Windows`推荐使用[安装器](https://dl.huankong.top/OneDrive/常用软件备份/常用工具/Composer-Setup.exe)

`Linux/Mac`需要按照[官方](https://pkg.phpcomposer.com/#how-to-install-composer)的安装方法安装

#### 安装 Laravel

通过 Composer 安装 Laravel 安装器：

~~~ bash
composer global require "laravel/installer"
~~~

安装完成后，通过简单的 `laravel new` 命令即可在当前目录下创建一个新的 Laravel 应用。

例如，`laravel new blog` 将会创建一个名为 `blog` 的新应用，且包含所有  Laravel 依赖。

### Docker

::: tip
需要[安装`wsl2`环境](https://zhuanlan.zhihu.com/p/386590591)
并且安装完成docker环境
:::

终端运行

~~~ bash
curl -s https://laravel.build/example-app | bash
~~~
