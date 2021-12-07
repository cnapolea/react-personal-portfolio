import React from 'react'
import styledComponents from 'styled-components';



const Container = styledComponents.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat',sans-serif;
    justify-content: center;
    text-align: center;
    margin-top: 3em;
    
`;

const Image = styledComponents.img`
    position: ${props => props.hasPosition?'absolute':'relative'};
    border-radius: 50%;

`;
const TextContainer = styledComponents.div`
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;    
`;
const MainHeaderText = styledComponents.h1`
    margin:0;
`;
const SecondaryHeaderText = styledComponents.p`
    margin: 1em 0;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
    padding: 0px 20px;
`;

function Header() {
    return (
        <Container>
            <Image src='https://res.cloudinary.com/nerdroots/image/upload/v1638403086/bannerset2_iqr1rp.svg' hasPosition={true} width={1120} style={{top:'4em'}}/>
            <Image src='https://res.cloudinary.com/nerdroots/image/upload/v1638396828/profile-picture-transparent_pdrow5.png' width={240}/>

            <TextContainer>
                <MainHeaderText>
                    Hi There,
                </MainHeaderText>
                <SecondaryHeaderText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, est.
                </SecondaryHeaderText>
            </TextContainer>
        </Container>
    )
}

export default Header
