module.exports = {
  port: "3030",
  base: "/",
  head: [
    ["link", {
      rel: "icon",
      href: `/favicon.ico`
    }]
  ],

  title: '格知',
  description: '無善無惡心之體，有善有惡意之動，知善知惡是良知，為善去惡是格物。',

  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // repo: 'djxhero/know-my-life',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',

    displayAllHeaders: true,
    nav: [{
      text: "gongkao",
      items: [{
          text: "yanyu",
          link: "/gongkao/yanyu/"
        },
        {
          text: "changshi",
          link: "/gongkao/changshi/"
        },
        {
          text: "shuliang",
          link: "/gongkao/shuliang/"
        },
        {
          text: "panduan",
          link: "/gongkao/panduan/"
        },
        {
          text: "ziliao",
          link: "/gongkao/ziliao/"
        }
      ]
    }, ],
    sidebar: [
      {
        title: 'Overview', // 必要的
        path: '/gongkao/'// 可选的, 应该是一个绝对路径
      },
      {
        title: 'yanyu', // 必要的
        // path: '/gongkao/yanyu', // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth:2, // 可选的, 默认值是 1
        children: [
          'gongkao/yanyu/',
          {
            title: 'yanyu-xuanci', // 必要的
            path: '/gongkao/yanyu/fill-word', // 可选的, 应该是一个绝对路径
            collapsable: false // 可选的, 默认值是 true,
          }
        ]
      },
      {
        title: 'changshi', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth:2, // 可选的, 默认值是 1
        children: [
          'gongkao/changshi/'
        ]
      }
    ],
    lastUpdated: 'Last Updated', // string | boolean
  }
}