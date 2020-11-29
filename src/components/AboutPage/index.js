import React from "react";
import styled from "styled-components";

import aboutTopWaveImg from "./about-top-wave.svg";
import Card from "../Header/card";

import cardList from "./cards.json";

const StyledAboutPageWrapper = styled.div`
  margin: 150px 0 0 0;
`;

const StyledTopWaveImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${aboutTopWaveImg});
  background-size: 100%;
  background-repeat: repeat-x;
  width: 100%;
  height: 220px;
  z-index: -1;
`;

const StyledMidContainer = styled.div`
  margin: 0 100px 30px 100px;
`;

const StyledSectionHeader = styled.h3`
  margin: 0;
  font-family: "LFT Etica Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #474747;
`;

const StyledAboutText = styled.div`
  padding: 18px 0;

  font-family: "Halyard Display", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 50px;

  color: #282828;
`;

const StyledCardGrid = styled.div`
  align-self: center;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(7, minmax(0, 150px));
  grid-row-gap: 30px;
  grid-column-gap: 22px;
`;

const StyledCardHolder = styled.div`
  grid-column-start: ${({ index }) => index + 1};
  grid-row: ${({ row }) => row};
`;

const StyledTechTypeText = styled.div`
  font-family: "LFT Etica Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150px;
  text-align: right;
  color: #474747;
`;

export default function AboutPage(props) {
  return (
    <div>
      <StyledAboutPageWrapper>
        <StyledTopWaveImg />
        <StyledMidContainer>
          <StyledSectionHeader>ABOUT ME</StyledSectionHeader>
          <StyledAboutText>
            I’m a high school student and full-stack developer near San
            Francisco.
            <br />I love building elegant, fast and accessible web experiences.
          </StyledAboutText>
          <StyledSectionHeader>I LOVE TO USE</StyledSectionHeader>
        </StyledMidContainer>
      </StyledAboutPageWrapper>
      <StyledCardGrid>
        <StyledCardHolder index={1} row={1}>
          <StyledTechTypeText>FRONTEND</StyledTechTypeText>
        </StyledCardHolder>
        {cardList.frontend.map((c, i) => (
          <StyledCardHolder
            key={c.title}
            index={2 * i + 2}
            // frontend first
            row={1}
          >
            <Card
              title={c.title}
              imgSrc={c.imgSrc}
              topColor={c.topColor}
              bottomColor={c.bottomColor}
            />
          </StyledCardHolder>
        ))}
        <StyledCardHolder index={0} row={2}>
          <StyledTechTypeText>BACKEND</StyledTechTypeText>
        </StyledCardHolder>
        {cardList.backend.map((c, i) => (
          <StyledCardHolder
            key={c.title}
            index={2 * i + 1}
            // backend second
            row={2}
          >
            <Card
              title={c.title}
              imgSrc={c.imgSrc}
              topColor={c.topColor}
              bottomColor={c.bottomColor}
            />
          </StyledCardHolder>
        ))}
      </StyledCardGrid>
    </div>
  );
}
