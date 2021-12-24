import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import styledComponents from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import { styled } from '@mui/system';
import env from 'react-dotenv';

import emailjs from 'emailjs-com';

const Form = styledComponents.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CustomizedTextField = styled(TextField)(() => ({
  marginBottom: '1em',
  borderColor: 'purple',
  width: '100%'
}));

const CustomizedPaper = styled(Paper)(() => ({
  padding: '1em'
}));

const CustomizedButton = styled(Button)(() => ({
  width: '50%'
}));

const Subtitle = styledComponents.h2`
    margin: 0 0 1em; padding: 0;
`;

function ContactMeForm() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [formInputs, setFormInputs] = useState({});

  const handleFormInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormInputs((prev) => ({
      [name]: value,
      ...prev
    }));
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    try {
      emailjs.init(env.EMAILJS_USER_ID);
      const response = await emailjs.send(
        'service_8fwipd8',
        'template_0wtj7zf',
        formInputs
      );
      response.status === 200 &&
        enqueueSnackbar('Email Sent.', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err.message, {
        variant: 'error'
      });
    }
  };

  return (
    <CustomizedPaper elevation={6}>
      <Subtitle>Contact Me</Subtitle>
      <Form>
        <CustomizedTextField
          id="name-input"
          type="text"
          label="Name"
          variant="outlined"
          name="senderName"
          onChange={handleFormInputs}
        />
        <CustomizedTextField
          id="email-input"
          type="text"
          label="Email"
          variant="outlined"
          name="senderEmail"
          onChange={handleFormInputs}
        />
        <CustomizedTextField
          id="message-input"
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={5}
          onChange={handleFormInputs}
        />
        <CustomizedButton
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleFormSubmission}
        >
          Send
        </CustomizedButton>
      </Form>
    </CustomizedPaper>
  );
}

export default ContactMeForm;
