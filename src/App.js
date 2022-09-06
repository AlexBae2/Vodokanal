import React from "react";
import { ReactNotifications } from "react-notifications-component";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar/Navbar.js";
import { privateRoutes, publicRoutes } from "./routes/publicRoutes.js";

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
  const isAuth = useSelector((state) => state.auth.isLogged);
  const securityRoutes = useRoutes(privateRoutes());
  const unSecurityRoutes = useRoutes(publicRoutes());
  return (
    <>
      <ReactNotifications />
      <Wrapper>
        <GlobalStyle></GlobalStyle>
        <Navbar />
        {isAuth ? securityRoutes : unSecurityRoutes}
      </Wrapper>
    </>
  );
};

export default App;
