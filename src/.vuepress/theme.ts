import { plumeTheme } from "@vuepress-plume/vuepress-theme-plume";
import notes from "./notes";
import navbar from "./navbar";

export default plumeTheme({
  logo: "https://img.huankong.top/i/2022/11/29/6385ef8c7a675.ico",
  appearance: true,
  hostname: "https://blog.huankong.top/",
  avatar: {
    name: "huan_kong",
    url: "https://img.huankong.top/i/2022/11/29/6385f13b5bb93.png",
    description: "世间的美好总是不期而遇",
  },
  social: [{ icon: "github", link: "https://github.com/huankong233" }],
  navbar,
  notes,
  footer: {
    copyright: "Copyright © 2020-present huan_kong",
  },
  themePlugins: {
    shiki: {
      theme: "one-dark-pro",
    },
    markdownEnhance: {
      katex: true,
    },
    search: {
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    },
    comment: {
      provider: "Giscus",
      comment: true,
      repo: "pengzhanbo/pengzhanbo.cn",
      repoId: "MDEwOlJlcG9zaXRvcnkxNDgwMzY4MDc=",
      category: "Blog-Comment",
      categoryId: "DIC_kwDOCNLcx84CUulO",
      mapping: "pathname",
      reactionsEnabled: true,
      inputPosition: "top",
    },
  },
});
