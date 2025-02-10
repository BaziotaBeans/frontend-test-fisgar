import React from "react";
import { StyledAppBar } from "./Header.styles";
import LogoHeader from "./LogoHeader";

function Header() {
  return (
    <StyledAppBar position="static">
      <LogoHeader />
    </StyledAppBar>
  );
}

export default Header;
