---
title: 宝塔更新sqlite3
createTime: 2024/06/29 22:48:26
permalink: /article/5p69qc26/
tags:
  - 后端
  - bt
---

## 1.执行命令

```bash
cd /tmp
wget https://www.sqlite.org/2024/sqlite-autoconf-3460000.tar.gz
tar zxvf /tmp/sqlite-autoconf-3460000.tar.gz
cd /tmp/sqlite-autoconf-3460000 || exit && ./configure --prefix=/usr/local && make && make install
mv /usr/bin/sqlite3 /usr/bin/sqlite3_backup
ln -s /usr/local/bin/sqlite3 /usr/bin/sqlite3
echo "/usr/local/lib" > /etc/ld.so.conf.d/sqlite3.conf
ldconfig
sqlite3 -version
```

## 2.重载 PHP 服务

用的哪个版本，就重启哪个版本(虽然最好是都重启一下)

![1719672595590.png](https://img.huankong.top/i/2024/06/29/66801f1476a99.png)
