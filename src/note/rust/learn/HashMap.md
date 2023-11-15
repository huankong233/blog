---
title: HashMap
author: huan_kong
createTime: 2023/07/11 11:02:55
permalink: /note/rust/learn/HashMap
---

## 介绍

使用键值对存储数据

### 创建

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("hk"), 10);
    scores.insert(String::from("kh"), 20);
}
```

在元素类型为 `Tuple` 的 `Vector` 上使用 `collect` 方法

可以组建一个 `HashMap`
要求 `Tuple` 有两个值 一个为 `k` 一个为 `v`

```rust
let teams = vec![String::from("blue"), String::from("red")];
let scores = vec![10, 50];
// 这里不用自己写类型 rust 可以自动识别
let list: HashMap<_, _> = teams.iter().zip(scores.iter()).collect();
```

### 访问

```rust
let score = list.get(&String::from("blue"));
match score {
  Some(s) => println!("{}",s),
  None => println!("team is not exist"),
}
```

### 遍历

```rust
for (k, v) in &list {
    println!("{} {}", k, v)
}
```

### 更新

需要先判断是否存在 不存在则插入

```rust
// 插入
list.entry(String::from("blue")).or_insert(30);
```

如果存在 `entry` 返回的就是一个可变的引用

如果不存在 则运行 `or_insert` 后会返回一个可变的引用

如果需要修改一个可变的引用就需要在变量前面加上 `*`

```rust
let blue = list.entry(String::from("blue")).or_insert(30);
*blue += 1;
```
