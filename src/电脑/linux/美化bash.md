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

## 3.字体问题

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

一般情况下我们都没有所需的对应字体, 我们需要手动来进行安装 [安装教程](https://github.com/romkatv/powerlevel10k#manual-font-installation)

安装完成后尝试 `exec zsh` ,看看乱码有没有消失,如果没有消失重启试试看

## 4.颜色问题

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
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.powerlevel10k
echo 'source ~/.powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
~~~

安装完成后运行 `source .zshrc` 即可进入配置模式

如果需要重新配置 `powerlevel10k` 运行 `p10k configure` 即可重新进入配置向导

## 6.安装插件

### 1.语法高亮

~~~ bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.zsh/zsh-syntax-highlighting
echo source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh >> ~/.zshrc
~~~

### 2.命令补全

~~~ bash
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
echo source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh >> ~/.zshrc
~~~

### 3.路径补全

~~~ bash
git clone https://github.com/zsh-users/zsh-completions.git ~/.zsh/zsh-completions
echo fpath=(~/.zsh/zsh-completions/src $fpath) >> ~/.zshrc
~~~

## 7.添加左右单词切换

在 `~/.zshrc` 结尾添加

~~~ bash
# bind ctrl + left
bindkey "^[[1;5C" forward-word
bindkey "^[[1;5D" backward-word
~~~

## 8.添加历史记录

在 `~/.zshrc` 结尾添加

~~~ bash
# history
HISTFILE="$HOME/.zsh_history"
HISTSIZE=10000000
SAVEHIST=10000000
setopt BANG_HIST                 # Treat the '!' character specially during expansion.
setopt EXTENDED_HISTORY          # Write the history file in the ":start:elapsed;command" format.
setopt INC_APPEND_HISTORY        # Write to the history file immediately, not when the shell exits.
setopt SHARE_HISTORY             # Share history between all sessions.
setopt HIST_EXPIRE_DUPS_FIRST    # Expire duplicate entries first when trimming history.
setopt HIST_IGNORE_DUPS          # Don't record an entry that was just recorded again.
setopt HIST_IGNORE_ALL_DUPS      # Delete old recorded entry if new entry is a duplicate.
setopt HIST_FIND_NO_DUPS         # Do not display a line previously found.
setopt HIST_IGNORE_SPACE         # Don't record an entry starting with a space.
setopt HIST_SAVE_NO_DUPS         # Don't write duplicate entries in the history file.
setopt HIST_REDUCE_BLANKS        # Remove superfluous blanks before recording entry.
setopt HIST_VERIFY               # Don't execute immediately upon history expansion.
setopt HIST_BEEP                 # Beep when accessing nonexistent history.
~~~
