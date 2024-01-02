---
title: 使用termux安装debian11
author: huan_kong
createTime: 2022/12/05 12:32:46
permalink: /article/ujl9o8co/
tags: 
  - 手机
  - Android
---

## 1.下载 `Termux`

[f-froid](https://f-droid.org/packages/com.termux/)

## 2.配置 `Termux`

### 2.1切换到清华源

~~~sh
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/termux-packages-24 stable main@' $PREFIX/etc/apt/sources.list
~~~

### 2.2安装 `ssh`

~~~sh
pkg install openssh
~~~

### 2.3设置 `Termux` 密码

~~~sh
passwd
~~~

### 2.4开启 `ssh` 服务

~~~sh
sshd
~~~

### 2.5可能会遇到的问题

![1670237638239.png](https://img.huankong.top/i/2022/12/05/638dcdc853e06.png)

#### 2.5.1需要更新一下软件包

~~~sh
pkg update
~~~

#### 2.5.2重新生成 key

~~~sh
ssh-keygen -A
~~~

![1670237761153.png](https://img.huankong.top/i/2022/12/05/638dce438326b.png)
然后再尝试使用`sshd`启动服务

### 2.6连接 `ssh`

使用常见的 `ssh` 连接工具 `xshell` 等
连接时 `ip` 就是手机的 `ip`
端口是 `8022`
用户名是 `user`
密码就是上面设置的

## 3.安装 `debian` (同理也可以安装别的系统)

### 3.1 安装 `proot-distro`

~~~sh
pkg install proot-distro
~~~

### 3.2 常用指令

~~~sh
# 查看帮助
proot-distro help

# 查询支持哪些发行版本
proot-distro list
~~~

![1670237993084.png](https://img.huankong.top/i/2022/12/05/638dcf2b32d0b.png)

### 3.3 安装 `debian`

中间可能需要连接到国际互联网

~~~sh
proot-distro install debian
~~~

等待跑码完成。
![1670238180142.png](https://img.huankong.top/i/2022/12/05/638dcfe703753.png)

### 3.4 进入 `debian`

运行

~~~sh
proot-distro login debian
~~~

即可进入 `debian` 啦~

## 4.配置 `debian` 系统

### 4.1 配置清华源

`Debian` 的软件源配置文件是 `/etc/apt/sources.list`进行修改
默认自带的文本编辑器是 `nano`, 居然连 `vi` 都没有(小声)

~~~sh
vi /etc/apt/sources.list
~~~

添加上下面这几段(推荐把自带源注释掉, 在前面加上#即可)

~~~sh
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
~~~

修改完成后记得刷新一下

~~~sh
apt update
~~~

### 4.2 修改语言(可不改)

#### 4.2.1 安装 `locales`

~~~sh
apt-get install locales
~~~

#### 4.2.2 修改语言

~~~sh
dpkg-reconfigure locales
~~~

选中`zh_CN.UTF-8 UTF-8`
(用上下切换, 空格选中, 回车继续)
![1670238695213.png](https://img.huankong.top/i/2022/12/05/638dd1ea398fb.png)
把默认也改成`zh_CN.UTF-8 UTF-8`
![1670238752582.png](https://img.huankong.top/i/2022/12/05/638dd2227036f.png)
等待一会儿就切换完成了

### 4.3 修改时区

~~~sh
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
~~~

使用 `date` 查看是否生效

## 5.收工

记得给 `Termux` 后台上锁, 然后设置无限制, 防止被杀后台
