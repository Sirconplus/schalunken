import React from 'react';
import Layout from '../components/Layout';
import FontAwesome from 'react-fontawesome';
import { graphql } from 'gatsby';
import CommentForm from '../components/CommentForm';

export const PodcastEpisodeTemplate = ({ description, title, audiofile, date, id }) => {
  return (
    <div className="episode-item is-parent column is-12">
      <article>
        <header>
          <p className="title has-text-primary is-size-4">{title}</p>
          <p>
            <i>{`Veröffentlicht am ${date}`}</i>
          </p>
          <a href={audiofile} download>
            <FontAwesome name="download" />
          </a>
        </header>
        <div className="episode-item-description" dangerouslySetInnerHTML={{ __html: description }} />
        <audio controls>
          <source src={audiofile} type="audio/mpeg" />
          Your browser does not support the audio tag
        </audio>
      </article>
      <CommentForm id={id} title={title} />
    </div>
  );
};

const PodcastEpisode = ({ data }) => {
  const { markdownRemark: podcast } = data;

  return (
    <Layout>
      <PodcastEpisodeTemplate
        title={podcast.frontmatter.title}
        description={podcast.fields.descriptionHtml}
        date={podcast.frontmatter.date}
        audiofile={`/podcast/${podcast.frontmatter.audiofile.base}`}
        id={podcast.frontmatter.id}
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
      fields {
        descriptionHtml
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        id
        audiofile {
          base
        }
      }
    }
  }
`;
