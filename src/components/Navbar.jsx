import React from 'react';
import styledComponents from 'styled-components';

const Container = styledComponents.nav`
    display: flex;
    align-items: center;
    justify-content:center;
`;

const Title = styledComponents.h2`
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 5px 0;

    @media (min-width: 740px ){
        font-size: 2.1em;
    }

`;

export default function Navbar() {
  return (
    <Container>
      <Title>NerdRoots.</Title>
    </Container>
  );
}
