---
layout: Post
title: mysql创建一个指定位数的随机字符串
author: huan_kong
date: 2022-1-30
headerImage: https://api.huankong.top/random
tags:
  - 后端
  - mysql
---

~~~ sql
DROP FUNCTION IF EXISTS rand_string;
DELIMITER $$
CREATE FUNCTION rand_string(n INT)
RETURNS VARCHAR(255)
BEGIN
    DECLARE chars_str varchar(100) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    DECLARE return_str varchar(255) DEFAULT '';
    DECLARE i INT DEFAULT 0;
    WHILE i < n DO
        SET return_str = concat(return_str,substring(chars_str , FLOOR(1 + RAND()*62 ),1));
        SET i = i +1;
    END WHILE;
    RETURN return_str;
END $$
DELIMITER;
~~~

如果遇到报错，在命令前执行

~~~ sql
set global log_bin_trust_function_creators=TRUE;
~~~

如果提示权限不足，请使用root账户执行！
