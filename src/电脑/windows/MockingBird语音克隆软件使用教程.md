---
title: MockingBird语音克隆软件使用教程
author: huan_kong
createTime: 2022/11/30 11:04:20
permalink: /article/q199qgz7/
tags: 
  - 电脑
  - AI
---

教程可能已经过期

<!-- more -->

## 1.安装 `python`

### 1.1下载安装包

[下载链接](https://python.org/downloads/windows)

![1669808410423.png](https://img.huankong.top/i/2022/11/30/6387411c20645.png)

### 1.2安装

![1669808498456.png](https://img.huankong.top/i/2022/11/30/63874173d4144.png)

点击现在安装按钮

![1669808567353.png](https://img.huankong.top/i/2022/11/30/638741b8b8b08.png)

## 2.安装 `Anaconda`

### 2.1安装教程

[教程链接](https://zhuanlan.zhihu.com/p/348120084)

Tip: 安装完成后在 `cmd` 里无法直接启动, 你可以在开始菜单里找到

![1669808675248.png](https://img.huankong.top/i/2022/11/30/63874224825cf.png)

打开即可执行 `conda` 命令

### 2.2创建环境

~~~batch
conda create-n 环境名
~~~

### 2.3激活环境

~~~batch
Conda activate 环境名
~~~

## 3.安装 `PyTorch`

打开[PyTorch](https://pytorch.org/get-started/locally/)

你如果选择了 `CUDA` , 那你就有必要进行一下 `CUDA` 的安装了

[视频教程](https://www.bilibili.com/video/BV1q54y1y7Mf) [文字教程](./安装CUDA.md)

![1669808892356.png](https://img.huankong.top/i/2022/11/30/638742fdec0aa.png)

接下来就是漫长的等待~

![1669808919646.png](https://img.huankong.top/i/2022/11/30/63874318651c0.png)

安装完成:

![1669808939656.png](https://img.huankong.top/i/2022/11/30/6387432c5d5e3.png)

## 4.安装 [ffmpeg](https://www.gyan.dev/ffmpeg/builds/)

### 4.1安装教程

下滑找到 `release builds` 下载最新版, 解压到一个自己喜欢的路径

![1669808995375.png](https://img.huankong.top/i/2022/11/30/6387436429501.png)

进入 `bin` 目录,复制路径,右键此电脑

![1669809014781.png](https://img.huankong.top/i/2022/11/30/638743784806f.png)

选择属性, 找到高级设置 ( windowns 版本不同位置不同 )

![1669809033483.png](https://img.huankong.top/i/2022/11/30/6387438bd5e0f.png)
![1669809047182.png](https://img.huankong.top/i/2022/11/30/63874397eb711.png)
![1669809064702.png](https://img.huankong.top/i/2022/11/30/638743a975104.png)

::: warning
注意一定是系统变量不是用户变量
:::

双击打开, 点击新建

![1669809114506.png](https://img.huankong.top/i/2022/11/30/638743db428ed.png)

![1669809129593.png](https://img.huankong.top/i/2022/11/30/638743ea65dcc.png)

然后全部关闭即可。

### 4.2测试是否配置正确

打开 cmd, 输入`ffmpeg -version`
如果可以正常输出, 即为配置成功

![1669809164814.png](https://img.huankong.top/i/2022/11/30/6387440d9315e.png)

## 5.安装 `MockingBird`

### 5.1克隆仓库

~~~batch
git clone https://github.com/babysor/MockingBird
~~~

### 5.2补全支持库

~~~batch
pip install -r requirements.txt
~~~

等待跑码完成。

### 5.3如果报错

![1669809240232.png](https://img.huankong.top/i/2022/11/30/63874458f2cd6.png)

手动安装低版本后删除 `requirements.txt` 中的 `PyQt5` , 重新执行命令,就不会出现报错的问题了

![1669809265352.png](https://img.huankong.top/i/2022/11/30/638744725e6e8.png)

### 5.4安装 webrtcvad

~~~batch
pip install webrtcvad-wheels
~~~

![1669809301698.png](https://img.huankong.top/i/2022/11/30/6387449679680.png)

确保不出现报错。

## 13.新建文件夹

进入 `synthesizer` 文件夹, 创建名称为 `saved_models` 的文件夹。

下载模型文件 ( 文件来自[B 站视频](https://www.bilibili.com/video/BV1DL4y1q7VL) )

[下载链接](https://x5cxfh7xs6.feishu.cn/file/boxcnk9Fzkx2yV6lqkPTZVikFif)

## 14.运行 `demo`

运行命令

~~~batch
python demo_toolbox.py -d .\samples
~~~

耐心等待后显示了界面, 说明一切顺利!
