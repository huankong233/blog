---
title: Windows深色模式白条bug
author: huan_kong
createTime: 2022/05/14 12:17:21
permalink: /article/5wziwa9z/
tags:
  - 电脑
  - windows
---

## Win11

1. 打开注册表
2. 找到HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Toolbar
3. 修改Locked值为1（若无该项则新建Locked并将值改为1）
4. 重启

## Win10

![1669794066602.png](https://img.huankong.top/i/2022/11/30/638709144f271.png)
开启了深色模式, 但是资源管理器中会出现这种白条子, 可以打开 `IE 浏览器` ( `win10` 高级缝合怪, 全都高度捆绑 )

![1669794104277.png](https://img.huankong.top/i/2022/11/30/63870938e3673.png)
右键选择锁定工具栏, 重启电脑就可以解决了~
