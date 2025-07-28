import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// 本文件运行于 Node.js - 请勿在此使用客户端代码（浏览器 API、JSX等）

const config: Config = {
  title: 'Ac-Wiki',
  tagline: '属于大学生群体的真·青年大学习',
  favicon: 'img/logo.ico',

  // 实验性功能, 参阅 https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // 提高与即将发布的 Docusaurus v4 的兼容性，true 即为启用全部实验性功能
  },

  // 此处设置为生产环境站点
  url: 'https://docusaurus.ac-wiki.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ac-Wiki', // Usually your GitHub org/user name.
  projectName: 'Ac-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // 设置文档的根路径
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {
            strict: false,
            output: 'html',
            trust: true
          }]],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // 指向仓库内的文档源代码
          editUrl:
            'https://github.com/Ac-Wiki/Ac-Wiki/tree/docusaurus-site',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 指向仓库内的文档源代码
          editUrl:
            'https://github.com/Ac-Wiki/Ac-Wiki/tree/docusaurus-site',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ac-Wiki',
      logo: {
        alt: 'Ac-Wiki Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '首页',
        },
        {to: '/category/校园生活', label: '校园生活', position: 'left'},
        {to: '/category/学术资源', label: '学术资源', position: 'left'},
        {to: '/category/成长通道', label: '成长通道', position: 'left'},
        {to: '/category/通识技能库', label: '通识技能库', position: 'left'},
        {to: '/blog', label: '博客', position: 'left'},
        {to: '/category/共建社区', label: '共建社区', position: 'right'},
        {
          href: 'https://github.com/Ac-Wiki/Ac-Wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram 频道',
              href: 'https://t.me/AcWiki',
            },
            {
              label: 'Telegram 群组',
              href: 'https://t.me/AcFourm',
            },
            {
              label: 'QQ 群组',
              href: 'https://qm.qq.com/q/WJI3hgBcm4',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ac-Wiki<br />使用 <a href="https://docusaurus.io/zh-CN/">Docusaurus</a> 构建`,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
