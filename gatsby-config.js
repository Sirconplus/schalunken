module.exports = {
  siteMetadata: {
    title: 'Schalunken',
    description: 'Wir sind Schalunken in Schalunken',
    siteUrl: 'https://new.schalunken.de'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/podcast`,
        name: 'podcast'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        setup: (options) => ({
          ...options,
          site_url: 'https://new.schalunken.de',
          custom_namespaces: {
            itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd'
          },
          custom_elements: [
            { 'itunes:author': 'Schalunken in Schalunken' },
            {
              'itunes:owner': [
                { 'itunes:name': 'Schalunken in Schalunken' },
                { 'itunes:email': 'hoerer@schalunken.de' }
              ]
            },
            { 'itunes:explicit': 'clean' },
            {
              'itunes:category': [
                {
                  _attr: {
                    text: 'Arts & Entertainment'
                  }
                },
                {
                  'itunes:category': {
                    _attr: {
                      text: 'Performing Arts'
                    }
                  }
                },
                {
                  'itunes:category': {
                    _attr: {
                      text: 'Entertainment'
                    }
                  }
                }
              ]
            }
          ]
        }),
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
                .filter((edge) => edge.node.frontmatter.templateKey === 'podcast-episode')
                .map((edge) => {
                  const { base, size } = edge.node.frontmatter.audiofile;
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    enclosure: {
                      url: site.siteMetadata.siteUrl + '/podcast/' + base,
                      size,
                      type: 'audio/mpeg'
                    }
                  });
                });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        templateKey
                        title
                        date
                        audiofile {
                          base
                          size
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Schalunken Podcast',
            language: 'de-DE'
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
