---
title: 无法找到模块xxx.vue
createTime: 2024/04/19 13:37:52
permalink: /article/1t0lhred/
tags:
  - 前端
  - js
  - ts
  - vue
---

## 解决方案

检查你的 `script` 标签 是不是完整的，有没有写 `lang="ts"`

```vue
<template></template>

<script lang="ts" setup></script>

<style scoped></style>
```
