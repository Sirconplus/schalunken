import React from 'react';
import { StyledComment, StyledCommentHeader, StyledCommentMessage } from './Comment.styles';

interface CommentProps {
  date: string;
  name: string;
  message: string;
}

const Comment: React.FC<CommentProps> = (props) => {
  const { name, date, message } = props;
  return (
    <StyledComment>
      <StyledCommentHeader>
        <span>{name}</span>
        <span>{date}</span>
      </StyledCommentHeader>
      <StyledCommentMessage>{message}</StyledCommentMessage>
    </StyledComment>
  );
};

export default Comment;
