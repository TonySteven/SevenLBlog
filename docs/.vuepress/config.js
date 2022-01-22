module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'StevenL的博客',
    description: '有趣灵魂的自我分享',
    base: '/SevenLBlog',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        // 侧边栏配置
        sidebar: {
            '/notes/': genSidebarConfig('指南') //设定侧边栏的函数，参数是名称
        },
        // 导航配置
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '前端规范',
                link: '/frontEnd/'
            },
            {
                text: '开发环境',
                link: '/development/'
            },
            {
                text: '学习文档',
                link: '/notes/'
            },
            {
                text: '游魂博客',
                link: 'https://www.iyouhun.com'
            },
            // 下拉列表的配置
            {
                text: 'Languages',
                items: [{
                        text: '简体中文',
                        link: '/language/chinese'
                    },
                    {
                        text: 'English',
                        link: '/language/English'
                    }
                ]
            }
        ]
    },
}



function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false, //是否可折叠
        children: [ //文章目录，构建出来的网页会按照顺序链接
            '',
            'getting-started',
            'basic-config',
            'assets',
            'markdown',
            'using-vue',
            'custom-themes',
            'i18n',
            'deploy'
        ]
    }]
}