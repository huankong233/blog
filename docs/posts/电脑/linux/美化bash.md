---
layout: Post
title: 美化bash
date: 2023-05-08
headerImage: https://api.huankong.top/random
tags:
  - 电脑
  - linux
---

## 1.安装

### 1.安装zsh

~~~bash
sudo pacman -S zsh
~~~

### 2.安装oh-my-zsh

~~~bash
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
~~~

## 2.配置

### 1.配置主题

~~~bash
nano ~/.zshrc
~~~

omz自带的主题有[这几个](https://github.com/ohmyzsh/ohmyzsh/wiki/themes)

找到`ZSH_THEME`修改后面的内容为主题名称

### 2.配置插件

#### 1.命令补全

下载文件

~~~bash
wget http://mimosa-pudica.net/src/incr-0.2.zsh
~~~

并把文件移动到`~/.oh-my-zsh/plugins/incr/incr-0.2.zsh`

安装，在`.zshrc`文件最后加上

~~~bash
source ~/.oh-my-zsh/plugins/incr/incr*.zsh
~~~

#### 2.文件解压

在`plugins`中加入`extract`即可
