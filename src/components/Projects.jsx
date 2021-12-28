import React from 'react';
import styledComponents from 'styled-components';
import Slider from 'react-slick';
import projects from '../utils/projects';
import ProjectCarousel from './ProjectCarousel';

const Container = styledComponents.div`
    position: relative;

    .slick-slider {
        margin-bottom: 1em;
    };
    
    .slick-dots {
      bottom: -40px;
      @media (min-width: 740px){
    
        font-size: 15px;
      }

    }
`;
const Subtitle = styledComponents.h2`
  margin: 2em 0;
  
`;

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 800 ? 3 : 1,
    slidesToScroll: 1,
    arrows: window.innerWidth > 700
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
