import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Obsidian Integration: เรียกใช้ wiki-link plugin
// หมายเหตุ: การตั้งค่านี้จะทำให้ [[Wikilink]] ทำงานได้
const wikiLinkPlugin = require('remark-wiki-link');

const config: Config = {
  title: 'Power BI Mastery',
  tagline: 'Knowledge Fabric: Academy-as-Code System',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://datafabric.academy',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/course-power-bi/',

  // GitHub Pages Deployment Config
  organizationName: 'DataFabric-Academy', // GitHub Org ของคุณ
  projectName: 'course-power-bi', // ชื่อ Repo
  // หมายเหตุ: deploymentBranch ไม่จำเป็นเมื่อใช้ GitHub Actions สำหรับ deploy
  trailingSlash: false,

  onBrokenLinks: 'warn', // เปลี่ยนเป็น 'throw' เมื่อมั่นใจว่าลิงก์ครบถ้วน
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // เชื่อมโยง Obsidian Zettelkasten Style
          remarkPlugins: [
            remarkMath, 
            [wikiLinkPlugin, { hrefTemplate: (permalink: string) => `${permalink}` }] 
          ],
          rehypePlugins: [rehypeKatex],
          // ชี้ Route ไปที่ root เพื่อให้เข้าถึงง่าย (เช่น datafabric.academy/intro)
          routeBasePath: '/', 
        },
        blog: false, // ปิด Blog ใน Power BI Mastery Course
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3yUy5gfv0CGX',
      crossOrigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DataFabric Academy',
      logo: {
        alt: 'Knowledge Fabric Logo',
        src: 'img/logo.svg',
        href: 'https://datafabric.academy/',
        target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Curriculum',
        },
        {
          href: 'https://github.com/DataFabric-Academy/DataFabric-Academy.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curriculum',
          items: [
            {
              label: 'Azure Fabric',
              to: '/category/azure-fabric', // ตัวอย่าง Link
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Organization',
              href: 'https://github.com/DataFabric-Academy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DataFabric Academy. Built with Knowledge Fabric System.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'sql', 'bash', 'json'], // เพิ่มภาษาที่ใช้บ่อยใน Power BI Stack (PowerShell, SQL)
      // หมายเหตุ: DAX และ M language ใช้ 'text' หรือ 'javascript' สำหรับ syntax highlighting
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

