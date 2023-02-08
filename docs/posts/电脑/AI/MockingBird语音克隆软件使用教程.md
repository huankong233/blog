---
layout: Post
title: MockingBird语音克隆软件使用教程
date: 2022-11-30
headerImage: https://api.huankong.top/random
tags:
  - 电脑
  - AI
---

## 1.首先下载[python](https://www.python.org)

![1669808410423.png](https://img.huankong.top/i/2022/11/30/6387411c20645.png)

## 2.安装python

![1669808498456.png](https://img.huankong.top/i/2022/11/30/63874173d4144.png)
点击现在安装按钮
![1669808567353.png](https://img.huankong.top/i/2022/11/30/638741b8b8b08.png)

## 3.打开MockingBird项目仓库

[MockingBirdGithub仓库](https://github.com/babysor/MockingBird)
打开官方wiki，选择[快速上手](https://github.com/babysor/MockingBird/wiki/Quick-Start-(Newbie))

## 4.安装Anaconda

[教程链接](https://zhuanlan.zhihu.com/p/348120084)
Tip：安装完成后在cmd里无法直接启动，你可以在开始菜单里找到
![1669808675248.png](https://img.huankong.top/i/2022/11/30/63874224825cf.png)
打开即可执行conda命令

## 5.创建环境

~~~ batch
conda create-n 环境名
~~~

## 6.激活环境

~~~ batch
Conda activate 环境名
~~~

## 7.下载安装PyTorch

打开[PyTorch](https://pytorch.org/get-started/locally/)
你如果选择了CUDA，那你就有必要进行一下CUDA的安装了。
推荐都看一下~
视频教程（老）: [https://www.bilibili.com/video/BV1q54y1y7Mf](https://www.bilibili.com/video/BV1q54y1y7Mf)
文字教程（新）: [跳转](/pages/6c7f77/)
![1669808892356.png](https://img.huankong.top/i/2022/11/30/638742fdec0aa.png)
接下来就是漫长的等待~
![1669808919646.png](https://img.huankong.top/i/2022/11/30/63874318651c0.png)
安装完成：
![1669808939656.png](https://img.huankong.top/i/2022/11/30/6387432c5d5e3.png)

## 8.安装[ffmpeg](https://www.gyan.dev/ffmpeg/builds/)

下滑找到`release builds`
下载最新版，解压到一个自己喜欢的路径
![1669808995375.png](https://img.huankong.top/i/2022/11/30/6387436429501.png)
进入bin目录，复制路径
右键此电脑
![1669809014781.png](https://img.huankong.top/i/2022/11/30/638743784806f.png)
选择属性，找到高级设置（windowns版本不同位置不同）
![1669809033483.png](https://img.huankong.top/i/2022/11/30/6387438bd5e0f.png)
![1669809047182.png](https://img.huankong.top/i/2022/11/30/63874397eb711.png)
![1669809064702.png](https://img.huankong.top/i/2022/11/30/638743a975104.png)
::: warning
!!!注意一定是系统变量不是用户变量!!!
:::
双击打开，点击新建
![1669809114506.png](https://img.huankong.top/i/2022/11/30/638743db428ed.png)
![1669809129593.png](https://img.huankong.top/i/2022/11/30/638743ea65dcc.png)
然后全部关闭即可。

## 9.测试是否配置正确

打开cmd，输入`ffmpeg -version`
如果可以正常输出，即为配置成功
![1669809164814.png](https://img.huankong.top/i/2022/11/30/6387440d9315e.png)

## 10.克隆Github库

返回项目的首页,拉取代码库
![1669809186516.png](https://img.huankong.top/i/2022/11/30/638744239e585.png)
![1669809197704.png](https://img.huankong.top/i/2022/11/30/6387442eefb53.png)

## 11.补全支持库

打开cmd进入项目文件夹
执行:

~~~ batch
pip install -r requirements.txt
~~~

等待跑码完成。
跑码过程中可能报错：
![1669809240232.png](https://img.huankong.top/i/2022/11/30/63874458f2cd6.png)
手动安装低版本后删除requirements.txt中的PyQt5,重新执行命令。
就不会出现报错的问题了。
![1669809265352.png](https://img.huankong.top/i/2022/11/30/638744725e6e8.png)

## 12.安装webrtcvad

执行:

~~~batch
pip install webrtcvad-wheels
~~~

![1669809301698.png](https://img.huankong.top/i/2022/11/30/6387449679680.png)
确保不出现报错。

## 13.新建文件夹

进入synthesizer文件夹，创建名称为saved_models的文件夹。
下载模型文件（文件来自B站视频：[https://www.bilibili.com/video/BV1DL4y1q7VL](https://www.bilibili.com/video/BV1DL4y1q7VL)）
下载链接：[https://x5cxfh7xs6.feishu.cn/file/boxcnk9Fzkx2yV6lqkPTZVikFif](https://x5cxfh7xs6.feishu.cn/file/boxcnk9Fzkx2yV6lqkPTZVikFif)
（原视频为百度网盘，飞书不限速）

## 14.运行demo

运行命令

~~~batch
python demo_toolbox.py -d .\samples
~~~

耐心等待后显示了界面，说明一切顺利！
