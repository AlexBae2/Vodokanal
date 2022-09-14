import React from "react";
import {ReactNotifications} from "react-notifications-component";
import {useSelector} from "react-redux";
import {useRoutes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import {privateRoutes, routes} from "./routes/routes.js";
import {GlobalStyle, Wrapper} from "./App.styles.js";


const App = () => {
  const isAuth = useSelector((state) => state.auth.isLogged);
  const securityRoutes = useRoutes(privateRoutes());
  const unSecurityRoutes = useRoutes(routes());
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
