
const apiSourcesBaseUrl = 'http://demo.terotero.it/api/';

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: apiSourcesBaseUrl + 'data/settings/',
        rootKey: 'setting',
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: apiSourcesBaseUrl + 'data/labels/',
        rootKey: 'label',
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: apiSourcesBaseUrl + 'data/menu_groups/',
        rootKey: 'menu_group',
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: apiSourcesBaseUrl + 'data/languages/',
        rootKey: 'language',
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: apiSourcesBaseUrl + 'data/pages/',
        rootKey: 'page',
        imageKeys: '[immagine]'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
