import React from 'react';
import styledComponents from 'styled-components';

import ResumeandCertificateCards from './ResumeandCertificateCards';
import { resumeAndCertificates } from '../utils/resumeAndCertificates';

const Container = styledComponents.div``;
const Subtitle = styledComponents.h2`
    margin: 4em 0 2em;
`;

function ResumeAndCertifications() {
  return (
    <Container>
      <Subtitle>Resume And Certificates</Subtitle>

      {resumeAndCertificates.map((item, i) => (
        <ResumeandCertificateCards key={i} {...item} />
      ))}
    </Container>
  );
}

export default ResumeAndCertifications;
