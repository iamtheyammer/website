import React from "react";
import styled from "styled-components";

import samMendelsonHeadshotImg from "./sam-mendelson-headshot.png";
import lowerWaveImg from "./lower-wave.svg";

const StyledHomePageWrapper = styled.div`
  margin: 30px 0 0 0;
  display: grid;
`;

const StyledNameArea = styled.div`
  grid-row: 1;
  grid-column: 1;
  margin-top: 150px;
`;

const StyledName = styled.h1`
  margin: 0;
  font-family: Halyard Display;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 88px;
`;

const StyledTitle = styled.h2`
  margin: 5px 0 0 0;
  font-family: Halyard Text;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 37px;
`;

const StyledHeadshot = styled.div`
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
  background-image: url(${samMendelsonHeadshotImg});
  width: 500px;
  height: 758px;
  background-size: cover;
  border-radius: 2px;
`;

const StyledLowerWave = styled.div`
  background-image: url(${lowerWaveImg});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 2;
  width: 500px;
  height: 500px;
`;

export default function HomePage(props) {
  return (
    <div>
      <StyledHomePageWrapper>
        <StyledNameArea>
          <StyledName>Hi, I'm Sam Mendelson.</StyledName>
          <StyledTitle>
            I'm a student, full-stack developer, and ______.
          </StyledTitle>
        </StyledNameArea>
        <StyledHeadshot />
      </StyledHomePageWrapper>
      {/*<StyledLowerWave />*/}
    </div>
  );
}
