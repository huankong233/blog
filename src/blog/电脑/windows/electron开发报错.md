---
title: electron开发报错
createTime: 2026/06/04 10:03:17
permalink: /article/bppbwanr/
---

```
error during start dev server and electron app:
Error: Electron uninstall
```

在使用 `electron-vite` 开发 `electron` 项目的时候有时会遇到上述的报错

在 [某个个人博客](https://space.emotionl.fun/coding/fix-electron-uninstall) 中发现了解决方案

使用 [electron-fix](https://github.com/pangxieju/electron-fix) 工具即可修复上述问题

我大致分析了一下问题，问题大概就是 `electron` 的二进制文件出问题了，工具会重新下载并设置权限

## 使用方法

安装: `npm install electron-fix -g`

使用命令: `electron-fix start` 即可修复
 