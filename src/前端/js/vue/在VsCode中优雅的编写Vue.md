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

![1669807355203.png](https://img.huankong.top/i/2022/11/30/63873cfc639dc.png)

然后再安装 `Aya Vue3 extension Pack` 插件包

## 2.配置 `settings.json` 信息

`File->Preference->Settings`

![1669807448318.png](https://img.huankong.top/i/2022/11/30/63873d59e324b.png)
现在看到的是界面配置模式, 点击右上角的大括号 ( 如下图 ), 可以打开 `settings.json` 文件。

![1669807475068.png](https://img.huankong.top/i/2022/11/30/63873d748d015.png)
粘贴以下代码 ( 可以自行修改 ) , 保存即可

代码:

~~~json
{
  // 关闭自动设置tabsize
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // 每次保存的时候将代码按eslint格式进行修复
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  // 启用链接编辑
  "editor.linkedEditing": true,
  // 默认启用prettier
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  // vue默认格式化切换为vetur
  "[vue]": { "editor.defaultFormatter": "octref.vetur" },
  // 让函数(名)和后面的括号之间是否加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,

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

  // vetur配置
  // 详见:https://vuejs.github.io/vetur/guide/formatting.html#settings
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatterOptions": {
    //配置见:https://beautifier.io/
    "js-beautify-html": {
      "wrap_attributes": "force-expand-multiline",
      "wrap_line_length": 200,
      "end_with_newline": false,
      "semi": false,
      "singleQuote": true,
      "insertSpaceBeforeFunctionParenthesis": false
    },
    //prettier配置
    //详见:https://prettier.io/docs/en/options.html
    "prettier": {
      "singleQuote": true,
      "semi": false, // 使用分号, 默认true
      "useTabs": false, // 使用tab缩进, 默认false
      "tabWidth": 2, // tab缩进大小,默认为4或2
      "arrowParens": "avoid", // 箭头函数参数括号 默认avoid。avoid 能省略括号的时候就省略 例如x => x, always 总是有括号
      "bracketSpacing": true, // 在对象, 数组括号与文字之间加空格 "{ foo: bar }"
      "printWidth": 100, // 一行的字符数, 如果超过会进行换行, 默认为80
      "trailingComma": "none", // 去掉末尾的逗号
      "insertSpaceBeforeFunctionParenthesis": false
    }
  },

  // Manta's Stylus Supremacy配置
  // 详见:https://thisismanta.github.io/stylus-supremacy/#options
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertNewLineAroundImports": false,
  "stylusSupremacy.insertNewLineAroundBlocks": false,

  // eslint配置
  // 详见:https://eslint.org/docs/latest/rules/
  "eslint.packageManager": "yarn",
  "eslint.validate": ["javascript", "javascriptreact", "vue"],

  // 失去焦点自动保存
  "files.autoSave": "onFocusChange",
  // 删除时不提示
  "explorer.confirmDelete": false,
  // liveServer隐藏详情
  "liveServer.settings.donotShowInfoMsg": true,
  // 在没有从上一会话中恢复出信息的情况下, 在启动时不打开编辑器。
  "workbench.startupEditor": "none",
  // 信任所有文件
  "security.workspace.trust.untrustedFiles": "open",
  // 修改默认终端为cmd
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.fontSize": 15
}
~~~

以后只要代码被保存就会自动格式化代码了,鼠标失焦也会自动保存。
