---
title: 安装CUDA
author: huan_kong
createTime: 2022/11/30 11:04:07
permalink: /article/0fl508ok/
tags:
  - 电脑
  - AI
---

## 1.下载 `CUDA` 安装包

[下载链接](https://developer.nvidia.com/cuda-toolkit-archive)选择最新版

![1669807942289.png](https://img.huankong.top/i/2022/11/30/63873f4853afc.png)

选择 `exe` 下载安装.
打开之后会先让你解压, 再会开始安装.

![1669807998023.png](https://img.huankong.top/i/2022/11/30/63873f7f3abd0.png)

一路确认即可.

![1669808022676.png](https://img.huankong.top/i/2022/11/30/63873f97dac62.png)

等待安装完成.

## 2.确认是否安装完成

### 2.1 确认环境变量

打开系统变量 ( 设置->系统->关于->高级系统设置 )

![1669808061462.png](https://img.huankong.top/i/2022/11/30/63873fbe30dee.png)

查看是否存在以下变量.

### 2.2 确认是否可用

按下 `WIN+R`, 打开 `cmd`, 输入命令 ( 注意, 必须是大写 `V` )

```bat
nvcc -V
```

### 2.3 如果无法输出版本号

打开 `PATH` 系统变量

![1669808124572.png](https://img.huankong.top/i/2022/11/30/63873ffe18b27.png)

如果没有请按照你的安装路径补全! 补全后再尝试执行命令!

## 3.安装 `cuDNN`

### 3.1 下载软件

[下载链接](https://developer.nvidia.com/rdp/cudnn-archive)

选择对应的版本

![1669808186274.png](https://img.huankong.top/i/2022/11/30/6387403beabbc.png)

下载的话需要注册为英伟达会员资格, 也不用钱, 注册一下就 ok

### 3.2 下载完成

打开安装路径, 解压压缩包内的文件.

![1669808208579.png](https://img.huankong.top/i/2022/11/30/63874051ed4fa.png)

如果提示覆盖就覆盖就可以了
