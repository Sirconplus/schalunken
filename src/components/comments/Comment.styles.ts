import styled from '@emotion/styled';
import { colors } from '../../constants/variables';

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCommentHeader = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.main};
`;

export const StyledCommentMessage = styled.p`
  padding: 10px;
  background-color: ${colors.grey};
`;
