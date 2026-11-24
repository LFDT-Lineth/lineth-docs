import remarkEmdash from "./scripts/remark/remark-emdash.js";

const { themes: prismThemes } = require("prism-react-renderer");
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

// const isDev = process.env.NODE_ENV === "development";
// const baseUrl = isDev ? "/" : "/";

// const organizationName = "Consensys-Incorporated";
// const projectName = "doc.linea";

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Lineth",
  tagline: "Documentation for the Lineth stack and protocol.",
  url: "https://docs.lineth.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LFDT-Lineth",
  projectName: "lineth-docs",
  deploymentBranch: "gh-pages", // Github Pages deploying branch

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [{ src: "/js/clearSearchOnCollapse.js", async: true }],

  markdown: {
    // Pages are .md files and still contain JSX components, so compile them as MDX.
    format: "mdx",
    mermaid: true,
  },

  // Enable experimental infrastructure for Docusaurus Faster project
  future: {
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: false,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Set a base path separate from default /docs
          editUrl: "https://github.com/LFDT-Lineth/lineth-docs/tree/main/",
          path: "docs",
          routeBasePath: "/",
          include: ["**/*.md"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          includeCurrentVersion: true,
          remarkPlugins: [
            remarkEmdash,
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        blog: false, // Disable blog feature
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /* @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      mermaid: {
        options: {
          // Keep the current flowchart rendering. Mermaid 12 switches the
          // defaults to the ELK layout and the "neo" look; these are already
          // the Mermaid 11 defaults, so nothing changes until we upgrade.
          layout: "dagre",
          look: "classic",
          useMaxWidth: false,
          fontFamily:
            'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
          themeVariables: {
            fontFamily:
              'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
          },
          flowchart: {
            useMaxWidth: false,
            wrappingWidth: 280,
            // Size nodes to their labels. Mermaid 12 widens short labels to a
            // 120px minimum; Mermaid 11 ignores this option.
            minNodeWidth: 0,
          },
        },
      },
      zoom: {
        selectors: [
          'div.mermaid[data-processed="true"]',
          "div.docusaurus-mermaid-container",
          ".drawio",
          ".theme-doc-markdown img",
          ".theme-doc-markdown .img-xsmall > svg",
          ".theme-doc-markdown .img-small > svg",
          ".theme-doc-markdown .img-medium > svg",
          ".theme-doc-markdown .img-large > svg",
          ".theme-doc-markdown .img-fit svg",
          ".theme-doc-markdown .responsive-graphic svg",
        ],
        wrap: true,
        timeout: 1000,
        excludeClass: "panzoom-exclude",
        enableWheelZoom: false,
        enableDoubleClickResetZoom: false,
        toolbar: {
          enabled: true,
          position: "top-right",
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        logo: {
          alt: "Lineth",
          src: "img/lineth-logo.svg",
          srcDark: "img/lineth-logo-dark.svg",
          width: 128,
          height: 32,
        },
        items: [
          {
            href: "https://github.com/LFDT-Lineth/lineth-monorepo",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          },
          {
            href: "https://discord.gg/hyperledger",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Evaluate Lineth",
                to: "/evaluate",
              },
              {
                label: "Deployment architecture",
                to: "/deployment",
              },
              {
                label: "Protocol",
                to: "/protocol",
              },
              {
                label: "Run and test",
                to: "/run-and-test",
              },
              {
                label: "Reference",
                to: "/reference",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/hyperledger",
              },
              {
                label: "LF Decentralized Trust",
                href: "https://www.lfdecentralizedtrust.org/projects/lineth",
              },
              {
                label: "Lineth GitHub",
                href: "https://github.com/LFDT-Lineth/lineth-monorepo",
              },
              {
                label: "Documentation GitHub",
                href: "https://github.com/LFDT-Lineth/lineth-docs",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "solidity",
          "toml",
          "bash",
          "json",
          "typescript",
          "javascript",
          "python",
        ],
      },
      metadata: [{ name: "twitter:card", content: "summary" }],
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
      ],
    },
  plugins: [
    "@r74tech/docusaurus-plugin-panzoom",
    function excludeApiPlugin() {
      return {
        name: "exclude-api-directory",
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /api\/.*\.ts$/,
                  use: "null-loader",
                },
              ],
            },
          };
        },
      };
    },
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
        hashed: true,
      },
    ],
    "@docusaurus/theme-mermaid",
  ],
  headTags: [
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Lineth",
        "url": "https://docs.lineth.io",
        "sameAs": [
          "https://github.com/LFDT-Lineth"
        ]
      }
    `,
    },
  ],
};

module.exports = config;
