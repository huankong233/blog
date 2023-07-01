---
title: typecho或wordpress管理员账户密码遗失解决办法
author: huan_kong
createTime: 2021/09/15 12:18:20
permalink: /article/pxkkr60g/
tags: 
  - 后端
  - php
---

## 1.定位到phpass文件

### 旧版本typecho

![1669792401763.png](https://img.huankong.top/i/2022/11/30/63870293801cc.png)

### 最新版typecho

![1669792508951.png](https://img.huankong.top/i/2022/11/30/638702ff182e2.png)

### wordpress的phpass文件在wp-includes文件夹内

![1669792606809.png](https://img.huankong.top/i/2022/11/30/6387035f62577.png)

## 2.引入加密类文件

~~~ php
require_once "../var/PasswordHash.php";
~~~

根据自己的文件名或路径自行修改！

## 3.实例化对象

这里的密码是123456

::: warning
typecho最新开发版内实例化对象用到了命名空间，需要手动替换代码
:::

~~~ php
$hasher = new \Utils\PasswordHash(8, true);
$hasher = new PasswordHash(8, true);
echo $a->HashPassword(123456);
~~~

## 4.将加密后的密文替换数据库

替换user表内的password字段

![1669792667991.png](https://img.huankong.top/i/2022/11/30/6387039ce002d.png)
