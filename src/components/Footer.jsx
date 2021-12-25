import React from 'react';
import styledComponents from 'styled-components';

const Container = styledComponents.footer`
  background-color: #601397;
  color: #fff;
`;
const Subtitle = styledComponents.h2`
  margin: 1em 20px;
`;
const SocialsContainer = styledComponents.ul`
  list-style: none;
  padding:0;
  margin: 0 20px;
`;
const Social = styledComponents.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
`;
const SocialImg = styledComponents.img`
  width: 2em
`;
const SocialLink = styledComponents.a`
  text-decoration: none;
  color: #fff;
  margin-left: 15px
`;
const CopyRight = styledComponents.p`
  text-align: center;
`;

function Footer() {
  return (
    <Container>
      <Subtitle>Socials</Subtitle>
      <SocialsContainer>
        <Social>
          <SocialImg src="https://res.cloudinary.com/nerdroots/image/upload/v1640451597/instagram_3_pdbm6i.png" />
          <SocialLink href="/">Instagram</SocialLink>
        </Social>
        <Social>
          <SocialImg src="https://res.cloudinary.com/nerdroots/image/upload/v1640451700/github_1_lph7ch.png" />
          <SocialLink href="/">Github</SocialLink>
        </Social>
        <Social>
          <SocialImg src="https://res.cloudinary.com/nerdroots/image/upload/v1640451780/linkedin_wfzgvb.png" />
          <SocialLink href="/">Github</SocialLink>
        </Social>
      </SocialsContainer>
      <CopyRight>&copy; 2022 NerdRoots, LDA. All rights reserved. </CopyRight>
    </Container>
  );
}

export default Footer;
