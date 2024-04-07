---
title: 模型查询时使用filter时遇到的小问题
author: huan_kong
createTime: 2022/12/08 12:20:12
permalink: /article/2jm4ulg7/
tags:
  - 后端
  - php
  - laravel
---

## 1.获取到的数据(未经过滤)

![1670468319402.png](https://img.huankong.top/i/2022/12/08/639152e39d81d.png)

## 2.进行过滤

### 2.1过滤函数

![1670468291825.png](https://img.huankong.top/i/2022/12/08/639152c7a1170.png)

### 2.2过滤后的数据

![1670468270023.png](https://img.huankong.top/i/2022/12/08/639152b26a2e9.png)

我们可以看到这里这个返回的数据, 虽然是正确的, 但是我们前端需要处理数据的时候可能会用 `forEach` 方法, 但是这个方法呢, 只有数组才有, 就需要 `train` 是一个数组, 我们也可以看到, 如果数据没有问题, 没有被过滤过, 那么返回的数据就是数组, 前端总不会去判断一下, 你这个数据是对象还是数组吧~~虽然也不是不行~~

## 3.解决方法

只需要在过滤函数的最后, 使用一下 `values` 方法, 这个方法使用了 `php` 自带的 `array_values` 方法, 让格式变成我们需要使用的样式。

![1670470643643.png](https://img.huankong.top/i/2022/12/08/63915bf79b19b.png)

运行之后的效果

![1670470688565.png](https://img.huankong.top/i/2022/12/08/63915c2427823.png)
