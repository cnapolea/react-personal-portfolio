import {React, useState} from 'react'
import styledComponents from 'styled-components';
import Collapse from '@mui/material/Collapse';



const Slide = styledComponents.div`
    position: relative;
    padding-top: 10px;
`;

const Banner = styledComponents.div`
    position: relative;
`;

const ProjectLink = styledComponents.a`
    text-decoration: none;
    color: #000;
    font-weight: 510;
    font-size: 17px;
    display: block;
    background: #d3a0a01c;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    padding: 10px 0 10px 10px;
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

const Description = styledComponents.p`
    padding: 15px;
    letter-spacing: 1px;
    margin: 0;
    background: #d3a0a01c;
    font-size: 15px;
    font-weight: 400;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
`;


function ProjectCarousel({key, link, name, img, description}) {
    
    const [seeMoreClicked, setSeeMoreClicked] = useState(false);

    return (
        
            <Slide key={key}>
                <ProjectLink href={link} target="_blank">{name}</ProjectLink>
                <Banner>
                    {/* <Curtain></Curtain> */}
                    <SeeMore onClick={()=>{setSeeMoreClicked((prev)=> !prev)}}>{seeMoreClicked?'See Less':'See More'}</SeeMore>
                    <ProjectImg src={img} alt={name}/>
                </Banner>
                <Collapse in={seeMoreClicked}>
                    <DescriptionContainer>
                        <Description>
                            {description} <br/><br/>
                            <a href={link} target="_blank">Visit Site</a>
                        </Description>
                    </DescriptionContainer>
                </Collapse>
                
            </Slide>
        
    )
}

export default ProjectCarousel
