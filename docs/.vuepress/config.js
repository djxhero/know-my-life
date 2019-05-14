module.exports = {
  port: "3030",
  base: "/",
  head: [
    ["link", {
      rel: "icon",
      href: `/favicon.ico`
    }]
  ],

  title: 'config title2',
  description: 'config description2',

  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'djxhero/know-my-life',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',

    displayAllHeaders: true,
    nav: [{
      text: "指南",
      link: "/guide/"
    }],
    sidebar: {
      "/guide/": genGuideSidebar(true)

    },
    lastUpdated: 'Last Updated', // string | boolean
  }
}

function genGuideSidebar(isZh) {
  return [{
    title: isZh ? "快速入门" : "Getting Start",
    collapsable: true,
    children: ["", "quick-start", "install"]
  }]
}