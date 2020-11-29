import React, { useState } from "react";
import styled from "styled-components";

import projectsList from "./projects.json";
import projectsTopWave from "./projects-top-wave.svg";
import Project from "./project";

const StyledTopWaveImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${projectsTopWave});
  background-size: 100%;
  background-repeat: repeat-x;
  width: 100%;
  height: 220px;
  z-index: -1;
`;

const StyledProjectsPageWrapper = styled.div`
  margin: 125px 0 0 0;
`;

export default function ProjectsPage(props) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  return (
    <StyledProjectsPageWrapper>
      <StyledTopWaveImg />
      {projectsList.map((p) => (
        <Project
          key={p.title}
          title={p.title}
          subtitle={p.subtitle}
          selfTitle={p.selfTitle}
          timePeriod={p.timePeriod}
          link={p.link}
          image={p.image}
          tags={p.tags}
        />
      ))}
    </StyledProjectsPageWrapper>
  );
}
