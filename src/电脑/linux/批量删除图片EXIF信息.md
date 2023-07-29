---
title: 批量删除图片EXIF信息
author: huan_kong
createTime: 2023/07/13 17:01:49
permalink: /article/oykh4xy0/
---

## 安装

~~~ bash
sudo pacman -S perl-image-exiftool
~~~

## 使用

### 命令

~~~ bash
exiftool -all="" -overwrite_original -r . 
~~~

加上 `-progress` 即可显示处理进度

这样替换后会有一个 `*_original` 文件

可以用下面这个命令删除

~~~ bash
find . -type f -name "*_original" -delete
~~~

### 解析

- `-all=""` 表示清除所有 `EXIF` 信息
- `-overwrite_original` 表示替换源文件
- `-r .` 表示遍历文件夹里的所有文件
