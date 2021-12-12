import React from 'react'
import styledComponents from 'styled-components';

import TechCard from './TechCard';
import Projects from './Projects';
import technologies from '../utils/technologies';


const Container = styledComponents.div`
    border-top: 1px black solid;
    z-index: 1;
    padding: 0 10px;
    margin-bottom: 3em;
`;

const Left = styledComponents.div`
    
`;
const Right = styledComponents.div``;
const Top = styledComponents.div``;
const Down = styledComponents.div``;
const Subtitle = styledComponents.h2``;

function Main() {
    return (
        <Container>
            <Left>
                <Subtitle>Technologies</Subtitle>
                {technologies.map((tech, i) => <TechCard tech={tech} i={i} /> )}
            </Left>
            <Right>
                <Top>
                    <Projects/>      
                </Top>
                <Down></Down>
            </Right>
        </Container>
    )
}

export default Main
