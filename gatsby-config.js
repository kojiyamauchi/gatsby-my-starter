/*
  Fn for Settings.
*/
const { LOCATION, PATH_PREFIX, CHOOSE_MATERIALS, CHOOSE_CMS } = require('./setup')

const setFilesystem = Object.keys(CHOOSE_MATERIALS)
  .map((info) => {
    if (CHOOSE_MATERIALS[info]) {
      const obj = {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: info,
          path: `${__dirname}/src/materials/${info}`
        }
      }
      return obj
    }
  })
  .filter((info) => info)

const setCms = (argCms) => {
  switch (argCms) {
    case 'markdown': {
      // Generate Plugin Obj Below.
      const setFilesystem = {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'markdowns',
          path: `${__dirname}/src/markdowns`
        }
      }
      const setTransformerRemark = {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 1200,
                quality: 90,
                linkImagesToOriginal: true
              }
            }
          ]
        }
      }
      return [setFilesystem, setTransformerRemark]
    }

    case 'contentful': {
      // Generate Plugin Obj Below.
      const obj = {}
      return []
    }

    case 'microcms': {
      // Generate Plugin Obj Below.
      const obj = {}
      return []
    }

    case 'wordpress': {
      // Generate Plugin Obj Below.
      const obj = {}
      return []
    }

    case 'none':
      return []

    default:
      throw new Error('CMS is Not Setup, Please Check setup.js.')
  }
}

/*
  Core Setting.
*/
module.exports = {
  pathPrefix: PATH_PREFIX, // When Deploy Product in Subdirectory, Add Path. See -> https://www.gatsbyjs.com/docs/path-prefix/
  siteMetadata: {
    title: `Gatsby My Starter`,
    description: `My Customization. && Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    siteUrl: LOCATION,
    author: `@gatsbyjs`
  },
  plugins: [
    ...setFilesystem,
    ...setCms(CHOOSE_CMS),
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-styled-components`,
    `@danbruegge/gatsby-plugin-stylelint`,
    `gatsby-plugin-notify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby.js My Starter`,
        short_name: `Gatsby.js My Starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/materials/icons/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      /*
         Generate GraphQL's Types.
         Don't Generate it in the src Dir to Cause an Infinite Loop.
         See -> https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/#additional-schema-options-for-optionsadditionalschemas
      */
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `graphql-types.d.ts`
      }
    }
    /* { // When Exclude Files on Build.
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['./Add Dir or File Name'] }
    }, */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
