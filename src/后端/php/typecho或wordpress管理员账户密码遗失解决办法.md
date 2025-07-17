---
title: typecho或wordpress管理员账户密码遗失解决办法
author: huan_kong
createTime: 2021/09/15 12:18:20
permalink: /article/pxkkr60g/
tags:
  - 后端
  - php
---

## 1.定位到 `phpass` 文件

### 旧版本 `typecho`

![1669792401763.png](https://img.huankong.top/i/2022/11/30/63870293801cc.png)

### 最新版 `typecho`

![1669792508951.png](https://img.huankong.top/i/2022/11/30/638702ff182e2.png)

### wordpress 的 `phpass` 文件在 `wp-includes` 文件夹内

![1669792606809.png](https://img.huankong.top/i/2022/11/30/6387035f62577.png)

## 2.引入加密类文件

```php title="hash.php"
require_once "../var/PasswordHash.php";
```

根据自己的文件名或路径自行修改！

## 3.实例化对象

这里的密码是 `123456`

::: warning
`typecho` 最新开发版内实例化对象用到了命名空间，需要手动替换代码
:::

```php title="hash.php"
$hasher = new \Utils\PasswordHash(8, true);
$hasher = new PasswordHash(8, true);
echo $a->HashPassword(123456);
```

## 4.将加密后的密文替换数据库

替换 `user` 表内的 `password` 字段

![1669792667991.png](https://img.huankong.top/i/2022/11/30/6387039ce002d.png)
