import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ryan Gniadek',
  tagline: 'Software Engineer | Infrastructure | DevOps',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://gniadek.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ryangniadek', // Usually your GitHub org/user name.
  projectName: 'next-js-website', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ryangniadek/next-js-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          authorsMapPath: 'authors.json',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ryangniadek/next-js-website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/profile.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ryan Gniadek',
      logo: {
        alt: 'Ryan Gniadek',
        src: 'img/profile.jpg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/experience', label: 'Experience', position: 'left'},
        {to: '/docs/projects', label: 'Projects', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/ryangniadek',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Experience',
              to: '/docs/experience',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ryangniadek',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/ryangniadek',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ryangniadek',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:ryan@gniadek.net',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ryan Gniadek. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
