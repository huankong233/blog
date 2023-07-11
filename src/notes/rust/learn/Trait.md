---
title: Trait
author: huan_kong
createTime: 2023/07/11 23:12:49
permalink: /note/rust/learn/Trait
---

## 介绍

用于把方法的签名放在一起 来定义实现某种目的所必须的一组行为。

类似 `ts` 里的 `*.d.ts`

~~~ rust
pub trait Summary {
    fn summzrize(&self) -> String;
}

pub struct NewArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.content, self.author, self.location);
    }
}
~~~

## 默认实现

在里面不定义也就使用默认实现 如果有写那就是把默认实现给重写了

~~~ rust
pub trait Summary {
    fn summzrize(&self) -> String {
        String::from("(Read more ...)")
    }
}
~~~

## 是否实现了某个方法

### 简单情况

~~~ rust
pub fn notify(item: impl Summary) {
    println!("news! {}",item.summarize());
}
~~~

### 复杂情况

~~~ rust
pub fn notify<T: Summary>(item1: T, item2: T) {
    println!("news! {}",item1.summarize());
    println!("news! {}",item2.summarize());
}
~~~

## 是否实现了多个方法

### 简单情况

~~~ rust
pub fn notify(item: impl Summary + Display) {
    println!("news! {}",item.summarize());
}
~~~

### 复杂情况

~~~ rust
pub fn notify<T: Summary + Display>(item: T) {
    println!("news! {}",item.summarize());
}
~~~

## 签名过于复杂

~~~ rust
fn notify<T, U>(a: T, b: U) -> String
where
    T: Summary + Display,
    U: Clone + Debug,
{
    return format!("news! {}", a.summarize());
}
~~~

## 指定返回类型实现了某个方法

限制了只能返回同一种类型

~~~ rust
pub fn notify(item: &str) -> impl Summary {
    NewArticle {
      headline: String::from("headline"),
      content: String::from("content"),
      author: String::from("author"),
      location: String::from("location"),
    }
}
~~~
