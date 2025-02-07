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

插件列表:

```txt
amayakite.aya-vue3-extension-pack
antfu.iconify
be5invis.vscode-custom-css
christian-kohler.npm-intellisense
christian-kohler.path-intellisense
davidanson.vscode-markdownlint
dbaeumer.vscode-eslint
donjayamanne.githistory
donjayamanne.python-extension-pack
dustypomerleau.rust-syntax
eamodio.gitlens
editorconfig.editorconfig
esbenp.prettier-vscode
eugenejeon.codesnap-plus-fix
fill-labs.dependi
github.copilot
github.copilot-chat
github.vscode-github-actions
jbockle.jbockle-format-files
kevinrose.vsc-python-indent
kisstkondoros.vscode-gutter-preview
lokalise.i18n-ally
meganrogge.template-string-converter
mikestead.dotenv
ms-azuretools.vscode-docker
ms-ceintl.vscode-language-pack-zh-hans
ms-python.black-formatter
ms-python.python
ms-python.vscode-pylance
oderwat.indent-rainbow
pkief.material-icon-theme
pranaygp.vscode-css-peek
redhat.vscode-xml
redhat.vscode-yaml
ritwickdey.liveserver
rust-lang.rust-analyzer
scansio.auto-close-empty-tag
shenjiaolong.vue-helper
steoates.autoimport
syler.sass-indented
tamasfe.even-better-toml
tauri-apps.tauri-vscode
usernamehw.errorlens
vue.volar
yoavbls.pretty-ts-errors
yzhang.markdown-all-in-one
zerotaskx.rust-extension-pack
zhuangtongfa.material-theme
```

### linux

`xargs -n 1 code --install-extension < extensions.txt`

### windows

`Get-Content extensions.txt | ForEach-Object { code --install-extension $_ }`

## 2.配置 `settings.json` 信息

`File->Preference->Settings`

![1669807448318.png](https://img.huankong.top/i/2022/11/30/63873d59e324b.png)
现在看到的是界面配置模式，点击右上角的大括号 ( 如下图 )，可以打开 `settings.json` 文件.

![1669807475068.png](https://img.huankong.top/i/2022/11/30/63873d748d015.png)
粘贴以下代码 ( 可以自行修改 ) ，保存即可

代码:

```json
{
  // 控制是否启用平滑插入动画
  "editor.cursorSmoothCaretAnimation": "on",
  // 搜索控件添加额外的空白
  "editor.find.addExtraSpaceOnTop": false,
  // 控制编辑器是否应呈现垂直字形边距。字形边距最常用于调试。
  "editor.glyphMargin": true,
  // 控制是否在编辑器中自动显示内联建议。
  "editor.inlineSuggest.enabled": true,
  // 关闭自动设置tabsize
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 设置字体大小
  "editor.fontSize": 16,
  // 每次保存的时候自动格式化；
  "editor.formatOnSave": true,
  // 每次保存的时候将代码按eslint格式进行修复
  "editor.codeActionsOnSave": {
    "source.sortImports": "explicit",
    "source.fixAll.eslint": "always"
  },
  // 关闭缩略图
  "editor.minimap.enabled": false,
  // 启用链接编辑
  "editor.linkedEditing": true,
  // 循环参数提示
  "editor.parameterHints.cycle": true,
  // 启用参数提示
  "editor.parameterHints.enabled": true,

  // 默认启用prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter"
  },
  "[rust]": {
    "editor.defaultFormatter": "rust-lang.rust-analyzer"
  },
  "[xml]": {
    "editor.defaultFormatter": "redhat.vscode-xml"
  },
  "[yaml]": {
    "editor.defaultFormatter": "redhat.vscode-yaml"
  },

  // python 语言服务器
  "python.languageServer": "Pylance",

  // 图标主题
  "workbench.iconTheme": "material-icon-theme",
  // 编辑器颜色主题
  "workbench.colorTheme": "One Dark Pro Darker",
  // 编辑器字体
  "workbench.startupEditor": "none",

  // 终端默认颜色
  "terminal.integrated.tabs.defaultColor": "terminal.ansiBlue",
  // 终端滚动平滑
  "terminal.integrated.smoothScrolling": true,
  // 选择即复制
  "terminal.integrated.copyOnSelection": true,
  // 光标样式
  "terminal.integrated.cursorStyle": "line",
  // 光标闪烁
  "terminal.integrated.cursorBlinking": true,

  // 自动更新
  "git.autofetch": true,
  // 启用智能提交
  "git.enableSmartCommit": true,
  // 总是在父文件夹中打开Git仓库
  "git.openRepositoryInParentFolders": "always",
  // Git忽略rebase警告
  "git.ignoreRebaseWarning": true,
  // 关闭提交警告
  "git.confirmSync": false,
  // 自动将本地标记替换为远程标记
  "git.replaceTagsWhenPull": true,

  // js/ts导入语句结尾设置
  "javascript.preferences.importModuleSpecifierEnding": "js",
  "javascript.suggest.paths": false,
  "typescript.preferences.importModuleSpecifierEnding": "js",
  "typescript.suggest.paths": false,
  "typescript.preferences.preferTypeOnlyAutoImports": true,
  "typescript.tsserver.maxTsServerMemory": 4096,

  // 失去焦点自动保存
  "files.autoSave": "onFocusChange",
  // 文件换行符设置
  "files.eol": "\r\n",
  // 指定文件类型 防止 css 被识别成 less/scss
  "files.associations": {
    "*.css": "css"
  },

  // 命令中心
  "window.commandCenter": false,

  // 信任所有文件
  "security.workspace.trust.untrustedFiles": "open",

  // eslint 配置
  "eslint.enable": true,
  "eslint.probe": ["javascript", "javascriptreact", "typescript", "typescriptreact", "html", "vue"],

  // prettier配置
  "prettier.enable": true,
  "prettier.printWidth": 200,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.quoteProps": "as-needed",
  "prettier.jsxSingleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.bracketSpacing": true,
  "prettier.bracketSameLine": false,
  "prettier.arrowParens": "always",
  "prettier.proseWrap": "preserve",
  "prettier.htmlWhitespaceSensitivity": "css",
  "prettier.vueIndentScriptAndStyle": false,
  "prettier.endOfLine": "crlf",
  "prettier.embeddedLanguageFormatting": "auto",
  "prettier.singleAttributePerLine": true,

  // 自动转换模板字符串 配置
  "template-string-converter.enabled": true,
  "template-string-converter.quoteType": "both",
  "template-string-converter.autoRemoveTemplateString": true,
  "template-string-converter.validLanguages": ["svelte", "typescript", "javascript", "typescriptreact", "javascriptreact", "html", "vue"],

  // liveServer 配置
  "liveServer.settings.donotShowInfoMsg": true,

  // npm-intellisense 配置
  "npm-intellisense.importES6": true,
  "npm-intellisense.importQuotes": "'",
  "npm-intellisense.importLinebreak": ";\r\n",
  "npm-intellisense.importDeclarationType": "const",

  // 自动缩进文件
  // updated 2024-12-18 08:58
  // https://github.com/antfu/vscode-file-nesting-config
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.expand": false,
  "explorer.fileNesting.patterns": {
    ".clang-tidy": ".clang-format, .clangd, compile_commands.json",
    ".env": "*.env, .env.*, .envrc, env.d.ts",
    ".gitignore": ".gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*",
    ".project": ".classpath",
    "+layout.svelte": "+layout.ts,+layout.ts,+layout.js,+layout.server.ts,+layout.server.js,+layout.gql",
    "+page.svelte": "+page.server.ts,+page.server.js,+page.ts,+page.js,+page.gql",
    "ansible.cfg": "ansible.cfg, .ansible-lint, requirements.yml",
    "app.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "artisan": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, server.php, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, webpack.mix.js, windi.config.*",
    "astro.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "build-wrapper.log": "build-wrapper*.log, build-wrapper-dump*.json, build-wrapper-win*.exe, build-wrapper-linux*, build-wrapper-macosx*",
    "BUILD.bazel": "*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, WORKSPACE",
    "Cargo.toml": ".clippy.toml, .rustfmt.toml, cargo.lock, clippy.toml, cross.toml, rust-toolchain.toml, rustfmt.toml",
    "CMakeLists.txt": "*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json, CMakeCache.txt",
    "composer.json": ".php*.cache, composer.lock, phpunit.xml*, psalm*.xml",
    "default.nix": "shell.nix",
    "deno.json*": "*.env, .env.*, .envrc, api-extractor.json, deno.lock, env.d.ts, import-map.json, import_map.json, jsconfig.*, tsconfig.*, tsdoc.*",
    "Dockerfile": "*.dockerfile, .devcontainer.*, .dockerignore, captain-definition, compose.*, docker-compose.*, dockerfile*",
    "flake.nix": "flake.lock",
    "gatsby-config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, gatsby-browser.*, gatsby-node.*, gatsby-ssr.*, gatsby-transformer.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "gemfile": ".ruby-version, gemfile.lock",
    "go.mod": ".air*, go.sum",
    "go.work": "go.work.sum",
    "hatch.toml": ".editorconfig, .flake8, .isort.cfg, .python-version, hatch.toml, requirements*.in, requirements*.pip, requirements*.txt, tox.ini",
    "I*.cs": "$(capture).cs",
    "Makefile": "*.mk",
    "mix.exs": ".credo.exs, .dialyzer_ignore.exs, .formatter.exs, .iex.exs, .tool-versions, mix.lock",
    "next.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, next-env.d.ts, next-i18next.config.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "nuxt.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .nuxtignore, .nuxtrc, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "package.json": "*.code-workspace, .browserslist*, .circleci*, .commitlint*, .cursorrules, .cz-config.js, .czrc, .dlint.json, .dprint.json*, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitmojirc.json, .gitpod*, .huskyrc*, .jslint*, .knip.*, .lintstagedrc*, .markdownlint*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .pylintrc, .release-please*.json, .releaserc*, .ruff.toml, .sentry*, .simple-git-hooks*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, apollo.config.*, appveyor*, azure-pipelines*, biome.json*, bower.json, build.config.*, bun.lock, bun.lockb, bunfig.toml, colada.options.ts, commitlint*, crowdin*, dangerfile*, dlint.json, dprint.json*, electron-builder.*, eslint*, firebase.json, grunt*, gulp*, jenkins*, knip.*, lerna*, lint-staged*, nest-cli.*, netlify*, nixpacks*, nodemon*, npm-shrinkwrap.json, nx.*, package-lock.json, package.nls*.json, phpcs.xml, pm2.*, pnpm*, prettier*, pullapprove*, pyrightconfig.json, release-please*.json, release-tasks.sh, release.config.*, renovate*, rollup.config.*, rspack*, ruff.toml, sentry.*.config.ts, simple-git-hooks*, sonar-project.properties, stylelint*, tslint*, tsup.config.*, turbo*, typedoc*, unlighthouse*, vercel*, vetur.config.*, webpack*, workspace.json, wrangler.toml, xo.config.*, yarn*",
    "Pipfile": ".editorconfig, .flake8, .isort.cfg, .python-version, Pipfile, Pipfile.lock, requirements*.in, requirements*.pip, requirements*.txt, tox.ini",
    "pubspec.yaml": ".metadata, .packages, all_lint_rules.yaml, analysis_options.yaml, build.yaml, pubspec.lock, pubspec_overrides.yaml",
    "pyproject.toml": ".commitlint*, .dlint.json, .dprint.json*, .editorconfig, .eslint*, .flake8, .flowconfig, .isort.cfg, .jslint*, .lintstagedrc*, .markdownlint*, .pdm-python, .pdm.toml, .prettier*, .pylintrc, .python-version, .ruff.toml, .stylelint*, .textlint*, .xo-config*, .yamllint*, MANIFEST.in, Pipfile, Pipfile.lock, biome.json*, commitlint*, dangerfile*, dlint.json, dprint.json*, eslint*, hatch.toml, lint-staged*, pdm.lock, phpcs.xml, poetry.lock, poetry.toml, prettier*, pyproject.toml, pyrightconfig.json, requirements*.in, requirements*.pip, requirements*.txt, ruff.toml, setup.cfg, setup.py, stylelint*, tox.ini, tslint*, uv.lock, uv.toml, xo.config.*",
    "quasar.conf.js": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, quasar.extensions.json, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "readme*": "AUTHORS, Authors, BACKERS*, Backers*, CHANGELOG*, CITATION*, CODEOWNERS, CODE_OF_CONDUCT*, CONTRIBUTING*, CONTRIBUTORS, COPYING*, CREDITS, Changelog*, Citation*, Code_Of_Conduct*, Codeowners, Contributing*, Contributors, Copying*, Credits, GOVERNANCE.MD, Governance.md, HISTORY.MD, History.md, LICENSE*, License*, MAINTAINERS, Maintainers, README-*, README_*, RELEASE_NOTES*, ROADMAP.MD, Readme-*, Readme_*, Release_Notes*, Roadmap.md, SECURITY.MD, SPONSORS*, Security.md, Sponsors*, authors, backers*, changelog*, citation*, code_of_conduct*, codeowners, contributing*, contributors, copying*, credits, governance.md, history.md, license*, maintainers, readme-*, readme_*, release_notes*, roadmap.md, security.md, sponsors*",
    "Readme*": "AUTHORS, Authors, BACKERS*, Backers*, CHANGELOG*, CITATION*, CODEOWNERS, CODE_OF_CONDUCT*, CONTRIBUTING*, CONTRIBUTORS, COPYING*, CREDITS, Changelog*, Citation*, Code_Of_Conduct*, Codeowners, Contributing*, Contributors, Copying*, Credits, GOVERNANCE.MD, Governance.md, HISTORY.MD, History.md, LICENSE*, License*, MAINTAINERS, Maintainers, README-*, README_*, RELEASE_NOTES*, ROADMAP.MD, Readme-*, Readme_*, Release_Notes*, Roadmap.md, SECURITY.MD, SPONSORS*, Security.md, Sponsors*, authors, backers*, changelog*, citation*, code_of_conduct*, codeowners, contributing*, contributors, copying*, credits, governance.md, history.md, license*, maintainers, readme-*, readme_*, release_notes*, roadmap.md, security.md, sponsors*",
    "README*": "AUTHORS, Authors, BACKERS*, Backers*, CHANGELOG*, CITATION*, CODEOWNERS, CODE_OF_CONDUCT*, CONTRIBUTING*, CONTRIBUTORS, COPYING*, CREDITS, Changelog*, Citation*, Code_Of_Conduct*, Codeowners, Contributing*, Contributors, Copying*, Credits, GOVERNANCE.MD, Governance.md, HISTORY.MD, History.md, LICENSE*, License*, MAINTAINERS, Maintainers, README-*, README_*, RELEASE_NOTES*, ROADMAP.MD, Readme-*, Readme_*, Release_Notes*, Roadmap.md, SECURITY.MD, SPONSORS*, Security.md, Sponsors*, authors, backers*, changelog*, citation*, code_of_conduct*, codeowners, contributing*, contributors, copying*, credits, governance.md, history.md, license*, maintainers, readme-*, readme_*, release_notes*, roadmap.md, security.md, sponsors*",
    "remix.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, remix.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "requirements.txt": ".editorconfig, .flake8, .isort.cfg, .python-version, requirements*.in, requirements*.pip, requirements*.txt, tox.ini",
    "rush.json": "*.code-workspace, .browserslist*, .circleci*, .commitlint*, .cursorrules, .cz-config.js, .czrc, .dlint.json, .dprint.json*, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitmojirc.json, .gitpod*, .huskyrc*, .jslint*, .knip.*, .lintstagedrc*, .markdownlint*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .pylintrc, .release-please*.json, .releaserc*, .ruff.toml, .sentry*, .simple-git-hooks*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, apollo.config.*, appveyor*, azure-pipelines*, biome.json*, bower.json, build.config.*, bun.lock, bun.lockb, bunfig.toml, colada.options.ts, commitlint*, crowdin*, dangerfile*, dlint.json, dprint.json*, electron-builder.*, eslint*, firebase.json, grunt*, gulp*, jenkins*, knip.*, lerna*, lint-staged*, nest-cli.*, netlify*, nixpacks*, nodemon*, npm-shrinkwrap.json, nx.*, package-lock.json, package.nls*.json, phpcs.xml, pm2.*, pnpm*, prettier*, pullapprove*, pyrightconfig.json, release-please*.json, release-tasks.sh, release.config.*, renovate*, rollup.config.*, rspack*, ruff.toml, sentry.*.config.ts, simple-git-hooks*, sonar-project.properties, stylelint*, tslint*, tsup.config.*, turbo*, typedoc*, unlighthouse*, vercel*, vetur.config.*, webpack*, workspace.json, wrangler.toml, xo.config.*, yarn*",
    "sanity.config.*": "sanity.cli.*, sanity.types.ts, schema.json",
    "setup.cfg": ".editorconfig, .flake8, .isort.cfg, .python-version, MANIFEST.in, requirements*.in, requirements*.pip, requirements*.txt, setup.cfg, tox.ini",
    "setup.py": ".editorconfig, .flake8, .isort.cfg, .python-version, MANIFEST.in, requirements*.in, requirements*.pip, requirements*.txt, setup.cfg, setup.py, tox.ini",
    "shims.d.ts": "*.d.ts",
    "svelte.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, houdini.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, mdsvex.config.js, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vite.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "vite.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "vue.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, capacitor.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, i18n.config.*, ionic.config.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, panda.config.*, playwright.config.*, postcss.config.*, puppeteer.config.*, react-router.config.*, rspack.config.*, sst.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, vuetify.config.*, webpack.config.*, windi.config.*",
    "*.asax": "$(capture).*.cs, $(capture).*.vb",
    "*.ascx": "$(capture).*.cs, $(capture).*.vb",
    "*.ashx": "$(capture).*.cs, $(capture).*.vb",
    "*.aspx": "$(capture).*.cs, $(capture).*.vb",
    "*.axaml": "$(capture).axaml.cs",
    "*.bloc.dart": "$(capture).event.dart, $(capture).state.dart",
    "*.c": "$(capture).h",
    "*.cc": "$(capture).hpp, $(capture).h, $(capture).hxx, $(capture).hh",
    "*.cjs": "$(capture).cjs.map, $(capture).*.cjs, $(capture)_*.cjs",
    "*.component.ts": "$(capture).component.html, $(capture).component.spec.ts, $(capture).component.css, $(capture).component.scss, $(capture).component.sass, $(capture).component.less",
    "*.cpp": "$(capture).hpp, $(capture).h, $(capture).hxx, $(capture).hh",
    "*.cs": "$(capture).*.cs",
    "*.cshtml": "$(capture).cshtml.cs",
    "*.csproj": "*.config, *proj.user, appsettings.*, bundleconfig.json",
    "*.css": "$(capture).css.map, $(capture).*.css",
    "*.cxx": "$(capture).hpp, $(capture).h, $(capture).hxx, $(capture).hh",
    "*.dart": "$(capture).freezed.dart, $(capture).g.dart",
    "*.db": "*.db-shm, *.db-wal",
    "*.ex": "$(capture).html.eex, $(capture).html.heex, $(capture).html.leex",
    "*.fs": "$(capture).fs.js, $(capture).fs.js.map, $(capture).fs.jsx, $(capture).fs.ts, $(capture).fs.tsx, $(capture).fs.rs, $(capture).fs.php, $(capture).fs.dart",
    "*.go": "$(capture)_test.go",
    "*.java": "$(capture).class",
    "*.js": "$(capture).js.map, $(capture).*.js, $(capture)_*.js, $(capture).d.ts, $(capture).js.flow",
    "*.jsx": "$(capture).js, $(capture).*.jsx, $(capture)_*.js, $(capture)_*.jsx, $(capture).module.css, $(capture).less, $(capture).module.less, $(capture).module.less.d.ts, $(capture).scss, $(capture).module.scss, $(capture).module.scss.d.ts",
    "*.master": "$(capture).*.cs, $(capture).*.vb",
    "*.md": "$(capture).*",
    "*.mjs": "$(capture).mjs.map, $(capture).*.mjs, $(capture)_*.mjs",
    "*.module.ts": "$(capture).resolver.ts, $(capture).controller.ts, $(capture).service.ts",
    "*.mts": "$(capture).mts.map, $(capture).*.mts, $(capture)_*.mts",
    "*.pubxml": "$(capture).pubxml.user",
    "*.py": "$(capture).pyi",
    "*.razor": "$(capture).razor.cs, $(capture).razor.css, $(capture).razor.scss",
    "*.resx": "$(capture).*.resx, $(capture).designer.cs, $(capture).designer.vb",
    "*.tex": "$(capture).acn, $(capture).acr, $(capture).alg, $(capture).aux, $(capture).bbl, $(capture).bbl-SAVE-ERROR, $(capture).bcf, $(capture).blg, $(capture).fdb_latexmk, $(capture).fls, $(capture).glg, $(capture).glo, $(capture).gls, $(capture).idx, $(capture).ind, $(capture).ist, $(capture).lof, $(capture).log, $(capture).lot, $(capture).nav, $(capture).out, $(capture).run.xml, $(capture).snm, $(capture).synctex.gz, $(capture).toc, $(capture).xdv",
    "*.ts": "$(capture).js, $(capture).d.ts.map, $(capture).*.ts, $(capture)_*.js, $(capture)_*.ts",
    "*.tsx": "$(capture).ts, $(capture).*.tsx, $(capture)_*.ts, $(capture)_*.tsx, $(capture).module.css, $(capture).less, $(capture).module.less, $(capture).module.less.d.ts, $(capture).scss, $(capture).module.scss, $(capture).module.scss.d.ts, $(capture).css.ts",
    "*.vbproj": "*.config, *proj.user, appsettings.*, bundleconfig.json",
    "*.vue": "$(capture).*.ts, $(capture).*.js, $(capture).story.vue",
    "*.w": "$(capture).*.w, I$(capture).w",
    "*.wat": "$(capture).wasm",
    "*.xaml": "$(capture).xaml.cs"
  },

  // 缓解 vue 导致 vsc 卡顿
  "search.followSymlinks": false,
  "gitlens.views.repositories.autoRefresh": false,
  "git.autorefresh": false,
  "vue.server.hybridMode": false
}
```

以后只要代码被保存就会自动格式化代码了,鼠标失焦也会自动保存.
