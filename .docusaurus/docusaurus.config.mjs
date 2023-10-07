/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Artela Docs",
  "tagline": "Build on Artela",
  "url": "https://artela.network",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "trailingSlash": false,
  "organizationName": "artela",
  "projectName": "artela-docs",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "path": "docs/home",
          "sidebarPath": "/Users/admin/mytech/go-work/src/github.com/artela-network/artela-docs/sidebars.js",
          "breadcrumbs": true
        },
        "blog": false,
        "theme": {
          "customCss": "/Users/admin/mytech/go-work/src/github.com/artela-network/artela-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-content-docs",
      {
        "path": "docs/main",
        "routeBasePath": "main",
        "id": "main",
        "sidebarPath": "/Users/admin/mytech/go-work/src/github.com/artela-network/artela-docs/sidebars.js",
        "breadcrumbs": true,
        "editUrl": "https://github.com/artela-network/artela-docs/tree/main/"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "path": "docs/develop",
        "routeBasePath": "develop",
        "id": "develop",
        "sidebarPath": "/Users/admin/mytech/go-work/src/github.com/artela-network/artela-docs/sidebars.js",
        "breadcrumbs": true,
        "editUrl": "https://github.com/artela-network/artela-docs/tree/main/"
      }
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        "quality": 80,
        "max": 1030,
        "min": 640,
        "steps": 2,
        "disableInDev": false
      }
    ],
    null
  ],
  "themeConfig": {
    "image": "img/artela.png",
    "navbar": {
      "logo": {
        "href": "https://artela.network/",
        "alt": "Artela Network",
        "src": "img/artela.png",
        "srcDark": "img/artelaD.png"
      },
      "items": [
        {
          "position": "left",
          "label": "Introduction",
          "to": "/main"
        },
        {
          "position": "left",
          "label": "Develop",
          "to": "/develop"
        },
        {
          "position": "right",
          "label": "Website",
          "to": "https://artela.network/"
        },
        {
          "position": "right",
          "label": "Community",
          "to": "https://t.me/artela_official"
        },
        {
          "position": "right",
          "label": "Network",
          "to": "https://developers.artela.network/"
        },
        {
          "position": "right",
          "label": "Blog",
          "to": "https://medium.com/@artela_network"
        },
        {
          "href": "https://github.com/artela-network",
          "className": "pseudo-icon github-icon",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Build on Artela",
              "to": "/develop/quick-start"
            },
            {
              "label": "Intro to Artela",
              "to": "main"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Website",
              "href": "https://www.artela.network"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/Artela_Network"
            },
            {
              "label": "Telegram",
              "href": "https://t.me/artela_official"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "https://medium.com/@artela_network"
            },
            {
              "label": "Artela GitHub",
              "href": "https://github.com/artela-network"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023, Built with ❤️ by Artela."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "algolia": {
      "appId": "QLS2QSP47E",
      "apiKey": "4d9feeb481e3cfef8f91bbc63e090042",
      "indexName": "artela_docs",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
