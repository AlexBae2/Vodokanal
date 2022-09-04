import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header.js";
import Posts from "./components/Posts/Posts.js";

export const SectionInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Posts />
      {/*<Auth />*/}
    </Wrapper>
  );
};

export default App;
