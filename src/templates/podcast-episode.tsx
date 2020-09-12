import React from 'react';
import FontAwesome from 'react-fontawesome';
import { graphql } from 'gatsby';
import Layout from '../layout/default';
import CommentSection from '../components/comments/CommentSection';
import { RoundEdgeContainer } from '../styles/index.styles';

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
  <RoundEdgeContainer>
    <article>
      <header>
        <p className="title has-text-primary is-size-4">{title}</p>
        <p>
          <i>{`Veröffentlicht am ${date}`}</i>
        </p>
        <a href={audiofile} download>
          <img border="0" alt="Schalunken Cover" src="/img/schalunkencover.png" width="300px" height="300px"></img>
        </a>
      </header>
      <audio controls preload="none">
        <source src={audiofile} type="audio/mpeg" />
        <track default kind="captions" />
        Your browser does not support the audio tag
      </audio>
      <div className="episode-item-summary" dangerouslySetInnerHTML={{ __html: summary }} />
      {description ? (
        <div className="episode-item-description" dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <></>
      )}
    </article>
      </RoundEdgeContainer>
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
        date(formatString: "DD.MM.YYYY")
        title
        id
        audiofile {
          base
        }
      }
    }
  }
`;
