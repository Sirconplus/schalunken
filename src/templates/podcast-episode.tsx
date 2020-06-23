import React from 'react';
import FontAwesome from 'react-fontawesome';
import { graphql } from 'gatsby';
import Layout from '../layout/default';
import CommentSection from '../components/comments/CommentSection';

interface PodcastEpisodeTemplateProps {
  summary: string;
  description?: string;
  title: string;
  audiofile: string;
  date: string;
}

export const PodcastEpisodeTemplate: React.FC = ({
  description,
  title,
  audiofile,
  date,
  summary
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
      <div className="episode-item-summary" dangerouslySetInnerHTML={{ __html: summary }} />
      <audio controls>
        <source src={audiofile} type="audio/mpeg" />
        <track default kind="captions" />
        Your browser does not support the audio tag
      </audio>
      {description ? (
        <div className="episode-item-description" dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <></>
      )}
    </article>
  );
};

const PodcastEpisode: React.FC = ({ data }: { data: PodcastEpisodeByIDQuery }) => {
  const { markdownRemark: podcast } = data;

  return (
    <Layout>
      <div className="container">
        <div className="episode-item">
          <PodcastEpisodeTemplate
            title={podcast.frontmatter.title}
            description={podcast.fields.descriptionHtml}
            summary={podcast.fields.summaryHtml}
            date={podcast.frontmatter.date}
            audiofile={`/podcast/${podcast.frontmatter.audiofile.base}`}
          />
        </div>
        <CommentSection id={podcast.frontmatter.id} title={podcast.frontmatter.title} slug={podcast.fields.slug} />
      </div>
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
      summaryHtml: string;
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
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
        summaryHtml
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        id
        audiofile {
          base
        }
      }
    }
  }
`;
