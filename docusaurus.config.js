module.exports = {
  title: 'saspyrilia',
  tagline: 'Technical notes for working with data',
  url: 'https://saspyrilia.com',
  baseUrl: '/',
  favicon: 'img/saspyrilia-favicon.ico',
  organizationName: 'curtisalexander', // Usually your GitHub org/user name.
  projectName: 'saspyrilia', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'saspyrilia',
      logo: {
        alt: 'saspyrilia logo',
        src: 'img/saspyrilia-logo.jpg',
      },
      links: [
        {
          to: 'docs/welcome',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right'
        },
        {
          to: 'docs/about',
          label: 'About',
          position: 'right'
        },
        {
          to: 'docs/colophon',
          label: 'Colophon',
          position: 'right'
        },
        {
          href: 'https://github.com/curtisalexander/saspyrilia',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Curtis Alexander<br/>Built with Docusaurus`,
    },
    prism: {
      // theme: require('prism-react-renderer/themes/oceanicNext'),
      additionalLanguages: [
        'julia',
        'powershell',
        'python',
        'r',
        'sas',
        'sql'
      ]
    },
    announcementBar: {
      id: 'wip',
      content: 'This site is brand new and still a work in progress 🚧.',
      backgroundColor: '#fafbfc',  // Defaults to `#fff`
      textColor: '#091E42',  // Defaults to `#000`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/curtisalexander/saspyrilia/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-lunr-search'
  ]
};
