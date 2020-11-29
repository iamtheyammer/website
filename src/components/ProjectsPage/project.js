import React from "react";
import styled from "styled-components";

import linkIcon from "./link-icon.svg";

const StyledProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 50px;
`;

const StyledProjectInfo = styled.div`
  grid-column-start: 1;
`;

const StyledProjectTitle = styled.h2`
  margin: 0;
  font-family: "Halyard Display", sans-serif;
  font-style: normal;
  font-weight: normal;
  //font-size: 96px;
  font-size: ${({ children }) =>
    children.length > 9
      ? `${(0.9 - (children.length / 100) * 1.5) * 96}px`
      : "96px"};
  line-height: 132px;
  color: #2b2b2b;
`;

const StyledProjectSubtitle = styled.span`
  font-family: "Halyard Text", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 34px;
  color: #474747;
`;

const StyledProjectSelfTitle = styled.div`
  margin: 22px 0 0 0;
  font-family: "LFT Etica Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #474747;
`;

const StyledLinkContainer = styled.div`
  margin: 18px 0;
  display: flex;
  align-items: center;
`;

const StyledProjectImage = styled.img`
  max-height: 506px;
  max-width: 710px;
  grid-column-start: 2;
  justify-self: right;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
  border-radius: 2px;
`;

const StyledProjectLink = styled.a`
  margin: 0 0 0 10px;
  font-family: "Halyard Display", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
`;

const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const StyledTag = styled.div`
  border: 0.5px solid #bbbbbb;
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  margin: 6px 12px 6px 0;
  padding: 4px 10px;

  font-family: "LFT Etica Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #585858;
`;

const StyledTagLink = styled.a`
  color: #585858;

  :hover {
    color: #878787;
  }
`;

export default function Project(props) {
  const { title, subtitle, selfTitle, timePeriod, link, image, tags } = props;

  return (
    <StyledProjectWrapper>
      <StyledProjectInfo>
        <StyledProjectTitle>{title}</StyledProjectTitle>
        <StyledProjectSubtitle>{subtitle}</StyledProjectSubtitle>
        <br />
        <StyledProjectSelfTitle>
          {selfTitle.toUpperCase()} | {timePeriod.toUpperCase()}
        </StyledProjectSelfTitle>
        {link && (
          <StyledLinkContainer>
            <img src={linkIcon} alt="Hyperlink icon" />
            <StyledProjectLink href={link.url}>
              {link.display}
            </StyledProjectLink>
          </StyledLinkContainer>
        )}
        {tags && (
          <StyledTagContainer>
            {tags.map((t) => (
              <StyledTag key={t}>
                {typeof t === "object" ? (
                  <StyledTagLink
                    title={`Link to ${t.display} on ${new URL(t.url).hostname}`}
                    href={t.url}
                  >
                    {t.display}
                  </StyledTagLink>
                ) : (
                  t
                )}
              </StyledTag>
            ))}
          </StyledTagContainer>
        )}
      </StyledProjectInfo>
      <StyledProjectImage src={image.url} />
    </StyledProjectWrapper>
  );
}
