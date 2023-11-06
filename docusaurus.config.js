import { themes } from 'prism-react-renderer';

const lightCodeTheme = {
  plain: {
    color: "#2e2d2c",
    backgroundColor: "#fefefe"
  },
  styles: [{
    types: ["prolog", "constant", "builtin"],
    style: {
      color: "rgb(189, 147, 249)"
    }
  }, {
    types: ["inserted", "function"],
    style: {
      color: "#aa5d00"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      color: "#007299"
    }
  }, {
    types: ["string", "char", "tag", "selector"],
    style: {
      color: "#007299"
    }
  }, {
    types: ["keyword", "variable"],
    style: {
      color: "#c4352b",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "#696969"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#aa5d00"
    }
  }]
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ACTUM Digital Accessibility',
  // tagline: 'Dinosaurs are cool',
  url: 'https://accessibility.actumdigital.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'Accessibility features.', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/styles/index.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Homepage - ACTUM Digital accessibility',
          src: 'img/actum-accessibility-logo.svg',
          srcDark: 'img/actum-accessibility-logo-dark.svg',
          width: 240,
          height: 36
        },
        items: [
          {
            type: 'doc',
            docId: 'wcag-documents/intro',
            position: 'right',
            label: 'WCAG Documents',
          },
          {
            type: 'doc',
            docId: 'inaccessible-components/intro',
            position: 'right',
            label: 'Inaccessible Components',
          },
          {
            type: 'doc',
            docId: 'user-preferences/intro',
            position: 'right',
            label: 'User Preferences',
          },
          // {
          //   href: 'https://github.com/actum/accessibility',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About us',
                to: 'https://www.actumdigital.com/',
              },
              {
                label: 'Join us',
                to: 'https://www.actumdigital.com/careers',
              },
              {
                label: 'Contact us',
                to: 'mailto:info@actumdigital.com',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/actumdigital/',
                className: 'footer__link-item footer__link-linkedin',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/actum',
                className: 'footer__link-item footer__link-twitter',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/actumdigital',
                className: 'footer__link-item footer__link-instagram',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/life-at-apollo-division',
                className: 'footer__link-item footer__link-medium',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/actum/accessibility',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://actumdigital.com/" target="_blank" rel="noreferrer noopener">ACTUM Digital</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: themes.vsDark,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '6C73ZS6EPH',

        // Public API key: it is safe to commit it
        apiKey: '425b9078e080ee6de123ae924813a735',

        indexName: 'accessibility-actumdigital',

        insights: true,

        container: "div",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',

        //... other Algolia params
      },
      image: "/img/actum-accessibility-2x.png"
    }),
  plugins: ['docusaurus-plugin-sass'],
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#ffffff',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'ACTUM Digital'
      }
    },
    // {
    //   tagName: "link",
    //   attributes: {
    //     rel: "stylesheet",
    //     href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3",
    //   }
    // }
  ],
  clientModules: [
    require.resolve('./global.js'),
  ],
}

module.exports = config
