import { catppuccinMocha, catppuccinLatte } from "./src/config/prism.js";
import { appVersion } from "./src/utils/appVersion.js";
import { metaTags } from "./src/config/metaTags.js";
import { config as portfolio } from "./config.js";

const ownerName = 'soymadip';

const config = {

  projectName: portfolio.projectName,
  title: portfolio.aboutMe.title,

  tagline: portfolio.tagline,

  favicon: portfolio.favicon,

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

    aboutMe: portfolio.aboutMe,
    
    projects: portfolio.projects,

    socialLinks: portfolio.socialLinks,
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
