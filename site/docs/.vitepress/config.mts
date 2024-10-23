import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "中国修仙小说",
  description: "中国修仙小说集合",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "详情", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Examples",
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/fundgao/XIU_XIAN_XIAO_SHUO" },
    ],
  },
});