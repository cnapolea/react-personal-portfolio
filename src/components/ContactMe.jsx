import React from 'react';
import styledComponents from 'styled-components';
import ContactMeForm from './ContactMeForm';

const Container = styledComponents.div``;

function ContactMe() {
  return (
    <Container>
      <ContactMeForm />
    </Container>
  );
}

export default ContactMe;
