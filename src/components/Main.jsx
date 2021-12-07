import React from 'react'
import styledComponents from 'styled-components';
import TechCard from './TechCard';
import technologies from '../utils/technologies';


const Container = styledComponents.div`
    border-top: 1px black solid;
    z-index: 1;
`;
const Left = styledComponents.div`
    padding: 0 10px;
`;
const Right = styledComponents.div``;
const Top = styledComponents.div``;
const Down = styledComponents.div``;

function Main() {
    return (
        <Container>
            <Left>
                <h2>Technologies</h2>
                {technologies.map((tech, i) => <TechCard tech={tech} i={i} /> )}
            </Left>
            <Right>
                <Top></Top>
                <Down></Down>
            </Right>
        </Container>
    )
}

export default Main
