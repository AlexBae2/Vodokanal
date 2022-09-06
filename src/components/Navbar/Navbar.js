import React from "react";
import { SectionInner } from "../../App.js";
import Logo from "./Logo/Logo.js";
import Logout from "./Logout/Logout.js";
import { NavbarContainer, NavbarSection } from "./styles.js";

const Navbar = () => {
  return (
    <NavbarSection>
      <SectionInner>
        <NavbarContainer>
          <Logo />
          <Logout />
        </NavbarContainer>
      </SectionInner>
    </NavbarSection>
  );
};

export default Navbar;
