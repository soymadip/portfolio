import { catppuccinMocha, catppuccinLatte } from "./src/config/prism.js";
import { appVersion } from "./src/utils/appVersion.js";
import { metaTags } from "./src/config/metaTags.js";

const ownerName = 'soymadip';
const SiteUrl = 'https://soymadip.me';
const SrtUrl = `${SiteUrl}/l`;

const config = {

  projectName: 'portfolio',

  title: ownerName,
  tagline: 'FOSS Developer',
  favicon: 'favicon/favicon.ico',

  url: 'https://new.soymadip.me',
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

  headTags: metaTags,

  customFields: {
    version: appVersion(),

    profilePic: 'https://avatars.githubusercontent.com/u/84225810?v=4',

    aboutMe: {

      title: "About Me",
      image: 'https://avatars.githubusercontent.com/u/84225810?v=4',
      description: [
        "I'm a passionate FOSS developer with expertise in designing and building solutions for real-world problems.",
        "My journey in software development started with a simple desire to automate repetitive tasks, specially in my PC.",
        "I believe in the power of open-source software and the community around it. My goal is to contribute to FOSS and to continuously learn and improve my skills."
      ],
      skills: [
        "Python","Bash", "Linux", "Git", "Docker", 
        "C", "lua", "JavaScript", "CI/CD"
      ],
      resumeLink: `${SrtUrl}/resume`
    },
    
    projects: [
      {
        title:   "KireiSakura Kit",
        state:   'active',
        desc:    "A framework written in Bash for making powerful shell scripts.",
        image:   "https://raw.githubusercontent.com/soymadip/KireiSakura-Kit/refs/heads/main/Assets/social-card.png",
        website: "https://kireisakura.soymadip.me",
        github:  null,
        Demo: null,
        featured: true,
        tags: ["Bash", "Shell", "CLI"],
      },
      {
        title:   "StaticShort",
        state:   'active',
        featured: true,
        desc:    "A simple static URL shortener - no backend required, just static hosting.",
        image:   "https://raw.githubusercontent.com/soymadip/StaticShort/refs/heads/main/Assets/social%20card.png",
        website: "https://github.com/soymadip/StaticShort",
        github:  null,
        Demo:    "https://short.soymadip.me/demo",
        tags: ["shortener", "static"],
      },
      {
        title:   "Regis",
        state:   'archived',
        featured: true,
        desc:    "The Ultimate Group Admin - Smart Moderation, Auto Filters, File Storage & More.",
        image:   "https://raw.githubusercontent.com/soymadip/Regis/refs/heads/main/Assets/social%20card.png",
        website: "https://regis.soymadip.me",
        github:  null,
        Demo:    null,
        tags: ["python", "pyrogram", "bot"],
      },
      {
        title:   "SDMP",
        state:   'paused',
        featured: false,
        desc:    "Student record management system built with PHP and MySQL",
        image:   "https://raw.githubusercontent.com/soymadip/SDMP/refs/heads/main/app/src/images/social%20card.png",
        website: null,
        github:  "https://github.com/soymadip/SDMP",
        Demo:    null,
        tags: ["php", "crud", "sql"],
      },
      {
        title:  "Portosaurus",
        state:  'planned',
        featured: false,
        desc:   "Portfolio Website generator built upon Docusaurus",
        Demo:   null,
        github: null,
        website: null,
        // tags: ["node", "static", "docusaurus", "portfolio"],
      }, 
      {
        title: "AutoTitle",
        state: 'planned',
        desc: "A python package + app to auto rename your downloaded series/anime episodes with filler marking."
      }
    ],

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
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: "notes",
          path: "notes",
          sidebarPath: './src/config/sidebar.js',

          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger', 'question'],
            extendDefaults: true,
          },
        },

        blog: {

          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          showReadingTime: false,

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

/*   themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  }, */

  themeConfig: ({

    // Social card
    image: '/img/social-card.jpeg',

    docs: {
      sidebar: {
        hideable: true,
      },
    },
    
    imageZoom: {
      options: {
        margin: 2,
        background: 'rgba(var(--ifm-background-color-rgb), 0.9)',
      }
    },

    // Default: Dark mode
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },

    navbar: {
      title: ownerName,
      hideOnScroll: true,

      logo: {
        alt: 'Site Logo',
        src: 'favicon/favicon.ico',
      },

      items: [
        {
          type: 'search',
          position: 'right',
          className: 'navbar-search-bar'
        },
        {
          label: 'About Me',
          to: '/#about',
          position: 'right',
          activeBaseRegex: '^/#about',
        },
        {
          label: 'Projects',
          to: '/#projects',
          position: 'right',
          activeBaseRegex: '^/#projects',
        },
        {
          label: 'Experience',
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
          className: '_navbar-separator',
          position: 'right'
        },
        {
          label: 'Blog',
          to: '/blog',
          position: 'right'
        }
      ],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    prism: {
      theme: catppuccinLatte,
      darkTheme: catppuccinMocha,
      additionalLanguages: [
        'java',
        'php', 
        'bash',
      ],
    },

    footer: {
      /* links: [
        {
            label: 'GitHub',
            href: 'https://github.com/',
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ` + ownerName,
      */
    },
    
  }),

  plugins: [
    require.resolve('./src/utils/generateFavicon'),
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        docsDir: "notes",
        docsRouteBasePath: "notes",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        hideSearchBarWithNoSearchContext: true,
        searchContextByPaths: ['notes', 'blog'],
        language: ["en"],
      }
    ],
    'plugin-image-zoom'
  ],
};

export default config;
