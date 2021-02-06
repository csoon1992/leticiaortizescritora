const tailwindConfig = require('./tailwind.config.js');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Leticia Ortiz, escritora',
    description:
      'Leticia Ortiz, escritora. Nuevo libro: Kika, nada pasa hasta que pasa.',
    author: '@csoon1992 and @algm',
    siteUrl: 'https://leticiaortizescritora.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['lora', 'source sans pro'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://leticiaortizescritora.com',
        sitemap: 'https://leticiaortizescritora.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'hjex8jsb5122',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
        localeFilter: (locale) => locale.code === 'es',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Leticia Ortiz, Escritora',
        short_name: 'leticiaortizescritora',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffebef',
        display: 'minimal-ui',
        icon: 'src/images/firma.png', // This path is relative to the root of the site.
      },
    },
    { resolve: 'gatsby-plugin-styled-components' },
    {
      resolve: 'gatsby-plugin-postcss',
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/global.css'],
      },
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-129053715-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
