// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


const config = {

  title: 'Soymadip',
  tagline: 'Software Developer',
  favicon: 'favicon/favicon.ico',

  // Set the production url of site
  // <baseUrl> is pathname, site should be in url/baseUrl/
  url: 'https://new.soymadip.me',
  baseUrl: '/',

  // GitHub pages deployment config. Delete if not GH pages.
  organizationName: 'soymadip',
  projectName: 'portfolio',
  deploymentBranch: 'site',
  onBrokenLinks: 'warn', // Change from 'throw' to 'warn'
  onBrokenMarkdownLinks: 'warn',

  // Use this field to set useful metadata like html lang.
  // Ex, if site is Chinese, replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',

          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/soymadip/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/soymadip/',

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  themeConfig:
    ({
      // Project's social card
      image: 'img/social-card.jpeg',
      navbar: {
        title: 'Soymadip',
        logo: {
          alt: 'Site Logo',
          src: 'favicon/favicon.ico',
        },
        items: [
          {
            label: 'About Me',
            to: '/about',
            position: 'right',
          },
          {
            label: 'Experience',
            to: '/experience',
            position: 'right',
          },
          {
            label: 'Projects',
            to: '/projects',
            position: 'right',
          },
          {
            label: 'Contact',
            to: '/contact',
            position: 'right',
          },
          {
            label: 'Blog', 
            to: '/docs',
            position: 'right'
          },
        ],
      },
/*       footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/',
              },
              {
                label: 'X',
                href: 'https://x.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} soymadip.`,
      }, */
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
