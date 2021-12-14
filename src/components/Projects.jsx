import React from 'react';
import styledComponents from 'styled-components';
import Slider from 'react-slick';
import projects from '../utils/projects';
import ProjectCarousel from './ProjectCarousel';

const Container = styledComponents.div`
    position: relative;

    .slick-slider {
        margin-bottom: 1em;
    }
`;
const Subtitle = styledComponents.h2`

`;

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Container>
      <Subtitle>Projects</Subtitle>
      <Slider {...settings}>
        {projects.map((project, i) => (
          <ProjectCarousel {...project} key={i} />
        ))}
      </Slider>
    </Container>
  );
}

export default Projects;
