import React from "react";
import { SectionInner } from "../../App.js";
import Logo from "./Logo/Logo.js";
import Logout from "./Logout/Logout.js";
import { HeaderFlex, HeaderSection } from "./styles.js";

const Header = () => {
  return (
    <HeaderSection>
      <SectionInner>
        <HeaderFlex>
          <Logo />
          <Logout />
        </HeaderFlex>
      </SectionInner>
    </HeaderSection>
  );
};

export default Header;
