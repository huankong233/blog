---
layout: Post
title: CSS中百分比的概念
author: huan_kong
date: 2023-2-7
headerImage: https://api.huankong.top/random
tags:
  - 前端
  - css3
---

## 1.子元素height和width的百分比

子元素的height或width中使用百分比，是相对于子元素的直接父元素，width相对于父元素的width，height相对于父元素的height。

## 2.top和bottom 、left和right

子元素的top和bottom如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度，
同样
子元素的left和right如果设置百分比，则相对于直接非static定位(默认定位的)父元素的宽度。

## 3.padding

子元素的padding如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width，而与父元素的height无关。

## 4.margin

跟padding一样，margin也是如此，子元素的margin如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的width。

## 5.border-radius，translate，background-size

相对于自身的宽度

## 原文链接

[https://blog.csdn.net/qq_44472722/article/details/105512621](https://blog.csdn.net/qq_44472722/article/details/105512621)
