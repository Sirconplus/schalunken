import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import moment from 'moment';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { StyledCommentSection } from './CommentSection.styles';
import useSiteMetadata from '../SiteMetadata';

interface CommentSectionProps {
  title: string;
  id: string;
  slug: string;
}

interface CommentQueryResult {
  allCommentsYaml: {
    edges: Array<{ node: CommentNode }>;
  };
}

interface CommentNode {
  id: string;
  episode: string;
  date: string;
  message: string;
  name: string;
  type: string;
}

const CommentSection: React.FC<CommentSectionProps> = (props) => {
  const { title, id, slug } = props;
  const { siteUrl } = useSiteMetadata();
  return (
    <StyledCommentSection>
      <CommentForm title={title} id={id} slug={`${siteUrl}${slug}`} />
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            allCommentsYaml {
              edges {
                node {
                  id
                  episode
                  date
                  message
                  name
                  type
                }
              }
            }
          }
        `}
        render={(data: CommentQueryResult) => {
          moment().locale('de');
          const comments: CommentNode[] = data.allCommentsYaml.edges
            .map(({ node }) => node)
            .filter((comment) => comment.episode === id);
          if (comments.length > 0) {
            return comments.map((comment) => {
              const date = moment(comment.date).format('dddd, MMMM Do YYYY, h:mm:ss a');
              return <Comment date={date} name={comment.name} message={comment.message} key={comment.id} />;
            });
          }
          return (
            <p>
              Noch keine Kommentare. Sei die/der erste und gib deinen Senf dazu{' '}
              <span role="img" aria-label="*wink*">
                😉
              </span>
            </p>
          );
        }}
      />
    </StyledCommentSection>
  );
};

export default CommentSection;
