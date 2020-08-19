module.exports = {
    markdown: {
        lineNumbers: true
    },
    base: "/",
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
            { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'Guide', link: 'https://github.com/it-song1992', target: '_blank' }
        ],
        sidebar: {
            '/git/': [
                'command',
                'error'
            ],
        },
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: '',
        // 假如文档不是放在仓库的根目录下：
        docsDir: '',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        smoothScroll: true
    }
}