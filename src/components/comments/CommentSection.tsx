import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { StyledCommentSection } from './CommentSection.styles';

interface CommentSectionProps {
  title: string;
  id: string;
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
  const { title, id } = props;
  return (
    <StyledCommentSection>
      <CommentForm title={title} id={id} />
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
          const comments: CommentNode[] = data.allCommentsYaml.edges
            .map(({ node }) => node)
            .filter((comment) => comment.episode === id);
          return comments.map((comment) => (
            <Comment date={comment.date} name={comment.name} message={comment.message} key={comment.id} />
          ));
        }}
      />
    </StyledCommentSection>
  );
};

export default CommentSection;
