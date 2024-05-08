---
title: 在VsCode中优雅的编写Vue
author: huan_kong
createTime: 2022/10/30 12:13:54
permalink: /article/ug02d6pg/
tags:
  - 前端
  - js
  - vue
  - vscode
---

## 1.安装插件

安装 `Manta's Stylus Supremacy` `Prettier - Code formatter` `ESLint` 以及 `Aya Vue3 extension Pack` 插件包

::: warning
`TypeScript Vue Plugin (Volar)` 已被弃用
:::

::: tip
`Auto Rename Tag` ,`Path Intellisense` ,`Auto Close Tag` ,`Auto Import` 的功能 `vscode` 已原生实现可以手动卸载
:::

## 2.配置 `settings.json` 信息

`File->Preference->Settings`

![1669807448318.png](https://img.huankong.top/i/2022/11/30/63873d59e324b.png)
现在看到的是界面配置模式, 点击右上角的大括号 ( 如下图 ), 可以打开 `settings.json` 文件.

![1669807475068.png](https://img.huankong.top/i/2022/11/30/63873d748d015.png)
粘贴以下代码 ( 可以自行修改 ) , 保存即可

代码:

```json
{
  // 控制是否启用平滑插入动画
  "editor.cursorSmoothCaretAnimation": "on",
  // 搜索控件添加额外的空白
  "editor.find.addExtraSpaceOnTop": false,
  // 控制编辑器是否应呈现垂直字形边距. 字形边距最常用于调试.
  "editor.glyphMargin": true,
  // 控制是否在编辑器中自动显示内联建议.
  "editor.inlineSuggest.enabled": true,
  // 关闭自动设置tabsize
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 每次保存的时候自动格式化；
  "editor.formatOnSave": true,
  // 每次保存的时候将代码按eslint格式进行修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  // 失去焦点自动保存
  "files.autoSave": "onFocusChange",

  // 使用prettier格式化代码
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // prettier配置
  // 详见:https://prettier.io/docs/en/options.html
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.arrowParens": "avoid",
  "prettier.bracketSpacing": true,
  "prettier.printWidth": 100,
  "prettier.trailingComma": "none",

  // Manta's Stylus Supremacy配置
  // 详见:https://thisismanta.github.io/stylus-supremacy/#options
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertNewLineAroundImports": false,
  "stylusSupremacy.insertNewLineAroundBlocks": false,

  "vue.updateImportsOnFileMove.enabled": true,
  "vue.server.hybridMode": true
}
```

以后只要代码被保存就会自动格式化代码了,鼠标失焦也会自动保存.
