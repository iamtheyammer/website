import React from "react";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 2px;
  border: 3px solid #444444;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`;

const StyledCardTop = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
`;

const StyledCardImage = styled.img`
  max-width: 127px;
  max-height: 90px;
`;

const StyledCardBottom = styled.div`
  width: 150px;
  height: 50px;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Halyard Display;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
`;

export default function Card(props) {
  const { title, imgSrc, topColor, bottomColor } = props;

  return (
    <StyledCardWrapper>
      <StyledCardTop backgroundColor={topColor}>
        <StyledCardImage src={imgSrc} />
      </StyledCardTop>
      <StyledCardBottom backgroundColor={bottomColor}>{title}</StyledCardBottom>
    </StyledCardWrapper>
  );
}
