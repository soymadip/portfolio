import {
  catppuccinMocha, 
  catppuccinLatte
} from "./static/prism.js";

const ownerName = 'soymadip';
const SiteUrl = 'https://soymadip.me';

const config = {
  
  projectName: 'portfolio',

  title: ownerName,
  tagline: 'FOSS Developer',
  favicon: 'favicon/favicon.ico',

  url: SiteUrl,
  baseUrl: '/',


  // GH Pages config. Delete else.
  organizationName: ownerName,
  deploymentBranch: 'site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {

    profilePic: 'https://avatars.githubusercontent.com/u/84225810?v=4',

    socialLinks: [
      {
        icon: 'linkedin',
        tooltip: 'Connect on LinkedIn',
        url: SiteUrl + '/l/linkedin',
        pin: true
      },
      {
        icon: 'github',
        tooltip: 'Check out my code',
        url: SiteUrl + '/l/github',
        pin: true
      },
      {
        icon: 'telegram',
        tooltip: 'Message me on Telegram',
        url: SiteUrl + '/l/telegram',
        pin: true
      },
      {
        icon: 'mail',
        tooltip: 'Send me an email',
        url: SiteUrl + '/l/mail',
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
        description: "The only solution needed for student data management ",
        image: "https://raw.githubusercontent.com/soymadip/SDMP/refs/heads/main/src/images/cts-logo.png",
        website: null,
        github: "https://github.com/soymadip/SDMP",
        liveDemo: null,
        featured: false,
        tags: ["python", "pyrogram", "bot"],
      },
    ],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: "notes",

          sidebarPath: './docs/sidebar.js',
        },

        blog: {
          routeBasePath: 'changelog',

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
            label: 'About Me',
            to: '/about',
            position: 'right',
          },
          {
            label: 'Projects',
            to: '/projects',
            position: 'right',
          },
          {
            label: 'Experience',
            to: '/experience',
            position: 'right',
          },
          {
            label: 'Contact',
            to: '/contact',
            position: 'right',
          },
          {
            label: 'Notes', 
            to: '/notes',
            position: 'right'
          },
        ],
      },
/*      footer: {
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
        copyright: `Copyright © ${new Date().getFullYear()} ` + ownerName,
      }, */
      prism: {
        theme: catppuccinLatte,
        darkTheme: catppuccinMocha,
      },
    }),
};

export default config;
