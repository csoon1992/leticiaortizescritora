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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Leticia Ortiz, Escritora',
                short_name: 'leticiaortizescritora',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#4dc0b5',
                display: 'minimal-ui',
                icon: 'src/images/firma.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                tailwind: true,
                purgeOnly: ['src/css/style.css'], // Purge only tailwind
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

        {
            resolve: 'gatsby-plugin-netlify-functions',
            options: {
                functionsSrc: `${__dirname}/src/functions`,
                functionsOutput: `${__dirname}/functions`,
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
};
