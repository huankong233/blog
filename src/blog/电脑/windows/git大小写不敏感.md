---
title: git大小写不敏感
createTime: 2026/03/01 16:23:30
permalink: /article/hxi6vydh/
---

`git` 默认是大小写不敏感的, 非常的反直觉, 但是我们可以通过设置让他大小写敏感

## 1.先设置大小写敏感

```bash
git config --global core.ignorecase false
```

## 2.如果有依旧冲突的文件, 可以通过下面的命令修正

```bash
git mv -f [你想要删掉的文件] [你想要留下的文件]
git mv -f a.js A.js
```
