import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class PodcastRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: episodes } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {episodes &&
          episodes.map(({ node: episode }) => (
            <div className="is-parent column is-6" key={episode.id}>
              <article>
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={episode.fields.slug}
                    >
                      {episode.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {episode.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {episode.frontmatter.description}
                  <br />
                  <br />
                </p>
                <audio controls>
                  <source
                    src={`/img/${episode.frontmatter.audiofile.base}`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio tag
                </audio>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

PodcastRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PodcastRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "podcast-episode" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                audiofile {
                  base
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PodcastRoll data={data} count={count} />}
  />
)
