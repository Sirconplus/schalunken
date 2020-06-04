import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link, graphql, StaticQuery } from 'gatsby';

class PodcastRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: episodes } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {episodes &&
          episodes.map(({ node: episode }) => (
            <div className="episode-list-item is-parent column is-12" key={episode.id}>
              <article>
                <header>
                  <p>
                    <Link className="title has-text-primary is-size-4" to={episode.fields.slug}>
                      {episode.frontmatter.title}
                    </Link>
                  </p>
                  <p>
                    <i>{`Posted ${episode.frontmatter.date}`}</i>
                  </p>

                  <a href={`/podcast/${episode.frontmatter.audiofile.base}`} download>
                    <FontAwesome name="download" />
                  </a>
                </header>
                <div
                  className="episode-item-description"
                  dangerouslySetInnerHTML={{ __html: episode.fields.descriptionHtml }}
                />
                <br />
                <audio controls>
                  <source src={`/podcast/${episode.frontmatter.audiofile.base}`} type="audio/mpeg" />
                  Your browser does not support the audio tag
                </audio>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

PodcastRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

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
                descriptionHtml
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
);
