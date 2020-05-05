import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

export const PodcastEpisodeTemplate = ({ description, title, audiofile, date }) => {
  return (
    <div className="episode-item is-parent column is-12">
      <article>
        <header>
          <p className="title has-text-primary is-size-4">{title}</p>
          <p>
            <span>{date}</span>
          </p>
        </header>
        <p>
          {description}
          <br />
          <br />
        </p>
        <audio controls>
          <source src={`/img/${audiofile}`} type="audio/mpeg" />
          Your browser does not support the audio tag
        </audio>
      </article>
    </div>
  );
};

const PodcastEpisode = ({ data }) => {
  const { markdownRemark: podcast } = data;

  return (
    <Layout>
      <PodcastEpisodeTemplate
        title={podcast.frontmatter.title}
        description={podcast.frontmatter.description}
        date={podcast.frontmatter.date}
        audiofile={`/img/${podcast.frontmatter.audiofile.base}`}
      />
    </Layout>
  );
};

export default PodcastEpisode;

export const pageQuery = graphql`
  query PodcastEpisodeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        audiofile {
          base
        }
      }
    }
  }
`;
