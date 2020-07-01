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

export const RoundEdgeContainer = styled.div`
  background-color: #ffeeaa;
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 50px 0px 50px 0px;
  border: 3px solid #c87137;
  margin-bottom: 40px;
  padding: 25px;
  color: #8c54a1;
  }


`;
