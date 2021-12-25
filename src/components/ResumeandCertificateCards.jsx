import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CustomCard = styled(Card)(() => ({
  margin: '2em 0 0'
}));

function ResumeandCertificateCards({ imgUrl, title, description, link }) {
  return (
    <CustomCard>
      {/* <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt={`Cristiano's ${title}`}
      /> */}
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={link}>View and Download</a>
        </Button>
      </CardActions>
    </CustomCard>
  );
}

export default ResumeandCertificateCards;
