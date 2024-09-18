---
title: 使用 CLion + MSYS2 配置 C 语言编程环境
createTime: 2024/09/18 15:53:52
permalink: /article/rfsteahj/
---

## 1.下好环境

- MSYS2 环境
- CLion 编辑器

## 2.安装驱动

``` bash
pacman -Syyu
pacman -S mingw-w64-ucrt-x86_64-cmake  mingw-w64-ucrt-x86_64-extra-cmake-modules mingw-w64-ucrt-x86_64-make mingw-w64-ucrt-x86_64-gdb mingw-w64-ucrt-x86_64-toolchain
```

## 3.配置编辑器

按照如图配置即可, 手动选择路径的时候选你MSYS2中UCRT的路径即可

![1726646191019.png](https://img.huankong.top/i/2024/09/18/66ea87b0071b3.png)
