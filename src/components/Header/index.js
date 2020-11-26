import React from "react"
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: auto;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-family: "Halyard Display";
  font-style: normal;
  color: #000000;
`

const StyledName = styled.span`
  font-weight: 500;
  font-size: 36px;
  line-height: 50px;
  color: #000000;
`

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
`

const StyledNavbarLink = styled.span`
  
`

const StyledSelectedNavbarLink = styled.span`
  font-weight: 500;
`

const StyledNavbarMenuIcon = styled.div`
  height: 23px;
  width: 29px;
  background-image: url("static/img/menu-icon.svg");
  background-repeat: no-repeat;
`

function Header(props) {
  return <StyledWrapper>
    <StyledName>Sam Mendelson</StyledName>
    <StyledNavbarLinkContainer>
      <StyledSelectedNavbarLink>Home</StyledSelectedNavbarLink>
      <StyledNavbarLink>About</StyledNavbarLink>
      <StyledNavbarLink>Projects</StyledNavbarLink>
      <StyledNavbarLink>Contact</StyledNavbarLink>
      <StyledNavbarMenuIcon />
    </StyledNavbarLinkContainer>
  </StyledWrapper>
}

export default Header;
