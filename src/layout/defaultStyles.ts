import styled from '@emotion/styled';
import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';

export const globalStyleResetCss = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  html,
  body {
    min-height: 100vh;
    background-color: #aea1ea;
    background-image: url("..\img\backgroundpattern_transparent.png");
  }
`;

export const StyledDefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
