import React from "react";
import { Link } from "react-router-dom";
import largeLogo from "../../../assets/img/icons/largeLogo.svg";
import miniLogo from "../../../assets/img/icons/miniLogo.svg";
import { useWidthWindow } from "../../../hooks/useWidthWindow.js";
import { LogoContainer } from "./styles.js";

const Logo = () => {
  const width = useWidthWindow();
  return (
    <LogoContainer>
      <Link to={"/posts"}>
        <img src={width > 569 ? largeLogo : miniLogo} alt={"Logo"} />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
