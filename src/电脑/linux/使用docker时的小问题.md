---
title: 使用docker时的小问题
author: huan_kong
createTime: 2022/12/07 11:04:52
permalink: /article/movmt6sp/
tags: 
  - 电脑
  - linux
---

## 1.问题如图

![1670410819655.png](https://img.huankong.top/i/2022/12/07/63907248b46b3.png)

## 2.问题触发方法

不小心把 `/var/lib/docker/overlay2` 中的镜像文件误删

## 3.问题解决方法

```sh
docker system prune -af
```
