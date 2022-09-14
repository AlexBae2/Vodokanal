import styled, { createGlobalStyle } from 'styled-components';

export const SectionInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

`;
