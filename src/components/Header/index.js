import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";

import menuIconImg from "./menu-icon.svg";

const StyledWrapper = styled.header`
  width: auto;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-family: "Halyard Display";
  font-style: normal;
  color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
  z-index: 1;
`;

const StyledName = styled.span`
  font-weight: 500;
  font-size: 36px;
  line-height: 50px;
`;

const StyledNavbarLinkContainer = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin-left: auto;
  align-content: space-evenly;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
`;

const StyledNavbarLink = styled.span`
  font-weight: ${({ selected }) => (selected ? "500" : "inherit")};
`;

const StyledNavbarMenuIcon = styled.div`
  height: 23px;
  width: 29px;
  background-image: url(${menuIconImg});
  fill: white;
  background-repeat: no-repeat;
`;

const StyledNavbarSvg = styled(SVG)`
  height: 23px;
  width: 29px;
  path {
    fill: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
  }
`;

function Header(props) {
  const { theme, selectedMenuItem } = props;

  const finalTheme = theme === "dark" ? "dark" : "light";

  return (
    <StyledWrapper theme={finalTheme}>
      <StyledName>Sam Mendelson</StyledName>
      <StyledNavbarLinkContainer>
        <StyledNavbarLink selected={selectedMenuItem === "Home"}>
          Home
        </StyledNavbarLink>
        <StyledNavbarLink selected={selectedMenuItem === "About"}>
          About
        </StyledNavbarLink>
        <StyledNavbarLink selected={selectedMenuItem === "Projects"}>
          Projects
        </StyledNavbarLink>
        <StyledNavbarLink selected={selectedMenuItem === "Contact"}>
          Contact
        </StyledNavbarLink>
        <StyledNavbarSvg src={menuIconImg} theme={finalTheme} />
      </StyledNavbarLinkContainer>
    </StyledWrapper>
  );
}

export default Header;
