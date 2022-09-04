import React from "react";
import largeLogo from "../../../assets/img/icons/largeLogo.svg";
import miniLogo from "../../../assets/img/icons/miniLogo.svg";
import { useWidthWindow } from "../../../hooks/useWidthWindow.js";
import { LogoWrapper } from "./styles.js";

const Logo = () => {
  const width = useWidthWindow();
  return (
    <LogoWrapper>
      <img src={width > 569 ? largeLogo : miniLogo} alt={"Logo"} />
    </LogoWrapper>
  );
};

export default Logo;
