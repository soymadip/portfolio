import { catppuccinMocha, catppuccinLatte } from "./src/config/prism.js";
import { appVersion } from "./src/utils/appVersion.js";
import { metaTags } from "./src/config/metaTags.js";
import { usrConf } from "./src/utils/userConfig.js";

const config = {

  projectName: "Portosaurus",
  title: usrConf.about_me.title,

  tagline: usrConf.hero_section.tagline,

  favicon: usrConf.favicon,

  url: 'https://new.soymadip.me',
  baseUrl: '/',

  // GH Pages config
  organizationName: usrConf.about_me.title,
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

    profilePic: usrConf.hero_section.profile_pic,

    aboutMe: usrConf.about_me,
    
    projects: usrConf.projects,

    socialLinks: usrConf.social_links,
    
    robotsTxt: {
      enable: usrConf.robots_txt,
      rules: [
        {
          disallow: [
            '/notes/',
            '/tasks/',
          ]
        }
      ],
      customLines: []
    },
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
      title: usrConf.about_me.title,
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
          type: 'dropdown',
          label: 'More',
          position: 'right',
          className: '_navbar-more-items',
          items: [
            {
              label: 'Notes', 
              to: '/notes',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Tasks',
              to: '/tasks',
            }
          ]
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
    require.resolve('./src/utils/generateRobotsTxt'),
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
