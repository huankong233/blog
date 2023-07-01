---
title: python数据容器类型
author: huan_kong
createTime: 2023/03/03 12:31:00
permalink: /article/1p4pp16p/
tags: 
  - 后端
  - python
---

## 数据容器

类似js里的数组，但是可以自动处理一些内容

一共有下列这几种

- 列表
- 元组
- 集合
- 字典

## 列表

### 增

把一个元素添加到列表的结尾：`list.append(x)`

在列表末尾追加列表： `list.extend(list)`

在指定位置插入一个元素: `list.insert(i, x)`

i 为插入的索引，x为插入的值

### 删

删除列表中值为 x 的第一个元素：`list.remove(x)`

如果没有这样的元素，就会返回一个错误。

从列表的指定位置移除元素 并且返回索引元素

~~~ python
list1 = ['Google', 'JD', 'Taobo'] 
print(list1.pop(1))
print(list1)
# 返回结果: 
# JD 
# ['Google', 'Taobo']
~~~

移除列表中的所有项 `list.clear()`

### 查

返回列表中第一个值为 x 的元素的索引：`list.index(x)`

如果没有匹配的元素就会返回一个错误。

统计元素 x 在列表中出现的次数。 `list.count(x)`

对列表中的元素进行排序 `list.sort()`

倒排列表中的元素： `list.reverse()`

同时遍历两个或更多的序列，可以使用 zip() 组合：

~~~ python
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']

for (q, a) in zip(questions, answers):
    print(f"What is your {q}?  It is {a}.")

# 返回结果:
# What is your name?  It is lancelot.
# What is your quest?  It is the holy grail.
# What is your favorite color?  It is blue.
~~~

反向遍历一个列表

~~~ python
for i in reversed(range(1, 10, 2)):
    print(i)

# 返回结果:
# 9
# 7
# 5
# 3
# 1
~~~

列表推导式

可以直接改变循环时传入的值

~~~ python
a_range = ["1","2","3"]
# 让循环时的值转变类型
a_list = [int(x) for x in a_range]
print(a_list)

# 返回结果: [1, 2, 3]
~~~

~~~ python
a_range = range(10)
# 让循环时的值变成x*x
a_list = [x * x for x in a_range]
print(a_list)

# 返回结果: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
~~~

## 元组

不可修改的 [列表](#列表)

### 获取元素

~~~ python
t = (12345, 54321, 'hello!')
print(t[0])

# 返回结果: 12345
~~~

### 获取整个元组

~~~ python
print(t)

# 返回结果: (12345, 54321, 'hello!')
~~~

## 集合

集合是一个无序不重复元素的集。

::: tip
如果要创建一个空集合，必须用 set() 而不是 {}
:::

### 创建集合

~~~ python
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)
# 返回结果: {'orange', 'banana', 'pear', 'apple'}
~~~

### 检测成员

~~~ python
print('orange' in basket)
# 返回结果: True
~~~

## 字典

无序的`键=>值`对集合

### 添加字典元素

~~~ python
tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127
print(tel)
# 返回结果: {'sape': 4139, 'guido': 4127, 'jack': 4098}
~~~

### 通过键获取值

~~~ python
print(tel['jack'])
# 返回结果: 4098
~~~

### 删除字典的一部分

~~~ python
del tel['sape']
tel['irv'] = 4127
print(tel)
# 返回结果: {'guido': 4127, 'irv': 4127, 'jack': 4098}
~~~

### 将所有的键组成一个列表

#### 这里有两种，一种是用`list`函数

~~~ python
print(list(tel.keys()))
# 返回结果: ['irv', 'guido', 'jack']
~~~

#### 一种是直接用中括号框起来

~~~ python
print([tel.keys()])
# 返回结果: [dict_keys(['jack', 'sape'])]
~~~

### 判断存在

~~~ python
print('guido' in tel)
# 返回结果: True
~~~

### 根据元组列表来构建字典

~~~ python
print(dict([('sape', 4139), ('guido', 4127), ('jack', 4098)]))
# 返回结果: {'sape': 4139, 'jack': 4098, 'guido': 4127}
~~~

如果关键字只是简单的字符串，使用关键字参数指定键值对有时候更方便

~~~ python
print(dict(sape=4139, guido=4127, jack=4098))
# 返回结果: {'sape': 4139, 'jack': 4098, 'guido': 4127}
~~~

### 列表推导式指定特定的键值对

~~~ python
print({x: x**2 for x in (2, 4, 6)})
# 返回结果: {2: 4, 4: 16, 6: 36}
~~~

### 字典中遍历

~~~ python
knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k, v in knights.items():
    print(k, v)

# 返回结果: 
# gallahad the pure
# robin the brave
~~~
