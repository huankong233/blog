---
title: docker搭建网易云去灰
author: huan_kong
createTime: 2023/07/02 00:29:47
permalink: /article/htd0wc64/
tags:
  - 后端
  - docker
---

## 1.安装

执行下方`dockerfile`

``` dockerfile
version: "3"

services:
  unblockmuisic:
    image: pan93412/unblock-netease-music-enhanced:latest
    restart: always
    command: -s -o kuwo kugou bilibili -e https://music.163.com
    ports:
        - 8080:8080
        - 8081:8081
    environment:
        - JSON_LOG=true
        - LOG_LEVEL=debug
        - ENABLE_FLAC=true
        - ENABLE_LOCAL_VIP=true
```

## 2.使用代理

一共有三种代理方式

可以看这个此项目的官方 [README](https://github.com/UnblockNeteaseMusic/server/#%E6%96%B9%E6%B3%95-1-%E4%BF%AE%E6%94%B9-hosts)

## 3.遇到问题

### 1.网络链接失败

检查是否正确安装了证书
[安装教程](https://github.com/UnblockNeteaseMusic/server/discussions/426)

### 2.歌曲播放失败/缓冲失败

检查是否正确使用了启动参数, 设置好 `endpoint` 也就是 `-e` 参数

检查后台返回的日志信息, 是否正确获取到了所需要的歌曲的文件地址
