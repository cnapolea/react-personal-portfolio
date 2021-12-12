import React, { useState } from 'react';
import styledComponents from 'styled-components';
import Collapse from '@mui/material/Collapse';

const Container = styledComponents.div`
    display: flex;
    margin: 30px 0;
    align-items: center;
`;
const TechLogo = styledComponents.img`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`;
const TechInformation = styledComponents.div``;
const TechName = styledComponents.h3`
    margin: 0;
`;
const LibrariesAndFrameWorks = styledComponents.ul`
    display: flex;
    margin: 0;
    padding: 5px 0 0;
    list-style: none;
    justify-content: flex-start;

    li:not(:first-child) {
        margin-left: 10px;
    }
`;
const SubTech = styledComponents.li`
    
`;
const SeeMore = styledComponents.a`
    cursor: pointer;
`;

const AdditionalInformation = styledComponents.div``;
const Thoughts = styledComponents.p``;
const Projects = styledComponents.ul``;
const Project = styledComponents.li``;

function TechCard({tech, i}) {
    const [seeMoreClicked, setSeeMoreClicked] = useState(false);

    return ( 
            <Container key={i}>
                <TechLogo src={tech.logoSrc}/>
                <TechInformation>
                    <TechName>{tech.name}</TechName>
                    <Collapse in={seeMoreClicked}>
                    <AdditionalInformation>
                        {tech.frameworks && <LibrariesAndFrameWorks>
                            {tech.frameworks.map((subTech, i) => {
                                return (<SubTech key={i}>{subTech}</SubTech>)
                            })}
                        </LibrariesAndFrameWorks>}
                        <Thoughts>{tech.personalThoughts}</Thoughts>
                        <Projects></Projects>
                    </AdditionalInformation>
                    </Collapse>
                    
                    <SeeMore onClick={() => setSeeMoreClicked((prev) => !prev)}>{seeMoreClicked?'See Less':'See More'}</SeeMore>
                </TechInformation>
            </Container>
    )
    
    
}

export default TechCard
