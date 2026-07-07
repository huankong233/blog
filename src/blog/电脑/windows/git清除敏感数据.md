---
title: git清除敏感数据
createTime: 2026/04/26 16:47:13
permalink: /article/mztr3rmq/
---

## 命令

`packages/core/.env.development` 为需要清除的文件位置

```bash
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch packages/core/.env.development" --prune-empty --tag-name-filter cat -- --all
```
