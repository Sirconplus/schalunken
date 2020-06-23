import styled from '@emotion/styled';

export const StyledCommentForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NameAndEmail = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.4rem;
  div {
    flex-grow: 1;
  }
  div:first-child {
    padding-right: 0.2rem;
  }
  div:nth-of-type(2) {
    padding-left: 0.2rem;
  }
`;
