---
title: CSS中百分比的概念
createTime: 2023/02/07 12:31:32
permalink: /article/5x53xsml/
tags:
  - 前端
  - css3
---

## 原文链接

[https://blog.csdn.net/qq_44472722/article/details/105512621](https://blog.csdn.net/qq_44472722/article/details/105512621)

## 1.子元素 `height` 和 `width` 的百分比

子元素的 `height` 或 `width` 中使用百分比，是相对于子元素的直接父元素

`width` 相对于父元素的 `width`

`height` 相对于父元素的 `height`

## 2.`top` 和 `bottom` ，`left` 和 `right`

子元素的 top 和 bottom 如果设置百分比，则相对于直接非 static 定位(默认定位)的父元素的高度，
同样
子元素的 left 和 right 如果设置百分比，则相对于直接非 static 定位(默认定位的)父元素的宽度.

## 3.`padding`

子元素的 `padding` 如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的 `width`，而与父元素的 `height` 无关.

## 4.margin

跟 `padding` 一样，`margin` 也是如此，子元素的 `margin` 如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的 `width`

## 5.`border-radius` `translate` `background-size`

相对于自身的宽度
