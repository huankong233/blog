---
title: Struct
author: huan_kong
createTime: 2023/07/10 10:14:30
permalink: /note/rust/learn/Struct
---

## 介绍

类似 `ts` 里的接口

```rust
struct User {
    username: String,
    email: String,
    sign_in_account: u64,
    active: bool,
}

fn main() {
    let user1 = User {
        username: String::from("username"),
        email: String::from("email"),
        sign_in_account: 10,
        active: true,
    };
}
```

一样也默认是不可变 如果可变那么所有的字段都是可变的

```rust
let mut user1 = User {
    username: String::from("username"),
    email: String::from("email"),
    sign_in_account: 10,
    active: true,
};
```

## struct 更新

```rust
let user2 = User {
    email: String::from("email2"),
    username: String::from("username2"),
    ..user1
};
```

## Tuple struct

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);
let black = Color(0, 0, 0);
let origin = Point(0, 0, 0);
```

## 打印 struct

```rust
// 重点需要加上这个derive
#[derive(Debug)]
struct Rect {
    width: u32,
    height: u32,
}

fn main() {
    let rect = Rect {
        width: 30,
        height: 50,
    };

    // 不加 # 就是打印在一行 加上后会自动换行
    println!("{:#?}", rect);
}
```

## 为 struct 定义方法

一个 `struct` 可以有多个 `impl`

```rust
struct Rect {
    width: u32,
    height: u32,
}

impl Rect {
    fn area(&self) -> u32 {
        return self.width * self.height;
    }
}
```

也可以传入多个参数 在后面接收即可

```rust
impl Rect {
    fn can_hold(&self, other: &Rect) -> bool {
        self.width >= other.width && self.height >= other.height
    }
}

fn main() {
    let rect1 = Rect {
        width: 30,
        height: 50,
    };

    let rect2 = Rect {
        width: 40,
        height: 50,
    };

    let rect3 = Rect {
        width: 30,
        height: 40,
    };

    println!("{}", rect1.can_hold(&rect2));
    println!("{}", rect1.can_hold(&rect3));
}
```

## 定义 struct 关联函数

```rust
impl Rect {
    fn square(size: u32) -> Rect {
        Rect {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let square = Rect::square(30);
}
```
