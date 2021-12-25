import React from 'react';
import styledComponents from 'styled-components';

import TechCard from './TechCard';
import Projects from './Projects';
import technologies from '../utils/technologies';
import ResumeAndCertifications from './ResumeAndCertifications';

const Container = styledComponents.div`
    z-index: 1;
    margin: 1.5em 10px;

`;

const Left = styledComponents.div`
    
`;
const Right = styledComponents.div``;
const Top = styledComponents.div``;
const Down = styledComponents.div`
    margin: 4em 0 0;
`;
const Subtitle = styledComponents.h2`
  margin: 2em 0;
`;

function Main() {
  return (
    <Container>
      <Left>
        <Subtitle>Technologies</Subtitle>
        {technologies.map((tech, i) => (
          <TechCard tech={tech} i={i} />
        ))}
      </Left>
      <Right>
        <Top>
          <Projects />
        </Top>
        <Down>
          <ResumeAndCertifications />
        </Down>
      </Right>
    </Container>
  );
}

export default Main;
