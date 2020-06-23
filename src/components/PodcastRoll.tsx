import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { PodcastEpisodeTemplate } from '../templates/podcast-episode';

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
    <div>
      {episodes &&
        episodes.map(({ node: episode }) => (
          <div className="episode-list-item is-parent" key={episode.id}>
            <PodcastEpisodeTemplate
              title={
                <Link className="title has-text-primary is-size-4" to={episode.fields.slug}>
                  {episode.frontmatter.title}
                </Link>
              }
              summary={episode.fields.summaryHtml}
              date={episode.frontmatter.date}
              audiofile={`/podcast/${episode.frontmatter.audiofile.base}`}
            />
          </div>
        ))}
    </div>
  );
};

interface PodcastQueryResult {
  id: string;
  fields: {
    slug: string;
    summaryHtml: string;
  };
  frontmatter: {
    title: string;
    templateKey: string;
    date: string;
    summary: string;
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
                summaryHtml
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                summary
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
