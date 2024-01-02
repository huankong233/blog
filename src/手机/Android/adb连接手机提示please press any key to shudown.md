---
title: adb连接手机提示please press any key to shudown
author: huan_kong
createTime: 2021/08/05 12:33:13
permalink: /article/017mv0ji/
tags: 
  - 手机
  - Android
---

![1669790988977.jpg](https://img.huankong.top/i/2022/11/30/6386fd0f492bc.jpg)

安卓手机进入 `fastboot`, 链接电脑, 跳出 `please press any key to shutdown`

这个时候咱们不用慌

在电脑上创建一个 `bat` 文件

内容为:

~~~batch
@echo off
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\18D1D00D0100" /v "osvc" /t REG_BINARY /d "0000" /f
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\18D1D00D0100" /v "SkipContainerIdQuery" /t REG_BINARY /d "01000000" /f
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\usbflags\18D1D00D0100" /v "SkipBOSDescriptorQuery" /t REG_BINARY /d "01000000" /f
pause
~~~

并使用管理员模式运行, 重新链接手机即可~
