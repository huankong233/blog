---
title: Centos7安装Python3
author: huan_kong
createTime: 2022/10/29 11:06:20
permalink: /article/0llz2648/
tags: 
  - 电脑
  - linux
---

## 1.安装 python 依赖

~~~sh
yum install openssl-devel bzip2-devel expat-devel gdbm-devel readline-devel sqlite-devel
~~~

## 2.下载源码包

`3.9.9` 为版本, 可以自行修改 [版本列表](https://www.python.org/ftp/python)

~~~sh
wget https://www.python.org/ftp/python/3.9.9/Python-3.9.9.tgz
~~~

## 3.解压

~~~sh
tar -zxvf Python-3.6.5.tgz
~~~

## 4.安装

### 4.1 进入解压的文件夹

~~~sh
#不同版本文件夹名称不同
cd Python-3.9.9
~~~

### 4.2 创建安装目录

~~~sh
mkdir /usr/local/python3
~~~

### 4.3 指明安装路径

~~~sh
./configure -prefix=/usr/local/python3
~~~

### 4.4 编译安装

~~~sh
make && make install
~~~

### 4.5 绑定软链接

~~~sh
#为python3创建软连接
ln -s /usr/local/python3/bin/python3 /usr/bin/python3
#为pip3创建软连接
ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3
~~~

### 4.6 测试是否安装成功

~~~sh
#V大写
python3 -V
pip3 -V
~~~
