import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, graphql, StaticQuery } from 'gatsby';

interface PodcastRollProps {
  count: number;
  data: PodcastRollData;
}

interface PodcastRollData {
  allMarkdownRemark: {
    edges: Array<{ node: PodcastQueryResult }>;
  };
}

const PodcastRoll: React.FC<PodcastRollProps> = (props) => {
  const { data } = props;
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
                <track default kind="captions" />
                Your browser does not support the audio tag
              </audio>
            </article>
          </div>
        ))}
    </div>
  );
};

interface PodcastQueryResult {
  id: string;
  fields: {
    slug: string;
    descriptionHtml: string;
  };
  frontmatter: {
    title: string;
    templateKey: string;
    date: string;
    description: string;
    audiofile: {
      base: string;
    };
  };
}

export default (): React.Component => (
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
