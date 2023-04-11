---
layout: Post
title: 使用docker搭建网易云去灰服务
date: 2023-04-11
headerImage: https://api.huankong.top/random
tags:
  - 后端
  - docker
---

## 1.执行下方`dockerfile`

~~~ dockerfile
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
~~~

## 2.使用代理

一共有三种代理方式

可以看这个此项目的官方[README](https://github.com/UnblockNeteaseMusic/server/#%E6%96%B9%E6%B3%95-1-%E4%BF%AE%E6%94%B9-hosts)

如果遇到问题可以按照下方表进行排除

### 1.网络链接失败

检查是否正确安装了证书
[安装教程](https://github.com/UnblockNeteaseMusic/server/discussions/426)

### 2.歌曲播放失败/缓冲失败

检查是否正确使用了启动参数，设置好`endpoint`也就是`-e`参数

检查后台返回的日志信息，是否正确获取到了所需要的歌曲的文件地址
