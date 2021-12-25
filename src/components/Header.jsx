import React from 'react';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat',sans-serif;
    justify-content: flex-end;
    text-align: center;
    margin-top: 3em;
    height: 100vh;
    border-bottom: 1px solid #000;
`;

const Image = styledComponents.img`
    position: ${(props) => (props.hasPosition ? 'absolute' : 'relative')};
    
    &.backImage {
      width: 300px;
    };
    
    &.mainImage {
      width:350px;
    }
    @media (min-width: 360px ){
      &.backImage {
        width: 400px;
      };

      &.mainImage {
        width:450px;
      }
    }
    


`;
const TextContainer = styledComponents.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;    
    position: absolute;
    top: 5em;
    
    @media (min-width: 360px ){
      & {
        top: 10em;
      };
    }
    @media (min-width: 414px ){
      & {
        top: 13em;
      };
    }
`;
const MainHeaderText = styledComponents.h1`
    margin:0 10px;
    font-size: 30px;
`;
const SecondaryHeaderText = styledComponents.p`
    margin: 2em 10px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    padding: 0px ;
`;

function Header() {
  return (
    <Container>
      <TextContainer>
        <MainHeaderText>Welcome to my personal website,</MainHeaderText>
        <SecondaryHeaderText>
          You will be able to see some of my work and request for some work or
          hire me, if you feel like I am worthy. Enjoy!
        </SecondaryHeaderText>
      </TextContainer>
      <Image
        src="https://res.cloudinary.com/nerdroots/image/upload/v1640438384/bannerset2_iqr1rp_2_f13y5s.png"
        hasPosition={true}
        className="backImage"
      />
      <Image
        src="https://res.cloudinary.com/nerdroots/image/upload/v1639523936/IMG_2862_pzaick.png"
        hasPosition={true}
        className="mainImage"
      />
    </Container>
  );
}

export default Header;
