module.exports = {
  siteMetadata: {
    title: 'Schalunken',
    description: 'Schalunken, das sind Halunken in Spelunken (oder Spelunken für Halunken) - aber es sind auch Rafael & Miguel und in ihrer Schalunke wird nicht nur Bier verzapft. ',
    siteUrl: 'https://www.schalunken.de'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
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
        path: `${__dirname}/src/comments`,
        name: 'comments'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-transformer-yaml',
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
          site_url: 'https://www.schalunken.de',
          custom_namespaces: {
            itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd'
          },
          custom_elements: [
            { 'itunes:author': 'Schalunken' },
            {
              'itunes:image': [
                {
                  _attr: {
                    href: 'https://www.schalunken.de/img/schalunkencover.png'
                  }
                }
              ]
            },
            {
              'itunes:owner': [{ 'itunes:name': 'Schalunken' }, { 'itunes:email': 'schalunken@schalunken.de' }]
            },
            { 'itunes:explicit': 'yes' },
            { 'itunes:type': 'episodic' },
            { 'itunes:summary': 'Schalunken, das sind Halunken in Spelunken (oder Spelunken für Halunken) - aber es sind auch Rafael und Miguel und in ihrer Schalunke wird nicht nur Bier verzapft.' },
            {
              'itunes:category': [
                {
                  _attr: {
                    text: 'Comedy'
                  }
                },
                {
                  'itunes:category': {
                    _attr: {
                      text: 'Improv'
                    }
                  }
                }
              ]
            },
            {
              'itunes:category': [
                {
                  _attr: {
                    text: 'TV &amp; Film'
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
                    description: edge.node.frontmatter.summary,
                    title: edge.node.frontmatter.title,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    enclosure: {
                      url: site.siteMetadata.siteUrl + '/podcast/' + base,
                      size,
                      type: 'audio/mpeg'
                    },
                    custom_elements: [
                      { 'itunes:title': edge.node.frontmatter.title },
                      { 'itunes:subtitle': edge.node.frontmatter.subtitle },
                      { 'itunes:summary': edge.node.frontmatter.summary },
                      { 'itunes:explicit': 'yes' },
                      {
                        'itunes:author': 'Schalunken'
                      }
                    ]
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
                        subtitle
                        summary
                        date
                        description
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
            title: 'Schalunken in Schalunken',
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
    } // must be after other CSS plugins
  ]
};
