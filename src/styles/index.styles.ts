import styled from '@emotion/styled';

export const StyledImageContainer = styled.div`
  background-image: url('/img/blog-index.png');
  width: 100%;
  height: 400px;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 400px;
    padding: 10px 0;
  }
`;
