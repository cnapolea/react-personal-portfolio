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
  width: '100%',

  '&. MuiOutlinedInput-input': {
    color: '#fff'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
      borderWidth: 3,
      padding: '4px !important'
    },
    '&:hover fieldset': {
      borderColor: 'purple'
    },
    '&.Mui-focused fieldset': {
      color: '#fff',
      borderColor: '#fff'
    }
  },
  '& label.Mui-focused': {
    color: '#fff',
    width: 500
  },
  '& .MuiInput-underline:after': {
    borderColor: '#fff'
  },
  '& label': {
    color: '#fff'
  }
}));

const CustomizedPaper = styled(Paper)(() => ({
  padding: '1.5em 1.3em',
  margin: '0 10px 1.5em',
  backgroundColor: 'rgb(71 12 147)'
}));

const CustomizedButton = styled(Button)(() => ({
  width: '65%',
  padding: 15,
  margin: '1.5em 0'
}));

const Subtitle = styledComponents.h2`
    margin: 1em 0 1.5em; 
    padding: 0;
    color: #fff;
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

    if (
      !formInputs.senderName ||
      !formInputs.senderEmail ||
      !formInputs.message
    ) {
      enqueueSnackbar('Fill all fields.', { variant: 'warning' });
    } else {
      try {
        emailjs.init(env.EMAILJS_USER_ID);
        const response = await emailjs.send(
          env.EMAILJS_SERVICE_ID,
          env.EMAILJS_TEMPLATE_ID,
          formInputs
        );
        response.status === 200 &&
          enqueueSnackbar('Email Sent.', { variant: 'success' });
        setFormInputs({});
      } catch (err) {
        enqueueSnackbar(err.message, {
          variant: 'error'
        });
      }
    }
  };

  return (
    <CustomizedPaper elevation={6}>
      <Subtitle>Let's Start Working Together</Subtitle>
      <Form>
        <CustomizedTextField
          id="name-input"
          type="text"
          label="Name"
          variant="outlined"
          name="senderName"
          onChange={handleFormInputs}
          autocomplete="off"
        />
        <CustomizedTextField
          id="email-input"
          type="text"
          label="Email"
          variant="outlined"
          name="senderEmail"
          onChange={handleFormInputs}
          autocomplete="off"
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
          color="secondary"
        >
          Send
        </CustomizedButton>
      </Form>
    </CustomizedPaper>
  );
}

export default ContactMeForm;
