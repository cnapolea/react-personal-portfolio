import React from 'react';
import styledComponents from 'styled-components';

import ResumeandCertificateCards from './ResumeandCertificateCards';
import { resumeAndCertificates } from '../utils/resumeAndCertificates';

const Container = styledComponents.div``;
const Subtitle = styledComponents.h2`
    margin: 2em 0;
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
