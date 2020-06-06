import React from 'react';
import FontAwesome from 'react-fontawesome';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import CommentForm from '../components/CommentForm';

interface PodcastEpisodeTemplateProps {
  description: string;
  title: string;
  audiofile: string;
  date: string;
}

export const PodcastEpisodeTemplate: React.FC = ({
  description,
  title,
  audiofile,
  date
}: PodcastEpisodeTemplateProps) => {
  return (
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
        <track default kind="captions" />
        Your browser does not support the audio tag
      </audio>
    </article>
  );
};

const PodcastEpisode: React.FC = ({ data }: { data: PodcastEpisodeByIDQuery }) => {
  const { markdownRemark: podcast } = data;

  return (
    <Layout>
      <div className="episode-item is-parent column is-12">
        <PodcastEpisodeTemplate
          title={podcast.frontmatter.title}
          description={podcast.fields.descriptionHtml}
          date={podcast.frontmatter.date}
          audiofile={`/podcast/${podcast.frontmatter.audiofile.base}`}
        />
      </div>
      <CommentForm id={podcast.frontmatter.id} title={podcast.frontmatter.title} />
    </Layout>
  );
};

export default PodcastEpisode;

interface PodcastEpisodeByIDQuery {
  markdownRemark: {
    id: string;
    html: string;
    fields: {
      descriptionHtml: string;
    };
    frontmatter: {
      date: string;
      title: string;
      description: string;
      id: string;
      audiofile: {
        base: string;
      };
    };
  };
}

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
