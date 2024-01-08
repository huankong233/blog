---
title: 美化bash
author: huan_kong
createTime: 2023/07/02 00:16:26
permalink: /article/6i7blsct/
tags: 
  - 电脑
  - linux
---

## 1.安装 `zsh`

~~~bash
sudo pacman -S zsh
~~~

## 2.切换终端

~~~bash
chsh -s /bin/zsh
~~~

## 3.安装 `oh-my-zsh`

~~~bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
~~~

## 4.字体问题

在一些情况下, 我们的终端现在会出现一些奇怪的 `?` 或者不认识的字符
这可能是因为字符集或字体不兼容导致的, 我们可以这样来修复

### 1.字符编码

我们首先需要确定我们的字符编码没有出现问题

运行 `locale` , 检查他的输出, 通常应该如下显示, 如果有所不同, 请务必修改一下,
确保没有问题, 如果后面没问题可以再改掉, 关于如何修改请自行搜索

~~~bash
$ locale
LANG=en_US.utf8
LANGUAGE=
LC_CTYPE=en_US.utf8
LC_NUMERIC="en_US.utf8"
LC_TIME="en_US.utf8"
LC_COLLATE="en_US.utf8"
LC_MONETARY="en_US.utf8"
LC_MESSAGES="en_US.utf8"
LC_PAPER="en_US.utf8"
LC_NAME="en_US.utf8"
LC_ADDRESS="en_US.utf8"
LC_TELEPHONE="en_US.utf8"
LC_MEASUREMENT="en_US.utf8"
LC_IDENTIFICATION="en_US.utf8"
LC_ALL=
~~~

### 2.字体

一般情况下我们都没有所需的对应字体, 我们需要手动来进行安装

#### 1.安装 `powerline` 字体

~~~bash
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
~~~

#### 2.安装 `Nerd Font` 字体

~~~bash
nano ~/.zshrc
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts
curl -fLo "Droid Sans Mono for Powerline Nerd Font Complete.otf" https://github.com/ryanoasis/nerd-fonts/raw/master/patched-fonts/DroidSansMono/DroidSansMNerdFont-Regular.otf
~~~

#### 3.给 `ssh` 端安装

如果你是远程连接的服务器, 请给本地电脑也安装一下字体, 然后在虚拟终端中选中所用的字体
[安装教程](https://github.com/romkatv/powerlevel10k#manual-font-installation)

#### 4.重启终端

安装完成后尝试 `exec zsh` ,看看乱码有没有消失,
如果没有消失重启试试看

## 5.颜色问题

在一些情况下我们可能需要手动配置终端的颜色设置, 如果不设置就会丢失一部分好看的样式

我们可以把这段代码插入到 `~/.zshrc` 文件的末尾

~~~bash
if [ -e /usr/share/terminfo/x/xterm-256color ]; then
    export COLORTERM='xterm-256color'
else
    export COLORTERM='xterm-color'
fi
~~~

保存完成后, 然后重新 `source .zshrc` 一下

## 5.安装 `powerlevel10k`

~~~bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
~~~

安装完成后运行 `source .zshrc` 即可进入配置模式

如果需要重新配置 `powerlevel10k` 运行 `p10k configure` 即可重新进入配置向导

## 6.安装插件

### 1.命令补全

安装

~~~bash
yay -S zsh-syntax-highlighting zsh-autosuggestions
sudo ln -s /usr/share/zsh/plugins/zsh-syntax-highlighting ~/.oh-my-zsh/plugins/
sudo ln -s /usr/share/zsh/plugins/zsh-autosuggestions ~/.oh-my-zsh/plugins/
~~~

在 `.zshrc` 的 `plugins` 中添加 `zsh-syntax-highlighting` `zsh-autosuggestions`

例子:

~~~toml
plugins=(
  sudo
  git
  zsh-syntax-highlighting
  zsh-autosuggestions
)
~~~

### 2.文件解压

在 `plugins` 中加入 `extract` 即可

### 3.命令推荐

在命令不存在的时候提供建议的安装包

在 `plugins` 中加入 `command-not-found` 即可
