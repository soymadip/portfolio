import {
  catppuccinMocha, 
  catppuccinLatte
} from "./static/prism.js";

const ownerName = 'soymadip';
const SiteUrl = 'https://soymadip.me';
const SrtUrl = `${SiteUrl}/l`;

const config = {
  
  projectName: 'portfolio',

  title: ownerName,
  tagline: 'FOSS Developer',
  favicon: 'favicon/favicon.ico',

  url: 'https://portfolio.soymadip.me',
  baseUrl: '/',

  // GH Pages config
  organizationName: ownerName,
  deploymentBranch: 'site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/favicon/site.webmanifest',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-TileColor',
        content: '#202030',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#202030',
      },
    },
  ],

  customFields: {

    profilePic: 'https://avatars.githubusercontent.com/u/84225810?v=4',

    socialLinks: [
      {
        name: 'Email',
        icon: 'mail',
        desc: 'Send me an email',
        url: `${SrtUrl}/mail`,
      },     
      {
        name: 'LinkedIn',
        icon: 'linkedin',
        desc: 'Connect on LinkedIn',
        url: `${SrtUrl}/linkedin`,
        pin: true
      },
      {
        name: 'Telegram',
        icon: 'telegram',
        desc: 'Reach me on Telegram',
        url: `${SrtUrl}/telegram`,
        pin: true
      },
      {
        name: 'Discord',
        icon: 'discord',
        desc: 'Become my friend',
        url: `${SrtUrl}/discord`,
      },
      {
        name: 'Twitter',
        icon: 'x',
        desc: 'Find me on Twitter',
        url:  `${SrtUrl}/twitter`
      },
      {
        name: 'GitHub',
        icon: 'githubalt',
        desc: 'Check out my git repos',
        url: `${SrtUrl}/github`,
        pin: true
      },
      {
        name: 'GitLab',
        icon: 'gitlab',
        desc: 'View my GitLab profile',
        url: `${SrtUrl}/github`,
      },
      {
        name: 'Anilist',
        icon: 'anilist',
        desc: 'If you are otaku, check out!',
        url: `${SrtUrl}/anilist`,
      },
      {
        name: 'Simkl',
        icon: 'simkl',
        desc: 'I watch Movies & Series too!',
        url: `${SrtUrl}/simkl`,
      }
    ],

    projects: [
      {
        title: "KireiSakura Kit",
        description: "A framework written in Bash for making powerful shell scripts.",
        image: "https://raw.githubusercontent.com/soymadip/KireiSakura-Kit/refs/heads/main/Assets/social-card.png",
        website: "https://kireisakura.soymadip.me",
        github: null,
        liveDemo: null,
        featured: true,
        tags: ["Bash", "Shell", "CLI"],
      },
      {
        title: "StaticShort",
        description: "A simple static URL shortener - no backend required, just static hosting.",
        image: "https://raw.githubusercontent.com/soymadip/StaticShort/refs/heads/main/Assets/social%20card.png",
        website: "https://github.com/soymadip/StaticShort",
        github: null,
        liveDemo: "https://short.soymadip.me/demo",
        featured: true,
        tags: ["shortener", "static"],
      },
      {
        title: "Regis",
        description: "The Ultimate Group Admin - Smart Moderation, Auto Filters, File Storage & More.",
        image: "https://raw.githubusercontent.com/soymadip/Regis/refs/heads/main/Assets/social%20card.png",
        website: "https://regis.soymadip.me",
        github: null,
        liveDemo: null,
        featured: true,
        tags: ["python", "pyrogram", "bot"],
      },
      {
        title: "SDMP",
        description: "Student record management system built with PHP and MySQL",
        image: "https://raw.githubusercontent.com/soymadip/SDMP/refs/heads/main/src/images/social%20card.png",
        website: null,
        github: "https://github.com/soymadip/SDMP",
        liveDemo: null,
        featured: false,
        tags: ["php", "crud", "sql"],
      }
    ],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: "notes",
          path: "notes",
          sidebarPath: './notes/sidebar.js',
        },

        blog: {

          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          showReadingTime: false,

          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
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
    
      // Social card
      image: 'img/social-card.jpeg',

      // Default: Dark mode
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },

      navbar: {
        title: ownerName,

        logo: {
          alt: 'Site Logo',
          src: 'favicon/favicon.ico',
        },

        items: [
          {
            label: 'About Me*',
            to: '/#about',
            position: 'right',
            activeBaseRegex: '^/#about',
          },
          {
            label: 'Projects',
            to: '/#featured-projects',
            position: 'right',
            activeBaseRegex: '^/#featured-projects',
          },
          {
            label: 'Experience*',
            to: '/#experience',
            position: 'right', 
            activeBaseRegex: '^/#experience',
          },
          {
            label: 'Contact',
            to: '/#contact',
            position: 'right',
            activeBaseRegex: '^/$contact',
          },
          {
            label: 'Notes', 
            to: '/notes',
            position: 'right'
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'right'
          }
        ],
      },
/*      footer: {
        style: 'dark',
      links: [
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ` + ownerName,
      }, */

      prism: {
        theme: catppuccinLatte,
        darkTheme: catppuccinMocha,

        additionalLanguages: [
          'java',
          'php', 
          'bash',
        ],
      },
    }),

  plugins: [
    require.resolve('./src/utils/generate-favicons')
  ],
};

export default config;
