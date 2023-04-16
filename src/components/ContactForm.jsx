import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';





const ContactForm = ({ variant }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendStatus, setSendStatus] = useState('not sent');

  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;



  const sendEmail = (e) => {
    e.preventDefault();
    setSendStatus('loading')

    emailjs.sendForm(serviceKey, templateKey, e.target, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setSendStatus('sent')
  };

  const styles = {
    contactSection: {
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '5em'
    },
    container: {
      display: 'flex',
      gap: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: ' 60%',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      gap: '1em',

    },
    col: {
      width: '100%',
    },

    colSpan2: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
      width: '100%',
    },
  };



  return (
    <div>
      <div className="carousel-heading">
        <h2>Contact <span>Me</span></h2>
      </div>
      <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 } }} onSubmit={sendEmail}>
        <div style={styles.contactSection}>
          <div style={styles.container}>
            <div style={styles.row}>

              <div style={styles.col}>
                <TextField
                  required
                  id="fullName"
                  label="Full Name"
                  name="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  variant={variant}
                  fullWidth
                  size="large"
                />
              </div>

              <div style={styles.col}>
                <TextField
                  required
                  id="email"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant={variant}
                  fullWidth
                  size="large"
                />
              </div>
            </div>
            <div style={styles.row}>
              <div style={styles.colSpan2}>
                <TextField
                  required
                  id="message"
                  label="Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={4}
                  variant={variant}
                  fullWidth
                  size="large"
                />

                {sendStatus === 'not sent' && (
                  <>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      color="primary"
                      type="submit"
                      style={{
                        marginLeft: '13px',
                        border: 'none',
                        color: '#000',
                        backgroundImage: 'linear-gradient(to right, #ffb347 0%, #ffcc33  100%)',
                        backgroundSize: '200% auto',
                      }}
                    >
                      Send Message
                    </Button>
                  </>

                )}

                {sendStatus === 'sent' && (
                  <>
                    <Button
                      variant="contained"
                      disabled
                      style={{
                        marginLeft: '13px',
                        border: 'none',
                        color: '#000',

                      }}
                    >
                      Message Sent
                    </Button>
                  </>

                )}
                {sendStatus === 'loading' && (
                  <>
                    <LoadingButton
                      variant="contained"
                      loadingPosition="start"
                      disabled
                      style={{
                        marginLeft: '13px',
                        border: 'none',
                        color: '#000',

                      }}
                    >
                      Sending Message
                    </LoadingButton>
                  </>

                )}

              </div>
            </div>

          </div>

        </div>



      </Box>
    </div>

  );
}

export default ContactForm;