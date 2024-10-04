---
title: laravel直接使用根目录访问
createTime: 2024/09/20 10:56:23
permalink: /article/x3w9uhnl/
---

## 注意

官方并不推荐这样使用，除非有特殊需求，否则不应该这样使用

## 1.移动文件

移动 `/public` 下的 `index.php` 和 `.htaccess` 文件到根目录下

## 2.修改文件

修改 `index.php` 中的几个路径

修改为正确的路径即可

但是这里如果你有资源文件放在了 `public` 目录下，读取的时候也需要在开头加上 `/public`
