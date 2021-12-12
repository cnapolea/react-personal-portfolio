import {React, useState} from 'react'
import styledComponents from 'styled-components';
import Collapse from '@mui/material/Collapse';

const Slide = styledComponents.div`
    position: relative;
`;

const Banner = styledComponents.div`
    position: relative;
    margin-top: 10px;
`;

const ProjectLink = styledComponents.a`
    text-decoration: none;
    color: #000;
    font-weight: 510;
    font-size: 17px;
    margin-left: 10px;
`;

const ProjectImg = styledComponents.img`
    width:100%;
    height: 15em;
`;

const SeeMore = styledComponents.span`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 9px 15px 0px;
    background: #0000007a;
    color: white;
    padding: 5px 10px;
    border-radius: 16px;
`;

const DescriptionContainer = styledComponents.div``;

const Description = styledComponents.p``;

// const Curtain = styledComponents.div`
//     width: 100%;
//     height: 15em;
//     background: #80808051;
//     position: absolute;
// `;


function ProjectCarousel({key, link, name, img, description}) {
    
    const [seeMoreClicked, setSeeMoreClicked] = useState(false);

    return (
        
            <Slide key={key}>
                <ProjectLink href={link}>{name}</ProjectLink>
                <Banner>
                    {/* <Curtain></Curtain> */}
                    <SeeMore onClick={()=>{setSeeMoreClicked((prev)=> !prev)}}>{seeMoreClicked?'See Less':'See More'}</SeeMore>
                    <ProjectImg src={img} alt={name}/>
                </Banner>
                <Collapse in={seeMoreClicked}>
                    <DescriptionContainer>
                        <Description>
                            {description}
                        </Description>
                        
                    </DescriptionContainer>
                </Collapse>
                
            </Slide>
        
    )
}

export default ProjectCarousel
